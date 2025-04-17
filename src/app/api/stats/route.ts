import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const [totalEvents, pendingEvents, totalAffiliates, recentEvents] =
      await Promise.all([
        prisma.event.count(),
        prisma.event.count({
          where: {
            status: "Pendente",
          },
        }),
        prisma.affiliate.count(),
        prisma.event.findMany({
          where: {
            createdAt: {
              gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        }),
      ]);

    // Calcular variação percentual dos eventos
    const lastMonthEvents = recentEvents.length;
    const previousMonthEvents = await prisma.event.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 2)),
          lt: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    });

    const eventVariation = previousMonthEvents
      ? ((lastMonthEvents - previousMonthEvents) / previousMonthEvents) * 100
      : 0;

    // Calcular variação percentual dos associados
    const lastMonthAffiliates = await prisma.affiliate.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    });

    const previousMonthAffiliates = await prisma.affiliate.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 2)),
          lt: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    });

    const affiliateVariation = previousMonthAffiliates
      ? ((lastMonthAffiliates - previousMonthAffiliates) /
          previousMonthAffiliates) *
        100
      : 0;

    return NextResponse.json({
      totalEvents,
      pendingEvents,
      totalAffiliates,
      eventVariation: Math.round(eventVariation * 10) / 10,
      affiliateVariation: Math.round(affiliateVariation * 10) / 10,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Erro ao buscar estatísticas" },
      { status: 500 },
    );
  }
}

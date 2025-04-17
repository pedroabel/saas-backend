import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");
    const skip = (page - 1) * pageSize;

    const [events, total] = await Promise.all([
      prisma.event.findMany({
        include: {
          affiliate: true,
          report: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: pageSize,
      }),
      prisma.event.count(),
    ]);

    const formattedEvents = events.map((event) => ({
      id: event.id,
      event: event.protocol,
      type: event.type,
      status: event.status, // You might want to add a status field to your Event model
      affiliate: event.affiliate.fullName,
      date: event.createdAt.toLocaleDateString("pt-BR"),
    }));

    return NextResponse.json({
      data: formattedEvents,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Erro ao buscar eventos" },
      { status: 500 },
    );
  }
}

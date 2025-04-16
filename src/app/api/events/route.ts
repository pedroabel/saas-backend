import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      include: {
        affiliate: true,
        report: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const formattedEvents = events.map((event) => ({
      id: event.id,
      event: event.protocol,
      type: event.type,
      status: "Concluído", // You might want to add a status field to your Event model
      affiliate: event.affiliate.fullName,
      date: event.createdAt.toLocaleDateString("pt-BR"),
    }));

    return NextResponse.json(formattedEvents);
  } catch (error) {
    console.error("Error fetching events:", error);
    return NextResponse.json(
      { error: "Erro ao buscar eventos" },
      { status: 500 },
    );
  }
}

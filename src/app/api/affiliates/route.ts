import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = parseInt(searchParams.get("pageSize") || "10");
    const skip = (page - 1) * pageSize;

    const [affiliates, total] = await Promise.all([
      prisma.affiliate.findMany({
        orderBy: {
          createdAt: "desc",
        },
        skip,
        take: pageSize,
      }),
      prisma.affiliate.count(),
    ]);

    const formattedAffiliates = affiliates.map((affiliate) => ({
      id: affiliate.id,
      affiliate: affiliate.fullName,
      email: affiliate.email,
      telefone: affiliate.phone,
      cpf: affiliate.cpf,
      date: affiliate.createdAt.toLocaleDateString("pt-BR"),
    }));

    return NextResponse.json({
      data: formattedAffiliates,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error("Error fetching affiliates:", error);
    return NextResponse.json(
      { error: "Erro ao buscar associados" },
      { status: 500 },
    );
  }
}

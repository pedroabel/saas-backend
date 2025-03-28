import { NextResponse } from "next/server";
import { createForm } from "@/models/form";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Salva os dados no banco de dados
    const user = await createForm(data);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Erro ao criar usuário" },
      { status: 500 },
    );
  }
}

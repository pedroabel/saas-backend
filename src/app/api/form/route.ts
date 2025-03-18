import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();

  try {
    // Criação do usuário
    const user = await prisma.affiliate.create({
      data: {
        fullName: data.fullName,
        phone: data.phone,
        email: data.email,
        rg: data.rg,
        cpf: data.cpf,
        cnh: data.cnh,
        cnhCategory: data.cnhCategory,
        cnhExpirationDate: data.cnhExpirationDate,
        addresses: {
          create: {
            address: data.address,
            city: data.city,
            state: data.state,
            zipCode: data.zipCode,
          },
        },
        accounts: {
          create: {
            username: data.username,
            password: data.password, // Certifique-se de hash a senha antes de armazená-la
          },
        },
        events: {
          create: {
            eventLocation: data.eventLocation,
            eventName: data.eventName,
            eventType: data.eventType,
          },
        },
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Erro ao criar usuário" },
      { status: 500 }
    );
  }
}

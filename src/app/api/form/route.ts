import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();

  try {
    // Criação do usuário
    const user = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
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
      { status: 500 },
    );
  }
}

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();
  console.log(data);
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
        vehicle: {
          create: {
            brand: data.brand,
            model: data.model,
            licensePlate: data.licensePlate,
            color: data.color,
            chassiss: data.chassiss,
            yearModel: data.yearModel,
            fipeValue: data.fipeValue,
            fuelType: data.fuelType,
          },
        },
        event: {
          create: {
            protocol: data.protocol,
            type: data.type,
            location: data.location,
            policeReportNumber: data.policeReportNumber,
            hasThirdParty: data.hasThirdParty,
            thirdPartyEmail: data.thirdPartyEmail,
            thirdPartyPhone: data.thirdPartyPhone,
            driver: data.driver,
            report: {
              create: {
                description: data.description,
                apparentDamage: data.apparentDamage,
                vehiclePhotos: Array.isArray(data.vehiclePhotos)
                  ? data.vehiclePhotos
                  : [],
                vehicleVideo: data.vehicleVideo,
              },
            },
          },
        },
        address: {
          create: {
            address: data.address,
            city: data.city,
            state: data.state,
            zipCode: data.zipCode,
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

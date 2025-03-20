import prisma from "@/lib/prisma";

export async function createForm(data: any) {
  return await prisma.affiliate.create({
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
              vehiclePhotos: data.vehiclePhotos || [], // URLs das imagens
              vehicleVideo: data.vehicleVideo || "",
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
}

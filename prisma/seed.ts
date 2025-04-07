import { prisma } from "@/lib/prisma";

async function seed() {
  await prisma.affiliate.create({
    data: {
      fullName: "Carlos Henrique Silva",
      phone: "11991234567",
      email: "carlos.silva@email.com",
      cpf: "12345678901",
      cnhFile: ["https://docs.com/cnh/carlos"],
      personalDocument: ["https://docs.com/doc/carlos"],
      proofAddress: "https://docs.com/address/carlos",
      address: {
        create: {
          address: "Rua das Flores, 123",
          city: "São Paulo",
          state: "SP",
          zipCode: "01001-000",
        },
      },
      vehicle: {
        create: {
          brand: "Volkswagen",
          model: "Gol",
          licensePlate: "ABC-1234",
          color: "Prata",
          chassis: "9BWZZZ377VT004251",
          yearModel: "2022",
          fipeValue: "35000",
          fuelType: "Flex",
        },
      },
      event: {
        create: {
          protocol: "PRT001",
          type: "Colisão traseira",
          location: "Av. Paulista, 1000",
          policeReportNumber: "BO123456",
          hasThirdParty: "Sim",
          thirdPartyEmail: "vitima1@email.com",
          thirdPartyPhone: "11987654321",
          driver: "Carlos Henrique",
          createdAt: new Date(),
          updatedAt: new Date(),
          report: {
            create: {
              description: "Colisão traseira em semáforo.",
              apparentDamage: "Para-choque amassado",
              vehiclePhotos: [
                "https://fotos.com/car1/foto1.jpg",
                "https://fotos.com/car1/foto2.jpg",
              ],
              reportVideo: "https://videos.com/car1/video.mp4",
            },
          },
        },
      },
    },
  });

  await prisma.affiliate.create({
    data: {
      fullName: "Ana Beatriz Ramos",
      phone: "11991112222",
      email: "ana.ramos@email.com",
      cpf: "12345678902",
      cnhFile: ["https://docs.com/cnh/ana"],
      personalDocument: ["https://docs.com/doc/ana"],
      proofAddress: "https://docs.com/address/ana",
      address: {
        create: {
          address: "Rua da Liberdade, 456",
          city: "Campinas",
          state: "SP",
          zipCode: "13025-000",
        },
      },
      vehicle: {
        create: {
          brand: "Chevrolet",
          model: "Onix",
          licensePlate: "DEF-5678",
          color: "Preto",
          chassis: "9BGKS19Z0DB123456",
          yearModel: "2021",
          fipeValue: "48000",
          fuelType: "Gasolina",
        },
      },
      event: {
        create: {
          protocol: "PRT002",
          type: "Batida lateral",
          location: "Rua Barão de Jaguara, 789",
          policeReportNumber: "BO654321",
          hasThirdParty: "false",
          thirdPartyEmail: "null",
          thirdPartyPhone: "null",
          driver: "Ana Beatriz",
          createdAt: new Date(),
          updatedAt: new Date(),
          report: {
            create: {
              description: "Outro carro invadiu a faixa.",
              apparentDamage: "Porta lateral danificada",
              vehiclePhotos: [
                "https://fotos.com/car2/foto1.jpg",
                "https://fotos.com/car2/foto2.jpg",
              ],
              reportVideo: "https://videos.com/car2/video.mp4",
            },
          },
        },
      },
    },
  });

  await prisma.affiliate.create({
    data: {
      fullName: "Roberto Lima",
      phone: "11992345678",
      email: "roberto.lima@email.com",
      cpf: "12345678903",
      cnhFile: ["https://docs.com/cnh/roberto"],
      personalDocument: ["https://docs.com/doc/roberto"],
      proofAddress: "https://docs.com/address/roberto",
      address: {
        create: {
          address: "Av. Brasil, 2000",
          city: "Rio de Janeiro",
          state: "RJ",
          zipCode: "22040-002",
        },
      },
      vehicle: {
        create: {
          brand: "Honda",
          model: "Civic",
          licensePlate: "GHI-9012",
          color: "Cinza",
          chassis: "93HFB2760DZ123456",
          yearModel: "2020",
          fipeValue: "78000",
          fuelType: "Flex",
        },
      },
      event: {
        create: {
          protocol: "PRT003",
          type: "Capotamento",
          location: "Linha Amarela, sentido Barra",
          policeReportNumber: "BO222333",
          hasThirdParty: "false",
          thirdPartyEmail: "null",
          thirdPartyPhone: "null",
          driver: "Roberto Lima",
          createdAt: new Date(),
          updatedAt: new Date(),
          report: {
            create: {
              description: "Perda de controle do veículo.",
              apparentDamage: "Danos graves em toda a lataria",
              vehiclePhotos: ["https://fotos.com/car3/foto1.jpg"],
              reportVideo: "https://videos.com/car3/video.mp4",
            },
          },
        },
      },
    },
  });

  await prisma.affiliate.create({
    data: {
      fullName: "Juliana Carvalho",
      phone: "11993334455",
      email: "juliana.carvalho@email.com",
      cpf: "12345678904",
      cnhFile: ["https://docs.com/cnh/juliana"],
      personalDocument: ["https://docs.com/doc/juliana"],
      proofAddress: "https://docs.com/address/juliana",
      address: {
        create: {
          address: "Rua dos Ipês, 45",
          city: "Belo Horizonte",
          state: "MG",
          zipCode: "30110-060",
        },
      },
      vehicle: {
        create: {
          brand: "Ford",
          model: "Ka",
          licensePlate: "JKL-3456",
          color: "Branco",
          chassis: "9BFZF55P0GX123456",
          yearModel: "2019",
          fipeValue: "29000",
          fuelType: "Flex",
        },
      },
      event: {
        create: {
          protocol: "PRT004",
          type: "Atropelamento",
          location: "Av. Afonso Pena",
          policeReportNumber: "BO876543",
          hasThirdParty: "true",
          thirdPartyEmail: "pedestre@email.com",
          thirdPartyPhone: "11999887766",
          driver: "Juliana Carvalho",
          createdAt: new Date(),
          updatedAt: new Date(),
          report: {
            create: {
              description: "Atropelamento leve em faixa de pedestres.",
              apparentDamage: "Nenhum dano no veículo",
              vehiclePhotos: [],
              reportVideo: "",
            },
          },
        },
      },
    },
  });

  await prisma.affiliate.create({
    data: {
      fullName: "Carlos Silva",
      phone: "11998887766",
      email: "carlos.silva@email.com",
      cpf: "98765432100",
      cnhFile: ["https://docs.com/cnh/carlos"],
      personalDocument: ["https://docs.com/doc/carlos"],
      proofAddress: "https://docs.com/address/carlos",
      address: {
        create: {
          address: "Av. Paulista, 1578",
          city: "São Paulo",
          state: "SP",
          zipCode: "01310-200",
        },
      },
      vehicle: {
        create: {
          brand: "Volkswagen",
          model: "Gol",
          licensePlate: "SPX-8899",
          color: "Prata",
          chassis: "9BWZZZ377VT123456",
          yearModel: "2020",
          fipeValue: "32000",
          fuelType: "Gasolina",
        },
      },
      event: {
        create: {
          protocol: "PRT005",
          type: "Colisão traseira",
          location: "Rua da Consolação",
          policeReportNumber: "BO123456",
          hasThirdParty: "false",
          thirdPartyEmail: "null",
          thirdPartyPhone: "null",
          driver: "Carlos Silva",
          createdAt: new Date(),
          updatedAt: new Date(),
          report: {
            create: {
              description: "Veículo colidido na traseira em congestionamento.",
              apparentDamage: "Amassado no para-choque traseiro",
              vehiclePhotos: [],
              reportVideo: "",
            },
          },
        },
      },
    },
  });

  await prisma.affiliate.create({
    data: {
      fullName: "Mariana Rocha",
      phone: "21987654321",
      email: "mariana.rocha@email.com",
      cpf: "32165498701",
      cnhFile: ["https://docs.com/cnh/mariana"],
      personalDocument: ["https://docs.com/doc/mariana"],
      proofAddress: "https://docs.com/address/mariana",
      address: {
        create: {
          address: "Rua das Laranjeiras, 200",
          city: "Rio de Janeiro",
          state: "RJ",
          zipCode: "22240-003",
        },
      },
      vehicle: {
        create: {
          brand: "Hyundai",
          model: "HB20",
          licensePlate: "RIO-2025",
          color: "Preto",
          chassis: "9BHBG41DBEP123456",
          yearModel: "2021",
          fipeValue: "45000",
          fuelType: "Flex",
        },
      },
      event: {
        create: {
          protocol: "PRT006",
          type: "Batida lateral",
          location: "Túnel Rebouças",
          policeReportNumber: "BO654321",
          hasThirdParty: "true",
          thirdPartyEmail: "motorista@email.com",
          thirdPartyPhone: "21999887766",
          driver: "Mariana Rocha",
          createdAt: new Date(),
          updatedAt: new Date(),
          report: {
            create: {
              description: "Colisão lateral ao trocar de faixa.",
              apparentDamage: "Arranhões na porta esquerda",
              vehiclePhotos: [],
              reportVideo: "",
            },
          },
        },
      },
    },
  });

  await prisma.affiliate.create({
    data: {
      fullName: "Felipe Andrade",
      phone: "31991234567",
      email: "felipe.andrade@email.com",
      cpf: "45612378900",
      cnhFile: ["https://docs.com/cnh/felipe"],
      personalDocument: ["https://docs.com/doc/felipe"],
      proofAddress: "https://docs.com/address/felipe",
      address: {
        create: {
          address: "Rua do Ouro, 89",
          city: "Belo Horizonte",
          state: "MG",
          zipCode: "30150-300",
        },
      },
      vehicle: {
        create: {
          brand: "Chevrolet",
          model: "Onix",
          licensePlate: "MGH-4321",
          color: "Vermelho",
          chassis: "9BGKS48U0EB123456",
          yearModel: "2018",
          fipeValue: "38000",
          fuelType: "Flex",
        },
      },
      event: {
        create: {
          protocol: "PRT007",
          type: "Capotamento",
          location: "Anel Rodoviário",
          policeReportNumber: "BO789123",
          hasThirdParty: "false",
          thirdPartyEmail: "null",
          thirdPartyPhone: "null",
          driver: "Felipe Andrade",
          createdAt: new Date(),
          updatedAt: new Date(),
          report: {
            create: {
              description:
                "Perda de controle em curva, resultando em capotamento.",
              apparentDamage: "Perda total",
              vehiclePhotos: [],
              reportVideo: "",
            },
          },
        },
      },
    },
  });

  await prisma.affiliate.create({
    data: {
      fullName: "Ana Beatriz Lima",
      phone: "61993335577",
      email: "ana.beatriz@email.com",
      cpf: "15975348620",
      cnhFile: ["https://docs.com/cnh/ana"],
      personalDocument: ["https://docs.com/doc/ana"],
      proofAddress: "https://docs.com/address/ana",
      address: {
        create: {
          address: "SQN 210, Bloco D",
          city: "Brasília",
          state: "DF",
          zipCode: "70862-040",
        },
      },
      vehicle: {
        create: {
          brand: "Renault",
          model: "KwID",
          licensePlate: "DFR-7854",
          color: "Cinza",
          chassis: "93YBBFABJHY123456",
          yearModel: "2022",
          fipeValue: "47000",
          fuelType: "Gasolina",
        },
      },
      event: {
        create: {
          protocol: "PRT008",
          type: "Batida frontal",
          location: "Eixão Sul",
          policeReportNumber: "BO000321",
          hasThirdParty: "true",
          thirdPartyEmail: "outro@email.com",
          thirdPartyPhone: "61998887766",
          driver: "Ana Beatriz Lima",
          createdAt: new Date(),
          updatedAt: new Date(),
          report: {
            create: {
              description: "Colisão frontal por falha no freio.",
              apparentDamage: "Capô amassado e faróis quebrados",
              vehiclePhotos: [],
              reportVideo: "",
            },
          },
        },
      },
    },
  });

  await prisma.affiliate.create({
    data: {
      fullName: "João Pedro Menezes",
      phone: "11991238877",
      email: "joao.menezes@email.com",
      cpf: "74185296300",
      cnhFile: ["https://docs.com/cnh/joao"],
      personalDocument: ["https://docs.com/doc/joao"],
      proofAddress: "https://docs.com/address/joao",
      address: {
        create: {
          address: "Rua das Palmeiras, 10",
          city: "Campinas",
          state: "SP",
          zipCode: "13026-300",
        },
      },
      vehicle: {
        create: {
          brand: "Toyota",
          model: "Corolla",
          licensePlate: "CPN-9988",
          color: "Azul",
          chassis: "9BRBLWHE1FP123456",
          yearModel: "2023",
          fipeValue: "110000",
          fuelType: "Híbrido",
        },
      },
      event: {
        create: {
          protocol: "PRT009",
          type: "Pane mecânica",
          location: "Rod. Anhanguera, km 92",
          policeReportNumber: "BO456987",
          hasThirdParty: "false",
          thirdPartyEmail: "null",
          thirdPartyPhone: "null",
          driver: "João Pedro Menezes",
          createdAt: new Date(),
          updatedAt: new Date(),
          report: {
            create: {
              description: "Veículo parou repentinamente em rodovia.",
              apparentDamage: "Sem danos visíveis",
              vehiclePhotos: [],
              reportVideo: "",
            },
          },
        },
      },
    },
  });

  await prisma.affiliate.create({
    data: {
      fullName: "Larissa Monteiro",
      phone: "11997776655",
      email: "larissa.monteiro@email.com",
      cpf: "85236974123",
      cnhFile: ["https://docs.com/cnh/larissa"],
      personalDocument: ["https://docs.com/doc/larissa"],
      proofAddress: "https://docs.com/address/larissa",
      address: {
        create: {
          address: "Alameda Santos, 745",
          city: "São Paulo",
          state: "SP",
          zipCode: "01419-001",
        },
      },
      vehicle: {
        create: {
          brand: "Honda",
          model: "Civic",
          licensePlate: "SPH-1122",
          color: "Cinza",
          chassis: "93HFB2680HZ123456",
          yearModel: "2020",
          fipeValue: "95000",
          fuelType: "Flex",
        },
      },
      event: {
        create: {
          protocol: "PRT010",
          type: "Tentativa de furto",
          location: "Estacionamento Shopping Morumbi",
          policeReportNumber: "BO102938",
          hasThirdParty: "false",
          thirdPartyEmail: "null",
          thirdPartyPhone: "null",
          driver: "Larissa Monteiro",
          createdAt: new Date(),
          updatedAt: new Date(),
          report: {
            create: {
              description:
                "Tentaram arrombar o carro no estacionamento, mas não conseguiram levar nada.",
              apparentDamage: "Trinca no vidro da janela lateral",
              vehiclePhotos: [],
              reportVideo: "",
            },
          },
        },
      },
    },
  });
}

seed().then(() => {
  console.log("Seeding completed");
  prisma.$disconnect();
});

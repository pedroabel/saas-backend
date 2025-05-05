import Head from "next/head";
import { SiteHeader } from "@/components/dashboard/layout/site-header";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

interface EventDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
  const resolvedParams = await params;
  const event = await prisma.event.findUnique({
    where: {
      id: resolvedParams.id,
    },
    include: {
      affiliate: {
        include: {
          address: true,
        },
      },
      report: true,
    },
  });

  if (!event) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>Sinpro - Detalhes do Evento</title>
      </Head>
      <SiteHeader
        title=""
        breadcrumbs={[
          { label: "Eventos", href: "/dashboard/eventos" },
          { label: `Evento: ${event.protocol}` },
        ]}
      />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
            <div className="rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">
                Informações do Evento
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Protocolo</p>
                  <p className="font-medium">{event.protocol}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Tipo</p>
                  <p className="font-medium">{event.type}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium">{event.status}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Data</p>
                  <p className="font-medium">
                    {new Date(event.createdAt).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Local</p>
                  <p className="font-medium">{event.location}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">BO</p>
                  <p className="font-medium">{event.policeReportNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Motorista</p>
                  <p className="font-medium">{event.driver}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Possui Terceiro
                  </p>
                  <p className="font-medium">{event.hasThirdParty}</p>
                </div>
                {event.hasThirdParty === "Sim" && (
                  <>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Email do Terceiro
                      </p>
                      <p className="font-medium">{event.thirdPartyEmail}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Telefone do Terceiro
                      </p>
                      <p className="font-medium">{event.thirdPartyPhone}</p>
                    </div>
                  </>
                )}
              </div>
            </div>

            {event.affiliate && (
              <div className="rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Informações do Associado
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Nome</p>
                    <p className="font-medium">{event.affiliate.fullName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telefone</p>
                    <p className="font-medium">{event.affiliate.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{event.affiliate.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">CPF</p>
                    <p className="font-medium">{event.affiliate.cpf}</p>
                  </div>
                  {event.affiliate.address &&
                    event.affiliate.address.length > 0 && (
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Endereço
                        </p>
                        <p className="font-medium">
                          {event.affiliate.address[0].address},{" "}
                          {event.affiliate.address[0].city} -{" "}
                          {event.affiliate.address[0].state}
                        </p>
                      </div>
                    )}
                </div>
              </div>
            )}

            {event.report && event.report.length > 0 && (
              <div className="rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">Relatório</h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Descrição</p>
                    <p className="font-medium">{event.report[0].description}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Danos Aparentes
                    </p>
                    <p className="font-medium">
                      {event.report[0].apparentDamage}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

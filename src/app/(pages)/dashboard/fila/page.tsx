import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { EventCard } from "@/components/dashboard/cards/event-queue-card";
import Head from "next/head";
import { SiteHeader } from "@/components/dashboard/layout/site-header";

export default async function MailPage() {
  return (
    <>
      <Head>
        <title>Sinpro - Fila</title>
      </Head>
      <SiteHeader
        title=""
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Fila" },
        ]}
      />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
              <Tabs defaultValue="pendente" className="">
                <TabsList className="grid grid-cols-4 w-[450px]">
                  <TabsTrigger value="pendente">Pendente</TabsTrigger>
                  <TabsTrigger value="analise">Em analise</TabsTrigger>
                  <TabsTrigger value="andamento">Andamento</TabsTrigger>
                  <TabsTrigger value="fila">Concluído</TabsTrigger>
                </TabsList>
                <TabsContent value="pendente" className="grid gap-5">
                  <EventCard
                    eventId="20250212012"
                    type="Incêndio"
                    reporter="Pedro Augusto da Silva Abel"
                    lastUpdate="14 Mai, 14:45"
                    priority="Alta"
                    status="Pendente"
                    date="09:30 - Segunda, 16 Abr 2024"
                    officer="Capitão Silva"
                    message="Relatório inicial: Incêndio no estacionamento em prédio comercial. Equipe de bombeiros no local. Necessidade de suporte adicional."
                    messageTime="Ontem às 10:30"
                  />

                  <EventCard
                    eventId="20250212012"
                    type="Furto"
                    reporter="João da Silva"
                    lastUpdate="14 Mai, 14:45"
                    priority="Média"
                    status="Pendente"
                    date="09:30 - Segunda, 16 Abr 2024"
                    officer="Sargento Oliveira"
                    message="Relatório inicial: Furto de veículo estacionado em via pública. Modelo: Gol 2020, cor prata. Câmeras de segurança disponíveis."
                    messageTime="Ontem às 10:30"
                  />

                  <EventCard
                    eventId="20250212013"
                    type="Roubo"
                    reporter="Maria Santos"
                    lastUpdate="14 Mai, 15:30"
                    priority="Alta"
                    status="Pendente"
                    date="09:30 - Segunda, 16 Abr 2024"
                    officer="Capitão Costa"
                    message="Relatório inicial: Roubo a estabelecimento comercial. Suspeitos armados, vítimas em estado de choque. Necessidade de apoio psicológico."
                    messageTime="Ontem às 10:30"
                  />

                  <EventCard
                    eventId="20250212014"
                    type="Colisão"
                    reporter="Carlos Mendes"
                    lastUpdate="14 Mai, 16:15"
                    priority="Alta"
                    status="Pendente"
                    date="09:30 - Segunda, 16 Abr 2024"
                    officer="Tenente Almeida"
                    message="Relatório inicial: Colisão entre três veículos na avenida principal. Vítimas presas nas ferragens. Necessidade de resgate."
                    messageTime="Ontem às 10:30"
                  />

                  <EventCard
                    eventId="20250212015"
                    type="Alagamento"
                    reporter="Ana Pereira"
                    lastUpdate="14 Mai, 17:00"
                    priority="Alta"
                    status="Pendente"
                    date="09:30 - Segunda, 16 Abr 2024"
                    officer="Major Santos"
                    message="Relatório inicial: Alagamento em área residencial. Nível da água em 1.5m. Famílias necessitando de resgate. Risco de desabamento."
                    messageTime="Ontem às 10:30"
                  />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

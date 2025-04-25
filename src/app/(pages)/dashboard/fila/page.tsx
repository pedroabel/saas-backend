import { SiteHeader } from "@/components/dashboard/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconCarCrash,
  IconDroplet,
  IconEyeOff,
  IconFlame,
  IconScanEye,
} from "@tabler/icons-react";
import { Calendar, Clock, MoreHorizontal, User } from "lucide-react";
import Head from "next/head";

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
                  <Card className="w-full p-0 shadow-sm">
                    <CardContent className="p-0">
                      {/* Top section */}
                      <div className="p-4 flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="bg-red-50 rounded-full p-2 mt-1">
                            <IconFlame className="h-4 w-4 text-red-500" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">
                              Evento: 20250212012
                            </h3>
                            <div className="text-sm text-gray-500 flex items-center gap-2">
                              <span>Incêndio</span>
                              <span>•</span>
                              <span>Pedro Augusto da Silva Abel</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              <span>Última atualização: 14 Mai, 14:45</span>
                              <span className="mx-2">•</span>
                              <span>Prioridade Alta</span>
                              <Badge className="ml-2" variant="secondary">
                                Pendente
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 rounded-md"
                          >
                            Ver Evento
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Gray message card aligned with text */}
                      <div className="pl-14 pr-4">
                        <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
                          <div className="text-xs text-gray-500 mb-1">
                            Ontem às 10:30
                          </div>
                          <p>
                            Relatório inicial: Incêndio no estacionamento em
                            prédio comercial. Equipe de bombeiros no local.
                            Necessidade de suporte adicional.
                          </p>
                        </div>
                      </div>
                    </CardContent>

                    {/* Footer section */}
                    <CardFooter className="p-4  border-t">
                      <div className="flex items-center gap-3 text-sm text-gray-600 w-full">
                        <div className="bg-blue-50 rounded-md p-1">
                          <Calendar className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-500">
                            09:30 - Segunda, 16 Abr 2024
                          </span>
                          <span className="mx-1">•</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 text-gray-500" />
                          <span className="text-gray-500">Capitão Silva</span>
                          <span className="mx-1">•</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-500" />
                          <span className="text-gray-500">Em atendimento</span>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-gray-400"
                            >
                              <path
                                d="M7 17L17 7M7 7H17V17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <MoreHorizontal className="h-4 w-4 text-gray-400" />
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>

                  <Card className="w-full p-0 shadow-sm">
                    <CardContent className="p-0">
                      {/* Top section */}
                      <div className="p-4 flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="bg-zinc-50 rounded-full p-2 mt-1">
                            <IconEyeOff className="h-4 w-4 text-zinc-500" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">
                              Evento: 20250212012
                            </h3>
                            <div className="text-sm text-gray-500 flex items-center gap-2">
                              <span>Furto</span>
                              <span>•</span>
                              <span>João da Silva</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              <span>Última atualização: 14 Mai, 14:45</span>
                              <span className="mx-2">•</span>
                              <span>Prioridade Média</span>
                              <Badge className="ml-2" variant="secondary">
                                Pendente
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 rounded-md"
                          >
                            Ver Evento
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Gray message card aligned with text */}
                      <div className="pl-14 pr-4">
                        <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
                          <div className="text-xs text-gray-500 mb-1">
                            Ontem às 10:30
                          </div>
                          <p>
                            Relatório inicial: Furto de veículo estacionado em
                            via pública. Modelo: Gol 2020, cor prata. Câmeras de
                            segurança disponíveis.
                          </p>
                        </div>
                      </div>
                    </CardContent>

                    {/* Footer section */}
                    <CardFooter className="p-4 border-t">
                      <div className="flex items-center gap-3 text-sm text-gray-600 w-full">
                        <div className="bg-blue-50 rounded-md p-1">
                          <Calendar className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-500">
                            09:30 - Segunda, 16 Abr 2024
                          </span>
                          <span className="mx-1">•</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 text-gray-500" />
                          <span className="text-gray-500">
                            Sargento Oliveira
                          </span>
                          <span className="mx-1">•</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-500" />
                          <span className="text-gray-500">Em atendimento</span>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-gray-400"
                            >
                              <path
                                d="M7 17L17 7M7 7H17V17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <MoreHorizontal className="h-4 w-4 text-gray-400" />
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>

                  <Card className="w-full p-0 shadow-sm">
                    <CardContent className="p-0">
                      {/* Top section */}
                      <div className="p-4 flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="bg-orange-50 rounded-full p-2 mt-1">
                            <IconScanEye className="h-4 w-4 text-orange-500" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">
                              Evento: 20250212013
                            </h3>
                            <div className="text-sm text-gray-500 flex items-center gap-2">
                              <span>Roubo</span>
                              <span>•</span>
                              <span>Maria Santos</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              <span>Última atualização: 14 Mai, 15:30</span>
                              <span className="mx-2">•</span>
                              <span>Prioridade Alta</span>
                              <Badge className="ml-2" variant="secondary">
                                Pendente
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 rounded-md"
                          >
                            Ver Evento
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Gray message card aligned with text */}
                      <div className="pl-14 pr-4">
                        <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
                          <div className="text-xs text-gray-500 mb-1">
                            Ontem às 10:30
                          </div>
                          <p>
                            Relatório inicial: Roubo a estabelecimento
                            comercial. Suspeitos armados, vítimas em estado de
                            choque. Necessidade de apoio psicológico.
                          </p>
                        </div>
                      </div>
                    </CardContent>

                    {/* Footer section */}
                    <CardFooter className="p-4 border-t">
                      <div className="flex items-center gap-3 text-sm text-gray-600 w-full">
                        <div className="bg-blue-50 rounded-md p-1">
                          <Calendar className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-500">
                            09:30 - Segunda, 16 Abr 2024
                          </span>
                          <span className="mx-1">•</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 text-gray-500" />
                          <span className="text-gray-500">Capitão Costa</span>
                          <span className="mx-1">•</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-500" />
                          <span className="text-gray-500">Em atendimento</span>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-gray-400"
                            >
                              <path
                                d="M7 17L17 7M7 7H17V17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <MoreHorizontal className="h-4 w-4 text-gray-400" />
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>

                  <Card className="w-full p-0 shadow-sm">
                    <CardContent className="p-0">
                      {/* Top section */}
                      <div className="p-4 flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="bg-emerald-50 rounded-full p-2 mt-1">
                            <IconCarCrash className="h-4 w-4 text-emerald-500" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">
                              Evento: 20250212014
                            </h3>
                            <div className="text-sm text-gray-500 flex items-center gap-2">
                              <span>Colisão</span>
                              <span>•</span>
                              <span>Carlos Mendes</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              <span>Última atualização: 14 Mai, 16:15</span>
                              <span className="mx-2">•</span>
                              <span>Prioridade Alta</span>
                              <Badge className="ml-2" variant="secondary">
                                Pendente
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 rounded-md"
                          >
                            Ver Evento
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Gray message card aligned with text */}
                      <div className="pl-14 pr-4">
                        <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
                          <div className="text-xs text-gray-500 mb-1">
                            Ontem às 10:30
                          </div>
                          <p>
                            Relatório inicial: Colisão entre três veículos na
                            avenida principal. Vítimas presas nas ferragens.
                            Necessidade de resgate.
                          </p>
                        </div>
                      </div>
                    </CardContent>

                    {/* Footer section */}
                    <CardFooter className="p-4 border-t">
                      <div className="flex items-center gap-3 text-sm text-gray-600 w-full">
                        <div className="bg-blue-50 rounded-md p-1">
                          <Calendar className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-500">
                            09:30 - Segunda, 16 Abr 2024
                          </span>
                          <span className="mx-1">•</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 text-gray-500" />
                          <span className="text-gray-500">Tenente Almeida</span>
                          <span className="mx-1">•</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-500" />
                          <span className="text-gray-500">Em atendimento</span>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-gray-400"
                            >
                              <path
                                d="M7 17L17 7M7 7H17V17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <MoreHorizontal className="h-4 w-4 text-gray-400" />
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>

                  <Card className="w-full p-0 shadow-sm">
                    <CardContent className="p-0">
                      {/* Top section */}
                      <div className="p-4 flex justify-between items-start">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-50 rounded-full p-2 mt-1">
                            <IconDroplet className="h-4 w-4 text-blue-500" />
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-800">
                              Evento: 20250212015
                            </h3>
                            <div className="text-sm text-gray-500 flex items-center gap-2">
                              <span>Alagamento</span>
                              <span>•</span>
                              <span>Ana Pereira</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              <span>Última atualização: 14 Mai, 17:00</span>
                              <span className="mx-2">•</span>
                              <span>Prioridade Alta</span>
                              <Badge className="ml-2" variant="secondary">
                                Pendente
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 rounded-md"
                          >
                            Ver Evento
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Gray message card aligned with text */}
                      <div className="pl-14 pr-4">
                        <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
                          <div className="text-xs text-gray-500 mb-1">
                            Ontem às 10:30
                          </div>
                          <p>
                            Relatório inicial: Alagamento em área residencial.
                            Nível da água em 1.5m. Famílias necessitando de
                            resgate. Risco de desabamento.
                          </p>
                        </div>
                      </div>
                    </CardContent>

                    {/* Footer section */}
                    <CardFooter className="p-4 border-t">
                      <div className="flex items-center gap-3 text-sm text-gray-600 w-full">
                        <div className="bg-blue-50 rounded-md p-1">
                          <Calendar className="h-4 w-4 text-blue-500" />
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-gray-500">
                            09:30 - Segunda, 16 Abr 2024
                          </span>
                          <span className="mx-1">•</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3 text-gray-500" />
                          <span className="text-gray-500">Major Santos</span>
                          <span className="mx-1">•</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3 text-gray-500" />
                          <span className="text-gray-500">Em atendimento</span>
                        </div>
                        <div className="ml-auto flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-gray-400"
                            >
                              <path
                                d="M7 17L17 7M7 7H17V17"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6"
                          >
                            <MoreHorizontal className="h-4 w-4 text-gray-400" />
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

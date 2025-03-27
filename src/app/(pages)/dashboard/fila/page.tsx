"use client";

import { useState, useEffect, type SetStateAction } from "react";
import {
  ChevronRight,
  ChevronLeft,
  Copy,
  MoreVertical,
  AlertCircle,
} from "lucide-react";
import eventos from "../events.json";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SiteHeader } from "@/components/dashboard/site-header";
import {
  IconArrowsTransferUp,
  IconReplaceUser,
  IconTicket,
} from "@tabler/icons-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import Head from "next/head";

export default function FilaPage() {
  const events = eventos;

  // Initialize with the first event in the list
  const [activeEvent, setActiveEvent] = useState(events[0]?.protocol || "");

  const currentEvent =
    events.find((event) => event.protocol === activeEvent) || events[0];
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile on initial render and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // Auto-collapse sidebar on mobile
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    // Check on initial render
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleEventClick = (eventName: SetStateAction<string>) => {
    setActiveEvent(eventName);
    // Auto-collapse sidebar on mobile after selection
    if (isMobile) {
      setSidebarCollapsed(true);
    }
  };

  const affiliate = currentEvent?.affiliate[0];

  return (
    <>
      <Head>
        <title>Sinpro - Fila</title>
      </Head>
      <SiteHeader title="Fila" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 pl-4 md:gap-6 md:py-6">
            <div className="flex h-screen bg-background overflow-hidden">
              {/* Collapsible Sidebar */}
              <div
                className={` flex flex-col transition-all duration-300 ${
                  sidebarCollapsed ? "w-0 overflow-hidden" : "w-full md:w-72"
                }`}
              >
                <div
                  className={`w-72 transition-opacity duration-200 ${sidebarCollapsed ? "opacity-0" : "opacity-100"}`}
                >
                  <div className="px-4 pb-2  flex items-center justify-between">
                    <h2 className="text-base font-medium">Seus Eventos</h2>
                    <IconTicket className="h-4 w-4" />
                  </div>

                  <Tabs defaultValue="all">
                    <TabsList className="grid grid-cols-3 w-full">
                      <TabsTrigger value="all">Todos</TabsTrigger>
                      <TabsTrigger value="oldest">Em espera</TabsTrigger>
                      <TabsTrigger value="newest">Andamento</TabsTrigger>
                    </TabsList>
                  </Tabs>

                  <div className="flex-1 overflow-auto scrollbar-hide space-y-2 mt-2">
                    {events.map((event) => (
                      <div
                        key={event.protocol}
                        className={`flex items-center justify-between py-2 px-3 border rounded cursor-pointer hover:bg-muted/50 transition-colors ${event.protocol === activeEvent ? "bg-muted/15" : ""}`}
                        onClick={() => handleEventClick(event.protocol)}
                      >
                        <div className="flex items-center gap-3">
                          {/* <Avatar>
                          <AvatarImage
                            src={event.avatar}
                            alt={event.name}
                          />
                          <AvatarFallback>
                            {event.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar> */}
                          <div>
                            <p className="font-medium text-sm">
                              {event.protocol}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Data: {event.registerDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content - Removed conditional rendering here */}
              <div className="flex-1 flex p-4 pt-0">
                <Card className="overflow-hidden w-full p-0 gap-0 flex flex-col">
                  <CardHeader className="flex flex-row items-start bg-muted/50 py-3">
                    <div className="grid gap-0.5">
                      <CardTitle className="group flex items-center gap-2 text-lg m-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={toggleSidebar}
                          className="mx-1"
                        >
                          {sidebarCollapsed ? (
                            <ChevronRight className="h-4 w-4" />
                          ) : (
                            <ChevronLeft className="h-4 w-4" />
                          )}
                        </Button>
                        {currentEvent ? (
                          <div>
                            <span>Protocolo: {currentEvent.protocol}</span>
                            <span className="block text-sm text-muted-foreground">
                              Data: November 23, 2023
                            </span>
                          </div>
                        ) : (
                          <div>
                            <span>Selecione um evento</span>
                          </div>
                        )}
                        {currentEvent && (
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                          >
                            <Copy className="h-3 w-3" />
                            <span className="sr-only">Copy Order ID</span>
                          </Button>
                        )}
                      </CardTitle>
                    </div>
                    {currentEvent && (
                      <div className="ml-auto flex items-center gap-1">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 gap-1"
                        >
                          <IconReplaceUser className="h-3.5 w-3.5" />
                          <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                            Transferir
                          </span>
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-8 w-8"
                            >
                              <MoreVertical className="h-3.5 w-3.5" />
                              <span className="sr-only">Mais</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Visualizar</DropdownMenuItem>
                            <DropdownMenuItem>Exportar</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Tirar da fila</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    )}
                  </CardHeader>
                  {currentEvent ? (
                    <CardContent className="p-6 text-sm flex-1 overflow-auto">
                      <div className="grid gap-3">
                        <div className="font-semibold">Detalhes do Evento</div>
                        <ul className="grid gap-3">
                          <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Protocolo:
                            </span>
                            <span>{currentEvent.protocol}</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Tipo:</span>
                            <span>{currentEvent.type}</span>
                          </li>
                        </ul>
                        <Separator className="my-2" />
                        <ul className="grid gap-3">
                          <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">Local</span>
                            <span>{currentEvent.local}</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Terceiro:
                            </span>
                            <span>{currentEvent.possuiTerceiro}</span>
                          </li>
                          <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Boletim de Ocorrencia:
                            </span>
                            <span>{currentEvent.bo}</span>
                          </li>
                          {/* <li className="flex items-center justify-between font-semibold">
                            <span className="text-muted-foreground">
                              Total
                            </span>
                            <span>$329.00</span>
                          </li> */}
                        </ul>
                      </div>

                      <Separator className="my-4" />
                      <div className="grid gap-3">
                        <div className="font-semibold">
                          Informações do Associado
                        </div>
                        <dl className="grid gap-3">
                          <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">
                              Nome Completo
                            </dt>
                            <dd>{affiliate?.name}</dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Email</dt>
                            <dd>
                              <a href={`mailto:${affiliate?.email}`}>
                                {affiliate?.email}
                              </a>
                            </dd>
                          </div>
                          <div className="flex items-center justify-between">
                            <dt className="text-muted-foreground">Telefone</dt>
                            <dd>
                              <a href={`tel:${affiliate?.phone}`}>
                                {affiliate?.phone}
                              </a>
                            </dd>
                          </div>
                        </dl>
                      </div>
                      <Separator className="my-4" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                          <div className="font-semibold">Veiculo</div>
                          <address className="grid gap-0.5 not-italic text-muted-foreground">
                            <span>Honda - Civic 2004 </span>
                            <span>Placa: DMU1101</span>
                            <span>Cor: Verde Escuro</span>
                          </address>
                        </div>
                        <div className="grid auto-rows-max gap-3">
                          <div className="font-semibold">Endereço</div>
                          <div className="text-muted-foreground">
                            Av. Ipe Roxo, 610 - Sumaré, SP
                          </div>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="grid gap-3">
                        <div className="font-semibold">Historico</div>
                        <dl className="grid gap-3">
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center gap-1 text-muted-foreground">
                              <IconArrowsTransferUp className="h-4 w-4" />
                              Juridico
                            </dt>
                            <dd>Transferencia</dd>
                          </div>
                        </dl>
                        <dl className="grid gap-3">
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center gap-1 text-muted-foreground">
                              <IconArrowsTransferUp className="h-4 w-4" />
                              Gerente
                            </dt>
                            <dd>Transferencia</dd>
                          </div>
                        </dl>
                        <dl className="grid gap-3">
                          <div className="flex items-center justify-between">
                            <dt className="flex items-center gap-1 text-muted-foreground">
                              <IconArrowsTransferUp className="h-4 w-4" />
                              Sinistro
                            </dt>
                            <dd>Transferencia</dd>
                          </div>
                        </dl>
                      </div>
                    </CardContent>
                  ) : (
                    <CardContent className="p-6 text-sm flex-1 flex items-center justify-center">
                      <div className="text-center">
                        <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-2">
                          Nenhum evento selecionado
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Selecione um evento da lista para visualizar os
                          detalhes.
                        </p>
                        <Button
                          onClick={() => setSidebarCollapsed(false)}
                          className="mx-auto"
                        >
                          Ver eventos
                        </Button>
                      </div>
                    </CardContent>
                  )}

                  {currentEvent && (
                    <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3 mt-auto">
                      <div className="text-xs text-muted-foreground">
                        Atualizado{" "}
                        <time dateTime="2023-11-23">26 de Março de 2023</time>
                      </div>
                      <Pagination className="ml-auto mr-0 w-auto">
                        <PaginationContent>
                          <PaginationItem>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-6 w-6"
                            >
                              <ChevronLeft className="h-3.5 w-3.5" />
                              <span className="sr-only">Anterior</span>
                            </Button>
                          </PaginationItem>
                          <PaginationItem>
                            <Button
                              size="icon"
                              variant="outline"
                              className="h-6 w-6"
                            >
                              <ChevronRight className="h-3.5 w-3.5" />
                              <span className="sr-only">Próximo</span>
                            </Button>
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </CardFooter>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

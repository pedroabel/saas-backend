"use client";

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Stats {
  totalEvents: number;
  pendingEvents: number;
  totalAffiliates: number;
  eventVariation: number;
  affiliateVariation: number;
}

export function SectionCards() {
  const [stats, setStats] = useState<Stats>({
    totalEvents: 0,
    pendingEvents: 0,
    totalAffiliates: 0,
    eventVariation: 0,
    affiliateVariation: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/stats");
        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return (
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-b *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="@container/card">
            <CardHeader>
              <CardDescription>Carregando...</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                ...
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-b *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total de Eventos</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {stats.totalEvents}
          </CardTitle>
          <CardAction>
            <Badge
              variant="outline"
              className={
                stats.eventVariation >= 0 ? "text-green-500" : "text-red-500"
              }
            >
              {stats.eventVariation >= 0 ? (
                <IconTrendingUp />
              ) : (
                <IconTrendingDown />
              )}
              {Math.abs(stats.eventVariation)}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {stats.eventVariation >= 0 ? "Aumento" : "Queda"} neste mês{" "}
            {stats.eventVariation >= 0 ? (
              <IconTrendingUp className="size-4" />
            ) : (
              <IconTrendingDown className="size-4" />
            )}
          </div>
          <div className="text-muted-foreground">
            Comparação dos últimos 6 meses
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Eventos Pendentes</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {stats.pendingEvents}
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-yellow-500">
              <IconTrendingDown />
              {Math.round((stats.pendingEvents / stats.totalEvents) * 100)}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Necessário acompanhamento <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Em relação ao total de eventos
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total de Associados</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {stats.totalAffiliates}
          </CardTitle>
          <CardAction>
            <Badge
              variant="outline"
              className={
                stats.affiliateVariation >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {stats.affiliateVariation >= 0 ? (
                <IconTrendingUp />
              ) : (
                <IconTrendingDown />
              )}
              {Math.abs(stats.affiliateVariation)}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {stats.affiliateVariation >= 0 ? "Aumento" : "Queda"} neste mês{" "}
            {stats.affiliateVariation >= 0 ? (
              <IconTrendingUp className="size-4" />
            ) : (
              <IconTrendingDown className="size-4" />
            )}
          </div>
          <div className="text-muted-foreground">
            Comparação dos últimos 6 meses
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Taxa de Conversão</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {Math.round((stats.totalEvents / stats.totalAffiliates) * 100)}%
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-blue-500">
              <IconTrendingUp />
              {Math.round((stats.totalEvents / stats.totalAffiliates) * 100)}%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Eventos por associado <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Média de eventos por associado
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

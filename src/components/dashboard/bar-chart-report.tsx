"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  {
    date: "2024-04-01",
    furto: 20,
    roubo: 5,
    colisao: 20,
    alagamento: 10,
    incendio: 5,
  },
  {
    date: "2024-04-02",
    furto: 25,
    roubo: 0,
    colisao: 25,
    alagamento: 15,
    incendio: 10,
  },
  {
    date: "2024-04-03",
    furto: 50,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-04",
    furto: 60,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-05",
    furto: 80,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-06",
    furto: 70,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-07",
    furto: 60,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-08",
    furto: 90,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-09",
    furto: 30,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-10",
    furto: 50,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-11",
    furto: 70,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-12",
    furto: 60,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-13",
    furto: 70,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-14",
    furto: 30,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-15",
    furto: 25,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-16",
    furto: 30,
    roubo: 5,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-17",
    furto: 40,
    roubo: 5,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-18",
    furto: 30,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-19",
    furto: 20,
    roubo: 5,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-20",
    furto: 10,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-21",
    furto: 15,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-22",
    furto: 20,
    roubo: 5,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-23",
    furto: 30,
    roubo: 5,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-24",
    furto: 40,
    roubo: 5,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-25",
    furto: 25,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-26",
    furto: 15,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-27",
    furto: 30,
    roubo: 5,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-28",
    furto: 20,
    roubo: 5,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-29",
    furto: 30,
    roubo: 5,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-04-30",
    furto: 40,
    roubo: 5,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-01",
    furto: 65,
    roubo: 20,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-02",
    furto: 93,
    roubo: 10,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-03",
    furto: 47,
    roubo: 90,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-04",
    furto: 85,
    roubo: 20,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-05",
    furto: 81,
    roubo: 90,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-06",
    furto: 98,
    roubo: 20,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-07",
    furto: 88,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-08",
    furto: 49,
    roubo: 10,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-09",
    furto: 27,
    roubo: 80,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-10",
    furto: 93,
    roubo: 30,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-11",
    furto: 35,
    roubo: 70,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-12",
    furto: 97,
    roubo: 40,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-13",
    furto: 97,
    roubo: 60,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-14",
    furto: 48,
    roubo: 90,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-15",
    furto: 73,
    roubo: 80,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-16",
    furto: 38,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-17",
    furto: 99,
    roubo: 20,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-18",
    furto: 15,
    roubo: 50,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-19",
    furto: 35,
    roubo: 80,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-20",
    furto: 77,
    roubo: 30,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-21",
    furto: 2,
    roubo: 40,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-22",
    furto: 1,
    roubo: 20,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-23",
    furto: 52,
    roubo: 90,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-24",
    furto: 94,
    roubo: 20,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-25",
    furto: 1,
    roubo: 50,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-26",
    furto: 13,
    roubo: 70,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-27",
    furto: 20,
    roubo: 60,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-28",
    furto: 33,
    roubo: 90,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-29",
    furto: 8,
    roubo: 30,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-30",
    furto: 40,
    roubo: 80,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-05-31",
    furto: 78,
    roubo: 30,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-01",
    furto: 78,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-02",
    furto: 70,
    roubo: 10,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-03",
    furto: 3,
    roubo: 60,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-04",
    furto: 39,
    roubo: 80,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-05",
    furto: 8,
    roubo: 40,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-06",
    furto: 94,
    roubo: 50,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-07",
    furto: 23,
    roubo: 70,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-08",
    furto: 85,
    roubo: 20,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-09",
    furto: 38,
    roubo: 80,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-10",
    furto: 55,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-11",
    furto: 2,
    roubo: 50,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-12",
    furto: 92,
    roubo: 20,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-13",
    furto: 1,
    roubo: 30,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-14",
    furto: 26,
    roubo: 80,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-15",
    furto: 7,
    roubo: 50,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-16",
    furto: 71,
    roubo: 10,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-17",
    furto: 75,
    roubo: 20,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-18",
    furto: 7,
    roubo: 70,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-19",
    furto: 41,
    roubo: 90,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-20",
    furto: 8,
    roubo: 50,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-21",
    furto: 69,
    roubo: 10,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-22",
    furto: 17,
    roubo: 70,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-23",
    furto: 80,
    roubo: 30,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-24",
    furto: 32,
    roubo: 80,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-25",
    furto: 41,
    roubo: 90,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-26",
    furto: 34,
    roubo: 80,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-27",
    furto: 48,
    roubo: 90,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-28",
    furto: 49,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-29",
    furto: 3,
    roubo: 60,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
  {
    date: "2024-06-30",
    furto: 46,
    roubo: 0,
    colisao: 0,
    alagamento: 0,
    incendio: 0,
  },
];

const chartConfig = {
  furto: {
    label: "Furto",
    color: "var(--primary)",
  },
  roubo: {
    label: "Roubo",
    color: "var(--secondary)",
  },
  colisao: {
    label: "Colisão",
    color: "var(--tertiary)",
  },
  alagamento: {
    label: "Alagamento",
    color: "var(--quaternary)",
  },
  incendio: {
    label: "Incêndio",
    color: "var(--quinary)",
  },
} satisfies ChartConfig;

export function BarChartReport() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("furto");

  const total = React.useMemo(
    () => ({
      furto: chartData.reduce((acc, curr) => acc + curr.furto, 0),
      roubo: chartData.reduce((acc, curr) => acc + curr.roubo, 0),
      colisao: chartData.reduce((acc, curr) => acc + curr.colisao, 0),
      alagamento: chartData.reduce((acc, curr) => acc + curr.alagamento, 0),
      incendio: chartData.reduce((acc, curr) => acc + curr.incendio, 0),
    }),
    []
  );

  return (
    <Card className="p-0  py-0 gap-0 ">
      <CardHeader className="flex [.border-b]:pb-0 py-0 flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1  flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Eventos nos últimos meses</CardTitle>
          <CardDescription>Total de eventos por categoria</CardDescription>
        </div>
        <div className="flex">
          {["furto", "roubo", "colisao", "alagamento", "incendio"].map(
            (key) => {
              const chart = key as keyof typeof chartConfig;
              return (
                <button
                  key={chart}
                  data-active={activeChart === chart}
                  className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                  onClick={() => setActiveChart(chart)}
                >
                  <span className="text-xs text-muted-foreground">
                    {chartConfig[chart].label}
                  </span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {total[key as keyof typeof total].toLocaleString()}
                  </span>
                </button>
              );
            }
          )}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[200px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

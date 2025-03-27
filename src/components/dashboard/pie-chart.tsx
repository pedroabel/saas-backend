"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  { browser: "chrome", events: 275, fill: "var(--color-chrome)" },
  { browser: "safari", events: 200, fill: "var(--color-safari)" },
  { browser: "firefox", events: 287, fill: "var(--color-firefox)" },
  { browser: "edge", events: 173, fill: "var(--color-edge)" },
  { browser: "other", events: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  events: {
    label: "Events",
  },
  chrome: {
    label: "Roubo",
    color: "#0466c8",
  },
  safari: {
    label: "Furto",
    color: "#023e7d",
  },
  firefox: {
    label: "Colisão",
    color: "#001845",
  },
  edge: {
    label: "Alagamento",
    color: "#7fc8f8",
  },
  other: {
    label: "Incendio",
    color: "#e1ecf7",
  },
} satisfies ChartConfig;

export function Component() {
  const totalEvents = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.events, 0);
  }, []);

  return (
    <Card className="flex flex-col gap-1">
      <CardHeader className="items-center ">
        <CardTitle>Occorencia de Eventos </CardTitle>
        <CardDescription>Janeiro - Junho 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="events"
              nameKey="browser"
              innerRadius={50}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalEvents.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Eventos
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-1 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Alta de 5,2% no mês <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}

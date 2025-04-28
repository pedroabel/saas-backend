import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function QueueCards() {
  return (
    <div
      className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card
     dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4
      *:data-[slot=card]:bg-gradient-to-b *:data-[slot=card]:shadow-xs
       lg:px-6 @xl/main:grid-cols-1 @5xl/main:grid-cols-2"
    >
      <Card className="@container/card">
        <CardHeader>
          <CardTitle className="text-xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Eventos na Fila
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Aumento neste mês <IconTrendingUp className="size-4" />
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
            1.234
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -20%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Queda de 20% neste período <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">Necessário acompanhamento</div>
        </CardFooter>
      </Card>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Clock, MoreHorizontal, User } from "lucide-react";
import {
  IconCarCrash,
  IconDroplet,
  IconEyeOff,
  IconFlame,
  IconScanEye,
} from "@tabler/icons-react";

interface EventCardProps {
  eventId: string;
  type: string;
  reporter: string;
  lastUpdate: string;
  priority: string;
  status: string;
  date: string;
  officer: string;
  message: string;
  messageTime: string;
}

const eventTypeConfig = {
  Incêndio: {
    icon: IconFlame,
    iconColor: "text-red-500",
    iconBgColor: "bg-red-50",
  },
  Furto: {
    icon: IconEyeOff,
    iconColor: "text-zinc-500",
    iconBgColor: "bg-zinc-50",
  },
  Roubo: {
    icon: IconScanEye,
    iconColor: "text-orange-500",
    iconBgColor: "bg-orange-50",
  },
  Colisão: {
    icon: IconCarCrash,
    iconColor: "text-emerald-500",
    iconBgColor: "bg-emerald-50",
  },
  Alagamento: {
    icon: IconDroplet,
    iconColor: "text-blue-500",
    iconBgColor: "bg-blue-50",
  },
} as const;

export function EventCard({
  eventId,
  type,
  reporter,
  lastUpdate,
  priority,
  status,
  date,
  officer,
  message,
  messageTime,
}: EventCardProps) {
  const config = eventTypeConfig[type as keyof typeof eventTypeConfig] || {
    icon: IconScanEye,
    iconColor: "text-gray-500",
    iconBgColor: "bg-gray-50",
  };
  const Icon = config.icon;

  return (
    <Card className="w-full p-0 shadow-sm">
      <CardContent className="p-0">
        {/* Top section */}
        <div className="p-4 flex justify-between items-start">
          <div className="flex items-start gap-3">
            <div className={`${config.iconBgColor} rounded-full p-2 mt-1`}>
              <Icon className={`h-4 w-4 ${config.iconColor}`} />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Evento: {eventId}</h3>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span>{type}</span>
                <span>•</span>
                <span>{reporter}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">
                <span>Última atualização: {lastUpdate}</span>
                <span className="mx-2">•</span>
                <span>Prioridade {priority}</span>
                <Badge className="ml-2" variant="secondary">
                  {status}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8 rounded-md">
              Ver Evento
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Gray message card aligned with text */}
        <div className="pl-14 pr-4">
          <div className="bg-gray-50 p-4 rounded-md text-sm text-gray-600">
            <div className="text-xs text-gray-500 mb-1">{messageTime}</div>
            <p>{message}</p>
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
            <span className="text-gray-500">{date}</span>
            <span className="mx-1">•</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="h-3 w-3 text-gray-500" />
            <span className="text-gray-500">{officer}</span>
            <span className="mx-1">•</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-gray-500" />
            <span className="text-gray-500">Em atendimento</span>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-6 w-6">
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
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <MoreHorizontal className="h-4 w-4 text-gray-400" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

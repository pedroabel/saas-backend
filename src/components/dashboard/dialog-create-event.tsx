// import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  // DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconCirclePlusFilled, IconSend } from "@tabler/icons-react";
import { SidebarMenuButton } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { Copy } from "lucide-react";
import { TabSend } from "./tab-send";

export function DialogCreateEvent() {
  const handleSubmit = () => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <SidebarMenuButton
          tooltip="Criar Evento"
          className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear"
        >
          <IconCirclePlusFilled />
          <span>Criar Evento</span>
        </SidebarMenuButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="pt-2">
          <DialogTitle className="text-base">Criação de Evento</DialogTitle>
          <DialogDescription className="text-sm">
            Qualquer pessoa que tenha esse link poderá preencher o formulário do
            evento.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                className="text-sm"
                defaultValue="https://sinpro.com/form/token=49620cd2-06c1-46a7-b970-b2d43a7527d3"
                readOnly
              />
            </div>
            <Button type="submit" size="sm" className="">
              <Copy />
              <span className="font-semibold text-sm">Copiar</span>
            </Button>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col space-y-2">
          <Alert>
            <IconSend className="h-6 w-6" />
            <AlertTitle>Método de envio</AlertTitle>
            <AlertDescription>
              Selecione o método de envio do evento.
            </AlertDescription>
          </Alert>
          <TabSend />
        </div>
        <DialogFooter className="sm:justify-end">
          <Button type="button" variant="default" onClick={handleSubmit}>
            Enviar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

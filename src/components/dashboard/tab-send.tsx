import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconMail,
  IconPhone,
  IconMailOpened,
  IconPhonePlus,
} from "@tabler/icons-react";

export function TabSend() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="email">
          <div className="flex items-center space-x-2">
            <IconMailOpened />
            <span>Email</span>
          </div>
        </TabsTrigger>
        <TabsTrigger value="celular">
          <div className="flex items-center space-x-2">
            <IconPhonePlus />
            <span>Celular</span>
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="email">
        <div className="relative">
          <IconMail className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Informe o email de envio"
            className="text-sm pl-8"
          />
        </div>
      </TabsContent>
      <TabsContent value="celular">
        <div className="relative">
          <IconPhone className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Informe o número de celular para envio"
            className="pl-8 text-sm"
          />
        </div>
      </TabsContent>
    </Tabs>
  );
}

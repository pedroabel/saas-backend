import type { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import type { CreateFormData } from "@/types/form";

interface EventInfoFormProps {
  form: UseFormReturn<CreateFormData>;
}

export function EventInfoForm({ form }: EventInfoFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Informações do Evento</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="protocol"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Protocolo</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Evento</FormLabel>
              <FormControl>
                <Input placeholder="Tipo do Evento" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Local do Evento</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="policeReportNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Numero do Boletim de Ocorrencia</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="hasThirdParty"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Terceiro envolvido</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="thirdPartyEmail"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email de contato do Terceiro</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="thirdPartyPhone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefone de contato do Terceiro</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="driver"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Condutor</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

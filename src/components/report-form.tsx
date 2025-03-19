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

interface ReportFormProps {
  form: UseFormReturn<CreateFormData>;
}

export function ReportForm({ form }: ReportFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Relatos</h2>

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Descrição</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="apparentDamage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição dos Danos Aparentes</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="vehiclePhoto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fotos do Veiculo</FormLabel>
              <FormControl>
                <Input placeholder="NY" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="vehicleVideo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Video do Veiculo</FormLabel>
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

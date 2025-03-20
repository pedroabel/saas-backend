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
import { useCallback, useState } from "react";
import { uploadFile } from "@/services/supabase-upload";

interface ReportFormProps {
  form: UseFormReturn<CreateFormData>;
}

export function ReportForm({ form }: ReportFormProps) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (!files || files.length === 0) return;

      setIsUploading(true);
      try {
        const uploadedUrls = await Promise.all(
          Array.from(files).map((file) => uploadFile(file, "form"))
        );
        form.setValue("vehiclePhotos", uploadedUrls);
      } catch (error) {
        console.error("Erro ao fazer upload das imagens:", error);
      } finally {
        setIsUploading(false);
      }
    },
    [form]
  );

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
          name="vehiclePhotos"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fotos do Veículo</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  disabled={isUploading}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        ;
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

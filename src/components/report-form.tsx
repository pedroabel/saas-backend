import { useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
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
  files: File[]; // Arquivos selecionados
  setFiles: (files: File[]) => void; // Função para atualizar os arquivos
}

export function ReportForm({ form, files, setFiles }: ReportFormProps) {
  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target.files;
      if (!selectedFiles || selectedFiles.length === 0) return;

      // Atualiza o estado com os arquivos selecionados
      setFiles(Array.from(selectedFiles));
    },
    [setFiles]
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Relatos</h2>

      {/* Campo de descrição */}
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
        {/* Campo de danos aparentes */}
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

        {/* Campo de upload de fotos do veículo */}
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
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Exibe os nomes dos arquivos selecionados */}
      {files.length > 0 && (
        <div>
          <p>Arquivos selecionados:</p>
          <ul>
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Campo de vídeo do veículo */}
      <FormField
        control={form.control}
        name="vehicleVideo"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Vídeo do Veículo</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="video/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    field.onChange(file.name); // Ou faça o upload do vídeo aqui, se necessário
                  }
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

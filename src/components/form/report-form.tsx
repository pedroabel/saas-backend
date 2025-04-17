import { useState, useCallback } from "react";
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
import Image from "next/image";

interface ReportFormProps {
  form: UseFormReturn<CreateFormData>;
  files: File[]; // Arquivos selecionados (imagens)
  setFiles: (files: File[]) => void; // Função para atualizar os arquivos (imagens)
  videoFile: File | null; // Arquivo de vídeo selecionado
  setVideoFile: (file: File | null) => void; // Função para atualizar o vídeo
}

export function ReportForm({ form, setFiles, setVideoFile }: ReportFormProps) {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]); // URLs temporárias das imagens
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null); // URL temporária do vídeo

  const handleFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target.files;
      if (!selectedFiles || selectedFiles.length === 0) return;

      // Converte os arquivos para URLs temporárias
      const urls = Array.from(selectedFiles).map((file) =>
        URL.createObjectURL(file),
      );

      // Atualiza o estado com os arquivos selecionados e as URLs temporárias
      setFiles(Array.from(selectedFiles));
      setPreviewUrls(urls);
    },
    [setFiles],
  );

  const handleVideoUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedVideo = event.target.files?.[0];
      if (!selectedVideo) return;

      // Converte o vídeo para uma URL temporária
      const url = URL.createObjectURL(selectedVideo);

      // Atualiza o estado com o vídeo selecionado e a URL temporária
      setVideoFile(selectedVideo);
      setVideoPreviewUrl(url);
    },
    [setVideoFile],
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
          render={() => (
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

      {/* Exibe as imagens selecionadas */}
      {previewUrls.length > 0 && (
        <div>
          <p>Imagens selecionadas:</p>
          <div className="flex flex-wrap gap-4">
            {previewUrls.map((url, index) => (
              <Image
                key={index}
                src={url}
                width={100}
                height={100}
                alt={`Preview ${index + 1}`}
                className="w-24 h-24 object-cover rounded"
              />
            ))}
          </div>
        </div>
      )}

      {/* Campo de vídeo do veículo */}
      <FormField
        control={form.control}
        name="reportVideo"
        render={() => (
          <FormItem>
            <FormLabel>Vídeo do Veículo</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Exibe o vídeo selecionado */}
      {videoPreviewUrl && (
        <div>
          <p>Vídeo selecionado:</p>
          <video controls className="w-full max-w-md">
            <source src={videoPreviewUrl} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      )}
    </div>
  );
}

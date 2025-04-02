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
import Image from "next/image";

interface AffiliateFormProps {
  form: UseFormReturn<CreateFormData>;
  cnhFiles: File[]; // Arquivos da CNH
  setCnhFiles: (files: File[]) => void; // Função para atualizar os arquivos da CNH
  personalDocumentFiles: File[]; // Arquivos do Documento Pessoal
  setPersonalDocumentFiles: (files: File[]) => void; // Função para atualizar os arquivos do Documento Pessoal
  proofAddressFile: File | null; // Arquivos do Comprovante de Endereço
  setProofAddressFile: (files: File) => void; // Função para atualizar os arquivos do Comprovante de Endereço
}

export function AffiliateForm({
  form,
  setCnhFiles,
  setPersonalDocumentFiles,
  setProofAddressFile,
}: AffiliateFormProps) {
  const [cnhPreviewUrls, setCnhPreviewUrls] = useState<string[]>([]); // URLs temporárias das imagens da CNH
  const [personalDocumentPreviewUrls, setPersonalDocumentPreviewUrls] =
    useState<string[]>([]); // URLs temporárias das imagens do Documento Pessoal
  const [proofAddressPreviewUrl, setProofAddressPreviewUrl] = useState<
    string | null
  >(null); // URLs temporárias das imagens do Comprovante de Endereço

  const handleCnhFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target.files;
      if (!selectedFiles || selectedFiles.length === 0) return;

      // Converte os arquivos para URLs temporárias
      const urls = Array.from(selectedFiles).map((file) =>
        URL.createObjectURL(file),
      );

      // Atualiza o estado com os arquivos selecionados e as URLs temporárias
      setCnhFiles(Array.from(selectedFiles));
      setCnhPreviewUrls(urls);
    },
    [setCnhFiles],
  );

  const handlePersonalDocumentFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = event.target.files;
      if (!selectedFiles || selectedFiles.length === 0) return;

      // Converte os arquivos para URLs temporárias
      const urls = Array.from(selectedFiles).map((file) =>
        URL.createObjectURL(file),
      );

      // Atualiza o estado com os arquivos selecionados e as URLs temporárias
      setPersonalDocumentFiles(Array.from(selectedFiles));
      setPersonalDocumentPreviewUrls(urls);
    },
    [setPersonalDocumentFiles],
  );

  const handleProofAddressFileUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files?.[0];
      if (!selectedFile) return;
      // Converte os arquivos para URLs temporárias
      const url = URL.createObjectURL(selectedFile);

      // Atualiza o estado com os arquivos selecionados e as URLs temporárias
      setProofAddressFile(selectedFile);
      setProofAddressPreviewUrl(url);
    },
    [setProofAddressFile],
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Informações Pessoais</h2>

      {/* Campo de Nome Completo */}
      <FormField
        control={form.control}
        name="fullName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Nome Completo</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="Insira seu nome completo"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Campo de Telefone */}
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Telefone</FormLabel>
            <FormControl>
              <Input type="text" placeholder="(__) _____-____" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Campo de Email */}
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="endereço@dominio.com"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Campo de CPF */}
      <FormField
        control={form.control}
        name="cpf"
        render={({ field }) => (
          <FormItem>
            <FormLabel>CPF</FormLabel>
            <FormControl>
              <Input placeholder="___.___.___-__" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Campo de Upload da CNH */}
      <FormField
        control={form.control}
        name="cnhFile"
        render={() => (
          <FormItem>
            <FormLabel>Fotos da CNH</FormLabel>
            <FormControl>
              <Input
                type="file"
                multiple
                accept="image/*"
                onChange={handleCnhFileUpload}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {cnhPreviewUrls.length > 0 && (
        <div>
          <p>Imagens selecionadas (CNH):</p>
          <div className="flex flex-wrap gap-4">
            {cnhPreviewUrls.map((url, index) => (
              <Image
                src={url}
                key={index}
                alt={`Preview CNH ${index + 1}`}
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>
      )}

      {/* Campo de Upload do Documento Pessoal */}
      <FormField
        control={form.control}
        name="personalDocument"
        render={() => (
          <FormItem>
            <FormLabel>Fotos do Documento Pessoal</FormLabel>
            <FormControl>
              <Input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePersonalDocumentFileUpload}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {personalDocumentPreviewUrls.length > 0 && (
        <div>
          <p>Imagens selecionadas (Documento Pessoal):</p>
          <div className="flex flex-wrap gap-4">
            {personalDocumentPreviewUrls.map((url, index) => (
              // <img

              // />
              <Image
                key={index}
                src={url}
                alt={`Preview Documento ${index + 1}`}
                className="w-24 h-24 object-cover rounded"
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>
      )}

      {/* Campo de Upload do Comprovante de Endereço */}
      <FormField
        control={form.control}
        name="proofAddress"
        render={() => (
          <FormItem>
            <FormLabel>Fotos do Comprovante de Endereço</FormLabel>
            <FormControl>
              <Input
                type="file"
                accept="image/*"
                onChange={handleProofAddressFileUpload}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {proofAddressPreviewUrl && (
        <div>
          <p>Vídeo selecionado:</p>
          <video controls className="w-full max-w-md">
            <source src={proofAddressPreviewUrl} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      )}
    </div>
  );
}

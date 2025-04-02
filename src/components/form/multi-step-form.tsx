"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { AffiliateForm } from "./affiliate-form";
import { AddressForm } from "./address-form";
import { ReviewForm } from "./review-form";
import { EventInfoForm } from "./event-form";
import { createFormSchema } from "@/schemas/form-schema";
import type { CreateFormData } from "@/types/form";
import { VehicleForm } from "./vehicle-form";
import { ReportForm } from "./report-form";
import { defaultFormValues } from "@/types/form";
import { uploadFile } from "@/services/supabase-upload";

type Step = {
  id: string;
  name: string;
  fields: (keyof CreateFormData)[];
};

const steps: Step[] = [
  {
    id: "affiliate",
    name: "Associado",
    fields: [
      "fullName",
      "phone",
      "email",
      "cpf",
      "cnhFile",
      "personalDocument",
      "proofAddress",
    ],
  },
  {
    id: "vehicle",
    name: "Veículo",
    fields: [
      "brand",
      "model",
      "licensePlate",
      "color",
      "yearModel",
      "fipeValue",
      "fuelType",
    ],
  },
  {
    id: "event",
    name: "Evento",
    fields: [
      "protocol",
      "type",
      "location",
      "policeReportNumber",
      "hasThirdParty",
      "thirdPartyEmail",
      "thirdPartyPhone",
      "driver",
    ],
  },
  {
    id: "address",
    name: "Endereço",
    fields: ["address", "city", "state", "zipCode"],
  },
  {
    id: "report",
    name: "Relatos",
    fields: ["description", "apparentDamage", "vehiclePhotos", "reportVideo"],
  },
  { id: "review", name: "Revisão", fields: [] },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  // Estados para os arquivos de cada campo de upload
  const [cnhFiles, setCnhFiles] = useState<File[]>([]); // Arquivos da CNH
  const [personalDocumentFiles, setPersonalDocumentFiles] = useState<File[]>(
    [],
  ); // Arquivos do Documento Pessoal
  const [proofAddressFile, setProofAddressFile] = useState<File | null>(null); // Arquivos do Comprovante de Endereço
  const [vehicleFiles, setVehicleFiles] = useState<File[]>([]); // Arquivos das fotos do veículo
  const [videoFile, setVideoFile] = useState<File | null>(null); // Arquivo de vídeo do veículo

  const form = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
    defaultValues: defaultFormValues,
    mode: "onChange",
  });

  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const isValid = await form.trigger(fields, { shouldFocus: true });
    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = async (data: CreateFormData) => {
    try {
      const cnhUrls = await Promise.all(
        cnhFiles.map((file) => uploadFile(file, "form")),
      );

      const personalDocumentUrls = await Promise.all(
        personalDocumentFiles.map((file) => uploadFile(file, "form")),
      );
      let proofAddressUrl = null;
      if (proofAddressFile) {
        proofAddressUrl = await uploadFile(proofAddressFile, "form");
      }
      const vehicleImageUrls = await Promise.all(
        vehicleFiles.map((file) => uploadFile(file, "form")),
      );

      let vehicleVideoUrl = null;
      if (videoFile) {
        vehicleVideoUrl = await uploadFile(videoFile, "form");
      }

      const formData = {
        ...data,
        cnhFile: cnhUrls,
        personalDocument: personalDocumentUrls,
        proofAddress: proofAddressUrl || "",
        vehiclePhotos: vehicleImageUrls,
        vehicleVideo: vehicleVideoUrl || "",
      };

      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erro ao enviar os dados");
      alert("Formulário enviado com sucesso!");
    } catch (error) {
      alert("Falha ao enviar o formulário.");
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Multi-Step Form</CardTitle>
          <CardDescription>
            Complete todas as etapas para enviar o formulário. Etapa atual:{" "}
            {currentStep + 1} de {steps.length}
          </CardDescription>
          <div className="flex justify-between mt-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    index < currentStep
                      ? "bg-primary text-primary-foreground"
                      : index === currentStep
                        ? "border-2 border-primary text-primary"
                        : "border-2 border-muted text-muted-foreground"
                  }`}
                ></div>
                <span
                  className={`text-xs mt-1 ${
                    index <= currentStep
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`w-full h-[2px] mt-2 ${
                      index < currentStep ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent>
              {currentStep === 0 && (
                <AffiliateForm
                  form={form}
                  cnhFiles={cnhFiles}
                  setCnhFiles={setCnhFiles}
                  personalDocumentFiles={personalDocumentFiles}
                  setPersonalDocumentFiles={setPersonalDocumentFiles}
                  proofAddressFile={proofAddressFile}
                  setProofAddressFile={setProofAddressFile}
                />
              )}
              {currentStep === 1 && <VehicleForm form={form} />}
              {currentStep === 2 && <EventInfoForm form={form} />}
              {currentStep === 3 && <AddressForm form={form} />}
              {currentStep === 4 && (
                <ReportForm
                  form={form}
                  files={vehicleFiles}
                  setFiles={setVehicleFiles}
                  videoFile={videoFile}
                  setVideoFile={setVideoFile}
                />
              )}
              {currentStep === 5 && <ReviewForm form={form} />}
            </CardContent>

            <CardFooter className="flex justify-between mt-4">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Anterior
              </Button>
              <div className="flex gap-2">
                {currentStep < steps.length - 1 && (
                  <Button type="button" onClick={nextStep}>
                    Próximo
                  </Button>
                )}

                {currentStep === steps.length - 1 && (
                  <Button type="submit">Enviar</Button>
                )}
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}

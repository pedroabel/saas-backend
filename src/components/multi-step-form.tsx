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
import { PersonalInfoForm } from "./personal-info-form";
import { AddressForm } from "./address-form";
import { AccountForm } from "./account-form";
import { ReviewForm } from "./review-form";
import { EventInfoForm } from "./event-form";
import { createFormSchema } from "@/schemas/form-schema";
import type { CreateFormData } from "@/types/form";

type Step = {
  id: string;
  name: string;
  fields: (keyof CreateFormData)[];
};

const steps: Step[] = [
  {
    id: "event",
    name: "Event",
    fields: ["eventName", "eventType", "eventLocation"],
  },
  {
    id: "address",
    name: "Address",
    fields: ["address", "city", "state", "zipCode"],
  },
  {
    id: "account",
    name: "Account",
    fields: ["username", "password", "confirmPassword"],
  },
  {
    id: "personal-info",
    name: "Personal Information",
    fields: ["firstName", "lastName", "email", "phone"],
  },
  { id: "review", name: "Review", fields: [] },
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  const form = useForm<CreateFormData>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      username: "",
      password: "",
      confirmPassword: "",
      eventName: "",
      eventType: "",
      eventLocation: "",
    },
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
      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
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
              {currentStep === 0 && <PersonalInfoForm form={form} />}
              {currentStep === 1 && <AddressForm form={form} />}
              {currentStep === 2 && <AccountForm form={form} />}
              {currentStep === 3 && <EventInfoForm form={form} />}
              {currentStep === 4 && <ReviewForm form={form} />}
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

                <Button
                  type="submit"
                  disabled={currentStep !== steps.length - 1}
                >
                  Enviar
                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}

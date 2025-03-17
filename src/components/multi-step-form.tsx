"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { CheckCircle2, CircleDashed } from "lucide-react";
import { EventInfoForm } from "./event-form";

// Define the form schema for all steps
const formSchema = z
  .object({
    // Personal Info
    firstName: z.string(),
    // .min(2, { message: "First name must be at least 2 characters." }),
    lastName: z.string(),
    // .min(2, { message: "Last name must be at least 2 characters." }),
    email: z.string(), //.email({ message: "Please enter a valid email address." }),
    phone: z.string(),
    // .min(10, { message: "Phone number must be at least 10 digits." }),

    // Address
    address: z.string(),
    // .min(5, { message: "Address must be at least 5 characters." }),
    city: z.string(),
    // .min(2, { message: "City must be at least 2 characters." }),
    state: z.string(),
    // .min(2, { message: "State must be at least 2 characters." }),
    zipCode: z.string(),
    // .min(5, { message: "Zip code must be at least 5 characters." }),

    // Account
    username: z.string(),
    // .min(3, { message: "Username must be at least 3 characters." }),
    password: z.string(),
    // .min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string(),
    // .min(8, { message: "Confirm password must be at least 8 characters." }),

    // Event
    eventName: z.string(),
    // .min(3, { message: "eventName must be at least 3 characters." }),
    eventType: z.string(),
    // .min(8, { message: "eventType must be at least 8 characters." }),
    eventLocation: z.string(),
    // .min(8, { message: "eventLocation must be at least 8 characters." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Define the steps
const steps = [
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
  {
    id: "review",
    name: "Review",
    fields: [],
  },
];

type FormValues = z.infer<typeof formSchema>;

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);

  // Initialize the form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
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

  // Define a function to go to the next step
  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const output = await form.trigger(fields as any, { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Define a function to go to the previous step
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados");
      }

      const result = await response.json();
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit the form.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle>Multi-Step Form</CardTitle>
          <CardDescription>
            Complete all steps to submit the form. Current step:{" "}
            {currentStep + 1} of {steps.length}
          </CardDescription>

          {/* Progress indicator */}
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
              {currentStep === 0 && <EventInfoForm form={form} />}

              {currentStep === 1 && <AddressForm form={form} />}
              {currentStep === 2 && <AccountForm form={form} />}
              {currentStep === 3 && <PersonalInfoForm form={form} />}

              {currentStep === 4 && <ReviewForm form={form} />}
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Anterior
              </Button>

              {currentStep === steps.length - 1 ? (
                <Button type="submit">Enviar</Button>
              ) : (
                <Button type="button" onClick={nextStep}>
                  Próximo
                </Button>
              )}
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}

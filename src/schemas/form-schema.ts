// src/schemas/formSchema.ts
import { z } from "zod";

export const formStep1Schema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
});

export const formStep2Schema = z.object({
  age: z.number().min(18, "Você precisa ser maior de idade"),
  country: z.string().min(3, "Informe um país válido"),
});

export const formStep3Schema = z.object({
  description: z
    .string()
    .min(10, "A descrição deve ter no mínimo 10 caracteres"),
});

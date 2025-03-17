// src/schemas/formSchema.ts
import { z } from "zod";

export const createFormSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    username: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
    eventName: z.string(),
    eventType: z.string(),
    eventLocation: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

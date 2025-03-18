// src/schemas/formSchema.ts
import { z } from "zod";

export const createFormSchema = z
  .object({
    //Affiliate
    fullName: z.string(),
    phone: z.string(),
    email: z.string(),
    rg: z.string(),
    cpf: z.string(),
    cnh: z.string(),
    cnhCategory: z.string(),
    cnhExpirationDate: z.string(),
    //Vehicle
    //Report
    //Terms and Sign
    //Address
    address: z.string(),
    city: z.string(),
    state: z.string(),
    zipCode: z.string(),
    //Account
    username: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
    //Event
    eventName: z.string(),
    eventType: z.string(),
    eventLocation: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

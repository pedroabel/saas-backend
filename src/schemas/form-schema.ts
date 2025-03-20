// src/schemas/formSchema.ts
import { z } from "zod";

export const createFormSchema = z.object({
  //Affiliate
  fullName: z.string(),
  phone: z.string(),
  email: z.string(),
  cpf: z.string(),
  cnhFile: z.string(),
  personalDocument: z.string(),
  proofAddres: z.string(),
  //Vehicle
  brand: z.string(),
  model: z.string(),
  licensePlate: z.string(),
  color: z.string(),
  chassiss: z.string(),
  yearModel: z.string(),
  fipeValue: z.string(),
  fuelType: z.string(),
  //Event
  protocol: z.string(),
  type: z.string(),
  location: z.string(),
  policeReportNumber: z.string(),
  hasThirdParty: z.string(),
  thirdPartyEmail: z.string(),
  thirdPartyPhone: z.string(),
  driver: z.string(),
  //Report
  description: z.string(),
  apparentDamage: z.string(),
  vehiclePhotos: z.string().array().optional(), // URLs das imagens
  reportVideo: z.string().optional(),
  //Terms and Sign
  //Address
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
});
//  .refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords do not match",
//   path: ["confirmPassword"],
// });

import type { createFormSchema } from "@/schemas/form-schema";
import { z } from "zod";

export type CreateFormData = z.infer<typeof createFormSchema>;

export const defaultFormValues: CreateFormData = {
  // Affiliate
  fullName: "",
  phone: "",
  email: "",
  rg: "",
  cpf: "",
  cnh: "",
  cnhCategory: "",
  cnhExpirationDate: "",
  // Vehicle
  brand: "",
  model: "",
  licensePlate: "",
  color: "",
  chassiss: "",
  yearModel: "",
  fipeValue: "",
  fuelType: "",
  // Event
  protocol: "",
  type: "",
  location: "",
  policeReportNumber: "",
  hasThirdParty: "",
  thirdPartyEmail: "",
  thirdPartyPhone: "",
  driver: "",
  // Reports
  description: "",
  apparentDamage: "",
  vehiclePhotos: [],
  vehicleVideo: "",
  // Address
  address: "",
  city: "",
  state: "",
  zipCode: "",
};

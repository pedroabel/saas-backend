import type { createFormSchema } from "@/schemas/form-schema";
import { z } from "zod";

export type CreateFormData = z.infer<typeof createFormSchema>;

export const defaultFormValues: CreateFormData = {
  // Affiliate
  fullName: "",
  phone: "",
  email: "",
  cpf: "",
  cnhFile: [],
  personalDocument: [],
  proofAddress: "",
  // Vehicle
  brand: "",
  model: "",
  licensePlate: "",
  color: "",
  chassis: "",
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
  reportVideo: "",
  // Address
  address: "",
  city: "",
  state: "",
  zipCode: "",
};

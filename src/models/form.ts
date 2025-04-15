import { supabase } from "@/lib/supabase";

export type FormData = {
  fullName: string;
  phone: string;
  email: string;
  cpf: string;
  cnhFile?: string[];
  personalDocument?: string[];
  proofAddress?: string;
  brand: string;
  model: string;
  licensePlate: string;
  color: string;
  chassis: string;
  yearModel: string;
  fipeValue: number;
  fuelType: string;
  protocol: string;
  type: string;
  location: string;
  policeReportNumber: string;
  hasThirdParty: boolean;
  thirdPartyEmail?: string;
  thirdPartyPhone?: string;
  driver: string;
  description: string;
  apparentDamage: string;
  vehiclePhotos?: string[];
  reportVideo?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
};

export async function createForm(data: FormData) {
  const { data: form, error } = await supabase
    .from("associates")
    .insert([
      {
        full_name: data.fullName,
        phone: data.phone,
        email: data.email,
        cpf: data.cpf,
        cnh_file: data.cnhFile,
        personal_document: data.personalDocument,
        proof_address: data.proofAddress,
        brand: data.brand,
        model: data.model,
        license_plate: data.licensePlate,
        color: data.color,
        chassis: data.chassis,
        year_model: data.yearModel,
        fipe_value: data.fipeValue,
        fuel_type: data.fuelType,
        protocol: data.protocol,
        type: data.type,
        location: data.location,
        police_report_number: data.policeReportNumber,
        has_third_party: data.hasThirdParty,
        third_party_email: data.thirdPartyEmail,
        third_party_phone: data.thirdPartyPhone,
        driver: data.driver,
        description: data.description,
        apparent_damage: data.apparentDamage,
        vehicle_photos: data.vehiclePhotos,
        report_video: data.reportVideo,
        address: data.address,
        city: data.city,
        state: data.state,
        zip_code: data.zipCode,
      },
    ])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return form;
}

export async function getForms() {
  const { data: forms, error } = await supabase.from("associates").select("*");

  if (error) {
    throw error;
  }

  return forms;
}

export async function getFormById(id: string) {
  const { data: form, error } = await supabase
    .from("associates")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return form;
}

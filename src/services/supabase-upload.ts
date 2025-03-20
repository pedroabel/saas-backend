import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vdghoccjkyrbylahyyci.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkZ2hvY2Nqa3lyYnlsYWh5eWNpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MDE5Njc5NiwiZXhwIjoyMDU1NzcyNzk2fQ.74xKMN1npwJrbXh31j83dKJmBt7--cNp0v8vWscmUIk";
const supabase = createClient(supabaseUrl, supabaseKey);

export async function uploadFile(file: File, bucketName: string) {
  const filePath = `${Date.now()}-${file.name}`;
  console.log(filePath);
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file);

  if (error) {
    throw new Error("Erro ao fazer upload do arquivo.");
  }

  // Retorna a URL pública do arquivo
  const { data: urlData } = supabase.storage
    .from(bucketName)
    .getPublicUrl(data.path);

  return urlData.publicUrl;
}

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function uploadFile(file: File, bucketName: string) {
  const filePath = `${Date.now()}-${file.name}`;

  console.log("Iniciando upload do arquivo:", file.name);
  console.log("Bucket:", bucketName);

  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(filePath, file);

  if (error) {
    console.error("Erro detalhado:", error);
    throw new Error("Erro ao fazer upload do arquivo.");
  }

  console.log("Upload concluído com sucesso:", data);

  // Retorna a URL pública do arquivo
  const { data: urlData } = supabase.storage
    .from(bucketName)
    .getPublicUrl(data.path);

  console.log("URL pública do arquivo:", urlData.publicUrl);

  return urlData.publicUrl;
}

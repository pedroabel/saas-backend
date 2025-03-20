import { NextResponse } from "next/server";
import { createForm } from "@/models/form";
import { uploadFile } from "@/services/supabase-upload";

export async function POST(request: Request) {
  try {
    console.log("Content-Type:", request.headers.get("Content-Type")); // Verifique o Content-Type

    // Lê o corpo da requisição como FormData
    const formData = await request.formData();

    // Extrai os arquivos (imagens) do FormData
    const files = formData.getAll("vehiclePhotos") as File[];

    // Faz o upload das imagens para o Supabase Storage
    const uploadedUrls = await Promise.all(
      files.map((file) => uploadFile(file, "vehicle-images"))
    );

    // Cria um objeto com os dados do formulário
    const data = {
      fullName: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      // ... outros campos do formulário
      vehiclePhotos: uploadedUrls, // URLs das imagens
    };

    // Salva os dados no banco de dados
    const user = await createForm(data);
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Erro ao criar usuário" },
      { status: 500 }
    );
  }
}

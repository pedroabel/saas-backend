"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { syncUser } from "@/utils/sync-user";

export async function login(formData: FormData) {
  // Add delay for testing loading state
  //await new Promise((resolve) => setTimeout(resolve, 2000));

  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    if (error.message.includes("Invalid login credentials")) {
      return { error: "Email ou senha incorretos" };
    }
    return { error: "Ocorreu um erro ao fazer login" };
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp(data);

  if (error || !user) {
    redirect("/error");
  }

  // Sincroniza os dados do usuário com o Prisma
  try {
    await syncUser(user.id);
  } catch (error) {
    console.error("Erro ao sincronizar usuário:", error);
    // Você pode decidir se quer redirecionar para a página de erro ou continuar
  }

  revalidatePath("/", "layout");
  redirect("/");
}

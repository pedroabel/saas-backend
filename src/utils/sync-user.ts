import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";

export async function syncUser(supabaseId: string) {
  const supabase = await createClient();

  // Busca os dados do usuário no Supabase
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("Usuário não encontrado no Supabase");
  }

  if (!user.email) {
    throw new Error("Email do usuário não encontrado");
  }

  // Verifica se o usuário já existe no Prisma
  const existingUser = await prisma.user.findUnique({
    where: { supabaseId },
  });

  if (existingUser) {
    // Atualiza o usuário existente
    return await prisma.user.update({
      where: { supabaseId },
      data: {
        email: user.email,
        name: user.user_metadata?.full_name || null,
        avatar: user.user_metadata?.avatar_url || null,
        updatedAt: new Date(),
      },
    });
  }

  // Cria um novo usuário no Prisma
  return await prisma.user.create({
    data: {
      email: user.email,
      name: user.user_metadata?.full_name || null,
      avatar: user.user_metadata?.avatar_url || null,
      supabaseId: user.id,
    },
  });
}

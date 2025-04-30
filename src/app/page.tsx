import { IconManualGearbox } from "@tabler/icons-react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  async function signOut() {
    "use server";
    const supabase = await createClient();
    await supabase.auth.signOut();
    redirect("/login");
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <IconManualGearbox className="size-5" />
          </div>
          Sinpro
        </a>
        {user && (
          <div className="flex items-center gap-4 p-4 border rounded-lg">
            <div className="flex flex-col">
              <span className="font-medium">{user.email}</span>
              <form action={signOut}>
                <button
                  type="submit"
                  className="text-sm text-red-500 hover:text-red-600"
                >
                  Sair
                </button>
              </form>
            </div>
          </div>
        )}
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            <Link href={"/landing-page"}>Landing Page</Link>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <Link href={"/form"}>Formulário</Link>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <Link href={"/login"}>Login - Sistema</Link>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <Link href={"/associado/login"}>Login - Associado</Link>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <Link href={"/auth/forgot-password"}>
              Esqueceu a senha - Sistema
            </Link>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <Link href={"/forgot-password"}>Erro 404</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}

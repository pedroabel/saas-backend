import { IconManualGearbox } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <a href="#" className="flex items-center gap-2 font-bold text-lg">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <IconManualGearbox className="size-5" />
          </div>
          Sinpro
        </a>
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
            <Link href={"/forgot-password"}>Esqueceu a senha - Sistema</Link>
          </li>
          <li className="mb-2 tracking-[-.01em]">
            <Link href={"/forgot-password"}>Erro 404</Link>
          </li>
        </ol>
      </main>
    </div>
  );
}

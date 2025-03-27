import Head from "next/head";
import { SiteHeader } from "@/components/dashboard/site-header";

export default function MembrosPage() {
  return (
    <>
      <Head>
        <title>Sinpro - Membros</title>
      </Head>
      <SiteHeader title="Membros" />
    </>
  );
}

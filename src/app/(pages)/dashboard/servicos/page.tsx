import Head from "next/head";
import { SiteHeader } from "@/components/dashboard/site-header";

export default function ServicosPage() {
  return (
    <>
      <Head>
        <title>Sinpro - Serviços</title>
      </Head>
      <SiteHeader title="Serviços" />
    </>
  );
}

import Head from "next/head";
import { SiteHeader } from "@/components/dashboard/site-header";

export default function OrganizacaoPage() {
  return (
    <>
      <Head>
        <title>Sinpro - Organização</title>
      </Head>
      <SiteHeader title="Organização" />
    </>
  );
}

import Head from "next/head";
import { SiteHeader } from "@/components/dashboard/layout/site-header";

export default function MembrosPage() {
  return (
    <>
      <Head>
        <title>Sinpro - Membros</title>
      </Head>
      <SiteHeader
        title=""
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Membros" },
        ]}
      />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            {/* Content */}
          </div>
        </div>
      </div>
    </>
  );
}

import { DataTable } from "@/components/dashboard/tables/data-affiliate-table";
import Head from "next/head";
import { SiteHeader } from "@/components/dashboard/layout/site-header";

export default function AssociadosPage() {
  return (
    <>
      <Head>
        <title>Sinpro - Associados</title>
      </Head>
      <SiteHeader
        title=""
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Associados" },
        ]}
      />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <DataTable />
          </div>
        </div>
      </div>
    </>
  );
}

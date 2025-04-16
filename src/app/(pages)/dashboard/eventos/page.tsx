import Head from "next/head";
import { DataTable } from "@/components/dashboard/data-event-table";
import { SiteHeader } from "@/components/dashboard/site-header";

export default function EventosPage() {
  return (
    <>
      <Head>
        <title>Sinpro - Eventos</title>
      </Head>
      <SiteHeader title="Eventos" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            {/* <div className="px-4 lg:px-6">
      <ChartAreaInteractive />
    </div> */}
            <DataTable />
          </div>
        </div>
      </div>
    </>
  );
}

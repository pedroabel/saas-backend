import Head from "next/head";
import { ChartAreaInteractive } from "@/components/dashboard/chart-area-interactive";
import { SiteHeader } from "@/components/dashboard/site-header";
import { ReportsCards } from "@/components/dashboard/reports-cards";

export default function RelatoriosPage() {
  return (
    <>
      <Head>
        <title>Sinpro - Relatórios</title>
      </Head>
      <SiteHeader title="Relatórios" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <ReportsCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

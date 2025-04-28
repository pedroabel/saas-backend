import { ChartAreaInteractive } from "@/components/dashboard/reports/chart-area-interactive";
import Head from "next/head";
import { ReportsCards } from "@/components/dashboard/cards/reports-cards";
import { SiteHeader } from "@/components/dashboard/layout/site-header";

export default function RelatoriosPage() {
  return (
    <>
      <Head>
        <title>Sinpro - Relatórios</title>
      </Head>
      <SiteHeader
        title=""
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Relatórios" },
        ]}
      />
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

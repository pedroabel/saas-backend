import { DataTable } from "@/components/dashboard/tables/data-event-table";
import Head from "next/head";
// import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/dashboard/cards/section-cards";
import { SiteHeader } from "@/components/dashboard/layout/site-header";

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Sinpro - Dashboard</title>
      </Head>
      <SiteHeader title="" breadcrumbs={[{ label: "Dashboard" }]} />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col ">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <DataTable
              showFilters={false}
              showPagination={false}
              showSearch={false}
              initialPageSize={6}
              skeletonHeight={360}
            />
          </div>
        </div>
      </div>
    </>
  );
}

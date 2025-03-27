import { Component } from "./pie-chart";
import { BarChartReport } from "./bar-chart-report";

export function ReportsCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-b *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <div className="col-span-3">
        <BarChartReport />
      </div>
      <div className="col-span-1">
        <Component />
      </div>
    </div>
  );
}

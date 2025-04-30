import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonSectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton key={index} className="h-[180px] w-full rounded-lg" />
      ))}
    </div>
  );
}

interface SkeletonEventTableProps {
  height?: number;
}

export function SkeletonEventTable({ height = 400 }: SkeletonEventTableProps) {
  return (
    <div className="rounded-lg">
      <Skeleton style={{ height: `${height}px` }} className="w-full" />
    </div>
  );
}

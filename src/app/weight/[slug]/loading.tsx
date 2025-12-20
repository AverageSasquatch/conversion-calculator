import { ConverterSkeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Banner Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="w-full h-24 bg-muted rounded-lg" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className="flex-1 space-y-4 sm:space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <div className="h-10 bg-muted rounded w-3/4" />
              <div className="h-5 bg-muted rounded w-full" />
            </div>

            {/* Converter Widget */}
            <ConverterSkeleton />

            {/* Explanation */}
            <div className="bg-background border border-border rounded-xl p-4 sm:p-6 space-y-4">
              <div className="h-6 bg-muted rounded w-1/2" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-5/6" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-72">
            <div className="h-64 bg-muted rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}






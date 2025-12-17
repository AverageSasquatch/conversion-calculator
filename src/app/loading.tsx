import { CategoryCardSkeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Banner Placeholder */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="w-full h-24 bg-muted rounded-lg" />
      </div>

      {/* Hero Section Placeholder */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="h-12 bg-muted rounded-lg w-3/4 mx-auto" />
          <div className="h-6 bg-muted rounded w-2/3 mx-auto" />
          <div className="h-14 bg-muted rounded-xl w-full max-w-2xl mx-auto" />
        </div>
      </section>

      {/* Categories Grid Placeholder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="h-8 bg-muted rounded w-48 mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[1, 2, 3, 4].map((i) => (
            <CategoryCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </div>
  );
}



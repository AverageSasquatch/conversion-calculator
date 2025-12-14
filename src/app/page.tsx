import SearchBar from "@/components/home/SearchBar";
import CategoryCard from "@/components/home/CategoryCard";
import AdPlaceholder from "@/components/layout/AdPlaceholder";
import { categories } from "@/lib/conversions";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Top Banner Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <AdPlaceholder type="banner" />
      </div>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Search a conversion...
          </h1>
          <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
            Quick and accurate unit conversions for weight, length, temperature,
            and volume. Simple, fast, and free.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Categories Grid */}
          <div className="flex-1">
            <h2
              id="converters"
              className="text-2xl font-semibold text-foreground mb-6"
            >
              Choose a Category
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          </div>

          {/* Sidebar Ad (Desktop) */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <AdPlaceholder type="sidebar" />
            </div>
          </div>
        </div>

        {/* Mobile Ad */}
        <div className="lg:hidden mt-8">
          <AdPlaceholder type="mobile" />
        </div>
      </section>
    </div>
  );
}

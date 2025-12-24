import SearchBar from "@/components/home/SearchBar";
import CategoryCard from "@/components/home/CategoryCard";
import AdPlaceholder from "@/components/layout/AdPlaceholder";
import { categories } from "@/lib/conversions";
import { WebsiteJsonLd } from "@/components/seo/JsonLd";
import FAQPageSchema from "@/components/structured-data/FAQPageSchema";

// Force static generation
export const dynamic = "force-static";
export const revalidate = false;

export default function HomePage() {
  // FAQ data for homepage
  const homepageFAQs = [
    {
      question: "How do I convert cups to grams?",
      answer: "Use our cups to grams converter tool and select the ingredient to get accurate results. Different ingredients have different densities, so the conversion varies.",
    },
    {
      question: "What is the best unit converter for cooking?",
      answer: "Our unit converter supports all common cooking measurements including cups, grams, ounces, milliliters, and liters. Simply search for your conversion and get instant results.",
    },
    {
      question: "How accurate are the conversions?",
      answer: "All our conversions use precise conversion factors and are accurate to multiple decimal places. For cooking conversions, we account for ingredient-specific densities.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <WebsiteJsonLd />
      <FAQPageSchema faqs={homepageFAQs} />

      {/* Top Banner Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <AdPlaceholder type="banner" />
      </div>

      {/* Hero Section */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Search a conversion...
          </h1>
          <p className="text-base sm:text-lg text-foreground/60 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Quick and accurate unit conversions for weight, length, temperature,
            and volume. Simple, fast, and free.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Categories Grid */}
          <div className="flex-1">
            <h2
              id="converters"
              className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6"
            >
              Choose a Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
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

        {/* Mobile/Tablet Ad */}
        <div className="lg:hidden mt-6 sm:mt-8">
          <AdPlaceholder type="mobile" />
        </div>
      </section>
    </div>
  );
}

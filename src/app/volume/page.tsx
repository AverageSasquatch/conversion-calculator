import { Metadata } from "next";
import Link from "next/link";
import { getConversionsByCategory } from "@/lib/conversions";
import { generateCategoryMetadata } from "@/lib/metadata";
import { BreadcrumbListSchema } from "@/components/structured-data";

export const metadata: Metadata = generateCategoryMetadata(
  "Volume",
  ["liters to gallons", "cups to milliliters", "quarts to liters", "ml to oz"],
  "cooking professionals and home brewers"
);

const breadcrumbs = [
  { name: "Home", item: "https://conversioncalc.tech" },
  { name: "Volume Converters", item: "https://conversioncalc.tech/volume" }
];

export default function VolumeCategoryPage() {
  const conversions = getConversionsByCategory("volume");

  return (
    <>
      <BreadcrumbListSchema breadcrumbs={breadcrumbs} />
      
      <div className="min-h-screen bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Volume Converters
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Convert between volume units instantly. Professional tools for liters to gallons, 
              cups to milliliters, and more. Perfect for cooking, baking, and liquid measurements.
            </p>
          </header>

          {/* Popular Converters Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Most Popular Volume Conversions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conversions.slice(0, 6).map((conversion) => (
                <Link
                  key={conversion.slug}
                  href={`/volume/${conversion.slug}`}
                  className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                    {conversion.fromUnit.name} to {conversion.toUnit.name}
                  </h3>
                  <p className="text-foreground/60 text-sm mb-3">
                    {conversion.description}
                  </p>
                  <div className="flex items-center text-primary font-medium">
                    Convert Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Quick Reference Table */}
          <section className="bg-background border border-border rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Quick Volume Conversion Chart</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Unit</th>
                    <th className="text-left py-3 px-4">Equivalent</th>
                    <th className="text-left py-3 px-4">Common Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">1 Liter</td>
                    <td className="py-3 px-4">0.264 Gallons (US)</td>
                    <td className="py-3 px-4">Beverages, international</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">1 Gallon (US)</td>
                    <td className="py-3 px-4">3.785 Liters</td>
                    <td className="py-3 px-4">US liquid measurements</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">1 Cup</td>
                    <td className="py-3 px-4">236.6 Milliliters</td>
                    <td className="py-3 px-4">Cooking, baking</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">1 Fluid Ounce</td>
                    <td className="py-3 px-4">29.57 Milliliters</td>
                    <td className="py-3 px-4">Cocktails, medicine</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Cooking Measurements Guide */}
          <section className="bg-background border border-border rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Common Cooking Measurements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-medium mb-3">US Measurements</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>1 tablespoon = 3 teaspoons</li>
                  <li>1 cup = 16 tablespoons</li>
                  <li>1 pint = 2 cups</li>
                  <li>1 quart = 2 pints</li>
                  <li>1 gallon = 4 quarts</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3">Metric Equivalents</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>1 teaspoon = 5 ml</li>
                  <li>1 tablespoon = 15 ml</li>
                  <li>1 cup = 240 ml</li>
                  <li>1 pint = 480 ml</li>
                  <li>1 quart = 950 ml</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3">Baking Tips</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>Use weight for accuracy</li>
                  <li>1 cup water = 236g</li>
                  <li>1 cup flour = 120g</li>
                  <li>1 cup sugar = 200g</li>
                  <li>1 cup butter = 227g</li>
                </ul>
              </div>
            </div>
          </section>

          {/* All Converters List */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">All Volume Converters</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {conversions.map((conversion) => (
                <Link
                  key={conversion.slug}
                  href={`/volume/${conversion.slug}`}
                  className="flex items-center justify-between p-4 bg-background border border-border rounded-lg hover:border-primary transition-colors"
                >
                  <span className="font-medium">
                    {conversion.fromUnit.symbol} to {conversion.toUnit.symbol}
                  </span>
                  <svg className="w-4 h-4 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { getConversionsByCategory } from "@/lib/conversions";
import { generateCategoryMetadata } from "@/lib/metadata";
import { BreadcrumbListSchema } from "@/components/structured-data";
import ConverterPage from "@/components/converter/ConverterPage";

export const metadata: Metadata = generateCategoryMetadata(
  "Weight",
  ["pounds to kilograms", "ounces to grams", "stones to pounds", "kg to lbs"],
  "fitness enthusiasts and cooking professionals"
);

const breadcrumbs = [
  { name: "Home", item: "https://conversioncalc.tech" },
  { name: "Weight Converters", item: "https://conversioncalc.tech/weight" }
];

export default function WeightCategoryPage() {
  const conversions = getConversionsByCategory("weight");

  return (
    <>
      <BreadcrumbListSchema breadcrumbs={breadcrumbs} />
      
      <div className="min-h-screen bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Weight Converters
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Convert between weight units instantly. Professional tools for pounds to kilograms, 
              ounces to grams, and more. Perfect for fitness tracking, cooking, and shipping.
            </p>
          </header>

          {/* Popular Converters Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Most Popular Weight Conversions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conversions.slice(0, 6).map((conversion) => (
                <Link
                  key={conversion.slug}
                  href={`/weight/${conversion.slug}`}
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
            <h2 className="text-2xl font-semibold mb-6">Quick Weight Conversion Chart</h2>
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
                    <td className="py-3 px-4 font-medium">1 Pound (lb)</td>
                    <td className="py-3 px-4">0.4536 Kilograms (kg)</td>
                    <td className="py-3 px-4">Body weight, shipping</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">1 Kilogram (kg)</td>
                    <td className="py-3 px-4">2.2046 Pounds (lbs)</td>
                    <td className="py-3 px-4">International standard</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">1 Ounce (oz)</td>
                    <td className="py-3 px-4">28.35 Grams (g)</td>
                    <td className="py-3 px-4">Cooking ingredients</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">1 Stone</td>
                    <td className="py-3 px-4">6.35 Kilograms (kg)</td>
                    <td className="py-3 px-4">UK body weight</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* All Converters List */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">All Weight Converters</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {conversions.map((conversion) => (
                <Link
                  key={conversion.slug}
                  href={`/weight/${conversion.slug}`}
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

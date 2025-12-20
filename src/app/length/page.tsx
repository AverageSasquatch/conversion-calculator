import { Metadata } from "next";
import Link from "next/link";
import { getConversionsByCategory } from "@/lib/conversions";
import { generateCategoryMetadata } from "@/lib/metadata";
import { BreadcrumbListSchema } from "@/components/structured-data";

export const metadata: Metadata = generateCategoryMetadata(
  "Length",
  ["inches to centimeters", "feet to meters", "miles to kilometers", "cm to inches"],
  "construction professionals and DIY enthusiasts"
);

const breadcrumbs = [
  { name: "Home", item: "https://conversioncalc.tech" },
  { name: "Length Converters", item: "https://conversioncalc.tech/length" }
];

export default function LengthCategoryPage() {
  const conversions = getConversionsByCategory("length");

  return (
    <>
      <BreadcrumbListSchema breadcrumbs={breadcrumbs} />
      
      <div className="min-h-screen bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Length Converters
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Convert between length units instantly. Professional tools for inches to centimeters, 
              feet to meters, and more. Perfect for construction, DIY projects, and international travel.
            </p>
          </header>

          {/* Popular Converters Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Most Popular Length Conversions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conversions.slice(0, 6).map((conversion) => (
                <Link
                  key={conversion.slug}
                  href={`/length/${conversion.slug}`}
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
            <h2 className="text-2xl font-semibold mb-6">Quick Length Conversion Chart</h2>
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
                    <td className="py-3 px-4 font-medium">1 Inch</td>
                    <td className="py-3 px-4">2.54 Centimeters</td>
                    <td className="py-3 px-4">Screen sizes, furniture</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">1 Foot</td>
                    <td className="py-3 px-4">0.3048 Meters</td>
                    <td className="py-3 px-4">Room dimensions</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">1 Mile</td>
                    <td className="py-3 px-4">1.609 Kilometers</td>
                    <td className="py-3 px-4">Distance travel</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">1 Meter</td>
                    <td className="py-3 px-4">3.281 Feet</td>
                    <td className="py-3 px-4">International standard</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* All Converters List */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">All Length Converters</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {conversions.map((conversion) => (
                <Link
                  key={conversion.slug}
                  href={`/length/${conversion.slug}`}
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

import { Metadata } from "next";
import Link from "next/link";
import { getConversionsByCategory } from "@/lib/conversions";
import { generateCategoryMetadata } from "@/lib/metadata";
import { BreadcrumbListSchema } from "@/components/structured-data";

export const metadata: Metadata = generateCategoryMetadata(
  "Temperature",
  ["fahrenheit to celsius", "celsius to kelvin", "fahrenheit to kelvin"],
  "cooking professionals and weather monitoring"
);

const breadcrumbs = [
  { name: "Home", item: "https://conversioncalc.tech" },
  { name: "Temperature Converters", item: "https://conversioncalc.tech/temperature" }
];

export default function TemperatureCategoryPage() {
  const conversions = getConversionsByCategory("temperature");

  return (
    <>
      <BreadcrumbListSchema breadcrumbs={breadcrumbs} />
      
      <div className="min-h-screen bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Temperature Converters
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Convert between temperature scales instantly. Professional tools for Fahrenheit to Celsius, 
              Celsius to Kelvin, and more. Essential for cooking, science, and weather applications.
            </p>
          </header>

          {/* Popular Converters Grid */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Most Popular Temperature Conversions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {conversions.slice(0, 6).map((conversion) => (
                <Link
                  key={conversion.slug}
                  href={`/temperature/${conversion.slug}`}
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
            <h2 className="text-2xl font-semibold mb-6">Temperature Conversion Formulas</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Conversion</th>
                    <th className="text-left py-3 px-4">Formula</th>
                    <th className="text-left py-3 px-4">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">°F to °C</td>
                    <td className="py-3 px-4">°C = (°F - 32) × 5/9</td>
                    <td className="py-3 px-4">212°F = 100°C</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">°C to °F</td>
                    <td className="py-3 px-4">°F = (°C × 9/5) + 32</td>
                    <td className="py-3 px-4">100°C = 212°F</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">°C to K</td>
                    <td className="py-3 px-4">K = °C + 273.15</td>
                    <td className="py-3 px-4">0°C = 273.15K</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">K to °C</td>
                    <td className="py-3 px-4">°C = K - 273.15</td>
                    <td className="py-3 px-4">273.15K = 0°C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Common Temperature Points */}
          <section className="bg-background border border-border rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Common Temperature Points</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Cooking & Baking</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>Water boils: 212°F (100°C)</li>
                  <li>Water freezes: 32°F (0°C)</li>
                  <li>Oven preheat: 350°F (175°C)</li>
                  <li>Body temperature: 98.6°F (37°C)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-3">Weather</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>Room temperature: 68-72°F (20-22°C)</li>
                  <li>Hot day: 86°F (30°C)</li>
                  <li>Cold day: 32°F (0°C)</li>
                  <li>Freezing point: 0°F (-17.8°C)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* All Converters List */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">All Temperature Converters</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {conversions.map((conversion) => (
                <Link
                  key={conversion.slug}
                  href={`/temperature/${conversion.slug}`}
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

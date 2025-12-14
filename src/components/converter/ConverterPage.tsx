import { notFound } from "next/navigation";
import ConverterWidget from "@/components/converter/ConverterWidget";
import ExplanationSection from "@/components/converter/ExplanationSection";
import RelatedConversions from "@/components/converter/RelatedConversions";
import AdPlaceholder from "@/components/layout/AdPlaceholder";
import { getConversionBySlug } from "@/lib/conversions";

interface ConverterPageProps {
  slug: string;
}

export default function ConverterPage({ slug }: ConverterPageProps) {
  const conversion = getConversionBySlug(slug);

  if (!conversion) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Top Banner Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <AdPlaceholder type="banner" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content Area */}
          <div className="flex-1 space-y-6">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {conversion.title}
              </h1>
              <p className="text-foreground/60">{conversion.description}</p>
            </div>

            {/* Converter Widget */}
            <ConverterWidget conversion={conversion} />

            {/* Explanation Section */}
            <ExplanationSection conversion={conversion} />

            {/* Related Conversions */}
            <RelatedConversions currentSlug={slug} />

            {/* Mobile Ad */}
            <div className="lg:hidden">
              <AdPlaceholder type="mobile" />
            </div>
          </div>

          {/* Sidebar (Desktop) */}
          <div className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 space-y-6">
              <AdPlaceholder type="sidebar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

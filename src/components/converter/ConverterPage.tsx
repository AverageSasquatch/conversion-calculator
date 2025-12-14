import { notFound } from "next/navigation";
import ConverterWidget from "@/components/converter/ConverterWidget";
import ExplanationSection from "@/components/converter/ExplanationSection";
import RelatedConversions from "@/components/converter/RelatedConversions";
import AdPlaceholder from "@/components/layout/AdPlaceholder";
import { getConversionBySlug } from "@/lib/conversions";
import { ConverterJsonLd, FAQJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

interface ConverterPageProps {
  slug: string;
}

export default function ConverterPage({ slug }: ConverterPageProps) {
  const conversion = getConversionBySlug(slug);

  if (!conversion) {
    notFound();
  }

  // Pre-compute values for JSON-LD to avoid passing functions
  const jsonLdData = {
    slug: conversion.slug,
    category: conversion.category,
    fromUnit: conversion.fromUnit,
    toUnit: conversion.toUnit,
    title: conversion.title,
    description: conversion.description,
    explanation: conversion.explanation,
    convertedValue: conversion.convert(1),
    reverseConvertedValue: conversion.reverseConvert(1),
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data for SEO */}
      <ConverterJsonLd data={jsonLdData} />
      <FAQJsonLd data={jsonLdData} />
      <BreadcrumbJsonLd data={jsonLdData} />

      {/* Top Banner Ad */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <AdPlaceholder type="banner" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Content Area */}
          <div className="flex-1 space-y-4 sm:space-y-6">
            {/* Page Header */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {conversion.title}
              </h1>
              <p className="text-sm sm:text-base text-foreground/60">{conversion.description}</p>
            </div>

            {/* Converter Widget - Client Component receives slug, looks up data itself */}
            <ConverterWidget slug={slug} />

            {/* Explanation Section - Server Component looks up data itself */}
            <ExplanationSection slug={slug} />

            {/* Related Conversions */}
            <RelatedConversions currentSlug={slug} />

            {/* Mobile/Tablet Ad */}
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

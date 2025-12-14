import { ConversionPair } from "@/lib/conversions";

interface JsonLdProps {
  conversion: ConversionPair;
}

export function ConverterJsonLd({ conversion }: JsonLdProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://unitconverter.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${conversion.fromUnit.name} to ${conversion.toUnit.name} Converter`,
    description: conversion.description,
    url: `${siteUrl}/${conversion.category}/${conversion.slug}`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Real-time conversion",
      "Bidirectional conversion",
      "Mobile-friendly",
      "No signup required",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function FAQJsonLd({ conversion }: JsonLdProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How do I convert ${conversion.fromUnit.name} to ${conversion.toUnit.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: conversion.explanation,
        },
      },
      {
        "@type": "Question",
        name: `What is 1 ${conversion.fromUnit.symbol} in ${conversion.toUnit.symbol}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `1 ${conversion.fromUnit.symbol} equals ${conversion.convert(1).toFixed(4)} ${conversion.toUnit.symbol}.`,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({
  conversion,
}: {
  conversion: ConversionPair;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://unitconverter.com";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: conversion.category.charAt(0).toUpperCase() + conversion.category.slice(1),
        item: `${siteUrl}/#converters`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${conversion.fromUnit.name} to ${conversion.toUnit.name}`,
        item: `${siteUrl}/${conversion.category}/${conversion.slug}`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://unitconverter.com";

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Unit Converter",
    description:
      "Free online unit converter for weight, length, temperature, and volume.",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
    />
  );
}

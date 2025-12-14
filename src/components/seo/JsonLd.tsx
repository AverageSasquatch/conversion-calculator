import { ConversionUnit } from "@/lib/conversions";

interface JsonLdData {
  slug: string;
  category: string;
  fromUnit: ConversionUnit;
  toUnit: ConversionUnit;
  title: string;
  description: string;
  explanation: string;
  convertedValue: number;
  reverseConvertedValue: number;
}

interface JsonLdProps {
  data: JsonLdData;
}

export function ConverterJsonLd({ data }: JsonLdProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://unitconverter.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: `${data.fromUnit.name} to ${data.toUnit.name} Converter`,
    description: data.description,
    url: `${siteUrl}/${data.category}/${data.slug}`,
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

export function FAQJsonLd({ data }: JsonLdProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How do I convert ${data.fromUnit.name} to ${data.toUnit.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: data.explanation,
        },
      },
      {
        "@type": "Question",
        name: `What is 1 ${data.fromUnit.symbol} in ${data.toUnit.symbol}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `1 ${data.fromUnit.symbol} equals ${data.convertedValue.toFixed(4)} ${data.toUnit.symbol}.`,
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

export function BreadcrumbJsonLd({ data }: JsonLdProps) {
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
        name: data.category.charAt(0).toUpperCase() + data.category.slice(1),
        item: `${siteUrl}/#converters`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${data.fromUnit.name} to ${data.toUnit.name}`,
        item: `${siteUrl}/${data.category}/${data.slug}`,
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


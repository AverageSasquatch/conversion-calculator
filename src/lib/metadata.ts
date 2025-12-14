import { Metadata } from "next";
import { ConversionPair } from "./conversions";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://unitconverter.com";

export function generateConverterMetadata(
  conversion: ConversionPair,
  category: string
): Metadata {
  const canonicalUrl = `${siteUrl}/${category}/${conversion.slug}`;

  // Create a rich description with keywords
  const richDescription = `Convert ${conversion.fromUnit.name} to ${conversion.toUnit.name} instantly. ${conversion.description} Use our free ${conversion.fromUnit.symbol} to ${conversion.toUnit.symbol} converter.`;

  // Keywords specific to this conversion
  const keywords = [
    `${conversion.fromUnit.name.toLowerCase()} to ${conversion.toUnit.name.toLowerCase()}`,
    `${conversion.fromUnit.symbol} to ${conversion.toUnit.symbol}`,
    `convert ${conversion.fromUnit.name.toLowerCase()}`,
    `${conversion.fromUnit.name.toLowerCase()} converter`,
    `${conversion.toUnit.name.toLowerCase()} converter`,
    `${category} converter`,
    "unit conversion",
    "free converter",
    "online calculator",
  ];

  return {
    title: `${conversion.fromUnit.name} to ${conversion.toUnit.name} Converter - Free Online Tool`,
    description: richDescription.slice(0, 160), // Limit to 160 chars
    keywords: keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${conversion.fromUnit.name} to ${conversion.toUnit.name} Converter`,
      description: richDescription.slice(0, 160),
      url: canonicalUrl,
      type: "website",
      siteName: "Unit Converter",
    },
    twitter: {
      card: "summary",
      title: `${conversion.fromUnit.name} to ${conversion.toUnit.name} Converter`,
      description: richDescription.slice(0, 160),
    },
  };
}


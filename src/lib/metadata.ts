import { Metadata } from "next";
import { ConversionPair } from "./conversions";
import { BlogPost } from "./blog";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://conversioncalc.tech";

export function generateConverterMetadata(
  conversion: ConversionPair,
  category: string
): Metadata {
  const canonicalUrl = `${siteUrl}/${category}/${conversion.slug}`;

  // SEO Formula: [Tool Name] - [Primary Function] | ConversionCalc
  // Tool Name: [From Unit] to [To Unit] Converter
  // Primary Function: [Benefit/Action]
  const toolName = `${conversion.fromUnit.name} to ${conversion.toUnit.name} Converter`;
  const primaryFunction = conversion.description || `Instant ${conversion.fromUnit.name} to ${conversion.toUnit.name} Conversion`;
  
  // Title: [Tool Name] - [Primary Function] | ConversionCalc
  const title = `${toolName} - ${primaryFunction} | ConversionCalc`;

  // SEO Formula: [Tool Name]: calculate [metrics]. Features [key features]. Free online tool for [target audience].
  const description = `${toolName}: calculate ${conversion.fromUnit.name} to ${conversion.toUnit.name} instantly. Features accurate conversions with step-by-step calculations. Free online tool for professionals and students.`.slice(0, 160);

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
    title,
    description,
    keywords: keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${toolName} | ConversionCalc`,
      description: description,
      url: canonicalUrl,
      type: "website",
      siteName: "ConversionCalc",
    },
    twitter: {
      card: "summary_large_image",
      title: `${toolName} | ConversionCalc`,
      description: description,
    },
  };
}

// Blog Metadata Generator - Following SEO Remediation Plan
// Formula: [Topic] - [Outcome/Benefit] | ConversionCalc
export function generateBlogMetadata(post: BlogPost): Metadata {
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  
  // Extract topic and outcome from title
  // Example: "Cups vs. Grams: Why Your Baking Fails (And How to Fix It)"
  // Topic: "Cups vs. Grams"
  // Outcome: "Why Your Baking Fails (And How to Fix It)"
  const parts = post.title.split(':');
  const topic = parts[0] || post.title;
  const outcome = parts[1] ? parts[1].trim() : 'Complete Guide';
  
  // Title: [Topic] - [Outcome/Benefit] | ConversionCalc
  const title = `${topic} - ${outcome} | ConversionCalc`;
  
  // Meta Description: [Topic]: [Problem solved]. Learn [key takeaway]. Complete guide with [charts/examples].
  const firstSentence = post.content.split('.')[0] || '';
  const description = `${topic}: ${post.excerpt}. Learn ${firstSentence.slice(0, 50)}... Complete guide with practical examples.`.slice(0, 160);
  
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${topic} | ConversionCalc`,
      description,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
      siteName: "ConversionCalc",
    },
    twitter: {
      card: "summary_large_image",
      title: `${topic} | ConversionCalc`,
      description,
    },
  };
}

// Category/Hub Page Metadata Generator
// Formula: [Category Name] - [Scope of Tools] | ConversionCalc
export function generateCategoryMetadata(
  categoryName: string,
  toolTypes: string[],
  targetAudience: string = "professionals and home users"
): Metadata {
  const canonicalUrl = `${siteUrl}/${categoryName.toLowerCase()}`;
  
  // Title: [Category Name] - [Scope of Tools] | ConversionCalc
  const title = `${categoryName} Converters - ${toolTypes.slice(0, 3).join(', ')} | ConversionCalc`;
  
  // Meta Description: [Category] tools: convert [list top 3 units]. Complete guides and charts for [audience].
  const description = `${categoryName} conversion tools: convert ${toolTypes.slice(0, 4).join(', ')}. Complete guides and charts for ${targetAudience}.`.slice(0, 160);
  
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${categoryName} Converters | ConversionCalc`,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: "ConversionCalc",
    },
    twitter: {
      card: "summary_large_image",
      title: `${categoryName} Converters | ConversionCalc`,
      description,
    },
  };
}






import { Metadata } from "next";
import { notFound } from "next/navigation";
import ConverterPage from "@/components/converter/ConverterPage";
import {
  getConversionBySlug,
  getConversionsByCategory,
} from "@/lib/conversions";
import { generateConverterMetadata } from "@/lib/metadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all speed conversions
export async function generateStaticParams() {
  const conversions = getConversionsByCategory("speed");
  return conversions.map((c) => ({ slug: c.slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const conversion = getConversionBySlug(slug);

  if (!conversion) {
    return { title: "Not Found" };
  }

  return generateConverterMetadata(conversion, "speed");
}

export default async function SpeedConverterPage({ params }: PageProps) {
  const { slug } = await params;
  const conversion = getConversionBySlug(slug);

  if (!conversion || conversion.category !== "speed") {
    notFound();
  }

  return <ConverterPage slug={slug} />;
}


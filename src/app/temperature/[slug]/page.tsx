import { Metadata } from "next";
import { notFound } from "next/navigation";
import ConverterPage from "@/components/converter/ConverterPage";
import {
  getConversionBySlug,
  getConversionsByCategory,
} from "@/lib/conversions";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all temperature conversions
export async function generateStaticParams() {
  const conversions = getConversionsByCategory("temperature");
  return conversions.map((c) => ({ slug: c.slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const conversion = getConversionBySlug(slug);

  if (!conversion) {
    return { title: "Not Found" };
  }

  return {
    title: conversion.title,
    description: conversion.description,
    openGraph: {
      title: conversion.title,
      description: conversion.description,
    },
  };
}

export default async function TemperatureConverterPage({ params }: PageProps) {
  const { slug } = await params;
  const conversion = getConversionBySlug(slug);

  if (!conversion || conversion.category !== "temperature") {
    notFound();
  }

  return <ConverterPage slug={slug} />;
}

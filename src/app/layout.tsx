import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://unitconverter.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Unit Converter - Quick & Accurate Conversions | Free Online Tool",
    template: "%s | Unit Converter",
  },
  description:
    "Free online unit converter for weight, length, temperature, and volume. Fast, accurate conversions with a simple, clean interface. No ads, no signup required.",
  keywords: [
    "unit converter",
    "conversion calculator",
    "weight converter",
    "length converter",
    "temperature converter",
    "volume converter",
    "lbs to kg",
    "fahrenheit to celsius",
    "inches to cm",
    "metric converter",
    "imperial to metric",
  ],
  authors: [{ name: "Unit Converter" }],
  creator: "Unit Converter",
  publisher: "Unit Converter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Unit Converter",
    title: "Unit Converter - Quick & Accurate Conversions",
    description:
      "Free online unit converter for weight, length, temperature, and volume. Fast, accurate conversions with a simple, clean interface.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unit Converter - Quick & Accurate Conversions",
    description:
      "Free online unit converter for weight, length, temperature, and volume. Fast, accurate conversions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

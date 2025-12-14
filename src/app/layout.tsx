import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@/components/analytics/Analytics";
import { CookieConsent } from "@/components/analytics/CookieConsent";

// Optimize font loading - preload and display swap
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Prevent FOIT (Flash of Invisible Text)
  preload: true,
});

// Viewport configuration for mobile optimization
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4A90E2",
};

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
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3878000380300780"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* Skip to main content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
        
        {/* Analytics - wrapped in Suspense for useSearchParams */}
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        
        {/* Cookie Consent Banner */}
        <CookieConsent />
      </body>
    </html>
  );
}

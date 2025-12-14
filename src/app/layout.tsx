import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Unit Converter - Quick & Accurate Conversions",
    template: "%s | Unit Converter",
  },
  description:
    "Free online unit converter for weight, length, temperature, and volume. Fast, accurate conversions with simple, clean interface.",
  keywords: [
    "unit converter",
    "conversion calculator",
    "weight converter",
    "length converter",
    "temperature converter",
    "volume converter",
  ],
  authors: [{ name: "Unit Converter" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Unit Converter",
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

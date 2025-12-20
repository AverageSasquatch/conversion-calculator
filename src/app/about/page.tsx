import { Metadata } from "next";
import Link from "next/link";

// Force static generation
export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Unit Converter - your free, fast, and accurate online conversion tool for weight, length, temperature, volume, and more.",
  openGraph: {
    title: "About Us | Unit Converter",
    description:
      "Learn about Unit Converter - your free, fast, and accurate online conversion tool.",
  },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          About Unit Converter
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Fast, accurate, and free unit conversions for everyone.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <section className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-foreground/70 mb-4">
            At Unit Converter, we believe that converting units should be simple, 
            fast, and accessible to everyone. Whether you&apos;re a student working on 
            homework, a professional needing quick calculations, or someone cooking 
            with an international recipe, we&apos;ve got you covered.
          </p>
          <p className="text-foreground/70">
            Our goal is to provide the most user-friendly conversion experience 
            on the web—no clutter, no confusion, just accurate results instantly.
          </p>
        </section>

        <section className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
            What We Offer
          </h2>
          <ul className="space-y-3 text-foreground/70">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>
                <strong className="text-foreground">Accurate Conversions</strong> — 
                Our formulas are based on official standards to ensure precision.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>
                <strong className="text-foreground">Multiple Categories</strong> — 
                Weight, length, temperature, volume, data size, time, area, and speed.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>
                <strong className="text-foreground">Real-Time Results</strong> — 
                See your conversions update instantly as you type.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>
                <strong className="text-foreground">Mobile Friendly</strong> — 
                Works perfectly on any device, from phones to desktops.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✓</span>
              <span>
                <strong className="text-foreground">100% Free</strong> — 
                No signup required, no hidden fees, just free conversions.
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-foreground/70 mb-4">
            Unlike other conversion tools cluttered with ads and pop-ups, we focus 
            on providing a clean, distraction-free experience. Our simple interface 
            means you can find what you need and get your answer in seconds.
          </p>
          <p className="text-foreground/70">
            We&apos;re constantly adding new converters and improving our tool based on 
            user feedback. Have a suggestion? We&apos;d love to hear from you!
          </p>
        </section>

        <section className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-foreground/70 mb-4">
            Have questions, feedback, or suggestions? We&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
}




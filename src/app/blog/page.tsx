import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Unit Converter blog - Tips, guides, and articles about unit conversions, measurement systems, and more.",
  openGraph: {
    title: "Blog | Unit Converter",
    description:
      "Tips, guides, and articles about unit conversions and measurement systems.",
  },
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Blog
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Tips, guides, and articles about unit conversions and measurement systems.
        </p>
      </div>

      {/* Coming Soon */}
      <div className="bg-card rounded-xl p-8 sm:p-12 shadow-sm border border-border text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Coming Soon!
        </h2>
        <p className="text-foreground/70 mb-6 max-w-md mx-auto">
          We&apos;re working on helpful articles about unit conversions, measurement 
          history, and practical tips. Check back soon!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Start Converting
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Suggest a Topic
          </Link>
        </div>
      </div>

      {/* Topics Preview */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
          Topics We&apos;ll Cover
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-card rounded-lg p-4 border border-border">
            <span className="text-2xl mb-2 block">📏</span>
            <h4 className="font-medium text-foreground mb-1">Measurement Systems</h4>
            <p className="text-sm text-foreground/60">
              History and differences between metric and imperial systems.
            </p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border">
            <span className="text-2xl mb-2 block">🍳</span>
            <h4 className="font-medium text-foreground mb-1">Cooking Conversions</h4>
            <p className="text-sm text-foreground/60">
              Converting recipes between cups, grams, and milliliters.
            </p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border">
            <span className="text-2xl mb-2 block">🌡️</span>
            <h4 className="font-medium text-foreground mb-1">Temperature Tips</h4>
            <p className="text-sm text-foreground/60">
              Quick tricks for Fahrenheit to Celsius conversions.
            </p>
          </div>
          <div className="bg-card rounded-lg p-4 border border-border">
            <span className="text-2xl mb-2 block">💾</span>
            <h4 className="font-medium text-foreground mb-1">Digital Storage</h4>
            <p className="text-sm text-foreground/60">
              Understanding bytes, kilobytes, megabytes, and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

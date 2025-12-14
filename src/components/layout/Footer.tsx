import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">UC</span>
              </div>
              <span className="font-semibold text-lg text-foreground">
                Unit Converter
              </span>
            </Link>
            <p className="text-foreground/60 text-sm max-w-md">
              Quick and accurate unit conversions for weight, length,
              temperature, and volume. Simple, fast, and free.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-foreground/60 hover:text-primary text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-foreground/60 hover:text-primary text-sm transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-foreground/60 hover:text-primary text-sm transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-foreground/60 hover:text-primary text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-foreground/60 hover:text-primary text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Tools & Partners Placeholder */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-foreground/40 text-xs text-center">
            Tools &amp; Partners - Coming Soon
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-border">
          <p className="text-foreground/60 text-sm text-center">
            © {currentYear} Unit Converter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

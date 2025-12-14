import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 mb-3 sm:mb-4 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
              aria-label="Unit Converter - Go to homepage"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                <span className="text-white font-bold text-sm">UC</span>
              </div>
              <span className="font-semibold text-base sm:text-lg text-foreground">
                Unit Converter
              </span>
            </Link>
            <p className="text-foreground/60 text-xs sm:text-sm max-w-md">
              Quick and accurate unit conversions for weight, length,
              temperature, and volume. Simple, fast, and free.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-labelledby="footer-quick-links">
            <h3 id="footer-quick-links" className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/"
                  className="inline-flex items-center min-h-[44px] text-foreground/60 hover:text-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="inline-flex items-center min-h-[44px] text-foreground/60 hover:text-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center min-h-[44px] text-foreground/60 hover:text-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-labelledby="footer-legal">
            <h3 id="footer-legal" className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex items-center min-h-[44px] text-foreground/60 hover:text-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="inline-flex items-center min-h-[44px] text-foreground/60 hover:text-primary text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Tools & Partners Placeholder */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border">
          <p className="text-foreground/40 text-xs text-center">
            Tools &amp; Partners - Coming Soon
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-4 border-t border-border">
          <p className="text-foreground/60 text-xs sm:text-sm text-center">
            © {currentYear} Unit Converter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

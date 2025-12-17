"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg"
            aria-label="Unit Converter - Go to homepage"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center" aria-hidden="true">
              <span className="text-white font-bold text-sm">UC</span>
            </div>
            <span className="font-semibold text-lg text-foreground">
              Unit Converter
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <Link
              href="/"
              className="text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
            >
              Home
            </Link>
            <Link
              href="/#converters"
              className="text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
            >
              Converters
            </Link>
            <Link
              href="/blog"
              className="text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-foreground/80 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
            >
              About
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile: Theme Toggle + Menu Button */}
          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <button
            className="md:hidden p-3 min-w-[48px] min-h-[48px] rounded-lg hover:bg-muted transition-colors flex items-center justify-center active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* Mobile Navigation - Large touch targets */}
        {isMobileMenuOpen && (
          <nav 
            id="mobile-navigation"
            className="md:hidden py-2 border-t border-border" 
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col" role="menu">
              <Link
                href="/"
                className="py-4 px-2 min-h-[48px] text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors rounded-lg flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                Home
              </Link>
              <Link
                href="/#converters"
                className="py-4 px-2 min-h-[48px] text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors rounded-lg flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                Converters
              </Link>
              <Link
                href="/blog"
                className="py-4 px-2 min-h-[48px] text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors rounded-lg flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="py-4 px-2 min-h-[48px] text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors rounded-lg flex items-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                onClick={() => setIsMobileMenuOpen(false)}
                role="menuitem"
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

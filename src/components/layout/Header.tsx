"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">UC</span>
            </div>
            <span className="font-semibold text-lg text-foreground">
              Unit Converter
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#converters"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              Converters
            </Link>
            <Link
              href="/about"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu Button - 48px touch target */}
          <button
            className="md:hidden p-3 min-w-[48px] min-h-[48px] rounded-lg hover:bg-muted transition-colors flex items-center justify-center active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        {/* Mobile Navigation - Large touch targets */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-2 border-t border-border">
            <div className="flex flex-col">
              <Link
                href="/"
                className="py-4 px-2 min-h-[48px] text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors rounded-lg flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#converters"
                className="py-4 px-2 min-h-[48px] text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors rounded-lg flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Converters
              </Link>
              <Link
                href="/about"
                className="py-4 px-2 min-h-[48px] text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors rounded-lg flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
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

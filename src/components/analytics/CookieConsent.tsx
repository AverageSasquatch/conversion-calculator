"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("analytics-consent");
    if (consent === null) {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("analytics-consent", "true");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("analytics-consent", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background border-t border-border shadow-lg"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1">
          <h2 id="cookie-consent-title" className="font-semibold text-foreground text-sm mb-1">
            Cookie Preferences
          </h2>
          <p id="cookie-consent-description" className="text-foreground/70 text-xs sm:text-sm">
            We use cookies to analyze site usage and improve your experience.
            No personal data is collected.{" "}
            <Link
              href="/privacy"
              className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
            >
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 sm:flex-none px-4 py-2 min-h-[44px] text-sm font-medium text-foreground/70 bg-muted border border-border rounded-lg hover:bg-border transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 sm:flex-none px-4 py-2 min-h-[44px] text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}






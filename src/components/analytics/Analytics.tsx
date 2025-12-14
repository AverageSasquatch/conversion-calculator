"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Simple privacy-friendly analytics placeholder
// Replace with your preferred analytics provider (Plausible, Umami, Simple Analytics, etc.)

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
    
    // Check if analytics consent is given
    const consent = localStorage.getItem("analytics-consent");
    if (consent !== "true") return;

    // Log pageview (replace with actual analytics call)
    if (process.env.NODE_ENV === "production") {
      // Example: Send to your analytics endpoint
      // fetch('/api/analytics', { method: 'POST', body: JSON.stringify({ url, timestamp: Date.now() }) });
      console.log("Pageview tracked:", url);
    }
  }, [pathname, searchParams]);

  return null;
}

// Track conversion events
export function trackConversion(
  fromUnit: string,
  toUnit: string,
  fromValue: number
) {
  const consent = localStorage.getItem("analytics-consent");
  if (consent !== "true") return;

  if (process.env.NODE_ENV === "production") {
    // Example: Track conversion event
    console.log("Conversion tracked:", { fromUnit, toUnit, fromValue });
  }
}


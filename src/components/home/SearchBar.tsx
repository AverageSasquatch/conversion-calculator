"use client";

import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-0">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search a conversion..."
          className="w-full px-4 sm:px-5 py-4 pr-14 min-h-[56px] text-base sm:text-lg border border-border rounded-xl bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
          aria-label="Search for a conversion"
        />
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground/40 hover:text-primary transition-colors rounded-lg"
          aria-label="Search"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <p className="text-center text-foreground/50 text-xs sm:text-sm mt-3 px-2">
        Try: &quot;pounds to kg&quot;, &quot;celsius to fahrenheit&quot;, &quot;inches to cm&quot;
      </p>
    </div>
  );
}

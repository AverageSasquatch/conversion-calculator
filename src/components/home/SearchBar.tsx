"use client";

import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search a conversion..."
          className="w-full px-5 py-4 pr-12 text-lg border border-border rounded-xl bg-background text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
          aria-label="Search for a conversion"
        />
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-primary transition-colors"
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
      <p className="text-center text-foreground/50 text-sm mt-3">
        Try: &quot;pounds to kg&quot;, &quot;celsius to fahrenheit&quot;, &quot;inches to cm&quot;
      </p>
    </div>
  );
}

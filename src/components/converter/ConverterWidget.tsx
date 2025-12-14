"use client";

import { useState, useMemo } from "react";
import { getConversionBySlug, formatNumber } from "@/lib/conversions";

interface ConverterWidgetProps {
  slug: string;
}

export default function ConverterWidget({ slug }: ConverterWidgetProps) {
  const [fromValue, setFromValue] = useState<string>("1");
  const [isReversed, setIsReversed] = useState(false);

  // Get conversion data on client
  const conversion = getConversionBySlug(slug);

  // Calculate conversion result using useMemo
  const toValue = useMemo(() => {
    if (!conversion) return "";
    const numValue = parseFloat(fromValue);
    if (isNaN(numValue)) {
      return "";
    }

    const result = isReversed
      ? conversion.reverseConvert(numValue)
      : conversion.convert(numValue);
    return formatNumber(result);
  }, [fromValue, isReversed, conversion]);

  const handleSwap = () => {
    setIsReversed(!isReversed);
    // Update fromValue to be the current toValue
    setFromValue(toValue);
  };

  if (!conversion) return null;

  const fromUnit = isReversed ? conversion.toUnit : conversion.fromUnit;
  const toUnit = isReversed ? conversion.fromUnit : conversion.toUnit;

  return (
    <div 
      className="bg-background border border-border rounded-xl p-4 sm:p-6 shadow-sm"
      role="form"
      aria-label={`Convert ${fromUnit.name} to ${toUnit.name}`}
    >
      {/* From Input */}
      <div className="space-y-2">
        <label
          htmlFor="from-value"
          className="block text-sm sm:text-base font-medium text-foreground/70"
        >
          From ({fromUnit.name})
        </label>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <input
            id="from-value"
            type="number"
            inputMode="decimal"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            className="w-full sm:flex-1 px-4 py-3 min-h-[48px] text-lg sm:text-xl border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter value"
            aria-describedby="from-unit-display"
          />
          <div 
            id="from-unit-display"
            className="px-4 py-3 min-h-[48px] bg-muted border border-border rounded-lg min-w-[100px] flex items-center justify-center"
            aria-label={`Unit: ${fromUnit.name}`}
          >
            <span className="font-medium text-foreground text-base sm:text-lg">
              {fromUnit.symbol}
            </span>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center my-4 sm:my-6">
        <button
          onClick={handleSwap}
          className="p-3 min-w-[48px] min-h-[48px] rounded-full bg-muted hover:bg-primary/10 border border-border hover:border-primary transition-colors group active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={`Swap units: Convert ${toUnit.name} to ${fromUnit.name} instead`}
          type="button"
        >
          <svg
            className="w-6 h-6 text-foreground/60 group-hover:text-primary transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
            />
          </svg>
        </button>
      </div>

      {/* To Output */}
      <div className="space-y-2">
        <label
          htmlFor="to-value"
          className="block text-sm sm:text-base font-medium text-foreground/70"
        >
          To ({toUnit.name})
        </label>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <input
            id="to-value"
            type="text"
            value={toValue}
            readOnly
            aria-live="polite"
            aria-atomic="true"
            aria-describedby="to-unit-display"
            className="w-full sm:flex-1 px-4 py-3 min-h-[48px] text-lg sm:text-xl border border-border rounded-lg bg-muted text-foreground font-semibold"
            placeholder="Result"
          />
          <div 
            id="to-unit-display"
            className="px-4 py-3 min-h-[48px] bg-muted border border-border rounded-lg min-w-[100px] flex items-center justify-center"
            aria-label={`Unit: ${toUnit.name}`}
          >
            <span className="font-medium text-foreground text-base sm:text-lg">{toUnit.symbol}</span>
          </div>
        </div>
      </div>

      {/* Result Summary - Screen reader announcement */}
      {fromValue && toValue && (
        <div 
          className="mt-4 sm:mt-6 p-3 sm:p-4 bg-primary/5 border border-primary/20 rounded-lg text-center"
          role="status"
          aria-live="polite"
        >
          <p className="text-base sm:text-lg text-foreground leading-relaxed">
            <span className="font-semibold">{fromValue}</span>{" "}
            <span className="text-foreground/70">{fromUnit.name}</span>
            <span className="mx-1 sm:mx-2" aria-hidden="true">=</span>
            <span className="sr-only">equals</span>
            <span className="font-semibold text-primary">{toValue}</span>{" "}
            <span className="text-foreground/70">{toUnit.name}</span>
          </p>
        </div>
      )}
    </div>
  );
}

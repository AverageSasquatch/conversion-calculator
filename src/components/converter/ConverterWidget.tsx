"use client";

import { useState, useMemo } from "react";
import { ConversionPair, formatNumber } from "@/lib/conversions";

interface ConverterWidgetProps {
  conversion: ConversionPair;
}

export default function ConverterWidget({ conversion }: ConverterWidgetProps) {
  const [fromValue, setFromValue] = useState<string>("1");
  const [isReversed, setIsReversed] = useState(false);

  // Calculate conversion result using useMemo instead of useEffect + setState
  const toValue = useMemo(() => {
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

  const fromUnit = isReversed ? conversion.toUnit : conversion.fromUnit;
  const toUnit = isReversed ? conversion.fromUnit : conversion.toUnit;

  return (
    <div className="bg-background border border-border rounded-xl p-6 shadow-sm">
      {/* From Input */}
      <div className="space-y-2">
        <label
          htmlFor="from-value"
          className="block text-sm font-medium text-foreground/70"
        >
          From
        </label>
        <div className="flex gap-3">
          <input
            id="from-value"
            type="number"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            className="flex-1 px-4 py-3 text-lg border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Enter value"
          />
          <div className="px-4 py-3 bg-muted border border-border rounded-lg min-w-[100px] flex items-center justify-center">
            <span className="font-medium text-foreground">
              {fromUnit.symbol}
            </span>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center my-4">
        <button
          onClick={handleSwap}
          className="p-3 rounded-full bg-muted hover:bg-primary/10 border border-border hover:border-primary transition-colors group"
          aria-label="Swap units"
        >
          <svg
            className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
          className="block text-sm font-medium text-foreground/70"
        >
          To
        </label>
        <div className="flex gap-3">
          <input
            id="to-value"
            type="text"
            value={toValue}
            readOnly
            className="flex-1 px-4 py-3 text-lg border border-border rounded-lg bg-muted text-foreground font-semibold"
            placeholder="Result"
          />
          <div className="px-4 py-3 bg-muted border border-border rounded-lg min-w-[100px] flex items-center justify-center">
            <span className="font-medium text-foreground">{toUnit.symbol}</span>
          </div>
        </div>
      </div>

      {/* Result Summary */}
      {fromValue && toValue && (
        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg text-center">
          <p className="text-lg text-foreground">
            <span className="font-semibold">{fromValue}</span>{" "}
            <span className="text-foreground/70">{fromUnit.name}</span>
            <span className="mx-2">=</span>
            <span className="font-semibold text-primary">{toValue}</span>{" "}
            <span className="text-foreground/70">{toUnit.name}</span>
          </p>
        </div>
      )}
    </div>
  );
}

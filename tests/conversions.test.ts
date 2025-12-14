/**
 * Unit tests for conversion formulas
 * Run with: npx tsx tests/conversions.test.ts
 * Or integrate with your test runner (Jest, Vitest, etc.)
 */

import { conversions } from "../src/lib/conversions";

// Test data with known values
const testCases: Record<string, { input: number; expected: number }[]> = {
  // Weight
  "pounds-to-kilograms": [
    { input: 0, expected: 0 },
    { input: 1, expected: 0.453592 },
    { input: 2, expected: 0.907184 },
    { input: 10, expected: 4.53592 },
    { input: 100, expected: 45.3592 },
  ],
  "ounces-to-grams": [
    { input: 0, expected: 0 },
    { input: 1, expected: 28.3495 },
    { input: 16, expected: 453.592 },
    { input: 0.5, expected: 14.17475 },
  ],
  "kilograms-to-stones": [
    { input: 0, expected: 0 },
    { input: 6.35029, expected: 1 },
    { input: 63.5029, expected: 10 },
  ],
  // Length
  "inches-to-centimeters": [
    { input: 0, expected: 0 },
    { input: 1, expected: 2.54 },
    { input: 12, expected: 30.48 },
    { input: 36, expected: 91.44 },
  ],
  "feet-to-meters": [
    { input: 0, expected: 0 },
    { input: 1, expected: 0.3048 },
    { input: 3, expected: 0.9144 },
    { input: 100, expected: 30.48 },
  ],
  "miles-to-kilometers": [
    { input: 0, expected: 0 },
    { input: 1, expected: 1.60934 },
    { input: 5, expected: 8.0467 },
  ],
  // Temperature
  "fahrenheit-to-celsius": [
    { input: 32, expected: 0 },
    { input: 212, expected: 100 },
    { input: 0, expected: -17.7778 },
    { input: 98.6, expected: 37 },
    { input: -40, expected: -40 },
  ],
  "celsius-to-kelvin": [
    { input: 0, expected: 273.15 },
    { input: 100, expected: 373.15 },
    { input: -273.15, expected: 0 },
  ],
  // Volume
  "liters-to-milliliters": [
    { input: 0, expected: 0 },
    { input: 1, expected: 1000 },
    { input: 0.5, expected: 500 },
    { input: 2.5, expected: 2500 },
  ],
  "gallons-to-liters": [
    { input: 0, expected: 0 },
    { input: 1, expected: 3.78541 },
    { input: 5, expected: 18.92705 },
    { input: 10, expected: 37.8541 },
  ],
  "cups-to-milliliters": [
    { input: 0, expected: 0 },
    { input: 1, expected: 236.588 },
    { input: 2, expected: 473.176 },
  ],
  // Data Size
  "megabytes-to-gigabytes": [
    { input: 0, expected: 0 },
    { input: 1024, expected: 1 },
    { input: 2048, expected: 2 },
  ],
  "gigabytes-to-terabytes": [
    { input: 0, expected: 0 },
    { input: 1024, expected: 1 },
    { input: 512, expected: 0.5 },
  ],
  "kilobytes-to-megabytes": [
    { input: 0, expected: 0 },
    { input: 1024, expected: 1 },
    { input: 2048, expected: 2 },
  ],
  // Time
  "hours-to-minutes": [
    { input: 0, expected: 0 },
    { input: 1, expected: 60 },
    { input: 2.5, expected: 150 },
  ],
  "days-to-hours": [
    { input: 0, expected: 0 },
    { input: 1, expected: 24 },
    { input: 7, expected: 168 },
  ],
  "weeks-to-days": [
    { input: 0, expected: 0 },
    { input: 1, expected: 7 },
    { input: 4, expected: 28 },
  ],
  // Area
  "square-feet-to-square-meters": [
    { input: 0, expected: 0 },
    { input: 1, expected: 0.092903 },
    { input: 100, expected: 9.2903 },
  ],
  "acres-to-hectares": [
    { input: 0, expected: 0 },
    { input: 1, expected: 0.404686 },
    { input: 10, expected: 4.04686 },
  ],
  "square-miles-to-square-kilometers": [
    { input: 0, expected: 0 },
    { input: 1, expected: 2.58999 },
    { input: 5, expected: 12.94995 },
  ],
  // Speed
  "mph-to-kmh": [
    { input: 0, expected: 0 },
    { input: 1, expected: 1.60934 },
    { input: 60, expected: 96.5604 },
  ],
  "kmh-to-ms": [
    { input: 0, expected: 0 },
    { input: 3.6, expected: 1 },
    { input: 36, expected: 10 },
  ],
  "knots-to-mph": [
    { input: 0, expected: 0 },
    { input: 1, expected: 1.15078 },
    { input: 100, expected: 115.078 },
  ],
};

// Tolerance for floating point comparisons
const EPSILON = 0.001;

function runTests() {
  let passed = 0;
  let failed = 0;
  const errors: string[] = [];

  console.log("Running conversion tests...\n");
  console.log(`Testing ${Object.keys(testCases).length} converters with ${conversions.length} total available\n`);

  for (const [slug, cases] of Object.entries(testCases)) {
    const conversion = conversions.find((c) => c.slug === slug);
    
    if (!conversion) {
      console.error(`❌ Conversion not found: ${slug}`);
      errors.push(`Conversion not found: ${slug}`);
      failed++;
      continue;
    }

    console.log(`Testing: ${conversion.title}`);

    for (const { input, expected } of cases) {
      const result = conversion.convert(input);
      const diff = Math.abs(result - expected);
      
      if (diff < EPSILON) {
        console.log(`  ✅ ${input} ${conversion.fromUnit.symbol} → ${result.toFixed(4)} ${conversion.toUnit.symbol}`);
        passed++;
      } else {
        console.log(`  ❌ ${input} ${conversion.fromUnit.symbol} → ${result.toFixed(4)} (expected ${expected})`);
        errors.push(`${slug}: ${input} → ${result.toFixed(4)} (expected ${expected})`);
        failed++;
      }
    }

    // Test reverse conversion
    console.log(`  Testing reverse...`);
    for (const { input, expected } of cases) {
      if (input === 0 && expected === 0) continue; // Skip zero cases
      
      const reversed = conversion.reverseConvert(expected);
      const diff = Math.abs(reversed - input);
      
      if (diff < EPSILON) {
        console.log(`  ✅ ${expected} ${conversion.toUnit.symbol} → ${reversed.toFixed(4)} ${conversion.fromUnit.symbol}`);
        passed++;
      } else {
        console.log(`  ❌ ${expected} ${conversion.toUnit.symbol} → ${reversed.toFixed(4)} (expected ${input})`);
        errors.push(`${slug} (reverse): ${expected} → ${reversed.toFixed(4)} (expected ${input})`);
        failed++;
      }
    }

    console.log("");
  }

  console.log("=".repeat(50));
  console.log(`Results: ${passed} passed, ${failed} failed`);
  console.log(`Total converters available: ${conversions.length}`);
  
  if (errors.length > 0) {
    console.log("\nErrors:");
    errors.forEach((e) => console.log(`  - ${e}`));
    process.exit(1);
  } else {
    console.log("\n✅ All tests passed!");
    process.exit(0);
  }
}

// Run if executed directly
runTests();

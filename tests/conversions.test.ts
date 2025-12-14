/**
 * Unit tests for conversion formulas
 * Run with: npx ts-node --esm tests/conversions.test.ts
 * Or integrate with your test runner (Jest, Vitest, etc.)
 */

import { conversions } from "../src/lib/conversions";

// Test data with known values
const testCases = {
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
  "fahrenheit-to-celsius": [
    { input: 32, expected: 0 },
    { input: 212, expected: 100 },
    { input: 0, expected: -17.7778 },
    { input: 98.6, expected: 37 },
    { input: -40, expected: -40 },
  ],
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
};

// Tolerance for floating point comparisons
const EPSILON = 0.0001;

function runTests() {
  let passed = 0;
  let failed = 0;
  const errors: string[] = [];

  console.log("Running conversion tests...\n");

  for (const [slug, cases] of Object.entries(testCases)) {
    const conversion = conversions.find((c) => c.slug === slug);
    
    if (!conversion) {
      console.error(`❌ Conversion not found: ${slug}`);
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
      if (input === 0) continue; // Skip division by zero cases
      
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

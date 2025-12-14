// Conversion types and data

export interface ConversionUnit {
  id: string;
  name: string;
  symbol: string;
}

export interface ConversionPair {
  slug: string;
  category: string;
  fromUnit: ConversionUnit;
  toUnit: ConversionUnit;
  title: string;
  description: string;
  explanation: string;
  convert: (value: number) => number;
  reverseConvert: (value: number) => number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  converters: string[]; // slugs
}

// Categories
export const categories: Category[] = [
  {
    id: "weight",
    name: "Weight",
    description: "Convert between pounds, kilograms, ounces, and grams",
    icon: "⚖️",
    converters: ["pounds-to-kilograms", "ounces-to-grams"],
  },
  {
    id: "length",
    name: "Length",
    description: "Convert between inches, centimeters, feet, and meters",
    icon: "📏",
    converters: ["inches-to-centimeters", "feet-to-meters"],
  },
  {
    id: "temperature",
    name: "Temperature",
    description: "Convert between Fahrenheit and Celsius",
    icon: "🌡️",
    converters: ["fahrenheit-to-celsius"],
  },
  {
    id: "volume",
    name: "Volume",
    description: "Convert between liters, milliliters, and gallons",
    icon: "🧪",
    converters: ["liters-to-milliliters", "gallons-to-liters"],
  },
];

// All conversion pairs with formulas
export const conversions: ConversionPair[] = [
  // Weight
  {
    slug: "pounds-to-kilograms",
    category: "weight",
    fromUnit: { id: "lb", name: "Pounds", symbol: "lb" },
    toUnit: { id: "kg", name: "Kilograms", symbol: "kg" },
    title: "Pounds to Kilograms Converter",
    description:
      "Convert pounds (lb) to kilograms (kg) instantly. Free online weight converter with accurate results.",
    explanation:
      "One pound equals approximately 0.453592 kilograms. The pound is commonly used in the United States and the United Kingdom, while the kilogram is the standard unit of mass in the metric system used worldwide.",
    convert: (value: number) => value * 0.453592,
    reverseConvert: (value: number) => value / 0.453592,
  },
  {
    slug: "ounces-to-grams",
    category: "weight",
    fromUnit: { id: "oz", name: "Ounces", symbol: "oz" },
    toUnit: { id: "g", name: "Grams", symbol: "g" },
    title: "Ounces to Grams Converter",
    description:
      "Convert ounces (oz) to grams (g) instantly. Free online weight converter with accurate results.",
    explanation:
      "One ounce equals approximately 28.3495 grams. Ounces are commonly used in the United States for measuring weight, especially for food and precious metals, while grams are the standard metric unit.",
    convert: (value: number) => value * 28.3495,
    reverseConvert: (value: number) => value / 28.3495,
  },
  // Length
  {
    slug: "inches-to-centimeters",
    category: "length",
    fromUnit: { id: "in", name: "Inches", symbol: "in" },
    toUnit: { id: "cm", name: "Centimeters", symbol: "cm" },
    title: "Inches to Centimeters Converter",
    description:
      "Convert inches (in) to centimeters (cm) instantly. Free online length converter with accurate results.",
    explanation:
      "One inch equals exactly 2.54 centimeters. The inch is a unit of length in the imperial system, while the centimeter is part of the metric system used by most countries worldwide.",
    convert: (value: number) => value * 2.54,
    reverseConvert: (value: number) => value / 2.54,
  },
  {
    slug: "feet-to-meters",
    category: "length",
    fromUnit: { id: "ft", name: "Feet", symbol: "ft" },
    toUnit: { id: "m", name: "Meters", symbol: "m" },
    title: "Feet to Meters Converter",
    description:
      "Convert feet (ft) to meters (m) instantly. Free online length converter with accurate results.",
    explanation:
      "One foot equals exactly 0.3048 meters. The foot is commonly used in the United States for measuring height and distance, while the meter is the base unit of length in the metric system.",
    convert: (value: number) => value * 0.3048,
    reverseConvert: (value: number) => value / 0.3048,
  },
  // Temperature
  {
    slug: "fahrenheit-to-celsius",
    category: "temperature",
    fromUnit: { id: "f", name: "Fahrenheit", symbol: "°F" },
    toUnit: { id: "c", name: "Celsius", symbol: "°C" },
    title: "Fahrenheit to Celsius Converter",
    description:
      "Convert Fahrenheit (°F) to Celsius (°C) instantly. Free online temperature converter with accurate results.",
    explanation:
      "To convert Fahrenheit to Celsius, subtract 32 from the Fahrenheit value and multiply by 5/9. Fahrenheit is commonly used in the United States, while Celsius is the standard temperature scale used worldwide.",
    convert: (value: number) => ((value - 32) * 5) / 9,
    reverseConvert: (value: number) => (value * 9) / 5 + 32,
  },
  // Volume
  {
    slug: "liters-to-milliliters",
    category: "volume",
    fromUnit: { id: "l", name: "Liters", symbol: "L" },
    toUnit: { id: "ml", name: "Milliliters", symbol: "mL" },
    title: "Liters to Milliliters Converter",
    description:
      "Convert liters (L) to milliliters (mL) instantly. Free online volume converter with accurate results.",
    explanation:
      "One liter equals exactly 1000 milliliters. Both are metric units of volume, with liters commonly used for larger quantities and milliliters for smaller amounts, especially in cooking and medicine.",
    convert: (value: number) => value * 1000,
    reverseConvert: (value: number) => value / 1000,
  },
  {
    slug: "gallons-to-liters",
    category: "volume",
    fromUnit: { id: "gal", name: "Gallons", symbol: "gal" },
    toUnit: { id: "l", name: "Liters", symbol: "L" },
    title: "Gallons to Liters Converter",
    description:
      "Convert gallons (gal) to liters (L) instantly. Free online volume converter with accurate results.",
    explanation:
      "One US gallon equals approximately 3.78541 liters. The gallon is commonly used in the United States for measuring liquid volumes, especially for fuel and beverages, while the liter is the standard metric unit.",
    convert: (value: number) => value * 3.78541,
    reverseConvert: (value: number) => value / 3.78541,
  },
];

// Helper functions
export function getConversionBySlug(slug: string): ConversionPair | undefined {
  return conversions.find((c) => c.slug === slug);
}

export function getConversionsByCategory(category: string): ConversionPair[] {
  return conversions.filter((c) => c.category === category);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getRelatedConversions(
  currentSlug: string,
  limit: number = 3
): ConversionPair[] {
  const current = getConversionBySlug(currentSlug);
  if (!current) return [];

  // Get conversions from same category first, then others
  const sameCategory = conversions.filter(
    (c) => c.category === current.category && c.slug !== currentSlug
  );
  const otherCategory = conversions.filter(
    (c) => c.category !== current.category
  );

  return [...sameCategory, ...otherCategory].slice(0, limit);
}

// Format number for display
export function formatNumber(value: number, decimals: number = 4): string {
  if (isNaN(value) || !isFinite(value)) return "0";
  
  // Remove trailing zeros after decimal point
  const fixed = value.toFixed(decimals);
  return parseFloat(fixed).toString();
}

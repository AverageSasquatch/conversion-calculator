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
    converters: ["pounds-to-kilograms", "ounces-to-grams", "kilograms-to-stones"],
  },
  {
    id: "length",
    name: "Length",
    description: "Convert between inches, centimeters, feet, and meters",
    icon: "📏",
    converters: ["inches-to-centimeters", "feet-to-meters", "miles-to-kilometers"],
  },
  {
    id: "temperature",
    name: "Temperature",
    description: "Convert between Fahrenheit, Celsius, and Kelvin",
    icon: "🌡️",
    converters: ["fahrenheit-to-celsius", "celsius-to-kelvin"],
  },
  {
    id: "volume",
    name: "Volume",
    description: "Convert between liters, milliliters, and gallons",
    icon: "🧪",
    converters: ["liters-to-milliliters", "gallons-to-liters", "cups-to-milliliters"],
  },
  {
    id: "data",
    name: "Data Size",
    description: "Convert between bytes, kilobytes, megabytes, and gigabytes",
    icon: "💾",
    converters: ["megabytes-to-gigabytes", "gigabytes-to-terabytes", "kilobytes-to-megabytes"],
  },
  {
    id: "time",
    name: "Time",
    description: "Convert between seconds, minutes, hours, and days",
    icon: "⏱️",
    converters: ["hours-to-minutes", "days-to-hours", "weeks-to-days"],
  },
  {
    id: "area",
    name: "Area",
    description: "Convert between square feet, square meters, and acres",
    icon: "📐",
    converters: ["square-feet-to-square-meters", "acres-to-hectares", "square-miles-to-square-kilometers"],
  },
  {
    id: "speed",
    name: "Speed",
    description: "Convert between mph, km/h, and m/s",
    icon: "🚗",
    converters: ["mph-to-kmh", "kmh-to-ms", "knots-to-mph"],
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
  {
    slug: "cups-to-milliliters",
    category: "volume",
    fromUnit: { id: "cup", name: "Cups", symbol: "cup" },
    toUnit: { id: "ml", name: "Milliliters", symbol: "mL" },
    title: "Cups to Milliliters Converter",
    description:
      "Convert cups to milliliters (mL) instantly. Free online volume converter for cooking and baking.",
    explanation:
      "One US cup equals approximately 236.588 milliliters. Cups are commonly used in cooking recipes in the United States, while milliliters provide more precise measurements used in most other countries.",
    convert: (value: number) => value * 236.588,
    reverseConvert: (value: number) => value / 236.588,
  },
  // Additional Weight
  {
    slug: "kilograms-to-stones",
    category: "weight",
    fromUnit: { id: "kg", name: "Kilograms", symbol: "kg" },
    toUnit: { id: "st", name: "Stones", symbol: "st" },
    title: "Kilograms to Stones Converter",
    description:
      "Convert kilograms (kg) to stones (st) instantly. Free online weight converter with accurate results.",
    explanation:
      "One stone equals approximately 6.35029 kilograms. The stone is commonly used in the UK and Ireland for measuring body weight, while the kilogram is the standard metric unit used worldwide.",
    convert: (value: number) => value / 6.35029,
    reverseConvert: (value: number) => value * 6.35029,
  },
  // Additional Length
  {
    slug: "miles-to-kilometers",
    category: "length",
    fromUnit: { id: "mi", name: "Miles", symbol: "mi" },
    toUnit: { id: "km", name: "Kilometers", symbol: "km" },
    title: "Miles to Kilometers Converter",
    description:
      "Convert miles (mi) to kilometers (km) instantly. Free online distance converter with accurate results.",
    explanation:
      "One mile equals approximately 1.60934 kilometers. Miles are commonly used in the United States and UK for road distances, while kilometers are the standard metric unit used by most countries worldwide.",
    convert: (value: number) => value * 1.60934,
    reverseConvert: (value: number) => value / 1.60934,
  },
  // Additional Temperature
  {
    slug: "celsius-to-kelvin",
    category: "temperature",
    fromUnit: { id: "c", name: "Celsius", symbol: "°C" },
    toUnit: { id: "k", name: "Kelvin", symbol: "K" },
    title: "Celsius to Kelvin Converter",
    description:
      "Convert Celsius (°C) to Kelvin (K) instantly. Free online temperature converter for scientific calculations.",
    explanation:
      "To convert Celsius to Kelvin, add 273.15 to the Celsius value. Kelvin is the SI base unit for temperature used in scientific contexts, where 0 K represents absolute zero.",
    convert: (value: number) => value + 273.15,
    reverseConvert: (value: number) => value - 273.15,
  },
  // Data Size
  {
    slug: "megabytes-to-gigabytes",
    category: "data",
    fromUnit: { id: "mb", name: "Megabytes", symbol: "MB" },
    toUnit: { id: "gb", name: "Gigabytes", symbol: "GB" },
    title: "Megabytes to Gigabytes Converter",
    description:
      "Convert megabytes (MB) to gigabytes (GB) instantly. Free online data size converter with accurate results.",
    explanation:
      "One gigabyte equals 1024 megabytes (binary) or 1000 megabytes (decimal). This converter uses the binary standard commonly used by operating systems and storage devices.",
    convert: (value: number) => value / 1024,
    reverseConvert: (value: number) => value * 1024,
  },
  {
    slug: "gigabytes-to-terabytes",
    category: "data",
    fromUnit: { id: "gb", name: "Gigabytes", symbol: "GB" },
    toUnit: { id: "tb", name: "Terabytes", symbol: "TB" },
    title: "Gigabytes to Terabytes Converter",
    description:
      "Convert gigabytes (GB) to terabytes (TB) instantly. Free online data size converter for storage calculations.",
    explanation:
      "One terabyte equals 1024 gigabytes (binary). This is useful for calculating storage requirements for large files, backups, and cloud storage.",
    convert: (value: number) => value / 1024,
    reverseConvert: (value: number) => value * 1024,
  },
  {
    slug: "kilobytes-to-megabytes",
    category: "data",
    fromUnit: { id: "kb", name: "Kilobytes", symbol: "KB" },
    toUnit: { id: "mb", name: "Megabytes", symbol: "MB" },
    title: "Kilobytes to Megabytes Converter",
    description:
      "Convert kilobytes (KB) to megabytes (MB) instantly. Free online data size converter with accurate results.",
    explanation:
      "One megabyte equals 1024 kilobytes (binary). Kilobytes are commonly used for measuring small files like documents, while megabytes are used for larger files like images and audio.",
    convert: (value: number) => value / 1024,
    reverseConvert: (value: number) => value * 1024,
  },
  // Time
  {
    slug: "hours-to-minutes",
    category: "time",
    fromUnit: { id: "hr", name: "Hours", symbol: "hr" },
    toUnit: { id: "min", name: "Minutes", symbol: "min" },
    title: "Hours to Minutes Converter",
    description:
      "Convert hours to minutes instantly. Free online time converter for scheduling and calculations.",
    explanation:
      "One hour equals exactly 60 minutes. This conversion is fundamental for time calculations, scheduling, and understanding durations.",
    convert: (value: number) => value * 60,
    reverseConvert: (value: number) => value / 60,
  },
  {
    slug: "days-to-hours",
    category: "time",
    fromUnit: { id: "day", name: "Days", symbol: "days" },
    toUnit: { id: "hr", name: "Hours", symbol: "hr" },
    title: "Days to Hours Converter",
    description:
      "Convert days to hours instantly. Free online time converter for project planning and scheduling.",
    explanation:
      "One day equals exactly 24 hours. This conversion is essential for project planning, travel calculations, and understanding time spans.",
    convert: (value: number) => value * 24,
    reverseConvert: (value: number) => value / 24,
  },
  {
    slug: "weeks-to-days",
    category: "time",
    fromUnit: { id: "wk", name: "Weeks", symbol: "wk" },
    toUnit: { id: "day", name: "Days", symbol: "days" },
    title: "Weeks to Days Converter",
    description:
      "Convert weeks to days instantly. Free online time converter for planning and scheduling.",
    explanation:
      "One week equals exactly 7 days. This conversion is useful for project timelines, planning events, and calculating deadlines.",
    convert: (value: number) => value * 7,
    reverseConvert: (value: number) => value / 7,
  },
  // Area
  {
    slug: "square-feet-to-square-meters",
    category: "area",
    fromUnit: { id: "sqft", name: "Square Feet", symbol: "ft²" },
    toUnit: { id: "sqm", name: "Square Meters", symbol: "m²" },
    title: "Square Feet to Square Meters Converter",
    description:
      "Convert square feet (ft²) to square meters (m²) instantly. Free online area converter for real estate and construction.",
    explanation:
      "One square foot equals approximately 0.092903 square meters. Square feet are commonly used in the US for real estate, while square meters are the global standard.",
    convert: (value: number) => value * 0.092903,
    reverseConvert: (value: number) => value / 0.092903,
  },
  {
    slug: "acres-to-hectares",
    category: "area",
    fromUnit: { id: "ac", name: "Acres", symbol: "ac" },
    toUnit: { id: "ha", name: "Hectares", symbol: "ha" },
    title: "Acres to Hectares Converter",
    description:
      "Convert acres to hectares instantly. Free online area converter for land measurements.",
    explanation:
      "One acre equals approximately 0.404686 hectares. Acres are commonly used in the US and UK for land area, while hectares are the metric standard used internationally.",
    convert: (value: number) => value * 0.404686,
    reverseConvert: (value: number) => value / 0.404686,
  },
  {
    slug: "square-miles-to-square-kilometers",
    category: "area",
    fromUnit: { id: "sqmi", name: "Square Miles", symbol: "mi²" },
    toUnit: { id: "sqkm", name: "Square Kilometers", symbol: "km²" },
    title: "Square Miles to Square Kilometers Converter",
    description:
      "Convert square miles (mi²) to square kilometers (km²) instantly. Free online area converter for geography.",
    explanation:
      "One square mile equals approximately 2.58999 square kilometers. This conversion is useful for comparing geographic areas between imperial and metric systems.",
    convert: (value: number) => value * 2.58999,
    reverseConvert: (value: number) => value / 2.58999,
  },
  // Speed
  {
    slug: "mph-to-kmh",
    category: "speed",
    fromUnit: { id: "mph", name: "Miles per Hour", symbol: "mph" },
    toUnit: { id: "kmh", name: "Kilometers per Hour", symbol: "km/h" },
    title: "MPH to KM/H Converter",
    description:
      "Convert miles per hour (mph) to kilometers per hour (km/h) instantly. Free online speed converter.",
    explanation:
      "One mile per hour equals approximately 1.60934 kilometers per hour. MPH is used in the US and UK, while km/h is the standard speed unit in most other countries.",
    convert: (value: number) => value * 1.60934,
    reverseConvert: (value: number) => value / 1.60934,
  },
  {
    slug: "kmh-to-ms",
    category: "speed",
    fromUnit: { id: "kmh", name: "Kilometers per Hour", symbol: "km/h" },
    toUnit: { id: "ms", name: "Meters per Second", symbol: "m/s" },
    title: "KM/H to M/S Converter",
    description:
      "Convert kilometers per hour (km/h) to meters per second (m/s) instantly. Free online speed converter for physics.",
    explanation:
      "One kilometer per hour equals approximately 0.277778 meters per second. M/s is the SI unit for speed used in scientific calculations and physics.",
    convert: (value: number) => value / 3.6,
    reverseConvert: (value: number) => value * 3.6,
  },
  {
    slug: "knots-to-mph",
    category: "speed",
    fromUnit: { id: "kn", name: "Knots", symbol: "kn" },
    toUnit: { id: "mph", name: "Miles per Hour", symbol: "mph" },
    title: "Knots to MPH Converter",
    description:
      "Convert knots to miles per hour (mph) instantly. Free online speed converter for marine and aviation.",
    explanation:
      "One knot equals approximately 1.15078 miles per hour. Knots are the standard unit for measuring speed in maritime and aviation contexts.",
    convert: (value: number) => value * 1.15078,
    reverseConvert: (value: number) => value / 1.15078,
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

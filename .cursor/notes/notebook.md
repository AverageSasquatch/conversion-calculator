# Development Notebook - Conversion Calculator Website

## Session Log

### Session 1 - December 14, 2025
**Objective**: Initial project setup and scaffolding

#### Discoveries
- PRD includes detailed functional and non-functional requirements
- Wireframes show 3 key layouts: desktop home, desktop converter, mobile
- 7 initial converters across 4 categories (Weight, Length, Temperature, Volume)

#### Design System (from PRD)
```css
/* Colors */
--background: #FFFFFF;
--text-primary: #333333;
--accent-primary: #4A90E2;
--accent-secondary: #7FA99B;
--background-neutral: #F5F5F5;

/* Typography */
Font: Sans-serif (system-ui or similar)
```

#### URL Structure
```
/                              → Homepage
/weight/pounds-to-kilograms    → Pounds ↔ Kilograms
/weight/ounces-to-grams        → Ounces ↔ Grams
/length/inches-to-centimeters  → Inches ↔ Centimeters
/length/feet-to-meters         → Feet ↔ Meters
/temperature/fahrenheit-to-celsius → Fahrenheit ↔ Celsius
/volume/liters-to-milliliters  → Liters ↔ Milliliters
/volume/gallons-to-liters      → Gallons ↔ Liters
```

#### Key Components Identified
1. **ConverterWidget** - The main conversion input/output component
2. **CategoryCard** - Homepage category selection cards
3. **AdPlaceholder** - Flexible ad placement component
4. **RelatedConversions** - Links to similar converters
5. **ExplanationSection** - Educational content about the conversion

---

## Technical Decisions

### Why Next.js App Router?
- Server-side rendering for SEO
- Static generation for converter pages (fast load times)
- Clean routing structure matches our URL requirements
- Built-in image optimization
- Easy Vercel deployment

### Component Architecture
```
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── AdPlaceholder.tsx
├── converter/
│   ├── ConverterWidget.tsx
│   ├── ConversionResult.tsx
│   ├── UnitDropdown.tsx
│   └── RelatedConversions.tsx
├── home/
│   ├── SearchBar.tsx
│   └── CategoryCard.tsx
└── ui/
    └── (shared UI components)
```

---

## Ideas for Future Iterations
- Add swap button between From/To inputs
- Keyboard shortcuts for common conversions
- Copy result to clipboard
- Conversion history (localStorage)
- More conversion categories

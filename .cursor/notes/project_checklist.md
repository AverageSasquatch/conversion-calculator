# Conversion Calculator Website - Project Checklist

## Project Overview
A minimal viable website (MVW) for unit conversions with SEO-optimized pages, clean UI, and basic monetization placeholders.

---

## Phase 1: Project Setup ✅ IN PROGRESS

### Environment Setup
- [ ] Initialize Next.js 14 with TypeScript and App Router
- [ ] Configure Tailwind CSS with design system colors
- [ ] Set up folder structure (components, lib, app)
- [ ] Initialize Git repository
- [ ] Create README.md with setup instructions

### Documentation
- [x] Create .cursor folder structure
- [x] Create project_checklist.md
- [x] Create agentnotes.md
- [x] Create notebook.md
- [ ] Move PRD to .cursor/docs

---

## Phase 2: Core Components

### Layout Components
- [ ] Header component (Logo + Navigation)
- [ ] Footer component (Links + Affiliate placeholder)
- [ ] Ad placeholder components (banner, sidebar)
- [ ] Mobile navigation (hamburger menu)

### Converter Components
- [ ] ConverterWidget component (From/To inputs with dropdowns)
- [ ] ConversionResult display
- [ ] ExplanationSection component
- [ ] RelatedConversions component
- [ ] CategoryCard component for homepage

---

## Phase 3: Pages Implementation

### Homepage (/)
- [ ] Hero section with search bar
- [ ] Category grid (Weight, Length, Temperature, Volume)
- [ ] Top banner ad placeholder
- [ ] Right-side ad placeholder (desktop)
- [ ] Footer with links

### Converter Pages
- [ ] /weight/pounds-to-kilograms
- [ ] /weight/ounces-to-grams
- [ ] /length/inches-to-centimeters
- [ ] /length/feet-to-meters
- [ ] /temperature/fahrenheit-to-celsius
- [ ] /volume/liters-to-milliliters
- [ ] /volume/gallons-to-liters

---

## Phase 4: Conversion Logic

### Formulas to Implement
- [ ] Pounds ↔ Kilograms (1 lb = 0.453592 kg)
- [ ] Ounces ↔ Grams (1 oz = 28.3495 g)
- [ ] Inches ↔ Centimeters (1 in = 2.54 cm)
- [ ] Feet ↔ Meters (1 ft = 0.3048 m)
- [ ] Fahrenheit ↔ Celsius (°C = (°F - 32) × 5/9)
- [ ] Liters ↔ Milliliters (1 L = 1000 mL)
- [ ] Gallons ↔ Liters (1 gal = 3.78541 L)

---

## Phase 5: SEO & Performance

### SEO Implementation
- [ ] Unique <title> and meta description per page
- [ ] Semantic HTML structure (h1, h2, etc.)
- [ ] Clean URL structure
- [ ] Open Graph meta tags
- [ ] Structured data (WebPage schema)

### Performance
- [ ] Optimize for Core Web Vitals
- [ ] Ensure Time to First Paint ≤ 2s
- [ ] No blocking scripts

---

## Phase 6: Accessibility & Polish

### Accessibility
- [ ] Keyboard navigation
- [ ] Proper color contrast (WCAG AA)
- [ ] Form labels and ARIA attributes
- [ ] Focus indicators

### Final Polish
- [ ] Responsive testing (mobile, tablet, desktop)
- [ ] Cross-browser testing
- [ ] Error handling for invalid inputs

---

## Technical Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: TBD (Vercel recommended)

## Design System
- Background: #FFFFFF
- Primary Text: #333333
- Primary Accent: #4A90E2
- Secondary Accent: #7FA99B
- Neutral Background: #F5F5F5

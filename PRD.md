<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Now create a prd with a minimal viable website release, in .md file format

Here is a concise PRD in Markdown format for a Minimal Viable Website Release (MVW) of your conversion site.

```markdown
# PRD: Conversion Calculator Website – Minimal Viable Website Release (MVW)

## 1. Overview

The Conversion Calculator Website is a utility site that allows users to quickly convert between units (weight, length, temperature, etc.) through a simple, minimalist interface. The MVW focuses on fast, accurate conversions, SEO-friendly structure, and light, non-intrusive monetization elements.

Primary goals:
- Provide fast, accurate unit conversions for core categories.
- Capture organic search traffic via SEO-optimized pages for specific conversions.
- Establish a clean visual foundation that can scale with additional features and monetization.

---

## 2. Target Users and Use Cases

### 2.1 Target Users
- Students needing quick conversions for homework.
- Professionals (engineers, developers, medical staff) needing unit conversions for work.
- General public searching “X to Y” (e.g., “lbs to kg”, “cm to inches”) on search engines.

### 2.2 Primary Use Cases
- User searches “X to Y converter” and lands directly on the specific converter page.
- User browses from homepage to select a category (e.g., Weight) and then specific converter.
- User performs a conversion with minimal steps and sees clear result immediately.
- User discovers related conversions and remains on site for additional tasks.

---

## 3. Scope of MVW

### 3.1 In-Scope Features

1. **Homepage**
   - Minimal header with logo (text or simple mark) and basic navigation.
   - Prominent search input (“Search a conversion…” – non-functional or basic for MVW).
   - Grid of core conversion categories:
     - Weight
     - Length
     - Temperature
     - Volume
   - Footer with basic links (About, Contact placeholder, Privacy, Terms).

2. **Converter Pages (Core Set)**
   Implement as individual, SEO-friendly pages with unique URLs and titles for:

   - Weight:
     - Pounds ↔ Kilograms
     - Ounces ↔ Grams
   - Length:
     - Inches ↔ Centimeters
     - Feet ↔ Meters
   - Temperature:
     - Fahrenheit ↔ Celsius
   - Volume:
     - Liters ↔ Milliliters
     - Gallons ↔ Liters

   Each converter page includes:
   - Page title and short description (SEO-friendly, human readable).
   - Converter widget:
     - “From” input field (numeric).
     - “From unit” dropdown.
     - “To” input field (numeric, read-only).
     - “To unit” dropdown.
     - Real-time or “Convert” button interaction.
   - Simple explanation section below (brief, non-technical).
   - “Related conversions” links section (links to other converters).

3. **Monetization (Basic)**
   - Single ad placeholder area on:
     - Homepage: top banner placeholder below header.
     - Converter pages: right sidebar placeholder on desktop; bottom placeholder on mobile.
   - Simple text placeholder for future affiliate links in the footer (“Tools & Partners”).

4. **UI / UX (Minimalist)**
   - Color palette:
     - Background: #FFFFFF
     - Primary text: #333333
     - Primary accent (buttons/links): #4A90E2
     - Secondary accent (success state or hover): #7FA99B
     - Neutral background elements: #F5F5F5
   - Typography:
     - Sans-serif web-safe or single web font (e.g., system UI or similar).
   - Layout:
     - Responsive layout for desktop, tablet, and mobile.
     - Focus on clarity and large tap targets on mobile.

5. **Technical**
   - Modern front-end framework (e.g., React/Next.js) with server-side rendering or static generation.
   - Clean URL structure:
     - `/` – homepage
     - `/weight/pounds-to-kilograms`
     - `/weight/ounces-to-grams`
     - `/length/inches-to-centimeters`
     - `/length/feet-to-meters`
     - `/temperature/fahrenheit-to-celsius`
     - `/volume/liters-to-milliliters`
     - `/volume/gallons-to-liters`
   - Basic analytics integration (e.g., pageview tracking).
   - Basic cookie/privacy banner (if required by jurisdiction).

---

## 4. Out of Scope (for MVW)

- User accounts, login, or saved conversions.
- Advanced categories (currency, data units, time, etc.).
- Full-site search with autocomplete.
- Dark mode.
- Complex ad management (only placeholders in MVW).
- Detailed content strategy beyond short descriptions and simple explanations.

---

## 5. Functional Requirements

### 5.1 Homepage

**FR-1**: Display site logo and navigation in a fixed or static header.  
**FR-2**: Show a non-functional or basic search bar labeled “Search a conversion…”.  
**FR-3**: Render category cards for Weight, Length, Temperature, Volume.  
**FR-4**: Each category card links to at least one converter page.  
**FR-5**: Render an ad placeholder area (non-functional) below the header and above main content.  
**FR-6**: Render footer with links (About, Contact placeholder, Privacy, Terms).

### 5.2 Converter Pages

**FR-7**: Each converter page loads with the correct title and unique URL.  
**FR-8**: “From” input accepts numeric values and updates result.  
**FR-9**: Conversion is calculated using correct formulas for each pair.  
**FR-10**: “From unit” and “To unit” dropdowns are preconfigured for that converter pair.  
**FR-11**: Result field is clearly readable and unambiguous.  
**FR-12**: Converter page displays a short explanatory text about the conversion.  
**FR-13**: “Related conversions” section lists at least 2 other converters as internal links.  
**FR-14**: Desktop layout shows an ad placeholder on the right sidebar; mobile layout shows an ad placeholder below the converter.

---

## 6. Non-Functional Requirements

### 6.1 Performance
- **NFR-1**: Time to first meaningful paint ≤ 2 seconds on a typical 4G mobile connection.
- **NFR-2**: Core Web Vitals targets met at a basic level (no blocking scripts, optimized images where used).

### 6.2 SEO
- **NFR-3**: Each page has unique `<title>` and meta description.
- **NFR-4**: Semantic HTML structure (one `<h1>` per page, logical heading hierarchy).
- **NFR-5**: Clean, descriptive URLs without query parameters for primary converters.
- **NFR-6**: Basic structured data (e.g., `WebPage`/`FAQ` where feasible) can be added in a later iteration; optional in MVW but schema-ready structure encouraged.

### 6.3 Accessibility
- **NFR-7**: All interactive elements are keyboard navigable.
- **NFR-8**: Sufficient color contrast between text and background.
- **NFR-9**: Form inputs have associated labels.

### 6.4 Security & Privacy
- **NFR-10**: All pages served over HTTPS.
- **NFR-11**: No collection of personal data in MVW beyond standard analytics.

---

## 7. Success Metrics for MVW

- Page load under 2 seconds for homepage and converter pages (lab tests).
- At least 8 working converter pages with accurate conversions.
- Basic search engine indexing for homepage and core converter pages.
- Time-on-page and bounce rates measured via analytics to inform later optimization.

---

## 8. Release Deliverables

- Deployed MVW at production domain.
- Source code repository with documented instructions for running and building.
- Basic style guide (colors, typography, spacing rules) documented in repo.
- List of implemented converters and test cases (sample input/output).

---

## 9. Future Iterations (Post-MVW, Informational)

- Expand to more unit types and conversions.
- Implement full search with autocomplete and suggestions.
- Introduce more sophisticated ad and affiliate integrations.
- Add localization/internationalization for multiple languages.
- Add content-rich guides to improve SEO authority.

```


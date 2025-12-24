<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Read this pdf, it is a comprehensive review of the site we have created. After reviewing it create a comprehensive list of what needs to be fixed. The create a step by step to do list of what needs to be done and how to do it. Then combine all of it into a markdown format file that can be downloaded.

Here’s a consolidated, implementation-focused plan based on the Brave-2.pdf audit for conversioncalc.tech, plus a ready-to-save markdown document at the end.

***

## 1. Comprehensive Fix List (What’s Wrong)

### Performance (Core Web Vitals \& Assets)

- LCP is good but **can be improved** (1.94s, target < 2.5s).
- INP is acceptable but **needs improvement** (120ms, target < 200ms).
- CLS is excellent (0.03, target < 0.1).
- TTFB is excellent (138ms, target < 800ms).
- **Total Blocking Time (TBT) is critical** (250ms, target < 200ms).
    - Third-party and app JS blocking main thread:
        - `https://pagead2.googlesyndication.com/...`
        - `/_next/static/chunks/...` (Next.js chunks)
        - Two inline `<script>` blocks (~1KB each).
- **No `fetchpriority="high"` on the LCP element** (your `<h1>` or associated hero).
- **No AVIF support** (modern image format).
- **No `<picture>` tags** for responsive image optimization.

***

### GEO (AI Discoverability / Generative Engine Optimization)

- **No `llms.txt` file** at the site root to guide AI crawlers.
- JSON-LD present but limited to:
    - `WebSite`
    - `SearchAction`
    - `EntryPoint`
- AI clarity is very good (95/100), but:
    - No content-level schemas (e.g., `BlogPosting`, `FAQPage`, `HowTo`) to help AI engines surface deeper content.

***

### SEO (On-site)

- Meta title is **too long** (68 chars):
    - `Unit Converter - Quick & Accurate Conversions | Free Online Tool`
- Meta description is **OK length** (158 chars), but generic for a multi-tool property.
- **Canonical tag is missing** on the homepage.
- 20 internal links / 0 external links:
    - Weak outbound link profile from the homepage.

***

### Security

- Overall security score: **45/100** – weak.
- CSP header is present but:
    - **Not nonce-based or strict-dynamic**, so less robust against XSS.
- **HSTS header is missing**:
    - No `Strict-Transport-Security` response header.
- **X-Content-Type-Options header is missing**:
    - No `X-Content-Type-Options: nosniff`.
- **Referrer-Policy header is missing**:
    - No `Referrer-Policy` header to reduce referrer leakage.

***

### Accessibility / UX

- Score is **strong (100/100)** with:
    - Dark mode supported.
    - Reduced motion respected.
    - Focus indicators visible.
- No immediate accessibility red flags in the audit; just maintain current good practices.

***

## 2. Step-by-Step To-Do List (What To Do \& How)

### Phase 1 – Security Hardening (Highest Risk Area)

#### 1.1 Add HSTS (Strict-Transport-Security)

**Goal:** Force all traffic over HTTPS and prevent downgrade attacks.

**What to do (Nginx example):**

```nginx
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

**What to do (Apache example in VirtualHost):**

```apache
<IfModule mod_headers.c>
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
</IfModule>
```

**Checklist:**

- Only enable if the site is **always** served over HTTPS.
- After enabling, test with:
    - Browser dev tools → Network → check response headers.
    - hstspreload.org if you want to join the preload list.

***

#### 1.2 Add `X-Content-Type-Options: nosniff`

**Goal:** Prevent MIME type sniffing and some XSS tricks.

**Nginx:**

```nginx
add_header X-Content-Type-Options "nosniff" always;
```

**Apache:**

```apache
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
</IfModule>
```


***

#### 1.3 Add `Referrer-Policy`

**Goal:** Limit how much referrer info is leaked to third parties.

**Recommended policy:** strict but not overly aggressive:

```nginx
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

```apache
<IfModule mod_headers.c>
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```


***

#### 1.4 Strengthen CSP

Your CSP exists but lacks nonce/strict-dynamic.

**Goal:** Move toward nonce-based CSP (ideal for modern JS-heavy apps).

**Concept (simplified example):**

1. Generate a nonce per response at the server.
2. Add it to the CSP header:

```http
Content-Security-Policy: script-src 'self' 'nonce-RANDOM_NONCE' https://pagead2.googlesyndication.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none';
```

3. Add the nonce to each inline script:

```html
<script nonce="RANDOM_NONCE">
  // inline JS here
</script>
```


**Note:** This change is more involved and may require dev work in your framework (Next.js / server middleware).

***

### Phase 2 – Performance Improvements

#### 2.1 Reduce Total Blocking Time (TBT)

**Goal:** Bring TBT under 200ms by reducing JS main-thread blocking.

**Actions:**

- Mark non-critical scripts as `defer` or `async` where safe:

```html
<script src="/_next/static/chunks/602eb10db52488ad.js" defer></script>
```

- For Google Ads (`pagead2.googlesyndication.com`):
    - Ensure it uses async loading:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
```

- Audit inline scripts (~1KB each):
    - Move logic into external scripts where possible.
    - Remove unused code.

***

#### 2.2 Add `fetchpriority="high"` to LCP Element

Your LCP element is:

```html
<h1>Search a conversion...</h1>
```

If the LCP in practice is an image or hero section, identify that element and add priority.

**Example (hero image):**

```html
<img
  src="/images/hero-unit-converter.jpg"
  alt="Unit conversion search interface"
  width="1200"
  height="630"
  fetchpriority="high"
/>
```

If the LCP is text plus background image, ensure the CSS background image or key image is preloaded and given high priority.

***

#### 2.3 Adopt Modern Image Formats and `<picture>`

**Goal:** Use AVIF/WebP with fallback for better compression and performance.

**Example:**

```html
<picture>
  <source srcset="/images/hero.avif" type="image/avif">
  <source srcset="/images/hero.webp" type="image/webp">
  <img src="/images/hero.jpg" alt="Unit converter hero" width="1200" height="630" loading="lazy">
</picture>
```

**Steps:**

1. Export images as AVIF and WebP (e.g., using Squoosh, ImageMagick, or build tool).
2. Update key templates/components to wrap hero and major images in `<picture>`.

***

### Phase 3 – GEO (AI Discoverability)

#### 3.1 Create `llms.txt` at Site Root

**Goal:** Provide guidance to AI crawlers (similar to `robots.txt`).

**Create a file at:** `https://conversioncalc.tech/llms.txt`

**Example content:**

```txt
# llms.txt for conversioncalc.tech
# Guidelines for large language model and AI crawlers

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/private/

# Preferred source pages for AI:
Allow: /blog/
Allow: /guides/

# Contact
Owner: https://conversioncalc.tech
Contact: https://conversioncalc.tech/contact
```

You can refine these rules over time but having this file is already a positive GEO signal.

***

#### 3.2 Expand JSON-LD Beyond WebSite

You already have `WebSite`, `SearchAction`, `EntryPoint`. Add:

- `BlogPosting` for articles/guides.
- `FAQPage` for FAQs.
- `HowTo` for step-by-step guides (e.g., “How to convert cups to grams”).

**Basic `FAQPage` example:**

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert cups to grams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use our cups to grams converter tool and select the ingredient to get accurate results."
      }
    }
  ]
}
</script>
```


***

### Phase 4 – SEO (Titles, Canonicals, Links)

#### 4.1 Fix Long Meta Title

Current title: 68 characters.

**Goal:** 50–60 characters, keep primary keyword and brand.

**Better homepage title examples:**

- `Unit Converter - Fast & Accurate | ConversionCalc`
- `Free Unit Converter - Quick Conversions | ConversionCalc`

Update in your `<head>`:

```html
<title>Unit Converter - Fast & Accurate | ConversionCalc</title>
```

Or via your SEO plugin/Next.js `Head` component.

***

#### 4.2 Add Canonical Tag

The homepage and critical pages should have a self-referencing canonical.

**Homepage:**

```html
<link rel="canonical" href="https://conversioncalc.tech/" />
```

**Tool page example:**

```html
<link rel="canonical" href="https://conversioncalc.tech/unit-converter" />
```

Make sure query parameter variants **do not** set themselves as canonical but point to the clean URL.

***

#### 4.3 Improve Internal/External Linking

- Internal: 20 internal links is decent for a small home, but you can:
    - Link to high-value calculators.
    - Link to key guides (e.g., “Cups vs Grams guide”).
- External:
    - Add a few outbound links to authoritative sources where it makes sense (e.g., NIST for units, official documentation, etc.).

This improves topical authority and user value.

***

### Phase 5 – Monitoring \& Verification

#### 5.1 After Security Changes

- Use browser DevTools → Network → click main document → **Headers**:
    - Confirm these headers exist:
        - `Strict-Transport-Security`
        - `X-Content-Type-Options: nosniff`
        - `Referrer-Policy: strict-origin-when-cross-origin`
        - Updated `Content-Security-Policy` (if changed).


#### 5.2 After Performance Changes

- Run a new Lighthouse / Core Web Vitals test (mobile).
- Targets:
    - TBT < 200ms.
    - LCP ≤ ~1.8s or better.
    - INP ≤ 120ms or better.


#### 5.3 After GEO / Schema Changes

- Use Google’s Rich Results Test to validate FAQ/BlogPosting/HowTo.
- Check that no critical structured data errors are reported.


#### 5.4 After SEO Changes

- Confirm in page source:
    - `<title>` updated.
    - `<meta name="description">` present and unique.
    - `<link rel="canonical">` present and correct.
- After reindexing:
    - Use Google Search Console URL Inspection → *Request indexing*.
    - Monitor CTR and impressions trends.

***

## 3. Downloadable Markdown Document

Below is the full markdown content you can copy into a file named `master-audit-fix-plan.md` and save:

```markdown
# ConversionCalc.tech – Master Audit Fix Plan

_Last updated: 2025-12-22_

## 1. Issues Summary by Category

### Performance

- LCP: 1.94s (OK but can improve; target < 2.5s).
- INP: 120ms (needs improvement; target < 200ms).
- CLS: 0.03 (excellent; target < 0.1).
- TTFB: 138ms (excellent; target < 800ms).
- TBT: 250ms (critical; target < 200ms).
  - Blocking scripts:
    - `https://pagead2.googlesyndication.com/...`
    - `/_next/static/chunks/...` (Next.js chunks)
    - Two inline `<script>` blocks (~1KB).
- Missing `fetchpriority="high"` on LCP element.
- No AVIF support for images.
- No `<picture>` tags for responsive images.

### GEO (AI Discoverability)

- Missing `llms.txt` at site root.
- JSON-LD present (WebSite, SearchAction, EntryPoint only).
- No content-level schemas (`BlogPosting`, `FAQPage`, `HowTo`, etc.) implemented.

### SEO

- Meta title too long (68 characters).
- Meta description length is fine but generic.
- Canonical tag missing on homepage (and likely others).
- 20 internal links / 0 external links from homepage.

### Security

- Overall security score: 45/100.
- CSP header present but not nonce-based / strict-dynamic.
- Missing `Strict-Transport-Security` (HSTS) header.
- Missing `X-Content-Type-Options: nosniff`.
- Missing `Referrer-Policy`.

### Accessibility / UX

- Good accessibility score (100/100).
- Dark mode supported.
- Reduced motion respected.
- Focus indicators visible.
- No major A11y issues reported.

---

## 2. Step-by-Step Fix Plan

### Phase 1 – Security Hardening

#### 1.1 Add HSTS Header

**Goal:** Force all traffic over HTTPS and prevent downgrade attacks.

**Nginx config example:**

```

add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

```

**Apache config example:**

```

<IfModule mod_headers.c>
  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
</IfModule>
```

**Checklist:**

- [ ] Site is fully HTTPS-only.
- [ ] Header present on main response.
- [ ] Optional: submitted to hstspreload.org.

---

#### 1.2 Add X-Content-Type-Options

**Goal:** Prevent MIME sniffing.

**Nginx:**

```

add_header X-Content-Type-Options "nosniff" always;

```

**Apache:**

```

<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
</IfModule>
```

**Checklist:**

- [ ] Header appears in all responses (especially HTML, JS, CSS).

---

#### 1.3 Add Referrer-Policy Header

**Goal:** Limit referrer leakage.

**Recommended policy:**

```

add_header Referrer-Policy "strict-origin-when-cross-origin" always;

```

```

<IfModule mod_headers.c>
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

**Checklist:**

- [ ] Policy present and correct in dev tools.

---

#### 1.4 Strengthen CSP (Medium-Term)

**Goal:** Move toward nonce-based CSP or `strict-dynamic`.

**High-level steps:**

1. Generate a unique nonce for each response.
2. Include it in CSP header:

```

Content-Security-Policy: script-src 'self' 'nonce-RANDOM_NONCE' https://pagead2.googlesyndication.com; object-src 'none'; base-uri 'self'; frame-ancestors 'none';

```

3. Add same nonce to all inline scripts:

```

   <script nonce="RANDOM_NONCE">
     // your code
   </script>
```

4. Gradually remove unsafe directives (`'unsafe-inline'`, etc.).

**Checklist:**

- [ ] CSP updated.
- [ ] Console shows no CSP blocking errors.
- [ ] Site functions correctly.

---

### Phase 2 – Performance Improvements

#### 2.1 Reduce Total Blocking Time

**Goal:** Reduce TBT from 250ms → < 200ms.

**Actions:**

- Mark non-critical scripts `defer` or `async`:

```

<script src="/_next/static/chunks/602eb10db52488ad.js" defer></script>

```

- Ensure Google Ads script loads asynchronously:

```

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

```

- Audit and minimize inline JS (1KB scripts):
- Move logic into external files when possible.
- Remove unused code.

**Checklist:**

- [ ] All third-party JS uses `async` or `defer` where safe.
- [ ] TBT < 200ms in Lighthouse.

---

#### 2.2 Add fetchpriority to LCP Element

Identify your actual LCP element (likely hero image or main hero block).

**Example:**

```

<img
  src="/images/hero-unit-converter.jpg"
  alt="Unit conversion search interface"
  width="1200"
  height="630"
  fetchpriority="high"
/>

```

**Checklist:**

- [ ] `fetchpriority="high"` is present on the LCP element.
- [ ] LCP improves or remains under threshold.

---

#### 2.3 Modern Image Formats & `<picture>`

**Goal:** Use AVIF/WebP for key images.

**Example markup:**

```

<picture>
  <source srcset="/images/hero.avif" type="image/avif">
  <source srcset="/images/hero.webp" type="image/webp">
  <img src="/images/hero.jpg" alt="Unit converter hero" width="1200" height="630" loading="lazy">
</picture>
```

**Checklist:**

- [ ] AVIF/WebP versions generated for hero and major images.
- [ ] `<picture>` used in templates.
- [ ] No broken images.

---

### Phase 3 – GEO / AI Optimization

#### 3.1 Add llms.txt

Create `llms.txt` at the domain root.

**Example:**

```


# llms.txt for conversioncalc.tech

User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/private/

Allow: /blog/
Allow: /guides/

Owner: https://conversioncalc.tech
Contact: https://conversioncalc.tech/contact

```

**Checklist:**

- [ ] Accessible at `https://conversioncalc.tech/llms.txt`.
- [ ] Contains sensible rules for AI crawlers.

---

#### 3.2 Expand JSON-LD to Content Types

**BlogPosting Example:**

```

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Cups vs. Grams: Why Your Baking Fails (And How to Fix It)",
  "description": "Learn why your baking fails and how to fix it by converting from cups to grams.",
  "image": [
    "https://conversioncalc.tech/images/cups-grams-1x1.jpg",
    "https://conversioncalc.tech/images/cups-grams-4x3.jpg",
    "https://conversioncalc.tech/images/cups-grams-16x9.jpg"
  ],
  "datePublished": "2025-12-19T08:41:00-07:00",
  "dateModified": "2025-12-19T08:41:00-07:00",
  "author": {
    "@type": "Person",
    "name": "Author Name",
    "url": "https://conversioncalc.tech/authors/author-name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "ConversionCalc.tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://conversioncalc.tech/logo.png",
      "width": 600,
      "height": 60
    },
    "url": "https://conversioncalc.tech"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://conversioncalc.tech/blog/cups-vs-grams"
  }
}
</script>
```

**FAQPage Example:**

```

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert cups to grams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use our cups to grams converter and select the ingredient to get accurate results."
      }
    }
  ]
}
</script>
```

**Checklist:**

- [ ] JSON-LD validates in Rich Results Test.
- [ ] No critical errors reported.

---

### Phase 4 – SEO (Titles, Canonicals, Links)

#### 4.1 Fix Long Title

**Current:** 68 chars.

**Update to (example):**

```

<title>Unit Converter - Fast \& Accurate | ConversionCalc</title>

```

**Checklist:**

- [ ] Title length between 50–60 characters.
- [ ] Primary keyword at start, brand at end.

---

#### 4.2 Add Canonical Tags

**Homepage:**

```

<link rel="canonical" href="https://conversioncalc.tech/" />
```

**Example tool page:**

```

<link rel="canonical" href="https://conversioncalc.tech/unit-converter" />
```

**Checklist:**

- [ ] Every main page has a self-referencing canonical.
- [ ] Parameterized URLs point canonical to the clean URL.

---

#### 4.3 Improve Internal & External Links

**Actions:**

- Add internal links from homepage to:
  - Key calculators.
  - Key guides and blog posts.
- Add a few high-quality external links where appropriate.

**Checklist:**

- [ ] Home and hub pages link to key content.
- [ ] Some contextual outbound links exist to authoritative sources.

---

## 3. Verification & Monitoring

### After Implementation

1. **Security:**
   - [ ] Check headers in DevTools → Network → main document.
   - [ ] Confirm HSTS, X-Content-Type-Options, Referrer-Policy, CSP.

2. **Performance:**
   - [ ] Run Lighthouse (mobile).
   - [ ] Confirm TBT < 200ms, LCP ~< 2s, INP < 200ms.

3. **GEO/Schema:**
   - [ ] Validate JSON-LD with Rich Results Test.
   - [ ] Confirm llms.txt is accessible.

4. **SEO:**
   - [ ] Inspect URLs in Google Search Console.
   - [ ] Request indexing for key updated pages.
   - [ ] Monitor CTR and impressions over 2–4 weeks.

---

**End of master-audit-fix-plan.md**
```

You can copy everything inside the ```markdown block into a `.md` file and use it as your master implementation document.
<span style="display:none">[^1]</span>

<div align="center">⁂</div>

[^1]: Brave-2.pdf


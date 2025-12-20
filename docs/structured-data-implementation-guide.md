# Structured Data Implementation Guide

## Overview
This guide helps you implement Google-compliant structured data (JSON-LD) across your conversion calculator website to enable rich snippets in search results.

## Quick Validation Checklist
1. Use Google's Rich Results Test: https://search.google.com/test/rich-results
2. Check Google Search Console for any structured data errors
3. Ensure all required properties are included

## Components Created

### 1. BlogPostingSchema Component
**Location**: `/src/components/structured-data/BlogPostingSchema.tsx`

**Usage**:
```tsx
import BlogPostingSchema from '@/components/structured-data/BlogPostingSchema'
import { generateISODateWithTimezone } from '@/utils/structured-data'

// In your blog page component:
<BlogPostingSchema
  headline="Your Article Title"
  description="Meta description (150-160 chars)"
  articleSlug="url-friendly-slug"
  articleBody="First 200-300 words of article..."
  datePublished={generateISODateWithTimezone(new Date('2024-12-19'))}
  dateModified={generateISODateWithTimezone(new Date())}
  authorName="Author Name"
  authorUrl="https://conversioncalc.tech/about"
  authorJobTitle="Content Writer"
  wordCount={1200}
  keywords="comma,separated,keywords"
/>
```

### 2. FAQPageSchema Component
**Location**: `/src/components/structured-data/FAQPageSchema.tsx`

**Usage**:
```tsx
import FAQPageSchema from '@/components/structured-data/FAQPageSchema'

const faqs = [
  {
    question: "How do I convert cups to grams?",
    answer: "Use our calculator tool above..."
  }
]

<FAQPageSchema faqs={faqs} />
```

### 3. BreadcrumbListSchema Component
**Location**: `/src/components/structured-data/BreadcrumbListSchema.tsx`

**Usage**:
```tsx
import BreadcrumbListSchema from '@/components/structured-data/BreadcrumbListSchema'

const breadcrumbs = [
  { name: "Home", item: "https://conversioncalc.tech" },
  { name: "Blog", item: "https://conversioncalc.tech/blog" },
  { name: "Article", item: "https://conversioncalc.tech/blog/article-slug" }
]

<BreadcrumbListSchema breadcrumbs={breadcrumbs} />
```

## Image Requirements

Google requires images in **3 aspect ratios** for BlogPosting schema:
- 1x1 (Square): 1200x1200px minimum
- 4x3: 1200x900px minimum  
- 16x9: 1200x675px minimum

**Naming convention**:
- `/images/[article-slug]-1x1.jpg`
- `/images/[article-slug]-4x3.jpg`
- `/images/[article-slug]-16x9.jpg`

## Validation Steps

1. **Test your page**:
   - Go to: https://search.google.com/test/rich-results
   - Enter your page URL
   - Look for "Article" in the detected rich results

2. **Check for errors**:
   - Missing required fields
   - Invalid field names
   - Malformed JSON

3. **Common fixes**:
   - Ensure dates include timezone: `2024-12-19T08:41:00-07:00`
   - Use array format for images
   - Structure author as object, not string

## Implementation Priority

### High Priority (Implement First)
1. All blog posts need BlogPosting schema
2. All calculator pages need FAQPage schema
3. All pages need BreadcrumbList schema

### Medium Priority
1. Organization schema for homepage
2. Website schema for site-wide search
3. LocalBusiness if you have physical location

### Low Priority
1. Recipe schema for cooking-related calculators
2. HowTo schema for tutorial content
3. Event schema for any events or webinars

## Monitoring Performance

After implementation:
1. Wait 7-14 days for Google to process
2. Check Google Search Console → Performance
3. Look for increased CTR on pages with rich snippets
4. Monitor for any structured data errors in GSC

## Best Practices

1. **Always include required properties**:
   - headline
   - image (in 3 aspect ratios)
   - datePublished

2. **Highly recommended properties**:
   - dateModified
   - author
   - publisher
   - description
   - mainEntityOfPage

3. **Keep JSON valid**:
   - Use proper quotes
   - No trailing commas
   - Escape special characters

4. **Match page content**:
   - headline should match page title
   - description should match meta description
   - URLs should be canonical

## Template for New Blog Posts

Copy this template for each new blog post:

```tsx
import BlogPostingSchema from '@/components/structured-data/BlogPostingSchema'
import BreadcrumbListSchema from '@/components/structured-data/BreadcrumbListSchema'
import { generateISODateWithTimezone } from '@/utils/structured-data'

export default function BlogPost() {
  const structuredData = {
    headline: "Article Title Here",
    description: "Meta description here",
    articleSlug: "article-slug",
    articleBody: "First paragraph of article...",
    datePublished: generateISODateWithTimezone(new Date()),
    dateModified: generateISODateWithTimezone(new Date()),
    authorName: "Your Name",
    authorUrl: "https://conversioncalc.tech/about",
    wordCount: 1000,
    keywords: "keyword1,keyword2,keyword3"
  }

  const breadcrumbs = [
    { name: "Home", item: "https://conversioncalc.tech" },
    { name: "Blog", item: "https://conversioncalc.tech/blog" },
    { name: "Article Title", item: "https://conversioncalc.tech/blog/article-slug" }
  ]

  return (
    <>
      <BlogPostingSchema {...structuredData} />
      <BreadcrumbListSchema breadcrumbs={breadcrumbs} />
      {/* Your page content */}
    </>
  )
}
```

## Need Help?

1. Check Google's official documentation:
   - Article schema: https://developers.google.com/search/docs/data-types/article
   - FAQ schema: https://developers.google.com/search/docs/data-types/faqpage

2. Use validation tools:
   - Rich Results Test: https://search.google.com/test/rich-results
   - Schema Markup Validator: https://validator.schema.org/

3. Contact your developer if you encounter persistent errors

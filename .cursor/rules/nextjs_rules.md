# Next.js Development Rules

## App Router Conventions

### File Structure
- Use `app/` directory for all routes
- `page.tsx` for route components
- `layout.tsx` for shared layouts
- `loading.tsx` for loading states
- `error.tsx` for error boundaries

### Server vs Client Components
- Default to Server Components
- Use `'use client'` directive only when needed:
  - Event handlers (onClick, onChange, etc.)
  - Hooks (useState, useEffect, etc.)
  - Browser-only APIs

### Naming Conventions
- Use kebab-case for route folders: `/weight/pounds-to-kilograms`
- Use PascalCase for components: `ConverterWidget.tsx`
- Use camelCase for utilities: `conversionUtils.ts`

## Performance Guidelines

### Static Generation
- Prefer static generation (SSG) for converter pages
- Use `generateStaticParams` for dynamic routes
- Avoid `use client` at page level when possible

### Optimization
- Use Next.js `<Image>` component for images
- Use `next/font` for font optimization
- Implement proper `<head>` metadata

## SEO Requirements

### Metadata
```tsx
export const metadata: Metadata = {
  title: 'Page Title | Site Name',
  description: 'Unique description for each page',
  openGraph: {
    title: 'Page Title',
    description: 'Description',
  }
}
```

### Semantic HTML
- One `<h1>` per page
- Logical heading hierarchy
- Use semantic elements (`<main>`, `<article>`, `<section>`)

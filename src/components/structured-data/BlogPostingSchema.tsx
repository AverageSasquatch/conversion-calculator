interface BlogPostingProps {
  headline: string
  description: string
  articleSlug: string
  articleBody?: string
  datePublished: string
  dateModified: string
  authorName: string
  authorUrl?: string
  authorJobTitle?: string
  wordCount?: number
  keywords?: string
  siteUrl?: string
}

export default function BlogPostingSchema({
  headline,
  description,
  articleSlug,
  articleBody,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  authorJobTitle,
  wordCount,
  keywords,
  siteUrl = 'https://conversioncalc.tech'
}: BlogPostingProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": headline,
    "description": description,
    "image": [
      `${siteUrl}/images/${articleSlug}-1x1.jpg`,
      `${siteUrl}/images/${articleSlug}-4x3.jpg`,
      `${siteUrl}/images/${articleSlug}-16x9.jpg`
    ],
    "datePublished": datePublished,
    "dateModified": dateModified,
    "author": {
      "@type": "Person",
      "name": authorName,
      ...(authorUrl && { "url": authorUrl }),
      ...(authorJobTitle && { "jobTitle": authorJobTitle })
    },
    "publisher": {
      "@type": "Organization",
      "name": "ConversionCalc.tech",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`,
        "width": 600,
        "height": 60
      },
      "url": siteUrl
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${articleSlug}`
    },
    ...(articleBody && { "articleBody": articleBody }),
    ...(wordCount && { "wordCount": wordCount }),
    ...(keywords && { "keywords": keywords })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  )
}

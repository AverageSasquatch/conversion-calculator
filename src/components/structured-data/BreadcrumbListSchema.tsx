interface BreadcrumbItem {
  name: string
  item: string
}

interface BreadcrumbListProps {
  breadcrumbs: BreadcrumbItem[]
}

export default function BreadcrumbListSchema({ breadcrumbs }: BreadcrumbListProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": breadcrumb.name,
      "item": breadcrumb.item
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData, null, 2) }}
    />
  )
}

import { Metadata } from 'next'
import BlogPostingSchema from '@/components/structured-data/BlogPostingSchema'
import BreadcrumbListSchema from '@/components/structured-data/BreadcrumbListSchema'
import { generateISODateWithTimezone } from '@/utils/structured-data'
import Link from 'next/link'
import Image from 'next/image'

// Generate metadata for the page
export const metadata: Metadata = {
  title: 'Cups vs. Grams: Why Your Baking Fails (And How to Fix It)',
  description: 'Learn why your baking fails and how to fix it by converting from cups to grams. Professional guide to accurate measurements.',
  openGraph: {
    title: 'Cups vs. Grams: Why Your Baking Fails (And How to Fix It)',
    description: 'Learn why your baking fails and how to fix it by converting from cups to grams. Professional guide to accurate measurements.',
    images: [
      {
        url: 'https://conversioncalc.tech/images/cups-vs-grams-guide-16x9.jpg',
        width: 1200,
        height: 675,
        alt: 'Baking measurement conversion guide'
      }
    ]
  }
}

// Structured data for this article
const structuredData = {
  headline: 'Cups vs. Grams: Why Your Baking Fails (And How to Fix It)',
  description: 'Learn why your baking fails and how to fix it by converting from cups to grams. Professional guide to accurate measurements.',
  articleSlug: 'cups-vs-grams-guide',
  articleBody: 'Have you ever followed a cookie recipe to the letter, only to have them come out flat as pancakes or hard as rocks? You aren\'t alone. The culprit often isn\'t your oven or your ingredients—it\'s your measuring cup. In the world of professional baking, precision is everything. While American recipes often rely on volume (cups and spoons), the rest of the world—and professional pastry chefs—rely on weight (grams and ounces)...',
  datePublished: generateISODateWithTimezone(new Date('2024-12-19T08:41:00')),
  dateModified: generateISODateWithTimezone(new Date('2024-12-19T08:41:00')),
  authorName: 'ConversionCalc Team',
  authorUrl: 'https://conversioncalc.tech/about',
  authorJobTitle: 'Content Writer',
  wordCount: 1200,
  keywords: 'baking conversion, cups to grams, measurement guide, kitchen conversions'
}

// Breadcrumb data
const breadcrumbs = [
  { name: 'Home', item: 'https://conversioncalc.tech' },
  { name: 'Blog', item: 'https://conversioncalc.tech/blog' },
  { name: 'Cups vs. Grams Guide', item: 'https://conversioncalc.tech/blog/cups-vs-grams-guide' }
]

export default function BlogPost() {
  return (
    <>
      {/* Structured Data */}
      <BlogPostingSchema {...structuredData} />
      <BreadcrumbListSchema breadcrumbs={breadcrumbs} />
      
      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <nav className="text-sm mb-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-gray-600">{crumb.name}</span>
                  ) : (
                    <Link href={crumb.item} className="text-blue-600 hover:text-blue-800">
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          
          <h1 className="text-4xl font-bold mb-4">
            Cups vs. Grams: Why Your Baking Fails (And How to Fix It)
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            Learn why your baking fails and how to fix it by converting from cups to grams. 
            Professional guide to accurate measurements.
          </p>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <time dateTime={structuredData.datePublished}>
              Published: {new Date(structuredData.datePublished).toLocaleDateString()}
            </time>
            <span>•</span>
            <span>By {structuredData.authorName}</span>
            <span>•</span>
            <span>{structuredData.wordCount} words</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <figure className="mb-8">
            <Image
              src="/images/cups-vs-grams-guide-16x9.jpg"
              alt="Baking measurement conversion guide"
              width={1200}
              height={675}
              className="rounded-lg shadow-lg w-full"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-2">
              Professional baking requires precise measurements by weight, not volume
            </figcaption>
          </figure>

          <h2>The Problem with Volume Measurements</h2>
          <p>
            Have you ever followed a cookie recipe to the letter, only to have them come out 
            flat as pancakes or hard as rocks? You aren't alone. The culprit often isn't your 
            oven or your ingredients—it's your measuring cup.
          </p>

          <h2>Why Weight is More Accurate</h2>
          <p>
            In the world of professional baking, precision is everything. While American 
            recipes often rely on volume (cups and spoons), the rest of the world—and 
            professional pastry chefs—rely on weight (grams and ounces).
          </p>

          <h2>Common Conversion Issues</h2>
          <ul>
            <li>Flour can vary by up to 20% depending on how you scoop it</li>
            <li>Brown sugar packed vs. loose makes a huge difference</li>
            <li>Liquid measurements are more consistent than dry ingredients</li>
          </ul>

          <h2>Quick Reference Chart</h2>
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Ingredient</th>
                <th className="border border-gray-300 px-4 py-2">1 Cup</th>
                <th className="border border-gray-300 px-4 py-2">Grams</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">All-Purpose Flour</td>
                <td className="border border-gray-300 px-4 py-2">1 cup</td>
                <td className="border border-gray-300 px-4 py-2">120g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Granulated Sugar</td>
                <td className="border border-gray-300 px-4 py-2">1 cup</td>
                <td className="border border-gray-300 px-4 py-2">200g</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Butter</td>
                <td className="border border-gray-300 px-4 py-2">1 cup</td>
                <td className="border border-gray-300 px-4 py-2">227g</td>
              </tr>
            </tbody>
          </table>

          <h2>Conclusion</h2>
          <p>
            Switching to weight-based measurements will revolutionize your baking. 
            Your results will be more consistent, and you'll wonder why you ever used 
            measuring cups in the first place.
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>
              <p>Category: Baking Guides</p>
              <p>Tags: {structuredData.keywords}</p>
            </div>
            <div>
              <p>Last updated: {new Date(structuredData.dateModified).toLocaleDateString()}</p>
            </div>
          </div>
        </footer>
      </article>
    </>
  )
}

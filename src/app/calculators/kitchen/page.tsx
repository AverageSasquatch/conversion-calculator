import { Metadata } from 'next'
import FAQPageSchema from '@/components/structured-data/FAQPageSchema'
import BreadcrumbListSchema from '@/components/structured-data/BreadcrumbListSchema'
import Link from 'next/link'

// Generate metadata for the page
export const metadata: Metadata = {
  title: 'Kitchen Converter - Cups to Grams, Ounces to ML | Free Online Tool',
  description: 'Convert kitchen measurements instantly. Cups to grams, ounces to milliliters, Fahrenheit to Celsius. Perfect for baking and cooking.',
}

// FAQ data for this calculator page
const faqs = [
  {
    question: 'How do I convert cups to grams?',
    answer: 'Use our calculator tool above to convert cups to grams instantly. Different ingredients have different weights - for example, 1 cup of all-purpose flour equals 120g, while 1 cup of granulated sugar equals 200g.'
  },
  {
    question: 'Why is weighing ingredients better than measuring by volume?',
    answer: 'Weight measurements are more accurate because they\'re not affected by how tightly you pack ingredients or the size of your measuring cups. Professional bakers always use weight for consistency.'
  },
  {
    question: 'How many grams are in a tablespoon?',
    answer: 'It depends on the ingredient. A tablespoon of water weighs about 15g, flour about 8g, and sugar about 12.5g. Use our converter for precise measurements.'
  },
  {
    question: 'What\'s the difference between ounces and fluid ounces?',
    answer: 'Ounces (oz) measure weight, while fluid ounces (fl oz) measure volume. For example, 1 fluid ounce of water weighs 1 ounce, but this isn\'t true for other ingredients.'
  },
  {
    question: 'How do I convert Fahrenheit to Celsius for oven temperature?',
    answer: 'Subtract 32 from the Fahrenheit temperature, multiply by 5, then divide by 9. Or use our temperature converter for instant results.'
  }
]

// Breadcrumb data
const breadcrumbs = [
  { name: 'Home', item: 'https://conversioncalc.tech' },
  { name: 'Calculators', item: 'https://conversioncalc.tech/calculators' },
  { name: 'Kitchen Converter', item: 'https://conversioncalc.tech/calculators/kitchen' }
]

export default function KitchenCalculator() {
  return (
    <>
      {/* Structured Data */}
      <FAQPageSchema faqs={faqs} />
      <BreadcrumbListSchema breadcrumbs={breadcrumbs} />
      
      {/* Page Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
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
          
          <h1 className="text-4xl font-bold mb-4">Kitchen Converter</h1>
          <p className="text-xl text-gray-600">
            Convert kitchen measurements instantly. Perfect for baking and cooking.
          </p>
        </header>

        {/* Calculator Tool */}
        <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Measurement Converter</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Volume to Weight Converter */}
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-3">Volume to Weight</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ingredient
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>All-Purpose Flour</option>
                    <option>Granulated Sugar</option>
                    <option>Butter</option>
                    <option>Milk</option>
                    <option>Water</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Amount (cups)
                  </label>
                  <input 
                    type="number" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter amount"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Convert to Grams
                </button>
                <div className="text-lg font-semibold text-gray-800">
                  Result: <span id="weight-result">0</span> grams
                </div>
              </div>
            </div>

            {/* Temperature Converter */}
            <div className="border rounded-lg p-4">
              <h3 className="text-lg font-medium mb-3">Temperature</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fahrenheit
                  </label>
                  <input 
                    type="number" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="°F"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                  Convert to Celsius
                </button>
                <div className="text-lg font-semibold text-gray-800">
                  Result: <span id="temp-result">0</span>°C
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="border-b border-gray-200 pb-4">
                <summary className="font-medium text-gray-900 cursor-pointer hover:text-blue-600">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-600 pl-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mt-8 bg-gray-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Conversion Chart</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ingredient
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    1 Cup
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    1/2 Cup
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    1/4 Cup
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    All-Purpose Flour
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">120g</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">60g</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30g</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Granulated Sugar
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">200g</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">100g</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50g</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    Butter
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">227g</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">113g</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">57g</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  )
}

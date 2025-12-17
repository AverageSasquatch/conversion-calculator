import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Unit Converter. Please read these terms carefully before using our conversion tools.",
  openGraph: {
    title: "Terms of Service | Unit Converter",
    description:
      "Terms of Service for Unit Converter. Please read these terms carefully.",
  },
};

export default function TermsPage() {
  const lastUpdated = "December 14, 2024";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Terms of Service
        </h1>
        <p className="text-foreground/60">
          Last updated: {lastUpdated}
        </p>
      </div>

      {/* Content */}
      <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border">
        <div className="prose prose-lg max-w-none space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-foreground/70">
              By accessing and using Unit Converter (conversioncalc.tech), you accept 
              and agree to be bound by these Terms of Service. If you do not agree 
              to these terms, please do not use our website.
            </p>
          </section>

          {/* Description of Service */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              2. Description of Service
            </h2>
            <p className="text-foreground/70 mb-4">
              Unit Converter provides free online unit conversion tools for various 
              measurement types including weight, length, temperature, volume, data 
              size, time, area, and speed. Our service is provided &quot;as is&quot; and 
              &quot;as available&quot; without warranties of any kind.
            </p>
          </section>

          {/* Use of Service */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              3. Use of Service
            </h2>
            <p className="text-foreground/70 mb-4">
              You agree to use our service only for lawful purposes and in accordance 
              with these Terms. You agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/70">
              <li>Use the service in any way that violates applicable laws or regulations</li>
              <li>Attempt to interfere with or disrupt the service or servers</li>
              <li>Use automated systems to access the service in a manner that sends more requests than a human could reasonably produce</li>
              <li>Attempt to gain unauthorized access to any portion of the service</li>
            </ul>
          </section>

          {/* Accuracy of Information */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              4. Accuracy of Conversions
            </h2>
            <p className="text-foreground/70 mb-4">
              While we strive to provide accurate conversion calculations, we make 
              no guarantees regarding the accuracy, completeness, or reliability of 
              any conversion results. Our conversion tools are intended for general 
              informational purposes only.
            </p>
            <p className="text-foreground/70">
              <strong className="text-foreground">Important:</strong> Do not rely solely 
              on our conversions for critical applications such as medical dosing, 
              engineering calculations, financial transactions, or any situation where 
              inaccurate conversions could result in harm or significant loss. Always 
              verify important conversions with authoritative sources.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              5. Intellectual Property
            </h2>
            <p className="text-foreground/70">
              The content, design, and functionality of Unit Converter are protected 
              by copyright and other intellectual property laws. You may not reproduce, 
              distribute, modify, or create derivative works without our prior written 
              consent.
            </p>
          </section>

          {/* Third-Party Content */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              6. Third-Party Advertising
            </h2>
            <p className="text-foreground/70">
              Our website displays advertisements from third-party advertising networks 
              including Google AdSense and Ezoic. These advertisements help support 
              our free service. We are not responsible for the content of third-party 
              advertisements or the products and services they promote.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              7. Disclaimer of Warranties
            </h2>
            <p className="text-foreground/70">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES 
              OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
              AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE 
              UNINTERRUPTED, ERROR-FREE, OR SECURE.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-foreground/70">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, UNIT CONVERTER AND ITS OPERATORS 
              SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, 
              OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED 
              DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER 
              INTANGIBLE LOSSES RESULTING FROM YOUR USE OF THE SERVICE.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-foreground/70">
              We reserve the right to modify these Terms of Service at any time. 
              Changes will be effective immediately upon posting to this page. Your 
              continued use of the service after any changes constitutes acceptance 
              of the new terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              10. Governing Law
            </h2>
            <p className="text-foreground/70">
              These Terms of Service shall be governed by and construed in accordance 
              with the laws of the United States, without regard to its conflict of 
              law provisions.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              11. Contact Us
            </h2>
            <p className="text-foreground/70 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-foreground/70">
              <strong className="text-foreground">Email:</strong>{" "}
              <a
                href="mailto:contactus@conversioncalc.tech"
                className="text-primary hover:underline"
              >
                contactus@conversioncalc.tech
              </a>
            </p>
          </section>
        </div>
      </div>

      {/* Back Link */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Unit Converter. Learn how we collect, use, and protect your information when you use our conversion tools.",
  openGraph: {
    title: "Privacy Policy | Unit Converter",
    description:
      "Privacy Policy for Unit Converter. Learn how we handle your data.",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "December 14, 2024";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Privacy Policy
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
              Introduction
            </h2>
            <p className="text-foreground/70">
              Welcome to Unit Converter (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed 
              to protecting your privacy and being transparent about how we collect 
              and use information. This Privacy Policy explains our practices regarding 
              data collection when you visit our website at conversioncalc.tech.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              Information We Collect
            </h2>
            <p className="text-foreground/70 mb-4">
              We collect minimal information to provide our services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/70">
              <li>
                <strong className="text-foreground">Usage Data:</strong> Anonymous 
                information about how you use our site, such as pages visited and 
                conversions performed.
              </li>
              <li>
                <strong className="text-foreground">Device Information:</strong> Basic 
                technical information like browser type and device type to optimize 
                your experience.
              </li>
              <li>
                <strong className="text-foreground">Cookies:</strong> Small text files 
                stored on your device to remember your preferences (like dark mode) 
                and for advertising purposes.
              </li>
            </ul>
          </section>

          {/* Cookies and Advertising */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              Cookies and Advertising
            </h2>
            <p className="text-foreground/70 mb-4">
              We use cookies to enhance your experience and to display advertisements 
              that help support our free service.
            </p>
            
            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">
              Third-Party Advertising
            </h3>
            <p className="text-foreground/70 mb-4">
              Third-party vendors, including Google, use cookies to serve ads based 
              on your prior visits to our website or other websites. Google&apos;s use of 
              advertising cookies enables it and its partners to serve ads to you 
              based on your visit to our site and/or other sites on the Internet.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">
              Advertising Partners
            </h3>
            <p className="text-foreground/70 mb-4">
              We work with the following advertising partners who may use cookies 
              to serve personalized ads:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/70">
              <li>
                <strong className="text-foreground">Google AdSense</strong> — 
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline ml-1"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <strong className="text-foreground">Ezoic</strong> — 
                <a 
                  href="https://www.ezoic.com/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline ml-1"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">
              Opting Out of Personalized Advertising
            </h3>
            <p className="text-foreground/70 mb-4">
              You may opt out of personalized advertising by visiting:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/70">
              <li>
                <a 
                  href="https://adssettings.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Ads Settings
                </a> — Manage your Google ad preferences
              </li>
              <li>
                <a 
                  href="https://www.aboutads.info/choices/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  AboutAds.info
                </a> — Opt out of third-party vendor cookies for personalized advertising
              </li>
              <li>
                <a 
                  href="https://optout.networkadvertising.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Network Advertising Initiative
                </a> — Opt out of member advertising networks
              </li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              How We Use Your Information
            </h2>
            <p className="text-foreground/70 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/70">
              <li>Provide and improve our conversion tools</li>
              <li>Remember your preferences (such as theme settings)</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Display relevant advertisements to support our free service</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              Data Security
            </h2>
            <p className="text-foreground/70">
              We implement appropriate security measures to protect against 
              unauthorized access, alteration, disclosure, or destruction of 
              your information. Our website uses HTTPS encryption to ensure 
              secure data transmission.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              Your Rights
            </h2>
            <p className="text-foreground/70 mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/70">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of personalized advertising</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-foreground/70">
              Our website is not directed to children under 13 years of age. We 
              do not knowingly collect personal information from children. If you 
              are a parent or guardian and believe your child has provided us with 
              personal information, please contact us.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              Changes to This Privacy Policy
            </h2>
            <p className="text-foreground/70">
              We may update this Privacy Policy from time to time. We will notify 
              you of any changes by posting the new Privacy Policy on this page 
              and updating the &quot;Last updated&quot; date at the top of this policy.
            </p>
          </section>

          {/* Contact Us */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-foreground/70 mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
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




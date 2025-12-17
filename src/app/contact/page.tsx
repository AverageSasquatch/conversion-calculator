import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Unit Converter team. We'd love to hear your feedback, suggestions, or answer any questions you may have.",
  openGraph: {
    title: "Contact Us | Unit Converter",
    description:
      "Get in touch with the Unit Converter team. We'd love to hear from you.",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Have a question, suggestion, or just want to say hello? We&apos;d love to hear from you.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">
            Get in Touch
          </h2>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Email</h3>
                <a
                  href="mailto:contactus@conversioncalc.tech"
                  className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                >
                  contactus@conversioncalc.tech
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">Response Time</h3>
                <p className="text-foreground/70">
                  We typically respond within 24-48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What to Contact About */}
        <div className="bg-card rounded-xl p-6 sm:p-8 shadow-sm border border-border">
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">
            How Can We Help?
          </h2>
          
          <ul className="space-y-4 text-foreground/70">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">💡</span>
              <span>
                <strong className="text-foreground">Feature Requests</strong> — 
                Have an idea for a new converter or feature? Let us know!
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">🐛</span>
              <span>
                <strong className="text-foreground">Bug Reports</strong> — 
                Found something not working correctly? Please report it.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">❓</span>
              <span>
                <strong className="text-foreground">Questions</strong> — 
                Need help with a conversion or have a general question?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">🤝</span>
              <span>
                <strong className="text-foreground">Partnerships</strong> — 
                Interested in collaborating or partnerships?
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-0.5">📝</span>
              <span>
                <strong className="text-foreground">Feedback</strong> — 
                General feedback about your experience with our site.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <a
          href="mailto:contactus@conversioncalc.tech"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-lg"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Send Us an Email
        </a>
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

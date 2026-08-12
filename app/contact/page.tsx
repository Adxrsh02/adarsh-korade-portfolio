import type { Metadata } from "next";
import { Suspense } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactFormSection } from "@/components/contact/ContactFormSection";
import { GitHubActivity } from "@/components/contact/GitHubActivity";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { FAQ_ITEMS } from "@/lib/faq-data";

/* =========================================================
   PAGE METADATA
   ========================================================= */

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Adarsh Korade — AI Engineer, Full Stack Developer, and Product Builder. Available for freelance projects, full-time opportunities, technical consulting, and collaboration.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
  openGraph: {
    title: "Contact — Adarsh Korade",
    description:
      "Reach out to Adarsh Korade for project collaboration, freelance work, job opportunities, or technical consulting.",
    url: `${SITE_CONFIG.url}/contact`,
    type: "website",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Adarsh Korade — Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — Adarsh Korade",
    description:
      "Reach out to Adarsh Korade for project collaboration, freelance opportunities, or technical consulting.",
    images: [SITE_CONFIG.ogImage],
  },
};

/* =========================================================
   JSON-LD STRUCTURED DATA
   ========================================================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: "Contact — Adarsh Korade",
      url: `${SITE_CONFIG.url}/contact`,
      mainEntity: {
        "@type": "Person",
        "@id": `${SITE_CONFIG.url}/#person`,
        name: "Adarsh Korade",
        email: "adarshkorade2004@gmail.com",
        telephone: "+919004892091",
        url: SITE_CONFIG.url,
        jobTitle: "AI Engineer & Full Stack Developer",
        sameAs: [
          "https://www.linkedin.com/in/adarshkorade/",
          "https://github.com/Adxrsh02",
          "https://in.pinterest.com/Addarrshhh/",
        ],
        address: {
          "@type": "PostalAddress",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

/* =========================================================
   /contact PAGE
   ========================================================= */

export default function ContactPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageWrapper>
        {/* 1. Hero — personal photo + h1 + quick-contact pills */}
        <ContactHero />

        {/* 2. Form + Sidebar — EmailJS + Turnstile + contact info */}
        <ContactFormSection />

        {/* 3. GitHub Activity — stats + contribution graph (ISR) */}
        <Suspense
          fallback={
            <div
              className="h-[480px] bg-[#FAFAFA] animate-pulse"
              aria-hidden="true"
            />
          }
        >
          <GitHubActivity />
        </Suspense>

        {/* 4. Premium Editorial FAQ Section */}
        <ContactFAQ />

        {/* 5. Final CTA — conversion */}
        <ContactCTA />
      </PageWrapper>
    </>
  );
}

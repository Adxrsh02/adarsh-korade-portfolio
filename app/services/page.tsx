import type { Metadata } from "next";
import { Suspense } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceIntro } from "@/components/services/ServiceIntro";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ServiceExplorer } from "@/components/services/ServiceExplorer";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { TechStack } from "@/components/services/TechStack";
import { WhyWorkWithMe } from "@/components/services/WhyWorkWithMe";
import { ServicesCTA } from "@/components/services/ServicesCTA";

/* =========================================================
   PAGE METADATA
   ========================================================= */

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional services including Full Stack Web Development, AI & Machine Learning, Mobile App Development, Generative AI, Business Process Automation, and more. Building intelligent digital products for modern businesses.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
  openGraph: {
    title: "Services — Adarsh Korade",
    description:
      "Explore professional services: Full Stack Development, AI Solutions, Mobile Apps, UI/UX Design, and more.",
    url: `${SITE_CONFIG.url}/services`,
    type: "website",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Adarsh Korade — Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Adarsh Korade",
    description:
      "Professional software development, AI, and design services for startups and enterprises.",
    images: [SITE_CONFIG.ogImage],
  },
};

/* =========================================================
   JSON-LD STRUCTURED DATA
   ========================================================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "Person",
    "@id": `${SITE_CONFIG.url}/#person`,
    name: SITE_CONFIG.name,
  },
  name: "Professional Software Development Services",
  description:
    "Full Stack Web Development, AI & Machine Learning, Mobile App Development, Generative AI, Business Process Automation, UI/UX Design, and more.",
  url: `${SITE_CONFIG.url}/services`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full Stack Web Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI & Machine Learning Solutions" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Generative AI & LLM Applications" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data Engineering & Automation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Business Process Automation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Graphic Design & Branding" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical Consulting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Portfolio & Personal Branding" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development" } },
    ],
  },
};

/* =========================================================
   /services PAGE
   ========================================================= */

export default function ServicesPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageWrapper>
        {/* 1. Hero — h1, CTAs */}
        <ServiceHero />

        {/* 2. Introduction — philosophy + stats */}
        <ServiceIntro />

        {/* 3. Services Grid — 11-card overview */}
        <ServiceGrid />

        {/* 4. Service Explorer ★ — interactive centerpiece */}
        {/*    Wrapped in Suspense because it uses useSearchParams */}
        <Suspense
          fallback={
            <div className="h-[600px] bg-[#FAFAFA] animate-pulse" aria-hidden="true" />
          }
        >
          <ServiceExplorer />
        </Suspense>

        {/* 5. Development Process — 8-step timeline */}
        <ProcessTimeline />

        {/* 6. Technologies — categorized badge grid */}
        <TechStack />

        {/* 7. Why Work With Me — 6 value propositions */}
        <WhyWorkWithMe />

        {/* 8. Final CTA — conversion */}
        <ServicesCTA />
      </PageWrapper>
    </>
  );
}

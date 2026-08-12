import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutJourney } from "@/components/about/AboutJourney";
import { ExperienceTimeline } from "@/components/about/ExperienceTimeline";
import { EducationSection } from "@/components/about/EducationSection";
import { CertificationSection } from "@/components/about/CertificationSection";
import { HackathonSection } from "@/components/about/HackathonSection";
import { EngineeringActivity } from "@/components/about/EngineeringActivity";
import { JioJourneyTeaser } from "@/components/about/JioJourneyTeaser";
import { AboutCTA } from "@/components/about/AboutCTA";
import { SITE_CONFIG } from "@/lib/constants";

/* =========================================================
   PAGE METADATA
   ========================================================= */

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Adarsh Korade — AI/ML Engineer, Data Engineer, and Full Stack Developer. Explore my professional journey, experience at Jio Platforms, education, certifications, and achievements.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: `About — ${SITE_CONFIG.name}`,
    description:
      "AI/ML Engineer & Data Engineer. My professional journey, experience, certifications, and the story behind the code.",
    url: `${SITE_CONFIG.url}/about`,
  },
};

/* =========================================================
   JSON-LD — Person structured data
   ========================================================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_CONFIG.url}/#person`,
  name: "Adarsh Korade",
  jobTitle: "Data Engineer (AI/ML) Intern",
  description:
    "AI/ML Engineer specializing in RAG systems, NL2SQL, data engineering pipelines, and full stack development.",
  url: `${SITE_CONFIG.url}/about`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Navi Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "SIES Graduate School of Technology",
  },
  worksFor: {
    "@type": "Organization",
    name: "Jio Platforms Limited",
  },
  sameAs: [
    "https://www.linkedin.com/in/adarshkorade/",
    "https://github.com/Adxrsh02",
    "https://in.pinterest.com/Addarrshhh/",
  ],
};

/* =========================================================
   ABOUT PAGE
   ========================================================= */

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageWrapper>
        {/* § 1 — Introduction Hero */}
        <AboutHero />

        {/* § 2 — My Journey */}
        <AboutJourney />

        {/* § 4 — Professional Experience */}
        <ExperienceTimeline />

        {/* § 5 — Education */}
        <EducationSection />

        {/* § 6 — Certifications */}
        <CertificationSection />

        {/* § 7 — Hackathon */}
        <HackathonSection />

        {/* § 8 — Engineering Activity */}
        <EngineeringActivity />

        {/* § 9 — Jio Journey Teaser */}
        <JioJourneyTeaser />

        {/* § 10 — Closing CTA */}
        <AboutCTA />
      </PageWrapper>
    </>
  );
}

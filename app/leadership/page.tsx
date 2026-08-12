import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { LeadershipHero } from "@/components/leadership/LeadershipHero";
import { LeadershipTimeline } from "@/components/leadership/LeadershipTimeline";
import { IdeasToReality } from "@/components/leadership/IdeasToReality";
import { LampLighting } from "@/components/leadership/LampLighting";
import { CoreTeam } from "@/components/leadership/CoreTeam";
import { OnStage } from "@/components/leadership/OnStage";
import { BizenceShowcase } from "@/components/leadership/BizenceShowcase";
import { TeamMemory } from "@/components/leadership/TeamMemory";
import { LeadershipLessons } from "@/components/leadership/LeadershipLessons";
import { LeadershipClosing } from "@/components/leadership/LeadershipClosing";
import { SITE_CONFIG } from "@/lib/constants";

/* =========================================================
   PAGE METADATA
   ========================================================= */

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "My leadership journey at E-Cell SIES GST — from Social Media Volunteer to Chairperson. Three years of building events, leading teams, and growing together.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/leadership`,
  },
  openGraph: {
    title: `Leadership — ${SITE_CONFIG.name}`,
    description:
      "From Social Media Volunteer to Chairperson at E-Cell SIES GST. A story of leadership, teamwork, and growth across three years and multiple events.",
    url: `${SITE_CONFIG.url}/leadership`,
    type: "profile",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Adarsh Korade — Leadership Journey at E-Cell SIES GST",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Leadership — ${SITE_CONFIG.name}`,
    description:
      "From Volunteer to Chairperson at E-Cell SIES GST. My leadership journey in three years.",
    images: [SITE_CONFIG.ogImage],
  },
};

/* =========================================================
   JSON-LD — Person + Organization structured data
   ========================================================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_CONFIG.url}/#person`,
  name: "Adarsh Korade",
  url: `${SITE_CONFIG.url}/leadership`,
  memberOf: {
    "@type": "Organization",
    name: "E-Cell SIES GST",
    alternateName: "Entrepreneurship Cell, SIES Graduate School of Technology",
    url: "https://www.linkedin.com/company/edcsiesgst/",
  },
  hasOccupation: [
    {
      "@type": "Role",
      roleName: "Chairperson",
      startDate: "2025",
      endDate: "2026",
    },
    {
      "@type": "Role",
      roleName: "Outreach Lead",
      startDate: "2024",
      endDate: "2025",
    },
    {
      "@type": "Role",
      roleName: "Social Media Volunteer",
      startDate: "2023",
      endDate: "2024",
    },
  ],
};

/* =========================================================
   /leadership PAGE
   ========================================================= */

export default function LeadershipPage() {
  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageWrapper>
        {/* § 1 — Hero: Personal photo + role progression */}
        <LeadershipHero />

        {/* § 2 — Timeline: 3-role animated vertical timeline */}
        <LeadershipTimeline />

        {/* § 3 — Ideas to Reality: Asymmetric photo pair */}
        <IdeasToReality />

        {/* § 4 — Lamp Lighting: Cinematic full-width photo breather */}
        <LampLighting />

        {/* § 5 — Core Team: Portrait + people narrative */}
        <CoreTeam />

        {/* § 6 — On Stage: Parallax panel photo */}
        <OnStage />

        {/* § 7 — Bizence Showcase: Flagship event + all event cards */}
        <BizenceShowcase />

        {/* § 8 — Team Memory: Full-width team photo + note to team */}
        <TeamMemory />

        {/* § 9 — Leadership Lessons: 5 editorial numbered lessons */}
        <LeadershipLessons />

        {/* § 10 — Closing: Dark dramatic finale with signature quote */}
        <LeadershipClosing />
      </PageWrapper>
    </>
  );
}

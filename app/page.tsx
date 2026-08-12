import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { HomeAboutPreview } from "@/components/about/HomeAboutPreview";
import { HomeServicesPreview } from "@/components/services/HomeServicesPreview";
import { HomeExperiencePreview } from "@/components/about/HomeExperiencePreview";
import { HomeProjectsPreview } from "@/components/projects/HomeProjectsPreview";
import { HomeBlogsPreview } from "@/components/blogs/HomeBlogsPreview";
import { HomeLeadershipPreview } from "@/components/leadership/HomeLeadershipPreview";
import { HeroSection } from "@/components/hero/HeroSection";
import { SITE_CONFIG } from "@/lib/constants";

/* =========================================================
   PAGE METADATA
   ========================================================= */

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

/* =========================================================
   JSON-LD STRUCTURED DATA
   ========================================================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/#person`,
      name: SITE_CONFIG.name,
      jobTitle: "AI Engineer",
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      sameAs: [
        "https://www.linkedin.com/in/adarshkorade/",
        "https://github.com/Adxrsh02",
        "https://in.pinterest.com/Addarrshhh/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_CONFIG.url}/#website`,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      author: {
        "@id": `${SITE_CONFIG.url}/#person`,
      },
    },
  ],
};

/* =========================================================
   LANDING PAGE
   ========================================================= */

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageWrapper>
        {/* ─────────────────────────────────────────────────
            HERO SECTION
            ✅ Phase 2 complete — using HeroSection
            Components: components/hero/HeroSection.tsx
        ───────────────────────────────────────────────── */}
        <HeroSection />

        {/* ─────────────────────────────────────────────────
            ABOUT PREVIEW ("Who I Am")
            Editorial visual preview of personal identity
            Component: components/about/HomeAboutPreview.tsx
        ───────────────────────────────────────────────── */}
        <HomeAboutPreview />

        {/* ─────────────────────────────────────────────────
            SERVICES PREVIEW
            ✅ Phase 4 complete — using HomeServicesPreview
        ───────────────────────────────────────────────── */}
        <HomeServicesPreview />

        {/* ─────────────────────────────────────────────────
            EXPERIENCE PREVIEW
            Editorial timeline of curated career milestones
            Component: components/about/HomeExperiencePreview.tsx
        ───────────────────────────────────────────────── */}
        <HomeExperiencePreview />

        {/* ─────────────────────────────────────────────────
            PROJECTS PREVIEW
            ✅ Complete — using HomeProjectsPreview
            Reuses ProjectCard + getFeaturedProjects() from shared data source
        ───────────────────────────────────────────────── */}
        <HomeProjectsPreview />

        {/* ─────────────────────────────────────────────────
            LEADERSHIP PREVIEW
            Premium editorial preview with real imagery and content.
            Component: components/leadership/HomeLeadershipPreview.tsx
        ─────────────────────────────────────────────── */}
        <HomeLeadershipPreview />

        {/* ─────────────────────────────────────────────────
            BLOG PREVIEW ("Latest Insights")
            Editorial writing section with future-ready fallback
            Component: components/blogs/HomeBlogsPreview.tsx
        ───────────────────────────────────────────────── */}
        <HomeBlogsPreview />

      </PageWrapper>
    </>
  );
}


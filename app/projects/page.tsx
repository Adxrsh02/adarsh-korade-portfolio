import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { PROJECTS, getFeaturedProjects } from "@/lib/projects-data";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ProjectsHero } from "@/components/projects/ProjectsHero";
import { ProjectsFilterBar } from "@/components/projects/ProjectsFilterBar";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { ProjectsCTA } from "@/components/projects/ProjectsCTA";

/* =========================================================
   PAGE METADATA
   ========================================================= */

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore engineering case studies in AI & Machine Learning, Data Engineering, and Full Stack Development. Each project showcases real-world problem-solving, system architecture, and production-quality software.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/projects`,
  },
  openGraph: {
    title: "Projects — Adarsh Korade",
    description:
      "Engineering case studies in AI, Data Engineering, and Full Stack Development — documenting real problems, architectures, and outcomes.",
    url: `${SITE_CONFIG.url}/projects`,
    type: "website",
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: "Adarsh Korade — Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Adarsh Korade",
    description:
      "AI, Data Engineering, and Full Stack engineering case studies.",
    images: [SITE_CONFIG.ogImage],
  },
};

/* =========================================================
   JSON-LD STRUCTURED DATA
   ========================================================= */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Engineering Projects — Adarsh Korade",
  description:
    "A collection of AI, Data Engineering, and Full Stack engineering projects by Adarsh Korade.",
  url: `${SITE_CONFIG.url}/projects`,
  itemListElement: PROJECTS.map((project, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: project.title,
    description: project.tagline,
    url: `${SITE_CONFIG.url}/projects/${project.slug}`,
  })),
};

/* =========================================================
   /projects PAGE
   ========================================================= */

export default function ProjectsPage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageWrapper>
        {/* 1. Hero — h1, stats, CTAs */}
        <ProjectsHero />

        {/* 2. Filter bar — sticky, category pills + search + results count */}
        <ProjectsFilterBar
          totalCount={PROJECTS.length}
          filteredCount={PROJECTS.length}
        />

        {/* 3. Featured + All Projects grid — client-side filtered */}
        <ProjectsGrid
          projects={PROJECTS}
          featuredProjects={featuredProjects}
        />

        {/* 4. Conversion CTA */}
        <ProjectsCTA />
      </PageWrapper>
    </>
  );
}

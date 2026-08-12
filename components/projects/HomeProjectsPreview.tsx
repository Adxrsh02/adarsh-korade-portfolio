import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects-data";

/* =========================================================
   HomeProjectsPreview
   Premium "Featured Work" section for the Home Page.

   Architecture:
     lib/projects-data.ts
           │
           ▼
     getFeaturedProjects()          ← single source of truth
           │
     ProjectCard (shared)           ← exact same component as /projects page
           │
    ┌──────┴───────┐
    ▼              ▼
 Home Page    /projects Page

   Shows up to 3 isFeatured=true projects from the data source.
   No duplicate logic, no duplicate data.
   ========================================================= */

export function HomeProjectsPreview() {
  // Pull featured projects from the shared data source (server-side, zero JS bundle cost)
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  return (
    <SectionWrapper
      id="projects"
      background="white"
      ariaLabelledBy="projects-preview-heading"
    >
      <Container>
        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div className="flex flex-col gap-4 max-w-[640px]">
            <SectionLabel>Featured Work</SectionLabel>
            <SectionHeading id="projects-preview-heading">
              Selected Projects
            </SectionHeading>
            <p className="text-lg leading-relaxed text-[#737373]">
              A curated selection of projects showcasing expertise in AI
              Engineering, Data Engineering, Full Stack Development, and modern
              software architecture.
            </p>
          </div>

          {/* Desktop CTA — right-aligned in header row */}
          <div className="hidden sm:block flex-shrink-0">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] hover:text-[#F97316] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
              aria-label="Explore the complete projects portfolio"
            >
              Explore All Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Project Cards Grid ── */}
        {/* Reuses ProjectCard exactly — same component, same hover animations,
            same typography, same badge system as the /projects listing page. */}
        {featuredProjects.length > 0 ? (
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {featuredProjects.map((project, i) => (
              <li key={project.slug}>
                <ProjectCard project={project} index={i} />
              </li>
            ))}
          </ul>
        ) : (
          /* Graceful fallback if no projects are flagged as featured */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="aspect-[4/5] rounded-xl bg-[#F5F5F5] border border-[#E5E5E5] animate-pulse"
              />
            ))}
          </div>
        )}

        {/* ── Mobile CTA (full-width, below cards) ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Mobile: full ghost button */}
          <div className="sm:hidden w-full">
            <Link
              href="/projects"
              className="group flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] hover:border-[#D4D4D4] hover:bg-white hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
              aria-label="Explore all projects"
            >
              <span className="text-sm font-semibold text-[#0A0A0A]">
                Explore Complete Portfolio
              </span>
              <ArrowRight className="w-4 h-4 text-[#F97316] transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Desktop: compact ghost text link (below cards, left-aligned) */}
          <div className="hidden sm:flex items-center gap-6">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
              aria-label="See all projects in the portfolio"
            >
              See All Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Subtle project count indicator */}
            <span className="text-sm text-[#A3A3A3]">
              {featuredProjects.length} of {getFeaturedProjects().length > 3 ? `${getFeaturedProjects().length}+` : "all"} featured projects shown
            </span>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeaturedProjectCard } from "@/components/projects/FeaturedProjectCard";
import { ProjectCard } from "@/components/projects/ProjectCard";
import type { ProjectData } from "@/types";

/* =========================================================
   ProjectsGridInner
   Client component — reads URL search params to filter
   and render the featured + all-projects grids.
   ========================================================= */

interface ProjectsGridInnerProps {
  projects: ProjectData[];
  featuredProjects: ProjectData[];
}

function ProjectsGridInner({ projects, featuredProjects }: ProjectsGridInnerProps) {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") ?? "all";
  const searchQuery = (searchParams.get("q") ?? "").toLowerCase().trim();

  // Filter projects
  const filtered = projects.filter((p) => {
    // Category filter
    const categoryMatch =
      activeCategory === "all" || p.categories.includes(activeCategory);
    if (!categoryMatch) return false;

    // Search filter
    if (searchQuery) {
      const searchTarget = [
        p.title,
        p.tagline,
        p.portfolioDescription,
        ...p.categories,
        ...(p.techStack.aiMl ?? []),
        ...(p.techStack.frontend ?? []),
        ...(p.techStack.backend ?? []),
        ...(p.techStack.languages ?? []),
        ...(p.techStack.tools ?? []),
        ...(p.techStack.database ?? []),
      ]
        .join(" ")
        .toLowerCase();
      return searchTarget.includes(searchQuery);
    }

    return true;
  });

  const isFiltered = activeCategory !== "all" || searchQuery.length > 0;

  // When filtering, show all filtered results in the grid
  // When not filtering, show featured separately and all in grid below
  const showFeaturedSection = !isFiltered && featuredProjects.length > 0;
  const gridProjects = isFiltered ? filtered : projects;

  return (
    <>
      {/* ── Featured Projects (only when no active filter) ── */}
      {showFeaturedSection && (
        <SectionWrapper
          background="white"
          aria-labelledby="featured-heading"
          className="pt-0 pb-16 md:pb-20"
        >
          <Container>
            <div className="flex flex-col gap-8">
              {/* Section header */}
              <div className="flex flex-col gap-2">
                <SectionLabel>Featured Work</SectionLabel>
                <SectionHeading id="featured-heading">
                  Flagship Projects
                </SectionHeading>
              </div>

              {/* 2-column featured grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {featuredProjects.map((project) => (
                  <FeaturedProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </Container>
        </SectionWrapper>
      )}

      {/* ── All Projects Grid ── */}
      <SectionWrapper
        background="alt"
        aria-labelledby="all-projects-heading"
        className={showFeaturedSection ? "pt-16 md:pt-20" : "pt-8 md:pt-12"}
      >
        <Container>
          <div className="flex flex-col gap-8">
            {/* Section header */}
            <div className="flex flex-col gap-2">
              <SectionLabel>
                {isFiltered ? "Filtered Results" : "All Projects"}
              </SectionLabel>
              <SectionHeading id="all-projects-heading">
                {isFiltered
                  ? `${filtered.length} Project${filtered.length !== 1 ? "s" : ""} Found`
                  : "Complete Portfolio"}
              </SectionHeading>
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#F5F5F5] flex items-center justify-center">
                  <span className="text-3xl" aria-hidden="true">🔍</span>
                </div>
                <div className="flex flex-col gap-2 max-w-[320px]">
                  <p className="font-semibold text-[#0A0A0A]">No projects found</p>
                  <p className="text-sm text-[#737373]">
                    Try adjusting your search or selecting a different category.
                  </p>
                </div>
              </div>
            )}

            {/* Project grid */}
            {filtered.length > 0 && (
              <ul
                role="list"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {gridProjects.map((project, i) => (
                  <li key={project.slug}>
                    <ProjectCard project={project} index={i} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}

/* =========================================================
   Public export — wraps in Suspense
   ========================================================= */

export function ProjectsGrid(props: ProjectsGridInnerProps) {
  return (
    <Suspense
      fallback={
        <SectionWrapper background="alt">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-[4/5] rounded-xl bg-[#F5F5F5] animate-pulse"
                  aria-hidden="true"
                />
              ))}
            </div>
          </Container>
        </SectionWrapper>
      }
    >
      <ProjectsGridInner {...props} />
    </Suspense>
  );
}

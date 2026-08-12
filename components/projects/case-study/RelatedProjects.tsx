import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionLabel } from "@/components/sections/SectionLabel";
import type { ProjectData } from "@/types";

/* =========================================================
   RelatedProjects
   Horizontal strip of related project cards.
   Linked by shared categories, excludes current project.
   ========================================================= */

interface RelatedProjectsProps {
  projects: ProjectData[];
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <section
      aria-labelledby="related-heading"
      className="bg-white py-16 md:py-20"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        <div className="flex flex-col gap-8">
          {/* Heading */}
          <div className="flex flex-col gap-2">
            <SectionLabel>More Projects</SectionLabel>
            <h2
              id="related-heading"
              className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight"
            >
              Related Work
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col bg-white border border-[#E5E5E5] rounded-xl overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
                aria-label={`View ${project.title} case study`}
              >
                {/* Thumbnail */}
                <div className="aspect-[16/9] overflow-hidden relative bg-[#F5F5F5]">
                  <Image
                    src={project.thumbnailPath}
                    alt={`${project.title} thumbnail`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-col gap-3 p-5">
                  <Badge variant="accent">{project.categories[0].toUpperCase()}</Badge>
                  <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-base text-[#0A0A0A] tracking-tight leading-snug group-hover:text-[#F97316] transition-colors duration-150">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#737373] leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#F97316] mt-auto pt-1">
                    View Case Study
                    <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

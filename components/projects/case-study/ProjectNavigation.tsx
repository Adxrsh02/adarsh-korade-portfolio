import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { ProjectData } from "@/types";

/* =========================================================
   ProjectNavigation
   Previous / Next project navigation strip.
   Displayed at the bottom of every case study page.
   ========================================================= */

interface ProjectNavigationProps {
  previous: ProjectData | null;
  next: ProjectData | null;
}

export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Project navigation"
      className="border-t border-[#E5E5E5] bg-white"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E5E5]">
          {/* Previous */}
          <div className="py-8 sm:pr-8">
            {previous ? (
              <Link
                href={`/projects/${previous.slug}`}
                className="group flex flex-col gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-md"
                aria-label={`Previous project: ${previous.title}`}
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A3A3A3] group-hover:text-[#737373] transition-colors duration-150">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Previous Project
                </span>
                <span className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-lg text-[#0A0A0A] group-hover:text-[#F97316] transition-colors duration-150 leading-snug">
                  {previous.title}
                </span>
                <span className="text-sm text-[#737373] line-clamp-1">
                  {previous.tagline}
                </span>
              </Link>
            ) : (
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D4D4D4]">
                  No Previous Project
                </span>
                <Link
                  href="/projects"
                  className="text-sm font-medium text-[#F97316] hover:text-[#EA580C] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
                >
                  ← Back to All Projects
                </Link>
              </div>
            )}
          </div>

          {/* Next */}
          <div className="py-8 sm:pl-8 sm:text-right">
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="group flex flex-col gap-2 sm:items-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-md"
                aria-label={`Next project: ${next.title}`}
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A3A3A3] group-hover:text-[#737373] transition-colors duration-150">
                  Next Project
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-lg text-[#0A0A0A] group-hover:text-[#F97316] transition-colors duration-150 leading-snug">
                  {next.title}
                </span>
                <span className="text-sm text-[#737373] line-clamp-1">
                  {next.tagline}
                </span>
              </Link>
            ) : (
              <div className="flex flex-col gap-2 sm:items-end">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#D4D4D4]">
                  No Next Project
                </span>
                <Link
                  href="/projects"
                  className="text-sm font-medium text-[#F97316] hover:text-[#EA580C] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
                >
                  View All Projects →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

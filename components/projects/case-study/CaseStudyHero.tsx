import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitBranch, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { ProjectData } from "@/types";

/* =========================================================
   CaseStudyHero
   Full hero for project detail pages.
   Breadcrumb → Categories → H1 → Tagline → Actions → Hero Image
   ========================================================= */

interface CaseStudyHeroProps {
  project: ProjectData;
}

const STATUS_COLORS: Record<string, string> = {
  "Completed": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "Completed & Live": "text-emerald-700 bg-emerald-50 border-emerald-200",
  "Live": "text-blue-700 bg-blue-50 border-blue-200",
  "In Progress": "text-amber-700 bg-amber-50 border-amber-200",
  "Research": "text-violet-700 bg-violet-50 border-violet-200",
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  const statusClass = STATUS_COLORS[project.status] ?? STATUS_COLORS["Completed"];

  return (
    <section
      aria-labelledby="case-study-title"
      className="bg-white py-16 md:py-20 lg:py-24"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="inline-flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/projects"
                className="text-[#737373] hover:text-[#F97316] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
              >
                Projects
              </Link>
            </li>
            <li aria-hidden="true" className="text-[#D4D4D4]">
              /
            </li>
            <li>
              <span className="text-[#0A0A0A] font-medium" aria-current="page">
                {project.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Content */}
        <div className="flex flex-col gap-6 max-w-[860px]">
          {/* Categories + Status row */}
          <div className="flex flex-wrap items-center gap-2">
            {project.categories.map((cat, i) => (
              <Badge key={cat} variant={i === 0 ? "accent" : "outline"}>
                {cat.toUpperCase()}
              </Badge>
            ))}
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${statusClass}`}
            >
              {project.status}
            </span>
          </div>

          {/* H1 */}
          <h1
            id="case-study-title"
            className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0A0A0A] tracking-tight leading-[1.08]"
          >
            {project.title}
          </h1>

          {/* Tagline */}
          <p className="text-lg text-[#737373] leading-relaxed max-w-[680px]">
            {project.tagline}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-2">
            {project.liveDemoUrl && (
              <Button
                as="a"
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
                View Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                as="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
              >
                <GitBranch className="w-4 h-4" aria-hidden="true" />
                View on GitHub
              </Button>
            )}
            {project.research?.paperPdfPath && (
              <Button
                as="a"
                href={project.research.paperPdfPath}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="lg"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                Research Paper
              </Button>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 aspect-[16/9] relative overflow-hidden rounded-xl md:rounded-2xl border border-[#E5E5E5] shadow-lg bg-[#F5F5F5]">
          <Image
            src={project.thumbnailPath}
            alt={`${project.title} — project overview`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1280px"
          />
        </div>
      </div>
    </section>
  );
}

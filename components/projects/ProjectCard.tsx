import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { ProjectData } from "@/types";

/* =========================================================
   ProjectCard
   Standard grid card for the All Projects section.
   Compact: 16:9 thumbnail, category badge, title, tagline,
   tech badges (max 4), status indicator, CTA link.
   ========================================================= */

interface ProjectCardProps {
  project: ProjectData;
  /** Index for staggered animation delay */
  index?: number;
}

const STATUS_COLORS: Record<string, { dot: string }> = {
  "Completed": { dot: "bg-emerald-500" },
  "Completed & Live": { dot: "bg-emerald-500" },
  "Live": { dot: "bg-blue-500" },
  "In Progress": { dot: "bg-amber-500" },
  "Research": { dot: "bg-violet-500" },
};

const DELAY_CLASSES = [
  "",
  "animation-delay-100",
  "animation-delay-150",
  "animation-delay-200",
  "animation-delay-250",
  "animation-delay-300",
  "animation-delay-350",
];

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const statusColor = STATUS_COLORS[project.status] ?? STATUS_COLORS["Completed"];
  const delayClass = DELAY_CLASSES[Math.min(index, DELAY_CLASSES.length - 1)];

  // Primary category for the badge
  const primaryCategory = project.categories[0] ?? "";

  // Tech display: prefer AI/ML → frontend → backend → tools → languages
  const techPriority = Array.from(
    new Set(
      [
        ...(project.techStack.aiMl ?? []),
        ...(project.techStack.frontend ?? []),
        ...(project.techStack.backend ?? []),
        ...(project.techStack.tools ?? []),
        ...(project.techStack.languages ?? []),
      ].filter(Boolean)
    )
  );
  const displayTech = techPriority.slice(0, 4);
  const extraTech = techPriority.length - displayTech.length;

  return (
    <article
      className={`group project-card-enter ${delayClass} flex flex-col bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]`}
      aria-label={`${project.title} — ${project.categories.join(", ")}`}
    >
      {/* Thumbnail */}
      <Link
        href={`/projects/${project.slug}`}
        className="block aspect-[16/9] overflow-hidden relative bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={project.thumbnailPath}
          alt={`${project.title} project thumbnail`}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </Link>

      {/* Card Body */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Category Badge */}
        <Badge variant="accent">{primaryCategory.toUpperCase()}</Badge>

        {/* Title */}
        <Link
          href={`/projects/${project.slug}`}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
        >
          <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-lg text-[#0A0A0A] tracking-tight leading-snug hover:text-[#F97316] transition-colors duration-150">
            {project.title}
          </h3>
        </Link>

        {/* Tagline */}
        <p className="text-sm text-[#737373] leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech Badges */}
        {displayTech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {displayTech.map((tech) => (
              <Badge key={tech} variant="default" size="sm">
                {tech}
              </Badge>
            ))}
            {extraTech > 0 && (
              <Badge variant="default" size="sm">
                +{extraTech}
              </Badge>
            )}
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Footer: Status + CTA */}
        <div className="flex items-center justify-between pt-2 border-t border-[#F5F5F5]">
          {/* Status */}
          <span className="inline-flex items-center gap-1.5 text-xs text-[#737373]">
            <span className={`w-1.5 h-1.5 rounded-full ${statusColor.dot}`} />
            {project.status}
          </span>

          {/* Live demo badge */}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#737373] hover:text-[#0A0A0A] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
              aria-label={`${project.title} live demo (opens in new tab)`}
            >
              <ExternalLink className="w-3 h-3" />
              Live
            </a>
          )}

        </div>

        {/* CTA */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
        >
          View Case Study
          <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

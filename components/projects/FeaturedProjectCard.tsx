import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitBranch, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { ProjectData } from "@/types";

/* =========================================================
   FeaturedProjectCard
   Large editorial card for the Featured Projects section.
   Uses 16:10 thumbnail, full category badges, rich metadata.
   ========================================================= */

interface FeaturedProjectCardProps {
  project: ProjectData;
}

const STATUS_COLORS: Record<string, { dot: string; text: string }> = {
  "Completed": { dot: "bg-emerald-500", text: "text-emerald-700" },
  "Completed & Live": { dot: "bg-emerald-500", text: "text-emerald-700" },
  "Live": { dot: "bg-blue-500", text: "text-blue-700" },
  "In Progress": { dot: "bg-amber-500", text: "text-amber-700" },
  "Research": { dot: "bg-violet-500", text: "text-violet-700" },
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const statusColor = STATUS_COLORS[project.status] ?? STATUS_COLORS["Completed"];

  // Show primary category as accent badge, rest as outline
  const [primaryCategory, ...restCategories] = project.categories;

  // Flatten all tech from all groups, deduplicate, limit display
  const allTech = Array.from(
    new Set(
      [
        ...(project.techStack.aiMl ?? []),
        ...(project.techStack.frontend ?? []),
        ...(project.techStack.backend ?? []),
        ...(project.techStack.languages ?? []),
        ...(project.techStack.tools ?? []),
      ].filter(Boolean)
    )
  );
  const displayTech = allTech.slice(0, 6);
  const extraTech = allTech.length - displayTech.length;

  return (
    <article
      className="group relative flex flex-col bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
      aria-label={`${project.title} — ${project.categories.join(", ")}`}
    >
      {/* Thumbnail */}
      <Link
        href={`/projects/${project.slug}`}
        className="block aspect-[16/10] overflow-hidden relative bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={project.thumbnailPath}
          alt={`${project.title} project thumbnail`}
          fill
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
        />
        {/* Featured badge overlay */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 bg-[#0A0A0A] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] inline-block" />
            Featured
          </span>
        </div>
      </Link>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6 md:p-8 gap-4">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{primaryCategory.toUpperCase()}</Badge>
          {restCategories.map((cat) => (
            <Badge key={cat} variant="outline">
              {cat.toUpperCase()}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <Link
          href={`/projects/${project.slug}`}
          className="group/title focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
        >
          <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-bold text-xl sm:text-2xl text-[#0A0A0A] tracking-tight leading-snug group-hover/title:text-[#F97316] transition-colors duration-150">
            {project.title}
          </h3>
        </Link>

        {/* Tagline */}
        <p className="text-sm text-[#737373] leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        {/* Tech stack badges */}
        {displayTech.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {displayTech.map((tech) => (
              <Badge key={tech} variant="default" size="sm">
                {tech}
              </Badge>
            ))}
            {extraTech > 0 && (
              <Badge variant="default" size="sm">
                +{extraTech} more
              </Badge>
            )}
          </div>
        )}

        {/* Status + Project type */}
        <div className="flex items-center gap-4 pt-1">
          <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${statusColor.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${statusColor.dot}`} />
            {project.status}
          </span>
          <span className="text-xs text-[#A3A3A3]">{project.projectType}</span>
        </div>

        {/* Spacer to push actions to bottom */}
        <div className="flex-1" />

        {/* Actions */}
        <div className="flex items-center justify-between gap-4 pt-2 border-t border-[#F5F5F5]">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F97316] hover:text-[#EA580C] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
          >
            View Case Study
            <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#737373] hover:text-[#0A0A0A] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
                aria-label={`View ${project.title} on GitHub (opens in new tab)`}
              >
                <GitBranch className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-[#737373] hover:text-[#0A0A0A] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
                aria-label={`View ${project.title} live demo (opens in new tab)`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

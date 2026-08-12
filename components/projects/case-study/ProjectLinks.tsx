import { GitBranch, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ProjectData } from "@/types";

/* =========================================================
   ProjectLinks
   GitHub repository card + Live Demo action.
   ========================================================= */

interface ProjectLinksProps {
  project: ProjectData;
}

export function ProjectLinks({ project }: ProjectLinksProps) {
  const hasGithub = Boolean(project.githubUrl);
  const hasDemo = Boolean(project.liveDemoUrl);

  if (!hasGithub && !hasDemo) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      {/* GitHub card */}
      {hasGithub && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-1 flex items-center gap-4 bg-[#0A0A0A] hover:bg-[#171717] text-white rounded-xl p-5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
          aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
            <GitBranch className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-xs text-white/60 uppercase tracking-wider font-semibold">
              Source Code
            </span>
            <span className="text-sm font-semibold text-white truncate">
              GitHub Repository ↗
            </span>
            {project.lastUpdated && (
              <span className="text-xs text-white/40">
                Last updated: {project.lastUpdated}
              </span>
            )}
          </div>
        </a>
      )}

      {/* Live Demo card */}
      {hasDemo && (
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex-1 flex items-center gap-4 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-xl p-5 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
          aria-label={`View ${project.title} live demo (opens in new tab)`}
        >
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
            <ExternalLink className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-xs text-white/80 uppercase tracking-wider font-semibold">
              Live Deployment
            </span>
            <span className="text-sm font-semibold text-white truncate">
              View Live Demo ↗
            </span>
            <span className="text-xs text-white/70">
              Click to open in new tab
            </span>
          </div>
        </a>
      )}
    </div>
  );
}

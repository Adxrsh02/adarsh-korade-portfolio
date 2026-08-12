import { Badge } from "@/components/ui/Badge";
import type { ProjectTechStack } from "@/types";

/* =========================================================
   TechStackSection
   Displays grouped technology badges for a project.
   Groups: Frontend, Backend, Languages, AI/ML, Data Eng,
           Database, Cloud, Deployment, Tools
   ========================================================= */

interface TechStackSectionProps {
  techStack: ProjectTechStack;
}

interface TechGroup {
  label: string;
  key: keyof ProjectTechStack;
}

const TECH_GROUPS: TechGroup[] = [
  { label: "Frontend", key: "frontend" },
  { label: "Backend", key: "backend" },
  { label: "Programming Languages", key: "languages" },
  { label: "AI / ML Stack", key: "aiMl" },
  { label: "Data Engineering", key: "dataEngineering" },
  { label: "Database", key: "database" },
  { label: "Cloud Platform", key: "cloud" },
  { label: "Deployment", key: "deployment" },
  { label: "Tools & Libraries", key: "tools" },
];

export function TechStackSection({ techStack }: TechStackSectionProps) {
  // Only render groups that have at least one item
  const activeGroups = TECH_GROUPS.filter((g) => {
    const items = techStack[g.key];
    return Array.isArray(items) && items.length > 0;
  });

  if (activeGroups.length === 0) return null;

  return (
    <section
      aria-labelledby="tech-stack-heading"
      className="bg-[#FAFAFA] py-16 md:py-20"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        <div className="flex flex-col gap-8">
          {/* Section heading */}
          <div className="flex flex-col gap-2">
            <h2
              id="tech-stack-heading"
              className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight"
            >
              Technology Stack
            </h2>
            <div className="h-px w-12 bg-[#F97316] rounded-full" aria-hidden="true" />
          </div>

          {/* Groups grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeGroups.map((group) => {
              const items = techStack[group.key] as string[];
              return (
                <div
                  key={group.key}
                  className="tech-group bg-white border border-[#E5E5E5] rounded-xl p-5 flex flex-col gap-3 transition-shadow duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                >
                  {/* Group label */}
                  <span className="tech-group-label text-xs font-semibold uppercase tracking-wider text-[#A3A3A3] transition-colors duration-150">
                    {group.label}
                  </span>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((tech) => (
                      <Badge key={tech} variant="default" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

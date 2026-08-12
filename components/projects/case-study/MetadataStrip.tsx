import type { ProjectData } from "@/types";

/* =========================================================
   MetadataStrip
   Scannable project metadata grid.
   Displays: Role, Organization, Duration, Team, Status,
   Industry, Project Type, Difficulty Level.
   ========================================================= */

interface MetadataStripProps {
  project: ProjectData;
}

export function MetadataStrip({ project }: MetadataStripProps) {
  const items = [
    { label: "Role", value: project.role },
    { label: "Organization", value: project.organization },
    { label: "Duration", value: project.duration },
    { label: "Team Size", value: project.teamSize },
    { label: "Status", value: project.status },
    { label: "Industry", value: project.industry },
    { label: "Project Type", value: project.projectType },
    ...(project.difficultyLevel
      ? [{ label: "Difficulty", value: project.difficultyLevel }]
      : []),
    ...(project.version ? [{ label: "Version", value: project.version }] : []),
    ...(project.lastUpdated
      ? [{ label: "Last Updated", value: project.lastUpdated }]
      : []),
  ];

  return (
    <section
      aria-label="Project metadata"
      className="bg-[#FAFAFA] border-y border-[#E5E5E5]"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px] py-8 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5">
              <dt className="text-[10px] uppercase tracking-widest text-[#A3A3A3] font-semibold">
                {item.label}
              </dt>
              <dd className="text-sm text-[#0A0A0A] font-medium leading-snug">
                {item.value}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Badge } from "@/components/ui/Badge";
import type { TechCategory } from "@/types";

/* =========================================================
   TechCategory
   A labeled group of technology badges.
   ========================================================= */

interface TechCategoryProps {
  category: TechCategory;
}

export function TechCategoryGroup({ category }: TechCategoryProps) {
  return (
    <div className="flex flex-col gap-3">
      {/* Category name */}
      <h3 className="text-xs font-semibold uppercase tracking-widest text-[#A3A3A3] pb-2 border-b border-[#E5E5E5]">
        {category.name}
      </h3>

      {/* Technology badges */}
      <div className="flex flex-wrap gap-2">
        {category.technologies.map((tech) => (
          <Badge key={tech} variant="outline" size="md">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}

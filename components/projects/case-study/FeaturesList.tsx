import { Check } from "lucide-react";

/* =========================================================
   FeaturesList
   Styled feature list with orange check icons.
   Renders in a 2-column grid on desktop.
   ========================================================= */

interface FeaturesListProps {
  features: string[];
}

export function FeaturesList({ features }: FeaturesListProps) {
  if (!features || features.length === 0) return null;

  return (
    <ul
      role="list"
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {features.map((feature, i) => (
        <li
          key={i}
          className="flex items-start gap-3 bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg p-4 hover:border-[#D4D4D4] transition-colors duration-150"
        >
          <span
            className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center mt-0.5"
            aria-hidden="true"
          >
            <Check className="w-3 h-3 text-[#EA580C]" strokeWidth={3} />
          </span>
          <span className="text-sm text-[#404040] leading-relaxed">
            {feature}
          </span>
        </li>
      ))}
    </ul>
  );
}

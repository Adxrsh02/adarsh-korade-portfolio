import {
  Search, ClipboardList, PenTool, Layers,
  Code2, CheckCircle, Rocket, Headphones,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC } from "react";
import type { ProcessStep } from "@/types";

/* =========================================================
   ProcessStep
   Individual step card in the development process timeline.
   ========================================================= */

const ICON_MAP: Record<string, FC<LucideProps>> = {
  Search, ClipboardList, PenTool, Layers,
  Code2, CheckCircle, Rocket, Headphones,
};

interface ProcessStepProps {
  step: ProcessStep;
  isFirst?: boolean;
}

export function ProcessStepCard({ step, isFirst = false }: ProcessStepProps) {
  const Icon = ICON_MAP[step.icon] ?? Code2;

  return (
    <div className="flex flex-col items-center text-center gap-3 relative">
      {/* Step circle */}
      <div
        className={[
          "w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-2",
          "transition-colors duration-250",
          isFirst
            ? "bg-[#F97316] border-[#F97316] text-white"
            : "bg-white border-[#E5E5E5] text-[#737373]",
        ].join(" ")}
        aria-hidden="true"
      >
        <Icon size={18} />
      </div>

      {/* Label + description */}
      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]">
          {String(step.step).padStart(2, "0")}
        </p>
        <p className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-sm text-[#0A0A0A] leading-snug">
          {step.label}
        </p>
        <p className="text-xs text-[#737373] leading-relaxed max-w-[120px]">
          {step.description}
        </p>
      </div>
    </div>
  );
}

/* ─── Vertical variant for mobile ─── */

export function ProcessStepCardVertical({ step, isFirst = false }: ProcessStepProps) {
  const Icon = ICON_MAP[step.icon] ?? Code2;

  return (
    <div className="flex items-start gap-4">
      {/* Circle */}
      <div
        className={[
          "w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 mt-0.5",
          isFirst
            ? "bg-[#F97316] border-[#F97316] text-white"
            : "bg-white border-[#E5E5E5] text-[#737373]",
        ].join(" ")}
        aria-hidden="true"
      >
        <Icon size={16} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-0.5">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]">
          {String(step.step).padStart(2, "0")}
        </p>
        <p className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-sm text-[#0A0A0A]">
          {step.label}
        </p>
        <p className="text-sm text-[#737373] leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

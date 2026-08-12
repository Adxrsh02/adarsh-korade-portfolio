import {
  Rocket, Brain, Layers, Shield, Eye, Handshake,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC } from "react";
import type { ValueProposition } from "@/types";

/* =========================================================
   ValueCard
   Individual value proposition card.
   ========================================================= */

const ICON_MAP: Record<string, FC<LucideProps>> = {
  Rocket, Brain, Layers, Shield, Eye, Handshake,
};

interface ValueCardProps {
  value: ValueProposition;
}

export function ValueCard({ value }: ValueCardProps) {
  const Icon = ICON_MAP[value.icon] ?? Shield;

  return (
    <div className="flex flex-col gap-4 p-6 bg-white border border-[#E5E5E5] rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.04)] border-l-2 border-l-[#F97316] transition-shadow duration-250 hover:shadow-[0_4px_12px_rgba(0,0,0,0.06)]">
      {/* Icon + number row */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0">
          <Icon size={16} className="text-[#F97316]" aria-hidden="true" />
        </div>
        <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
          {value.number}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-base text-[#0A0A0A] leading-snug">
        {value.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#737373] leading-relaxed">
        {value.description}
      </p>
    </div>
  );
}

import {
  Globe, Smartphone, Brain, Sparkles, Database,
  Zap, PenTool, Palette, Lightbulb, User, Code2,
} from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC } from "react";
import { Card } from "@/components/ui/Card";
import type { ServiceData } from "@/types";

/* =========================================================
   ServiceGridCard
   Individual card in the services overview grid.
   ========================================================= */

const ICON_MAP: Record<string, FC<LucideProps>> = {
  Globe, Smartphone, Brain, Sparkles, Database,
  Zap, PenTool, Palette, Lightbulb, User, Code2,
};

interface ServiceGridCardProps {
  service: ServiceData;
}

export function ServiceGridCard({ service }: ServiceGridCardProps) {
  const Icon = ICON_MAP[service.icon] ?? Globe;

  return (
    <Card
      variant="interactive"
      padding="md"
      className="group relative flex flex-col gap-4"
      href={`/services?service=${service.id}#service-explorer`}
    >
      {/* Service number — top right */}
      <span className="absolute top-4 right-4 text-xs font-medium text-[#A3A3A3] tabular-nums">
        {service.number}
      </span>

      {/* Icon circle */}
      <div className="w-10 h-10 rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0">
        <Icon size={18} className="text-[#F97316]" aria-hidden="true" />
      </div>

      {/* Title */}
      <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-base text-[#0A0A0A] leading-snug pr-6">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#737373] leading-relaxed line-clamp-2 flex-1">
        {service.tagline}
      </p>

      {/* Arrow link */}
      <span className="text-sm font-medium text-[#F97316] group-hover:underline underline-offset-2 mt-auto">
        Learn more →
      </span>
    </Card>
  );
}

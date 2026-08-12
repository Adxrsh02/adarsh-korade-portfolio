"use client";

import Image from "next/image";
import { HERO_FEATURED_ITEM } from "@/lib/gallery-data";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, MapPin, Calendar, Maximize2 } from "lucide-react";
import type { GalleryItemData } from "@/types/gallery";

interface GalleryHeroProps {
  onOpenLightbox?: (item: GalleryItemData) => void;
}

/**
 * GalleryHero
 * ───────────
 * Editorial Hero section for the Gallery page.
 * Features an asymmetrical 2-column split (Content left, Featured Photo right).
 */
export function GalleryHero({ onOpenLightbox }: GalleryHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#E5E5E5] pt-8 pb-12 lg:pt-14 lg:pb-20">
      {/* Subtle ambient grid pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
          
          {/* Left Column — Text & Narrative Intro */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="accent" size="md">
                <Sparkles size={12} className="mr-1 text-[#EA580C]" />
                MY JOURNEY
              </Badge>
              <span className="text-xs font-mono tracking-wider text-[#737373] uppercase">
                Visual Archive
              </span>
            </div>

            <h1 className="font-heading text-display text-[#0A0A0A] font-bold tracking-tight leading-[1.1]">
              Moments Behind <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A0A0A] via-[#404040] to-[#EA580C]">
                the Work.
              </span>
            </h1>

            <p className="text-body-lg text-[#525252] max-w-2xl leading-relaxed">
              A curated visual archive of the people, places, leadership summits, corporate engineering sprints, hackathons, and personal milestones that have shaped my career across AI, Data Engineering, and community building.
            </p>

            {/* Quick Stat Pill Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-medium text-[#404040]">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F5] border border-[#E5E5E5]">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]" />
                <span>15+ Events Organized</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F5] border border-[#E5E5E5]">
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
                <span>100+ Team Members Led</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F5] border border-[#E5E5E5]">
                <span className="w-2 h-2 rounded-full bg-[#059669]" />
                <span>Jio Platforms Sprints</span>
              </div>
            </div>
          </div>

          {/* Right Column — Asymmetric Featured Hero Image Card */}
          <div className="lg:col-span-5">
            <div
              onClick={() => onOpenLightbox?.(HERO_FEATURED_ITEM)}
              tabIndex={0}
              role="button"
              aria-label={`View featured image: ${HERO_FEATURED_ITEM.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenLightbox?.(HERO_FEATURED_ITEM);
                }
              }}
              className="group relative rounded-xl overflow-hidden bg-[#FAFAFA] border border-[#E5E5E5] shadow-[0_4px_20px_rgba(0,0,0,0.06)] cursor-pointer transition-all duration-300 hover:border-[#D4D4D4] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2"
            >
              {/* Image Aspect Ratio Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F5F5]">
                <Image
                  src={HERO_FEATURED_ITEM.image}
                  alt={HERO_FEATURED_ITEM.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-white/90 text-[#0A0A0A] backdrop-blur-md shadow-sm">
                    FEATURED STORY
                  </span>
                </div>

                {/* Hover Expand Trigger Icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#0A0A0A] shadow-sm">
                    <Maximize2 size={14} />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white z-10">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#FED7AA]">
                    {HERO_FEATURED_ITEM.categoryLabel}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white leading-snug mt-0.5 group-hover:text-[#FFF7ED] transition-colors">
                    {HERO_FEATURED_ITEM.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/80">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-[#FB923C]" />
                      {HERO_FEATURED_ITEM.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-[#FB923C]" />
                      {HERO_FEATURED_ITEM.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

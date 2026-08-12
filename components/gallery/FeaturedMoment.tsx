"use client";

import Image from "next/image";
import { FEATURED_SPOTLIGHT_ITEM } from "@/lib/gallery-data";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, Award, Users, MapPin } from "lucide-react";
import type { GalleryItemData } from "@/types/gallery";

interface FeaturedMomentProps {
  onOpenLightbox?: (item: GalleryItemData) => void;
}

/**
 * FeaturedMoment
 * ──────────────
 * Magazine-style editorial spread spotlighting a major career/leadership milestone.
 */
export function FeaturedMoment({ onOpenLightbox }: FeaturedMomentProps) {
  return (
    <section className="py-12 lg:py-16 bg-[#FAFAFA] border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Label */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
            <span className="text-xs font-mono tracking-widest text-[#737373] uppercase">
              Spotlight Story
            </span>
          </div>
          <span className="text-xs font-mono text-[#A3A3A3]">01 / EDITORIAL SPREAD</span>
        </div>

        {/* Main Editorial Card Container */}
        <div className="bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Spread (7 cols on desktop) */}
            <div
              onClick={() => onOpenLightbox?.(FEATURED_SPOTLIGHT_ITEM)}
              tabIndex={0}
              role="button"
              aria-label={`View spotlight photo: ${FEATURED_SPOTLIGHT_ITEM.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpenLightbox?.(FEATURED_SPOTLIGHT_ITEM);
                }
              }}
              className="lg:col-span-7 relative group aspect-[16/10] lg:aspect-auto w-full min-h-[280px] lg:min-h-[420px] overflow-hidden bg-[#F5F5F5] cursor-pointer"
            >
              <Image
                src={FEATURED_SPOTLIGHT_ITEM.image}
                alt={FEATURED_SPOTLIGHT_ITEM.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="absolute top-4 left-4">
                <Badge variant="accent">SPOTLIGHT</Badge>
              </div>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold bg-white/95 text-[#0A0A0A] shadow-md">
                  View Full Screen
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>

            {/* Narrative & Metrics (5 cols on desktop) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#EA580C]">
                  <span>{FEATURED_SPOTLIGHT_ITEM.categoryLabel}</span>
                  <span>•</span>
                  <span>{FEATURED_SPOTLIGHT_ITEM.date}</span>
                </div>

                <h2 className="font-heading text-h2 font-bold text-[#0A0A0A] leading-tight">
                  {FEATURED_SPOTLIGHT_ITEM.title}
                </h2>

                <p className="text-body-sm text-[#525252] leading-relaxed">
                  {FEATURED_SPOTLIGHT_ITEM.description}
                </p>

                {/* Key Context Highlights */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5]">
                    <div className="flex items-center gap-1.5 text-xs text-[#737373] font-medium">
                      <Award size={14} className="text-[#EA580C]" />
                      <span>Role</span>
                    </div>
                    <p className="text-sm font-semibold text-[#0A0A0A] mt-0.5">Overall Chairperson</p>
                  </div>

                  <div className="p-3 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5]">
                    <div className="flex items-center gap-1.5 text-xs text-[#737373] font-medium">
                      <Users size={14} className="text-[#2563EB]" />
                      <span>Impact</span>
                    </div>
                    <p className="text-sm font-semibold text-[#0A0A0A] mt-0.5">500+ Attendees</p>
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-[#737373]">
                  <MapPin size={12} className="text-[#EA580C]" />
                  {FEATURED_SPOTLIGHT_ITEM.location}
                </span>

                <button
                  type="button"
                  onClick={() => onOpenLightbox?.(FEATURED_SPOTLIGHT_ITEM)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#EA580C] hover:text-[#C2410C] transition-colors"
                >
                  View Story Details
                  <ArrowUpRight size={14} />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

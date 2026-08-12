"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Maximize2, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryItemData } from "@/types/gallery";

interface GalleryItemProps {
  item: GalleryItemData;
  onOpenLightbox: (item: GalleryItemData) => void;
  index: number;
}

/**
 * GalleryItem
 * ───────────
 * Individual gallery card component.
 * Features Next.js image loading, responsive aspect ratio container,
 * micro-hover scale, metadata overlay, and lightbox trigger.
 */
export function GalleryItem({ item, onOpenLightbox, index }: GalleryItemProps) {
  // Map item aspect ratio to Tailwind classes
  const aspectClass = {
    wide: "aspect-[16/9] lg:col-span-8",
    portrait: "aspect-[3/4] lg:col-span-4",
    standard: "aspect-[4/3] md:col-span-6 lg:col-span-4",
    square: "aspect-square md:col-span-6 lg:col-span-4",
  }[item.aspectRatio || "standard"];

  return (
    <div
      onClick={() => onOpenLightbox(item)}
      tabIndex={0}
      role="button"
      aria-label={`View photo: ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenLightbox(item);
        }
      }}
      className={cn(
        "group relative col-span-12 rounded-xl overflow-hidden bg-[#FAFAFA] border border-[#E5E5E5]",
        "shadow-[0_1px_3px_rgba(0,0,0,0.04)] cursor-pointer",
        "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
        "hover:border-[#D4D4D4] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2",
        aspectClass
      )}
    >
      {/* Image Container */}
      <div className="relative w-full h-full overflow-hidden bg-[#F5F5F5]">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Top Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <Badge
            variant="default"
            size="sm"
            className="bg-white/90 text-[#0A0A0A] backdrop-blur-md border-0 text-[10px] uppercase font-bold tracking-wider"
          >
            {item.categoryLabel}
          </Badge>
        </div>

        {/* Top Right Expand Icon Button */}
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-250 transform translate-y-[-4px] group-hover:translate-y-0">
          <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#0A0A0A] shadow-sm">
            <Maximize2 size={13} />
          </div>
        </div>

        {/* Bottom Content Metadata Overlay */}
        <div className="absolute bottom-0 inset-x-0 p-4 text-white z-10 flex flex-col justify-end">
          <h3 className="font-heading text-base font-bold text-white leading-snug group-hover:text-[#FFF7ED] transition-colors">
            {item.title}
          </h3>

          {item.description && (
            <p className="text-xs text-white/80 line-clamp-2 mt-1 hidden sm:block">
              {item.description}
            </p>
          )}

          {/* Date & Location Footer */}
          <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-white/70">
            {item.location && (
              <span className="flex items-center gap-1">
                <MapPin size={11} className="text-[#FB923C]" />
                {item.location}
              </span>
            )}
            {item.date && (
              <span className="flex items-center gap-1">
                <Calendar size={11} className="text-[#FB923C]" />
                {item.date}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

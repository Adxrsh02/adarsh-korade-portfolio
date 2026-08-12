"use client";

import { useMemo } from "react";
import { GALLERY_ITEMS } from "@/lib/gallery-data";
import { GalleryItem } from "@/components/gallery/GalleryItem";
import { Sparkles, SearchX } from "lucide-react";
import type { GalleryCategory, GalleryItemData } from "@/types/gallery";

interface GalleryGridProps {
  activeCategory: GalleryCategory;
  searchQuery: string;
  onOpenLightbox: (item: GalleryItemData) => void;
  onFilteredItemsChange?: (items: GalleryItemData[]) => void;
}

/**
 * GalleryGrid
 * ───────────
 * Responsive asymmetric grid container managing filtered item list and rendering GalleryItems.
 */
export function GalleryGrid({
  activeCategory,
  searchQuery,
  onOpenLightbox,
  onFilteredItemsChange,
}: GalleryGridProps) {
  // Filter items dynamically based on category & search query
  const filteredItems = useMemo(() => {
    let result = GALLERY_ITEMS;

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter((item) => item.category === activeCategory);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q) ||
          item.description?.toLowerCase().includes(q) ||
          item.location?.toLowerCase().includes(q) ||
          item.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              Visual Archive
            </span>
            <h2 className="font-heading text-h2 font-bold text-[#0A0A0A] mt-1">
              Curated Moments & Milestones
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#737373]">
            <Sparkles size={13} className="text-[#EA580C]" />
            <span>Showing {filteredItems.length} items</span>
          </div>
        </div>

        {/* Empty Search / Filter State */}
        {filteredItems.length === 0 ? (
          <div className="py-16 px-4 text-center border border-dashed border-[#D4D4D4] rounded-xl bg-[#FAFAFA]">
            <div className="w-12 h-12 rounded-full bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center mx-auto text-[#737373] mb-3">
              <SearchX size={20} />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#0A0A0A]">
              No moments found
            </h3>
            <p className="text-sm text-[#525252] max-w-sm mx-auto mt-1">
              No gallery items match &quot;{searchQuery}&quot;. Try adjusting your search query or selecting a different category filter.
            </p>
          </div>
        ) : (
          /* Asymmetric Editorial 12-Column Grid */
          <div className="grid grid-cols-12 gap-5 sm:gap-6 items-start">
            {filteredItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                item={item}
                onOpenLightbox={onOpenLightbox}
                index={index}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

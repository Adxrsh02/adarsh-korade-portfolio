"use client";

import { GALLERY_FILTERS } from "@/lib/gallery-data";
import { cn } from "@/lib/utils";
import { Search, Filter, X } from "lucide-react";
import type { GalleryCategory } from "@/types/gallery";

interface GalleryFiltersProps {
  activeCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalFilteredCount: number;
}

/**
 * GalleryFilters
 * ──────────────
 * Sticky category filter strip with search query input and item counts.
 */
export function GalleryFilters({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalFilteredCount,
}: GalleryFiltersProps) {
  return (
    <div className="sticky top-14 lg:top-16 z-30 bg-white/95 backdrop-blur-md border-b border-[#E5E5E5] py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          
          {/* Horizontal Scrollable Category Filter Pills */}
          <div
            role="tablist"
            aria-label="Gallery category filters"
            className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0"
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#737373] pr-2 border-r border-[#E5E5E5] shrink-0 hidden sm:flex">
              <Filter size={14} />
              <span>Filter:</span>
            </div>

            {GALLERY_FILTERS.map((filter) => {
              const isActive = activeCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onSelectCategory(filter.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 shrink-0",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2",
                    isActive
                      ? "bg-[#0A0A0A] text-white shadow-sm font-semibold"
                      : "bg-[#F5F5F5] text-[#525252] hover:bg-[#E5E5E5] hover:text-[#0A0A0A]"
                  )}
                >
                  <span>{filter.label}</span>
                  <span
                    className={cn(
                      "px-1.5 py-0.5 rounded-full text-[10px] font-mono leading-none",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#E5E5E5] text-[#525252]"
                    )}
                  >
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar & Result Count */}
          <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
            {/* Search Input */}
            <div className="relative w-full md:w-56">
              <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none text-[#737373]">
                <Search size={14} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search moments..."
                aria-label="Search gallery items"
                className={cn(
                  "w-full pl-8 pr-7 py-1.5 rounded-md text-xs bg-[#FAFAFA] border border-[#E5E5E5]",
                  "text-[#0A0A0A] placeholder-[#A3A3A3]",
                  "focus:outline-none focus:border-[#EA580C] focus:bg-white focus:ring-1 focus:ring-[#EA580C]",
                  "transition-colors"
                )}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  aria-label="Clear search"
                  className="absolute inset-y-0 right-0 pr-2 flex items-center text-[#737373] hover:text-[#0A0A0A]"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* Filtered Count indicator */}
            <span className="text-xs font-mono text-[#737373] shrink-0">
              {totalFilteredCount} {totalFilteredCount === 1 ? "moment" : "moments"}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

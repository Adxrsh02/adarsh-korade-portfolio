"use client";

import React from "react";
import type { BlogCategory, BlogCategorySlug } from "@/types/blogs";
import { cn } from "@/lib/utils";

interface BlogCategoryNavProps {
  categories: BlogCategory[];
  activeCategory: BlogCategorySlug;
  onSelectCategory: (category: BlogCategorySlug) => void;
  getCategoryCount?: (category: BlogCategorySlug) => number;
}

/**
 * BlogCategoryNav Component
 * ─────────────────────────
 * Category tab navigation bar.
 * Desktop: Horizontal flex strip with clean pills.
 * Mobile: Horizontally scrollable container with hidden scrollbar.
 */
export function BlogCategoryNav({
  categories,
  activeCategory,
  onSelectCategory,
  getCategoryCount,
}: BlogCategoryNavProps) {
  return (
    <div className="w-full border-b border-[#E5E5E5] bg-white sticky top-[3.5rem] lg:top-[4rem] z-20 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          role="tablist"
          aria-label="Blog categories"
          className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-3.5 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category.slug;
            const count = getCategoryCount ? getCategoryCount(category.slug) : 0;

            return (
              <button
                key={category.slug}
                role="tab"
                id={`tab-${category.slug}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${category.slug}`}
                onClick={() => onSelectCategory(category.slug)}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2",
                  isActive
                    ? "bg-[#0A0A0A] text-white shadow-sm"
                    : "bg-[#F5F5F5] text-[#525252] hover:bg-[#E5E5E5] hover:text-[#0A0A0A]"
                )}
              >
                <span>{category.label}</span>
                {count > 0 && (
                  <span
                    className={cn(
                      "inline-flex items-center justify-center px-1.5 py-0.5 text-xs rounded-full font-mono",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#E5E5E5] text-[#525252]"
                    )}
                  >
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

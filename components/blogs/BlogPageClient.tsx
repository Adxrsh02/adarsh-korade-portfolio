"use client";

import React, { useState } from "react";
import type { BlogCategory, BlogCategorySlug, BlogPost } from "@/types/blogs";
import { BlogCategoryNav } from "./BlogCategoryNav";
import { BlogEmptyState } from "./BlogEmptyState";
import { BlogGrid } from "./BlogGrid";

interface BlogPageClientProps {
  categories: BlogCategory[];
  allPosts: BlogPost[];
}

/**
 * BlogPageClient Component
 * ────────────────────────
 * Client component handling active category selection, post filtering,
 * and seamless fallback to the deliberate empty state when no articles match.
 */
export function BlogPageClient({ categories, allPosts }: BlogPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategorySlug>("all");

  // Get active category object for display
  const currentCategory = categories.find((c) => c.slug === activeCategory);

  // Filter posts
  const filteredPosts =
    activeCategory === "all"
      ? allPosts
      : allPosts.filter((post) => post.category === activeCategory);

  // Find featured post among filtered results (if any)
  const featuredPost = filteredPosts.find((post) => post.featured);

  // Helper for category counts
  const getCategoryCount = (slug: BlogCategorySlug): number => {
    if (slug === "all") return allPosts.length;
    return allPosts.filter((post) => post.category === slug).length;
  };

  return (
    <div className="min-h-[50vh] flex flex-col">
      {/* Category Navigation Strip */}
      <BlogCategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        getCategoryCount={getCategoryCount}
      />

      {/* Main Content Area */}
      <div
        role="tabpanel"
        id={`tabpanel-${activeCategory}`}
        aria-labelledby={`tab-${activeCategory}`}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 w-full"
      >
        {filteredPosts.length === 0 ? (
          <BlogEmptyState
            categorySlug={activeCategory}
            categoryName={currentCategory?.label}
            onResetCategory={() => setActiveCategory("all")}
          />
        ) : (
          <BlogGrid posts={filteredPosts} featuredPost={featuredPost} />
        )}
      </div>
    </div>
  );
}

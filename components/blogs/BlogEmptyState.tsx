import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PenTool, ArrowRight, Layers } from "lucide-react";
import type { BlogCategorySlug } from "@/types/blogs";

interface BlogEmptyStateProps {
  categorySlug?: BlogCategorySlug;
  categoryName?: string;
  onResetCategory?: () => void;
}

/**
 * BlogEmptyState Component
 * ────────────────────────
 * Premium intentional empty-state container.
 * Communicates that articles and technical writeups are currently in progress
 * rather than giving the user a dead end or broken system message.
 */
export function BlogEmptyState({
  categorySlug = "all",
  categoryName,
  onResetCategory,
}: BlogEmptyStateProps) {
  const isAll = categorySlug === "all";

  return (
    <div className="py-20 lg:py-28 px-4 text-center">
      <div className="max-w-xl mx-auto flex flex-col items-center">
        {/* Subtle Icon Badge */}
        <div className="w-16 h-16 rounded-2xl bg-[#FFF7ED] border border-[#FFEDD5] text-[#EA580C] flex items-center justify-center mb-6 shadow-sm">
          {isAll ? (
            <PenTool className="w-8 h-8 text-[#F97316]" aria-hidden="true" />
          ) : (
            <Layers className="w-8 h-8 text-[#F97316]" aria-hidden="true" />
          )}
        </div>

        {/* Small Eyebrow Label */}
        <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C] mb-3">
          {isAll ? "Coming Soon" : `Category • ${categoryName || "Archive"}`}
        </span>

        {/* Heading */}
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#0A0A0A] mb-4 tracking-tight">
          {isAll
            ? "Ideas Are Taking Shape."
            : `No stories in ${categoryName || "this topic"} yet.`}
        </h2>

        {/* Supporting Message */}
        <p className="text-[#525252] text-base sm:text-lg leading-relaxed mb-8 max-w-md">
          {isAll
            ? "I'm currently working on technical stories, engineering experiments, case studies, and architectural insights that will be published here soon."
            : `I'm currently drafting research notes and real-world implementation experiences for ${
                categoryName ? categoryName.toLowerCase() : "this section"
              }. Check back shortly for upcoming articles.`}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5">
          <Button
            as={Link}
            href="/projects"
            variant="primary"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore My Projects
          </Button>

          {!isAll && onResetCategory && (
            <Button
              onClick={onResetCategory}
              variant="secondary"
              size="lg"
            >
              View All Categories
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import type { BlogPost } from "@/types/blogs";
import { BlogCard } from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
  featuredPost?: BlogPost;
}

/**
 * BlogGrid Component
 * ─────────────────
 * Layout grid component for rendering featured and standard blog post cards.
 */
export function BlogGrid({ posts, featuredPost }: BlogGridProps) {
  const regularPosts = featuredPost
    ? posts.filter((p) => p.id !== featuredPost.id)
    : posts;

  return (
    <div className="space-y-10 lg:space-y-14">
      {/* Featured Article Section */}
      {featuredPost && (
        <section aria-label="Featured Article">
          <div className="mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
              Featured Writeup
            </span>
          </div>
          <BlogCard post={featuredPost} featured />
        </section>
      )}

      {/* Grid of Articles */}
      {regularPosts.length > 0 && (
        <section aria-label="All Articles">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

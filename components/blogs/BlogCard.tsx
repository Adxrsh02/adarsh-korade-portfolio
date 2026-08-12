import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/types/blogs";
import { ArrowUpRight, ExternalLink, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

/**
 * BlogCard Component
 * ─────────────────
 * Editorial card component for rendering published or external blog posts.
 * Minimal typography, soft border `#E5E5E5`, hover arrow transition.
 */
export function BlogCard({ post, featured = false }: BlogCardProps) {
  const isExternal = post.status === "external" && post.externalUrl;
  const href = isExternal ? post.externalUrl! : `/blogs/${post.slug}`;

  return (
    <article
      className={`group relative flex flex-col bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-xs hover:border-[#D4D4D4] hover:shadow-md transition-all duration-300 ${
        featured ? "lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center p-6 lg:p-8" : "p-6"
      }`}
    >
      {/* Cover Image (if available) */}
      {post.coverImage && (
        <div
          className={`relative overflow-hidden rounded-lg bg-[#F5F5F5] mb-5 ${
            featured ? "lg:col-span-6 lg:mb-0 aspect-16/10" : "aspect-16/10"
          }`}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Card Content */}
      <div className={`flex flex-col flex-1 ${featured ? "lg:col-span-6" : ""}`}>
        {/* Category & Featured Badges */}
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="accent" size="sm">
            {post.category}
          </Badge>
          {featured && (
            <Badge variant="outline" size="sm" className="bg-[#FFF7ED] text-[#EA580C] border-[#FFEDD5]">
              Featured
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0A0A0A] group-hover:text-[#EA580C] transition-colors duration-200 mb-3 leading-snug">
          {isExternal ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none"
            >
              {post.title}
            </a>
          ) : (
            <Link href={href} className="focus:outline-none">
              {post.title}
            </Link>
          )}
        </h3>

        {/* Excerpt */}
        <p className="text-[#525252] text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Card Footer Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-[#E5E5E5]/60 text-xs text-[#737373] mt-auto">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              {post.publishedAt}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>

          <span className="inline-flex items-center gap-1 font-semibold text-[#0A0A0A] group-hover:text-[#EA580C] transition-colors">
            {isExternal ? (
              <>
                <span>Read on Medium</span>
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                <span>Read Article</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </>
            )}
          </span>
        </div>
      </div>
    </article>
  );
}

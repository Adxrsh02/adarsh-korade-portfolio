import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Code2, Cpu, Database, Layout, Rocket } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { getPublishedPosts } from "@/lib/blogs-data";
import { BlogCard } from "@/components/blogs/BlogCard";

/* =========================================================
   FOCUS AREAS FOR UPCOMING WRITING
   Refined topics representing future article collections.
   ========================================================= */
const UPCOMING_TOPICS = [
  {
    category: "AI & ML Systems",
    topic: "LLMs, AI Agents & Generative Applications",
    icon: Cpu,
  },
  {
    category: "RAG Architecture",
    topic: "Vector Databases, Hybrid Search & Knowledge Graphs",
    icon: Terminal,
  },
  {
    category: "Data Engineering",
    topic: "High-Throughput Pipelines & Analytics",
    icon: Database,
  },
  {
    category: "Software Engineering",
    topic: "Next.js 16, React 19, TypeScript & Microservices",
    icon: Code2,
  },
  {
    category: "Design & UX",
    topic: "UI Architectures, Design Systems & Interaction Design",
    icon: Layout,
  },
  {
    category: "Business & Products",
    topic: "Startup Tech, Product Strategy & Process Automation",
    icon: Rocket,
  },
];

/**
 * HomeBlogsPreview Component
 * ─────────────────────────
 * Premium Editorial Writing section for the Home Page.
 *
 * Architecture:
 * - If published posts exist: renders actual article cards.
 * - If published posts = 0 (current state): renders a sophisticated,
 *   deliberately designed editorial empty state ("Writing is Coming")
 *   establishing authority, focus topics, and clear navigation to /blogs.
 */
export function HomeBlogsPreview() {
  const publishedPosts = getPublishedPosts().slice(0, 3);
  const hasPosts = publishedPosts.length > 0;

  return (
    <SectionWrapper
      id="blogs"
      background="white"
      ariaLabelledBy="blogs-preview-heading"
    >
      <Container>
        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 lg:mb-12">
          <div className="flex flex-col gap-4 max-w-[640px]">
            <SectionLabel>Writing</SectionLabel>
            <SectionHeading id="blogs-preview-heading">
              Latest Insights
            </SectionHeading>
            <p className="text-lg leading-relaxed text-[#525252] font-sans">
              Thoughts on engineering, design, business, and the craft of building great things.
            </p>
          </div>

          {/* Desktop CTA Header Link */}
          <div className="hidden sm:block shrink-0">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] hover:text-[#EA580C] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:rounded-sm"
              aria-label="Read all posts on the blog page"
            >
              <span>Read All Posts</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-[#F97316]" />
            </Link>
          </div>
        </div>

        {/* ── Section Body ── */}
        {hasPosts ? (
          /* Future Real Articles Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {publishedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          /* ── Premium Editorial Empty-State Panel ── */
          <div className="relative overflow-hidden bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs transition-all duration-300 hover:border-[#D4D4D4]">
            {/* Ambient Background Detail */}
            <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column — Editorial Statement */}
              <div className="lg:col-span-6 flex flex-col items-start">
                {/* Eyebrow Status Badge with Blinking Cursor */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FFEDD5] text-[#EA580C] text-xs font-semibold uppercase tracking-wider mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse" />
                  <span>Editorial Journal • Coming Soon</span>
                  <span className="font-mono text-[#F97316] animate-bounce">|</span>
                </div>

                {/* Headline */}
                <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A0A0A] tracking-tight leading-snug mb-4">
                  Ideas, Writeups &amp; Technical Stories in Progress
                </h3>

                {/* Description */}
                <p className="text-[#525252] text-base sm:text-lg leading-relaxed mb-6 font-sans">
                  I am actively preparing a dedicated series of deep-dive technical writeups, architectural case studies, and engineering reflections. These posts will document practical learnings from building production AI applications, scalable data pipelines, and modern web products.
                </p>

                {/* Active Status Note */}
                <div className="flex items-center gap-3 p-3.5 rounded-lg bg-[#FAFAFA] border border-[#E5E5E5] text-xs text-[#525252] mb-6 w-full sm:w-auto">
                  <Sparkles className="w-4 h-4 text-[#F97316] shrink-0" aria-hidden="true" />
                  <span>Research notes &amp; drafts currently taking shape.</span>
                </div>

                {/* Primary CTA */}
                <Link
                  href="/blogs"
                  className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-[#0A0A0A] text-white font-medium text-sm hover:bg-[#171717] transition-all duration-200 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
                >
                  <span>Explore Writing Hub</span>
                  <ArrowRight className="w-4 h-4 text-[#F97316] transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Right Column — Upcoming Topic Cards */}
              <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-[#E5E5E5] pt-8 lg:pt-0 lg:pl-10">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                    Upcoming Focus Areas
                  </span>
                  <span className="text-xs text-[#A3A3A3] font-mono">
                    6 Topics Scheduled
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {UPCOMING_TOPICS.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div
                        key={index}
                        className="group flex flex-col p-3.5 rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#D4D4D4] hover:bg-white transition-all duration-200"
                      >
                        <div className="flex items-center gap-2 mb-1.5">
                          <IconComponent className="w-4 h-4 text-[#F97316] shrink-0" />
                          <span className="text-xs font-semibold text-[#0A0A0A]">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-[#737373] leading-normal line-clamp-2">
                          {item.topic}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Mobile CTA (full-width button below panel) ── */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/blogs"
            className="group flex items-center justify-between w-full px-5 py-3.5 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] hover:border-[#D4D4D4] hover:bg-white hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
          >
            <span className="text-sm font-semibold text-[#0A0A0A]">
              Read All Posts &amp; Updates
            </span>
            <ArrowRight className="w-4 h-4 text-[#F97316] transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}

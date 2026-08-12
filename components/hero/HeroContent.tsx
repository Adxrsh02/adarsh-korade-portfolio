"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { RESUME_PATH } from "@/lib/constants";

/**
 * Roles for Hero dynamic rotation, emphasizing the AI & Data Engineering intersection.
 */
const HERO_POSITIONING_ROLES = [
  "AI Engineer & Data Engineer",
  "Intelligent Systems & Data Platforms",
  "Generative AI & Enterprise Software",
] as const;

/**
 * HeroContent
 * ───────────
 * Ultra-premium text hierarchy for the Hero section:
 *   - Status pill + Category metadata eyebrow
 *   - Authoritative H1 name anchor ("ADARSH KORADE")
 *   - Dual-focus professional positioning with smooth fade rotation
 *   - Concise, high-impact description
 *   - Primary & Secondary CTA system ("View My Work →" & "View My Resume ↗")
 */
export function HeroContent() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleState, setRoleState] = useState<"idle" | "exiting" | "entering">(
    "idle"
  );
  const [prefersReduced, setPrefersReduced] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Detect reduced motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Smooth position role rotation
  useEffect(() => {
    if (prefersReduced) return;

    intervalRef.current = setInterval(() => {
      setRoleState("exiting");

      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % HERO_POSITIONING_ROLES.length);
        setRoleState("entering");
      }, 280);

      setTimeout(() => {
        setRoleState("idle");
      }, 600);
    }, 3800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [prefersReduced]);

  const roleClass = cn(
    "inline-block transition-all duration-300",
    roleState === "exiting" && "hero-role-exiting",
    roleState === "entering" && "hero-role-entering"
  );

  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      {/* ── Status Pill & Metadata Eyebrow ── */}
      <div className="hero-animate hero-delay-0 flex flex-wrap items-center gap-3">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] text-xs font-medium text-[#404040]">
          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
          <span>Available for opportunities</span>
        </div>

        {/* Separator Dot */}
        <span className="hidden sm:inline text-[#D4D4D4]">•</span>

        {/* Metadata Label */}
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[#737373]">
          AI • DATA • ENGINEERING
        </span>
      </div>

      {/* ── Name — The Authoritative H1 Anchor ── */}
      <h1
        className={cn(
          "hero-animate hero-delay-1",
          "font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif]",
          "font-bold tracking-[-0.035em] leading-[0.98]",
          "text-[#0A0A0A]",
          "text-[2.75rem] sm:text-[3.75rem] md:text-[4.25rem] lg:text-[4.75rem] xl:text-[5.25rem]"
        )}
      >
        Adarsh Korade
      </h1>

      {/* ── Professional Title Positioning ── */}
      <div
        className={cn(
          "hero-animate hero-delay-2",
          "h-8 sm:h-9 flex items-center overflow-hidden"
        )}
        aria-live="polite"
        aria-atomic="true"
      >
        <span
          className={cn(
            "font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif]",
            "text-lg sm:text-xl md:text-2xl font-semibold tracking-[-0.015em]",
            "text-[#F97316]",
            roleClass
          )}
        >
          {HERO_POSITIONING_ROLES[roleIndex]}
        </span>
      </div>

      {/* ── Concise Supporting Statement ── */}
      <p
        className={cn(
          "hero-animate hero-delay-3",
          "font-sans text-base sm:text-lg leading-relaxed text-[#525252]",
          "max-w-[480px]"
        )}
      >
        Architecting intelligent systems, high-throughput data platforms, RAG applications, and scalable modern software.
      </p>

      {/* ── CTA Action System ── */}
      <div
        className={cn(
          "hero-animate hero-delay-4",
          "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"
        )}
      >
        {/* Primary CTA: View My Work */}
        <Button
          as={Link}
          href="/projects"
          variant="primary"
          size="lg"
          className="hero-cta-primary group w-full sm:w-auto px-7"
          aria-label="View my portfolio projects"
        >
          View My Work
          <ArrowRight size={16} className="hero-cta-arrow ml-1" aria-hidden="true" />
        </Button>

        {/* Secondary CTA: View My Resume (Opens PDF in a new tab) */}
        <Button
          as="a"
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto px-6"
          aria-label="View Adarsh Korade's resume in a new tab"
        >
          View My Resume
          <ExternalLink size={15} className="ml-1.5 opacity-70" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}

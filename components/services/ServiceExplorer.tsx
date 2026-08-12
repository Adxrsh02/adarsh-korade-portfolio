"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { SERVICES_DATA } from "@/lib/services-data";
import { ServiceAccordion } from "@/components/services/ServiceAccordion";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";

/* =========================================================
   ServiceExplorer
   Main interactive service detail section.

   Left panel:  Sticky service image with crossfade transitions.
   Right panel: Accordion content for the active service.
   Top:         Horizontal scrollable tab navigation.
   ========================================================= */

export function ServiceExplorer() {
  const searchParams = useSearchParams();
  const initialId = searchParams.get("service") ?? SERVICES_DATA[0].id;
  const validId = SERVICES_DATA.find((s) => s.id === initialId)
    ? initialId
    : SERVICES_DATA[0].id;

  const [activeId, setActiveId] = useState(validId);
  const [imageVisible, setImageVisible] = useState(true);
  const [displayId, setDisplayId] = useState(validId); // the id whose image/content is shown
  const tabsRef = useRef<HTMLDivElement>(null);

  const activeService = SERVICES_DATA.find((s) => s.id === activeId)!;
  const displayService = SERVICES_DATA.find((s) => s.id === displayId)!;

  // Handle service switch with crossfade
  const switchService = useCallback(
    (id: string) => {
      if (id === activeId) return;

      // 1. Fade out
      setImageVisible(false);

      // 2. After fade-out delay, swap the service + fade in
      setTimeout(() => {
        setActiveId(id);
        setDisplayId(id);
        setImageVisible(true);
      }, 280);
    },
    [activeId]
  );

  // Scroll active tab horizontally into view inside the tab container ONLY (does NOT scroll the window)
  useEffect(() => {
    if (!tabsRef.current) return;
    const activeTab = tabsRef.current.querySelector(
      `[data-service-id="${activeId}"]`
    ) as HTMLElement | null;

    if (activeTab) {
      const container = tabsRef.current;
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;
      const containerWidth = container.clientWidth;

      container.scrollTo({
        left: tabLeft - containerWidth / 2 + tabWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeId]);

  // Handle initial URL param navigation
  useEffect(() => {
    const id = searchParams.get("service");
    if (id && id !== activeId) {
      const found = SERVICES_DATA.find((s) => s.id === id);
      if (found) switchService(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <SectionWrapper
      id="service-explorer"
      background="alt"
      ariaLabelledBy="explorer-heading"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-4 mb-10">
          <SectionLabel>Explore in Detail</SectionLabel>
          <SectionHeading id="explorer-heading">Service Explorer</SectionHeading>
        </div>

        {/* ── Tab Navigation ── */}
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Service categories"
          className="flex gap-1 overflow-x-auto pb-1 mb-8 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SERVICES_DATA.map((service) => {
            const isActive = service.id === activeId;
            return (
              <button
                key={service.id}
                role="tab"
                id={`tab-${service.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${service.id}`}
                data-service-id={service.id}
                onClick={() => switchService(service.id)}
                className={cn(
                  "shrink-0 px-4 py-2 text-sm font-medium rounded-full border transition-all duration-150",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2",
                  "whitespace-nowrap",
                  isActive
                    ? "bg-[#FFF7ED] text-[#EA580C] border-[#FED7AA]"
                    : "bg-transparent text-[#737373] border-transparent hover:text-[#0A0A0A] hover:bg-[#F5F5F5]"
                )}
              >
                {service.title}
              </button>
            );
          })}
        </div>

        {/* ── Two-panel layout ── */}
        <div
          role="tabpanel"
          id={`panel-${activeId}`}
          aria-labelledby={`tab-${activeId}`}
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start"
        >
          {/* ── LEFT: Image Panel ── */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-[calc(4rem+2rem)]">
            {/* Image container */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/3] rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] bg-[#1A1A1A]">
              <Image
                key={displayService.id}
                src={displayService.imageSrc}
                alt={displayService.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                quality={85}
                priority={displayService.number === "01"}
                className={cn(
                  "object-cover transition-all duration-600 ease-[cubic-bezier(0,0,0.2,1)]",
                  "hover:scale-[1.03]",
                  imageVisible ? "opacity-100" : "opacity-0"
                )}
              />

              {/* Service counter badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
                <span className="text-xs font-semibold text-[#0A0A0A]">
                  {displayService.number}
                </span>
                <span className="text-xs text-[#737373]">/</span>
                <span className="text-xs text-[#737373]">
                  {SERVICES_DATA.length.toString().padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content Panel ── */}
          <div className="w-full lg:w-[55%] flex flex-col gap-6">
            {/* Service title row */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1.5">
                <h3
                  className={cn(
                    "font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-bold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight leading-tight",
                    "transition-opacity duration-300",
                    imageVisible ? "opacity-100" : "opacity-0"
                  )}
                >
                  {activeService.title}
                </h3>
                <p
                  className={cn(
                    "text-sm text-[#737373] leading-relaxed",
                    "transition-opacity duration-300 delay-75",
                    imageVisible ? "opacity-100" : "opacity-0"
                  )}
                >
                  {activeService.tagline}
                </p>
              </div>
              <span className="text-sm font-medium text-[#A3A3A3] shrink-0 mt-1 tabular-nums">
                {activeService.number}
              </span>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#E5E5E5]" aria-hidden="true" />

            {/* Accordion — key forces remount on service change, resetting open state */}
            <ServiceAccordion key={activeId} service={activeService} />
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

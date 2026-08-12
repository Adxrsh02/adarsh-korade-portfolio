"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowUpRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { FAQ_ITEMS } from "@/lib/faq-data";
import { cn } from "@/lib/utils";

/**
 * ContactFAQ Component
 * ────────────────────
 * Premium Editorial FAQ Accordion Section for the /contact page.
 * Displays exact verbatim FAQ material from faq.md with a high-touch,
 * responsive accordion UX.
 */
export function ContactFAQ() {
  // First item open by default for immediate visual feedback
  const [openId, setOpenId] = useState<string | null>("faq-01");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <SectionWrapper
      id="faq"
      background="white"
      aria-labelledby="faq-heading"
      className="border-t border-[#E5E5E5]/60"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ── Left Column: Editorial Sticky Header & Assistance ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2">
                <SectionLabel>FAQ</SectionLabel>
              </div>
              <SectionHeading id="faq-heading">
                Common Questions
              </SectionHeading>
              <SectionDescription>
                Clear answers regarding my experience, technical focus across AI and Data Engineering, roles I am seeking, and collaboration options.
              </SectionDescription>
            </div>

            {/* Direct Message Help Box */}
            <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-[#E5E5E5] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#EA580C]">
                <HelpCircle className="w-4 h-4 text-[#F97316]" aria-hidden="true" />
                <span>Have Another Question?</span>
              </div>
              <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                If your question isn't answered here, feel free to reach out directly through the message form above.
              </p>
              <a
                href="#contact-form"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A0A0A] hover:text-[#EA580C] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
              >
                <span>Send a Direct Message</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F97316]" />
              </a>
            </div>
          </div>

          {/* ── Right Column: Numbered Editorial Accordion ── */}
          <div className="lg:col-span-8 space-y-3">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className={cn(
                    "group rounded-xl border transition-all duration-200 overflow-hidden bg-white",
                    isOpen
                      ? "border-[#D4D4D4] shadow-xs"
                      : "border-[#E5E5E5] hover:border-[#D4D4D4]"
                  )}
                >
                  {/* Accordion Toggle Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-question-${item.id}`}
                    className="w-full text-left p-5 sm:p-6 flex items-start gap-4 sm:gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-inset select-none cursor-pointer"
                  >
                    {/* Number Badge */}
                    <span
                      className={cn(
                        "font-mono text-sm sm:text-base font-bold transition-colors pt-0.5 shrink-0 select-none",
                        isOpen
                          ? "text-[#EA580C]"
                          : "text-[#A3A3A3] group-hover:text-[#EA580C]"
                      )}
                    >
                      {item.number}
                    </span>

                    {/* Question Text */}
                    <span
                      className={cn(
                        "font-heading text-base sm:text-lg font-bold flex-1 leading-snug transition-colors",
                        isOpen
                          ? "text-[#EA580C]"
                          : "text-[#0A0A0A] group-hover:text-[#EA580C]"
                      )}
                    >
                      {item.question}
                    </span>

                    {/* Chevron Indicator */}
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
                        isOpen
                          ? "bg-[#FFF7ED] text-[#EA580C] rotate-180"
                          : "bg-[#F5F5F5] text-[#737373] group-hover:bg-[#E5E5E5] group-hover:text-[#0A0A0A]"
                      )}
                    >
                      <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                    </div>
                  </button>

                  {/* Accordion Answer Content (Smooth Grid Template Rows transition) */}
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-question-${item.id}`}
                    className={cn(
                      "grid transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-5 sm:pb-6 px-5 sm:px-6"
                        : "grid-rows-[0fr] opacity-0 px-5 sm:px-6"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-2 sm:pt-3 border-t border-[#E5E5E5]/60 pl-8 sm:pl-10 relative">
                        {/* Accent Left Bar */}
                        <div
                          className="absolute left-2 top-3 bottom-1 w-0.5 bg-[#F97316]/40 rounded-full"
                          aria-hidden="true"
                        />
                        <p className="text-[#525252] text-sm sm:text-base leading-relaxed font-sans font-normal">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}

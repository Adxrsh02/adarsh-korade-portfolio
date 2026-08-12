import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, MessageSquare } from "lucide-react";

/**
 * BlogCTA Component
 * ─────────────────
 * Conversion banner at the end of the Blog page.
 * Prompts visitors to reach out on the contact page or inspect projects.
 */
export function BlogCTA() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] border-t border-[#E5E5E5] relative overflow-hidden">
      {/* Background ambient detail */}
      <div className="absolute bottom-0 left-1/3 -z-10 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#E5E5E5] rounded-2xl p-8 sm:p-12 lg:p-16 shadow-xs text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] text-[#EA580C] text-xs font-semibold uppercase tracking-wider mb-6">
            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Collaboration &amp; Inquiries</span>
          </div>

          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A0A0A] tracking-tight mb-4 leading-tight">
            Have an idea worth building? Let's talk.
          </h2>

          {/* Description */}
          <p className="text-[#525252] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-sans">
            Whether you have a question about my research, an engineering project in mind,
            or an opportunity to discuss — I'd love to connect and build something extraordinary together.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as={Link}
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Let's Connect
            </Button>

            <Button
              as={Link}
              href="/projects"
              variant="secondary"
              size="lg"
            >
              View Featured Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

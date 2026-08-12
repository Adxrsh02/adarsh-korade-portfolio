import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";

/**
 * GalleryCTA
 * ──────────
 * Closing call-to-action banner for the Gallery page.
 * Bridges the visual story into direct contact or deeper portfolio pages.
 */
export function GalleryCTA() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-white border border-[#E5E5E5] p-8 sm:p-12 lg:p-16 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
          
          {/* Subtle Ambient Background Accent */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#FFF7ED] rounded-full blur-3xl opacity-60 pointer-events-none" />

          <div className="relative max-w-2xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF7ED] border border-[#FED7AA] text-xs font-semibold text-[#C2410C]">
              <Sparkles size={13} className="text-[#EA580C]" />
              <span>LET&apos;S CONNECT</span>
            </div>

            <h2 className="font-heading text-h2 font-bold text-[#0A0A0A] leading-tight">
              Interested in collaborating or discussing a project?
            </h2>

            <p className="text-body-lg text-[#525252]">
              Whether you are looking for an AI &amp; Data Engineer for enterprise solutions, a leadership speaker for a tech event, or a full stack developer for your next product — I&apos;d love to connect.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 flex-wrap">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                as="a"
              >
                Let&apos;s Connect
                <ArrowRight size={16} className="ml-2" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="https://in.pinterest.com/Addarrshhh/"
                as="a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Explore More Visuals on Pinterest (opens in new tab)"
              >
                Explore Visuals on Pinterest
                <ExternalLink size={14} className="ml-1.5 text-[#F97316]" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                href="/leadership"
                as="a"
              >
                View Leadership
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

/* =========================================================
   JIO JOURNEY BACK CTA
   Navigation back to About page
   ========================================================= */

export function JioJourneyBackCTA() {
  return (
    <section className="bg-white py-10 md:py-14 border-t border-[#E5E5E5]">
      <Container>
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-[#737373]">
            Thank you for reading this chapter of my story.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button as={Link} href="/about" variant="secondary" size="md">
              <svg
                aria-hidden="true"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Back to About
            </Button>
            <Button as={Link} href="/contact" variant="ghost" size="md">
              Get in Touch →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

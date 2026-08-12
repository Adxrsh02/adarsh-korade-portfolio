import { Container } from "@/components/layout/Container";
import { JIO_JOURNEY_PARAGRAPHS, ABHIJIT_MANE_LINKEDIN } from "@/lib/about-data";

/* =========================================================
   JIO JOURNEY NARRATIVE
   4 paragraphs of exact, unmodified content from about.md
   ========================================================= */

export function JioJourneyNarrative() {
  return (
    <section className="bg-white py-10 md:py-14" aria-label="Jio journey narrative">
      <Container variant="narrow">
        <div className="flex flex-col gap-8">
          {JIO_JOURNEY_PARAGRAPHS.map((para) => (
            <div key={para.id} className="flex flex-col gap-4">
              {/* Render text, injecting Abhijit Mane link where name appears */}
              <ParagraphWithLink text={para.text} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Renders paragraph with Abhijit Mane as a link ──────── */
function ParagraphWithLink({ text }: { text: string }) {
  const ABHIJIT_NAME = "Abhijit Mane";

  // Split text by paragraphs (double newline)
  const paragraphs = text.split("\n\n").filter(Boolean);

  return (
    <>
      {paragraphs.map((para, pi) => {
        const parts = para.split(ABHIJIT_NAME);
        if (parts.length === 1) {
          return (
            <p key={pi} className="text-base leading-[1.9] text-[#404040]">
              {para}
            </p>
          );
        }
        return (
          <p key={pi} className="text-base leading-[1.9] text-[#404040]">
            {parts.map((part, i) => (
              <span key={i}>
                {part}
                {i < parts.length - 1 && (
                  <a
                    href={ABHIJIT_MANE_LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#F97316] hover:text-[#EA580C] underline decoration-[#FED7AA] underline-offset-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded-sm"
                    aria-label="View Abhijit Mane's LinkedIn profile (opens in new tab)"
                  >
                    {ABHIJIT_NAME}
                  </a>
                )}
              </span>
            ))}
          </p>
        );
      })}
    </>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { FileText, Download, ExternalLink, BookOpen, Presentation } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { ResearchPublication } from "@/types";

/* =========================================================
   ResearchPublication
   Displays research paper details, abstract, publication
   info image, and PDF preview/download for paper + PPT.
   ========================================================= */

interface ResearchPublicationProps {
  publication: ResearchPublication;
}

type ActiveDocument = "paper" | "ppt" | null;

export function ResearchPublication({ publication }: ResearchPublicationProps) {
  const [previewDoc, setPreviewDoc] = useState<ActiveDocument>(null);

  return (
    <section
      aria-labelledby="research-heading"
      className="bg-[#FAFAFA] py-16 md:py-20"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        <div className="flex flex-col gap-8">
          {/* Section heading */}
          <div className="flex flex-col gap-2">
            <h2
              id="research-heading"
              className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight"
            >
              Research Publication
            </h2>
            <div className="h-px w-12 bg-[#F97316] rounded-full" aria-hidden="true" />
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Publication details */}
            <div className="flex flex-col gap-6">
              {/* Publication card */}
              <div className="bg-white border border-[#E5E5E5] rounded-xl p-6 flex flex-col gap-5">
                {/* Title */}
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F97316]">
                    <BookOpen className="w-3.5 h-3.5" />
                    Publication Title
                  </div>
                  <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-base text-[#0A0A0A] leading-snug">
                    {publication.title}
                  </h3>
                </div>

                {/* Research domains */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]">
                    Research Domains
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {publication.domain.map((d) => (
                      <span
                        key={d}
                        className="inline-block px-2.5 py-1 text-xs bg-[#F5F5F5] border border-[#E5E5E5] rounded-md text-[#404040] font-medium"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Abstract */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A3A3A3]">
                    Abstract
                  </span>
                  <p className="text-sm text-[#404040] leading-relaxed">
                    {publication.abstract}
                  </p>
                </div>

                {/* Document actions */}
                <div className="flex flex-wrap gap-3 pt-2 border-t border-[#F5F5F5]">
                  {publication.paperPdfPath && (
                    <>
                      <Button
                        as="a"
                        href={publication.paperPdfPath}
                        download
                        variant="primary"
                        size="sm"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download Paper
                      </Button>
                      <button
                        onClick={() =>
                          setPreviewDoc(previewDoc === "paper" ? null : "paper")
                        }
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-transparent border border-[#D4D4D4] text-[#171717] rounded-md hover:bg-[#F5F5F5] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        {previewDoc === "paper" ? "Hide Preview" : "Preview Paper"}
                      </button>
                    </>
                  )}
                  {publication.pptPdfPath && (
                    <>
                      <Button
                        as="a"
                        href={publication.pptPdfPath}
                        download
                        variant="secondary"
                        size="sm"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download PPT
                      </Button>
                      <button
                        onClick={() =>
                          setPreviewDoc(previewDoc === "ppt" ? null : "ppt")
                        }
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-transparent border border-[#D4D4D4] text-[#171717] rounded-md hover:bg-[#F5F5F5] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {previewDoc === "ppt" ? "Hide PPT Preview" : "Preview PPT"}
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* PDF Preview iframe */}
              {previewDoc && (
                <div className="rounded-xl border border-[#E5E5E5] overflow-hidden shadow-sm bg-[#F5F5F5]">
                  <div className="bg-[#F5F5F5] border-b border-[#E5E5E5] px-4 py-2.5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#737373] uppercase tracking-wider">
                      {previewDoc === "paper" ? "Research Paper Preview" : "Presentation Preview"}
                    </span>
                    <button
                      onClick={() => setPreviewDoc(null)}
                      className="text-xs text-[#A3A3A3] hover:text-[#0A0A0A] transition-colors duration-150"
                    >
                      Close
                    </button>
                  </div>
                  <iframe
                    src={
                      previewDoc === "paper"
                        ? publication.paperPdfPath
                        : publication.pptPdfPath
                    }
                    title={
                      previewDoc === "paper"
                        ? "Research paper preview"
                        : "Presentation preview"
                    }
                    className="w-full h-[500px] md:h-[600px]"
                    loading="lazy"
                  />
                </div>
              )}
            </div>

            {/* Right: Publication details image */}
            {publication.publicationDetailsImagePath && (
              <div className="flex flex-col gap-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#E5E5E5] bg-[#F5F5F5] shadow-sm">
                  <Image
                    src={publication.publicationDetailsImagePath}
                    alt="Research paper publication details"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-[#737373] text-center">
                  Research paper publication details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

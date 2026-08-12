import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { Badge } from "@/components/ui/Badge";

/* =========================================================
   CURATED MILESTONES (Source: about.md / lib/about-data.ts)
   Concise summary for the Home Page timeline preview.
   ========================================================= */

interface TimelineItem {
  id: string;
  period: string;
  duration: string;
  organization: string;
  organizationUrl: string;
  logoSrc: string;
  logoAlt: string;
  role: string;
  type: string;
  oneLiner: string;
  highlights: string[];
  tags: string[];
  isCurrent?: boolean;
}

const CURATED_MILESTONES: TimelineItem[] = [
  {
    id: "jpl-rag",
    period: "Jan 2026 – Jul 2026",
    duration: "7 mos",
    organization: "Jio Platforms Limited (JPL)",
    organizationUrl: "https://www.linkedin.com/company/jioplatforms/",
    logoSrc: "/images/about/logos/Jio_logo.webp",
    logoAlt: "Jio Platforms Limited Logo",
    role: "Data Engineer (AI/ML) Intern",
    type: "Internship · On-site",
    oneLiner:
      "Architected Jio BA enterprise platform integrating data ingestion, audit reconciliation, and RAG-powered NL2SQL engine for telecom analytics.",
    highlights: [
      "Built RAG pipeline with LangChain, FAISS, ChromaDB & Qwen2.5-Coder LLM",
      "Engineered XML-to-PySpark code generation engine for 80+ telecom data sources",
      "Developed FastAPI AI inference services supporting enterprise operations",
    ],
    tags: ["RAG Architecture", "LangChain", "NL2SQL", "Qwen2.5-Coder", "FastAPI", "PySpark"],
    isCurrent: true,
  },
  {
    id: "ecell-chairperson",
    period: "Jul 2025 – May 2026",
    duration: "11 mos",
    organization: "E-Cell SIES GST",
    organizationUrl: "https://www.linkedin.com/company/edcsiesgst/",
    logoSrc: "/images/about/logos/E-Cell_SIES_GST_Logo.jpg",
    logoAlt: "E-Cell SIES GST Logo",
    role: "Chairperson",
    type: "Leadership · 2 yrs 10 mos total",
    oneLiner:
      "Led a 25-member cross-functional team organizing national-level business hackathons and fostering student entrepreneurship across India.",
    highlights: [
      "Directed 25 Leads and Coordinators across multiple event domains",
      "Organized national business hackathons & startup innovation drives",
      "Previously served as Outreach Lead and Social Media Coordinator",
    ],
    tags: ["Leadership", "Team Building", "Strategic Planning", "Entrepreneurship"],
  },
  {
    id: "jpl-etl",
    period: "Jul 2024 – Dec 2024",
    duration: "6 mos",
    organization: "Jio Platforms Limited (JPL)",
    organizationUrl: "https://www.linkedin.com/company/jioplatforms/",
    logoSrc: "/images/about/logos/Jio_logo.webp",
    logoAlt: "Jio Platforms Limited Logo",
    role: "Data Engineer Intern",
    type: "Internship · On-site",
    oneLiner:
      "Engineered big data ETL workflows migrating Revenue Assurance data objects into BI platform, expanding data coverage by 30%.",
    highlights: [
      "Designed PySpark, Hive & Python big data pipelines for BI migration",
      "Built web application for automated ETL configuration & reconciliation",
      "Optimized enterprise resource usage for RAFM analytics pipelines",
    ],
    tags: ["PySpark", "Python", "Hive", "ETL Pipelines", "Business Intelligence", "SQL"],
  },
  {
    id: "education-be",
    period: "Nov 2022 – Jul 2026",
    duration: "4 yrs",
    organization: "SIES Graduate School of Technology",
    organizationUrl: "https://www.linkedin.com/school/sies-graduate-school-of-technology/",
    logoSrc: "/images/about/logos/sies_gst_logonew.jpg",
    logoAlt: "SIES GST Logo",
    role: "BE in Artificial Intelligence & Machine Learning",
    type: "University of Mumbai",
    oneLiner:
      "Formal engineering degree establishing deep technical foundations in software engineering, ML algorithms, and data architectures.",
    highlights: [
      "Core focus on Artificial Intelligence, Machine Learning & Data Engineering",
      "Chairperson of Entrepreneurship Development Cell (E-CELL SIES GST)",
      "Hands-on coursework in Python, Java, C, Data Structures & Database Systems",
    ],
    tags: ["Artificial Intelligence", "Machine Learning", "Data Engineering", "Algorithms"],
  },
];

/* =========================================================
   HomeExperiencePreview
   Editorial timeline preview of Adarsh's career evolution.
   ========================================================= */

export function HomeExperiencePreview() {
  return (
    <SectionWrapper
      id="experience"
      background="alt"
      ariaLabelledBy="experience-preview-heading"
      className="py-16 md:py-24"
    >
      <Container>
        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-col gap-3 max-w-2xl">
            <SectionLabel>EXPERIENCE</SectionLabel>
            <SectionHeading id="experience-preview-heading">
              Professional Journey
            </SectionHeading>
            <SectionDescription>
              From data engineering pipelines to RAG systems and enterprise AI — a
              timeline of roles, responsibilities, and growth.
            </SectionDescription>
          </div>

          {/* Desktop Top CTA */}
          <div className="hidden sm:block shrink-0">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0A0A0A] hover:text-[#F97316] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] rounded-sm"
              aria-label="View complete professional journey on the About page"
            >
              View Full Journey
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Editorial Timeline Layout ── */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Backbone Line (Desktop & Tablet) */}
          <div
            className="hidden md:block absolute left-[210px] top-6 bottom-6 w-px bg-gradient-to-b from-[#E5E5E5] via-[#D4D4D4] to-[#E5E5E5]"
            aria-hidden="true"
          />

          <ol
            className="relative flex flex-col gap-8 md:gap-10"
            aria-label="Curated professional timeline preview"
          >
            {CURATED_MILESTONES.map((item, index) => (
              <li key={item.id} className="group relative">
                {/* ── Desktop & Tablet Grid Layout ── */}
                <div className="hidden md:grid md:grid-cols-[190px_40px_1fr] md:items-start gap-0">
                  {/* Left Column: Period & Organization Logo */}
                  <div className="flex flex-col items-end text-right pr-4 pt-1">
                    <span className="font-mono text-xs font-semibold text-[#0A0A0A] tracking-tight">
                      {item.period}
                    </span>
                    <span className="text-xs text-[#737373] mt-0.5 font-medium">
                      {item.duration}
                    </span>

                    {/* Logo badge preview */}
                    <div className="mt-3 relative w-9 h-9 rounded-lg border border-[#E5E5E5] bg-white p-1 overflow-hidden shadow-2xs group-hover:border-[#F97316]/40 transition-colors duration-200">
                      <Image
                        src={item.logoSrc}
                        alt={item.logoAlt}
                        fill
                        className="object-contain p-0.5"
                        sizes="36px"
                      />
                    </div>
                  </div>

                  {/* Center Column: Node Dot Marker */}
                  <div className="flex justify-center pt-2.5 z-10">
                    <div
                      className={`w-3.5 h-3.5 rounded-full border-2 bg-white transition-all duration-300 ${item.isCurrent
                          ? "border-[#F97316] bg-[#F97316] ring-4 ring-[#F97316]/15 group-hover:scale-125"
                          : "border-[#A3A3A3] group-hover:border-[#F97316] group-hover:bg-[#F97316] group-hover:scale-125"
                        }`}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Right Column: Editorial Card */}
                  <div className="pl-4">
                    <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 md:p-7 shadow-[0_2px_10px_rgba(0,0,0,0.02)] group-hover:border-[#D4D4D4] group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
                      {/* Organization & Role */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 pb-3 border-b border-[#F5F5F5]">
                        <div>
                          <div className="flex items-center gap-2">
                            <a
                              href={item.organizationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-semibold uppercase tracking-wider text-[#737373] hover:text-[#F97316] transition-colors duration-150 inline-flex items-center gap-1"
                            >
                              {item.organization}
                              <ExternalLink className="w-3 h-3 opacity-60" />
                            </a>
                          </div>
                          <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-lg font-bold text-[#0A0A0A] tracking-tight mt-0.5">
                            {item.role}
                          </h3>
                        </div>

                        <span className="inline-flex text-xs font-medium text-[#737373] bg-[#F5F5F5] px-2.5 py-1 rounded-md self-start sm:self-auto shrink-0">
                          {item.type}
                        </span>
                      </div>

                      {/* One-liner summary */}
                      <p className="text-sm font-medium text-[#404040] leading-relaxed mt-4">
                        {item.oneLiner}
                      </p>

                      {/* Highlight bullets */}
                      <ul className="mt-3 flex flex-col gap-1.5" role="list">
                        {item.highlights.map((bullet, i) => (
                          <li
                            key={i}
                            className="text-xs text-[#525252] leading-relaxed flex items-start gap-2"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-[#F97316] shrink-0 mt-1.5 opacity-80"
                              aria-hidden="true"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-[#F5F5F5]">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" size="sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Mobile Layout (< md) ── */}
                <div className="block md:hidden relative pl-6 border-l-2 border-[#E5E5E5] group-hover:border-[#F97316] transition-colors duration-300">
                  {/* Mobile Node Dot */}
                  <div
                    className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full border-2 bg-white ${item.isCurrent
                        ? "border-[#F97316] bg-[#F97316] ring-4 ring-[#F97316]/15"
                        : "border-[#A3A3A3] group-hover:border-[#F97316] group-hover:bg-[#F97316]"
                      }`}
                    aria-hidden="true"
                  />

                  {/* Mobile Card */}
                  <div className="rounded-xl border border-[#E5E5E5] bg-white p-5 shadow-xs">
                    {/* Top Row: Logo, Period, Org */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="relative w-10 h-10 rounded-lg border border-[#E5E5E5] bg-white p-1 shrink-0 overflow-hidden">
                        <Image
                          src={item.logoSrc}
                          alt={item.logoAlt}
                          fill
                          className="object-contain p-0.5"
                          sizes="40px"
                        />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-mono text-xs font-semibold text-[#F97316]">
                          {item.period}
                        </span>
                        <a
                          href={item.organizationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#737373] truncate hover:text-[#0A0A0A]"
                        >
                          {item.organization} ↗
                        </a>
                      </div>
                    </div>

                    {/* Role Title */}
                    <h3 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-base font-bold text-[#0A0A0A]">
                      {item.role}
                    </h3>
                    <span className="inline-block text-[11px] text-[#737373] bg-[#F5F5F5] px-2 py-0.5 rounded-sm mt-1 mb-3">
                      {item.type}
                    </span>

                    {/* One-Liner */}
                    <p className="text-xs text-[#404040] leading-relaxed font-medium">
                      {item.oneLiner}
                    </p>

                    {/* Highlights */}
                    <ul className="mt-2.5 flex flex-col gap-1" role="list">
                      {item.highlights.map((bullet, i) => (
                        <li key={i} className="text-[11px] text-[#525252] flex items-start gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-[#F97316] shrink-0 mt-1.5 opacity-80" aria-hidden="true" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-[#F5F5F5]">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="outline" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Bottom CTA Banner ── */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-6 bg-white rounded-2xl p-6 md:p-8 border border-[#E5E5E5] shadow-xs">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h4 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-base font-bold text-[#0A0A0A]">
              Want to see the complete detailed timeline?
            </h4>
            <p className="text-xs md:text-sm text-[#737373]">
              Explore my full story, comprehensive responsibilities, certifications, achievements, and academic record.
            </p>
          </div>

          <Link
            href="/about"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0A0A0A] text-white text-sm font-semibold hover:bg-[#F97316] transition-all duration-200 shadow-sm shrink-0 w-full sm:w-auto"
            aria-label="Explore my complete experience on the About page"
          >
            View Full Journey
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </SectionWrapper>
  );
}

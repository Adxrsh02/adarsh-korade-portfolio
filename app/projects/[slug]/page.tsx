import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import {
  PROJECTS,
  getProjectBySlug,
  getRelatedProjects,
  getAdjacentProjects,
} from "@/lib/projects-data";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { CaseStudyHero } from "@/components/projects/case-study/CaseStudyHero";
import { MetadataStrip } from "@/components/projects/case-study/MetadataStrip";
import { CaseStudySection } from "@/components/projects/case-study/CaseStudySection";
import { TechStackSection } from "@/components/projects/case-study/TechStackSection";
import { FeaturesList } from "@/components/projects/case-study/FeaturesList";
import { WorkflowDiagram } from "@/components/projects/case-study/WorkflowDiagram";
import { PerformanceTable } from "@/components/projects/case-study/PerformanceTable";
import { ScreenshotGallery } from "@/components/projects/case-study/ScreenshotGallery";
import { ChallengesSection } from "@/components/projects/case-study/ChallengesSection";
import { ResearchPublication } from "@/components/projects/case-study/ResearchPublication";
import { ProjectLinks } from "@/components/projects/case-study/ProjectLinks";
import { RelatedProjects } from "@/components/projects/case-study/RelatedProjects";
import { ProjectNavigation } from "@/components/projects/case-study/ProjectNavigation";
import { ProjectsCTA } from "@/components/projects/ProjectsCTA";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";

/* =========================================================
   STATIC PARAMS — pre-render all known slugs at build time
   ========================================================= */

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

/* =========================================================
   PAGE METADATA — dynamic per-project
   ========================================================= */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const description = project.portfolioDescription.substring(0, 160).trimEnd() + "…";

  return {
    title: project.title,
    description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} — Adarsh Korade`,
      description: project.tagline,
      url: `${SITE_CONFIG.url}/projects/${slug}`,
      type: "article",
      images: [
        {
          url: project.thumbnailPath,
          width: 1200,
          height: 630,
          alt: `${project.title} — project thumbnail`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Adarsh Korade`,
      description: project.tagline,
      images: [project.thumbnailPath],
    },
  };
}

/* =========================================================
   /projects/[slug] PAGE
   ========================================================= */

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // 404 for unknown slugs
  if (!project) notFound();

  const relatedProjects = getRelatedProjects(slug, 3);
  const { previous, next } = getAdjacentProjects(slug);

  /* JSON-LD structured data for this project */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.tagline,
    author: {
      "@type": "Person",
      "@id": `${SITE_CONFIG.url}/#person`,
      name: SITE_CONFIG.name,
    },
    datePublished: project.lastUpdated ?? "2026",
    image: `${SITE_CONFIG.url}${project.thumbnailPath}`,
    mainEntityOfPage: `${SITE_CONFIG.url}/projects/${slug}`,
    keywords: [
      ...project.categories,
      ...(project.techStack.aiMl ?? []),
      ...(project.techStack.frontend ?? []),
      ...(project.techStack.backend ?? []),
    ].join(", "),
  };

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageWrapper>
        {/* 1. Hero — Breadcrumb, Title, Tagline, Actions, Hero Image */}
        <CaseStudyHero project={project} />

        {/* 2. Metadata Strip — Role, Org, Duration, Team, Status */}
        <MetadataStrip project={project} />

        {/* 3. Executive Summary */}
        <CaseStudySection id="summary" heading="Executive Summary" background="white">
          <p>{project.portfolioDescription}</p>

          {project.targetUsers.length > 0 && (
            <div className="mt-4">
              <h3 className="font-semibold text-sm text-[#0A0A0A] mb-3 uppercase tracking-wider">
                Target Users
              </h3>
              <ul className="flex flex-wrap gap-2">
                {project.targetUsers.map((user) => (
                  <li
                    key={user}
                    className="inline-block px-3 py-1.5 text-sm bg-[#F5F5F5] border border-[#E5E5E5] rounded-lg text-[#404040]"
                  >
                    {user}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CaseStudySection>

        {/* 4. Problem Statement */}
        <CaseStudySection id="problem" heading="Problem Statement" background="alt">
          <p>{project.businessProblem}</p>
        </CaseStudySection>

        {/* 5. Solution & Objective */}
        <CaseStudySection id="solution" heading="Solution & Objective" background="white">
          <p>{project.projectObjective}</p>
        </CaseStudySection>

        {/* 6. Key Features */}
        {project.keyFeatures.length > 0 && (
          <SectionWrapper
            background="alt"
            aria-labelledby="features-heading"
            className="py-16 md:py-20"
          >
            <Container variant="narrow">
              <div className="flex flex-col gap-6">
                <h2
                  id="features-heading"
                  className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight"
                >
                  Key Features
                </h2>
                <div className="h-px w-12 bg-[#F97316] rounded-full" />
                <FeaturesList features={project.keyFeatures} />
              </div>
            </Container>
          </SectionWrapper>
        )}

        {/* 7. Technology Stack */}
        <TechStackSection techStack={project.techStack} />

        {/* 8. Application Workflow */}
        {project.workflowSteps.length > 0 && (
          <SectionWrapper
            background="white"
            aria-labelledby="workflow-heading"
            className="py-16 md:py-20"
          >
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[960px]">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h2
                    id="workflow-heading"
                    className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight"
                  >
                    Application Workflow
                  </h2>
                  <div className="h-px w-12 bg-[#F97316] rounded-full" />
                </div>
                <WorkflowDiagram steps={project.workflowSteps} />
              </div>
            </div>
          </SectionWrapper>
        )}

        {/* 9. Performance Metrics */}
        {project.performanceMetrics && (
          <SectionWrapper
            background="alt"
            aria-labelledby="performance-heading"
            className="py-16 md:py-20"
          >
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[960px]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h2
                    id="performance-heading"
                    className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight"
                  >
                    Performance Metrics
                  </h2>
                  <div className="h-px w-12 bg-[#F97316] rounded-full" />
                  <p className="text-sm text-[#737373] mt-2">
                    Comparative evaluation across all trained models on the ODIR-2019 test set.
                    ★ indicates best-performing model.
                  </p>
                </div>
                <PerformanceTable metrics={project.performanceMetrics} />
              </div>
            </div>
          </SectionWrapper>
        )}

        {/* 10. Screenshots Gallery */}
        {project.screenshots.length > 0 && (
          <SectionWrapper
            background="white"
            aria-labelledby="screenshots-heading"
            className="py-16 md:py-20"
          >
            <Container>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <SectionLabel>Visual Documentation</SectionLabel>
                  <h2
                    id="screenshots-heading"
                    className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight"
                  >
                    Screenshots & Interface
                  </h2>
                  <div className="h-px w-12 bg-[#F97316] rounded-full" />
                </div>
                <ScreenshotGallery
                  screenshots={project.screenshots}
                  projectTitle={project.title}
                />
              </div>
            </Container>
          </SectionWrapper>
        )}

        {/* 11. Engineering Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <SectionWrapper
            background="alt"
            aria-labelledby="challenges-heading"
            className="py-16 md:py-20"
          >
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[960px]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h2
                    id="challenges-heading"
                    className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight"
                  >
                    Engineering Challenges & Solutions
                  </h2>
                  <div className="h-px w-12 bg-[#F97316] rounded-full" />
                </div>
                <ChallengesSection challenges={project.challenges} />
              </div>
            </div>
          </SectionWrapper>
        )}

        {/* 12. Research Publication (conditional) */}
        {project.research && (
          <ResearchPublication publication={project.research} />
        )}

        {/* 13. Lessons Learned + Future Improvements */}
        {(project.lessonsLearned?.length || project.futureImprovements?.length) && (
          <SectionWrapper
            background="white"
            aria-labelledby="reflection-heading"
            className="py-16 md:py-20"
          >
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[960px]">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h2
                    id="reflection-heading"
                    className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-2xl sm:text-3xl text-[#0A0A0A] tracking-tight"
                  >
                    Engineering Reflection
                  </h2>
                  <div className="h-px w-12 bg-[#F97316] rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Lessons Learned */}
                  {project.lessonsLearned && project.lessonsLearned.length > 0 && (
                    <div className="flex flex-col gap-4">
                      <h3 className="font-semibold text-base text-[#0A0A0A]">
                        Lessons Learned
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {project.lessonsLearned.map((lesson, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-[#404040] leading-relaxed"
                          >
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0A0A0A] text-white text-[10px] font-bold flex items-center justify-center mt-0.5">
                              {i + 1}
                            </span>
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Future Improvements */}
                  {project.futureImprovements && project.futureImprovements.length > 0 && (
                    <div className="flex flex-col gap-4">
                      <h3 className="font-semibold text-base text-[#0A0A0A]">
                        Future Improvements
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {project.futureImprovements.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-[#404040] leading-relaxed"
                          >
                            <span
                              className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F97316] text-white text-[10px] font-bold flex items-center justify-center mt-0.5"
                              aria-hidden="true"
                            >
                              →
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SectionWrapper>
        )}

        {/* 14. GitHub + Live Demo links */}
        <SectionWrapper background="alt" className="py-16 md:py-20">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[960px]">
            <div className="flex flex-col gap-6">
              <h2 className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] font-semibold text-2xl text-[#0A0A0A] tracking-tight">
                Project Links
              </h2>
              <div className="h-px w-12 bg-[#F97316] rounded-full" />
              <ProjectLinks project={project} />
            </div>
          </div>
        </SectionWrapper>

        {/* 15. Related Projects */}
        {relatedProjects.length > 0 && (
          <RelatedProjects projects={relatedProjects} />
        )}

        {/* 16. CTA */}
        <ProjectsCTA />

        {/* 17. Prev / Next Navigation */}
        <ProjectNavigation previous={previous} next={next} />
      </PageWrapper>
    </>
  );
}

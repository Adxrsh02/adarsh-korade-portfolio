import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { GitHubStatCard } from "./GitHubStatCard";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO, CONTACT_COPY } from "@/lib/contact-data";

/* =========================================================
   GitHub API — Server-side fetch with ISR
   Fetches basic profile stats from GitHub REST API.
   Falls back to placeholder values on error.
   ========================================================= */

interface GitHubProfile {
  public_repos: number;
  followers: number;
  following: number;
  public_gists: number;
}

async function fetchGitHubStats(): Promise<GitHubProfile> {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME ?? CONTACT_INFO.githubUsername;

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      // ISR: revalidate every hour
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error(`GitHub API: ${res.status}`);
    return await res.json();
  } catch {
    // Graceful fallback
    return {
      public_repos: 20,
      followers: 50,
      following: 30,
      public_gists: 5,
    };
  }
}

/* =========================================================
   GitHubActivity
   Server Component — fetches GitHub stats + renders section.
   ========================================================= */

export async function GitHubActivity() {
  const stats = await fetchGitHubStats();
  const username = CONTACT_INFO.githubUsername;

  const statCards = [
    {
      id: "repos",
      icon: "repo" as const,
      value: stats.public_repos,
      label: "Public Repositories",
    },
    {
      id: "followers",
      icon: "users" as const,
      value: stats.followers,
      label: "GitHub Followers",
    },
    {
      id: "following",
      icon: "star" as const,
      value: stats.following,
      label: "Following",
    },
    {
      id: "gists",
      icon: "code" as const,
      value: stats.public_gists || "10+",
      label: "Public Gists",
    },
  ];

  return (
    <SectionWrapper
      id="github-activity"
      background="alt"
      aria-labelledby="github-heading"
    >
      <Container>
        {/* Header */}
        <div className="flex flex-col gap-3 mb-8 md:mb-10">
          <SectionLabel>{CONTACT_COPY.github.eyebrow}</SectionLabel>
          <SectionHeading id="github-heading">
            {CONTACT_COPY.github.heading}
          </SectionHeading>
          <SectionDescription>
            {CONTACT_COPY.github.description}
          </SectionDescription>
        </div>

        {/* Stats grid — 2×2 mobile, 4×1 desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 md:mb-10">
          {statCards.map((card) => (
            <GitHubStatCard
              key={card.id}
              icon={card.icon}
              value={card.value}
              label={card.label}
            />
          ))}
        </div>

        {/* Contribution graph */}
        <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-[0_1px_2px_rgba(0,0,0,0.04)] overflow-hidden p-4 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A3A3A3] mb-4">
            Contribution Activity
          </p>
          <div className="overflow-x-auto">
            {/* Orange-accented contribution graph via ghchart.rshah.org */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://ghchart.rshah.org/f97316/${username}`}
              alt={`GitHub contribution chart for ${username}`}
              className="w-full min-w-[600px] h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 flex justify-center sm:justify-start">
          <Button
            as="a"
            href={CONTACT_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="md"
          >
            {CONTACT_COPY.github.cta} ↗
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}

"use client";

import { useEffect, useState } from "react";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/sections/SectionLabel";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SectionDescription } from "@/components/sections/SectionDescription";
import { ScrollReveal } from "@/components/about/ScrollReveal";
import { EngineeringActivityBar } from "@/components/about/EngineeringActivityBar";

/* =========================================================
   ENGINEERING ACTIVITY DASHBOARD
   § 8 — WakaTime live coding stats
   ========================================================= */

interface WakaData {
  totalCodingTime: string;
  totalSeconds: number;
  dailyAverage: string;
  weeklyActivities: {
    date: string;
    dayName: string;
    totalSeconds: number;
    text: string;
  }[];
  topLanguages: {
    name: string;
    percent: number;
    text: string;
    totalSeconds: number;
  }[];
  topProjects: {
    name: string;
    percent: number;
    text: string;
  }[];
  categories: {
    name: string;
    percent: number;
    text: string;
  }[];
  lastUpdated: string;
}

type FetchState = "idle" | "loading" | "success" | "error";

export function EngineeringActivity() {
  const [data, setData] = useState<WakaData | null>(null);
  const [state, setState] = useState<FetchState>("idle");

  useEffect(() => {
    setState("loading");
    fetch("/api/wakatime")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json: WakaData) => {
        setData(json);
        setState("success");
      })
      .catch((err) => {
        console.error("[EngineeringActivity]", err);
        setState("error");
      });
  }, []);

  // Weekly bar max
  const maxWeeklySeconds = data?.weeklyActivities
    ? Math.max(...data.weeklyActivities.map((d) => d.totalSeconds), 1)
    : 1;

  return (
    <SectionWrapper
      id="engineering-activity"
      background="alt"
      ariaLabelledBy="activity-heading"
    >
      <Container>
        {/* Header */}
        <ScrollReveal delay={0}>
          <div className="flex flex-col gap-4 mb-10">
            <SectionLabel>Engineering Activity</SectionLabel>
            <SectionHeading id="activity-heading">
              How I Build
            </SectionHeading>
            <SectionDescription>
              A live snapshot of how I build, learn, and ship.
            </SectionDescription>
          </div>
        </ScrollReveal>

        {state === "loading" && <ActivitySkeleton />}
        {state === "error" && <ActivityError />}

        {state === "success" && data && (
          <div className="flex flex-col gap-8">
            {/* ── Row 1: Stat cards ── */}
            <ScrollReveal delay={0}>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <StatCard
                  label="Total Coding"
                  value={data.totalCodingTime}
                  subtitle="Last 30 days"
                />
                <StatCard
                  label="Daily Average"
                  value={data.dailyAverage}
                  subtitle="Per active day"
                />
                <StatCard
                  label="Languages"
                  value={String(data.topLanguages.length)}
                  subtitle="In use"
                />
                <StatCard
                  label="Projects"
                  value={String(data.topProjects.length)}
                  subtitle="Touched"
                />
              </div>
            </ScrollReveal>

            {/* ── Row 2: Weekly activity bars ── */}
            {data.weeklyActivities.length > 0 && (
              <ScrollReveal delay={1}>
                <div className="rounded-xl border border-[#E5E5E5] bg-white p-6">
                  <h3 className="text-sm font-semibold text-[#0A0A0A] mb-4">Weekly Activity</h3>
                  <div className="flex items-end gap-2 h-28">
                    {data.weeklyActivities.map((day) => {
                      const heightPct = Math.round((day.totalSeconds / maxWeeklySeconds) * 100);
                      return (
                        <div
                          key={day.date}
                          className="flex flex-col items-center gap-1.5 flex-1"
                          title={`${day.dayName}: ${day.text}`}
                        >
                          <div className="w-full rounded-t-md bg-[#F5F5F5] relative"
                            style={{ height: "80px" }}>
                            <div
                              className="absolute bottom-0 left-0 right-0 rounded-t-md bg-[#F97316] opacity-80 transition-all duration-700"
                              style={{ height: `${heightPct}%` }}
                              role="img"
                              aria-label={`${day.dayName}: ${day.text}`}
                            />
                          </div>
                          <span className="text-xs text-[#A3A3A3]">{day.dayName}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* ── Row 3: Languages + Categories ── */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Languages */}
              {data.topLanguages.length > 0 && (
                <ScrollReveal delay={2}>
                  <div className="rounded-xl border border-[#E5E5E5] bg-white p-6">
                    <h3 className="text-sm font-semibold text-[#0A0A0A] mb-5">Languages</h3>
                    <div className="flex flex-col gap-4">
                      {data.topLanguages.map((lang) => (
                        <EngineeringActivityBar
                          key={lang.name}
                          label={lang.name}
                          detail={lang.text}
                          percent={lang.percent}
                          color="accent"
                        />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* Categories */}
              {data.categories.length > 0 && (
                <ScrollReveal delay={3}>
                  <div className="rounded-xl border border-[#E5E5E5] bg-white p-6">
                    <h3 className="text-sm font-semibold text-[#0A0A0A] mb-5">Engineering Rhythm</h3>
                    <div className="flex flex-col gap-4">
                      {data.categories.map((cat) => (
                        <EngineeringActivityBar
                          key={cat.name}
                          label={cat.name}
                          detail={cat.text}
                          percent={cat.percent}
                          color="secondary"
                        />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* ── Row 4: Projects ── */}
            {data.topProjects.length > 0 && (
              <ScrollReveal delay={4}>
                <div className="rounded-xl border border-[#E5E5E5] bg-white p-6">
                  <h3 className="text-sm font-semibold text-[#0A0A0A] mb-5">Active Projects</h3>
                  <div className="flex flex-col gap-4">
                    {data.topProjects.map((proj) => (
                      <EngineeringActivityBar
                        key={proj.name}
                        label={proj.name}
                        detail={proj.text}
                        percent={proj.percent}
                        color="accent"
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Attribution */}
            <div className="flex items-center gap-2 justify-end">
              <span className="text-xs text-[#A3A3A3]">Powered by</span>
              <a
                href="https://wakatime.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#A3A3A3] hover:text-[#737373] transition-colors duration-150"
              >
                WakaTime
              </a>
              <span className="text-xs text-[#D4D4D4]">·</span>
              <span className="text-xs text-[#A3A3A3]">
                Updated {new Date(data.lastUpdated).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>
        )}
      </Container>
    </SectionWrapper>
  );
}

/* ── Sub-components ───────────────────────────────── */

function StatCard({ label, value, subtitle }: { label: string; value: string; subtitle: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-[#E5E5E5] bg-white p-4">
      <span className="text-xs text-[#A3A3A3] font-medium uppercase tracking-wide">{label}</span>
      <span className="font-[Helvetica_Neue,Helvetica,Arial,-apple-system,sans-serif] text-xl font-bold text-[#0A0A0A] leading-none">
        {value}
      </span>
      <span className="text-xs text-[#737373]">{subtitle}</span>
    </div>
  );
}

function ActivitySkeleton() {
  return (
    <div className="flex flex-col gap-6" aria-label="Loading engineering activity..." aria-busy="true">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-20 rounded-xl bg-[#F5F5F5] animate-pulse" />
        ))}
      </div>
      <div className="h-40 rounded-xl bg-[#F5F5F5] animate-pulse" />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="h-52 rounded-xl bg-[#F5F5F5] animate-pulse" />
        <div className="h-52 rounded-xl bg-[#F5F5F5] animate-pulse" />
      </div>
    </div>
  );
}

function ActivityError() {
  return (
    <div className="rounded-xl border border-[#E5E5E5] bg-white p-8 text-center">
      <p className="text-sm text-[#737373]">
        Engineering activity data is temporarily unavailable. Check back soon.
      </p>
    </div>
  );
}

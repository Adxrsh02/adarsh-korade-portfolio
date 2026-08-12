import { NextResponse } from "next/server";

/* =========================================================
   WAKATIME API PROXY — Route Handler
   ─────────────────────────────────
   Server-side only. API key NEVER exposed to browser.
   Caches responses for 5 minutes (CDN + client).
   ========================================================= */

export const runtime = "nodejs";

// WakaTime Base API URL (v1)
const WAKATIME_API = "https://wakatime.com/api/v1";

function getAuthHeader(): string {
  const key = process.env.WAKATIME_API_KEY;
  if (!key) throw new Error("WAKATIME_API_KEY not configured");
  return `Basic ${Buffer.from(key).toString("base64")}`;
}

interface WakaData {
  totalCodingTime: string;
  totalSeconds: number;
  dailyAverage: string;
  weeklyActivities: DayActivity[];
  topLanguages: Language[];
  topProjects: Project[];
  categories: Category[];
  lastUpdated: string;
}

interface DayActivity {
  date: string;
  dayName: string;
  totalSeconds: number;
  text: string;
}

interface Language {
  name: string;
  percent: number;
  text: string;
  totalSeconds: number;
}

interface Project {
  name: string;
  percent: number;
  text: string;
}

interface Category {
  name: string;
  percent: number;
  text: string;
}

async function fetchWakaData(): Promise<WakaData> {
  const auth = getAuthHeader();

  // Fetch summary (last 30 days)
  const summaryRes = await fetch(
    `${WAKATIME_API}/users/current/summaries?range=last_30_days`,
    {
      headers: { Authorization: auth },
      next: { revalidate: 300 }, // 5 min cache
    }
  );

  if (!summaryRes.ok) {
    throw new Error(`WakaTime API error: ${summaryRes.status}`);
  }

  const summaryData = await summaryRes.json();
  const summaries = summaryData.data ?? [];

  // Total seconds across 30 days
  const totalSeconds = summaries.reduce(
    (acc: number, day: { grand_total?: { total_seconds?: number } }) =>
      acc + (day.grand_total?.total_seconds ?? 0),
    0
  );

  // Aggregate languages across all days
  const langMap = new Map<string, { seconds: number }>();
  for (const day of summaries) {
    for (const lang of day.languages ?? []) {
      const existing = langMap.get(lang.name) ?? { seconds: 0 };
      langMap.set(lang.name, { seconds: existing.seconds + (lang.total_seconds ?? 0) });
    }
  }

  const topLanguages: Language[] = Array.from(langMap.entries())
    .filter(([, v]) => v.seconds > 0)
    .sort((a, b) => b[1].seconds - a[1].seconds)
    .slice(0, 6)
    .map(([name, v]) => ({
      name,
      percent: totalSeconds > 0 ? Math.round((v.seconds / totalSeconds) * 100) : 0,
      text: formatTime(v.seconds),
      totalSeconds: v.seconds,
    }));

  // Aggregate projects
  const projMap = new Map<string, { seconds: number }>();
  for (const day of summaries) {
    for (const proj of day.projects ?? []) {
      const existing = projMap.get(proj.name) ?? { seconds: 0 };
      projMap.set(proj.name, { seconds: existing.seconds + (proj.total_seconds ?? 0) });
    }
  }

  const topProjects: Project[] = Array.from(projMap.entries())
    .filter(([, v]) => v.seconds > 0)
    .sort((a, b) => b[1].seconds - a[1].seconds)
    .slice(0, 5)
    .map(([name, v]) => ({
      name,
      percent: totalSeconds > 0 ? Math.round((v.seconds / totalSeconds) * 100) : 0,
      text: formatTime(v.seconds),
    }));

  // Categories (Coding, Debugging, etc.)
  const catMap = new Map<string, { seconds: number }>();
  for (const day of summaries) {
    for (const cat of day.categories ?? []) {
      const existing = catMap.get(cat.name) ?? { seconds: 0 };
      catMap.set(cat.name, { seconds: existing.seconds + (cat.total_seconds ?? 0) });
    }
  }

  const categories: Category[] = Array.from(catMap.entries())
    .filter(([, v]) => v.seconds > 0)
    .sort((a, b) => b[1].seconds - a[1].seconds)
    .map(([name, v]) => ({
      name,
      percent: totalSeconds > 0 ? Math.round((v.seconds / totalSeconds) * 100) : 0,
      text: formatTime(v.seconds),
    }));

  // Last 7 days for weekly activity
  const last7 = summaries.slice(-7);
  const weeklyActivities: DayActivity[] = last7.map(
    (day: {
      range?: { date?: string; text?: string };
      grand_total?: { total_seconds?: number; text?: string };
    }) => {
      const dateStr = day.range?.date ?? "";
      const date = new Date(dateStr);
      const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return {
        date: dateStr,
        dayName: dayNames[date.getDay()] ?? dateStr,
        totalSeconds: day.grand_total?.total_seconds ?? 0,
        text: day.grand_total?.text ?? "0 mins",
      };
    }
  );

  return {
    totalCodingTime: formatTime(totalSeconds),
    totalSeconds,
    dailyAverage: formatTime(Math.floor(totalSeconds / Math.max(summaries.length, 1))),
    weeklyActivities,
    topLanguages,
    topProjects,
    categories,
    lastUpdated: new Date().toISOString(),
  };
}

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h} hr ${m} min`;
  return `${m} min`;
}

/* ── Route handlers ─────────────────────────────────────── */

export async function GET() {
  try {
    const data = await fetchWakaData();
    return NextResponse.json(data, {
      headers: {
        // 5 min CDN cache, 10 min stale-while-revalidate
        "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (err) {
    console.error("[WakaTime API]", err);
    return NextResponse.json(
      { error: "Unable to fetch WakaTime data" },
      { status: 503 }
    );
  }
}

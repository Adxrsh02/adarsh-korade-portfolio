"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { PROJECT_CATEGORIES } from "@/lib/projects-data";
import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";

/* =========================================================
   ProjectsFilterBarInner
   The actual filter UI — requires useSearchParams so must
   be wrapped in Suspense at the usage site.
   ========================================================= */

interface ProjectsFilterBarInnerProps {
  totalCount: number;
  filteredCount: number;
}

function ProjectsFilterBarInner({
  totalCount,
  filteredCount,
}: ProjectsFilterBarInnerProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ?? ""
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const activeCategory = searchParams.get("category") ?? "all";
  const debouncedSearch = useDebounce(searchValue, 250);

  /**
   * Keep a ref to the latest searchParams so we can read it inside
   * the sync-effect WITHOUT adding it to the dependency array.
   *
   * Root cause of the infinite GET /projects loop:
   *   useSearchParams() returns a NEW object reference on every
   *   navigation — even when the query string is byte-for-byte identical.
   *   Having it in a useEffect dep array that also calls router.replace()
   *   creates a permanent loop:
   *
   *   router.replace() → new searchParams ref → effect fires
   *   → router.replace() → new searchParams ref → effect fires → ∞
   *
   * Fix: update a ref synchronously each render (always fresh) and
   * read the ref inside the effect. The effect only re-fires when
   * debouncedSearch or pathname actually change.
   */
  const searchParamsRef = useRef(searchParams);
  searchParamsRef.current = searchParams; // always fresh, zero cost

  // Sync debouncedSearch → URL only (one-directional, never loops)
  useEffect(() => {
    const currentQ = searchParamsRef.current.get("q") ?? "";

    // Guard: if the URL already has this exact value, skip the navigation.
    // This prevents a spurious router.replace() on initial mount.
    if (debouncedSearch === currentQ) return;

    const params = new URLSearchParams(searchParamsRef.current.toString());
    if (debouncedSearch) {
      params.set("q", debouncedSearch);
    } else {
      params.delete("q");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });

    // ✅ searchParams intentionally NOT in deps — read via ref instead.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, pathname, router]);

  // Detect scroll for sticky backdrop blur
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // setCategory reads ref so searchParams is not a callback dep
  const setCategory = useCallback(
    (slug: string) => {
      const params = new URLSearchParams(searchParamsRef.current.toString());
      if (slug === "all") {
        params.delete("category");
      } else {
        params.set("category", slug);
      }
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router]
  );

  const clearAll = useCallback(() => {
    setSearchValue("");
    router.replace(pathname, { scroll: false });
  }, [pathname, router]);

  const hasActiveFilters = activeCategory !== "all" || searchValue.length > 0;

  return (
    <div
      id="projects-filter"
      className={cn(
        "sticky top-14 lg:top-16 z-40 transition-all duration-200",
        isScrolled
          ? "bg-white/95 filter-bar-sticky border-b border-[#E5E5E5] shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-white border-b border-[#E5E5E5]"
      )}
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px]">
        <div className="py-4 flex flex-col sm:flex-row sm:items-center gap-3">
          {/* Category pill strip */}
          <nav
            aria-label="Project categories"
            className="flex-1 min-w-0"
          >
            <div
              className="flex gap-2 overflow-x-auto scrollbar-none pb-1 sm:pb-0"
              role="tablist"
              aria-label="Filter projects by category"
            >
              {PROJECT_CATEGORIES.map((cat) => {
                const isActive =
                  cat.slug === "all"
                    ? activeCategory === "all"
                    : activeCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setCategory(cat.slug)}
                    className={cn(
                      "shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C] focus-visible:ring-offset-2",
                      isActive
                        ? "bg-[#0A0A0A] text-white"
                        : "bg-[#F5F5F5] text-[#404040] border border-[#E5E5E5] hover:bg-[#EBEBEB] hover:border-[#D4D4D4]"
                    )}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Search input */}
          <div className="relative flex-shrink-0 w-full sm:w-64 lg:w-72">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3A3A3] pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search projects…"
              aria-label="Search projects by name, technology, or keyword"
              className="w-full pl-9 pr-9 py-2.5 text-sm bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg text-[#0A0A0A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#F97316] focus:ring-1 focus:ring-[#F97316] transition-colors duration-150"
            />
            {searchValue && (
              <button
                onClick={() => setSearchValue("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A3A3A3] hover:text-[#0A0A0A] transition-colors duration-150 focus-visible:outline-none"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results count + clear */}
        <div className="pb-3 flex items-center justify-between">
          <p
            className="text-xs text-[#737373]"
            aria-live="polite"
            aria-atomic="true"
          >
            Showing{" "}
            <span className="font-medium text-[#0A0A0A]">{filteredCount}</span>{" "}
            of{" "}
            <span className="font-medium text-[#0A0A0A]">{totalCount}</span>{" "}
            projects
          </p>
          {hasActiveFilters && (
            <button
              onClick={clearAll}
              className="inline-flex items-center gap-1 text-xs text-[#F97316] hover:text-[#EA580C] font-medium transition-colors duration-150 focus-visible:outline-none"
            >
              <SlidersHorizontal className="w-3 h-3" />
              Clear filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Public export — wraps in Suspense
   ========================================================= */

export function ProjectsFilterBar(props: ProjectsFilterBarInnerProps) {
  return (
    <Suspense
      fallback={
        <div
          className="sticky top-14 lg:top-16 z-40 bg-white border-b border-[#E5E5E5] h-[104px]"
          aria-hidden="true"
        />
      }
    >
      <ProjectsFilterBarInner {...props} />
    </Suspense>
  );
}

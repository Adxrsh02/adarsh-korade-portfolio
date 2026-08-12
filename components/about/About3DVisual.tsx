"use client";

import {
  Suspense,
  useState,
  useEffect,
  Component,
  type ReactNode,
} from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import { About3DFallback } from "@/components/about/About3DFallback";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Container } from "@/components/layout/Container";

/* ─────────────────────────────────────────────────────────
   Lazy-load — Three.js must NEVER run server-side.
───────────────────────────────────────────────────────── */
const About3DScene = dynamic(
  () =>
    import("@/components/about/About3DScene").then((mod) => ({
      default: mod.About3DScene,
    })),
  {
    ssr: false,
    loading: () => <About3DFallback />,
  }
);

/* ─────────────────────────────────────────────────────────
   Error boundary — catches WebGL crashes
───────────────────────────────────────────────────────── */
class SceneErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

/* ─────────────────────────────────────────────────────────
   WebGL detection
───────────────────────────────────────────────────────── */
function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

/**
 * About3DVisual
 * ─────────────
 * § 2 — Premium 3D visual anchor between Introduction and Journey.
 *
 * Renders the abstract humanoid intelligence robot on desktop (WebGL).
 * Falls back to SVG on mobile, reduced-motion, or no-WebGL devices.
 */
export function About3DVisual() {
  const [webGLAvailable, setWebGLAvailable] = useState<boolean | null>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  const canvasSize = isMobile
    ? "w-[260px] h-[300px]"
    : isTablet
      ? "w-[320px] h-[370px]"
      : "w-[380px] h-[440px]";

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", onChange);
    setWebGLAvailable(detectWebGL());
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const showFallback = isMobile || !webGLAvailable || prefersReduced;

  return (
    <SectionWrapper
      id="about-3d-visual"
      background="alt"
      className="py-12 md:py-16 lg:py-20"
    >
      <Container>
        <div className="flex flex-col items-center gap-4">
          {/* Subtle label above */}
          <p className="text-xs font-semibold uppercase tracking-widest text-[#A3A3A3]">
            Technology · Intelligence · Engineering
          </p>

          {/* 3D canvas or fallback */}
          <div
            aria-hidden="true"
            role="presentation"
            className={cn(
              "relative about-3d-container",
              canvasSize,
              webGLAvailable !== null && !showFallback
                ? "about-3d-enter"
                : ""
            )}
          >
            {webGLAvailable === null || showFallback ? (
              <About3DFallback className="w-full h-full" />
            ) : (
              <SceneErrorBoundary
                fallback={<About3DFallback className="w-full h-full" />}
              >
                <Suspense fallback={<About3DFallback className="w-full h-full" />}>
                  <About3DScene isMobile={isTablet} />
                </Suspense>
              </SceneErrorBoundary>
            )}
          </div>

          {/* Subtle caption */}
          <p className="text-xs text-[#A3A3A3] text-center max-w-xs">
            Designed to build. Engineered to last.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}

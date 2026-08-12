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
import { HeroFallback } from "@/components/hero/HeroFallback";
import { useMediaQuery } from "@/hooks/useMediaQuery";

/* ─────────────────────────────────────────────────────────
   Lazy-load the 3D scene — NEVER imported during SSR.
   Three.js must not run server-side.
───────────────────────────────────────────────────────── */
const Hero3DScene = dynamic(
  () =>
    import("@/components/hero/Hero3DScene").then((mod) => ({
      default: mod.Hero3DScene,
    })),
  {
    ssr: false,
    loading: () => <HeroFallback />,
  }
);

/* ─────────────────────────────────────────────────────────
   ErrorBoundary — catches WebGL crashes mid-render
───────────────────────────────────────────────────────── */
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class SceneErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

/* ─────────────────────────────────────────────────────────
   WebGL detection — runs once on mount
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

/* ─────────────────────────────────────────────────────────
   Main component
───────────────────────────────────────────────────────── */
interface HeroVisualProps {
  className?: string;
}

/**
 * HeroVisual
 * ──────────
 * Wrapper that selects between the 3D scene and the CSS fallback.
 *
 * Shows CSS fallback when:
 *   - WebGL is unavailable (hardware / browser restriction)
 *   - User prefers reduced motion
 *   - 3D rendering throws an error (ErrorBoundary)
 *
 * Fixes CLS: the container has explicit dimensions before the
 * canvas loads, so layout does not shift on hydration.
 *
 * Size:
 *   - Desktop: 420px × 420px (fixed, within a flexible grid cell)
 *   - Mobile:  280px × 280px (centered below text content)
 */
export function HeroVisual({ className }: HeroVisualProps) {
  const [webGLAvailable, setWebGLAvailable] = useState<boolean | null>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  // Determine visual size class
  const sizeClass = isMobile
    ? "w-[260px] h-[260px]"
    : isTablet
      ? "w-[310px] h-[310px]"
      : "w-[380px] h-[380px]";

  useEffect(() => {
    // Check reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", onChange);

    // Detect WebGL
    setWebGLAvailable(detectWebGL());

    return () => mq.removeEventListener("change", onChange);
  }, []);

  // During SSR / before hydration: render fallback (avoids hydration mismatch)
  if (webGLAvailable === null) {
    return (
      <div
        aria-hidden="true"
        role="presentation"
        className={cn(
          "hero-3d-enter relative flex items-center justify-center",
          sizeClass,
          className
        )}
      >
        <HeroFallback className="w-full h-full" />
      </div>
    );
  }

  // Static fallback: no WebGL or reduced motion
  const showFallback = !webGLAvailable || prefersReduced;

  if (showFallback) {
    return (
      <div
        aria-hidden="true"
        role="presentation"
        className={cn(
          "relative flex items-center justify-center",
          sizeClass,
          className
        )}
      >
        <HeroFallback className="w-full h-full" />
      </div>
    );
  }

  // 3D scene — lazy-loaded, error-bounded
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={cn(
        "hero-3d-enter relative hero-visual-container",
        sizeClass,
        className
      )}
    >
      <SceneErrorBoundary fallback={<HeroFallback className="w-full h-full" />}>
        <Suspense fallback={<HeroFallback className="w-full h-full" />}>
          <Hero3DScene isMobile={isMobile} />
        </Suspense>
      </SceneErrorBoundary>
    </div>
  );
}

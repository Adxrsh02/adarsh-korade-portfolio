"use client";

import { useRef, useEffect, useCallback } from "react";

export interface MouseParallaxResult {
  /** Ref to attach to the 3D group — rotation updated via RAF */
  groupRef: React.RefObject<{ rotation: { x: number; y: number } } | null>;
  /** Current normalized x (-1 to 1), useful for direct reads */
  normalizedX: React.RefObject<number>;
  /** Current normalized y (-1 to 1), useful for direct reads */
  normalizedY: React.RefObject<number>;
}

/**
 * useMouseParallax
 * ────────────────
 * Tracks mouse position and returns a ref that can be applied
 * to a Three.js Group for subtle parallax rotation.
 *
 * - Desktop-only: automatically disabled on coarse-pointer (touch) devices
 * - Smoothed via lerp (factor 0.05) inside the Three.js render loop
 * - Max rotation: ±0.08 radians (~4.5°) — extremely subtle
 * - Zero React re-renders — all updates are ref mutations
 *
 * Usage in HeroGeometry:
 *   const { normalizedX, normalizedY } = useMouseParallax();
 *   // In useFrame:
 *   groupRef.current.rotation.x = lerp(current.x, normalizedY.current * -0.08, 0.05)
 *   groupRef.current.rotation.y = lerp(current.y, normalizedX.current *  0.08, 0.05)
 */
export function useMouseParallax(): {
  normalizedX: React.RefObject<number>;
  normalizedY: React.RefObject<number>;
} {
  const normalizedX = useRef<number>(0);
  const normalizedY = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Normalize to -1..1 from viewport center
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;

    normalizedX.current = x;
    normalizedY.current = y;
  }, []);

  useEffect(() => {
    // Disable on touch/coarse-pointer devices
    if (typeof window === "undefined") return;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarsePointer) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return { normalizedX, normalizedY };
}

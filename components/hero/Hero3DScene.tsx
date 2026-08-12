"use client";

import { Canvas } from "@react-three/fiber";
import { HeroGeometry } from "@/components/hero/HeroGeometry";
import { HeroLighting } from "@/components/hero/HeroLighting";
import "@/lib/r3f-timer";

interface Hero3DSceneProps {
  /** Mobile: simplified geometry + reduced environment */
  isMobile?: boolean;
}

/**
 * Hero3DScene
 * ───────────
 * React Three Fiber Canvas hosting the Computational Data Core 3D visual.
 * Camera setup (fov: 35, position: [0, 0, 5.8]) guarantees ~25% frustum
 * safety margin around orbital rings, eliminating any risk of clipping.
 */
export function Hero3DScene({ isMobile = false }: Hero3DSceneProps) {
  return (
    <Canvas
      // Perspective camera — fov 35, position [0, 0, 5.8] provides 25% frustum breathing room
      camera={{ fov: 35, position: [0, 0, 5.8], near: 0.1, far: 100 }}
      // Transparent background blends with page background
      style={{ background: "transparent" }}
      // Cap DPR for GPU performance
      dpr={
        isMobile
          ? Math.min(
              typeof window !== "undefined" ? window.devicePixelRatio : 1,
              1.5
            )
          : Math.min(
              typeof window !== "undefined" ? window.devicePixelRatio : 2,
              2
            )
      }
      // GL settings with highp precision for WebGL shaders
      gl={{
        precision: "highp",
        antialias: !isMobile,
        alpha: true,
        powerPreference: "default",
        preserveDrawingBuffer: false,
        stencil: false,
        depth: true,
      }}
      // Continuous frameloop for smooth rotation & floating
      frameloop="always"
      shadows={false}
    >
      <HeroLighting isMobile={isMobile} />
      <HeroGeometry isMobile={isMobile} />
    </Canvas>
  );
}

"use client";

import { Canvas } from "@react-three/fiber";
import { About3DGeometry } from "@/components/about/About3DGeometry";
import { HeroLighting } from "@/components/hero/HeroLighting";
import "@/lib/r3f-timer";

interface About3DSceneProps {
  isMobile?: boolean;
}

/**
 * About3DScene
 * ────────────
 * React Three Fiber Canvas for the About page robot figure.
 * Uses THREE.Timer for animation loops and highp precision for WebGL shaders.
 */
export function About3DScene({ isMobile = false }: About3DSceneProps) {
  return (
    <Canvas
      camera={{ fov: 45, position: [0, 0.2, 4.2], near: 0.1, far: 100 }}
      style={{ background: "transparent" }}
      dpr={
        isMobile
          ? Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.5)
          : Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 2, 2)
      }
      gl={{
        precision: "highp",
        antialias: !isMobile,
        alpha: true,
        powerPreference: "default",
        preserveDrawingBuffer: false,
        stencil: false,
        depth: true,
      }}
      frameloop="always"
      shadows={false}
    >
      {/* Reuse Hero lighting — same quality standard */}
      <HeroLighting isMobile={isMobile} />
      <About3DGeometry isMobile={isMobile} />
    </Canvas>
  );
}

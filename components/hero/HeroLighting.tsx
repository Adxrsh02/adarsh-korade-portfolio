"use client";

import { Environment, ContactShadows } from "@react-three/drei";

interface HeroLightingProps {
  /** Reduce environment intensity on mobile for performance */
  isMobile?: boolean;
}

/**
 * HeroLighting
 * ────────────
 * Precision studio lighting for the Computational Data Core.
 *
 * Setup:
 *   - Ambient (0.4): soft neutral floor fill
 *   - Key directional (1.6): upper-right studio key creating clean facet shadows
 *   - Fill directional (0.45): left-front soft fill
 *   - Dual Rear Rim Lights (1.0 & 0.6): outlines ring edges & core geometry sharply against white
 *   - Orange accent point light (0.15): subtle warm cast under core
 *   - Tight Ground Contact Shadow: small footprint, soft falloff, zero clouding
 */
export function HeroLighting({ isMobile = false }: HeroLightingProps) {
  return (
    <>
      {/* Soft Ambient Fill */}
      <ambientLight intensity={0.4} color="#FAFAF8" />

      {/* Primary Key Light — upper-right-front */}
      <directionalLight
        position={[4, 5, 3]}
        intensity={1.6}
        color="#FFFFFF"
        castShadow={false}
      />

      {/* Soft Fill Light — left-front */}
      <directionalLight
        position={[-3, 0, 4]}
        intensity={0.45}
        color="#F0EFEC"
        castShadow={false}
      />

      {/* Dual Rear Rim Lights — outlines geometry sharply against white background */}
      <directionalLight
        position={[2, 1, -6]}
        intensity={1.0}
        color="#FFFFFF"
        castShadow={false}
      />
      <directionalLight
        position={[-3, 2, -5]}
        intensity={0.6}
        color="#F5F5F5"
        castShadow={false}
      />

      {/* Warm Orange Accent Rim Light */}
      <pointLight
        position={[0, -1, 2]}
        intensity={0.15}
        color="#F97316"
        distance={5}
        decay={2}
      />

      {/* Tight Ground Contact Shadow — localized, soft footprint */}
      <ContactShadows
        position={[0, -1.25, 0]}
        opacity={0.16}
        scale={2.4}
        blur={2.2}
        far={3.0}
        color="#262626"
      />

      {/* Studio Environment Map for Specular Highlights on Rings & Datum Collar */}
      <Environment
        preset="studio"
        environmentIntensity={isMobile ? 0.25 : 0.45}
      />
    </>
  );
}

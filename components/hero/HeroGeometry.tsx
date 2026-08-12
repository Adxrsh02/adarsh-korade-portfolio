"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMouseParallax } from "@/hooks/useMouseParallax";

interface HeroGeometryProps {
  /** Render simplified scene on mobile for performance */
  isMobile?: boolean;
}

/** Linear interpolation helper */
function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * HeroGeometry — Precision Computational Data Core
 * ───────────────────────────────────────────────
 * Sleek, engineered 3D technology visual representing AI & Data Systems Architecture.
 *
 * Structure:
 *   1. Central Core: Smooth ceramic-lustre sphere with equatorial metallic datum collar
 *   2. Axis Frame: 3 clean, orthogonal datum rings (X, Y, Z axes) enclosing the core
 *   3. Concentric Data Pathways: Two precision orbital torus rings with 25% frustum safety margin
 *   4. Satellite Data Endpoints: 4 essential nodes (including 1 warm orange accent node)
 */
export function HeroGeometry({ isMobile = false }: HeroGeometryProps) {
  const mainGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Group>(null);
  const axisFrameRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Group>(null);
  const ring2Ref = useRef<THREE.Group>(null);

  // Modern THREE.Timer for animation delta & elapsed time
  const timerRef = useRef<THREE.Timer | null>(null);
  if (!timerRef.current && typeof window !== "undefined") {
    timerRef.current = new THREE.Timer();
  }

  const { normalizedX, normalizedY } = useMouseParallax();

  // Smooth lerp tracking for mouse parallax
  const currentRotX = useRef(0);
  const currentRotY = useRef(0);

  /* ── Materials System ── */

  // 1. Central Core: Smooth Ceramic Ivory Surface
  const coreMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#F7F7F5"),
        roughness: 0.35,
        metalness: 0.08,
        envMapIntensity: 0.7,
      }),
    []
  );

  // 2. Equatorial Datum Collar: Matte Graphite Metal
  const collarMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#505050"),
        roughness: 0.45,
        metalness: 0.6,
        envMapIntensity: 0.9,
      }),
    []
  );

  // 3. Axis Frame Rings: Thin Neutral Graphite Wire
  const axisFrameMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#6B6B6B"),
        roughness: 0.6,
        metalness: 0.3,
        transparent: true,
        opacity: 0.45,
      }),
    []
  );

  // 4. Primary Orbital Ring
  const ring1Material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#8A8A8A"),
        roughness: 0.48,
        metalness: 0.35,
        envMapIntensity: 0.8,
      }),
    []
  );

  // 5. Secondary Orbital Ring
  const ring2Material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#A3A3A3"),
        roughness: 0.52,
        metalness: 0.25,
        envMapIntensity: 0.6,
      }),
    []
  );

  // 6. White Satellite Node
  const whiteNodeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#EBEBEB"),
        roughness: 0.38,
        metalness: 0.15,
      }),
    []
  );

  // 7. Warm Orange Accent Node (The Live Data Endpoint)
  const orangeNodeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#F97316"),
        roughness: 0.28,
        metalness: 0.2,
        envMapIntensity: 0.9,
      }),
    []
  );

  // 8. Graphite Primary Node
  const graphiteNodeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#525252"),
        roughness: 0.45,
        metalness: 0.3,
      }),
    []
  );

  /* ── Geometries ── */

  // Central Core Sphere: r = 0.42
  const coreGeometry = useMemo(() => new THREE.SphereGeometry(0.42, 32, 32), []);

  // Equatorial Datum Collar Torus: r = 0.56, tube = 0.018
  const collarGeometry = useMemo(
    () => new THREE.TorusGeometry(0.56, 0.018, 16, 64),
    []
  );

  // Axis Frame Datum Rings: r = 0.85, tube = 0.008
  const axisRingGeometry = useMemo(
    () => new THREE.TorusGeometry(0.85, 0.008, 16, 64),
    []
  );

  // Orbital Ring 1: r = 1.15, tube = 0.014
  const ring1Geometry = useMemo(
    () => new THREE.TorusGeometry(1.15, 0.014, 16, 64),
    []
  );

  // Orbital Ring 2: r = 1.38, tube = 0.010
  const ring2Geometry = useMemo(
    () => new THREE.TorusGeometry(1.38, 0.010, 16, 64),
    []
  );

  // Satellite Node Spheres
  const nodeGeometry = useMemo(() => new THREE.SphereGeometry(0.038, 16, 16), []);
  const accentNodeGeometry = useMemo(() => new THREE.SphereGeometry(0.048, 16, 16), []);

  /* ── Satellite Data Node Positions on Orbital Rings ── */

  const ring1Nodes = useMemo(
    () => [
      { angle: Math.PI * 0.45, mat: orangeNodeMaterial, isAccent: true }, // Orange accent node
      { angle: Math.PI * 1.35, mat: whiteNodeMaterial, isAccent: false },
    ],
    [orangeNodeMaterial, whiteNodeMaterial]
  );

  const ring2Nodes = useMemo(
    () => [
      { angle: Math.PI * 0.25, mat: whiteNodeMaterial },
      { angle: Math.PI * 1.1, mat: graphiteNodeMaterial },
    ],
    [whiteNodeMaterial, graphiteNodeMaterial]
  );

  /* ── Animation Loop ── */

  useFrame(() => {
    if (!timerRef.current || !mainGroupRef.current) return;

    timerRef.current.update();
    const elapsed = timerRef.current.getElapsed();

    // 1. Core & Collar Rotation
    if (coreRef.current) {
      coreRef.current.rotation.y += 0.0006;
      coreRef.current.rotation.x += 0.0002;
    }

    // 2. Axis Frame Counter-Drift
    if (axisFrameRef.current) {
      axisFrameRef.current.rotation.y -= 0.0004;
      axisFrameRef.current.rotation.z += 0.0003;
    }

    // 3. Ring 1 Rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.0010;
    }

    // 4. Ring 2 Counter-Rotation
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= 0.0008;
    }

    // 5. Gentle Vertical Sine Float
    mainGroupRef.current.position.y = Math.sin(elapsed * 0.3) * 0.035;

    // 6. Desktop Mouse Parallax (capped at ±0.035 rad)
    const targetRotX = normalizedY.current * -0.035;
    const targetRotY = normalizedX.current * 0.035;

    currentRotX.current = lerp(currentRotX.current, targetRotX, 0.035);
    currentRotY.current = lerp(currentRotY.current, targetRotY, 0.035);

    mainGroupRef.current.rotation.x = 0.18 + currentRotX.current;
    mainGroupRef.current.rotation.y = currentRotY.current;
  });

  return (
    <group ref={mainGroupRef} position={[0, 0, 0]} rotation={[0.18, 0, 0]}>
      {/* 1. Central Core — Ceramic Sphere + Equatorial Datum Collar */}
      <group ref={coreRef}>
        <mesh geometry={coreGeometry} material={coreMaterial} castShadow receiveShadow />
        <mesh
          geometry={collarGeometry}
          material={collarMaterial}
          rotation={[Math.PI * 0.5, 0, 0]}
        />
      </group>

      {/* 2. Axis Frame — 3 Clean Orthogonal Axis Datum Rings */}
      <group ref={axisFrameRef}>
        <mesh geometry={axisRingGeometry} material={axisFrameMaterial} />
        <mesh
          geometry={axisRingGeometry}
          material={axisFrameMaterial}
          rotation={[Math.PI * 0.5, 0, 0]}
        />
        <mesh
          geometry={axisRingGeometry}
          material={axisFrameMaterial}
          rotation={[0, Math.PI * 0.5, 0]}
        />
      </group>

      {/* 3. Primary Orbital Ring — Tilted 32° on X */}
      <group ref={ring1Ref} rotation={[Math.PI * 0.18, 0, 0]}>
        <mesh geometry={ring1Geometry} material={ring1Material} castShadow />

        {/* Ring 1 Satellite Data Nodes */}
        {ring1Nodes.map((node, i) => {
          const r = 1.15;
          const x = Math.cos(node.angle) * r;
          const y = Math.sin(node.angle) * r;
          return (
            <mesh
              key={`r1-node-${i}`}
              position={[x, y, 0]}
              geometry={node.isAccent ? accentNodeGeometry : nodeGeometry}
              material={node.mat}
            />
          );
        })}
      </group>

      {/* 4. Secondary Orbital Ring — Tilted -42° on X, 20° on Y */}
      <group ref={ring2Ref} rotation={[-Math.PI * 0.23, Math.PI * 0.11, 0]}>
        <mesh geometry={ring2Geometry} material={ring2Material} castShadow />

        {/* Ring 2 Satellite Data Nodes */}
        {ring2Nodes.map((node, i) => {
          const r = 1.38;
          const x = Math.cos(node.angle) * r;
          const y = Math.sin(node.angle) * r;
          return (
            <mesh
              key={`r2-node-${i}`}
              position={[x, y, 0]}
              geometry={nodeGeometry}
              material={node.mat}
            />
          );
        })}
      </group>
    </group>
  );
}

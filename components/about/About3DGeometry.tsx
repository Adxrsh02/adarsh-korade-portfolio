"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMouseParallax } from "@/hooks/useMouseParallax";

interface About3DGeometryProps {
  isMobile?: boolean;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * About3DGeometry
 * ───────────────
 * Abstract humanoid/robotic intelligence figure.
 * Uses THREE.Timer for modern, non-deprecated frame timing.
 */
export function About3DGeometry({ isMobile = false }: About3DGeometryProps) {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);

  // Modern THREE.Timer instance for animation loop
  const timerRef = useRef<THREE.Timer | null>(null);
  if (!timerRef.current && typeof window !== "undefined") {
    timerRef.current = new THREE.Timer();
  }

  const { normalizedX, normalizedY } = useMouseParallax();
  const currentRotX = useRef(0);
  const currentRotY = useRef(0);

  /* ── Materials ── */

  const ceramicMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#F0F0EB"),
        roughness: 0.82,
        metalness: 0.10,
        envMapIntensity: 0.5,
      }),
    []
  );

  const titaniumMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#C8C8C8"),
        roughness: 0.30,
        metalness: 0.65,
        envMapIntensity: 0.8,
      }),
    []
  );

  const visorMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#D4D4D4"),
        roughness: 0.18,
        metalness: 0.60,
        envMapIntensity: 0.9,
      }),
    []
  );

  const accentMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#F97316"),
        roughness: 0.45,
        metalness: 0.25,
        envMapIntensity: 0.4,
      }),
    []
  );

  const graySatelliteMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#B8B8B8"),
        roughness: 0.50,
        metalness: 0.30,
        envMapIntensity: 0.3,
      }),
    []
  );

  /* ── Geometries ── */

  // Head — slightly elongated sphere
  const headGeometry = useMemo(
    () => new THREE.SphereGeometry(0.52, isMobile ? 24 : 40, isMobile ? 18 : 32),
    [isMobile]
  );

  // Visor — thin flat box
  const visorGeometry = useMemo(
    () => new THREE.BoxGeometry(0.70, 0.24, 0.08),
    []
  );

  // Neck — cylinder
  const neckGeometry = useMemo(
    () => new THREE.CylinderGeometry(0.14, 0.18, 0.28, isMobile ? 8 : 16),
    [isMobile]
  );

  // Torso — rounded box via scaled sphere or box
  const torsoGeometry = useMemo(
    () => new THREE.BoxGeometry(0.80, 0.85, 0.44),
    []
  );

  // Shoulder accents
  const shoulderGeometry = useMemo(
    () => new THREE.SphereGeometry(0.11, 12, 12),
    []
  );

  // Orbital ring
  const ringGeometry = useMemo(
    () => new THREE.TorusGeometry(1.15, 0.013, 14, isMobile ? 64 : 90),
    [isMobile]
  );

  // Satellite sphere
  const satelliteGeometry = useMemo(
    () => new THREE.SphereGeometry(0.045, 10, 10),
    []
  );

  /* ── Satellite positions ── */

  const satellites = useMemo(() => {
    const count = isMobile ? 2 : 4;
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 1.15;
      const isAccent = i === 0 || i === 2;
      return {
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * 0.25,
          Math.sin(angle) * radius * 0.4,
        ] as [number, number, number],
        isAccent,
      };
    });
  }, [isMobile]);

  /* ── Animation (using THREE.Timer) ── */

  useFrame(() => {
    if (!timerRef.current || !groupRef.current) return;

    timerRef.current.update();
    const elapsed = timerRef.current.getElapsed();

    // Slow Y rotation
    groupRef.current.rotation.y += 0.001;

    // Gentle vertical float
    groupRef.current.position.y = Math.sin(elapsed * 0.3) * 0.06;

    // Breathing scale
    const breathScale = 1 + Math.sin(elapsed * 0.45) * 0.008;
    groupRef.current.scale.setScalar(breathScale);

    // Mouse parallax — very subtle
    const targetRotX = normalizedY.current * -0.06;
    const targetRotY = normalizedX.current * 0.06;

    currentRotX.current = lerp(currentRotX.current, targetRotX, 0.03);
    currentRotY.current = lerp(currentRotY.current, targetRotY, 0.03);

    groupRef.current.rotation.x = currentRotX.current;

    // Ring counter-rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Orbital ring */}
      <mesh
        ref={ring1Ref}
        geometry={ringGeometry}
        material={titaniumMaterial}
        rotation={[Math.PI * 0.15, 0, Math.PI * 0.06]}
      />

      {/* Satellites */}
      {satellites.map((sat, i) => (
        <mesh
          key={i}
          geometry={satelliteGeometry}
          material={sat.isAccent ? accentMaterial : graySatelliteMaterial}
          position={sat.position}
        />
      ))}

      {/* Head */}
      <mesh
        geometry={headGeometry}
        material={ceramicMaterial}
        position={[0, 0.82, 0]}
        scale={[1, 1.18, 1]}
      />

      {/* Visor */}
      <mesh
        geometry={visorGeometry}
        material={visorMaterial}
        position={[0, 0.84, 0.42]}
      />

      {/* Neck */}
      <mesh
        geometry={neckGeometry}
        material={titaniumMaterial}
        position={[0, 0.22, 0]}
      />

      {/* Torso */}
      <mesh
        geometry={torsoGeometry}
        material={ceramicMaterial}
        position={[0, -0.30, 0]}
        scale={[1, 1, 0.92]}
      />

      {/* Shoulder left */}
      <mesh
        geometry={shoulderGeometry}
        material={titaniumMaterial}
        position={[-0.50, -0.02, 0]}
      />

      {/* Shoulder right */}
      <mesh
        geometry={shoulderGeometry}
        material={titaniumMaterial}
        position={[0.50, -0.02, 0]}
      />

      {/* Accent stripe on torso (small box) */}
      <mesh position={[0, -0.68, 0.22]}>
        <boxGeometry args={[0.48, 0.04, 0.02]} />
        <meshStandardMaterial
          color={new THREE.Color("#F97316")}
          roughness={0.4}
          metalness={0.2}
          opacity={0.6}
          transparent
        />
      </mesh>
    </group>
  );
}

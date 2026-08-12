import { cn } from "@/lib/utils";

interface HeroFallbackProps {
  className?: string;
}

/**
 * HeroFallback
 * ────────────
 * Pure CSS/SVG decorative visual shown when:
 *   - WebGL is unavailable
 *   - prefers-reduced-motion is enabled
 *   - 3D rendering fails (ErrorBoundary catch)
 *
 * Renders a sleek architectural SVG illustration of the Computational Data Core:
 * smooth ceramic core, metallic datum collar, 3 axis frame rings, concentric orbital pathways,
 * and satellite data nodes.
 */
export function HeroFallback({ className }: HeroFallbackProps) {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={cn(
        "relative flex items-center justify-center",
        "w-full h-full select-none",
        className
      )}
    >
      {/* Outer ambient glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(249,115,22,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Precision Computational Data Core SVG Graphic */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[380px] max-h-[380px]"
      >
        {/* Outer Orbital Ring 2 */}
        <ellipse
          cx="200"
          cy="200"
          rx="138"
          ry="52"
          stroke="#A3A3A3"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          transform="rotate(-23 200 200)"
          opacity="0.7"
        />

        {/* Inner Orbital Ring 1 */}
        <ellipse
          cx="200"
          cy="200"
          rx="115"
          ry="42"
          stroke="#8A8A8A"
          strokeWidth="2"
          transform="rotate(32 200 200)"
          opacity="0.85"
        />

        {/* 3 Orthogonal Axis Frame Rings */}
        <ellipse
          cx="200"
          cy="200"
          rx="85"
          ry="85"
          stroke="#6B6B6B"
          strokeWidth="1"
          opacity="0.45"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="85"
          ry="30"
          stroke="#6B6B6B"
          strokeWidth="1"
          opacity="0.35"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="30"
          ry="85"
          stroke="#6B6B6B"
          strokeWidth="1"
          opacity="0.35"
        />

        {/* Central Core — Smooth Ceramic Sphere */}
        <circle cx="200" cy="200" r="42" fill="url(#core-gradient)" stroke="#E5E5E0" strokeWidth="1" />

        {/* Core Equatorial Metallic Datum Collar */}
        <ellipse
          cx="200"
          cy="200"
          rx="56"
          ry="14"
          stroke="#505050"
          strokeWidth="2.5"
          fill="none"
        />

        {/* Satellite Data Nodes */}
        {/* Ring 1 Nodes */}
        <circle cx="288" cy="148" r="4.5" fill="#F97316" />
        <circle cx="288" cy="148" r="8" stroke="#F97316" strokeWidth="1" opacity="0.4" />
        <circle cx="112" cy="252" r="4" fill="#EBEBEB" stroke="#8A8A8A" strokeWidth="1" />

        {/* Ring 2 Nodes */}
        <circle cx="95" cy="155" r="4" fill="#EBEBEB" stroke="#A3A3A3" strokeWidth="1" />
        <circle cx="305" cy="245" r="4" fill="#525252" />

        {/* Gradients */}
        <defs>
          <radialGradient id="core-gradient" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F7F7F5" />
            <stop offset="100%" stopColor="#EAEAE5" />
          </radialGradient>
        </defs>
      </svg>

      {/* Tight Ground Contact Shadow */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        style={{
          width: "30%",
          height: "10px",
          background:
            "radial-gradient(ellipse, rgba(0,0,0,0.06) 0%, transparent 70%)",
          filter: "blur(4px)",
        }}
      />
    </div>
  );
}

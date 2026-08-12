import { cn } from "@/lib/utils";

interface About3DFallbackProps {
  className?: string;
}

/**
 * About3DFallback
 * ───────────────
 * Premium SVG/CSS fallback shown when:
 *   - WebGL is unavailable
 *   - prefers-reduced-motion is enabled
 *   - 3D rendering fails
 *   - Mobile device
 *
 * Represents an abstract humanoid intelligence figure
 * using layered SVG geometry — consistent with the
 * premium white + orange accent design system.
 */
export function About3DFallback({ className }: About3DFallbackProps) {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      className={cn(
        "relative flex items-center justify-center w-full h-full select-none",
        className
      )}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(249,115,22,0.04) 0%, transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 360 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[360px] max-h-[420px]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="ab-head-grad" cx="38%" cy="30%" r="62%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="45%" stopColor="#F5F5F0" />
            <stop offset="100%" stopColor="#E0E0DC" />
          </radialGradient>
          <radialGradient id="ab-torso-grad" cx="40%" cy="35%" r="60%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#FAFAFA" />
            <stop offset="50%" stopColor="#F0F0EB" />
            <stop offset="100%" stopColor="#DCDCD7" />
          </radialGradient>
          <radialGradient id="ab-visor-grad" cx="35%" cy="30%" r="65%" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#E8E8E8" />
            <stop offset="100%" stopColor="#C0C0C0" />
          </radialGradient>
          <filter id="ab-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.06" />
          </filter>
        </defs>

        {/* ── Outer orbital ring ── */}
        <ellipse
          cx="180" cy="210"
          rx="155" ry="52"
          stroke="#D4D4D4" strokeWidth="1"
          transform="rotate(-18 180 210)"
          opacity="0.65"
        />

        {/* ── Second orbital ring ── */}
        <ellipse
          cx="180" cy="210"
          rx="128" ry="40"
          stroke="#E5E5E5" strokeWidth="0.8"
          transform="rotate(30 180 210)"
          opacity="0.45"
        />

        {/* ── Torso ── */}
        <rect
          x="136" y="268" width="88" height="100"
          rx="18"
          fill="url(#ab-torso-grad)"
          stroke="#E0E0DC" strokeWidth="1"
          filter="url(#ab-shadow)"
        />

        {/* ── Neck ── */}
        <rect
          x="166" y="252" width="28" height="22"
          rx="8"
          fill="#D0D0CB"
          stroke="#C4C4C0" strokeWidth="0.8"
        />

        {/* ── Shoulder accents ── */}
        <circle cx="132" cy="285" r="10" fill="#C8C8C8" stroke="#BABAB6" strokeWidth="0.8" />
        <circle cx="228" cy="285" r="10" fill="#C8C8C8" stroke="#BABAB6" strokeWidth="0.8" />

        {/* ── Head ── */}
        <ellipse
          cx="180" cy="210"
          rx="58" ry="65"
          fill="url(#ab-head-grad)"
          stroke="#E5E5E0" strokeWidth="1"
          filter="url(#ab-shadow)"
        />

        {/* ── Visor / Face plate ── */}
        <rect
          x="152" y="196" width="56" height="28"
          rx="10"
          fill="url(#ab-visor-grad)"
          stroke="#C8C8C8" strokeWidth="0.8"
          opacity="0.9"
        />

        {/* Visor inner glow line */}
        <rect
          x="158" y="201" width="44" height="2"
          rx="1"
          fill="white" opacity="0.6"
        />

        {/* ── Satellite spheres ── */}
        <circle cx="180" cy="133" r="5.5" fill="#F97316" opacity="0.8" />
        <circle cx="340" cy="255" r="4.5" fill="#D4D4D4" opacity="0.65" />
        <circle cx="22" cy="255" r="4" fill="#D4D4D4" opacity="0.55" />
        <circle cx="305" cy="155" r="3.5" fill="#F97316" opacity="0.5" />
        <circle cx="58" cy="152" r="3" fill="#D4D4D4" opacity="0.5" />

        {/* ── Connection lines (neural motif) ── */}
        <line x1="180" y1="138" x2="180" y2="145" stroke="#E5E5E5" strokeWidth="0.8" opacity="0.5" strokeDasharray="3 4" />
        <line x1="335" y1="253" x2="308" y2="242" stroke="#E5E5E5" strokeWidth="0.8" opacity="0.4" strokeDasharray="3 4" />
        <line x1="27" y1="253" x2="52" y2="242" stroke="#E5E5E5" strokeWidth="0.8" opacity="0.4" strokeDasharray="3 4" />

        {/* ── Bottom accent bar on torso ── */}
        <rect x="152" y="340" width="56" height="4" rx="2" fill="#F97316" opacity="0.3" />

        {/* ── Ground shadow ── */}
        <ellipse cx="180" cy="378" rx="52" ry="8" fill="#000000" opacity="0.05" />
      </svg>
    </div>
  );
}

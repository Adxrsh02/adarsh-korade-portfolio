import { CONTACT_INFO_ITEMS, CONTACT_COPY } from "@/lib/contact-data";
import { ContactInfoCard } from "./ContactInfoCard";

/* =========================================================
   AvailabilityBadge
   Green pulsing dot + "Available for new projects" text.
   Server-rendered — animation is pure CSS.
   ========================================================= */

export function AvailabilityBadge() {
  return (
    <div className="flex items-center gap-2.5">
      {/* Pulsing dot */}
      <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
      </span>
      <span className="text-sm text-[#525252]">
        {CONTACT_COPY.sidebar.availability}
      </span>
    </div>
  );
}

/* =========================================================
   ContactInfoSidebar
   "Other Ways to Reach Me" — stacked contact cards
   + availability badge + response time.
   ========================================================= */

export function ContactInfoSidebar() {
  return (
    <aside
      aria-label="Contact information"
      className="flex flex-col gap-6"
    >
      {/* Heading */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-[#EA580C] mb-2">
          {CONTACT_COPY.sidebar.heading}
        </p>
        <div
          className="h-px bg-[#E5E5E5]"
          role="separator"
          aria-hidden="true"
        />
      </div>

      {/* Contact cards */}
      <div className="flex flex-col gap-2.5">
        {CONTACT_INFO_ITEMS.map((item) => (
          <ContactInfoCard key={item.id} item={item} />
        ))}
      </div>

      {/* Divider */}
      <div
        className="h-px bg-[#E5E5E5]"
        role="separator"
        aria-hidden="true"
      />

      {/* Availability + response time */}
      <div className="flex flex-col gap-2">
        <AvailabilityBadge />
        <p className="text-xs text-[#A3A3A3] pl-5">
          {CONTACT_COPY.sidebar.responseTime}
        </p>
      </div>

      {/* Personal note */}
      <blockquote className="border-l-2 border-[#F97316] pl-4">
        <p className="text-sm text-[#525252] italic leading-relaxed">
          "I read every message personally and reply as quickly as I can. No
          bots, no auto-replies — just me."
        </p>
        <footer className="mt-2 text-xs font-medium text-[#A3A3A3]">
          — Adarsh Korade
        </footer>
      </blockquote>
    </aside>
  );
}

"use client";

import { useRef } from "react";
import Image from "next/image";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

interface CertificateLightboxProps {
  imageSrc: string;
  imageAlt: string;
  certName: string;
  onClose: () => void;
}

/**
 * CertificateLightbox
 * ───────────────────
 * Modal overlay for viewing image-based certificates.
 * - Focus trap (tab cycles within modal)
 * - Body scroll lock
 * - Escape key to close (handled via useFocusTrap onEscape callback)
 * - Click outside overlay to close
 */
export function CertificateLightbox({
  imageSrc,
  imageAlt,
  certName,
  onClose,
}: CertificateLightboxProps) {
  // useFocusTrap returns a ref; Escape is handled via onEscape callback
  const dialogRef = useFocusTrap(true, onClose);

  useLockBodyScroll(true);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 lightbox-overlay"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate: ${certName}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef as React.RefObject<HTMLDivElement>}
        className="relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl lightbox-image max-w-3xl w-full max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E5E5]">
          <h2 className="text-sm font-semibold text-[#0A0A0A] truncate">{certName}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-[#737373] hover:text-[#0A0A0A] hover:bg-[#F5F5F5] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
            aria-label="Close certificate preview"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <div className="relative flex-1 min-h-0 overflow-auto bg-[#F5F5F5]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={900}
            height={640}
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>
      </div>
    </div>
  );
}

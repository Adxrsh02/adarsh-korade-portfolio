"use client";

import { useEffect, useRef } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ToastData } from "@/types/contact";

/* =========================================================
   Toast
   Premium success/error notification.
   Renders in a portal-like fixed position bottom-right.
   Auto-dismisses after 5 seconds.
   ========================================================= */

interface ToastProps {
  toast: ToastData | null;
  onDismiss: () => void;
}

export function Toast({ toast, onDismiss }: ToastProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!toast) return;

    // Auto-dismiss after 5 seconds
    timerRef.current = setTimeout(onDismiss, 5000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [toast, onDismiss]);

  if (!toast) return null;

  const isSuccess = toast.type === "success";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={cn(
        "fixed bottom-6 right-4 sm:right-6 z-[100]",
        "flex items-start gap-3",
        "max-w-[360px] w-[calc(100vw-2rem)] sm:w-auto",
        "rounded-xl border shadow-xl",
        "px-4 py-3.5",
        "animate-toast-enter",
        isSuccess
          ? "bg-white border-green-200 text-green-800"
          : "bg-white border-red-200 text-red-800"
      )}
    >
      {/* Icon */}
      <span className="shrink-0 mt-0.5">
        {isSuccess ? (
          <CheckCircle
            className="w-5 h-5 text-green-500"
            aria-hidden="true"
          />
        ) : (
          <XCircle className="w-5 h-5 text-red-500" aria-hidden="true" />
        )}
      </span>

      {/* Message */}
      <p className="text-sm font-medium leading-snug flex-1">{toast.message}</p>

      {/* Dismiss */}
      <button
        onClick={onDismiss}
        aria-label="Dismiss notification"
        className={cn(
          "shrink-0 -mt-0.5 -mr-1 p-1 rounded-md",
          "transition-colors duration-150",
          isSuccess
            ? "hover:bg-green-50 text-green-600"
            : "hover:bg-red-50 text-red-600"
        )}
      >
        <X className="w-4 h-4" aria-hidden="true" />
      </button>
    </div>
  );
}

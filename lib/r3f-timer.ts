/**
 * initThreeTimer
 * ──────────────
 * Filters out deprecated THREE.Clock console warnings triggered by React Three Fiber internals.
 * Actual animation loops use the modern THREE.Timer API.
 */
let isPatched = false;

export function initThreeTimer() {
  if (typeof window === "undefined" || isPatched) return;
  isPatched = true;

  const originalWarn = console.warn;
  console.warn = (...args: any[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("THREE.Clock: This module has been deprecated")
    ) {
      return;
    }
    originalWarn.apply(console, args);
  };
}

// Auto-initialize when imported client-side
if (typeof window !== "undefined") {
  initThreeTimer();
}

import { useState, useEffect } from "react";

/**
 * useDebounce
 * ───────────
 * Returns a debounced version of the provided value.
 * The returned value only updates after the specified delay
 * has elapsed since the last change.
 *
 * Used primarily for search inputs to avoid firing on every keystroke.
 *
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds (default: 200)
 */
export function useDebounce<T>(value: T, delay: number = 200): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

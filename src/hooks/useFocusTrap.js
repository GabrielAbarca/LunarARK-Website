import { useEffect } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

// Keeps keyboard focus inside `containerRef` while `isActive` is true by
// wrapping Tab / Shift+Tab around the container's focusable elements.
export default function useFocusTrap(containerRef, isActive) {
  useEffect(() => {
    if (!isActive) return;
    const container = containerRef.current;
    if (!container) return;

    const handleKeyDown = (event) => {
      if (event.key !== "Tab") return;

      const focusable = container.querySelectorAll(FOCUSABLE_SELECTOR);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement;

      if (event.shiftKey) {
        if (active === first || !container.contains(active)) {
          event.preventDefault();
          last.focus();
        }
      } else if (active === last || !container.contains(active)) {
        event.preventDefault();
        first.focus();
      }
    };

    container.addEventListener("keydown", handleKeyDown);
    return () => container.removeEventListener("keydown", handleKeyDown);
  }, [containerRef, isActive]);
}

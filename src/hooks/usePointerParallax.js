import { useEffect, useRef } from "react";
import { useReducedMotion } from "./useReducedMotion";

/**
 * Attaches a lightweight pointer-parallax effect to a ref'd element using
 * plain CSS custom properties (--rx / --ry / --tx / --ty) so the element's
 * own stylesheet controls the visual result. No-ops on touch devices and
 * when the user prefers reduced motion.
 */
export function usePointerParallax({ strength = 10 } = {}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = null;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;

      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--ry", `${px * strength}deg`);
        el.style.setProperty("--rx", `${-py * strength}deg`);
        el.style.setProperty("--tx", `${px * strength * 1.4}px`);
        el.style.setProperty("--ty", `${py * strength * 1.4}px`);
      });
    };

    const handleLeave = () => {
      el.style.setProperty("--ry", `0deg`);
      el.style.setProperty("--rx", `0deg`);
      el.style.setProperty("--tx", `0px`);
      el.style.setProperty("--ty", `0px`);
    };

    const parent = el.closest("[data-parallax-zone]") || el;
    parent.addEventListener("pointermove", handleMove);
    parent.addEventListener("pointerleave", handleLeave);

    return () => {
      parent.removeEventListener("pointermove", handleMove);
      parent.removeEventListener("pointerleave", handleLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [reduced, strength]);

  return ref;
}

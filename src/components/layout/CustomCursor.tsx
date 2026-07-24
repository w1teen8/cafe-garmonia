"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  // Starts false on both server and client to avoid a hydration mismatch;
  // flipped to the real value after mount once `window` is safe to read.
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const sx = useSpring(x, springConfig);
  const sy = useSpring(y, springConfig);

  useEffect(() => {
    const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only capability detection, must happen post-mount to avoid SSR/CSR mismatch
    setEnabled(isFine);
    if (!isFine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const isInteractive = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false;
      return !!el.closest(
        'a, button, [data-cursor="magnetic"], [data-cursor="hover"], input, textarea, select'
      );
    };

    const over = (e: MouseEvent) => setHovering(isInteractive(e.target));

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999] mix-blend-normal"
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
    >
      <div
        className="-translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height] duration-300 ease-out"
        style={{
          width: hovering ? 64 : 14,
          height: hovering ? 64 : 14,
          background: hovering
            ? "radial-gradient(circle, rgba(197,162,109,0.28) 0%, rgba(197,162,109,0.08) 60%, transparent 80%)"
            : "#c5a26d",
          boxShadow: hovering
            ? "0 0 40px 10px rgba(197,162,109,0.22)"
            : "0 0 16px 4px rgba(197,162,109,0.35)",
        }}
      />
    </motion.div>
  );
}

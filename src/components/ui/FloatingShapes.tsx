"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FloatingShapes({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      <motion.div
        className="absolute -left-24 top-10 h-72 w-72 rounded-full opacity-50 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(216,196,167,0.55) 0%, transparent 72%)",
        }}
        animate={{ y: [0, 30, 0], x: [0, 18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-96 w-96 rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(197,162,109,0.5) 0%, transparent 72%)",
        }}
        animate={{ y: [0, -40, 0], x: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(122,90,67,0.45) 0%, transparent 72%)",
        }}
        animate={{ y: [0, 24, 0], x: [0, -16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function GrainOverlay() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[1] h-full w-full opacity-[0.035]"
    >
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}

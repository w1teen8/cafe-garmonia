"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const duration = 1900;

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center overflow-hidden bg-bg"
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-1/4 top-1/3 h-[60vh] w-[60vh] rounded-full opacity-40 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(197,162,109,0.5) 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-1/4 bottom-1/4 h-[50vh] w-[50vh] rounded-full opacity-30 blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(122,90,67,0.45) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="relative flex flex-col items-center gap-6"
          >
            <span className="font-display text-4xl italic tracking-wide text-primary md:text-5xl">
              Гармонія
            </span>
            <div className="h-px w-40 overflow-hidden bg-border md:w-56">
              <motion.div
                className="h-full bg-gold"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="eyebrow tabular-nums">{progress}%</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { motion } from "framer-motion";

export default function MobileStickyCTA({ onReserve }: { onReserve: () => void }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="fixed inset-x-4 bottom-4 z-[75] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <button
        onClick={onReserve}
        className="glass flex w-full items-center justify-center rounded-full bg-primary/95 py-4 text-sm font-medium tracking-wide text-bg shadow-[0_12px_30px_rgba(44,40,38,0.25)]"
      >
        Забронювати столик
      </button>
    </motion.div>
  );
}

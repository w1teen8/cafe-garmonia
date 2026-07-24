"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import reviewsData from "@/data/reviews.json";
import type { ReviewItem } from "@/lib/types";
import { cn } from "@/lib/utils";

const reviews = reviewsData as ReviewItem[];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(t);
  }, [paused]);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + reviews.length) % reviews.length);
  };

  const current = reviews[index];

  return (
    <section id="reviews" className="relative overflow-hidden bg-bg-alt py-28 md:py-36">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Відгуки"
          title="Що кажуть наші гості"
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div
          className="relative mx-auto mt-16 max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote size={64} className="mx-auto mb-4 text-gold/40" strokeWidth={1} />

          <div className="relative min-h-[260px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: 40 * direction }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 * direction }}
                transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
                className="glass absolute inset-x-0 top-0 flex flex-col items-center gap-6 rounded-brand p-10 text-center md:p-14"
              >
                <div className="flex gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display text-xl italic leading-relaxed text-primary md:text-2xl">
                  &quot;{current.text}&quot;
                </p>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-sm font-semibold text-primary">{current.name}</span>
                  <span className="text-xs text-secondary">
                    {current.role} · {current.date}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              aria-label="Попередній відгук"
              data-cursor="hover"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-primary transition-transform hover:scale-105"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((r, i) => (
                <button
                  key={r.id}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Відгук ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-6 bg-gold" : "w-1.5 bg-border"
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Наступний відгук"
              data-cursor="hover"
              className="glass flex h-11 w-11 items-center justify-center rounded-full text-primary transition-transform hover:scale-105"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

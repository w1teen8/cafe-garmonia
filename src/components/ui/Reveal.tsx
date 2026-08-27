"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.19, 1, 0.22, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  duration = 0.9,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Note: SplitWords/SplitLines mask each line with `overflow-hidden` and slide the
// text in from a fully-offscreen position within that mask. If the visibility
// check (`whileInView`) were attached to the sliding text itself, the clipping
// ancestor would report 0% intersection while hidden, so it could never trigger.
// Instead we watch the unclipped outer wrapper and drive the children imperatively.

export function SplitWords({
  text,
  className,
  wordClassName,
  staggerDelay = 0.06,
  baseDelay = 0,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  staggerDelay?: number;
  baseDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const words = text.split(" ");
  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
            <motion.span
              initial={{ y: "110%" }}
              animate={inView ? { y: 0 } : { y: "110%" }}
              transition={{
                duration: 0.85,
                delay: baseDelay + i * staggerDelay,
                ease: EASE,
              }}
              className={cn("inline-block", wordClassName)}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

export function SplitLines({
  lines,
  className,
  lineClassName,
  staggerDelay = 0.12,
  baseDelay = 0,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  staggerDelay?: number;
  baseDelay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <span ref={ref} className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            animate={inView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 1,
              delay: baseDelay + i * staggerDelay,
              ease: EASE,
            }}
            className={cn("block", lineClassName)}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

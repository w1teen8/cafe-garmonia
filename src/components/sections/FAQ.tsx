"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import faqData from "@/data/faq.json";
import type { FaqItem } from "@/lib/types";
import { cn } from "@/lib/utils";

const faq = faqData as FaqItem[];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(faq[0]?.id ?? null);

  return (
    <section id="faq" className="relative bg-bg py-28 md:py-36">
      <div className="container-brand max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Питання, які нам часто ставлять" />

        <div className="mt-14 flex flex-col divide-y divide-border border-y border-border">
          {faq.map((item, i) => {
            const isOpen = open === item.id;
            return (
              <Reveal key={item.id} delay={i * 0.05}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    data-cursor="hover"
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg italic text-primary md:text-xl">
                      {item.question}
                    </span>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-beige/40 transition-transform duration-400",
                        isOpen && "rotate-45"
                      )}
                    >
                      <Plus size={16} className="text-coffee" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-6 text-sm leading-relaxed text-secondary md:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

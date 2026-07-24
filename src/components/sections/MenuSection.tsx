"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import menu from "@/data/menu.json";
import type { MenuData } from "@/lib/types";

const data = menu as MenuData;

export default function MenuSection() {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(() => {
    if (active === "all") return data.items;
    return data.items.filter((item) => item.category === active);
  }, [active]);

  return (
    <section id="menu" className="relative bg-bg-alt py-28 md:py-36">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Меню"
          title="Кожна страва — маленька історія"
          description="Від ранкової кави до вечірніх коктейлів — оберіть категорію та знайдіть свій смак."
        />

        <div className="mt-12 flex gap-2 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <button
            onClick={() => setActive("all")}
            className={cn(
              "shrink-0 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors",
              active === "all"
                ? "bg-primary text-bg"
                : "glass text-secondary hover:text-primary"
            )}
          >
            Усі страви
          </button>
          {data.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={cn(
                "shrink-0 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors",
                active === cat.id
                  ? "bg-primary text-bg"
                  : "glass text-secondary hover:text-primary"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                className="glass flex items-center gap-5 rounded-brand p-4"
              >
                {item.image && (
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-brand-sm sm:h-24 sm:w-24">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg italic text-primary">
                      {item.name}
                    </h3>
                    <span className="whitespace-nowrap font-display text-lg italic text-coffee">
                      {item.price} ₴
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-secondary">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

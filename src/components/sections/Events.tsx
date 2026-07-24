"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cake, Briefcase, Heart, Sparkles, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { scrollToReservation } from "@/lib/scroll";
import events from "@/data/events.json";
import type { EventItem } from "@/lib/types";

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  cake: Cake,
  briefcase: Briefcase,
  heart: Heart,
  sparkles: Sparkles,
};

export default function Events() {
  const list = events as EventItem[];

  return (
    <section id="events" className="relative bg-bg-alt py-28 md:py-36">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Події"
          title="Особливі моменти у &quot;Гармонії&quot;"
          description="Довірте нам організацію вашого свята — ми подбаємо про атмосферу, меню та сервіс."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {list.map((event, i) => {
            const Icon = ICONS[event.icon] ?? Sparkles;
            return (
              <Reveal key={event.id} delay={(i % 2) * 0.12}>
                <motion.div
                  whileHover="hover"
                  className="group relative flex h-[360px] flex-col justify-end overflow-hidden rounded-brand"
                >
                  <motion.div
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

                  <div className="relative flex items-center justify-between p-7">
                    <div className="glass-dark flex h-11 w-11 items-center justify-center rounded-full">
                      <Icon size={18} className="text-bg" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="relative flex flex-col gap-2 p-7 pt-0">
                    <h3 className="font-display text-2xl italic text-bg">{event.title}</h3>
                    <p className="max-w-sm text-sm leading-relaxed text-beige/90">
                      {event.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs font-medium uppercase tracking-wide text-gold">
                        {event.price}
                      </span>
                      <button
                        onClick={scrollToReservation}
                        data-cursor="hover"
                        className="group/btn inline-flex items-center gap-1.5 text-sm font-medium text-bg"
                      >
                        Залишити заявку
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

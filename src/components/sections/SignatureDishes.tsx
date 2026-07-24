"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import menu from "@/data/menu.json";
import type { MenuData } from "@/lib/types";

const data = menu as MenuData;
const dishes = data.items.filter((i) => i.signature);

export default function SignatureDishes() {
  return (
    <section className="relative bg-bg-alt py-28 md:py-36">
      <div className="container-brand">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Фірмові страви"
            title="Смаки, заради яких повертаються"
            className="max-w-xl"
          />
          <Reveal delay={0.2}>
            <a
              href="#menu"
              data-cursor="hover"
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Весь список меню
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, i) => (
            <Reveal key={dish.id} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover="hover"
                className="group flex h-full flex-col overflow-hidden rounded-brand bg-card-solid shadow-[0_4px_24px_rgba(44,40,38,0.05)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {dish.image && (
                    <motion.div
                      variants={{ hover: { scale: 1.08 } }}
                      transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                      className="h-full w-full"
                    >
                      <Image
                        src={dish.image}
                        alt={dish.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </motion.div>
                  )}
                  <div className="absolute right-4 top-4 rounded-full bg-bg/90 px-3 py-1 text-xs font-semibold tracking-wide text-primary">
                    {dish.price} ₴
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <h3 className="font-display text-xl italic text-primary">{dish.name}</h3>
                  <p className="text-sm leading-relaxed text-secondary">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

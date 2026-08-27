"use client";

import Image from "next/image";
import { Leaf } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrow } from "@/components/ui/icons";
import { MENU_ITEMS } from "@/data/site";

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Menu() {
  return (
    <section id="menu" className="bg-bg py-20 md:py-28 xl:py-32">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow mb-4">
                Наше меню
                <Leaf size={14} aria-hidden="true" />
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl leading-[1.15] text-primary md:text-[2.6rem]">
                Смачно. Свіжо. По-справжньому
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <button
              type="button"
              onClick={() => scrollTo("#gallery")}
              className="link-arrow"
            >
              Переглянути все меню
              <IconArrow size={16} />
            </button>
          </Reveal>
        </div>

        <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-5">
          {MENU_ITEMS.map((item, i) => (
            <li
              key={item.name}
              className="w-[68%] shrink-0 snap-start sm:w-[42%] md:w-auto"
            >
              <Reveal delay={i * 0.06}>
                <article className="group">
                  <div className="img-zoom relative aspect-square overflow-hidden rounded-brand-sm shadow-[0_14px_30px_-18px_rgba(42,38,30,0.35)] transition-shadow duration-300 group-hover:shadow-[0_20px_40px_-16px_rgba(42,38,30,0.4)]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(min-width: 1024px) 18vw, (min-width: 768px) 30vw, 68vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-[0.95rem] font-medium text-primary">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-secondary">{item.price}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => scrollTo("#gallery")}
              className="link-arrow"
            >
              Переглянути все меню
              <IconArrow size={16} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

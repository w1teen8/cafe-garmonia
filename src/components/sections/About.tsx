"use client";

import Image from "next/image";
import { Leaf } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { IconArrow, Sprig } from "@/components/ui/icons";
import { IMAGES } from "@/data/site";

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bg-alt py-20 md:py-28 xl:py-32">
      <Sprig className="pointer-events-none absolute right-4 top-16 hidden h-16 w-44 rotate-6 text-gold/40 lg:block" />

      <div className="container-brand grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left copy */}
        <div className="max-w-lg">
          <Reveal>
            <span className="eyebrow mb-5">
              Про нас
              <Leaf size={14} aria-hidden="true" />
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl leading-[1.15] text-primary md:text-[2.6rem]">
              Місце, де панує
              <br />
              гармонія
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-secondary md:text-lg">
              Ми створили Гармонію, щоб ви відчували себе як вдома. Смачні страви,
              теплий сервіс і затишна атмосфера — все для вашого ідеального
              відпочинку.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <button
              type="button"
              onClick={() => scrollTo("#gallery")}
              className="link-arrow mt-8"
            >
              Детальніше про нас
              <IconArrow size={16} />
            </button>
          </Reveal>
        </div>

        {/* Right image composition */}
        <Reveal delay={0.1}>
          <div className="grid h-[380px] grid-cols-2 grid-rows-2 gap-4 sm:h-[440px] lg:h-[480px] xl:h-[540px]">
            <div className="img-zoom relative col-span-1 row-span-2 overflow-hidden rounded-brand">
              <Image
                src={IMAGES.aboutLarge}
                alt="Затишний зал кафе Гармонія з рослинами та деревʼяними меблями"
                fill
                sizes="(min-width: 1024px) 26vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="img-zoom relative overflow-hidden rounded-brand">
              <Image
                src={IMAGES.aboutCoffee}
                alt="Чашка кави з латте-артом"
                fill
                sizes="(min-width: 1024px) 26vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="img-zoom relative overflow-hidden rounded-brand">
              <Image
                src={IMAGES.aboutInterior}
                alt="Куточок кафе з рослинами та барною стійкою"
                fill
                sizes="(min-width: 1024px) 26vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

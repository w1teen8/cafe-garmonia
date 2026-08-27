"use client";

import Image from "next/image";
import { Leaf, MapPin, Clock, CalendarDays } from "lucide-react";
import { PointIcon } from "@/components/ui/PointIcon";
import { IconArrow, Swash, Sprig } from "@/components/ui/icons";
import { HERO_HIGHLIGHTS, CONTACT, IMAGES } from "@/data/site";

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36 lg:pt-40 xl:pb-28 xl:pt-44">
      <Sprig className="pointer-events-none absolute right-6 top-24 hidden h-16 w-40 text-gold/40 lg:block" />

      <div className="container-brand grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
        {/* Left */}
        <div className="max-w-[42rem]">
          <p className="eyebrow rise rise-1 mb-6">
            Свято без турбот
            <Leaf size={14} aria-hidden="true" />
          </p>

          <h1 className="rise rise-2 font-display font-medium leading-[0.96] text-primary text-[13vw] sm:text-[9vw] lg:text-[clamp(3.75rem,5vw,6.75rem)]">
            Їжа, що
            <br />
            обʼєднує
            <br />
            <span className="relative inline-block leading-none">
              <span className="font-script text-[1.2em] text-primary">людей</span>
              <Swash className="absolute -bottom-2 left-0 h-3.5 w-[108%] text-gold" />
              <svg
                viewBox="0 0 24 24"
                className="absolute -right-11 top-1/2 hidden h-7 w-7 -translate-y-1/2 text-gold sm:block"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M12 20s-6.4-4.2-9-8c-1.8-2.6-1-6.3 2-7.5 2-.8 4 .1 5.2 1.8C13.4 4.6 15.4 3.7 17.4 4.5c3 1.2 3.8 4.9 2 7.5-2.6 3.8-9 8-9 8Z" />
              </svg>
            </span>
          </h1>

          <p className="rise rise-3 mt-7 max-w-md text-base leading-relaxed text-secondary md:text-lg">
            Кафе Гармонія — це місце, де смак, атмосфера та щирі емоції створюють
            ідеальний відпочинок.
          </p>

          <div className="rise rise-4 mt-9 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => scrollTo("#menu")} className="btn btn-primary">
              Переглянути меню
              <IconArrow size={16} />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#contacts")}
              className="btn btn-outline"
            >
              Забронювати столик
              <CalendarDays size={16} strokeWidth={1.6} aria-hidden="true" />
            </button>
          </div>

          <ul className="rise rise-5 mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-border-soft pt-6 text-[0.8rem] text-secondary">
            {HERO_HIGHLIGHTS.map((h) => (
              <li
                key={h.label}
                className="flex items-center gap-2 whitespace-nowrap [&:not(:last-child)]:border-r [&:not(:last-child)]:border-border-soft [&:not(:last-child)]:pr-4"
              >
                <PointIcon name={h.icon} size={16} className="shrink-0 text-gold" />
                {h.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Right */}
        <div className="rise-img relative">
          <div className="hero-blob img-zoom relative aspect-[4/5] w-full overflow-hidden shadow-[0_40px_80px_-30px_rgba(42,38,30,0.4)] lg:aspect-[4/4.3]">
            <Image
              src={IMAGES.heroInterior}
              alt="Світлий зелений інтерʼєр кафе Гармонія з великою кількістю рослин"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mx-auto -mt-16 w-[min(20rem,90%)] rounded-brand bg-olive-deep p-6 text-cream shadow-[0_30px_60px_-20px_rgba(42,38,30,0.55)] sm:absolute sm:bottom-10 sm:right-0 sm:mx-0 sm:mt-0 sm:w-72 lg:-right-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/25">
                <MapPin size={16} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed">
                {CONTACT.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
            </div>
            <div className="my-4 h-px bg-cream/15" />
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cream/25">
                <Clock size={16} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed">
                {CONTACT.hoursLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

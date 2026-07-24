"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, HeartHandshake, Sparkles, Award, Clock, Sofa } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import settings from "@/data/settings.json";
import type { SettingsData } from "@/lib/types";

const data = settings as SettingsData;

const VALUES = [
  {
    icon: Leaf,
    title: "Свіжі інгредієнти",
    text: "Продукти від локальних постачальників щодня — без компромісів у якості.",
  },
  {
    icon: HeartHandshake,
    title: "Щира гостинність",
    text: "Кожен гість — як вдома. Ми пам'ятаємо ваші улюблені страви.",
  },
  {
    icon: Sofa,
    title: "Атмосфера",
    text: "Теплий інтер'єр, м'яке світло та затишок, який хочеться повторити.",
  },
  {
    icon: Award,
    title: "Якість",
    text: "Кожна страва проходить контроль смаку та подачі перед тим, як потрапити до столу.",
  },
  {
    icon: Clock,
    title: "Традиція",
    text: "Домашні рецепти, що передаються роками, з повагою до автентичного смаку.",
  },
  {
    icon: Sparkles,
    title: "Сучасний підхід",
    text: "Класика у новому прочитанні — легка, свіжа, без зайвого пафосу.",
  },
];

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, "0"));

  useEffect(() => {
    if (!inView) return;
    const numMatch = value.match(/[\d.]+/);
    if (!numMatch) return;
    const target = parseFloat(numMatch[0]);
    const suffix = value.slice(numMatch.index! + numMatch[0].length);
    const prefix = value.slice(0, numMatch.index);
    const duration = 1400;
    const start = performance.now();

    const isFloat = numMatch[0].includes(".");

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = target * eased;
      setDisplay(`${prefix}${isFloat ? current.toFixed(1) : Math.round(current)}${suffix}`);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bg py-28 md:py-36">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Про нас"
          title="Гармонія смаку, спокою та щирої турботи"
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-16 md:mt-20 md:grid-cols-2 md:gap-12 lg:gap-24">
          <Reveal delay={0.1}>
            <p className="text-xl leading-relaxed text-primary md:text-2xl">
              Кафе &quot;Гармонія&quot; народилося з простої ідеї — створити місце, куди
              хочеться повертатися не заради пункту в списку справ, а заради відчуття
              спокою.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-relaxed text-secondary md:text-lg">
              Ми поєднуємо домашні рецепти з сучасним підходом до кухні: щоденно
              обираємо свіжі продукти, дбайливо готуємо кожну страву та створюємо
              простір, у якому затишно і сім&apos;ям, і діловим зустрічам, і романтичним
              вечорам. Гармонія — це не назва. Це те, що ви відчуваєте з першої хвилини.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="flex flex-col gap-4 border-t border-border pt-6">
                <v.icon size={22} className="text-gold" strokeWidth={1.5} />
                <h3 className="font-display text-xl italic text-primary">{v.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4">
          {data.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="flex flex-col gap-2">
                <span className="font-display text-4xl italic text-coffee md:text-5xl">
                  <Counter value={s.value} />
                </span>
                <span className="text-xs uppercase tracking-[0.14em] text-secondary">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-24 overflow-hidden border-y border-border py-6">
        <motion.div className="flex w-max gap-10 whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10">
              {[
                "СНІДАНКИ",
                "ОБІДИ",
                "ВЕЧЕРІ",
                "АВТОРСЬКА КАВА",
                "ДЕСЕРТИ",
                "СЕЗОННЕ МЕНЮ",
              ].map((word) => (
                <span
                  key={word}
                  className="font-display text-3xl italic text-primary/15 md:text-4xl"
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

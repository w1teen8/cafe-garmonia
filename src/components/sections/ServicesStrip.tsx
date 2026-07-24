"use client";

import {
  Sunrise,
  UtensilsCrossed,
  Moon,
  Coffee,
  Cake,
  GlassWater,
  Leaf,
  Briefcase,
  PartyPopper,
  Sparkles,
  Truck,
  Bike,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SERVICES = [
  { icon: Sunrise, label: "Сніданки" },
  { icon: UtensilsCrossed, label: "Обіди" },
  { icon: Moon, label: "Вечері" },
  { icon: Coffee, label: "Кава" },
  { icon: Cake, label: "Десерти" },
  { icon: GlassWater, label: "Напої" },
  { icon: Leaf, label: "Сезонне меню" },
  { icon: Briefcase, label: "Бізнес-ланчі" },
  { icon: PartyPopper, label: "Банкети" },
  { icon: Sparkles, label: "Приватні події" },
  { icon: Truck, label: "Кейтеринг" },
  { icon: Bike, label: "Доставка їжі" },
];

export default function ServicesStrip() {
  return (
    <section className="relative bg-bg py-24 md:py-32">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Що ми пропонуємо"
          title="Послуги для будь-якого моменту"
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-16 flex flex-wrap justify-center gap-3 md:gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.label} delay={(i % 6) * 0.06} y={16}>
              <div
                data-cursor="hover"
                className="glass flex items-center gap-2.5 rounded-full px-5 py-3 transition-transform hover:-translate-y-1"
              >
                <s.icon size={16} className="text-gold" strokeWidth={1.5} />
                <span className="text-sm font-medium text-primary">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

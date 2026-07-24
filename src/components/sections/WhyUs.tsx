"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  ChefHat,
  Sofa,
  Zap,
  CalendarCheck,
  PartyPopper,
  Baby,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const REASONS = [
  { icon: Leaf, title: "Свіжі продукти", text: "Щоденні поставки від перевірених локальних постачальників." },
  { icon: ChefHat, title: "Професійні шеф-кухарі", text: "Команда з багаторічним досвідом у європейській та домашній кухні." },
  { icon: Sofa, title: "Затишна атмосфера", text: "Продумані інтер'єри для комфорту у будь-який час доби." },
  { icon: Zap, title: "Швидкий сервіс", text: "Дбаємо про ваш час без втрати якості обслуговування." },
  { icon: CalendarCheck, title: "Онлайн-бронювання", text: "Забронюйте столик за лічені хвилини у кілька кліків." },
  { icon: PartyPopper, title: "Організація подій", text: "Від камерних вечірь до масштабних банкетів під ключ." },
  { icon: Baby, title: "Family friendly", text: "Дитяче меню, стільчики та затишний простір для родин." },
];

export default function WhyUs() {
  return (
    <section className="relative bg-bg py-28 md:py-36">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Чому саме ми"
          title="Деталі, які створюють враження"
          align="center"
          className="mx-auto max-w-2xl"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="glass flex h-full flex-col gap-4 rounded-brand p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige/40">
                  <r.icon size={20} className="text-coffee" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl italic text-primary">{r.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{r.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

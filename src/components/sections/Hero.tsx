"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Star, Leaf, Sparkles, Coffee } from "lucide-react";
import { SplitLines } from "@/components/ui/Reveal";
import { MagneticButton, MagneticLink } from "@/components/ui/MagneticButton";
import { scrollToReservation } from "@/lib/scroll";

const STATS = [
  { icon: Star, label: "Топ рейтинг", value: "★★★★★" },
  { icon: Leaf, label: "Свіжі інгредієнти", value: "Фреш" },
  { icon: Sparkles, label: "Преміум сервіс", value: "Преміум" },
  { icon: Coffee, label: "Затишна атмосфера", value: "Затишно" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-primary"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=2000&q=80"
          alt="Затишна сонячна тераса кафе «Гармонія»"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/35 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-transparent" />
      </div>

      <div className="container-brand relative z-10 flex flex-1 flex-col justify-center pt-32">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="eyebrow mb-6 text-beige"
        >
          Боярка, Україна
        </motion.span>

        <h1 className="font-display text-[16vw] italic leading-[0.92] text-bg sm:text-[11vw] md:text-[8.5vw] lg:text-[7vw]">
          <SplitLines lines={["Їжа,", "що об'єднує", "людей."]} baseDelay={0.3} staggerDelay={0.15} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="mt-8 max-w-lg text-base leading-relaxed text-beige/90 md:text-lg"
        >
          Кафе &quot;Гармонія&quot; — місце, де аромат свіжої кави, домашня кухня та тепла
          атмосфера створюють особливі моменти.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticLink
            href="#menu"
            className="rounded-full bg-bg px-8 py-4 text-sm font-medium tracking-wide text-primary transition-transform hover:scale-[1.03]"
          >
            Переглянути меню
          </MagneticLink>
          <MagneticButton
            onClick={scrollToReservation}
            className="glass-dark rounded-full px-8 py-4 text-sm font-medium tracking-wide text-bg transition-transform hover:scale-[1.03]"
          >
            Забронювати столик
          </MagneticButton>
        </motion.div>
      </div>

      <div className="container-brand relative z-10 pb-32 lg:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9 }}
          className="flex flex-wrap items-center gap-3 border-t border-bg/15 pt-8"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="glass-dark flex items-center gap-2.5 rounded-full px-4 py-2.5 text-bg"
            >
              <s.icon size={14} className="text-gold" />
              <span className="text-xs font-medium tracking-wide">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-bg/80 lg:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { SplitLines, Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { FloatingShapes } from "@/components/ui/FloatingShapes";
import { scrollToReservation } from "@/lib/scroll";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-32 text-center text-bg md:py-44">
      <FloatingShapes />
      <div className="container-brand relative flex flex-col items-center">
        <Reveal>
          <span className="eyebrow text-gold">Кафе &quot;Гармонія&quot;</span>
        </Reveal>
        <h2 className="mt-6 font-display text-5xl italic leading-[1.05] text-bg sm:text-6xl md:text-7xl">
          <SplitLines
            lines={["Кожна трапеза", "заслуговує", "на прекрасне місце."]}
            baseDelay={0.1}
            staggerDelay={0.13}
          />
        </h2>
        <Reveal delay={0.4} className="mt-10">
          <MagneticButton
            onClick={scrollToReservation}
            className="rounded-full bg-gold px-10 py-5 text-base font-semibold tracking-wide text-primary transition-transform hover:scale-[1.03]"
          >
            Забронювати столик
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

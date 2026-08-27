"use client";

import { Reveal } from "@/components/ui/Reveal";
import { PointIcon, type PointIconName } from "@/components/ui/PointIcon";
import { FEATURES } from "@/data/site";

export default function Features() {
  return (
    <section className="bg-bg-alt pb-20 md:pb-28 xl:pb-32">
      <div className="container-brand grid gap-5 md:grid-cols-3">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.08}>
            <article className="card-outline h-full p-7 md:p-8">
              <PointIcon
                name={f.icon as PointIconName}
                size={26}
                className="text-gold"
              />
              <h3 className="mt-5 whitespace-pre-line text-lg font-medium leading-snug text-primary">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-secondary">{f.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

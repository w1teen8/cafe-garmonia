"use client";

import Image from "next/image";
import { Leaf } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { IconInstagram } from "@/components/ui/icons";
import { GALLERY, CONTACT } from "@/data/site";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-bg py-20 md:py-28">
      <div className="container-brand">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow mb-4">
                Наші моменти
                <Leaf size={14} aria-hidden="true" />
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl leading-[1.15] text-primary md:text-[2.6rem]">
                Ділимось атмосферою
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-secondary transition-colors hover:text-primary"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-gold">
                <IconInstagram size={18} />
              </span>
              <span>
                <span className="block">Дивіться більше в Instagram</span>
                <span className="block font-medium text-primary">
                  {CONTACT.instagramHandle}
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {GALLERY.map((g, i) => (
            <li key={g.image}>
              <Reveal delay={(i % 6) * 0.06}>
                <div className="img-zoom relative aspect-[4/5] overflow-hidden rounded-brand-sm">
                  <Image
                    src={g.image}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

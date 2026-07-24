"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import galleryData from "@/data/gallery.json";
import type { GalleryItem } from "@/lib/types";

const gallery = galleryData as GalleryItem[];

const FILTERS: { id: GalleryItem["category"] | "all"; label: string }[] = [
  { id: "all", label: "Усі" },
  { id: "interior", label: "Інтер'єр" },
  { id: "food", label: "Страви" },
  { id: "coffee", label: "Кава" },
  { id: "events", label: "Події" },
];

export default function Gallery() {
  const [active, setActive] = useState<GalleryItem["category"] | "all">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "all" ? gallery : gallery.filter((g) => g.category === active)),
    [active]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, filtered.length]);

  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
  }, [lightboxIndex]);

  return (
    <section id="gallery" className="relative bg-bg py-28 md:py-36">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Галерея"
          title="Атмосфера, яку варто побачити"
          description="Кілька кадрів з життя кафе — інтер'єр, страви, кава та наші події."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={cn(
                "rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors",
                active === f.id ? "bg-primary text-bg" : "glass text-secondary hover:text-primary"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {filtered.map((item, i) => (
            <Reveal key={item.id} delay={(i % 6) * 0.06} className="mb-4 break-inside-avoid">
              <button
                onClick={() => setLightboxIndex(i)}
                data-cursor="hover"
                className={cn(
                  "group relative block w-full overflow-hidden rounded-brand",
                  item.size === "lg" && "aspect-[3/4]",
                  item.size === "md" && "aspect-square",
                  item.size === "sm" && "aspect-[4/5]",
                  !item.size && "aspect-[4/5]"
                )}
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-2 p-5 text-sm text-bg">
                    <Expand size={14} />
                    {item.caption}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-primary/95 p-4 backdrop-blur-md md:p-12"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full glass-dark text-bg"
              aria-label="Закрити"
            >
              <X size={18} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
              }}
              className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full glass-dark text-bg md:left-8"
              aria-label="Попереднє фото"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i === null ? i : (i + 1) % filtered.length));
              }}
              className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full glass-dark text-bg md:right-8"
              aria-label="Наступне фото"
            >
              <ChevronRight size={20} />
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative aspect-[4/5] w-full max-w-2xl overflow-hidden rounded-brand md:aspect-[3/2]"
            >
              <Image
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].caption}
                fill
                sizes="90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
                <span className="text-sm text-bg">{filtered[lightboxIndex].caption}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

"use client";

import { MapPin, Phone, Clock, Camera, Globe, Send } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import settings from "@/data/settings.json";
import type { SettingsData } from "@/lib/types";

const data = settings as SettingsData;

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  instagram: Camera,
  facebook: Globe,
  send: Send,
};

export default function Contacts() {
  return (
    <section id="contacts" className="relative bg-bg-alt py-28 md:py-36">
      <div className="container-brand">
        <SectionHeading
          eyebrow="Контакти"
          title="Завітайте до нас у гості"
          description="Ми у самому серці Боярки — знайти нас легко, а повернутися захочеться ще не раз."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col gap-5">
            <Reveal>
              <div className="glass flex items-start gap-4 rounded-brand p-6">
                <MapPin size={20} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-secondary">
                    Адреса
                  </span>
                  <p className="mt-1 text-base text-primary">
                    {data.contact.address}, {data.contact.city}
                  </p>
                  <a
                    href={data.contact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-coffee underline underline-offset-4"
                  >
                    Прокласти маршрут
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="glass flex items-start gap-4 rounded-brand p-6">
                <Phone size={20} className="mt-0.5 shrink-0 text-gold" />
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-secondary">
                    Телефон
                  </span>
                  <a
                    href={`tel:${data.contact.phone}`}
                    className="mt-1 block text-base text-primary"
                  >
                    {data.contact.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${data.contact.email}`}
                    className="mt-0.5 block text-sm text-secondary"
                  >
                    {data.contact.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="glass flex items-start gap-4 rounded-brand p-6">
                <Clock size={20} className="mt-0.5 shrink-0 text-gold" />
                <div className="flex flex-1 flex-col gap-1.5">
                  <span className="text-xs font-medium uppercase tracking-wide text-secondary">
                    Години роботи
                  </span>
                  {data.hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4 text-sm">
                      <span className="text-primary">{h.day}</span>
                      <span className="text-secondary">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="glass flex items-center justify-between gap-4 rounded-brand p-6">
                <span className="text-xs font-medium uppercase tracking-wide text-secondary">
                  Соцмережі
                </span>
                <div className="flex items-center gap-3">
                  {data.social.map((s) => {
                    const Icon = ICONS[s.icon] ?? Send;
                    return (
                      <a
                        key={s.label}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        data-cursor="hover"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-beige/40 text-coffee transition-transform hover:scale-110"
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="min-h-[420px]">
            <div className="h-full min-h-[420px] overflow-hidden rounded-brand border border-border grayscale-[15%] transition-all duration-500 hover:grayscale-0">
              <iframe
                title="Кафе «Гармонія» на карті"
                src={data.contact.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

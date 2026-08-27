"use client";

import { Leaf, MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  IconArrow,
  IconInstagram,
  IconFacebook,
  IconTelegram,
} from "@/components/ui/icons";
import { NAV_LINKS, FOOTER_MENU, CONTACT, BRAND } from "@/data/site";

const SOCIALS = [
  { label: "Instagram", href: CONTACT.instagramUrl, Icon: IconInstagram },
  { label: "Facebook", href: CONTACT.facebookUrl, Icon: IconFacebook },
  { label: "Telegram", href: CONTACT.telegramUrl, Icon: IconTelegram },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacts"
      className="bg-footer text-cream"
      style={{ colorScheme: "dark" }}
    >
      <div className="container-brand py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr_1.3fr] lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <Leaf size={22} strokeWidth={1.4} className="text-cream" aria-hidden="true" />
              <span className="leading-none">
                <span className="block font-display text-lg tracking-[0.3em]">
                  {BRAND.name}
                </span>
                <span className="mt-1 block text-[0.6rem] tracking-[0.5em] text-cream/70">
                  {BRAND.sub}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/80">
              {BRAND.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream hover:text-footer"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/60">
              Навігація
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(l.href);
                    }}
                    className="text-cream/85 transition-colors hover:text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/60">
              Меню
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {FOOTER_MENU.map((m) => (
                <li key={m}>
                  <a
                    href="#menu"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("#menu");
                    }}
                    className="text-cream/85 transition-colors hover:text-cream"
                  >
                    {m}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/60">
              Контакти
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-cream/85">
              <li className="flex gap-3">
                <MapPin size={16} strokeWidth={1.6} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{CONTACT.addressFlat}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} strokeWidth={1.6} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a href={CONTACT.phoneHref} className="transition-colors hover:text-cream">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} strokeWidth={1.6} className="mt-0.5 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-cream"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start gap-4 lg:items-stretch">
            <a
              href={CONTACT.phoneHref}
              className="btn btn-primary w-full sm:w-auto lg:w-full"
            >
              Забронювати столик
              <IconArrow size={16} />
            </a>
            <p className="flex items-center gap-2 text-sm text-cream/80">
              <Clock size={15} strokeWidth={1.6} aria-hidden="true" />
              {CONTACT.hoursFlat}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-brand flex flex-col gap-2 py-5 text-xs text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Cafe Garmonia. Всі права захищено.</span>
          <span className="inline-flex items-center gap-1.5">
            Створено з <span className="text-[#e2896f]">❤</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

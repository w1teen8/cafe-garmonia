import { Camera, Globe, Send } from "lucide-react";
import settings from "@/data/settings.json";
import type { SettingsData } from "@/lib/types";

const data = settings as SettingsData;

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  instagram: Camera,
  facebook: Globe,
  send: Send,
};

const NAV_LINKS = [
  { href: "#hero", label: "Головна" },
  { href: "#menu", label: "Меню" },
  { href: "#about", label: "Про нас" },
  { href: "#gallery", label: "Галерея" },
  { href: "#events", label: "Події" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-bg-alt">
      <div className="container-brand grid gap-14 py-20 md:grid-cols-[1.4fr_1fr_1fr] md:py-28">
        <div className="flex flex-col gap-6">
          <span className="font-display text-3xl italic text-primary">Гармонія</span>
          <p className="max-w-sm text-sm leading-relaxed text-secondary">
            {data.brand.tagline}. Кафе у Боярці, де смак, атмосфера та турбота про гостя
            створюють особливі моменти щодня.
          </p>
          <div className="flex items-center gap-3">
            {data.social.map((s) => {
              const Icon = ICONS[s.icon] ?? Send;
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  aria-label={s.label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-primary transition-transform hover:scale-105"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="eyebrow">Навігація</span>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="w-fit text-sm text-secondary transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <span className="eyebrow">Контакти</span>
          <div className="flex flex-col gap-2 text-sm text-secondary">
            <a href={`tel:${data.contact.phone}`} className="hover:text-primary">
              {data.contact.phoneDisplay}
            </a>
            <a href={`mailto:${data.contact.email}`} className="hover:text-primary">
              {data.contact.email}
            </a>
            <span>
              {data.contact.address}, {data.contact.city}
            </span>
          </div>
        </div>
      </div>

      <div className="container-brand flex flex-col gap-3 border-t border-border py-6 text-xs text-secondary md:flex-row md:items-center md:justify-between">
        <span>
          © {year} Кафе &quot;Гармонія&quot;. Усі права захищені.
        </span>
        <span>Боярка, Київська область, Україна</span>
      </div>
    </footer>
  );
}

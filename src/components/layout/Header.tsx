"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, BRAND } from "@/data/site";
import { IconArrow } from "@/components/ui/icons";

function Logo({ onClick }: { onClick?: (e: React.MouseEvent) => void }) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className="flex items-center gap-2.5"
      aria-label={`${BRAND.name} ${BRAND.sub}`}
    >
      <Leaf size={22} strokeWidth={1.4} className="text-gold" aria-hidden="true" />
      <span className="leading-none">
        <span className="block font-display text-lg tracking-[0.32em] text-primary">
          {BRAND.name}
        </span>
        <span className="mt-1 block text-[0.6rem] tracking-[0.5em] text-secondary">
          {BRAND.sub}
        </span>
      </span>
    </a>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[90] transition-all duration-500",
        scrolled
          ? "border-b border-border-soft bg-bg/85 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5"
      )}
    >
      <div className="container-brand flex items-center justify-between gap-4">
        <Logo
          onClick={(e) => {
            e.preventDefault();
            go("#home");
          }}
        />

        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                go(link.href);
              }}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-primary",
                link.href === "#home" ? "text-primary" : "text-secondary"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contacts"
            onClick={(e) => {
              e.preventDefault();
              go("#contacts");
            }}
            className="btn btn-primary hidden md:inline-flex"
          >
            Забронювати столик
            <IconArrow size={16} />
          </a>
          <button
            type="button"
            aria-label={open ? "Закрити меню" : "Відкрити меню"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-cream text-primary transition-colors hover:border-primary"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 top-0 z-[80] flex flex-col bg-bg px-6 pb-10 pt-24"
          >
            <nav className="flex flex-col">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    go(link.href);
                  }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
                  className="border-b border-border-soft py-5 font-display text-3xl italic text-primary"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <a
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                go("#contacts");
              }}
              className="btn btn-primary mt-8 w-full"
            >
              Забронювати столик
              <IconArrow size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

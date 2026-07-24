"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#hero", label: "Головна" },
  { href: "#menu", label: "Меню" },
  { href: "#about", label: "Про нас" },
  { href: "#gallery", label: "Галерея" },
  { href: "#events", label: "Події" },
  { href: "#reviews", label: "Відгуки" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacts", label: "Контакти" },
];

export default function Navbar({ onReserve }: { onReserve: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-500",
          scrolled ? "py-3" : "py-6"
        )}
      >
        <div
          className={cn(
            "container-brand flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
            scrolled ? "glass shadow-[0_8px_30px_rgba(44,40,38,0.06)]" : "bg-transparent"
          )}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            data-cursor="hover"
            className="font-display text-xl italic tracking-wide text-primary"
          >
            Гармонія
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-cursor="hover"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-sm font-medium tracking-wide text-secondary transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <MagneticButton
              onClick={onReserve}
              className="hidden rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-[1.03] md:inline-flex"
            >
              Забронювати столик
            </MagneticButton>
            <button
              aria-label="Меню"
              onClick={() => setOpen((v) => !v)}
              data-cursor="hover"
              className="glass flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[70] flex flex-col justify-center bg-bg px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                  className="border-b border-border py-4 font-display text-3xl italic text-primary"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.button
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * NAV_LINKS.length, duration: 0.5 }}
              onClick={() => {
                setOpen(false);
                onReserve();
              }}
              className="mt-8 rounded-full bg-primary px-7 py-4 text-center text-sm font-medium text-bg"
            >
              Забронювати столик
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

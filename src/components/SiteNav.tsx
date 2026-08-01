import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Logo } from "@/components/Logo";

export const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#how", label: "How It Works" },
  { href: "/our-story", label: "Our Story" },
  { href: "/#why", label: "Why Bezyde" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNav({ active }: { active?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => active === href;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || active
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-[0_1px_20px_-10px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                isActive(l.href)
                  ? "bg-primary-soft text-primary"
                  : "text-foreground/80 hover:bg-primary-soft hover:text-primary"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:opacity-90 md:inline-flex"
          >
            Get Started
          </a>
          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-wide flex flex-col py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={`rounded-lg px-3 py-3 text-base font-medium ${
                  isActive(l.href) ? "bg-primary-soft text-primary" : "text-foreground hover:bg-primary-soft"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

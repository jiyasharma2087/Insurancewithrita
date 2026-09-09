import { useEffect, useState } from "react";
import { waLink, WA_DEFAULT_MSG } from "../lib/site";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Why Insurance", href: "#why-insurance" },
  { label: "Why Rita", href: "#why-rita" },
  { label: "Trust", href: "#trust" },
  { label: "Location", href: "#location" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-cream/85 border-b border-line/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a
          href="#top"
          data-testid="nav-brand-link"
          className="flex flex-col leading-none group"
        >
          <span className="font-display font-semibold text-lg sm:text-xl tracking-tight text-ink">
            Rita Sharma
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-gold mt-1">
            Life Insurance Advisor
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, "-")}-link`}
              className="link-underline text-sm font-medium text-ink2 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink(WA_DEFAULT_MSG)}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nav-talk-to-rita-button"
          className="inline-flex items-center gap-2 rounded-full bg-ink text-cream text-sm font-semibold px-5 py-2.5 hover:bg-gold hover:text-navy transition-colors duration-300"
        >
          Talk to Rita
        </a>
      </div>
    </header>
  );
}

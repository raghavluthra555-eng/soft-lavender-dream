import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const items = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    items.forEach((i) => {
      const el = document.querySelector(i.href);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(96%,1080px)]"
    >
      <div className="glass rounded-pill px-3 py-2 flex items-center justify-between lavender-glow">
        <a href="#home" className="flex items-center gap-2 pl-3 pr-2">
          <span
            className="font-display text-lg tracking-tight"
            style={{ fontStyle: "italic" }}
          >
            Meghana<span className="text-lavender-deep">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {items.map((it) => {
            const isActive = active === it.href.slice(1);
            return (
              <li key={it.href}>
                <a
                  href={it.href}
                  className={`relative inline-flex items-center rounded-pill px-4 py-2 text-sm transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-pill bg-lavender-light"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{it.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          data-cursor="hover"
          className="hidden md:inline-flex items-center gap-2 rounded-pill px-5 py-2.5 text-sm text-white transition-all duration-300 hover:scale-[1.03]"
          style={{
            background: "linear-gradient(135deg, var(--lavender), var(--lavender-deep))",
            boxShadow: "0 10px 30px -10px color-mix(in oklab, var(--lavender-deep) 60%, transparent)",
          }}
        >
          Let's Connect
          <span aria-hidden>→</span>
        </a>

        <button
          aria-label="Menu"
          className="md:hidden rounded-pill p-2 px-3"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-5 bg-foreground" />
          <span className="mt-1.5 block h-px w-5 bg-foreground" />
          <span className="mt-1.5 block h-px w-3 bg-foreground" />
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-2 rounded-3xl p-4 flex flex-col gap-1"
        >
          {items.map((it) => (
            <a
              key={it.href}
              href={it.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-sm hover:bg-lavender-light"
            >
              {it.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center rounded-pill px-5 py-3 text-sm text-white"
            style={{ background: "linear-gradient(135deg, var(--lavender), var(--lavender-deep))" }}
          >
            Let's Connect
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

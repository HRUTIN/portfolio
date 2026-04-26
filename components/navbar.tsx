"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation, siteConfig } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

type NavbarProps = {
  sectionIds: string[];
};

export function Navbar({ sectionIds }: NavbarProps) {
  const [active, setActive] = useState(sectionIds[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observers = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)
      .map((element) => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id);
            }
          },
          { threshold: 0.35 },
        );

        observer.observe(element as Element);
        return observer;
      });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [sectionIds]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-5 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/60 px-4 py-3 shadow-glow backdrop-blur-xl">
          <Link href="#hero" className="text-sm font-semibold uppercase tracking-[0.28em] text-white">
            {siteConfig.name}
          </Link>
          <nav className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "rounded-full px-3 py-2 text-sm text-slate-300 transition-colors hover:text-white",
                  active === item.id && "bg-white/10 text-white",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className="rounded-full border border-white/10 p-2 text-white md:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-x-4 top-24 z-40 rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-glow backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
          >
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white",
                    active === item.id && "bg-white/10 text-white",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

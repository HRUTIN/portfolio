"use client";

import { useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { navigation } from "@/lib/portfolio-data";
import { Navbar } from "@/components/navbar";
import { CursorGlow } from "@/components/ui/cursor-glow";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });

  const navIds = useMemo(() => navigation.map((item) => item.id), []);

  return (
    <>
      <CursorGlow />
      <motion.div className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-cyan via-mist to-mint" style={{ scaleX }} />
      <Navbar sectionIds={navIds} />
      <main>{children}</main>
    </>
  );
}

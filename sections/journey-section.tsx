"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { journeyData } from "@/lib/portfolio-data";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

export function JourneySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.2"],
  });
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });
  const markerTop = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "calc(100% - 1rem)"]), {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });

  return (
    <SectionShell
      id="journey"
      eyebrow="Journey"
      title="Progress that looks like compounding, not job titles"
      description="The throughline is consistent: faster shipping, better product judgment, stronger systems, and more ownership over outcomes."
    >
      <div ref={sectionRef} className="relative ml-3 pl-8">
        <div className="absolute left-0 top-0 h-full w-px overflow-hidden bg-white/10">
          <motion.div
            className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-cyan via-mist to-mint shadow-[0_0_26px_rgba(79,209,255,0.9)]"
            style={{ scaleY: progressScale }}
          />
        </div>
        <motion.div
          className="absolute -left-[0.52rem] top-0 h-4 w-4 rounded-full border border-cyan/40 bg-gradient-to-br from-cyan to-mist shadow-[0_0_22px_rgba(79,209,255,0.8)]"
          style={{ top: markerTop }}
        />
        {journeyData.map((item, index) => (
          <Reveal key={item.phase} delay={index * 0.08}>
            <div className="relative mb-8">
              <div className="absolute -left-[2.18rem] top-1 h-4 w-4 rounded-full border border-white/20 bg-gradient-to-br from-cyan to-mist shadow-[0_0_18px_rgba(79,209,255,0.45)]" />
              <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan">{item.phase}</p>
                    <h3 className="mt-2 text-2xl font-medium text-white">{item.role}</h3>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{item.detail}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1 text-xs text-slate-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

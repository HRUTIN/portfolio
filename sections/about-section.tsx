import { aboutData } from "@/lib/portfolio-data";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Engineer enough to build the machine. Founder enough to know why it should exist."
      description={aboutData.story}
    >
      <div className="mb-6 rounded-[1.9rem] border border-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.02] p-6 shadow-glow backdrop-blur-xl">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Founder Arc</p>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-200 sm:text-[1.15rem]">{aboutData.intro}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4">
              <p className="text-2xl font-semibold text-white">2023</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">Exposure</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4">
              <p className="text-2xl font-semibold text-white">2024-25</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">Ownership</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4">
              <p className="text-2xl font-semibold text-white">Now</p>
              <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">Systems Thinking</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1">
          {aboutData.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 shadow-glow backdrop-blur-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan/25 to-mist/20 text-cyan">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-medium text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.18}>
          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-6 shadow-glow backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-medium text-white">Momentum Timeline</h3>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">
                Layered Growth
              </span>
            </div>
            <div className="space-y-4">
              {aboutData.timeline.map((item) => (
                <div key={item.year} className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan via-mist to-mint" />
                  <div className="pl-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs uppercase tracking-[0.26em] text-cyan">{item.year}</p>
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-500">
                        Momentum Layer
                      </span>
                    </div>
                    <h4 className="mt-3 text-xl font-medium text-white">{item.title}</h4>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
                    {"note" in item && item.note ? (
                      <p className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-7 text-slate-400">
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

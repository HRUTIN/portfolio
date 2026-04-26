import { heroData } from "@/lib/portfolio-data";
import { MagneticButton } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { HeroScene } from "@/components/three/hero-scene";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(79,209,255,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(159,181,255,0.18),transparent_22%),linear-gradient(180deg,#060816_0%,#070c1f_48%,#060816_100%)]" />
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:48px_48px] opacity-[0.06]" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-mint/20 bg-mint/10 px-4 py-2 text-xs uppercase tracking-[0.22em] text-mint">
              <span className="h-2 w-2 rounded-full bg-mint animate-pulseSoft" />
              {heroData.eyebrow}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              {heroData.headline}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">{heroData.blurb}</p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroData.ctas.map((cta) => (
                <MagneticButton key={cta.label} href={cta.href} variant={cta.variant}>
                  {cta.label}
                </MagneticButton>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-400">
              {heroData.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
                  {social.label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.42}>
            <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-glow backdrop-blur-xl sm:grid-cols-2">
              <div className="flex flex-wrap gap-2 sm:col-span-2">
                {heroData.credibility.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
              {heroData.metrics.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="lg:justify-self-end">
          <HeroScene />
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import { profileData } from "@/lib/portfolio-data";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

export function ProfileSection() {
  return (
    <SectionShell
      id="profile"
      eyebrow={profileData.eyebrow}
      title="Structured profile, focused execution"
      description="A quick view of my core direction, working style, and technical foundation."
    >
      <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <div className="rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-[#121933] to-[#0a1020] p-5 shadow-glow backdrop-blur-xl sm:p-6">
            <div className="mb-5 inline-flex rounded-full border border-mist/20 bg-mist/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-mist">
              {profileData.badge}
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-3">
              <div className="relative mx-auto aspect-square max-w-[300px] overflow-hidden rounded-[1.25rem] border border-white/10 bg-gradient-to-br from-mist/20 via-white/5 to-cyan/20">
                <Image
                  src={profileData.identity.photo}
                  alt={profileData.identity.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 300px"
                  priority
                />
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-[2rem]">{profileData.identity.name}</h3>
              <p className="mt-3 max-w-xl text-base leading-8 text-slate-300 sm:text-[1.05rem]">{profileData.identity.summary}</p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {profileData.stats.map((item) => (
                <div key={item.label} className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-center">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={0.08}>
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0d1428] p-5 shadow-glow sm:p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{profileData.eyebrow}</p>
              <h3 className="mt-3 text-3xl font-semibold leading-[1.05] tracking-[-0.035em] text-mist sm:text-4xl lg:text-[3.2rem]">
                {profileData.headline}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">{profileData.description}</p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0d1428] p-5 shadow-glow sm:p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{profileData.focusCards[0]?.title}</p>
              <h4 className="mt-3 text-xl font-semibold text-white sm:text-2xl">{profileData.focusCards[0]?.heading}</h4>
              <p className="mt-3 text-base leading-8 text-slate-300">{profileData.focusCards[0]?.text}</p>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-2">
            {profileData.focusCards.slice(1).map((card, index) => (
              <Reveal key={card.title} delay={0.2 + index * 0.06}>
                <div className="h-full rounded-[1.75rem] border border-white/10 bg-[#0d1428] p-5 shadow-glow sm:p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{card.title}</p>
                  <h4 className="mt-3 text-xl font-semibold text-white">{card.heading}</h4>
                  <p className="mt-3 text-base leading-8 text-slate-300">{card.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

import { skillGroups } from "@/lib/portfolio-data";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";
import { MiniOrb } from "@/components/three/mini-orb";
import { SkillLogo } from "@/lib/tech-icons";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Capabilities"
      title="A stack built for modern product velocity"
      description="I use AI where it compounds leverage, software engineering where reliability matters, and design/motion where clarity improves conversion."
    >
      <div className="mb-10 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">3D Stack Map</p>
          <p className="mt-3 text-lg leading-8 text-slate-300">
            The toolkit changes by problem, but the operating principle stays the same: choose what accelerates feedback,
            keeps the product legible, and holds up when real users arrive.
          </p>
        </div>
        <div className="self-center">
          <MiniOrb />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={index * 0.07}>
              <div className="group h-full rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/8 to-white/[0.03] p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/60 text-cyan ring-1 ring-white/10">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-500">Cluster</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{group.description}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/55 px-3 py-2 text-xs text-slate-200 ring-1 ring-white/5"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/5">
                        <SkillLogo name={item.logo} className="h-3.5 w-3.5" />
                      </span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}

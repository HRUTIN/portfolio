import { proofData, testimonials } from "@/lib/portfolio-data";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";

export function ProofSection() {
  return (
    <SectionShell
      id="proof"
      eyebrow="Proof"
      title="Evidence that the work creates momentum"
      description="Recruiters and founders look for signal. These metrics, wins, and references exist to show execution range, not to inflate the story."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {proofData.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={index * 0.07}>
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-semibold tracking-tight text-white">{item.value}</span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950/60 text-cyan ring-1 ring-white/10">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-white">{item.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.note}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.2}>
          <div className="h-full rounded-[1.9rem] border border-white/10 bg-gradient-to-br from-cyan/10 via-white/[0.04] to-mist/10 p-6 shadow-glow backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">What collaborators notice</p>
            <div className="mt-6 space-y-4">
              {testimonials.map((item) => (
                <blockquote key={item.name} className="rounded-2xl border border-white/10 bg-slate-950/45 p-5">
                  <p className="text-base leading-7 text-white">"{item.quote}"</p>
                  <footer className="mt-4 text-sm text-slate-400">
                    {item.name} · {item.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

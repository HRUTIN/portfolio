"use client";

import { FormEvent, useState } from "react";
import { contactData, siteConfig } from "@/lib/portfolio-data";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/button";
import { MiniOrb } from "@/components/three/mini-orb";

export function ContactSection() {
  const [status, setStatus] = useState("Send a concise brief and I'll know what matters fast.");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const brief = String(form.get("brief") ?? "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject brief:\n${brief}`);
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(siteConfig.email)}&su=${subject}&body=${body}`;
    setStatus("Opening Gmail compose with your brief prefilled.");
    event.currentTarget.reset();
  };

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title={contactData.kicker}
      description={contactData.text}
      className="pb-28"
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-6 shadow-glow backdrop-blur-xl">
            <div className="mb-6 flex flex-col items-start justify-between gap-6 sm:flex-row">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Contact Channels</p>
                <h3 className="mt-2 text-2xl font-medium text-white">Best for serious builds, internships, and founder conversations.</h3>
              </div>
              <MiniOrb />
            </div>
            <div className="space-y-4">
              {contactData.contactPoints.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-4 transition hover:border-white/20"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm text-white">{item.value}</p>
                  </div>
                  <span className="text-sm text-cyan">Open</span>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <MagneticButton href={siteConfig.resume} variant="secondary">
                Resume Snapshot
              </MagneticButton>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow backdrop-blur-xl">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Name</span>
                  <input
                    required
                    name="name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition focus:border-cyan/40"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition focus:border-cyan/40"
                    placeholder="you@company.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Project Brief</span>
                <textarea
                  required
                  name="brief"
                  rows={6}
                  className="w-full rounded-[1.5rem] border border-white/10 bg-slate-950/45 px-4 py-3 text-white outline-none transition focus:border-cyan/40"
                  placeholder="What are you building, what stage is it in, and where do you need leverage?"
                />
              </label>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="rounded-full border border-cyan/40 bg-gradient-to-r from-cyan/90 to-mist/80 px-5 py-3 text-sm font-medium text-slate-950 shadow-[0_18px_60px_rgba(79,209,255,0.25)]"
                >
                  Send Inquiry
                </button>
                <p className="text-sm text-slate-400">{status}</p>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

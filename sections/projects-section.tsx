"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projectFilters, projects } from "@/lib/portfolio-data";
import { SectionShell } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";
import { TiltCard } from "@/components/ui/tilt-card";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectFilters)[number]>("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }
    return projects.filter((project) => project.filter.includes(activeFilter));
  }, [activeFilter]);

  return (
    <SectionShell
      id="projects"
      eyebrow="Featured Work"
      title="Projects that sell capability through outcomes"
      description="This is the conversion section: each build is framed around the actual problem, the system designed to solve it, and the signal it created."
    >
      <div className="mb-8 flex flex-wrap gap-3">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm transition-all ${
              activeFilter === filter
                ? "border-cyan/40 bg-cyan/15 text-white"
                : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        {filtered.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <TiltCard>
              <motion.article
                className="group relative h-full overflow-hidden rounded-[1.9rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/[0.03] p-6 shadow-glow backdrop-blur-xl"
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-8 top-0 h-24 w-24 rounded-full bg-cyan/20 blur-3xl" />
                  <div className="absolute bottom-0 right-0 h-28 w-28 rounded-full bg-mist/20 blur-3xl" />
                </div>
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.filter.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs uppercase tracking-[0.22em] text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Problem</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Solution</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{project.solution}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Stack</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 text-xs text-cyan">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Impact</p>
                    <p className="mt-2 text-sm leading-7 text-white">{project.impact}</p>
                  </div>
                  <div className="mt-6 flex gap-3">
                    {project.live ? (
                      <a href={project.live} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10">
                        Live Demo
                      </a>
                    ) : (
                      <span className="rounded-full border border-white/10 bg-slate-950/35 px-4 py-2 text-sm text-slate-500">
                        Demo Unavailable
                      </span>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-white/20 hover:text-white">
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

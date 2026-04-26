import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, eyebrow, title, description, children, className }: SectionShellProps) {
  return (
    <section id={id} className={cn("relative scroll-mt-28 px-4 py-20 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          {eyebrow ? (
            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
              {eyebrow}
            </div>
          ) : null}
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          {description ? <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary:
    "border border-cyan/50 bg-gradient-to-r from-cyan/90 to-mist/80 text-slate-950 shadow-[0_18px_60px_rgba(79,209,255,0.25)]",
  secondary:
    "border border-white/15 bg-white/8 text-white backdrop-blur-xl hover:border-white/30 hover:bg-white/12",
  ghost:
    "border border-transparent bg-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white",
};

export function MagneticButton({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.98 }}>
      <Link
        href={href}
        className={cn(
          "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-wide transition-all duration-300",
          styles[variant],
          className,
        )}
      >
        <span>{children}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}

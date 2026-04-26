"use client";

import { HTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  const [style, setStyle] = useState<React.CSSProperties>({});

  return (
    <div
      {...props}
      className={cn("transition-transform duration-200 will-change-transform", className)}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateX = ((y / rect.height) - 0.5) * -10;
        const rotateY = ((x / rect.width) - 0.5) * 10;
        setStyle({
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
        });
      }}
      onMouseLeave={() => setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" })}
      style={style}
    >
      {children}
    </div>
  );
}

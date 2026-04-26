"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-0 hidden h-72 w-72 rounded-full bg-cyan/20 blur-3xl md:block"
        animate={{ x: position.x - 144, y: position.y - 144 }}
        transition={{ type: "spring", damping: 24, stiffness: 170, mass: 0.32 }}
      />
      <motion.div
        className="pointer-events-none fixed z-0 hidden h-40 w-40 rounded-full bg-mist/20 blur-2xl md:block"
        animate={{ x: position.x - 80, y: position.y - 80 }}
        transition={{ type: "spring", damping: 20, stiffness: 210, mass: 0.22 }}
      />
    </>
  );
}

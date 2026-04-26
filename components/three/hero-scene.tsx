"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial, OrbitControls, PointMaterial, Points, Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

function DataCore() {
  const group = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    const count = 900;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const radius = 2.4 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y = state.clock.elapsedTime * 0.16;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.15;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.45} floatIntensity={0.9}>
        <Sphere args={[1.1, 128, 128]}>
          <MeshDistortMaterial
            color="#7af5c3"
            emissive="#4fd1ff"
            emissiveIntensity={0.85}
            distort={0.35}
            speed={1.8}
            roughness={0.05}
            metalness={0.6}
          />
        </Sphere>
      </Float>

      <Torus args={[1.8, 0.04, 24, 240]} rotation={[Math.PI / 2.2, 0, 0]}>
        <meshStandardMaterial color="#9fb5ff" emissive="#9fb5ff" emissiveIntensity={1.1} />
      </Torus>
      <Torus args={[2.3, 0.025, 16, 220]} rotation={[0.7, 0.3, 0.8]}>
        <meshStandardMaterial color="#4fd1ff" emissive="#4fd1ff" emissiveIntensity={0.9} transparent opacity={0.85} />
      </Torus>
      <Points positions={particles} stride={3} frustumCulled>
        <PointMaterial transparent color="#d7f5ff" size={0.035} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="relative h-[440px] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(79,209,255,0.16),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-glow backdrop-blur-2xl sm:h-[560px]">
      <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-[0.08]" />
      <Canvas camera={{ position: [0, 0, 6.4], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[4, 5, 3]} intensity={1.6} color="#9fb5ff" />
          <pointLight position={[-4, -2, 4]} intensity={1.3} color="#4fd1ff" />
          <DataCore />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 backdrop-blur-md">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Live System</p>
          <p className="mt-1 text-sm text-white">Adaptive product intelligence core</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-mint">
          <span className="h-2 w-2 rounded-full bg-mint animate-pulseSoft" />
          Rendering in real time
        </div>
      </div>
    </div>
  );
}

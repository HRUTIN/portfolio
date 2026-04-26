"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

function Orb() {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) {
      return;
    }

    mesh.current.rotation.x = state.clock.elapsedTime * 0.35;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.5;
  });

  return (
    <Float speed={2.2} floatIntensity={0.8} rotationIntensity={0.6}>
      <Icosahedron ref={mesh} args={[1, 0]}>
        <meshStandardMaterial color="#9fb5ff" emissive="#4fd1ff" emissiveIntensity={0.7} wireframe />
      </Icosahedron>
    </Float>
  );
}

export function MiniOrb() {
  return (
    <div className="h-40 w-40">
      <Canvas camera={{ position: [0, 0, 4] }} dpr={[1, 1.5]}>
        <ambientLight intensity={1} />
        <pointLight position={[3, 3, 3]} intensity={1.5} color="#4fd1ff" />
        <Orb />
      </Canvas>
    </div>
  );
}

"use client";

import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";

interface FloatingSphereProps {
  position: [number, number, number];
  size: number;
  color: string;
  hoverColor: string;
  speed?: number;
  amplitude?: number;
}

// Animated floating sphere
function FloatingSphere({ position, size, color, hoverColor, speed = 1, amplitude = 0.5 }: FloatingSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (!meshRef.current) return;
    // Floating animation
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * amplitude;
    // Slow rotation
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.15;
  });

  return (
    <Sphere
      ref={meshRef}
      args={[size, 32, 32]}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial 
        color={hovered ? hoverColor : color} 
        roughness={0.3} 
        metalness={0.7}
        emissive={hovered ? hoverColor : "black"}
        emissiveIntensity={hovered ? 0.5 : 0}
      />
    </Sphere>
  );
}

// Main Hero Scene Component
export default function HeroScene() {
  return (
    <div className="w-full h-[70vh] md:h-[80vh] bg-gradient-to-b from-background to-background/50">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
        style={{ cursor: "grab" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#fff" />
        <spotLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Background stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />

        {/* Floating spheres with updated colors */}
        <FloatingSphere 
          position={[-3, 0, 0]} 
          size={1} 
          color="#7c3aed" 
          hoverColor="#c084fc" 
          speed={0.6} 
          amplitude={0.3} 
        />
        <FloatingSphere 
          position={[2, 1, -2]} 
          size={0.5} 
          color="#c084fc" 
          hoverColor="#a855f7" 
          speed={0.8} 
          amplitude={0.4} 
        />
        <FloatingSphere 
          position={[0, -2, -1]} 
          size={0.8} 
          color="#8b5cf6" 
          hoverColor="#a855f7" 
          speed={0.5} 
          amplitude={0.5} 
        />
        <FloatingSphere 
          position={[3, 0, -3]} 
          size={0.7} 
          color="#a855f7" 
          hoverColor="#d946ef" 
          speed={0.7} 
          amplitude={0.6} 
        />
        <FloatingSphere 
          position={[-2, 2, -2]} 
          size={0.6} 
          color="#d946ef" 
          hoverColor="#ec4899" 
          speed={0.9} 
          amplitude={0.3} 
        />

        {/* Add controls with constraints */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
} 
"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

// Main Hero Scene Component
export default function HeroScene() {
  return (
    <div className="w-full h-[70vh] md:h-[80vh] bg-gradient-to-b from-background to-background/50">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#fff" />
        <spotLight position={[-10, -10, -10]} intensity={0.5} />
        
        {/* Simple ambient background */}
        <Environment preset="city" />
        
        {/* Simple gradient mesh for background */}
        <mesh position={[0, 0, -5]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial 
            color="#edeef6" 
            side={THREE.DoubleSide}
            metalness={0.1}
            roughness={0.9}
          />
        </mesh>
      </Canvas>
    </div>
  );
} 
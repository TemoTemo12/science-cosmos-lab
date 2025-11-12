import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Cylinder } from "@react-three/drei";
import * as THREE from "three";

const DNAHelix = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  const helixPoints = 20;
  const radius = 1;
  const height = 6;

  return (
    <group ref={groupRef}>
      {/* Generate DNA helix structure */}
      {Array.from({ length: helixPoints }).map((_, i) => {
        const t = (i / helixPoints) * Math.PI * 4;
        const y = (i / helixPoints) * height - height / 2;
        
        // First strand
        const x1 = Math.cos(t) * radius;
        const z1 = Math.sin(t) * radius;
        
        // Second strand (opposite)
        const x2 = Math.cos(t + Math.PI) * radius;
        const z2 = Math.sin(t + Math.PI) * radius;

        return (
          <group key={i}>
            {/* Nucleotide spheres */}
            <Sphere position={[x1, y, z1]} args={[0.15, 16, 16]}>
              <meshStandardMaterial color="#4ade80" emissive="#4ade80" emissiveIntensity={0.2} />
            </Sphere>
            <Sphere position={[x2, y, z2]} args={[0.15, 16, 16]}>
              <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.2} />
            </Sphere>

            {/* Base pair connections */}
            {i % 2 === 0 && (
              <Cylinder
                position={[(x1 + x2) / 2, y, (z1 + z2) / 2]}
                args={[0.05, 0.05, Math.sqrt((x2 - x1) ** 2 + (z2 - z1) ** 2), 8]}
                rotation={[0, 0, Math.atan2(z2 - z1, x2 - x1)]}
              >
                <meshStandardMaterial color="#8b5cf6" />
              </Cylinder>
            )}
          </group>
        );
      })}

      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </group>
  );
};

export default DNAHelix;

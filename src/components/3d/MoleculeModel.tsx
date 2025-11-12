import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

interface Atom {
  position: [number, number, number];
  color: string;
  size: number;
}

const MoleculeModel = ({ type = "water" }: { type?: "water" | "co2" | "methane" }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  const molecules: { [key: string]: Atom[] } = {
    water: [
      { position: [0, 0, 0], color: "#ef4444", size: 0.5 }, // O
      { position: [-0.7, 0.5, 0], color: "#ffffff", size: 0.3 }, // H
      { position: [0.7, 0.5, 0], color: "#ffffff", size: 0.3 }, // H
    ],
    co2: [
      { position: [0, 0, 0], color: "#6b7280", size: 0.4 }, // C
      { position: [-1, 0, 0], color: "#ef4444", size: 0.5 }, // O
      { position: [1, 0, 0], color: "#ef4444", size: 0.5 }, // O
    ],
    methane: [
      { position: [0, 0, 0], color: "#6b7280", size: 0.4 }, // C
      { position: [0.7, 0.7, 0], color: "#ffffff", size: 0.3 }, // H
      { position: [-0.7, 0.7, 0], color: "#ffffff", size: 0.3 }, // H
      { position: [0, -0.7, 0.7], color: "#ffffff", size: 0.3 }, // H
      { position: [0, -0.7, -0.7], color: "#ffffff", size: 0.3 }, // H
    ],
  };

  const atoms = molecules[type] || molecules.water;

  return (
    <group ref={groupRef}>
      {atoms.map((atom, i) => (
        <Sphere key={i} position={atom.position} args={[atom.size, 32, 32]}>
          <meshStandardMaterial
            color={atom.color}
            emissive={atom.color}
            emissiveIntensity={0.2}
            metalness={0.3}
            roughness={0.4}
          />
        </Sphere>
      ))}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
    </group>
  );
};

export default MoleculeModel;

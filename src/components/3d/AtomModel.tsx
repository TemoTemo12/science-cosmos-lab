import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Torus } from "@react-three/drei";
import * as THREE from "three";

const AtomModel = () => {
  const nucleusRef = useRef<THREE.Group>(null);
  const orbit1Ref = useRef<THREE.Group>(null);
  const orbit2Ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbit1Ref.current) {
      orbit1Ref.current.rotation.y = state.clock.getElapsedTime() * 2;
    }
    if (orbit2Ref.current) {
      orbit2Ref.current.rotation.y = -state.clock.getElapsedTime() * 1.5;
      orbit2Ref.current.rotation.x = Math.PI / 3;
    }
  });

  return (
    <group>
      {/* Nucleus */}
      <group ref={nucleusRef}>
        <Sphere args={[0.3, 32, 32]}>
          <meshStandardMaterial color="#eab308" emissive="#eab308" emissiveIntensity={0.5} />
        </Sphere>
      </group>

      {/* Electron orbit 1 */}
      <group ref={orbit1Ref}>
        <Torus args={[1.5, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#3b82f6" opacity={0.3} transparent />
        </Torus>
        <Sphere position={[1.5, 0, 0]} args={[0.1, 16, 16]}>
          <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.5} />
        </Sphere>
      </group>

      {/* Electron orbit 2 */}
      <group ref={orbit2Ref}>
        <Torus args={[2, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#8b5cf6" opacity={0.3} transparent />
        </Torus>
        <Sphere position={[2, 0, 0]} args={[0.1, 16, 16]}>
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
        </Sphere>
      </group>

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </group>
  );
};

export default AtomModel;

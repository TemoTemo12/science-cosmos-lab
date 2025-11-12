import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

interface Scene3DProps {
  children: React.ReactNode;
  className?: string;
}

const Scene3D = ({ children, className = "" }: Scene3DProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <color attach="background" args={["#0a0a0f"]} />
          {children}
          <OrbitControls enableZoom={true} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;

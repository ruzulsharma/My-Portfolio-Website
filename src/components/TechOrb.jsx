import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus, Sphere, MeshDistortMaterial } from "@react-three/drei";

function OrbScene() {
  const orbRef = useRef();
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // Slowly bob up and down
    orbRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    orbRef.current.rotation.y = t * 0.4;

    // Orbit rings rotate on different axes
    ring1.current.rotation.x = t * 0.6;
    ring1.current.rotation.y = t * 0.3;

    ring2.current.rotation.z = t * 0.5;
    ring2.current.rotation.x = t * 0.2;
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1.5} color="#fcd34d" />
      <pointLight position={[-3, -2, 2]} intensity={0.8} color="#f59e0b" />

      {/* Core glowing sphere */}
      <group ref={orbRef}>
        <Sphere args={[0.7, 64, 64]}>
          <MeshDistortMaterial
            color="#fbbf24"
            emissive="#92400e"
            emissiveIntensity={0.6}
            distort={0.35}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>

        {/* Inner glow sphere */}
        <Sphere args={[0.75, 32, 32]}>
          <meshBasicMaterial color="#fcd34d" transparent opacity={0.07} />
        </Sphere>
      </group>

      {/* Orbit ring 1 */}
      <group ref={ring1}>
        <Torus args={[1.3, 0.018, 16, 100]}>
          <meshStandardMaterial
            color="#fcd34d"
            emissive="#fcd34d"
            emissiveIntensity={0.5}
            metalness={1}
            roughness={0.1}
          />
        </Torus>
      </group>

      {/* Orbit ring 2 */}
      <group ref={ring2}>
        <Torus args={[1.6, 0.012, 16, 100]}>
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#f59e0b"
            emissiveIntensity={0.3}
            metalness={1}
            roughness={0.2}
          />
        </Torus>
      </group>
    </>
  );
}

const TechOrb = ({ size = 220 }) => {
  return (
    <div style={{ width: size, height: size }} className="mx-auto">
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <OrbScene />
      </Canvas>
    </div>
  );
};

export default TechOrb;

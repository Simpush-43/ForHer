import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function GiftBox({ opened, onClick }) {
  const lidGroup = useRef();
  const boxGroup = useRef();

  useFrame((_, delta) => {
    // subtle breathing animation
    if (boxGroup.current && !opened) {
      boxGroup.current.scale.y =
        1 + Math.sin(Date.now() * 0.002) * 0.008;
    }

    // lid opening animation
    if (opened && lidGroup.current) {
      lidGroup.current.rotation.x = Math.max(
        lidGroup.current.rotation.x - delta * 1.2,
        -Math.PI / 1.6
      );
    }
  });

  return (
    <group
      ref={boxGroup}
      onClick={onClick}
      position={[0, -0.15, 0]}
      scale={0.4}   // 👈 MAIN SIZE CONTROL
    >
      {/* Box body */}
      <mesh position={[0, 0.15, -0.15]}>
        <boxGeometry args={[2, 0.75, 2]} />
        <meshStandardMaterial color="#8b0000" roughness={0.45} />
      </mesh>

      {/* Lid pivot group */}
      <group ref={lidGroup} position={[0, 0.7, -1]}>
        <mesh position={[0, -0.05, 1]}>
          <boxGeometry args={[2.05, 0.22, 2.05]} />
          <meshStandardMaterial color="#b30000" />
        </mesh>
      </group>

      {/* Vertical ribbon */}
      <mesh position={[0, 0.28, 1.01]}>
        <boxGeometry args={[0.25, 0.955, 0.05]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      {/* Horizontal ribbon */}
      <mesh position={[0, 0.65, 0]}>
        <boxGeometry args={[2.1, 0.10, 2.1]} />
        <meshStandardMaterial color="#d4af37" />
      </mesh>

      {/* Inner glow */}
      {opened && (
        <mesh position={[0, 0.45, 0]}>
          <sphereGeometry args={[0.45, 14, 16]} />
          <meshStandardMaterial
            emissive="#ff4d4d"
            emissiveIntensity={1}
            transparent
            opacity={0.55}
          />
        </mesh>
      )}
    </group>
  );
}

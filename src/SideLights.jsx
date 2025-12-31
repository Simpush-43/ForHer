import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SideLights({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  swayOffset = 0,
}) {
  const { scene } = useGLTF("/lights.glb");
  const lightRef = useRef();

  useFrame(() => {
    if (!lightRef.current) return;

    // slightly different sway per string
    lightRef.current.rotation.z =
      Math.sin(Date.now() * 0.001 + swayOffset) * 0.05;
  });

  return (
    <primitive
      ref={lightRef}
      object={scene.clone()} // 🔥 important for multiple copies
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
}

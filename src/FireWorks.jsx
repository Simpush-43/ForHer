import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef,useEffect } from "react";

export default function Fireworks3D({ position = [0, 2.5, -1] }) {
  const { scene } = useGLTF("/fireworks.glb");
  const ref = useRef();
  const timeRef = useRef(0);
const soundPlayed = useRef(false);
 useEffect(() => {
    // 🔊 play sound ONCE
    if (!soundPlayed.current) {
      const audio = new Audio("/firework.mp3");
      audio.volume = 0.6;
      audio.play().catch(() => {}); // safe for autoplay rules

      // 📳 vibration (mobile only)
      navigator.vibrate?.([80, 40, 120]);

      soundPlayed.current = true;
    }
  }, []);
  useFrame((_, delta) => {
    if (!ref.current) return;

    timeRef.current += delta;

    // 🔥 glow pulse (sine wave)
    const pulse = 0.8 + Math.sin(timeRef.current * 3) * 0.6;

    ref.current.traverse((obj) => {
      if (obj.material) {
        obj.material.emissive?.set("#ff4d6d"); // warm gold
        obj.material.emissiveIntensity = pulse;
      }
    });

    // thoda sa rotation for life
    ref.current.rotation.y += delta * 0.6;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      scale={.5}
    />
  );
}

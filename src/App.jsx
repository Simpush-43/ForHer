import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import Rose from "./Rose";
import Stars from "./Stars";
import GiftBox from "./GiftBox";
import SideLights from "./SideLights";
import FireWorks from "./FireWorks";
import Countdown from "./Countdown";
import Recap from "./Recap";
function CameraZoom() {
  useFrame(({ camera }) => {
    camera.position.z = Math.max(4, camera.position.z - 0.01);
  });
  return null;
}

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [canClick, setCanClick] = useState(true);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showRecapButton, setShowRecapButton] = useState(false);
  const [showRecap, setShowRecap] = useState(false);

  const pianoRef = useRef(null);
  const musicStarted = useRef(false);
  const NEW_YEAR_TIME = new Date("2026-01-01T00:00:00").getTime();
  const DEV_MODE = true; // 👈 true = countdown OFF

  const [unlocked, setUnlocked] = useState(DEV_MODE);

  if (!musicStarted.current) {
    pianoRef.current = new Audio("/piano.mp3");
    pianoRef.current.loop = true;
    pianoRef.current.volume = 0.0; // soft background
    pianoRef.current.play().catch(() => {});
    musicStarted.current = false;
  }
  const handleGiftClick = () => {
    if (!canClick) return;

    setCanClick(false);
    setClicks((c) => c + 1);

    setTimeout(() => {
      setCanClick(true);
    }, 700);
    setTimeout(() => {
      setShowRecapButton(true);
    }, 3000);
  };
  const boxOpened = clicks >= 2;
  const showRose = clicks >= 3;
  useEffect(() => {
    if (showRose) {
      setShowFireworks(true);
      setTimeout(() => {
        setShowFireworks(false);
      }, 3500);
    }
  }, [showRose]);

  return (
    <div className="container">
      {!DEV_MODE && !unlocked && (
        <Countdown
          targetTime={NEW_YEAR_TIME}
          onComplete={() => setUnlocked(true)}
        />
      )}
      {unlocked && (
        <>
          <Stars />

          <h1 className="title">
            {clicks === 0 && "Let's Welcome The 2026 together Jerry 💗 ✨"}
            {clicks === 1 && "Press more 👀"}
            {clicks === 2 && "Okay… wait ❤️"}
            {clicks >= 3 && "I want every year with you 🌹"}
          </h1>

          <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.5, 6], fov: 45 }}>
            {/* Base lights */}
            <ambientLight intensity={0.4} />
            <directionalLight
              position={[3, 5, 4]}
              intensity={5.4}
              color="#ffb3b3"
            />

            {/* Warm side glow */}
            <pointLight
              position={[-3, 2.5, 2]}
              intensity={0.2}
              color="#ffffff"
            />
            <pointLight position={[-3, 2, 1]} intensity={0.6} color="#ffd966" />
            <pointLight position={[3, 2, 1]} intensity={0.6} color="#ffd966" />

            <Suspense fallback={null}>
              {/* LEFT SIDE LIGHT STRINGS */}
              {[
                [-12, 6, -3],
                [-11, 5.8, -5],
                [-10.5, 5.6, -6],
                [-12, 6, -3],
              ].map((pos, i) => (
                <SideLights
                  key={`left-${i}`}
                  position={pos}
                  rotation={[0, 0.09, 0]}
                  scale={3}
                  swayOffset={i}
                />
              ))}

              {/* RIGHT SIDE LIGHT STRINGS */}
              {[
                [15, 7, -3],
                [14, 6.2, -5],
                [13, 5.9, -6],
                [13, 5.9, -6],
              ].map((pos, i) => (
                <SideLights
                  key={`right-${i}`}
                  position={pos}
                  rotation={[0, -0.3, 0]}
                  scale={3}
                  swayOffset={i + 10}
                />
              ))}

              {/* GIFT BOX */}
              {!showRose && (
                <GiftBox opened={boxOpened} onClick={handleGiftClick} />
              )}

              {/* ROSE */}
              {showRose && (
                <>
                  {showFireworks && (
                    <>
                      <FireWorks position={[-0.2, -3, -8]} />
                      <FireWorks position={[-0.4, -2.8, -8]} />
                      <FireWorks position={[-0.2, -3, -8]} />
                    </>
                  )}
                </>
              )}

              <CameraZoom />
            </Suspense>
          </Canvas>
          {showRose&& !showRecap &&(
            <div className="rose-overlay">
               <Rose bloom={showRecap}/>
            </div>
          )}
          {showRecapButton && !showRecap && (
            <div className="recap-btn-wrapper">
              <button className="recap-btn" onClick={() => setShowRecap(true)}>
                Let’s recap our best moments of 2025 ✨
              </button>
            </div>
          )}
          {showRecap && <Recap onClose={() => setShowRecap(false)} />}
        </>
      )}
    </div>
  );
}

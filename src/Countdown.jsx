import { useEffect, useState } from "react";

export default function Countdown({ targetTime, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(
    Math.max(0, targetTime - Date.now())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Math.max(0, targetTime - Date.now());
      setTimeLeft(diff);

      if (diff === 0) {
        clearInterval(interval);
        onComplete();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetTime, onComplete]);

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return (
    <div className="countdown">
      <h2>✨ Countdown Begins ✨</h2>

      <div className="time">
        <span>{days}d</span>
        <span>{hours}h</span>
        <span>{minutes}m</span>
        <span>{seconds}s</span>
      </div>

      <p>Something special is waiting… 🎁</p>
    </div>
  );
}

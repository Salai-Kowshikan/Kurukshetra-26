import { useState, useEffect } from "react";

/**
 * Custom hook for the cyberpunk glitch effect.
 * Returns a boolean `glitch` state that toggles on/off at random intervals.
 *
 * @param duration - How long the glitch stays active (ms). Default: 500
 * @param minInterval - Minimum time between glitches (ms). Default: 3000
 * @param maxExtra - Additional random time added to interval (ms). Default: 2000
 */
export default function useGlitch(
  duration = 500,
  minInterval = 3000,
  maxExtra = 2000
): boolean {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setGlitch(true);
        setTimeout(() => setGlitch(false), duration);
      },
      minInterval + Math.random() * maxExtra
    );

    return () => clearInterval(interval);
  }, [duration, minInterval, maxExtra]);

  return glitch;
}

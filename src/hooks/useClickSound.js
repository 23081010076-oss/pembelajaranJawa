/**
 * useClickSound — plays a short UI click sound using Web Audio API.
 * No external audio file needed; generates the tone programmatically.
 *
 * Usage:
 *   const playClick = useClickSound();
 *   <button onClick={() => { playClick(); doSomething(); }}>...</button>
 */
import { getSoundEffectVolume } from './useSoundEffectVolume.js';

let sharedCtx = null;

function getSharedCtx() {
  if (typeof window === 'undefined') return null;
  try {
    if (!sharedCtx) {
      sharedCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (sharedCtx.state === 'suspended') {
      sharedCtx.resume();
    }
    return sharedCtx;
  } catch {
    return null;
  }
}

export function useClickSound({ frequency = 520, duration = 0.08, volume = 0.45 } = {}) {
  const play = () => {
    try {
      const effectiveVolume = volume * getSoundEffectVolume();
      if (effectiveVolume <= 0) return;

      const ctx = getSharedCtx();
      if (!ctx) return;

      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
      // Slight pitch drop for a natural "tap" feel
      oscillator.frequency.exponentialRampToValueAtTime(frequency * 0.75, ctx.currentTime + duration);

      gainNode.gain.setValueAtTime(effectiveVolume, ctx.currentTime);
      // Quick fade-out to avoid click artifacts
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + duration);
    } catch {
      // Silently ignore if Web Audio API is not supported
    }
  };

  return play;
}

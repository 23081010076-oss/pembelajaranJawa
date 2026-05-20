import { useEffect, useState } from 'react';

const STORAGE_KEY = 'javanesia-sound-effect-volume';
const CHANGE_EVENT = 'javanesia-sound-effect-volume-change';
const DEFAULT_VOLUME = 1;

function clampVolume(value) {
  return Math.min(1, Math.max(0, value));
}

export function getSoundEffectVolume() {
  if (typeof window === 'undefined') return DEFAULT_VOLUME;

  const savedVolume = window.localStorage.getItem(STORAGE_KEY);
  const parsedVolume = Number.parseFloat(savedVolume);

  if (Number.isNaN(parsedVolume)) return DEFAULT_VOLUME;
  return clampVolume(parsedVolume);
}

export function setSoundEffectVolume(volume) {
  if (typeof window === 'undefined') return;

  const nextVolume = clampVolume(volume);
  window.localStorage.setItem(STORAGE_KEY, String(nextVolume));
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: nextVolume }));
}

export function useSoundEffectVolume() {
  const [volume, setVolumeState] = useState(getSoundEffectVolume);

  useEffect(() => {
    const handleVolumeChange = (event) => {
      setVolumeState(typeof event.detail === 'number' ? event.detail : getSoundEffectVolume());
    };

    window.addEventListener(CHANGE_EVENT, handleVolumeChange);
    window.addEventListener('storage', handleVolumeChange);

    return () => {
      window.removeEventListener(CHANGE_EVENT, handleVolumeChange);
      window.removeEventListener('storage', handleVolumeChange);
    };
  }, []);

  const setVolume = (nextVolume) => {
    setSoundEffectVolume(nextVolume);
    setVolumeState(clampVolume(nextVolume));
  };

  return [volume, setVolume];
}

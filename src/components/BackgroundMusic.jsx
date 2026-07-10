import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Volume1, Volume2, VolumeX } from 'lucide-react';
import { useSoundEffectVolume } from '../hooks/useSoundEffectVolume.js';

const DEFAULT_VOLUME = 0.25;

function readSavedVolume() {
  if (typeof window === 'undefined') return DEFAULT_VOLUME;

  const savedVolume = window.localStorage.getItem('javanesia-backsound-volume');
  const parsedVolume = Number.parseFloat(savedVolume);

  if (Number.isNaN(parsedVolume)) return DEFAULT_VOLUME;
  return Math.min(1, Math.max(0, parsedVolume));
}

export function BackgroundMusic({ isPlayingApp, hasTopNav = false }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVolumeOpen, setIsVolumeOpen] = useState(false);
  const [volume, setVolume] = useState(readSavedVolume);
  const [soundEffectVolume, setSoundEffectVolume] = useSoundEffectVolume();
  const audioRef = useRef(null);
  const effectiveVolume = isMuted ? 0 : volume;
  const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  // Efek untuk memutar atau memberhentikan lagu
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = effectiveVolume;
    audio.muted = isMuted || effectiveVolume === 0;

    if (isPlayingApp) {
      // Coba putar otomatis
      const tryPlay = () => {
        if (audio.paused && !isMuted && effectiveVolume > 0) {
          audio.play().catch(() => {
            // Jika diblokir browser, abaikan saja, karena listener di bawah
            // akan mencoba lagi saat ada interaksi.
          });
        }
      };

      tryPlay();

      // Buat listener global: kapanpun user mengklik halaman, play musik (jika belum)
      const handleInteraction = () => {
        tryPlay();
        // Setelah berhasil berinteraksi, event listener tidak begitu dibutuhkan lagi,
        // tapi kita biarkan atau hapus terserah. Di sini kita biarkan saja
        // karena tryPlay() punya guard `audio.paused`.
      };

      window.addEventListener('click', handleInteraction);
      window.addEventListener('keydown', handleInteraction);
      window.addEventListener('touchstart', handleInteraction);

      return () => {
        window.removeEventListener('click', handleInteraction);
        window.removeEventListener('keydown', handleInteraction);
        window.removeEventListener('touchstart', handleInteraction);
      };
    } else {
      audio.pause();
    }
  }, [isPlayingApp, isMuted, volume]);

  // Efek untuk handle mute/unmute manual via tombol
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = effectiveVolume;
      audioRef.current.muted = isMuted || effectiveVolume === 0;
      // Jika di-unmute oleh user dan status app playing, coba paksa play lagi
      if (!isMuted && effectiveVolume > 0 && isPlayingApp) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [isMuted, effectiveVolume, isPlayingApp]);

  useEffect(() => {
    window.localStorage.setItem('javanesia-backsound-volume', String(volume));
  }, [volume]);

  const toggleVolumePanel = () => {
    setIsVolumeOpen((value) => !value);
  };

  const handleVolumeChange = (event) => {
    const nextVolume = Number(event.target.value) / 100;
    setVolume(nextVolume);
    setIsMuted(nextVolume === 0);
  };

  const handleSoundEffectVolumeChange = (event) => {
    setSoundEffectVolume(Number(event.target.value) / 100);
  };

  if (!isPlayingApp) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/sounds/gamelanjawa.mp3"
        loop
        preload="auto"
      />
      <div className={`fixed right-3 z-[999] flex items-start gap-2 border-2 border-orange-200 bg-white px-2 py-2 text-orange-600 shadow-[0_8px_20px_rgba(46,29,16,0.15)] ${hasTopNav ? 'top-[136px]' : 'top-[74px]'} md:bottom-8 md:right-8 md:top-auto ${isVolumeOpen ? 'rounded-2xl' : 'rounded-full'}`}>
        <button
          type="button"
          onClick={toggleVolumePanel}
          className="grid size-9 place-items-center rounded-full bg-orange-100 transition-all hover:-translate-y-0.5 hover:bg-orange-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 md:size-10"
          aria-expanded={isVolumeOpen}
          aria-controls="backsound-volume-panel"
          aria-label="Atur Volume Musik Latar"
          title="Atur Volume Musik Latar"
        >
          <VolumeIcon size={22} />
        </button>

        {isVolumeOpen && (
          <div id="backsound-volume-panel" className="grid min-w-[185px] gap-2 py-0.5">
            <div className="flex items-center gap-2">
              <span className="w-10 text-[0.65rem] font-black uppercase tracking-wide text-orange-700" aria-hidden="true">
                Musik
              </span>
              <label className="sr-only" htmlFor="backsound-volume">
                Volume Musik Latar
              </label>
              <input
                id="backsound-volume"
                type="range"
                min="0"
                max="100"
                value={Math.round(effectiveVolume * 100)}
                onChange={handleVolumeChange}
                className="h-2 w-20 cursor-pointer md:w-24"
                style={{ accentColor: '#f97316' }}
                aria-label="Volume Musik Latar"
                title={`Volume Musik Latar ${Math.round(effectiveVolume * 100)}%`}
              />
              <span className="w-9 text-right text-xs font-black tabular-nums text-orange-700" aria-hidden="true">
                {Math.round(effectiveVolume * 100)}%
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex w-10 items-center gap-1 text-[0.65rem] font-black uppercase tracking-wide text-orange-700" aria-hidden="true">
                <Sparkles size={11} />
                Efek
              </span>
              <label className="sr-only" htmlFor="sound-effect-volume">
                Volume Efek Game
              </label>
              <input
                id="sound-effect-volume"
                type="range"
                min="0"
                max="100"
                value={Math.round(soundEffectVolume * 100)}
                onChange={handleSoundEffectVolumeChange}
                className="h-2 w-20 cursor-pointer md:w-24"
                style={{ accentColor: '#16a34a' }}
                aria-label="Volume Efek Game"
                title={`Volume Efek Game ${Math.round(soundEffectVolume * 100)}%`}
              />
              <span className="w-9 text-right text-xs font-black tabular-nums text-green-700" aria-hidden="true">
                {Math.round(soundEffectVolume * 100)}%
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

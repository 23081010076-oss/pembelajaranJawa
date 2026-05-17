import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function BackgroundMusic({ isPlayingApp }) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Efek untuk memutar atau memberhentikan lagu
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlayingApp) {
      audio.volume = 0.25; // Volume background yang nyaman
      
      // Coba putar otomatis
      const tryPlay = () => {
        if (audio.paused && !isMuted) {
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
  }, [isPlayingApp, isMuted]);

  // Efek untuk handle mute/unmute manual via tombol
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      // Jika di-unmute oleh user dan status app playing, coba paksa play lagi
      if (!isMuted && isPlayingApp) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [isMuted, isPlayingApp]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
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
      <button
        type="button"
        onClick={toggleMute}
        className="fixed bottom-6 right-4 z-[999] grid size-[52px] place-items-center rounded-full border-2 border-orange-200 bg-orange-100 text-orange-600 shadow-[0_8px_20px_rgba(46,29,16,0.15)] transition-all hover:-translate-y-1 hover:bg-orange-200 hover:shadow-[0_12px_24px_rgba(46,29,16,0.2)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 md:bottom-8 md:right-8"
        aria-label={isMuted ? 'Nyalakan Musik Latar' : 'Matikan Musik Latar'}
        title={isMuted ? 'Nyalakan Musik Latar' : 'Matikan Musik Latar'}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </>
  );
}

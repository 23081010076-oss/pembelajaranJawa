import React from 'react';
import { CheckCircle2, ChevronRight, BookOpen, Circle } from 'lucide-react';
import { useClickSound } from '../hooks/useClickSound.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import {
  LEARNING_PROGRESS_KEY,
  getMateriProgressStats,
  initialLearningProgress,
  normalizeLearningProgress,
} from '../utils/learningProgress.js';

export function MateriPage({ materiItems, onOpenMateri }) {
  const playClick = useClickSound();
  const [learningProgress] = useLocalStorage(LEARNING_PROGRESS_KEY, initialLearningProgress);
  const normalizedProgress = normalizeLearningProgress(learningProgress);
  const materiStats = getMateriProgressStats(materiItems, normalizedProgress);

  return (
    <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-5 px-1 py-1 sm:gap-8 sm:px-6 sm:py-2 lg:px-8">

      {/* Header */}
      <header className="w-full max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-orange-300 bg-white/80 px-3 py-1.5 text-[0.68rem] font-black uppercase tracking-[0.18em] text-orange-600 shadow-sm backdrop-blur-sm sm:px-4 sm:text-xs">
          <BookOpen size={13} aria-hidden="true" />
          Materi Parikan
        </div>
        <h1
          className="materi-page-title mt-3 font-black uppercase leading-none text-white drop-shadow-2xl"
        >
          Pilih Materi
        </h1>
        <p className="mx-auto mt-2 max-w-[18rem] text-sm font-bold leading-snug text-[#2e1d10]/80 drop-shadow-sm sm:max-w-none">
          {materiItems.length} materi kasedhiya — klik kanggo maca kanthi lengkap
        </p>
        <div className="mx-auto mt-4 w-full max-w-md rounded-2xl border-2 border-white/80 bg-white/85 p-3 shadow-sm sm:p-4">
          <div className="flex items-center justify-between gap-3 text-[0.68rem] font-black uppercase tracking-[0.12em] text-orange-600 sm:text-xs">
            <span>Kemajuan Materi</span>
            <span>{materiStats.completedCount}/{materiStats.total} rampung</span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-orange-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-green-500 to-orange-400 transition-all duration-500"
              style={{ width: `${materiStats.percent}%` }}
            />
          </div>
        </div>
      </header>

      {/* Grid kartu materi */}
      <nav
        className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        aria-label="Daftar materi parikan"
      >
        {materiItems.map((item, index) => {
          const isCompleted = Boolean(normalizedProgress.completedMateri[item.title]);
          const isVisited = Boolean(normalizedProgress.visitedMateri[item.title]);

          return (
            <button
            key={item.title}
            type="button"
            onClick={() => { playClick(); onOpenMateri(item); }}
            className={`group relative flex min-w-0 flex-col gap-2.5 overflow-hidden rounded-[1.15rem] border-[3px] bg-white/92 p-4 text-left shadow-[0_5px_0_rgba(95,60,31,0.14),0_10px_20px_rgba(78,45,21,0.10)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-1.5 hover:border-orange-300 hover:shadow-[0_10px_0_rgba(95,60,31,0.12),0_18px_30px_rgba(78,45,21,0.18)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-300 active:translate-y-0 sm:gap-3 sm:rounded-2xl sm:border-4 sm:p-5 animate-[fadeInUp_0.55s_ease-out] ${
              isCompleted ? 'border-green-300' : isVisited ? 'border-orange-300' : 'border-white/90'
            }`}
            style={{ '--stagger-delay': `${index * 80}ms`, animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
            aria-label={`Buka materi: ${item.title}`}
          >
            {/* Shine overlay */}
            <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/60 via-transparent to-transparent" />

            {/* Number badge */}
            <div className="relative flex min-w-0 flex-wrap items-center gap-2.5">
              <span className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full text-sm font-black text-white shadow-md sm:size-9 ${
                isCompleted ? 'bg-green-500' : 'bg-gradient-to-br from-[#ff9b2f] to-[#ffba73]'
              }`}>
                {index + 1}
              </span>
              <span className={`inline-flex min-w-0 items-center gap-1 rounded-full px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-wide ${
                isCompleted
                  ? 'bg-green-100 text-green-700'
                  : isVisited
                  ? 'bg-orange-100 text-orange-700'
                  : 'bg-stone-100 text-stone-500'
              }`}>
                {isCompleted ? <CheckCircle2 size={13} aria-hidden="true" /> : <Circle size={13} aria-hidden="true" />}
                {isCompleted ? 'Rampung' : isVisited ? 'Wis Dibuka' : 'Durung'}
              </span>
            </div>

            {/* Title */}
            <h2 className="relative text-[1.05rem] font-black leading-snug text-[#4f2912] sm:text-[clamp(1.05rem,2vw,1.2rem)]">
              {item.title}
            </h2>

            {/* Short description */}
            {item.short && (
              <p className="relative text-sm font-semibold leading-relaxed text-[#7a5030]/80">
                {item.short}
              </p>
            )}

            {/* Example preview */}
            {item.example && (
              <p className="materi-example-preview relative rounded-xl bg-orange-50 px-3 py-2 text-xs font-bold italic leading-relaxed text-orange-700 ring-1 ring-orange-200">
                "{item.example.split('\n')[0]}"
              </p>
            )}

            {/* Arrow */}
            <span className="relative mt-auto flex items-center gap-1 text-xs font-black uppercase tracking-wide text-orange-500 transition-all group-hover:gap-2">
              Waca Materi
              <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

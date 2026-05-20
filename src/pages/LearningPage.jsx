import React from 'react';
import { BookOpenCheck, CheckCircle2, PenLine, Sparkles } from 'lucide-react';
import { MenuIcon } from '../components/Icon.jsx';

export function LearningPage({ item }) {
  const isCapaian = item.title === 'Capaian Pembelajaran';
  const capaianMeta = [
    {
      title: 'Mangerteni Parikan',
      icon: BookOpenCheck,
      className: 'bg-[linear-gradient(135deg,rgba(236,253,245,0.96),rgba(255,255,255,0.92))] border-emerald-200',
      iconClassName: 'bg-emerald-500 text-white',
    },
    {
      title: 'Mbedakake Struktur',
      icon: CheckCircle2,
      className: 'bg-[linear-gradient(135deg,rgba(255,247,237,0.96),rgba(255,255,255,0.92))] border-orange-200',
      iconClassName: 'bg-orange-500 text-white',
    },
    {
      title: 'Ngerti Unggah-ungguh',
      icon: Sparkles,
      className: 'bg-[linear-gradient(135deg,rgba(239,246,255,0.96),rgba(255,255,255,0.92))] border-sky-200',
      iconClassName: 'bg-sky-500 text-white',
    },
    {
      title: 'Ngrakit Parikan',
      icon: PenLine,
      className: 'bg-[linear-gradient(135deg,rgba(255,251,235,0.96),rgba(255,255,255,0.92))] border-amber-200',
      iconClassName: 'bg-amber-500 text-white',
    },
    {
      title: 'Ngembangake Kosakata',
      icon: PenLine,
      className: 'bg-[linear-gradient(135deg,rgba(240,253,250,0.96),rgba(255,255,255,0.92))] border-teal-200',
      iconClassName: 'bg-teal-600 text-white',
    },
  ];
  const capaianCards = isCapaian
    ? item.points.map((point, index) => ({
        label: `Capaian ${index + 1}`,
        text: point,
        ...(capaianMeta[index] ?? capaianMeta[0]),
      }))
    : [];

  return (
    <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-7 px-4 py-2 sm:px-6 lg:px-8">
      <header className="relative overflow-hidden rounded-[8px] border border-white/80 bg-white/82 px-5 py-6 text-center shadow-[0_18px_40px_rgba(77,48,24,0.16)] backdrop-blur-md sm:px-8 sm:py-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#0ea5a4]" />
        <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-[#fff3d6] text-[#d97706] shadow-inner ring-4 ring-white sm:size-20">
          <MenuIcon name={item.icon} size={36} />
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#edf7f5] px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-[#0f766e]">
          <Sparkles size={14} aria-hidden="true" />
          Javanesia
        </span>
        <h1 className="mt-4 text-[clamp(2.1rem,5vw,4.1rem)] font-black uppercase leading-[0.95] text-[#2b1d12]">
          {item.title}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-relaxed text-[#6b4a2d] sm:text-lg">
          {item.body}
        </p>
      </header>

      {isCapaian ? (
        <section className="grid gap-5" aria-label={item.eyebrow ?? item.title}>
          <div className="overflow-hidden rounded-[8px] border border-white/85 bg-white/88 shadow-[0_14px_34px_rgba(77,48,24,0.13)] backdrop-blur-sm">
            <div className="grid gap-3 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:px-6">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full bg-[#edf7f5] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#0f766e]">
                  <BookOpenCheck size={14} aria-hidden="true" />
                  Peta Capaian
                </p>
                <h2 className="mt-3 text-[clamp(1.7rem,4vw,2.6rem)] font-black leading-none text-[#2b1d12]">
                  Siswa diarahake saka mangerteni nganti bisa nulis parikan.
                </h2>
              </div>
              <div className="rounded-[8px] bg-[#fff3d6] px-4 py-3 text-center ring-1 ring-orange-200">
                <p className="text-4xl font-black leading-none text-[#d97706]">5</p>
                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-[#8a541d]">Capaian</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capaianCards.map((card) => {
              const CardIcon = card.icon;
              return (
              <article
                key={card.label}
                className={`group relative overflow-hidden rounded-[8px] border p-5 shadow-[0_12px_28px_rgba(77,48,24,0.13)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(77,48,24,0.17)] ${card.className}`}
              >
                <span className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-white/18" />
                <div className="relative flex items-start justify-between gap-3">
                  <div className={`grid size-11 shrink-0 place-items-center rounded-[8px] shadow-[0_5px_12px_rgba(46,29,16,0.18)] ${card.iconClassName}`}>
                    <CardIcon size={21} aria-hidden="true" strokeWidth={3} />
                  </div>
                  <span className="rounded-full bg-white/75 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#9a5a1a]">
                    {card.label}
                  </span>
                </div>
                <div className="relative mt-4">
                  <h3 className="text-xl font-black leading-tight text-[#2b1d12]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm font-extrabold leading-relaxed text-[#4a3120]">
                    {card.text}
                  </p>
                </div>
              </article>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="grid gap-4 sm:gap-5" aria-label={item.eyebrow ?? item.title}>
          {item.points.map((point, index) => (
            <article
              key={point}
              className="group grid gap-4 rounded-[8px] border border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(255,246,226,0.9))] p-4 shadow-[0_12px_28px_rgba(77,48,24,0.12)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(77,48,24,0.16)] sm:grid-cols-[72px_1fr] sm:p-5"
            >
              <div className="flex items-center gap-3 sm:block">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#d97706] text-xl font-black text-white shadow-[0_5px_0_rgba(146,64,14,0.24)] sm:mx-auto sm:size-14">
                  {index + 1}
                </div>
                <CheckCircle2 className="text-[#0f766e] sm:mx-auto sm:mt-3" size={24} aria-hidden="true" strokeWidth={3} />
              </div>
              <p className="text-[clamp(1rem,2.1vw,1.28rem)] font-extrabold leading-relaxed text-[#352315]">
                {point}
              </p>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}

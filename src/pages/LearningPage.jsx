import React from 'react';
import { Award, BookOpen, CheckCircle2, Sparkles, Target } from 'lucide-react';
import { MenuIcon } from '../components/Icon.jsx';

export function LearningPage({ item }) {
  const hasPoints = Array.isArray(item.points) && item.points.length > 0;
  const isCapaian = item.title === 'Capaian Pembelajaran';
  const phaseLabel = item.phase?.fase ?? 'D';
  const elementLabel = item.phase?.element ?? 'Menulis';
  const capaianHighlights = [
    {
      label: 'Fase',
      value: phaseLabel,
      icon: Target,
    },
    {
      label: 'Elemen',
      value: elementLabel,
      icon: BookOpen,
    },
    {
      label: 'Fokus',
      value: 'Keterampilan menulis',
      icon: Award,
    },
  ];
  const capaianBenefits = [
    'Paham tujuan belajar kanthi cetha.',
    'Siap ngembangake kosakata lan gagasan anyar.',
    'Lebih percaya diri nalika maju ke materi lan evaluasi.',
  ];

  return (
    <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 px-4 py-2 sm:px-6 lg:px-8">
      <header className="relative overflow-hidden rounded-[28px] border-4 border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(255,247,232,0.94))] shadow-[0_18px_40px_rgba(77,48,24,0.16)] backdrop-blur-md">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#0ea5a4]" />
        <div className="pointer-events-none absolute -left-16 top-10 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-amber-200/40 blur-3xl" />

        <div className={`relative grid gap-6 p-5 sm:p-8 lg:p-10 ${isCapaian ? 'lg:grid-cols-[1.15fr_0.85fr]' : ''}`}>
          <div className="text-center lg:text-left">
            <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-[#fff3d6] text-[#d97706] shadow-[0_10px_26px_rgba(216,119,6,0.18)] ring-4 ring-white sm:size-20 lg:mx-0">
              <MenuIcon name={item.icon} size={36} />
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#edf7f5] px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-[#0f766e]">
              <Sparkles size={14} aria-hidden="true" />
              Javanesia
            </span>
            <h1 className="mt-4 text-[clamp(2.2rem,5vw,4.4rem)] font-black uppercase leading-[0.92] text-[#2b1d12]">
              {item.title}
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-relaxed text-[#6b4a2d] sm:text-lg lg:mx-0">
              {item.body}
            </p>
          </div>

          {isCapaian && (
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {capaianHighlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <article
                    key={highlight.label}
                    className="rounded-[22px] border-2 border-white/80 bg-white/88 p-4 text-center shadow-[0_10px_24px_rgba(77,48,24,0.08)]"
                  >
                    <Icon size={22} className="mx-auto text-[#d97706]" aria-hidden="true" />
                    <p className="mt-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#9a5a1a]">
                      {highlight.label}
                    </p>
                    <p className="mt-1 text-lg font-black leading-tight text-[#2b1d12]">
                      {highlight.value}
                    </p>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </header>

      {isCapaian ? (
        <section className="mx-auto grid w-full max-w-5xl gap-5" aria-label={item.eyebrow ?? item.title}>
          <article className="overflow-hidden rounded-[28px] border-4 border-white/85 bg-white/92 shadow-[0_14px_34px_rgba(77,48,24,0.14)]">
            <div className="h-2 bg-[#d97706]" />
            <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
              <div className="rounded-[24px] border border-orange-100 bg-[linear-gradient(180deg,rgba(255,248,233,0.98),rgba(255,255,255,0.92))] p-5 sm:p-6">
                <p className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#9a5a1a]">
                  <Sparkles size={13} aria-hidden="true" />
                  Ringkesan Capaian
                </p>
                <p className="mt-4 text-[clamp(1.25rem,2.6vw,1.85rem)] font-black leading-relaxed text-[#2b1d12]">
                  {item.body}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {capaianBenefits.map((benefit, index) => (
                  <article
                    key={benefit}
                    className="flex items-start gap-3 rounded-[22px] border border-orange-100 bg-white/92 p-4 shadow-[0_10px_22px_rgba(77,48,24,0.08)]"
                  >
                    <div className="grid size-10 shrink-0 place-items-center rounded-2xl bg-orange-500 text-white shadow-[0_6px_0_rgba(146,64,14,0.18)]">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-sm font-bold leading-relaxed text-[#5d351d]">
                      {benefit}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </article>
        </section>
      ) : hasPoints ? (
        <section className="grid gap-4 sm:gap-5" aria-label={item.eyebrow ?? item.title}>
          {item.points.map((point, index) => (
            <article
              key={point}
              className="group grid gap-4 rounded-[24px] border-4 border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,246,226,0.92))] p-4 shadow-[0_12px_28px_rgba(77,48,24,0.12)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(77,48,24,0.16)] sm:grid-cols-[76px_1fr] sm:p-5"
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
      ) : (
        <section className="grid gap-4 sm:gap-5" aria-label={item.eyebrow ?? item.title}>
          <article className="group rounded-[24px] border-4 border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(255,246,226,0.9))] p-6 shadow-[0_12px_28px_rgba(77,48,24,0.12)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(77,48,24,0.16)] sm:p-8">
            <p className="text-justify text-[clamp(1.1rem,2.2vw,1.4rem)] font-extrabold leading-relaxed text-[#352315] hyphens-auto">
              {item.body}
            </p>
          </article>
        </section>
      )}
    </div>
  );
}

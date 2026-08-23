import React from 'react';
import { Award, BookOpen, CheckCircle2, Sparkles, Target } from 'lucide-react';
import { MenuIcon } from '../components/Icon.jsx';

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function ForeignText({ text, terms = [], italicAll = false }) {
  if (!text) return null;
  if (italicAll) return <em>{text}</em>;
  if (terms.length === 0) return text;

  const termSet = new Set(terms.map((term) => term.toLocaleLowerCase()));
  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'giu');

  return text.split(pattern).map((part, index) => (
    termSet.has(part.toLocaleLowerCase())
      ? <em key={`${part}-${index}`}>{part}</em>
      : <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
  ));
}


export function LearningPage({ item }) {
  const hasPoints = Array.isArray(item.points) && item.points.length > 0;
  const isCapaian = item.title === 'Capaian Pembelajaran';
  const phaseLabel = item.phase?.fase ?? 'D';
  const elementLabel = item.phase?.element ?? 'Menulis';

  const capaianBenefits = [
    'Paham tujuan belajar kanthi cetha.',
    'Siap ngembangake kosakata lan gagasan anyar.',
    'Luwih percaya diri nalika menyang materi lan evaluasi.',
  ];

  return (
    <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 px-4 py-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <header className="relative overflow-hidden rounded-[28px] border-4 border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(255,247,232,0.94))] p-6 text-center shadow-[0_18px_40px_rgba(77,48,24,0.14)] backdrop-blur-md sm:p-8 md:p-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#d97706] via-[#f59e0b] to-[#0ea5a4]" />

        <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-[#fff3d6] text-[#d97706] shadow-md ring-4 ring-white sm:size-20">
          <MenuIcon name={item.icon} size={36} />
        </div>

        <span className="inline-flex items-center gap-2 rounded-full bg-[#edf7f5] px-4 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-[#0f766e]">
          <Sparkles size={14} aria-hidden="true" />
          Javanesia
        </span>

        <h1 className="mt-4 text-[clamp(2.1rem,5vw,3.5rem)] font-black uppercase leading-[1.05] tracking-tight text-[#2b1d12]">
          {item.title}
        </h1>

        {!isCapaian && item.body && (
          <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-relaxed text-[#6b4a2d] sm:text-lg">
            <ForeignText text={item.body} terms={item.foreignTerms} italicAll={item.bodyIsForeign} />
          </p>
        )}
      </header>

      {/* Main Content */}
      {isCapaian ? (
        <section className="mx-auto flex w-full flex-col gap-6" aria-label={item.eyebrow ?? item.title}>
          <article className="overflow-hidden rounded-[28px] border-4 border-white/85 bg-white/95 p-6 shadow-[0_14px_34px_rgba(77,48,24,0.12)] sm:p-8">
            {/* Top Row: Badges & Capaian Text */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
              {/* Badges container */}
              <div className="flex shrink-0 flex-row gap-3 sm:gap-4 lg:w-52 lg:flex-col justify-between">
                <div className="flex-1 rounded-2xl border border-amber-200/80 bg-[linear-gradient(135deg,#fffbf0,#fff4dd)] p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-[#9a5a1a]">
                    <Target size={16} />
                    <p className="text-[0.7rem] font-black uppercase tracking-[0.16em]">Fase</p>
                  </div>
                  <p className="mt-1 text-3xl sm:text-4xl font-black leading-none text-[#2b1d12]">{phaseLabel}</p>
                </div>

                <div className="flex-1 rounded-2xl border border-teal-200/80 bg-[linear-gradient(135deg,#f0fdfa,#e6fffa)] p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-[#0f766e]">
                    <BookOpen size={16} />
                    <p className="text-[0.7rem] font-black uppercase tracking-[0.16em]">Elemen</p>
                  </div>
                  <p className="mt-1 text-xl sm:text-2xl font-black leading-tight text-[#2b1d12]">{elementLabel}</p>
                </div>
              </div>

              {/* Main Capaian Text Box */}
              <div className="flex-1 rounded-2xl border border-amber-100 bg-[#fffdfa] p-5 sm:p-6 shadow-sm flex items-center">
                <p className="text-lg sm:text-xl md:text-2xl font-extrabold leading-relaxed text-[#2b1d12]">
                  <ForeignText text={item.body} terms={item.foreignTerms} />
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-amber-200 to-transparent" />

            {/* Bottom Row: Benefits Cards 1-3 (Horizontal on PC/Laptop, Vertical on Mobile) */}
            <div>
              <h2 className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-[#8c5627]">
                Tujuan & Manfaat Pembelajaran
              </h2>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {capaianBenefits.map((benefit, index) => (
                  <article
                    key={benefit}
                    className="flex items-start gap-3.5 rounded-2xl border border-amber-200/70 bg-gradient-to-br from-white to-[#fffaf2] p-4 shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#d97706] text-lg font-black text-white shadow-md">
                      {index + 1}
                    </div>
                    <p className="pt-1 text-sm sm:text-base font-bold leading-snug text-[#4a2e18]">
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
              className="group flex gap-4 rounded-[24px] border-4 border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.95),rgba(255,246,226,0.92))] p-5 shadow-[0_12px_28px_rgba(77,48,24,0.12)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(77,48,24,0.16)]"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#d97706] text-xl font-black text-white shadow-[0_4px_0_rgba(146,64,14,0.24)]">
                  {index + 1}
                </div>
                <CheckCircle2 className="text-[#0f766e]" size={22} aria-hidden="true" strokeWidth={3} />
              </div>
              <p className="self-center text-base sm:text-lg md:text-xl font-extrabold leading-relaxed text-[#352315]">
                <ForeignText text={point} terms={item.foreignTerms} />
              </p>
            </article>
          ))}
        </section>
      ) : (
        <section className="grid gap-4 sm:gap-5" aria-label={item.eyebrow ?? item.title}>
          <article className="group rounded-[24px] border-4 border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(255,246,226,0.9))] p-6 shadow-[0_12px_28px_rgba(77,48,24,0.12)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(77,48,24,0.16)] sm:p-8">
            <p className="text-left sm:text-justify text-base sm:text-lg md:text-xl font-extrabold leading-relaxed text-[#352315]">
              <ForeignText text={item.body} terms={item.foreignTerms} italicAll={item.bodyIsForeign} />
            </p>
          </article>
        </section>
      )}
    </div>
  );
}

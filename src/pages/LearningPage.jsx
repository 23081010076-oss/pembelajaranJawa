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
        {!isCapaian && item.body && (
          <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-relaxed text-[#6b4a2d] sm:text-lg">
            <ForeignText text={item.body} terms={item.foreignTerms} italicAll={item.bodyIsForeign} />
          </p>
        )}
      </header>

      {isCapaian ? (
        <section className="mx-auto grid w-full max-w-5xl gap-5" aria-label={item.eyebrow ?? item.title}>
          <article className="overflow-hidden rounded-[28px] border-4 border-white/85 bg-white/92 shadow-[0_14px_34px_rgba(77,48,24,0.14)]">
            <div className="h-2 bg-[#d97706]" />
            <div className="grid gap-5 p-5 sm:p-7 lg:grid-cols-[180px_1fr] lg:p-8">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-[8px] border border-orange-200 bg-white/82 px-4 py-3">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#9a5a1a]">Fase</p>
                  <p className="mt-1 text-4xl font-black leading-none text-[#2b1d12]">{item.phase?.fase ?? 'D'}</p>
                </div>
                <div className="rounded-[8px] border border-orange-200 bg-white/82 px-4 py-3">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#9a5a1a]">Elemen</p>
                  <p className="mt-1 text-2xl font-black leading-none text-[#2b1d12]">{item.phase?.element ?? 'Menulis'}</p>
                </div>
              </div>

              <div className="min-w-0 border-t border-orange-100 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <p className="text-[clamp(1.18rem,2.35vw,1.65rem)] font-black leading-relaxed text-[#2b1d12]">
                  <ForeignText text={item.body} terms={item.foreignTerms} />
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
                <ForeignText text={point} terms={item.foreignTerms} />
                <ForeignText text={point} terms={item.foreignTerms} />
              </p>
            </article>
          ))}
        </section>
      ) : (
        <section className="grid gap-4 sm:gap-5" aria-label={item.eyebrow ?? item.title}>
          <article className="group rounded-[24px] border-4 border-white/85 bg-[linear-gradient(135deg,rgba(255,255,255,0.94),rgba(255,246,226,0.9))] p-6 shadow-[0_12px_28px_rgba(77,48,24,0.12)] backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(77,48,24,0.16)] sm:p-8">
            <p className="text-justify text-[clamp(1.1rem,2.2vw,1.4rem)] font-extrabold leading-relaxed text-[#352315] hyphens-auto">
              <ForeignText text={item.body} terms={item.foreignTerms} italicAll={item.bodyIsForeign} />
              <ForeignText text={item.body} terms={item.foreignTerms} italicAll={item.bodyIsForeign} />
            </p>
          </article>
        </section>
      )}
    </div>
  );
}

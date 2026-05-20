import React from 'react';
import { useClickSound } from '../hooks/useClickSound.js';

/**
 * NavBar - sticky top navigation with breadcrumb.
 *
 * Props:
 *  - crumbs: array of { label, onClick? }
 *    - last item = current page (no onClick, rendered as active)
 *  - onHome: callback to go back to home
 */
export function NavBar({ crumbs = [], onHome }) {
  const playClick = useClickSound();

  const handleHome = () => {
    playClick();
    onHome?.();
  };

  const handleCrumb = (crumb) => {
    if (crumb.onClick) {
      playClick();
      crumb.onClick();
    }
  };

  return (
    <header className="nav-shell sticky top-0 z-40 w-full border-b border-orange-200/70 bg-[rgba(255,250,242,0.96)] shadow-[0_5px_18px_rgba(96,55,24,0.10)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-300/80 to-transparent" />

      {/* Single-row flex: [logo] [breadcrumb flex-1] [brand] */}
      <div className="mx-auto flex h-[52px] max-w-[1200px] items-center gap-2 px-3 sm:h-[62px] sm:gap-3 sm:px-6 lg:px-8">

        {/* Home / Logo button */}
        <button
          type="button"
          onClick={handleHome}
          aria-label="Kembali ke halaman utama"
          className="group flex size-9 shrink-0 items-center justify-center rounded-xl border border-orange-200/80 bg-white/82 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 sm:size-11"
        >
          <img
            src="/assets/logo-icon.png"
            alt=""
            aria-hidden="true"
            className="size-6 object-contain sm:size-7"
          />
        </button>

        {/* Breadcrumb — takes remaining space, centered */}
        <nav aria-label="Breadcrumb" className="flex min-w-0 flex-1 items-center justify-center">
          <ol className="flex min-w-0 items-center justify-center gap-1">
            {crumbs.map((crumb, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <React.Fragment key={i}>
                  <li className="flex min-w-0 items-center">
                    {isLast ? (
                      <span
                        className="inline-flex min-w-0 items-center rounded-xl border border-orange-200 bg-orange-50/80 px-3 py-1.5 shadow-sm sm:px-4 sm:py-2"
                        aria-current="page"
                      >
                        <span className="block max-w-[38vw] truncate text-[0.72rem] font-black text-orange-700 sm:max-w-none sm:text-sm">
                          {crumb.label}
                        </span>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleCrumb(crumb)}
                        className="max-w-[22vw] shrink-0 truncate rounded-lg px-2 py-1 text-[0.7rem] font-bold text-[#7a4f2e] transition hover:bg-white hover:text-orange-600 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:max-w-none sm:px-3 sm:text-sm"
                      >
                        {crumb.label}
                      </button>
                    )}
                  </li>

                  {!isLast && (
                    <li className="px-0.5 text-xs font-black text-orange-300" aria-hidden="true">
                      /
                    </li>
                  )}
                </React.Fragment>
              );
            })}
          </ol>
        </nav>

        {/* Brand label */}
        <div className="pointer-events-none flex h-9 shrink-0 items-center justify-center rounded-xl border border-orange-200/70 bg-white/70 px-2.5 text-[0.58rem] font-black uppercase tracking-[0.12em] text-orange-500 shadow-sm sm:h-11 sm:px-3 sm:text-[0.68rem] sm:tracking-[0.16em]">
          Javanesia
        </div>
      </div>
    </header>
  );
}

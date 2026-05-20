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

      <div className="mx-auto grid min-h-[54px] max-w-[1200px] grid-cols-[auto_1fr_auto] items-center gap-2 px-3 py-2 sm:min-h-[62px] sm:gap-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={handleHome}
          aria-label="Kembali ke halaman utama"
          className="group flex h-11 shrink-0 items-center justify-center rounded-xl border border-orange-200/80 bg-white/82 px-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
        >
          <img
            src="/assets/logo-icon.png"
            alt=""
            aria-hidden="true"
            className="size-7 object-contain"
          />
        </button>

        <nav aria-label="Breadcrumb" className="flex min-w-0 items-center justify-center overflow-hidden">
          <ol className="flex min-w-0 items-center justify-center gap-1">
            {crumbs.map((crumb, i) => {
              const isLast = i === crumbs.length - 1;
              return (
                <React.Fragment key={i}>
                  <li className="flex min-w-0 items-center">
                    {isLast ? (
                      <span
                        className="inline-flex min-w-0 max-w-full items-center justify-center rounded-xl border border-orange-200 bg-orange-50/80 px-4 py-2 text-center shadow-sm"
                        aria-current="page"
                      >
                        <span className="block max-w-full truncate text-xs font-black text-orange-700 sm:text-sm">
                          {crumb.label}
                        </span>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleCrumb(crumb)}
                        className="max-w-[24vw] truncate rounded-lg px-2 py-1.5 text-xs font-bold text-[#7a4f2e] transition hover:bg-white hover:text-orange-600 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 sm:max-w-none sm:px-3 sm:text-sm"
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

        <div className="pointer-events-none hidden h-11 shrink-0 items-center justify-center rounded-xl border border-orange-200/70 bg-white/70 px-3 text-[0.68rem] font-black uppercase tracking-[0.16em] text-orange-500 shadow-sm md:flex">
          Javanesia
        </div>
      </div>
    </header>
  );
}

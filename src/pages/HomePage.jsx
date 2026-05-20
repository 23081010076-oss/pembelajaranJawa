import { Hash, HelpCircle, LogOut, Map, School } from 'lucide-react';
import { MenuButton } from '../components/MenuButton.jsx';
import { useClickSound } from '../hooks/useClickSound.js';

function getInitials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('');
}

export function HomePage({ menuItems, onChooseMenu, onOpenGuide, onOpenPath, studentName, studentClass, studentAbsen, onLogout }) {
  const playClick = useClickSound();

  const handleOpenGuide = () => {
    playClick();
    onOpenGuide?.();
  };

  const handleOpenPath = () => {
    playClick();
    onOpenPath?.();
  };

  const handleLogout = () => {
    playClick();
    onLogout?.();
  };

  // Sapaan waktu berdasarkan jam
  const hour = new Date().getHours();
  const greeting =
    hour < 11 ? 'Sugeng Enjing' :
    hour < 15 ? 'Sugeng Siang' :
    hour < 18 ? 'Sugeng Sonten' :
                'Sugeng Ndalu';

  return (
    <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center gap-10 px-4 sm:gap-12 sm:px-6 lg:gap-14 lg:px-8">
      <header className="grid w-full max-w-4xl justify-items-center text-center">
        <img
          src="/assets/logo-icon.png"
          alt="Logo Javanesia"
          className="mb-3 h-auto w-[min(170px,42vw)] animate-[fadeInUp_0.65s_ease-out] drop-shadow-[0_10px_22px_rgba(46,29,16,0.22)]"
        />
        <h1 className="home-title animate-[fadeInUp_0.8s_ease-out] text-[clamp(3.5rem,7vw,5rem)] font-black uppercase leading-none text-white drop-shadow-2xl">
          Javanesia
        </h1>
        <p className="mt-4 animate-[fadeInUp_1s_ease-out] text-lg font-bold text-white/90 drop-shadow-md sm:text-xl">
          Sinau Basa Jawa kanthi Cara Menarik
        </p>

        {/* Greeting siswa */}
        {studentName && (
          <div className="mt-5 animate-[fadeInUp_1.1s_ease-out_both] flex w-full max-w-xl items-center gap-3 rounded-2xl border-2 border-white/90 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,235,202,0.94))] p-3 text-left shadow-[0_7px_0_rgba(126,68,18,0.16),0_18px_36px_rgba(46,29,16,0.2)] sm:w-auto sm:min-w-[430px]">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl border-2 border-orange-200 bg-[#d97811] text-base font-black uppercase text-white shadow-[0_5px_12px_rgba(126,68,18,0.28)]">
              {getInitials(studentName)}
            </div>

            <div className="min-w-0 flex-1">
              <span className="block text-[0.72rem] font-black uppercase tracking-[0.16em] text-orange-500">
                {greeting}
              </span>
              <span className="block truncate text-base font-black leading-tight text-[#3d1f00]">
                {studentName}
              </span>
              {(studentClass || studentAbsen) && (
                <span className="mt-1 flex flex-wrap items-center gap-1.5 text-[0.68rem] font-black uppercase tracking-wide text-[#8a541d]">
                  {studentClass && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-orange-200 bg-orange-50 px-2 py-0.5">
                      <School size={12} aria-hidden="true" />
                      Kelas {studentClass}
                    </span>
                  )}
                  {studentAbsen && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-orange-200 bg-orange-50 px-2 py-0.5">
                      <Hash size={12} aria-hidden="true" />
                      Absen {studentAbsen}
                    </span>
                  )}
                </span>
              )}
            </div>
            <button
              type="button"
              onClick={handleLogout}
              title="Ganti nama"
              className="grid size-10 shrink-0 place-items-center rounded-xl border-2 border-orange-200 bg-white text-orange-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 sm:inline-flex sm:w-auto sm:px-3"
            >
              <LogOut size={12} aria-hidden="true" />
              <span className="hidden text-xs font-black uppercase sm:inline">Ganti</span>
            </button>
          </div>
        )}

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={handleOpenPath}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/95 bg-orange-500 px-5 py-2 text-sm font-black uppercase tracking-wide text-white shadow-[0_5px_0_rgba(95,60,31,0.18),0_10px_20px_rgba(46,29,16,0.14)] transition hover:-translate-y-0.5 hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
          >
            <Map size={17} aria-hidden="true" />
            Alur Belajar
          </button>
          <button
            type="button"
            onClick={handleOpenGuide}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/90 bg-white/90 px-5 py-2 text-sm font-black uppercase tracking-wide text-orange-500 shadow-[0_5px_0_rgba(95,60,31,0.18),0_10px_20px_rgba(46,29,16,0.14)] transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
          >
            <HelpCircle size={17} aria-hidden="true" />
            Petunjuk
          </button>
        </div>
      </header>

      <nav 
        className="mx-auto grid w-full max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6" 
        aria-label="Menu utama Javanesia"
      >
        {menuItems.map((item, index) => (
          <div
            key={item.title}
            className="animate-[fadeInUp_0.6s_ease-out]"
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
          >
            <MenuButton item={item} variant="home" onClick={() => onChooseMenu(item)} />
          </div>
        ))}
      </nav>
    </div>
  );
}

import { BarChart3, BookOpenCheck, ClipboardCheck, Gamepad2, Hash, HelpCircle, LogOut, Map, School } from 'lucide-react';
import { MenuButton } from '../components/MenuButton.jsx';
import { useClickSound } from '../hooks/useClickSound.js';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import { materiList } from '../data/materi.js';
import {
  LEARNING_PROGRESS_KEY,
  getGameProgressStats,
  getMateriProgressStats,
  initialLearningProgress,
} from '../utils/learningProgress.js';

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
  const [learningProgress] = useLocalStorage(LEARNING_PROGRESS_KEY, initialLearningProgress);
  const [gameScores] = useLocalStorage('javanesia-game-scores', {});
  const materiStats = getMateriProgressStats(materiList, learningProgress);
  const gameStats = getGameProgressStats(gameScores);
  const gameLevelTotal = 3;
  const gamePercent = Math.round((Math.min(gameStats.playedLevels, gameLevelTotal) / gameLevelTotal) * 100);
  const evaluationPercent = Math.round((materiStats.percent + gamePercent) / 2);

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

  const evaluationSuggestion = materiStats.completedCount === 0
    ? 'Miwiti saka materi dhisik, banjur coba latihan lan game.'
    : materiStats.completedCount < materiStats.total
    ? `Terusna materi sing durung rampung. Pungkasan dibuka: ${materiStats.lastMateri?.title ?? 'Materi Parikan'}.`
    : gameStats.playedLevels === 0
    ? 'Materi wis rampung. Saiki coba Game Parikan kanggo ngecek pemahaman.'
    : 'Apik. Delengen tinjauan jawaban game kanggo ngerti bagean sing perlu dibaleni.';

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

        <section className="mt-4 w-full max-w-3xl animate-[fadeInUp_1.18s_ease-out_both] overflow-hidden rounded-[18px] border-[3px] border-white/90 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,247,232,0.94))] text-left shadow-[0_7px_0_rgba(126,68,18,0.12),0_16px_30px_rgba(46,29,16,0.16)] backdrop-blur-sm">
          <div className="h-1.5 bg-[#d97706]" />
          <div className="grid gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-center sm:p-5">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-white shadow-[0_4px_10px_rgba(194,91,20,0.24)]">
                  <ClipboardCheck size={13} aria-hidden="true" />
                  Ringkesan Sinau
                </span>
              </div>

              <p className="mt-3 text-sm font-black leading-snug text-[#3d1f00] sm:text-[0.95rem]">
                {evaluationSuggestion}
              </p>

              <div className="mt-3 flex items-center gap-3">
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-orange-100 ring-1 ring-orange-200/70">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,#f59e0b,#d97706)] transition-all duration-500"
                    style={{ width: `${evaluationPercent}%` }}
                  />
                </div>
                <span className="min-w-11 text-right text-sm font-black text-orange-600">
                  {evaluationPercent}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:w-[310px]">
              <div className="rounded-[14px] border border-orange-100 bg-white/86 px-3 py-2.5 text-center">
                <BookOpenCheck className="mx-auto text-orange-600" size={18} aria-hidden="true" />
                <p className="mt-1 text-[0.62rem] font-black uppercase tracking-wide text-[#9a5a1a]">Materi</p>
                <p className="text-base font-black leading-tight text-[#213f2a]">{materiStats.completedCount}/{materiStats.total}</p>
              </div>
              <div className="rounded-[14px] border border-orange-100 bg-white/86 px-3 py-2.5 text-center">
                <Gamepad2 className="mx-auto text-orange-500" size={18} aria-hidden="true" />
                <p className="mt-1 text-[0.62rem] font-black uppercase tracking-wide text-[#9a5a1a]">Game</p>
                <p className="text-base font-black leading-tight text-[#4a2b12]">{gameStats.playedLevels}/{gameLevelTotal}</p>
              </div>
              <div className="rounded-[14px] border border-orange-100 bg-white/86 px-3 py-2.5 text-center">
                <BarChart3 className="mx-auto text-orange-600" size={18} aria-hidden="true" />
                <p className="mt-1 text-[0.62rem] font-black uppercase tracking-wide text-[#9a5a1a]">Skor</p>
                <p className="text-base font-black leading-tight text-[#17314a]">{gameStats.bestSingleScore}</p>
              </div>
            </div>
          </div>
        </section>
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

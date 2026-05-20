import { useState } from 'react';
import { BookOpen, ChevronRight, Hash, School, User } from 'lucide-react';
import { setStudentProfile } from '../hooks/useStudentName.js';
import { useClickSound } from '../hooks/useClickSound.js';

export function LoginPage({ onLogin }) {
  const playClick = useClickSound();
  const [name, setName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [absen, setAbsen] = useState('');
  const [error, setError] = useState('');
  const [errorField, setErrorField] = useState('');
  const [shaking, setShaking] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    const trimmedClass = studentClass.trim();
    const trimmedAbsen = absen.trim();

    if (!trimmed) {
      setError('Tulis jenengmu dhisik, ya!');
      setErrorField('name');
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      return;
    }

    if (trimmed.length < 2) {
      setError('Jeneng kurang, minimal 2 huruf.');
      setErrorField('name');
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      return;
    }

    if (!trimmedClass) {
      setError('Tulis kelasmu dhisik, ya!');
      setErrorField('studentClass');
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      return;
    }

    if (!trimmedAbsen) {
      setError('Tulis nomer absenmu dhisik, ya!');
      setErrorField('absen');
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      return;
    }

    if (Number.parseInt(trimmedAbsen, 10) < 1) {
      setError('Nomer absen kudu luwih saka 0.');
      setErrorField('absen');
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      return;
    }

    playClick();
    setStudentProfile({ name: trimmed, studentClass: trimmedClass, absen: trimmedAbsen });
    onLogin({ name: trimmed, studentClass: trimmedClass, absen: trimmedAbsen });
  };

  const clearError = () => {
    if (error) {
      setError('');
      setErrorField('');
    }
  };

  return (
    <div className="home-scene relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-10">

      {/* Batik border atas */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[48px] opacity-40"
        style={{
          backgroundImage: "url('/assets/batik-border.svg')",
          backgroundSize: '260px 48px',
          backgroundRepeat: 'repeat-x',
          animation: 'slideRight 20s linear infinite',
        }}
        aria-hidden="true"
      />

      {/* Batik border bawah */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[48px] rotate-180 opacity-40"
        style={{
          backgroundImage: "url('/assets/batik-border.svg')",
          backgroundSize: '260px 48px',
          backgroundRepeat: 'repeat-x',
          animation: 'slideRight 20s linear infinite',
        }}
        aria-hidden="true"
      />

      {/* Palace illustration */}
      <img
        src="/assets/javanese-palace.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-[min(700px,90vw)] -translate-x-1/2 opacity-30 drop-shadow-2xl sm:opacity-40"
      />

      {/* Mist */}
      <div className="mist pointer-events-none absolute bottom-0 left-[-10vw] z-[1] h-48 w-[60vw] opacity-60" aria-hidden="true" />
      <div className="mist pointer-events-none absolute bottom-0 right-[-10vw] z-[1] h-48 w-[60vw] opacity-60" aria-hidden="true" />

      {/* Main content */}
      <main className="relative z-10 flex w-full max-w-[520px] flex-col items-center gap-7 text-center">

        {/* Logo + judul */}
        <div className="flex flex-col items-center gap-3 animate-[fadeInUp_0.65s_ease-out_both]">
          <div className="grid size-[clamp(5.5rem,16vw,8rem)] place-items-center rounded-full bg-white/18 p-3 shadow-[0_14px_40px_rgba(46,29,16,0.24)] ring-2 ring-white/35 backdrop-blur-sm">
            <img
              src="/assets/logo-icon.png"
              alt="Logo Javanesia"
              className="h-full w-full object-contain drop-shadow-[0_8px_18px_rgba(46,29,16,0.22)]"
            />
          </div>
          <h1
            className="text-[clamp(2.6rem,7vw,4rem)] font-black uppercase leading-none text-white"
            style={{
              WebkitTextStroke: '5px #ff9632',
              paintOrder: 'stroke fill',
              filter: 'drop-shadow(0 5px 0 rgba(255,150,50,0.3)) drop-shadow(0 10px 24px rgba(46,29,16,0.3))',
            }}
          >
            Javanesia
          </h1>
          <p className="text-sm font-bold tracking-[0.14em] text-white/85 drop-shadow-md">
            Sinau Basa Jawa kanthi Cara Menarik
          </p>
        </div>

        {/* Login card */}
        <div className="login-card w-full animate-[fadeInUp_0.85s_ease-out_both] overflow-hidden rounded-3xl border-2 border-orange-200/60 bg-white/88 px-6 py-7 shadow-[0_12px_40px_rgba(46,29,16,0.22)] backdrop-blur-md">

          {/* Header card */}
          <div className="flex items-center justify-center gap-2 mb-1">
            <BookOpen size={15} className="text-orange-500" aria-hidden="true" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-orange-500">Selamat Datang</span>
          </div>
          <p className="text-[clamp(1rem,3vw,1.2rem)] font-black text-[#3d1f00] mb-5">
            Sapa jenengmu?
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
            {/* Input nama */}
            <div className={`login-input-wrap ${shaking && errorField === 'name' ? 'login-shake' : ''}`}>
              <label htmlFor="student-name" className="sr-only">Nama siswa</label>
              <div
                className={`login-input-field ${focusedField === 'name' ? 'login-input-focused' : ''} ${errorField === 'name' ? 'login-input-error' : ''}`}
              >
                <User
                  size={18}
                  className="login-input-icon"
                  aria-hidden="true"
                />
                <input
                  id="student-name"
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); clearError(); }}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Tulis jenengmu ing kene..."
                  maxLength={40}
                  autoComplete="name"
                  autoFocus
                  className="login-input"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {/* Input kelas */}
              <div className={`login-input-wrap ${shaking && errorField === 'studentClass' ? 'login-shake' : ''}`}>
                <label htmlFor="student-class" className="sr-only">Kelas</label>
                <div
                  className={`login-input-field ${focusedField === 'studentClass' ? 'login-input-focused' : ''} ${errorField === 'studentClass' ? 'login-input-error' : ''}`}
                >
                  <School
                    size={18}
                    className="login-input-icon"
                    aria-hidden="true"
                  />
                  <input
                    id="student-class"
                    type="text"
                    value={studentClass}
                    onChange={(e) => { setStudentClass(e.target.value); clearError(); }}
                    onFocus={() => setFocusedField('studentClass')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Kelas..."
                    maxLength={20}
                    autoComplete="off"
                    className="login-input"
                  />
                </div>
              </div>

              {/* Input absen */}
              <div className={`login-input-wrap ${shaking && errorField === 'absen' ? 'login-shake' : ''}`}>
                <label htmlFor="student-absen" className="sr-only">Nomor absen</label>
                <div
                  className={`login-input-field ${focusedField === 'absen' ? 'login-input-focused' : ''} ${errorField === 'absen' ? 'login-input-error' : ''}`}
                >
                  <Hash
                    size={18}
                    className="login-input-icon"
                    aria-hidden="true"
                  />
                  <input
                    id="student-absen"
                    type="number"
                    inputMode="numeric"
                    min="1"
                    value={absen}
                    onChange={(e) => { setAbsen(e.target.value); clearError(); }}
                    onFocus={() => setFocusedField('absen')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Absen..."
                    autoComplete="off"
                    className="login-input"
                  />
                </div>
              </div>
            </div>

            {error && (
              <div className="login-input-wrap">
                <p className="login-error" role="alert" aria-live="polite">
                  {error}
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-2xl border-4 border-white/90 bg-[#ffba73] px-6 py-4 font-black text-white shadow-[0_6px_0_rgba(72,64,56,0.25),0_12px_28px_rgba(46,29,16,0.18)] transition-all duration-200 hover:-translate-y-1 hover:bg-[#ffac5e] hover:shadow-[0_10px_0_rgba(72,64,56,0.2),0_18px_32px_rgba(46,29,16,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 active:translate-y-0"
            >
              <span className="pointer-events-none absolute inset-1 rounded-xl border border-white/40" />
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/20 to-transparent" />
              <span className="relative flex items-center justify-center gap-2 text-[clamp(1.1rem,2.5vw,1.3rem)]">
                <span
                  style={{
                    WebkitTextStroke: '3px #e07a00',
                    paintOrder: 'stroke fill',
                  }}
                >
                  Mlebu Sinau!
                </span>
                <ChevronRight
                  size={22}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </button>
          </form>
        </div>

        {/* Footer */}
        <p
          className="animate-[fadeInUp_1.1s_ease-out_both] text-xs font-bold text-white/80 tracking-widest uppercase"
          aria-hidden="true"
        >
          ✦ Javanesia · Parikan ✦
        </p>
      </main>
    </div>
  );
}

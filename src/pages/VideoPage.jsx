import { useState } from 'react';
import { Play, ArrowLeft, Youtube, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { useClickSound } from '../hooks/useClickSound.js';

const getYoutubeVideoId = (video) => {
  const source = video.embedUrl || video.youtubeUrl || '';
  try {
    const url = new URL(source);
    if (url.hostname.includes('youtu.be')) return url.pathname.split('/').filter(Boolean)[0] || video.videoId;
    if (url.pathname.includes('/embed/')) return url.pathname.split('/embed/')[1]?.split('/')[0] || video.videoId;
    return url.searchParams.get('v') || video.videoId;
  } catch {
    return video.videoId;
  }
};

const getYoutubeEmbedUrl = (video) => {
  const id = getYoutubeVideoId(video);
  const baseUrl = id ? `https://www.youtube.com/embed/${id}` : video.embedUrl;
  try {
    const url = new URL(baseUrl);
    url.searchParams.set('rel', '0');
    url.searchParams.set('modestbranding', '1');
    url.searchParams.set('playsinline', '1');
    return url.toString();
  } catch {
    return baseUrl;
  }
};

const getYoutubeWatchUrl = (video) => {
  const id = getYoutubeVideoId(video);
  return id ? `https://youtu.be/${id}` : video.embedUrl;
};

// Normalisasi: card biasa → bungkus jadi array 1 video
const getVideos = (item) => item.videos ?? [{ embedUrl: item.embedUrl, videoId: item.videoId }];

// ── VideoCard ────────────────────────────────────────────────────────────────
function VideoCard({ item, compact = false, thumbError, onThumbError, onClick }) {
  const videos = getVideos(item);
  const hasMultiple = videos.length > 1;
  const [activeIdx, setActiveIdx] = useState(0);
  const activeVideo = videos[activeIdx];
  const videoId = getYoutubeVideoId(activeVideo);

  const thumbUrl = thumbError[videoId]
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const goPrev = (e) => { e.stopPropagation(); setActiveIdx((i) => (i - 1 + videos.length) % videos.length); };
  const goNext = (e) => { e.stopPropagation(); setActiveIdx((i) => (i + 1) % videos.length); };

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => onClick(activeVideo)}
        className="group flex w-full items-center gap-3 overflow-hidden rounded-2xl border-2 border-white/80 bg-white/90 p-3 text-left shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
      >
        <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl bg-black">
          <img src={thumbUrl} alt="" aria-hidden="true" className="h-full w-full object-cover"
            onError={() => onThumbError(prev => ({ ...prev, [videoId]: true }))} />
          <div className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition group-hover:opacity-100">
            <Play size={20} className="text-white" fill="white" />
          </div>
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-black text-[#3d2817]">{item.title}</p>
          <p className="mt-0.5 line-clamp-2 text-xs font-semibold text-[#7a5030]">{item.description}</p>
          {hasMultiple && (
            <span className="mt-1 inline-block rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-black text-orange-600">
              Video {activeIdx + 1}/{videos.length}
            </span>
          )}
        </div>
      </button>
    );
  }

  return (
    <div className="group relative flex w-full flex-col overflow-hidden rounded-3xl border-4 border-white/90 bg-white shadow-[0_6px_0_rgba(95,60,31,0.15),0_12px_28px_rgba(78,45,21,0.14)] transition-all duration-200 hover:-translate-y-2 hover:shadow-[0_10px_0_rgba(95,60,31,0.12),0_20px_36px_rgba(78,45,21,0.2)]">

      {/* Thumbnail area */}
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <img
          src={thumbUrl}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => onThumbError(prev => ({ ...prev, [videoId]: true }))}
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Play button — klik buka player */}
        <button
          type="button"
          onClick={() => onClick(activeVideo)}
          className="absolute inset-0 grid place-items-center focus-visible:outline-none"
          aria-label={`Putar video: ${item.title}`}
        >
          <div className="grid size-16 place-items-center rounded-full bg-white/95 text-red-600 shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group-hover:scale-110">
            <Play size={28} fill="currentColor" className="ml-1" />
          </div>
        </button>

        {/* YouTube badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-red-600 px-2.5 py-1 text-xs font-black text-white shadow-md pointer-events-none">
          <Youtube size={12} />
          YouTube
        </div>

        {/* Tombol prev/next — hanya muncul kalau ada 2 video */}
        {hasMultiple && (
          <>
            {/* Dots indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {videos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setActiveIdx(i); }}
                  className={`size-2 rounded-full transition-all ${
                    i === activeIdx ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Video ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev */}
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 grid size-9 place-items-center rounded-full bg-black/50 text-white shadow-md backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Video sebelumnya"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 grid size-9 place-items-center rounded-full bg-black/50 text-white shadow-md backdrop-blur-sm transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Video berikutnya"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1.5 p-5">
        <h2 className="text-[clamp(1rem,2vw,1.2rem)] font-black leading-snug text-[#3d2817]">
          {item.title}
        </h2>
        <p className="line-clamp-2 text-sm font-semibold leading-relaxed text-[#7a5030]">
          {item.description}
        </p>
        <div className="mt-1 flex items-center justify-between">
          <span className="inline-flex w-fit items-center gap-1 text-xs font-black uppercase tracking-wide text-orange-500 transition-all group-hover:gap-1.5">
            <Play size={11} fill="currentColor" />
            Putar Video
          </span>
          {/* Badge jumlah video */}
          {hasMultiple && (
            <span className="rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-black text-orange-600">
              {activeIdx + 1} / {videos.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// ── VideoPage utama ───────────────────────────────────────────────────────────
export function VideoPage({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [thumbError, setThumbError] = useState({});
  const playClick = useClickSound();

  const handleSelect = (video) => {
    playClick();
    setSelectedVideo(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    playClick();
    setSelectedVideo(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Semua video flat untuk "Video Liyane"
  const allVideos = videos.flatMap(item =>
    getVideos(item).map(v => ({ ...v, _cardTitle: item.title }))
  );

  // ── Player view ──────────────────────────────────────────────────────────────
  if (selectedVideo) {
    return (
      <div className="mx-auto flex w-full max-w-[960px] flex-col gap-5 px-4 py-2 sm:px-6">
        <button type="button" onClick={handleBack}
          className="inline-flex w-fit items-center gap-2 rounded-xl border-2 border-white/80 bg-white/80 px-4 py-2 text-sm font-black text-[#7a4f2e] shadow-md backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
        >
          <ArrowLeft size={16} />
          Bali menyang Daftar Video
        </button>

        <article className="overflow-hidden rounded-3xl border-4 border-white/80 bg-white shadow-[0_8px_40px_rgba(46,29,16,0.18)]">
          <div className="aspect-video w-full bg-black">
            <iframe
              className="h-full w-full"
              src={getYoutubeEmbedUrl(selectedVideo)}
              title={selectedVideo._cardTitle || 'Video'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <div className="px-6 py-5 sm:px-8 sm:py-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <span className="mb-1 block text-xs font-black uppercase tracking-[0.12em] text-orange-500">Saiki Diputar</span>
                <h2 className="text-[clamp(1.3rem,3vw,1.8rem)] font-black leading-tight text-[#3d2817]">
                  {selectedVideo._cardTitle}
                </h2>
              </div>
              <a href={getYoutubeWatchUrl(selectedVideo)} target="_blank" rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1.5 text-xs font-black text-white shadow-md transition hover:bg-red-700"
              >
                <Youtube size={14} />
                YouTube
              </a>
            </div>
          </div>
        </article>

        {/* Video Liyane */}
        {allVideos.length > 1 && (
          <section className="mt-2">
            <h3 className="mb-3 text-sm font-black uppercase tracking-widest text-[#2e1d10]/60">Video Liyane</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {allVideos
                .filter(v => v.videoId !== selectedVideo.videoId)
                .map(video => (
                  <button key={video.videoId} type="button" onClick={() => handleSelect(video)}
                    className="group flex w-full items-center gap-3 overflow-hidden rounded-2xl border-2 border-white/80 bg-white/90 p-3 text-left shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                  >
                    <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl bg-black">
                      <img src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} alt="" aria-hidden="true"
                        className="h-full w-full object-cover" />
                      <div className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition group-hover:opacity-100">
                        <Play size={20} className="text-white" fill="white" />
                      </div>
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-black text-[#3d2817]">{video._cardTitle}</p>
                    </div>
                  </button>
                ))}
            </div>
          </section>
        )}
      </div>
    );
  }

  // ── List view ─────────────────────────────────────────────────────────────────
  return (
    <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-8 px-4 py-2 sm:px-6 lg:px-8">
      <header className="w-full max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-orange-300 bg-white/80 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-orange-600 shadow-sm backdrop-blur-sm">
          <BookOpen size={13} />
          Video Pembelajaran
        </div>
        <h1 className="mt-3 text-[clamp(2.8rem,6vw,4rem)] font-black uppercase leading-none text-white drop-shadow-2xl"
          style={{ WebkitTextStroke: '5px #ff9632', paintOrder: 'stroke fill' }}>
          Pilih Video
        </h1>
        <p className="mt-2 text-sm font-bold text-[#2e1d10]/80 drop-shadow-sm">
          {videos.length} video kasedhiya — klik kanggo nonton
        </p>
      </header>

      <nav className={`grid w-full gap-5 sm:gap-6 ${
          videos.length === 1 ? 'max-w-[520px]'
          : videos.length === 2 ? 'max-w-[860px] sm:grid-cols-2'
          : 'sm:grid-cols-2 lg:grid-cols-3'
        }`}
        aria-label="Daftar video pembelajaran"
      >
        {videos.map((item, index) => (
          <div key={item.videoId ?? index}
            style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            className="animate-[fadeInUp_0.55s_ease-out]"
          >
            <VideoCard
              item={item}
              thumbError={thumbError}
              onThumbError={setThumbError}
              onClick={handleSelect}
            />
          </div>
        ))}
      </nav>
    </div>
  );
}
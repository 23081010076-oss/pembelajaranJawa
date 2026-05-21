const VERSION = '2026-05-21-v5';
const CORE_CACHE = `javanesia-core-${VERSION}`;
const RUNTIME_CACHE = `javanesia-runtime-${VERSION}`;

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/offline.html',
  '/manifest.webmanifest',
  '/assets/logo-icon.png',
  '/assets/logo-192.png',
  '/assets/logo-512.png',
  '/assets/logo-brand.png',
  '/assets/javanesia-home-bg.svg',
  '/assets/javanese-palace.svg',
  '/assets/batik-border.svg',
  '/assets/batik-cloud.svg',
  '/assets/video-page-bg.svg',
  '/assets/profile/mahasiswa.jpeg',
  '/assets/profile/dosen-pembimbing.jpeg',
  '/assets/profile/pengembang.jpeg',
  '/assets/Komik/Comic_Materi1.png',
  '/assets/Komik/Comic_Materi2.png',
  '/assets/Komik/Comic_Materi3.png',
  '/assets/Komik/Comic_Materi4.png',
  '/assets/Komik/Comic_Materi5.png',
  '/assets/Komik/Comic_Materi6.png',
  '/assets/Komik/Comic_Materi7.png',
  '/assets/Komik/Comic_Materi8.png',
  '/assets/Komik/Comic_Materi9.png',
  '/assets/sounds/feedback-benar.mp3',
  '/assets/sounds/feedback-salah.mp3',
  '/assets/sounds/result-lulus.mp3',
  '/assets/sounds/result-sampurna.mp3',
];

const LEARNING_AUDIO_ASSETS = [
  '/assets/sounds/Teegese Parikan.mp3',
  '/assets/sounds/Titikan Parikan.mp3',
  '/assets/sounds/Struktur Parikan.mp3',
  '/assets/sounds/Jenis Parikan.mp3',
  '/assets/sounds/Paedah Parikan.mp3',
  '/assets/sounds/Panggone Ukara Ing Parikan.mp3',
  '/assets/sounds/Cara Ngrakit Parikan.mp3',
  '/assets/sounds/Tuladha Parikan Rong Gatra.mp3',
  '/assets/sounds/Tuladha Parikan Patang Gatra.mp3',
];

async function cacheQuietly(cacheName, urls) {
  const cache = await caches.open(cacheName);
  await Promise.allSettled(
    urls.map((url) => cache.add(new Request(url, { cache: 'reload' })))
  );
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    cacheQuietly(CORE_CACHE, CORE_ASSETS).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith('javanesia-') && ![CORE_CACHE, RUNTIME_CACHE].includes(key))
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
      .then(() => cacheQuietly(RUNTIME_CACHE, LEARNING_AUDIO_ASSETS))
  );
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(RUNTIME_CACHE);
    cache.put(request, response.clone());
  }
  return response;
}

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put('/', response.clone());
    }
    return response;
  } catch {
    return (await caches.match('/')) || caches.match('/offline.html');
  }
}

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

async function networkFirstAsset(request) {
  try {
    const response = await fetch(request, { cache: 'reload' });
    if (response.ok) {
      const cache = await caches.open(RUNTIME_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return caches.match(request);
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  if (url.pathname.startsWith('/assets/sounds/') || request.destination === 'audio') {
    event.respondWith(networkFirstAsset(request));
    return;
  }

  if (
    url.pathname.startsWith('/assets/') ||
    ['script', 'style', 'image', 'font'].includes(request.destination)
  ) {
    event.respondWith(cacheFirst(request));
  }
});

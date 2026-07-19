import { chromium } from 'playwright-core';
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const inputDir = path.resolve('public/assets/Video Animation');
const outputDir = path.resolve('tmp/video-frames');
await fs.mkdir(outputDir, { recursive: true });

const candidates = [
  process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].filter(Boolean);

let executablePath = null;
for (const candidate of candidates) {
  try {
    await fs.access(candidate);
    executablePath = candidate;
    break;
  } catch {
    // try next
  }
}

if (!executablePath) {
  throw new Error('No Chromium/Edge executable found.');
}

const files = (await fs.readdir(inputDir)).filter((file) => file.toLowerCase().endsWith('.mp4'));
const browser = await chromium.launch({ executablePath });
const page = await browser.newPage({ viewport: { width: 960, height: 540 }, deviceScaleFactor: 1 });

for (const file of files) {
  const fileUrl = pathToFileURL(path.join(inputDir, file)).href;
  await page.setContent(`
    <!doctype html>
    <html>
      <body style="margin:0;background:#111;display:grid;place-items:center;width:960px;height:540px;overflow:hidden">
        <video id="video" src="${fileUrl}" muted playsinline style="width:960px;height:540px;object-fit:contain;background:#111"></video>
      </body>
    </html>
  `);

  await page.waitForFunction(() => {
    const video = document.querySelector('video');
    return video && Number.isFinite(video.duration) && video.duration > 0;
  });

  for (const second of [1, 5, 9]) {
    await page.evaluate((time) => {
      const video = document.querySelector('video');
      video.currentTime = Math.min(time, Math.max(video.duration - 0.25, 0));
    }, second);
    await page.waitForFunction(() => {
      const video = document.querySelector('video');
      return video.readyState >= 2;
    });
    await page.waitForTimeout(250);

    const safeName = file.replace(/[^a-z0-9]+/gi, '-').replace(/^-+|-+$/g, '');
    await page.screenshot({ path: path.join(outputDir, `${safeName}-${second}s.png`) });
  }
}

await browser.close();
console.log(`Extracted ${files.length * 3} frames to ${outputDir}`);

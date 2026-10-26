/**
 * Script untuk mengoptimasi gambar secara otomatis
 * Mengkonversi PNG/JPG besar ke WebP dengan kualitas optimal
 * 
 * Cara pakai:
 * 1. Install sharp: npm install --save-dev sharp
 * 2. Jalankan: node scripts/optimize-images.js
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, basename } from 'path';
import { existsSync } from 'fs';

const INPUT_DIR = 'public/assets';
const OUTPUT_DIR = 'public/assets-optimized';
const EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const WEBP_QUALITY = 85; // 85% kualitas bagus, ukuran kecil
const MAX_WIDTH = 1920; // Resize gambar besar

async function getAllImages(dir) {
  const files = [];
  const items = await readdir(dir);

  for (const item of items) {
    const fullPath = join(dir, item);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      const subFiles = await getAllImages(fullPath);
      files.push(...subFiles);
    } else if (EXTENSIONS.includes(extname(item).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function optimizeImage(inputPath) {
  const relativePath = inputPath.replace(INPUT_DIR, '');
  const outputPath = join(OUTPUT_DIR, relativePath).replace(extname(inputPath), '.webp');
  const outputDir = join(OUTPUT_DIR, relativePath.split('/').slice(0, -1).join('/'));

  // Buat folder output kalau belum ada
  if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true });
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Resize kalau terlalu besar
    if (metadata.width > MAX_WIDTH) {
      image.resize(MAX_WIDTH, null, {
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    // Konversi ke WebP
    await image
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);

    const inputStats = await stat(inputPath);
    const outputStats = await stat(outputPath);
    const savedPercent = Math.round((1 - outputStats.size / inputStats.size) * 100);

    console.log(`✅ ${basename(inputPath)} -> ${basename(outputPath)}`);
    console.log(`   ${(inputStats.size / 1024).toFixed(0)} KB -> ${(outputStats.size / 1024).toFixed(0)} KB (${savedPercent}% lebih kecil)\n`);

    return {
      input: inputPath,
      output: outputPath,
      inputSize: inputStats.size,
      outputSize: outputStats.size,
      saved: savedPercent
    };
  } catch (error) {
    console.error(`❌ Error optimasi ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🎨 Mulai optimasi gambar...\n');

  const images = await getAllImages(INPUT_DIR);
  console.log(`📦 Ditemukan ${images.length} gambar\n`);

  const results = [];
  for (const imagePath of images) {
    const result = await optimizeImage(imagePath);
    if (result) results.push(result);
  }

  const totalInput = results.reduce((sum, r) => sum + r.inputSize, 0);
  const totalOutput = results.reduce((sum, r) => sum + r.outputSize, 0);
  const totalSaved = Math.round((1 - totalOutput / totalInput) * 100);

  console.log('\n📊 Ringkasan:');
  console.log(`   Total gambar: ${results.length}`);
  console.log(`   Ukuran awal: ${(totalInput / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Ukuran akhir: ${(totalOutput / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   💾 Hemat: ${totalSaved}% (${((totalInput - totalOutput) / 1024 / 1024).toFixed(2)} MB)\n`);
  console.log('✨ Selesai! Ganti path gambar dari /assets/ ke /assets-optimized/');
}

main().catch(console.error);

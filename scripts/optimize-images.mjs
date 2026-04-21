#!/usr/bin/env node
import { readdir, stat } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';
import sharp from 'sharp';

const IMAGE_DIR = new URL('../public/image/', import.meta.url).pathname;
const TARGETS = /^(main_banner|slide_[2-8])\.png$/i;

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 ** 2) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / 1024 ** 2).toFixed(2)}MB`;
};

const files = (await readdir(IMAGE_DIR)).filter((f) => TARGETS.test(f));

if (files.length === 0) {
  console.log('No matching PNG files found.');
  process.exit(0);
}

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const src = join(IMAGE_DIR, file);
  const dest = join(IMAGE_DIR, `${basename(file, extname(file))}.webp`);

  const before = (await stat(src)).size;
  totalBefore += before;

  await sharp(src).resize({ width: 1500, withoutEnlargement: true }).webp({ quality: 82 }).toFile(dest);

  const after = (await stat(dest)).size;
  totalAfter += after;

  console.log(`  ${file.padEnd(20)} ${formatBytes(before).padStart(9)} → ${formatBytes(after).padStart(9)}  (${Math.round((1 - after / before) * 100)}% saved)`);
}

console.log(`\nTotal: ${formatBytes(totalBefore)} → ${formatBytes(totalAfter)}  (${Math.round((1 - totalAfter / totalBefore) * 100)}% saved)`);

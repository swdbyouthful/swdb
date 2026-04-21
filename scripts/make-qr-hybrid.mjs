// 하이브리드 QR:
// - dark 모듈 색상 = 심볼 로고(십자가+파도)의 픽셀 색상 매핑 (QR 전체에 분산)
// - 중앙에 favicon 오버레이 (1차 방식 유지)
// - Finder 패턴은 단색 네이비로 고정

import fs from 'fs';
import sharp from 'sharp';
import qrcode from 'qrcode-generator';

// Usage: node scripts/make-qr-hybrid.mjs [navy|black]
const variant = process.argv[2] || 'navy';
const PALETTE = {
  navy: { fallback: { r: 30, g: 58, b: 138 }, outSuffix: '' },
  black: { fallback: { r: 0, g: 0, b: 0 }, outSuffix: '-black' },
};
if (!PALETTE[variant]) {
  console.error('variant must be navy or black');
  process.exit(1);
}

const URL = 'https://m.site.naver.com/1GQsu';
const FALLBACK = PALETTE[variant].fallback;
const BG = '#ffffff';
const SYMBOL = '/tmp/swdb-symbol.png'; // 심볼만(1245x377) — 색상 매핑 소스
const CENTER_LOGO = '/Users/rigels/workspace/swdb/public/apple-touch-icon.png'; // 중앙 오버레이
const OUT = `/Users/rigels/workspace/swdb/public/image/qr-code-hybrid${PALETTE[variant].outSuffix}.png`;
const OUT_SIZE = 1024;

const qr = qrcode(0, 'H');
qr.addData(URL);
qr.make();
const count = qr.getModuleCount();
console.log(`모듈: ${count}x${count}`);

// 심볼 로고에서 실제 컨텐츠 bbox 추출 (RGBA 기반)
const WHITE = 240;
const ALPHA_MIN = 32;
function isBg(r, g, b, a) {
  if (a < ALPHA_MIN) return true;
  return r >= WHITE && g >= WHITE && b >= WHITE;
}
const { data: sData, info: sInfo } = await sharp(SYMBOL).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
let minX = sInfo.width, minY = sInfo.height, maxX = -1, maxY = -1;
for (let y = 0; y < sInfo.height; y++) {
  for (let x = 0; x < sInfo.width; x++) {
    const i = (y * sInfo.width + x) * 4;
    if (!isBg(sData[i], sData[i + 1], sData[i + 2], sData[i + 3])) {
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}
const bboxW = maxX - minX + 1;
const bboxH = maxY - minY + 1;
console.log(`심볼 bbox: ${minX},${minY} ${bboxW}x${bboxH}`);

// bbox crop → QR 모듈 해상도로 cover 리사이즈
const logoRaw = await sharp(SYMBOL)
  .extract({ left: minX, top: minY, width: bboxW, height: bboxH })
  .resize(count, count, { fit: 'cover' })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { data: logoData, info: logoInfo } = logoRaw;

function clampDark(r, g, b) {
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  if (lum > 0.5) {
    const k = 0.5 / lum;
    return { r: Math.round(r * k), g: Math.round(g * k), b: Math.round(b * k) };
  }
  return { r, g, b };
}
function colorFor(row, col) {
  const i = (row * logoInfo.width + col) * 4;
  const r = logoData[i], g = logoData[i + 1], b = logoData[i + 2], a = logoData[i + 3];
  if (isBg(r, g, b, a)) return FALLBACK;
  return clampDark(r, g, b);
}
function rgb(c) {
  return `rgb(${c.r},${c.g},${c.b})`;
}

const MODULE = 20;
const MARGIN = 4;
const SIZE = (count + MARGIN * 2) * MODULE;

function inFinder(r, c) {
  return (r < 7 && c < 7) || (r < 7 && c >= count - 7) || (r >= count - 7 && c < 7);
}

const parts = [`<rect width="${SIZE}" height="${SIZE}" fill="${BG}"/>`];

function drawFinder(oCol, oRow) {
  const x = (oCol + MARGIN) * MODULE;
  const y = (oRow + MARGIN) * MODULE;
  const col = rgb(FALLBACK);
  parts.push(
    `<rect x="${x}" y="${y}" width="${7 * MODULE}" height="${7 * MODULE}" rx="${MODULE * 1.8}" ry="${MODULE * 1.8}" fill="${col}"/>`
  );
  parts.push(
    `<rect x="${x + MODULE}" y="${y + MODULE}" width="${5 * MODULE}" height="${5 * MODULE}" rx="${MODULE * 1.2}" ry="${MODULE * 1.2}" fill="${BG}"/>`
  );
  parts.push(
    `<rect x="${x + 2 * MODULE}" y="${y + 2 * MODULE}" width="${3 * MODULE}" height="${3 * MODULE}" rx="${MODULE * 0.7}" ry="${MODULE * 0.7}" fill="${col}"/>`
  );
}
drawFinder(0, 0);
drawFinder(count - 7, 0);
drawFinder(0, count - 7);

for (let r = 0; r < count; r++) {
  for (let c = 0; c < count; c++) {
    if (!qr.isDark(r, c)) continue;
    if (inFinder(r, c)) continue;
    const cx = (c + MARGIN) * MODULE + MODULE / 2;
    const cy = (r + MARGIN) * MODULE + MODULE / 2;
    parts.push(`<circle cx="${cx}" cy="${cy}" r="${MODULE * 0.48}" fill="${rgb(colorFor(r, c))}"/>`);
  }
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 ${SIZE} ${SIZE}">${parts.join('')}</svg>`;
const qrPng = await sharp(Buffer.from(svg)).resize(OUT_SIZE, OUT_SIZE).png().toBuffer();

// 중앙 로고 오버레이 (1차 방식): 22% + 흰 둥근 배경 패드
const logoSize = Math.round(OUT_SIZE * 0.22);
const padSize = Math.round(logoSize * 1.2);
const radius = Math.round(padSize * 0.18);
const padSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${padSize}" height="${padSize}"><rect width="${padSize}" height="${padSize}" rx="${radius}" ry="${radius}" fill="#ffffff"/></svg>`;
const pad = await sharp(Buffer.from(padSvg)).png().toBuffer();
const logo = await sharp(CENTER_LOGO).resize(logoSize, logoSize).png().toBuffer();

await sharp(qrPng)
  .composite([
    { input: pad, gravity: 'center' },
    { input: logo, gravity: 'center' },
  ])
  .png({ compressionLevel: 9 })
  .toFile(OUT);

const size = fs.statSync(OUT).size;
console.log(`저장: ${OUT} (${size} bytes)`);

// Generuje domyślny obraz OG (1200×630) z logo + tekstem marki.
// Uruchom: node scripts/generate-og.mjs  (wymaga sharp — zależność astro:assets)
import sharp from 'sharp';

const W = 1200;
const H = 630;
const BG = '#FAF8F4';
const INK = '#1C1B19';
const MUTED = '#6F6B63';
const ACCENT = '#3E6B5E';

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect x="0" y="0" width="${W}" height="10" fill="${ACCENT}"/>
  <text x="${W / 2}" y="410" text-anchor="middle"
    font-family="Georgia, 'Times New Roman', serif" font-size="96" font-weight="500" fill="${INK}">Jaspis Idea</text>
  <text x="${W / 2}" y="480" text-anchor="middle"
    font-family="Georgia, 'Times New Roman', serif" font-size="38" font-style="italic" fill="${MUTED}">Dwa światy, jedna ręka.</text>
  <text x="${W / 2}" y="545" text-anchor="middle"
    font-family="Arial, sans-serif" font-size="22" letter-spacing="4" fill="${MUTED}">PROJEKTOWANIE WNĘTRZ · SZTUKA</text>
</svg>`;

const logoW = 360;
const logo = await sharp('assets/jaspis-idea-logo.png')
  .resize({ width: logoW })
  .png()
  .toBuffer();
const logoMeta = await sharp(logo).metadata();

await sharp(Buffer.from(svg))
  .composite([
    {
      input: logo,
      left: Math.round((W - logoW) / 2),
      top: Math.round(170 - (logoMeta.height ?? 120) / 2),
    },
  ])
  .png()
  .toFile('public/og-default.png');

console.log('✓ public/og-default.png wygenerowany');

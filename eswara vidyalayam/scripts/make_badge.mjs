import sharp from 'sharp';
import fs from 'fs';

async function makeBadges() {
  // 1. Copy eswar_logo.png to official_logo.png and official_logo.jpg
  fs.copyFileSync('public/assets/eswar_logo.png', 'public/assets/official_logo.png');
  await sharp('public/assets/eswar_logo.png').jpeg({ quality: 95 }).toFile('public/assets/official_logo.jpg');

  // 2. Extract emblem cleanly from WhatsApp Image 2026-11-16 at 1.15.51 PM.jpeg
  // Lotus ends right at height 165
  const emblemBuf = await sharp('WhatsApp Image 2026-11-16 at 1.15.51 PM.jpeg')
    .extract({ left: 755, top: 40, width: 300, height: 165 })
    .png()
    .toFile('public/assets/eswar_emblem.png');

  const emblemResized = await sharp('public/assets/eswar_emblem.png')
    .resize(230, 130, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();

  const svgCircle = Buffer.from(`
    <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="85%" stop-color="#fffdf5"/>
          <stop offset="100%" stop-color="#fef3c7"/>
        </radialGradient>
      </defs>
      <circle cx="200" cy="200" r="196" fill="url(#bgGrad)" stroke="#f59e0b" stroke-width="5"/>
      <circle cx="200" cy="200" r="184" fill="none" stroke="#e11d48" stroke-width="2.5" stroke-dasharray="6 4"/>
      <circle cx="200" cy="200" r="176" fill="none" stroke="#1e1b4b" stroke-width="1"/>
      <text x="200" y="278" font-family="Arial, sans-serif" font-weight="900" font-size="20" fill="#e11d48" text-anchor="middle" letter-spacing="1">ESWARA VIDYALAYAM</text>
      <text x="200" y="304" font-family="Arial, sans-serif" font-weight="700" font-size="13" fill="#1e1b4b" text-anchor="middle" letter-spacing="2">JR COLLEGE FOR WOMEN</text>
      <text x="200" y="328" font-family="Arial, sans-serif" font-weight="600" font-size="11" fill="#f59e0b" text-anchor="middle" letter-spacing="1.5">NH-16 • CHEMUDULANKA</text>
      <text x="200" y="348" font-family="Arial, sans-serif" font-weight="600" font-size="10" fill="#64748b" text-anchor="middle" letter-spacing="1">SRI SHIRDI SAI GROUP</text>
    </svg>
  `);

  await sharp(svgCircle)
    .composite([{ input: emblemResized, top: 70, left: 85 }])
    .png()
    .toFile('public/assets/eswar_badge.png');

  // Also create an SVG logo for header / favicon
  const svgFavicon = `
    <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="14" fill="#1e1b4b"/>
      <circle cx="32" cy="32" r="28" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
      <path d="M32 10 L34 22 L30 22 Z" fill="#f97316"/>
      <circle cx="32" cy="18" r="4" fill="#f97316"/>
      <path d="M22 28 C26 24 38 24 42 28 C40 38 24 38 22 28 Z" fill="#e11d48"/>
      <path d="M16 34 C20 30 28 32 30 38 C24 42 16 38 16 34 Z" fill="#fb7185"/>
      <path d="M48 34 C44 30 36 32 34 38 C40 42 48 38 48 34 Z" fill="#fb7185"/>
      <path d="M24 44 C28 42 36 42 40 44 C36 46 28 46 24 44 Z" fill="#10b981"/>
    </svg>
  `;
  fs.writeFileSync('public/assets/official_logo.svg', svgFavicon.trim());

  console.log('Badge and official logos created!');
}

makeBadges();

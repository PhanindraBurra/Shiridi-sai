# Sri Shirdi Sai Vidya Niketan — Animated React Redesign

A Vite + React redesign using the school's public content and image assets as the source.

## Structure
- `src/App.jsx` — main React page component
- `src/main.jsx` — React entry point
- `src/styles.css` — responsive animations and styling
- `public/images/` — local image assets
- `scripts/download-images.mjs` — downloads the school's public image assets into `public/images/`

## Run
```bash
npm install
npm run setup-images
npm run dev
```

If the binary images are already present in `public/images`, `npm run setup-images` skips them.

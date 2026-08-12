# Planivo Studio

Premium marketing site for Planivo Studio — built with React, Vite, and Framer Motion.
3D moments (the hero planner stack and the scroll-driven storytelling book) are done with
lightweight CSS 3D transforms rather than WebGL, so the site stays fast on mobile.

## Stack

- **React 18 + Vite** — build tooling, zero backend
- **Framer Motion** — scroll reveals, page transitions, the discovery-picker crossfade
- **Plain CSS + custom properties** — the whole design system lives in `src/styles/tokens.css`
- No Tailwind, no UI kit — every visual choice is intentional and easy to re-theme

## Project structure

```
src/
  components/   Nav, Footer, ProductCard, SectionHeading, PlannerStack3D — reusable UI
  sections/     One file + one stylesheet per homepage section
  pages/        Home.jsx composes the sections in order
  data/         products.js — the single source of truth for every product card
  hooks/        useReducedMotion, usePointerParallax
  styles/       tokens.css (design tokens) + global.css (reset & base styles)
```

## Adding a future product

Everything on the site — the Ecosystem grid, the Discovery picker, and the footer's
Products list — reads from `src/data/products.js`. To ship a new planner:

1. Add an object to the `products` array (id, name, description, status, features…).
2. If it should appear in the homepage grid, add its `id` to `featuredProductIds`.
3. That's it — no component or markup changes required.

When a product is ready to sell, flip its `status` to `"available"` and add a real
`ctaLabel` / checkout link.

## Local development

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploying to GitHub Pages

1. Push this project to a GitHub repository.
2. Install the gh-pages helper: `npm install -D gh-pages`.
3. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.
5. In the repo's **Settings → Pages**, set the source to the `gh-pages` branch.

`vite.config.js` already uses a relative `base: "./"`, so the build works whether the
site is served from `username.github.io/repo-name/` or a custom domain — no path edits
needed.

**Alternative:** use GitHub Actions with the official `actions/deploy-pages` workflow if
you'd rather deploy on every push to `main`. The static `dist/` output works with either
approach unchanged.

## Deploying to Cloudflare Pages

1. Push the project to a Git repository (GitHub or GitLab) and connect it in the
   Cloudflare Pages dashboard, **or** deploy directly from the CLI:
   ```bash
   npm run build
   npx wrangler pages deploy dist
   ```
2. If connecting a repo instead, use:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Framework preset:** Vite

No environment variables or backend are required — the entire site is static.

## Accessibility & performance notes

- All decorative 3D/animated elements are `aria-hidden` and skip-linked past.
- `prefers-reduced-motion` is respected globally (see `global.css` and the
  `useReducedMotion` hook) — animations collapse to instant state changes.
- Pointer-parallax effects are disabled on touch devices automatically.
- Fonts are loaded with `preconnect` and `display=swap`; no other external requests are
  made at runtime.
- Visible focus states are set globally via `:focus-visible`.

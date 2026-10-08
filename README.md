# Fermor Homepage

Next.js 14 (App Router) + Tailwind CSS.

## Setup
```
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```
Deploy: push to GitHub, import the repo on vercel.com, click Deploy (no config needed).

## Decisions
- **Direction:** warm paper + deep green with a lime accent. Calm and trustworthy rather than the usual neon fintech look. Fraunces (serif) for warmth, Inter for clarity.
- **Story order:** promise → three pillars (Understand/Act/Grow) → interactive proof → process → objections (FAQ) → CTA.
- **Working feature:** a compounding calculator (monthly amount, years, return) with a live SVG chart, no chart library. Currency is one constant in `components/Projection.jsx`.
- **Responsive:** mobile-first grid, hamburger nav, fluid type scale.
- **Accessibility:** semantic landmarks, labelled inputs, native `<details>` FAQ, reduced-motion support.
- **Trade-off:** copy is written from the brief; swap in real product copy and screenshots where available.

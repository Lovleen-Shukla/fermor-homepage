# Fermor Homepage

A redesigned homepage for Fermor, built for the Frontend Developer Assignment.

**Live site:** https://fermor-homepage-phi.vercel.app/
**Repository:** https://github.com/Lovleen-Shukla/fermor-homepage

![Desktop view](./screenshots/desktop.png)


## Tech stack
- Next.js 14 (App Router) and React 18
- Tailwind CSS 3
- `next/font` (Fraunces for headings, Inter for body text)
- No UI or chart libraries. The growth chart is plain SVG.

## Getting started
Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Deployment
Push to GitHub, import the repo on [vercel.com](https://vercel.com) and click Deploy. No environment variables or extra configuration are needed.

## Project structure
```
app/
  layout.jsx        Fonts, metadata, shared nav
  page.jsx          All homepage sections and copy
  globals.css       Tailwind layers, base styles, animation
components/
  Nav.jsx           Sticky header with mobile menu
  Projection.jsx    Interactive growth calculator
tailwind.config.js  Colour palette and font tokens
```

## Product thinking
**Who it is for:** people who want to feel in control of their money but are put off by jargon, from first-time earners to people planning bigger goals.

**What the page says:** Fermor helps you *understand*, *act* and *grow*. The homepage is built around that three-part promise.

**Page flow:** promise, then the three ideas, then interactive proof, then how it works, then answers to common doubts (FAQ), then a clear call to action. Each section answers the question a visitor would ask next.

## Design decisions
- **Visual direction:** warm paper background, deep green text and a lime accent. Finance sites often default to cold blues or neon. This palette aims to feel calm and trustworthy instead.
- **Typography:** a serif display face adds warmth and personality, while a clean sans-serif keeps body copy readable.
- **Interactive calculator:** instead of describing what compounding does, the page lets visitors try it. It uses a monthly-compounding formula and shows the split between money you put in and growth. The currency is a single constant (`CURRENCY`) in `components/Projection.jsx`.
- **Responsive:** mobile-first grids, fluid type sizes and a hamburger menu under the `md` breakpoint.
- **Accessibility:** semantic landmarks, labelled form fields, a native `<details>` FAQ that works without JavaScript, visible focus states and `prefers-reduced-motion` support.
- **Performance:** fonts are self-hosted by Next, there are no heavy dependencies, and the only client-side JavaScript is the nav and calculator.

## Trade-offs and next steps
- Copy is written from the assignment brief and the product's stated goal. With real product details I would replace it, and add product screenshots to the hero.
- The email form in the final section is front-end only. In production it would post to an API route or a service such as Formspree.
- Projections are illustrations, not advice. The page says so under the calculator and in the footer.
- With more time: a pricing section, customer stories, dark mode and basic analytics.
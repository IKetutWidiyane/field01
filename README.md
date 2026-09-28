# FIELD/01 — Equipment for the Unmapped

A premium, Awwwards-style outdoor-equipment digital experience built as a
**digital field laboratory** — editorial canvas, cinematic photography,
engineering data and a high-visibility expedition-orange signal system.

Stack: **React + Vite + TypeScript + Tailwind CSS v4 + GSAP (ScrollTrigger) + Lenis.**

## Design System

| Role | Value |
|---|---|
| Canvas (dominant background) | `#F7F6F2` |
| Ink (primary text) | `#151515` |
| Muted (technical / metadata) | `#777872` |
| Signal orange (CTA + markers only) | `#F15A24` |
| Sand (secondary blocks) | `#D8D1C5` |
| Line (borders / grid) | `#D9D8D3` |
| Footer (single dark moment) | `#151515` |

Tokens live in `src/index.css` under the Tailwind `@theme` block
(`bg-canvas`, `text-ink`, `text-signal`, `bg-sand`, `border-line`, …).
Orange is a **signal, not the foundation**.

Typography: Space Grotesk (display/UI) + JetBrains Mono (technical metadata).

## Architecture (section 25 of AGENTS.MD)

```
src/
├─ components/     Navbar, MagneticButton, SectionLabel, TechnicalLabel,
│                  ImageReveal, TechnicalCallout, ProductVisual
├─ sections/       Hero, Terrain, Equipment, EngineeredFor, FieldTest,
│                  System, FieldJournal, FinalCTA, Footer
├─ animations/     reveal.ts, parallax.ts, scroll.ts, hero.ts, utils.ts
├─ data/           equipment, terrain, fieldTests, journal, system (.ts)
├─ hooks/          useLenis, useReducedMotion, useMediaQuery
├─ types.ts        shared TypeScript data models
├─ App.tsx · main.tsx · index.css
```

Data is fully typed and separated from presentation (section 26).

## Motion

- Lenis smooth scroll synced with GSAP ScrollTrigger via a single ticker loop.
- Hero load sequence + scroll parallax (`animations/hero.ts`).
- Pinned horizontal catalogue for Equipment / EngineeredFor / FieldTest
  (degrades to an intentional vertical flow on mobile).
- `revealText / revealImage / fadeUp / staggerReveal / clipReveal /
  parallaxImage / scaleOnScroll / horizontalScroll` utilities.
- All motion respects `prefers-reduced-motion` (`hooks/useReducedMotion.ts`).

## Commands

```bash
npm install     # install dependencies
npm run dev     # dev server at http://localhost:5173
npm run build   # typecheck + production build → dist/
npm run preview # preview the production build
npm run typecheck
```

## Photography

Placeholder photography is hot-linked from **picsum.photos**. Replace with
real expedition photography by dropping files into `public/` and updating the
image sources in `src/data/*.ts`.

---

FIELD/01 © 2026 — Equipment for the Unmapped.
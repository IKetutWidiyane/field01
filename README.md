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

Typography: **Geist** (display / UI / body) + **Geist Mono** (technical
metadata) — one family, loaded from Google Fonts in `index.html` (weights
`300/400/500/600/700` + mono `400/500`, every weight matched to real usage)
and mapped to `--font-display` / `--font-mono` in `src/index.css`.

UI rules (v0.3, see section 41 of `AGENTS.MD`):

- Sections are **named, never indexed** — no `01 / THE TERRAIN` labels.
- Sections never open with an explanatory paragraph.
- Technical metadata must carry real information (no decorative LAT/LON rails).
- Motion is declared with `data-*` attributes and one `initSectionMotion()` call
  per section instead of hand-rolled ScrollTriggers.

## Architecture (section 25 of AGENTS.MD)

```
src/
├─ components/     Navbar, MagneticButton, TechnicalLabel,
│                  ImageReveal, TechnicalCallout, ProductVisual
├─ sections/       Hero, Terrain, Equipment, EngineeredFor, FieldTest,
│                  System, FieldJournal, FinalCTA, Footer
├─ animations/     section.ts (entry point), reveal.ts, parallax.ts,
│                  scroll.ts, hero.ts, utils.ts
├─ data/           equipment, terrain, fieldTests, journal, system (.ts)
├─ hooks/          useLenis, useReducedMotion, useMediaQuery, useScrollLock
├─ types.ts        shared TypeScript data models
├─ App.tsx · main.tsx · index.css
```

Data is fully typed and separated from presentation (section 26).

## Motion

- Lenis smooth scroll synced with GSAP ScrollTrigger via a single ticker loop.
- Hero load sequence + layered scroll parallax (`animations/hero.ts`,
  `initHeroCinematicParallax`).
- `initSectionMotion(root)` is the single entry point every section calls once
  on mount. It wires a declarative contract:

  | Attribute | Motion |
  |---|---|
  | `data-reveal-heading` | word-mask reveal on the section heading |
  | `data-reveal` | staggered fade-up reveal |
  | `data-parallax` | vertical parallax drift |
  | `data-scale` | `scale 1.14 → 1` on entry |
  | `data-line` | single-line masked text reveal |

- Equipment uses a pinned horizontal catalogue that degrades to an intentional
  vertical flow on mobile (`animations/scroll.ts`).
- Terrain / EngineeredFor / FieldTest re-arm `parallaxImage()` on every state
  change so switching feels cinematic.
- Utility set: `revealText / revealImage / fadeUp / staggerReveal / clipReveal /
  parallaxImage / scaleOnScroll / horizontalScroll`.
- All motion respects `prefers-reduced-motion` (`hooks/useReducedMotion.ts`).

## Navigation

- One fixed bar: brand + `EQUIPMENT / FIELD TEST / JOURNAL / MENU` on desktop,
  brand + hamburger on mobile (section 12 of `DESIGN.MD`).
- The mobile trigger is drawn, not imported: three hairlines in a `22 × 12`
  box that fold into an orange X, with a mono `MENU` / `CLOSE` micro-label in
  a `44 × 44` touch target.
- The overlay is a fullscreen `role="dialog"` anchored to `inset: 0` and
  padded past the bar, so it never leaks a sliver of the page underneath.
- **An open menu locks the page.** `useScrollLock()` runs three layers —
  `lenis.stop()`, `overflow: hidden` on `html` + `body` (scrollbar loss
  compensated via `--scroll-lock-gutter` so the fixed header does not shift),
  and a coarse-pointer `position: fixed` body freeze whose offset is restored
  on close with a Lenis re-sync. The panel carries `data-lenis-prevent` so it
  stays scrollable.
- Keyboard/AT: `Esc` closes, focus enters the panel and returns to the
  trigger, `Tab` cycles inside the header, the closed panel is `inert`, and
  the menu closes itself at the `md` breakpoint.

## Page structure

```
Navbar
01  Hero              — The field starts here.
02  Terrain           — Five worlds. One system.
03  Equipment         — The equipment system
04  Engineered For    — Condition by condition
05  Field Test        — Expedition reports / 034 – 036
06  System            — Engineering blueprint
07  Field Journal     — Notes from the field
    Final CTA         — Where will you go next?
    Footer
```

## Commands

```bash
npm install     # install dependencies
npm run dev     # dev server at http://localhost:5173
npm run build   # typecheck + production build → dist/
npm run preview # preview the production build
npm run typecheck
```

## Photography

Photography is hot-linked from **images.unsplash.com** (alpine, forest, coast,
desert, material and equipment frames). Replace it with real expedition
photography by dropping optimised WebP/AVIF files into `public/` and updating
the `image` fields in `src/data/*.ts`. Keep the art direction rules in
section 30 of `AGENTS.MD` / section 38 of `DESIGN.MD`: cinematic natural
light, muted natural colour, real equipment, no smiling stock hikers.

Hero assets use `fetchPriority="high"`; everything below the fold uses
`loading="lazy"`.

---

FIELD/01 © 2026 — Equipment for the Unmapped.
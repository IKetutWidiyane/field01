# FIELD/01 — Expedition Equipment Laboratory

A premium outdoor-editorial single-page experience built with **React + Vite**.

> Warm paper, clean type, signal orange where it matters.

## Design System

| Role | Value |
|---|---|
| Background (dominant) | `#F7F6F2` |
| Primary text | `#151515` |
| Slate (technical / meta) | `#777872` |
| Signal orange (CTA + markers only) | `#F15A24` |
| Sand (secondary blocks) | `#D8D1C5` |
| Border / grid | `#D9D8D3` |
| Footer (single dark moment) | `#151515` |

Tokens live in `src/styles/tokens.css`. Orange is a **signal, not the foundation** — it appears on CTAs, active states, field-test markers and technical highlights only.

## Stack

- Node ≥ 20, npm
- React 19
- Vite 6
- Plain CSS with custom properties (no UI framework)

## Project Structure

```
src/
├─ main.jsx / App.jsx        # entry + section composition
├─ styles/
│  ├─ tokens.css             # design tokens
│  └─ global.css             # base, buttons, meta, utilities
└─ components/
   ├─ Navigation / Hero
   ├─ Equipment / Terrain / FieldTest
   ├─ TheSystem              # interactive blueprint (01–05)
   ├─ Journal / FinalCta / Footer
   └─ Reveal.jsx             # scroll-reveal helper
```

## Commands

```bash
npm install     # install dependencies
npm run dev     # start dev server (http://localhost:5173)
npm run build   # production build → dist/
npm run preview # preview the production build
```

## Photography

Placeholder photography is hot-linked from **picsum.photos** (free placeholder service). Replace with real expedition photography by dropping files into `public/` and updating the `src`/`img` references in each component.

---

FIELD/01 © 2026 — Engineered for the terrain.
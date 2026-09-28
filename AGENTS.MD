# FIELD/01 — Premium Outdoor Equipment Digital Experience

Build a premium, highly interactive outdoor equipment website called **FIELD/01** using **React + Vite + TypeScript**.

The website should feel like a high-end digital experience / Awwwards-style product website inspired by the **visual storytelling, photography, craftsmanship, editorial composition, and motion quality** found in premium outdoor brands such as EIGER Adventure, Moto Card, Arc'teryx, Snow Peak, Patagonia, and And Wander.

**IMPORTANT:** These brands are references for general outdoor atmosphere and quality only.

Do NOT copy:

* their layouts
* logos
* exact colors
* typography
* assets
* photography
* product designs
* navigation
* visual identity
* page structure

Create a completely original digital identity for FIELD/01.

---

# 01 — BRAND CONCEPT

## Brand

**FIELD/01**

## Tagline

**Equipment for the Unmapped.**

## Core Concept

FIELD/01 is an experimental outdoor equipment brand presented through a **digital field laboratory**.

The experience combines:

* outdoor equipment
* expedition documentation
* technical engineering
* field testing
* editorial photography
* environmental storytelling
* premium product presentation

The website should feel less like a conventional ecommerce store and more like:

> **An outdoor equipment laboratory + expedition journal + premium product showcase.**

The user should feel like they are moving through an expedition rather than browsing a normal online store.

The overall storytelling should progress naturally:

```text
THE ENVIRONMENT
        ↓
THE EQUIPMENT
        ↓
THE ENGINEERING
        ↓
FIELD TESTING
        ↓
THE EQUIPMENT SYSTEM
        ↓
THE FIELD JOURNAL
        ↓
THE NEXT EXPEDITION
```

---

# 02 — TECH STACK

Use:

* React
* Vite
* TypeScript
* Tailwind CSS
* GSAP
* GSAP ScrollTrigger
* Lenis
* Lucide React

Optional:

* React Three Fiber
* Three.js

### Three.js rule

Do NOT use Three.js unless it genuinely improves the experience.

If a suitable 3D model is unavailable, use:

* high-quality 2D imagery
* SVG
* CSS
* GSAP
* clip-path
* image compositing

The website must remain performant.

Do not add dependencies without a clear reason.

---

# 03 — PROJECT REQUIREMENTS

The application must be:

* frontend-only
* production-oriented
* component-based
* responsive
* accessible
* performant
* maintainable

Do not create a backend.

Do not create authentication.

Do not create a database.

Do not create a conventional ecommerce checkout.

This is primarily a **brand experience + interactive product showcase**, not a functional ecommerce platform.

---

# 04 — CORE VISUAL DIRECTION

The design should feel:

* premium
* editorial
* cinematic
* technical
* outdoors-oriented
* minimal
* atmospheric
* sophisticated
* slightly experimental
* industrial
* expedition-inspired
* contemporary

Visual references should evoke:

* alpine equipment
* expedition notebooks
* technical documentation
* outdoor product photography
* field research
* engineering diagrams
* mountain terrain
* canvas
* rock
* weathered materials
* modern outdoor equipment

The website should feel like:

> **An outdoor equipment company from the near future documenting equipment in the field.**

---

# 05 — AVOID GENERIC AI DESIGN

The final website must NOT look like a generic AI-generated landing page.

Avoid:

* generic ecommerce grids
* generic Shopify layouts
* SaaS dashboards
* Webflow-style templates
* excessive cards
* excessive rounded corners
* excessive glassmorphism
* excessive gradients
* excessive shadows
* huge glow effects
* cyberpunk aesthetics
* gaming aesthetics
* crypto aesthetics
* neon UI
* purple/blue gradients
* cyan
* neon green
* excessive orange
* excessive particles
* excessive floating elements

Do not animate every element.

Do not make every section visually noisy.

Create contrast between:

* movement
* stillness
* typography
* photography
* technical information
* whitespace

---

# 06 — COLOR SYSTEM

Use a **light outdoor editorial color palette**.

The website should have a primarily **warm white background**, not a dark background.

## Primary Background

```text
#F7F6F2
```

Warm off-white.

Use for:

* main background
* navigation
* terrain
* equipment
* journal
* whitespace
* editorial layouts

Avoid pure white `#FFFFFF` as the dominant page background.

---

## Primary Text

```text
#151515
```

Use for:

* headings
* navigation
* product names
* body text
* section titles
* primary UI

Use near-black instead of pure black.

---

## Signal Orange

```text
#F15A24
```

Primary accent.

Use as an expedition signal color representing:

* exploration
* energy
* visibility
* movement
* outdoor activity
* field equipment
* active states

Use sparingly for:

* CTA
* active navigation
* active terrain
* field-test identifier
* technical marker
* progress indicator
* hover state
* selected state
* arrows
* small highlights

Important:

> **Orange is a signal, not the foundation.**

Do NOT use orange for large backgrounds or every interactive element.

---

## Muted Slate Grey

```text
#777872
```

Use for:

* metadata
* technical specifications
* coordinates
* secondary descriptions
* dates
* field-test data
* inactive navigation
* technical labels
* grid lines
* secondary UI

---

## Sand / Secondary Light

```text
#D8D1C5
```

Use for:

* alternate sections
* editorial panels
* journal areas
* product information surfaces
* CTA transitions
* technical panels
* subtle visual contrast

---

## Border

```text
#D9D8D3
```

Use for:

* section dividers
* technical grids
* navigation border
* product specifications
* journal separators

Borders should be thin and subtle.

---

## Color hierarchy

Use approximately:

```text
#F7F6F2  →  65–75%
#151515  →  15–20%
#777872  →  5–10%
#D8D1C5  →  3–7%
#F15A24  →  1–3%
```

Do not allow orange to dominate the interface.

---

# 07 — TYPOGRAPHY

## Typeface (locked)

```text
DISPLAY / UI / BODY   →   GEIST
TECHNICAL / METADATA  →   GEIST MONO
```

Geist is the single voice of the brand: a neutral, modern grotesk with
excellent optical sizing and a very low "designed" signature. Geist Mono
carries every piece of field telemetry.

Both are loaded once from Google Fonts in `index.html` (with
`display=swap` and `preconnect`) and mapped to Tailwind tokens in
`src/index.css`:

```text
--font-display: "Geist", ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
--font-mono:    "Geist Mono", ui-monospace, "SF Mono", Consolas, monospace;
```

Only the weights the design actually uses are requested from Google Fonts:

```text
300   font-light    mobile menu trigger label, .type-accent accent line
400   font-normal   body copy, technical metadata
500   font-medium   labels, metadata values, active states
600   font-semibold section headings, buttons, navigation
700   font-bold     brand wordmark + monumental display words only
                    (Terrain background word, Engineered For condition word)
      —            never used: 100, 200, 800, 900
```

Never request a weight the design does not use.

Do NOT introduce a third family. Do NOT mix in a competing display
typeface (no additional serif, no condensed industrial face, no
decorative face). Hierarchy is created with **scale, weight, tracking and
whitespace** — never with more fonts.

Section headings (`.display-hero`, `.display-lg`) never exceed `600`.
`700` is reserved for the wordmark and for single monumental words, where
"bold display type" means *large and heavy* only at extreme size.

## Roles

```text
display-hero   monumental statement type, uppercase, tracking tight, w600
display-lg     section statements, uppercase, tracking tight, w600
type-accent    second line of a heading — same family, italic, w300
               (defined as .type-accent in src/index.css;
                Geist has no italic face, so this oblique is browser-synthesised)
wordmark       FIELD/01 at w700 — the only "loud" type in the UI
mono           all metadata: coordinates, altitude, temperature, wind,
               durations, serials, material codes, status flags
```

## Rules

* Typography should feel: editorial, technical, modern, confident, restrained.
* Large headings should be visually strong but remain readable.
* Headings are short. Two to four words per line maximum.
* Sections must never open with an explanatory paragraph. A heading plus a
  single short supporting line is the ceiling.
* Avoid excessive paragraphs. If body copy is not readable in one glance,
  it is too long — cut it.
* Technical metadata stays small (`text-[0.62rem]` – `text-xs`), uppercase,
  and letter-spaced. It supports composition; it never dominates it.

Example:

```text
THE FIELD
STARTS HERE.
```

---

# 08 — GLOBAL EXPERIENCE

The entire page should feel like one continuous expedition.

Scrolling progressively reveals:

```text
01 — TERRAIN
02 — EQUIPMENT
03 — ENGINEERED FOR
04 — FIELD TEST
05 — THE SYSTEM
06 — FIELD JOURNAL
07 — FINAL EXPEDITION
```

**These numbers are the internal narrative sequence only.**

They are NOT rendered UI. Do not print `01 / THE TERRAIN`, `02 / EQUIPMENT`
or any equivalent numbered label above a section. Do not number navigation
items, terrain tabs, product index rows, condition tabs, field-test reports
or journal entries either. The content names itself:

```text
THE TERRAIN          not   01 / THE TERRAIN
EQUIPMENT            not   02 / EQUIPMENT
FIELD TEST / 034     ok    (034 is part of the report identity)
```

Use carefully controlled:

* parallax
* image scaling
* clip-path reveals
* text movement
* pinned sections
* horizontal scrolling
* opacity transitions
* typography transformations

Animations must be intentional.

Do not make everything move simultaneously.

---

# 09 — NAVIGATION

Create a minimal fixed navigation.

Desktop:

```text
FIELD/01

EQUIPMENT
FIELD TEST
JOURNAL

MENU
```

The navigation should be lightweight.

On initial load:

* warm off-white background
* dark text
* subtle border

When scrolling:

* become slightly more compact
* add subtle background opacity
* add subtle border
* maintain readability

Avoid heavy glassmorphism.

---

## Mobile

Display:

```text
FIELD/01                    ☰  three hairlines + mono label
```

The trigger is a **drawn hamburger**, not a character and not an icon
package: three 1px hairlines inside a `22 × 12` box that fold into an
orange X when the menu opens. A mono micro-label (`MENU` / `CLOSE`) at
weight `300` sits to its left; the whole control is a `44 × 44` touch
target optically aligned to the column edge (`-mr-[11px]` compensates for
the box padding around the hairlines).

The overlay is a fullscreen `role="dialog"` surface — `inset: 0` padded
past the bar — so opening it never reveals a sliver of the page below at
any header height.

**While the menu is open, the page behind it cannot scroll.** Three
mechanisms run together (`src/hooks/useScrollLock.ts`):

```text
lenis.stop()                 the smooth-scroll engine ignores overflow:hidden
overflow: hidden             html + body, scrollbar loss compensated by
                             --scroll-lock-gutter (fixed header must not shift)
body position: fixed         coarse-pointer freeze — Safari ignores
                             overflow:hidden; offset restored on release
```

The panel keeps `data-lenis-prevent` so it stays scrollable inside the
locked page. Rule: **any fixed overlay that claims the screen owns the
scroll lock while it is open.**

Menu:

```text
EQUIPMENT
FIELD TEST
JOURNAL
ABOUT
```

The mobile menu shows the four destinations and nothing else: no index
numbers, no `FIELD SYSTEM / 01` string, no decorative metadata rows. One
short coordinates line at the bottom of the overlay is the only permitted
technical detail.

Keyboard contract: `Esc` closes, focus enters the panel on open and
returns to the trigger on close, `Tab` cycles within the header (the
closed panel is `inert`), and the menu closes itself at the `md`
breakpoint so it can never be stranded behind the desktop layout.

Use a clean fullscreen transition.

---

# 10 — SECTION 01 — HERO

Create a full-screen cinematic hero.

Content:

```text
FIELD/01

THE FIELD
STARTS HERE.

Equipment engineered
for uncertain terrain.

EXPLORE EQUIPMENT →
```

---

## Hero visual

Use a large cinematic outdoor equipment photograph.

Possible subject:

* technical backpack
* expedition tent
* hiking equipment
* climbing equipment
* outdoor technical gear

Environment:

* alpine
* mountain
* forest
* wilderness
* rocky terrain
* mist
* remote landscape

Avoid generic stock photography.

The image should have strong composition and negative space.

---

## Technical metadata

Place subtle technical information:

```text
LAT 46°32'12"

LON 7°44'20"

ALT 3,842 M

FIELD TESTED
```

Use muted grey.

Technical metadata should support the composition, not dominate it.

---

## Hero colors

```text
Background: #F7F6F2
Heading: #151515
Body: #777872
Metadata: #777872
CTA: #F15A24
```

---

## Hero animation

On page load:

1. heading reveals
2. supporting text fades upward
3. image scales from approximately 1.05 to 1
4. technical metadata appears with subtle stagger
5. CTA appears
6. image begins subtle movement

Use GSAP.

---

## Hero scroll

On scroll:

* image slowly scales
* heading moves upward
* metadata shifts slightly
* image position changes subtly
* hero transitions naturally into terrain

Use GSAP ScrollTrigger.

Avoid excessive zoom.

---

# 11 — SECTION 02 — THE TERRAIN

Section label:

```text
01 / THE TERRAIN
```

Create an interactive terrain exploration experience.

Terrain options:

```text
FOREST
ALPINE
DESERT
COAST
URBAN
```

When the user selects or hovers over a terrain:

* image changes
* terrain title changes
* description changes
* environmental metadata changes
* active state changes

Use React state.

Use GSAP for transitions.

---

## FOREST

```text
Dense terrain.
Wet conditions.
High humidity.
```

## ALPINE

```text
Low temperature.
High altitude.
Extreme exposure.
```

## DESERT

```text
Dry conditions.
High thermal variance.
Limited water access.
```

## COAST

```text
Salt exposure.
High humidity.
Variable weather.
```

## URBAN

```text
Dense movement.
Hard surfaces.
Rapid transitions.
```

---

## Desktop

Use:

* large immersive image
* oversized terrain typography
* technical metadata
* subtle active marker

Example:

```text
● ALPINE
```

Marker:

```text
#F15A24
```

---

## Mobile

Do not simply shrink desktop.

Use:

* vertical terrain list
* large image
* touch-friendly controls
* simplified transitions

---

# 12 — SECTION 03 — EQUIPMENT

Section label:

```text
02 / EQUIPMENT
```

Do NOT use a conventional product grid.

Present products as large editorial compositions.

Products:

```text
01
RIDGE PACK
45L
```

```text
02
FIELD SHELL
3L
```

```text
03
ALPINE TENT
2P
```

---

## Product information

Each product includes:

* product image
* product name
* category
* weight
* capacity
* material
* weather rating
* CTA

Example:

```text
45 L
1.24 KG
WATERPROOF
CORDURA
YKK ZIP
```

---

## Interaction

Use pinned scrolling.

Sequence:

```text
PRODUCT 01
     ↓
SPECIFICATIONS
     ↓
IMAGE MOVEMENT
     ↓
PRODUCT 02
     ↓
PRODUCT 03
```

Product image should dominate the viewport.

Use:

* GSAP ScrollTrigger
* scale
* opacity
* translation
* clip-path
* subtle image movement

The section should feel like a **digital technical catalog**.

---

# 13 — SECTION 04 — ENGINEERED FOR

Section label:

```text
03 / ENGINEERED FOR
```

Large words:

```text
RAIN
WIND
COLD
WEIGHT
DISTANCE
```

As the user scrolls, change the visual environment.

---

## RAIN

Visual:

* wet environment
* darker photography
* subtle rain texture

Technical information:

```text
WATERPROOF CONSTRUCTION
SEALED SEAMS
WEATHER RESISTANCE
```

---

## WIND

Visual:

* wind
* directional movement
* fabric movement

Information:

```text
WIND RESISTANT
STABILIZED STRUCTURE
FIELD TESTED
```

---

## COLD

Visual:

* snow
* frost
* low-temperature environment

Information:

```text
THERMAL INSULATION
LOW TEMPERATURE PERFORMANCE
```

---

## WEIGHT

Visual:

* material closeups
* technical construction
* lightweight components

Information:

```text
LIGHTWEIGHT CONSTRUCTION
HIGH STRENGTH MATERIAL
LOAD OPTIMIZATION
```

---

## DISTANCE

Visual:

* expedition landscape
* long-distance hiking
* remote terrain

Information:

```text
LONG-DISTANCE DURABILITY
ERGONOMIC LOAD DISTRIBUTION
FIELD TESTED
```

Avoid excessive particle simulations.

The visual effects should remain restrained.

---

# 14 — SECTION 05 — FIELD TEST

Section label:

```text
04 / FIELD TEST
```

Create a cinematic expedition testing section.

Present reports like real technical field logs.

---

## FIELD TEST / 034

```text
LOCATION
ALPS

ALTITUDE
3,842 M

TEMPERATURE
-12°C

WIND
67 KM/H

DURATION
04:27:18
```

---

## FIELD TEST / 035

```text
LOCATION
PATAGONIA

ALTITUDE
1,920 M

TEMPERATURE
-6°C

WIND
81 KM/H

DURATION
06:12:44
```

---

## FIELD TEST / 036

```text
LOCATION
HOKKAIDO

ALTITUDE
780 M

TEMPERATURE
-9°C

WIND
54 KM/H

DURATION
05:41:21
```

---

## Interaction

Use pinned scrolling or cinematic transitions.

Sequence:

```text
FIELD TEST / 034
       ↓
photography + metadata
       ↓
FIELD TEST / 035
       ↓
photography + metadata
       ↓
FIELD TEST / 036
```

The section should feel like:

* expedition report
* field documentation
* technical research
* editorial photography

Do not make it look like a dashboard.

---

# 15 — SECTION 06 — THE SYSTEM

Section label:

```text
05 / THE SYSTEM
```

Show how equipment is engineered.

Use a large technical backpack or outdoor equipment visual.

Callouts:

```text
01
FRAME

02
LOAD SYSTEM

03
MATERIAL

04
STORAGE

05
WEATHER PROTECTION
```

---

## Interaction

The equipment remains visually stable.

As the user scrolls:

```text
01 FRAME
      ↓
02 LOAD SYSTEM
      ↓
03 MATERIAL
      ↓
04 STORAGE
      ↓
05 WEATHER PROTECTION
```

Each callout should:

* appear progressively
* connect to a product area
* display supporting information
* animate the connection line
* highlight the active component

Use SVG lines.

Use GSAP to animate:

* opacity
* line drawing
* label movement
* supporting text

---

## Color

Primary label:

```text
#151515
```

Secondary information:

```text
#777872
```

Connection lines:

```text
#D9D8D3
```

Active point:

```text
#F15A24
```

The section should feel like:

> **an engineering blueprint translated into a premium digital interface.**

Do not create a generic infographic.

---

## Optional 3D

Use React Three Fiber only if a suitable model genuinely improves the experience.

Otherwise use a high-quality 2D image.

Do not introduce WebGL unnecessarily.

---

# 16 — SECTION 07 — FIELD JOURNAL

Section label:

```text
06 / FIELD JOURNAL
```

Create a horizontal or editorial journal experience.

Articles:

```text
48 HOURS ABOVE 3000M

WHY WE CHOSE CORDURA

BUILDING THE PERFECT CAMP KITCHEN

THE ART OF PACKING LIGHT
```

Each article includes:

* image
* category
* title
* date
* short description

Use:

* large photography
* asymmetric layouts
* editorial typography
* subtle hover movement

Do NOT use a conventional blog card grid.

---

# 17 — FINAL CTA

Transition naturally from Field Journal into the final CTA.

Main typography:

```text
WHERE
WILL YOU
GO NEXT?
```

CTA:

```text
EXPLORE THE EQUIPMENT →
```

Supporting text:

```text
EQUIPMENT FOR THE UNMAPPED.
```

Use:

```text
Background: #D8D1C5
Text: #151515
Accent: #F15A24
```

The CTA should feel:

* spacious
* cinematic
* editorial
* confident
* quiet

Do not overload this area with UI.

---

# 18 — FOOTER

Create a minimal technical footer.

Use:

```text
Background: #151515
Text: #F7F6F2
Muted: #777872
Accent: #F15A24
```

Content:

```text
FIELD/01

EQUIPMENT
FIELD TEST
JOURNAL
ABOUT

INSTAGRAM
CONTACT

FIELD/01
© 2026
```

Decorative technical metadata:

```text
FIELD SYSTEM / 01
LAT 46°32'12"
LON 7°44'20"
```

Keep it minimal.

---

# 19 — MOTION SYSTEM

Use GSAP + ScrollTrigger.

Create reusable animation utilities.

Implement:

```text
revealText()
revealImage()
fadeUp()
parallaxImage()
clipReveal()
scaleOnScroll()
horizontalScroll()
staggerReveal()
```

Suggested duration:

```text
0.6s – 1.2s
```

Preferred easing:

```text
power2.out
power3.out
power4.out
```

Motion should feel:

* cinematic
* controlled
* smooth
* expensive
* restrained

Avoid:

* bounce
* excessive spring
* excessive rotation
* constant movement
* exaggerated scale
* simultaneous animation of everything

---

# 20 — LENIS

Use Lenis for smooth scrolling.

Synchronize Lenis with GSAP ScrollTrigger correctly.

Use a single animation loop.

Conceptually:

```text
Lenis
   ↓
requestAnimationFrame
   ↓
GSAP
   ↓
ScrollTrigger
```

Do not create competing animation loops.

Ensure ScrollTrigger refreshes correctly after layout/media changes.

---

# 21 — REDUCED MOTION

Implement:

```text
useReducedMotion()
```

Respect:

```text
prefers-reduced-motion
```

When enabled:

* disable heavy parallax
* reduce image scaling
* reduce scroll transformations
* simplify transitions
* disable unnecessary decorative movement
* maintain full usability

---

# 22 — RESPONSIVE DESIGN

## Desktop

Use:

* cinematic layouts
* large typography
* immersive imagery
* pinned sections
* technical overlays
* horizontal movement

---

## Tablet

Reduce:

* animation intensity
* image scale
* decorative elements

Maintain:

* hierarchy
* typography
* interaction
* visual rhythm

---

## Mobile

Do NOT simply scale down desktop.

Create intentional mobile compositions.

Use:

* vertical layouts
* simplified animations
* reduced parallax
* smaller image dimensions
* touch-friendly controls
* readable typography
* clear CTA hierarchy

Remove unnecessary:

* WebGL
* particle effects
* complex pinned interactions
* excessive metadata

Mobile must still feel like the same brand experience.

---

# 23 — PERFORMANCE

Optimize heavily.

Use:

* WebP
* AVIF
* WebM
* MP4
* responsive image sizes
* lazy loading
* poster images
* appropriate image dimensions

Do not load every large asset immediately.

Preload only critical hero assets.

Avoid:

* GIF for cinematic content
* huge unoptimized images
* unnecessary autoplay video
* unnecessary Three.js
* excessive JavaScript
* excessive animation calculations

Use `loading="lazy"` where appropriate.

---

# 24 — ACCESSIBILITY

Implement:

* semantic HTML
* accessible buttons
* keyboard navigation
* visible focus states
* sufficient contrast
* descriptive alt text
* reduced-motion support
* touch-friendly controls

Do not make essential interactions hover-only.

Every important desktop interaction must have a touch/mobile equivalent.

---

# 25 — CODE ARCHITECTURE

Use reusable components.

Recommended:

```text
src/

├── components/
│   ├── Navbar.tsx
│   ├── MagneticButton.tsx
│   ├── SectionLabel.tsx
│   ├── TechnicalLabel.tsx
│   ├── ProductVisual.tsx
│   ├── ImageReveal.tsx
│   └── TechnicalCallout.tsx
│
├── sections/
│   ├── Hero.tsx
│   ├── Terrain.tsx
│   ├── Equipment.tsx
│   ├── EngineeredFor.tsx
│   ├── FieldTest.tsx
│   ├── System.tsx
│   ├── FieldJournal.tsx
│   └── FinalCTA.tsx
│
├── animations/
│   ├── hero.ts
│   ├── scroll.ts
│   ├── reveal.ts
│   └── parallax.ts
│
├── data/
│   ├── equipment.ts
│   ├── terrain.ts
│   ├── fieldTests.ts
│   └── journal.ts
│
├── hooks/
│   ├── useLenis.ts
│   ├── useReducedMotion.ts
│   └── useMediaQuery.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

Do not put the entire website inside `App.tsx`.

Separate data from presentation.

---

# 26 — DATA MODELS

Use TypeScript interfaces.

Example:

```ts
interface Equipment {
  id: string;
  number: string;
  name: string;
  category: string;
  capacity?: string;
  weight: string;
  material: string;
  weatherRating: string;
  image: string;
  description: string;
}
```

Terrain:

```ts
interface Terrain {
  id: string;
  name: string;
  description: string;
  conditions: string[];
  image: string;
}
```

Field test:

```ts
interface FieldTest {
  id: string;
  location: string;
  altitude: string;
  temperature: string;
  wind: string;
  duration: string;
  image: string;
}
```

Journal:

```ts
interface JournalArticle {
  id: string;
  category: string;
  title: string;
  date: string;
  description: string;
  image: string;
}
```

---

# 27 — MAGNETIC BUTTON

Create:

```text
MagneticButton
```

Desktop:

* subtle cursor attraction
* slight translation
* arrow movement
* border/background transition

Mobile:

* disable magnetic behavior
* preserve normal touch interaction

Example:

```text
EXPLORE EQUIPMENT →
```

Do not make the magnetic effect exaggerated.

---

# 28 — IMAGE REVEAL

Create:

```text
ImageReveal
```

Support:

* clip-path reveal
* scale reveal
* fade
* translation

Example:

```text
scale(1.05)
      ↓
scale(1)
```

Use subtle clip-path and opacity transitions.

Avoid excessive distortion.

---

# 29 — TECHNICAL UI LANGUAGE

Use technical metadata consistently.

Examples:

```text
FIELD SYSTEM / 01
TEST SERIES / 034
ALT 3,842 M
TEMP -12°C
WIND 67 KM/H
MATERIAL / CORDURA
WEIGHT / 1.24 KG
STATUS / FIELD TESTED
```

Technical information should use monospace typography.

Keep it small.

It should enhance the storytelling rather than dominate it.

---

# 30 — IMAGE DIRECTION

Use high-quality outdoor photography.

Preferred:

* cinematic
* natural light
* alpine terrain
* forests
* mountains
* expedition equipment
* close-up materials
* technical product photography
* muted natural colors

Avoid:

* generic smiling stock hikers
* overly saturated landscapes
* unrealistic AI-looking environments
* fake-looking equipment
* excessive HDR
* repetitive ecommerce cutouts

Product photography should feel like **editorial product photography**.

---

# 31 — INTERACTION HIERARCHY

Not every element should be interactive.

## Level 1 — Major interactions

* terrain switching
* equipment transitions
* field-test transitions
* system callouts
* journal hover

## Level 2 — Scroll interactions

* hero parallax
* image reveal
* section transitions
* typography movement

## Level 3 — Microinteractions

* buttons
* navigation
* active states
* hover states

Keep Level 3 interactions subtle.

---

# 32 — SECTION CONTINUITY

Sections must not feel like disconnected blocks.

Create visual continuity:

```text
HERO
 ↓
image transitions into terrain
 ↓
terrain typography transforms
 ↓
equipment image emerges
 ↓
equipment metadata appears
 ↓
environment changes
 ↓
field test appears
 ↓
engineering blueprint
 ↓
journal
 ↓
final expedition
```

Avoid obvious:

```text
SECTION 1
large gap
SECTION 2
large gap
SECTION 3
```

Instead, create one continuous visual narrative.

---

# 33 — BACKGROUND SYSTEM

Primary:

```text
#F7F6F2
```

Use photography and material textures to create depth.

Do not depend on gradients.

If gradients are used:

* keep them extremely subtle
* use only for image readability
* never use neon gradients
* never use purple/blue gradients
* never use large orange gradients

---

# 34 — ORANGE SIGNAL SYSTEM

Primary accent:

```text
#F15A24
```

Use orange as a functional signal.

Good:

```text
● FIELD TESTED
```

```text
ACTIVE
```

```text
01 / SYSTEM
```

```text
EXPLORE →
```

Bad:

```text
Entire orange background
```

Bad:

```text
Every heading orange
```

Bad:

```text
Every card with orange borders
```

The orange should feel like a **field marker or safety signal attached to technical equipment**.

---

# 35 — PAGE STRUCTURE

The final page structure must be:

```text
NAVBAR

01 HERO
THE FIELD STARTS HERE

02 TERRAIN
THE TERRAIN

03 EQUIPMENT
THE EQUIPMENT SYSTEM

04 ENGINEERED FOR
ENVIRONMENTAL CONDITIONS

05 FIELD TEST
EXPEDITION REPORTS

06 THE SYSTEM
ENGINEERING BLUEPRINT

07 FIELD JOURNAL
EDITORIAL STORIES

FINAL CTA
WHERE WILL YOU GO NEXT?

FOOTER
```

---

# 36 — FINAL QUALITY BAR

The final result should feel like:

> **An outdoor equipment company from the near future created a digital field laboratory.**

It should be:

**Premium**
**Technical**
**Editorial**
**Cinematic**
**Minimal**
**Outdoor**
**Experimental**

It should feel closer to an **Awwwards-level interactive brand experience** than a conventional ecommerce website.

---

# 37 — PRIORITIES

Prioritize:

```text
1. Visual hierarchy
2. Typography
3. Photography
4. Motion
5. Interaction
6. Performance
7. Responsive behavior
8. Accessibility
```

Do not sacrifice performance for visual effects.

Do not sacrifice usability for experimental interactions.

---

# 38 — IMPLEMENTATION REQUIREMENT

Build the **complete FIELD/01 website**, not a static mockup.

Implement actual:

* React components
* TypeScript data
* responsive layouts
* GSAP animations
* ScrollTrigger interactions
* Lenis smooth scrolling
* terrain switching
* equipment transitions
* field-test transitions
* technical callouts
* journal interactions
* navigation
* mobile menu
* reduced-motion behavior
* responsive behavior
* accessibility

The final experience must communicate:

# FIELD/01

## EQUIPMENT FOR THE UNMAPPED.

The user should feel that they are not simply browsing outdoor products.

They are entering a **digital field laboratory documenting equipment engineered for places that have not been mapped yet.**

---

# 39 — IMPORTANT BRAND ORIGINALITY RULE

The website may take broad inspiration from the **outdoor industry**, including the visual energy of EIGER Adventure and other premium outdoor brands.

However, FIELD/01 must remain an **original concept**.

Do NOT copy:

* EIGER logo
* EIGER exact brand identity
* EIGER website layout
* EIGER navigation
* EIGER photography
* EIGER product imagery
* EIGER typography
* EIGER exact UI
* EIGER exact page structure

Use only the broader design principles of:

* outdoor exploration
* technical equipment
* expedition documentation
* high visibility signal colors
* editorial photography
* engineering
* field testing

The final design should be recognizable as **FIELD/01**, not as a clone of another outdoor brand.

---

# 40 — FINAL DESIGN STATEMENT

Design FIELD/01 as:

> **A warm editorial canvas for technical outdoor equipment, punctuated by a high-visibility expedition orange signal system.**

The visual language should combine:

```text
WARM OFF-WHITE
+
NEAR BLACK
+
SLATE GREY
+
SAND
+
SIGNAL ORANGE
```

with:

```text
EDITORIAL TYPOGRAPHY
+
CINEMATIC PHOTOGRAPHY
+
TECHNICAL DATA
+
ENGINEERING DETAILS
+
CONTROLLED MOTION
+
EXPEDITION STORYTELLING
```

The result should feel:

**clean but adventurous**
**technical but human**
**minimal but expressive**
**premium but functional**
**outdoor but contemporary**

Build the complete experience with polished transitions and intentional responsive behavior.

---

# 41 — v0.3 CLEAN-UI CONTRACT (READ FIRST)

This section overrides any older text in this document that contradicts it.

## Typography

```text
ONE FAMILY: Geist (display / UI / body) + Geist Mono (technical data)
```

No Inter, no Space Grotesk, no JetBrains Mono, no serif, no display face.
Weights `300 / 400 / 500 / 600 / 700`, each with a defined role — see the
weight map in section 07.

## Labels

```text
SECTIONS ARE NAMED, NEVER INDEXED
```

No `01 / THE TERRAIN`, no `02 / EQUIPMENT`, no `0{n}` prefixes in navigation,
tabs, product rows, conditions, field-test reports or journal entries. The
numbers in section 08 are the internal scroll sequence and are never rendered.
Identifiers that are part of the content itself (`FIELD TEST / 034`) are fine.

## Copy density

```text
HEADING  +  ONE SHORT SUPPORTING LINE          = maximum per section header
```

* Sections never open with an explanatory paragraph.
* No sentence that describes what the user is about to see.
* No decorative metadata rows that carry no information (coordinates rails,
  `FIELD SYSTEM / 01`, `SCHEMATIC / ACTIVE`, `VALIDATION` status bars).
* Data that is real stays: altitude, temperature, wind, duration, weight,
  capacity, material, weather rating, coordinates attached to a place.

## Clean code

* One motion entry point per section: `initSectionMotion(root)` from
  `src/animations/section.ts`, called once on mount.
* Declarative motion via `data-reveal-heading`, `data-reveal`, `data-parallax`,
  `data-scale`, `data-line`. Section components do not hand-roll ScrollTriggers.
* No dead exports, no unused CSS classes, no unused components.

## Verified

```bash
npm run typecheck   # clean
npm run build       # clean
```

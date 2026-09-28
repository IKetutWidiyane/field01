/* ============================================================
   FIELD/01 — DATA MODELS (see section 26 of AGENTS.MD)
   ============================================================ */

export interface Equipment {
  id: string
  number: string
  name: string
  category: string
  capacity?: string
  weight: string
  material: string
  weatherRating: string
  image: string
  alt: string
  description: string
  /** technical catalog flags, e.g. "45 L · 1.24 KG · WATERPROOF" */
  flags: string[]
}

export interface Terrain {
  id: string
  name: string
  description: string
  conditions: string[]
  image: string
  alt: string
}

export interface FieldTest {
  id: string
  report: string
  location: string
  altitude: string
  temperature: string
  wind: string
  duration: string
  image: string
  alt: string
}

export interface JournalArticle {
  id: string
  category: string
  title: string
  date: string
  description: string
  image: string
  alt: string
}

export interface SystemCallout {
  number: string
  name: string
  body: string
  metrics: [string, string][]
}
import type { JournalArticle } from '../types'

export const JOURNAL: JournalArticle[] = [
  {
    id: 'journal-48h',
    category: 'Expedition Log',
    title: '48 Hours Above 3,000M',
    date: '12 FEB 2026',
    description:
      'A violent gale pinned the team to a narrow hanging shelf for forty-eight hours. The tent did not negotiate — neither did the mountain.',
    image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1600&q=85',
    alt: 'Storm ridge bivouac under extreme wind exposure',
  },
  {
    id: 'journal-cord',
    category: 'Materials Research',
    title: 'Why We Chose Cordura® Over Dynatec',
    date: '28 JAN 2026',
    description:
      'We dragged thirty textile swatches over coarse granite for three weeks in wet freeze-thaw cycles. The laboratory bench did the talking.',
    image: 'https://images.unsplash.com/photo-1584905066893-7d5c142ba4e1?auto=format&fit=crop&w=1600&q=85',
    alt: 'Woven ripstop textile fiber under macro technical light',
  },
  {
    id: 'journal-kitchen',
    category: 'Field Nutrition',
    title: 'Building the Perfect Sub-Zero Camp Kitchen',
    date: '09 JAN 2026',
    description:
      'Grams, wind baffles, and the stubborn physics of inverted canister vaporization at -18°C. Boiling water is never a trivial brief.',
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=1600&q=85',
    alt: 'Titanium ultralight camp kitchen on snowy rock bench',
  },
  {
    id: 'journal-light',
    category: 'Load Science',
    title: 'The Uncomfortable Art of Packing Light',
    date: '18 DEC 2025',
    description:
      'We weighed every buckle, seam allowance, and zipper pull twice, then debated whether the emergency bivouac bag could lose 40 grams.',
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1600&q=85',
    alt: 'Expedition gear neatly arranged on canvas tarpaulin',
  },
]
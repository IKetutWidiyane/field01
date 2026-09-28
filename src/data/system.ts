import type { SystemCallout } from '../types'

export const SYSTEM_CALLOUTS: SystemCallout[] = [
  {
    number: '01',
    name: 'FRAME',
    body: 'A mono-tube backbone that transfers load to the hips, not the shoulders. Rigid where it counts, articulate where it moves.',
    metrics: [
      ['WEIGHT', '1.24 KG'],
      ['STIFFNESS', '42 N/MM'],
    ],
  },
  {
    number: '02',
    name: 'LOAD SYSTEM',
    body: 'Compression straps that follow the curve of the body. Internal volume shifts with the ground — the load stays put.',
    metrics: [
      ['LOAD', '22 KG'],
      ['VOLUME', '46 L'],
    ],
  },
  {
    number: '03',
    name: 'MATERIAL',
    body: 'CORDURA ripstop laminated with a TPU membrane. Abrasion-tested on granite, waterproofed against forecasts that lie.',
    metrics: [
      ['DENIER', '500D'],
      ['MEMBRANE', 'TPU'],
    ],
  },
  {
    number: '04',
    name: 'STORAGE',
    body: 'A full clamshell opening with sub-compartments sized for expedition packing. Reach what you need without unpacking everything.',
    metrics: [
      ['POCKETS', '7'],
      ['ACCESS', 'CLAMSHELL'],
    ],
  },
  {
    number: '05',
    name: 'WEATHER PROTECTION',
    body: 'Taped seams, storm flaps, and a coated zipper that survives freeze–thaw cycling. Rain does not negotiate — neither does this.',
    metrics: [
      ['RATING', 'IPX6'],
      ['SEAMS', 'TAPED'],
    ],
  },
]
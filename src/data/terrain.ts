import type { Terrain } from '../types'

export const TERRAINS: (Terrain & {
  coords: string
  tempRange: string
  elevation: string
})[] = [
  {
    id: 'forest',
    name: 'FOREST',
    description: 'Dense, wet, close quarters. High moisture saturation tests outer fabric waterproofing and abrasion resistance against dense timber.',
    conditions: ['Dense terrain.', 'Wet conditions.', 'High humidity.'],
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85',
    alt: 'Dense temperate rainforest with mossy canopy and mist',
    coords: 'LAT 47°33\'18" N',
    tempRange: '+4°C / +18°C',
    elevation: '850 M',
  },
  {
    id: 'alpine',
    name: 'ALPINE',
    description: 'Above the treeline the rules change. Severe winds, sub-zero exposure, and glacial moraines force every gram of gear to justify its presence.',
    conditions: ['Low temperature.', 'High altitude.', 'Extreme exposure.'],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85',
    alt: 'High alpine snow peaks under dramatic morning light',
    coords: 'LAT 46°32\'12" N',
    tempRange: '-22°C / -4°C',
    elevation: '3,842 M',
  },
  {
    id: 'desert',
    name: 'DESERT',
    description: 'Dry conditions and intense thermal variance. Sand infiltration tests zipper durability while sun exposure tests UV nylon degradation.',
    conditions: ['Dry conditions.', 'High thermal variance.', 'Limited water access.'],
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85',
    alt: 'Wind-swept desert dunes with sharp shadows',
    coords: 'LAT 31°12\'44" N',
    tempRange: '+2°C / +44°C',
    elevation: '420 M',
  },
  {
    id: 'coast',
    name: 'COAST',
    description: 'Salt spray bends metal and corrodes inferior coatings. Rapid micro-climates shift from ocean squalls to driving rain in minutes.',
    conditions: ['Salt exposure.', 'High humidity.', 'Variable weather.'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    alt: 'Rugged coastal cliffs battered by sea spray',
    coords: 'LAT 57°48\'09" N',
    tempRange: '+6°C / +16°C',
    elevation: '12 M',
  },
  {
    id: 'urban',
    name: 'URBAN',
    description: 'Dense movement, abrasive concrete, and rapid transitions from heated transit to wet asphalt. Heavy daily wear meets tactical utility.',
    conditions: ['Dense movement.', 'Hard surfaces.', 'Rapid transitions.'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    alt: 'Brutalist concrete architecture in rainy city atmosphere',
    coords: 'LAT 35°41\'22" N',
    tempRange: '-2°C / +28°C',
    elevation: '44 M',
  },
]
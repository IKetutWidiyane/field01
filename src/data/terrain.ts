import type { Terrain } from '../types'

export const TERRAINS: Terrain[] = [
  {
    id: 'forest',
    name: 'FOREST',
    description: 'Dense, wet, close quarters. Everything grows back fast — including your mistakes.',
    conditions: ['Dense terrain.', 'Wet conditions.', 'High humidity.'],
    image: 'https://picsum.photos/id/1036/1400/1000',
    alt: 'Dense forest floor in low light',
  },
  {
    id: 'alpine',
    name: 'ALPINE',
    description: 'Above the treeline the rules change. The mountain decides what survives.',
    conditions: ['Low temperature.', 'High altitude.', 'Extreme exposure.'],
    image: 'https://picsum.photos/id/1018/1400/1000',
    alt: 'Alpine ridge above the clouds',
  },
  {
    id: 'desert',
    name: 'DESERT',
    description: 'Heat by day, deep cold by night. The equipment must swing both ways.',
    conditions: ['Dry conditions.', 'High thermal variance.', 'Limited water access.'],
    image: 'https://picsum.photos/id/1040/1400/1000',
    alt: 'Dune crest against a hot sky',
  },
  {
    id: 'coast',
    name: 'COAST',
    description: 'Salt bends metal and corrodes zippers. The weather changes every twenty minutes.',
    conditions: ['Salt exposure.', 'High humidity.', 'Variable weather.'],
    image: 'https://picsum.photos/id/1043/1400/1000',
    alt: 'Wild coastline under low cloud',
  },
  {
    id: 'urban',
    name: 'URBAN',
    description: 'Hard surfaces, dense movement, rapid transitions. Commuter-grade durability.',
    conditions: ['Dense movement.', 'Hard surfaces.', 'Rapid transitions.'],
    image: 'https://picsum.photos/id/1029/1400/1000',
    alt: 'City structure at dusk',
  },
]
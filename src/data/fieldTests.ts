import type { FieldTest } from '../types'

export const FIELD_TESTS: (FieldTest & {
  tester: string
  gearTested: string
  fieldLog: string
  gps: string
})[] = [
  {
    id: 'field-034',
    report: 'FIELD TEST / 034',
    location: 'ALPS',
    altitude: '3,842 M',
    temperature: '-12°C',
    wind: '67 KM/H',
    duration: '04:27:18',
    image: 'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=1600&q=85',
    alt: 'Expedition testing on an exposed alpine summit ridge',
    tester: 'TECH LOG / OPERATOR: H. VOGEL (SERIES 04)',
    gearTested: 'RIDGE PACK 45L + ALPINE TENT 2P',
    fieldLog: 'Sustained blizzard on the northeast crest. Taped seams showed zero moisture migration over 4.5 hours of continuous spindrift. Zippers remained pliable at -12°C without freezing.',
    gps: 'LAT 46°32\'12" N · LON 7°44\'20" E',
  },
  {
    id: 'field-035',
    report: 'FIELD TEST / 035',
    location: 'PATAGONIA',
    altitude: '1,920 M',
    temperature: '-6°C',
    wind: '81 KM/H',
    duration: '06:12:44',
    image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1600&q=85',
    alt: 'Patagonian scree field under violent storm winds',
    tester: 'TECH LOG / OPERATOR: S. DELGADO (SERIES 04)',
    gearTested: 'FIELD SHELL 3L + RIDGE PACK 45L',
    fieldLog: 'Violent katabatic gusts across open moraine. Cordura hip wings maintained load stability without slippage over 6+ hours of talus hopping. Shell fabric showed zero wet-out.',
    gps: 'LAT 49°16\'11" S · LON 73°02\'58" W',
  },
  {
    id: 'field-036',
    report: 'FIELD TEST / 036',
    location: 'HOKKAIDO',
    altitude: '780 M',
    temperature: '-9°C',
    wind: '54 KM/H',
    duration: '05:41:21',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=85',
    alt: 'Deep frozen winter forest and river gorge in Hokkaido',
    tester: 'TECH LOG / OPERATOR: K. TANAKA (SERIES 04)',
    gearTested: 'ALPINE TENT 2P + FIELD SHELL 3L',
    fieldLog: 'Heavy moisture and deep powder snowpack testing. Condensation venting performed cleanly with both roof ports open in sub-zero stillness. Snow shed cleanly from 30D fly.',
    gps: 'LAT 43°39\'49" N · LON 142°51\'18" E',
  },
]
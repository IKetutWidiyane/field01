import { useState } from 'react'
import Reveal from './Reveal.jsx'
import './Terrain.css'

const TERRAINS = [
  {
    name: 'Alps',
    region: 'Granite & glacier',
    lat: "46°32'12\" N",
    lon: "7°44'20\" E",
    alt: '3,842 M',
    zone: 'Temperate / high',
    img: 'https://picsum.photos/id/1018/1200/900',
    alt: 'Granite ridge above the treeline',
  },
  {
    name: 'Iceland',
    region: 'Basalt & ash',
    lat: "63°58'42\" N",
    lon: "19°03'11\" W",
    alt: '1,491 M',
    zone: 'Sub-arctic / maritime',
    img: 'https://picsum.photos/id/1016/1200/900',
    alt: 'Black basalt field under low cloud',
  },
  {
    name: 'Sahara',
    region: 'Dune & rock',
    lat: "23°04'19\" N",
    lon: "12°55'58\" E",
    alt: '3,415 M',
    zone: 'Arid / extreme',
    img: 'https://picsum.photos/id/1040/1200/900',
    alt: 'Dune crest against a hot sky',
  },
  {
    name: 'Pacific NW',
    region: 'Rainforest & ridge',
    lat: "47°11'23\" N",
    lon: "121°40'55\" W",
    alt: '4,392 M',
    zone: 'Wet / temperate',
    img: 'https://picsum.photos/id/1015/1200/900',
    alt: 'River valley under dense forest',
  },
]

export default function Terrain() {
  const [active, setActive] = useState(0)
  const t = TERRAINS[active]

  return (
    <section id="terrain" className="section terrain">
      <div className="container">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__index">03</span>
            <span className="eyebrow__line" aria-hidden="true" />
            Terrain Log
          </p>
        </Reveal>

        <Reveal className="terrain__head">
          <h2 className="display display--lg">
            Tested on
            <br />
            the <span className="serif">ground</span>
          </h2>
        </Reveal>

        <div className="terrain__grid">
          <Reveal className="terrain__list" role="tablist" aria-label="Terrain log">
            {TERRAINS.map((item, i) => (
              <button
                key={item.name}
                role="tab"
                aria-selected={active === i}
                className={`terrain__item ${active === i ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="terrain__dot" aria-hidden="true" />
                <span className="terrain__name">{item.name}</span>
                <span className="terrain__region">{item.region}</span>
              </button>
            ))}
          </Reveal>

          <Reveal className="terrain__media">
            <div className="frame terrain__frame">
              <img key={t.name} src={t.img} alt={t.alt} loading="lazy" />
            </div>
            <div className="terrain__panel">
              <div className="kv">
                <span className="kv__k">Latitude</span>
                <span className="kv__v meta">{t.lat}</span>
              </div>
              <div className="kv">
                <span className="kv__k">Longitude</span>
                <span className="kv__v meta">{t.lon}</span>
              </div>
              <div className="kv">
                <span className="kv__k">Altitude</span>
                <span className="kv__v meta">{t.alt}</span>
              </div>
              <div className="kv">
                <span className="kv__k">Zone</span>
                <span className="kv__v">{t.zone}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
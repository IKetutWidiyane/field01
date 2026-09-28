import Reveal from './Reveal.jsx'
import './Equipment.css'

const PRODUCTS = [
  {
    index: '01',
    name: 'SHELTER/01',
    tag: 'A four-season tent that treats wind as a design brief.',
    img: 'https://picsum.photos/id/1016/1100/1400',
    alt: 'Shelter pitched on a rocky alpine shelf',
    specs: [
      ['Weight', '1.24 KG'],
      ['Material', 'CORDURA'],
      ['Status', 'FIELD TESTED'],
    ],
  },
  {
    index: '02',
    name: 'LOAD/02',
    tag: 'A pack that keeps twenty-two kilos quiet on your back.',
    img: 'https://picsum.photos/id/1015/1100/1100',
    alt: 'Expedition pack at rest on river stone',
    specs: [
      ['Weight', '1.86 KG'],
      ['Material', 'DYNEEMA'],
      ['Status', 'FIELD TESTED'],
    ],
  },
  {
    index: '03',
    name: 'LAYER/03',
    tag: 'A shell that breathes at altitude and shrugs off rain.',
    img: 'https://picsum.photos/id/1040/1100/1400',
    alt: 'Layered shell against a desert skyline',
    specs: [
      ['Weight', '0.42 KG'],
      ['Material', '3L MEMBRANE'],
      ['Status', 'IN REVISION'],
    ],
  },
]

export default function Equipment() {
  return (
    <section id="equipment" className="section equipment">
      <div className="container">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__index">02</span>
            <span className="eyebrow__line" aria-hidden="true" />
            Equipment
          </p>
        </Reveal>

        <Reveal className="equipment__head">
          <h2 className="display display--lg">
            Engineered
            <br />
            for the <span className="serif">terrain</span>
          </h2>
          <p className="lede">
            Three systems. One rule: the mountain decides what survives.
            Each piece is drawn to a technical brief, tested on expedition,
            and revised until the field log goes quiet.
          </p>
        </Reveal>

        <div className="equipment__grid">
          {PRODUCTS.map((p, i) => (
            <Reveal as="article" className="equip-card" key={p.name} delay={i * 90}>
              <div className="equip-card__top">
                <span className="equip-card__index">{p.index}</span>
                <span className="badge badge--signal">
                  <span className="badge__dot" aria-hidden="true" /> Field tested
                </span>
              </div>
              <div className="frame equip-card__frame">
                <img src={p.img} alt={p.alt} loading="lazy" />
              </div>
              <div className="equip-card__body">
                <h3 className="equip-card__name">{p.name}</h3>
                <p className="equip-card__tag">{p.tag}</p>
                <dl className="equip-card__specs">
                  {p.specs.map(([k, v]) => (
                    <div className="kv" key={k}>
                      <dt className="kv__k">{k}</dt>
                      <dd className="kv__v">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a className="link-arrow" href="#system">
                  View spec <span className="btn__arrow">→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
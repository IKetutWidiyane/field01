import Reveal from './Reveal.jsx'
import './Journal.css'

const ENTRIES = [
  {
    title: 'Forty-eight hours in a whiteout',
    date: '14 FEB 2026',
    tag: 'Storm',
    dek: 'Pinned inside the tent while the weather filed its complaints, one by one, against the fly.',
    img: 'https://picsum.photos/id/1029/1200/1500',
    alt: 'Storm light over a ridgeline',
    featured: true,
  },
  {
    title: 'The lightweight question',
    date: '03 JAN 2026',
    tag: 'Archive',
    dek: 'We weighed every gram twice. Then we argued about it for three hours.',
    img: 'https://picsum.photos/id/1039/1200/900',
    alt: 'Gear spread on expedition paper',
  },
  {
    title: 'Granite test, season 04',
    date: '21 NOV 2025',
    tag: 'Field test',
    dek: 'Abrasion data from five weeks of dragging shelters across rough stone.',
    img: 'https://picsum.photos/id/1035/1200/900',
    alt: 'Rock texture under low light',
  },
]

export default function Journal() {
  return (
    <section id="journal" className="section journal">
      <div className="container">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__index">06</span>
            <span className="eyebrow__line" aria-hidden="true" />
            Field Journal
          </p>
        </Reveal>

        <Reveal className="journal__head">
          <h2 className="display display--lg">
            Notes from
            <br />
            the <span className="serif">field</span>
          </h2>
          <a className="link-arrow" href="#journal">
            All entries <span className="btn__arrow">→</span>
          </a>
        </Reveal>

        <div className="journal__grid">
          {ENTRIES.map((e, i) => (
            <Reveal as="article" className={`journal-card ${e.featured ? 'is-featured' : ''}`} key={e.title} delay={i * 90}>
              <a href="#journal" className="journal-card__link">
                <div className="frame journal-card__frame">
                  <img src={e.img} alt={e.alt} loading="lazy" />
                </div>
                <div className="journal-card__body">
                  <div className="journal-card__meta">
                    <span className="meta">{e.date}</span>
                    <span className="journal-card__tag">{e.tag}</span>
                  </div>
                  <h3 className="journal-card__title">{e.title}</h3>
                  <p className="journal-card__dek">{e.dek}</p>
                  <span className="link-arrow">
                    Read note <span className="btn__arrow">→</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
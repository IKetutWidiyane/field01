import Reveal from './Reveal.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <Reveal className="hero__main">
          <p className="eyebrow">
            <span className="eyebrow__index">01</span>
            <span className="eyebrow__line" aria-hidden="true" />
            The Terrain
          </p>

          <h1 className="display display--hero hero__title">
            Where the
            <br />
            <span className="serif">terrain</span> begins
          </h1>

          <p className="lede">
            FIELD/01 is an expedition equipment laboratory. Every system is drawn,
            built and broken on real ground — then rebuilt until the terrain stops
            complaining.
          </p>

          <div className="hero__actions">
            <a className="btn btn--primary" href="#equipment">
              Explore equipment <span className="btn__arrow">→</span>
            </a>
            <a className="btn btn--ghost" href="#journal">
              Field journal <span className="btn__arrow">→</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="hero__media" delay={120}>
          <div className="frame hero__frame">
            <img
              src="https://picsum.photos/id/1018/1100/1400"
              alt="Climber crossing an alpine ridge at altitude"
              loading="eager"
            />
          </div>
          <div className="hero__card">
            <span className="badge badge--signal">
              <span className="badge__dot" aria-hidden="true" /> Field tested
            </span>
            <span className="meta">FIELD TEST / 034</span>
          </div>
        </Reveal>
      </div>

      <div className="container hero__meta">
        <span className="meta">LAT 46°32'12" N</span>
        <span className="meta">LON 7°44'20" E</span>
        <span className="meta">ALT 3,842 M</span>
        <span className="hero__scroll">
          <span className="hero__scroll-line" aria-hidden="true" /> Scroll
        </span>
      </div>
    </section>
  )
}
import Reveal from './Reveal.jsx'
import './FinalCta.css'

export default function FinalCta() {
  return (
    <section id="next" className="section next">
      <div className="container next__inner">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__index">07</span>
            <span className="eyebrow__line" aria-hidden="true" />
            Next
          </p>
        </Reveal>

        <Reveal className="next__title">
          <h2 className="display display--hero next__heading">
            Where
            <br />
            will you
            <br />
            <span className="serif">go next?</span>
          </h2>
        </Reveal>

        <Reveal className="next__cta">
          <a className="btn btn--primary" href="#equipment">
            Explore the equipment <span className="btn__arrow">→</span>
          </a>
          <p className="next__note">
            FIELD/01 ships to 34 countries. The tracking code lands in your
            inbox before the coffee goes cold.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
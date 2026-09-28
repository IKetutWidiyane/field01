import Reveal from './Reveal.jsx'
import './FieldTest.css'

export default function FieldTest() {
  return (
    <section id="field-test" className="section field-test">
      <div className="container">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__index">04</span>
            <span className="eyebrow__line" aria-hidden="true" />
            Field Test
          </p>
        </Reveal>

        <Reveal className="field-test__head">
          <h2 className="display display--lg">
            Field test
            <br />
            <span className="field-test__num">/ 034</span>
          </h2>
          <div className="field-test__head-meta">
            <span className="badge badge--signal">
              <span className="badge__dot" aria-hidden="true" /> Field tested
            </span>
            <p className="lede">
              Twenty-one days, one valley, no way out but up.
              Each unit below carried the full expedition load —
              and reported back in writing.
            </p>
            <span className="meta">SEASON 04 · WINTER</span>
          </div>
        </Reveal>

        <Reveal className="field-test__media">
          <div className="frame field-test__frame">
            <img
              src="https://picsum.photos/id/1021/1600/900"
              alt="Tent complex during a winter storm at altitude"
              loading="lazy"
            />
          </div>
          <dl className="field-test__panel">
            <div className="kv">
              <dt className="kv__k">Location</dt>
              <dd className="kv__v">Aksu Valley</dd>
            </div>
            <div className="kv">
              <dt className="kv__k">Duration</dt>
              <dd className="kv__v">21 days</dd>
            </div>
            <div className="kv">
              <dt className="kv__k">Conditions</dt>
              <dd className="kv__v">−14°C · whiteout</dd>
            </div>
            <div className="kv">
              <dt className="kv__k">Load carried</dt>
              <dd className="kv__v">34 KG</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal className="field-test__quote">
          <blockquote className="serif">
            “The tent held. The pack held. The plan did not —
            the plan is optional.”
          </blockquote>
          <span className="meta">FIELD NOTE / DAY 12</span>
        </Reveal>
      </div>
    </section>
  )
}
import { useState } from 'react'
import Reveal from './Reveal.jsx'
import './TheSystem.css'

const PARTS = [
  {
    n: '01',
    name: 'Frame',
    body: 'A single mono-tube backbone transfers load to the hips, not the shoulders. Rigid where it counts, articulate where it moves.',
    metrics: [
      ['Weight', '1.24 KG'],
      ['Stiffness', '42 N/MM'],
    ],
  },
  {
    n: '02',
    name: 'Load system',
    body: 'Compression straps that follow the curve of the body. Internal volume shifts with the ground — the load stays put, movement stays free.',
    metrics: [
      ['Load', '22 KG'],
      ['Volume', '46 L'],
    ],
  },
  {
    n: '03',
    name: 'Material',
    body: 'CORDURA ripstop laminated with a TPU membrane. Abrasion-tested on granite, waterproofed against forecasts that lie.',
    metrics: [
      ['Denier', '500D'],
      ['Membrane', 'TPU laminate'],
    ],
  },
  {
    n: '04',
    name: 'Storage',
    body: 'A full clamshell opening with sub-compartments sized for expedition packing. Reach what you need without unpacking everything.',
    metrics: [
      ['Pockets', '7'],
      ['Access', 'Full clamshell'],
    ],
  },
  {
    n: '05',
    name: 'Weather protection',
    body: 'Taped seams, storm flaps, and a coated zipper that survives freeze–thaw cycling. Rain does not negotiate — neither does this.',
    metrics: [
      ['Rating', 'IPX6'],
      ['Seams', 'Fully taped'],
    ],
  },
]

export default function TheSystem() {
  const [active, setActive] = useState(0)
  const part = PARTS[active]

  return (
    <section id="system" className="section system">
      <div className="container">
        <Reveal>
          <p className="eyebrow">
            <span className="eyebrow__index">05</span>
            <span className="eyebrow__line" aria-hidden="true" />
            The System
          </p>
        </Reveal>

        <Reveal className="system__head">
          <h2 className="display display--lg">
            Built like a
            <br />
            <span className="serif">blueprint</span>
          </h2>
          <p className="lede">
            Five components, one continuous system. Select each part to read
            its engineering brief.
          </p>
        </Reveal>

        <div className="system__grid">
          <Reveal className="system__spine" role="tablist" aria-label="System components">
            {PARTS.map((p, i) => (
              <button
                key={p.n}
                role="tab"
                aria-selected={active === i}
                className={`system__node ${active === i ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="system__node-chip">{p.n}</span>
                <span className="system__node-name">{p.name}</span>
              </button>
            ))}
          </Reveal>

          <Reveal className="system__panel" key={part.n}>
            <div className="system__panel-head">
              <span className="system__panel-num">{part.n}</span>
              <span className="system__panel-badge">● ACTIVE</span>
            </div>
            <h3 className="display system__panel-name">{part.name}</h3>
            <p className="system__panel-body">{part.body}</p>
            <dl className="system__panel-metrics">
              {part.metrics.map(([k, v]) => (
                <div className="kv" key={k}>
                  <dt className="kv__k">{k}</dt>
                  <dd className="kv__v">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
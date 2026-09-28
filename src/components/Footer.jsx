import './Footer.css'

const INDEX = [
  ['Equipment', '#equipment'],
  ['Field test', '#field-test'],
  ['Journal', '#journal'],
  ['About', '#next'],
]

const CONNECT = [
  ['Instagram', '#top'],
  ['Contact', '#next'],
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <span className="footer__logo">
            FIELD<span className="footer__logo-slash">/</span>01
            <span className="footer__logo-dot" aria-hidden="true" />
          </span>
          <p className="footer__tagline">
            An expedition equipment laboratory — warm paper, clean type,
            signal orange where it matters.
          </p>
          <span className="meta footer__coord">LAT 46°32'12" N · LON 7°44'20" E · EST. 2022</span>
        </div>

        <nav className="footer__col" aria-label="Index">
          <h4 className="footer__label">Index</h4>
          {INDEX.map(([label, href]) => (
            <a key={label} className="footer__link" href={href}>
              {label}
            </a>
          ))}
        </nav>

        <nav className="footer__col" aria-label="Connect">
          <h4 className="footer__label">Connect</h4>
          {CONNECT.map(([label, href]) => (
            <a key={label} className="footer__link" href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="container footer__base">
        <span className="footer__copy">FIELD/01 © 2026</span>
        <span className="footer__slogan">Engineered for the terrain</span>
        <a className="footer__top" href="#top">
          Back to top <span className="footer__top-arrow">↑</span>
        </a>
      </div>
    </footer>
  )
}
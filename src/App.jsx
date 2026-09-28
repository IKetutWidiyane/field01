import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Equipment from './components/Equipment.jsx'
import Terrain from './components/Terrain.jsx'
import FieldTest from './components/FieldTest.jsx'
import TheSystem from './components/TheSystem.jsx'
import Journal from './components/Journal.jsx'
import FinalCta from './components/FinalCta.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="site" data-site="field01">
      <Navigation />
      <main>
        <Hero />
        <Equipment />
        <Terrain />
        <FieldTest />
        <TheSystem />
        <Journal />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
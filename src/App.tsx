import { useCallback, useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis, scrollToId } from './hooks/useLenis'
import { useReducedMotion } from './hooks/useReducedMotion'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Terrain from './sections/Terrain'
import Equipment from './sections/Equipment'
import EngineeredFor from './sections/EngineeredFor'
import FieldTest from './sections/FieldTest'
import System from './sections/System'
import FieldJournal from './sections/FieldJournal'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

export default function App() {
  const reduced = useReducedMotion()
  const lenisRef = useLenis(!reduced)

  const onNavigate = useCallback(
    (id: string) => {
      scrollToId(id === 'top' ? '#top' : `#${id}`, lenisRef.current)
    },
    [lenisRef]
  )

  /* refresh ScrollTrigger measurements once media/fonts have loaded */
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const t = window.setTimeout(refresh, 1200)
    return () => {
      window.removeEventListener('load', refresh)
      window.clearTimeout(t)
    }
  }, [])

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Navbar onNavigate={onNavigate} lenisRef={lenisRef} />
      <main>
        <Hero onNavigate={onNavigate} />
        <Terrain />
        <Equipment onNavigate={onNavigate} />
        <EngineeredFor />
        <FieldTest />
        <System />
        <FieldJournal onNavigate={onNavigate} />
        <FinalCTA onNavigate={onNavigate} />
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  )
}
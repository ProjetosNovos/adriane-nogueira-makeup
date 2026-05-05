import { useEffect } from 'react'
import { WhatsAppProvider } from './WhatsAppContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProvaSocial from './components/ProvaSocial'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Diferenciais from './components/Diferenciais'
import Portfolio from './components/Portfolio'
import ComoFunciona from './components/ComoFunciona'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import WhatsAppModal from './components/WhatsAppModal'

function AppContent() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.delay
            if (delay) {
              el.style.animationDelay = `${parseInt(delay) * 100}ms`
            }
            el.classList.add('visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true">
        <svg width="100%" height="100%">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      <Navbar />
      <Hero />
      <Sobre />
      <ProvaSocial />
      <Servicos />
      <Diferenciais />
      <Portfolio />
      <ComoFunciona />
      <FAQ />
      <CTAFinal />
      <Footer />
      <WhatsAppModal />
    </>
  )
}

export default function App() {
  return (
    <WhatsAppProvider>
      <AppContent />
    </WhatsAppProvider>
  )
}

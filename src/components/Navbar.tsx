import { useState, useEffect } from 'react'
import { Menu, X, Instagram, ArrowRight, MapPin } from 'lucide-react'
import { useWhatsApp } from '../WhatsAppContext'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [logoVisible, setLogoVisible] = useState(true)
  const { openModal } = useWhatsApp()

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero')
      if (!hero) return
      const rect = hero.getBoundingClientRect()
      const scrollableHeight = hero.offsetHeight - window.innerHeight
      if (scrollableHeight <= 0) return
      const scrolled = Math.max(0, -rect.top)
      const progress = scrolled / scrollableHeight
      // Hide logo when reaching 3rd phase (progress >= 0.66)
      setLogoVisible(progress < 0.63)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
    {/* Fixed logo — hides on 3rd hero phase and when menu is open */}
    <a
      href="#"
      className="fixed top-5 left-6 z-[60] select-none transition-opacity duration-500 flex flex-col items-end"
      style={{ opacity: logoVisible && !menuOpen ? 1 : 0, pointerEvents: logoVisible && !menuOpen ? 'auto' : 'none' }}
    >
      <span className="font-heading text-2xl text-white tracking-wide">Adriane Nogueira</span>
      <span className="font-body text-xs text-white/60 uppercase tracking-[0.3em] -mt-0.5">Makeup</span>
    </a>

    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-end">

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="font-body text-sm text-white/80 hover:text-gold tracking-wide uppercase transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop social icons */}
        <div className="hidden lg:flex items-center gap-4 ml-10">
          <a
            href="https://instagram.com/adrianenogueiramakeup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-gold transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a
            href="https://maps.app.goo.gl/ZErLLVV1yC9xXfv16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-gold transition-colors duration-300"
            aria-label="Localização"
          >
            <MapPin size={20} strokeWidth={1.5} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="lg:hidden text-white/90 hover:text-gold transition-colors"
          aria-label="Abrir menu"
        >
          <Menu size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* ═══ Mobile fullscreen menu ═══ */}
      <div
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-500 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-blush-100 backdrop-blur-xl" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-8 w-48 h-48 rounded-full border border-blush-200 pointer-events-none" />
        <div className="absolute bottom-32 left-6 w-32 h-32 rounded-full border border-gold/15 pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-px h-24 bg-gradient-to-b from-transparent via-blush/20 to-transparent pointer-events-none" />

        {/* Header */}
        <div className="relative flex items-center justify-between px-6 py-5">
          <span className="font-heading text-2xl text-black tracking-wide">
            Adriane Nogueira
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-black/20 text-black hover:text-blush hover:border-blush transition-all duration-300"
            aria-label="Fechar menu"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Gold separator */}
        <div className="relative mx-6 mt-2">
          <div className="h-px bg-gradient-to-r from-gold/40 via-gold/15 to-transparent" />
        </div>

        {/* Navigation links */}
        <div className="relative flex flex-col justify-center px-10 mt-12">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="group flex items-center justify-between py-4 border-b border-cream-300/50 transition-all duration-300"
                  style={{
                    transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-black/40 font-body text-xs tabular-nums">
                      0{i + 1}
                    </span>
                    <span className="font-heading text-[1.6rem] text-black group-hover:text-blush tracking-wide transition-colors duration-300">
                      {link.label}
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-black/30 group-hover:text-blush group-hover:translate-x-1 transition-all duration-300"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={() => {
              setMenuOpen(false)
              openModal('agendar')
            }}
            className="mt-10 w-full font-body text-sm uppercase tracking-[0.2em] px-8 py-4 rounded-full bg-black text-white hover:bg-black/80 transition-all duration-300 flex items-center justify-center gap-3"
            style={{
              transitionDelay: menuOpen ? '350ms' : '0ms',
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(10px)',
            }}
          >
            Agendar Atendimento
          </button>
        </div>

        {/* Bottom section */}
        <div
          className="absolute bottom-0 left-0 right-0 px-10 pb-10"
          style={{
            transitionDelay: menuOpen ? '420ms' : '0ms',
            opacity: menuOpen ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-cream-400/40 to-transparent mb-6" />

          <div className="flex items-center justify-between">
            <a
              href="https://instagram.com/adrianenogueiramakeup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-black/70 hover:text-blush transition-colors duration-300"
            >
              <Instagram size={18} strokeWidth={1.5} />
              <span className="font-body text-sm tracking-wide">
                @adrianenogueiramakeup
              </span>
            </a>

            <span className="text-black/40 text-xs font-body">
              Brasília, DF
            </span>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

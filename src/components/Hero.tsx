import { useState, useEffect, useRef } from 'react'
import { Star, ArrowRight, Sparkles, Heart, Calendar } from 'lucide-react'
import { useWhatsApp } from '../WhatsAppContext'

const base = import.meta.env.BASE_URL

const images = [
  `${base}1.svg`,
  `${base}3.svg`,
  `${base}2.svg`,
]

const phases = [
  {
    tagline: 'Sua beleza, nossa arte',
    title: ['Beleza que', 'Emociona.'],
    description:
      'Maquiadora profissional especializada em noivas e madrinhas. Mais de 5 anos realçando a beleza natural com técnicas modernas e produtos premium em Brasília.',
    icon: Sparkles,
    objectPosition: '50% 20%',
    mobileObjectPosition: '50% 20%',
  },
  {
    tagline: 'Especialista em Noivas & Madrinhas',
    title: ['Seu Dia', 'Perfeito.'],
    description:
      'Cada produção é pensada nos mínimos detalhes para que você se sinta a melhor versão de si mesma no dia mais importante da sua vida.',
    icon: Heart,
    objectPosition: '70% 25%',
    mobileObjectPosition: '70% 25%',
  },
  {
    tagline: 'Sua transformação começa aqui',
    title: ['Agende sua', 'Produção.'],
    description:
      'Entre em contato e descubra como podemos realçar sua beleza natural. Atendimento personalizado no estúdio ou em domicílio.',
    icon: Calendar,
    objectPosition: '75% 30%',
    mobileObjectPosition: '47% 30%',
  },
]

export default function Hero() {
  const { openModal } = useWhatsApp()
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const scrollableHeight =
        containerRef.current.offsetHeight - window.innerHeight
      if (scrollableHeight <= 0) return
      const scrolled = Math.max(0, -rect.top)
      setProgress(Math.min(1, scrolled / scrollableHeight))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const phaseIndex = Math.min(2, Math.floor(progress * 3))
  const phaseProgress = (progress * 3) % 1

  // Per-image opacity: current image visible, crossfade to next
  const getImageOpacity = (index: number) => {
    if (index === phaseIndex) {
      if (phaseIndex === 2) return 1
      // Fade out in last 25% of the phase
      return phaseProgress < 0.7 ? 1 : 1 - (phaseProgress - 0.7) / 0.3
    }
    if (index === phaseIndex + 1) {
      // Fade in during last 30% of previous phase
      return phaseProgress < 0.7 ? 0 : (phaseProgress - 0.7) / 0.3
    }
    return 0
  }

  // Per-image scale: subtle Ken Burns
  const getImageScale = (index: number) => {
    if (index === phaseIndex) return 1 + phaseProgress * 0.08
    if (index === phaseIndex + 1) return 1
    return 1
  }

  // Text opacity with crossfade
  const getTextOpacity = (index: number) => {
    if (index === phaseIndex) {
      if (phaseIndex === 2) return 1
      return phaseProgress < 0.72 ? 1 : 1 - (phaseProgress - 0.72) / 0.28
    }
    if (index === phaseIndex + 1 && phaseProgress > 0.72) {
      return (phaseProgress - 0.72) / 0.28
    }
    return 0
  }

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )

  // Scroll indicator dots
  const scrollIndicator = (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
      {phases.map((_, i) => (
        <div
          key={i}
          className="h-1.5 rounded-full transition-all duration-500"
          style={{
            width: i === phaseIndex ? 24 : 6,
            backgroundColor:
              i === phaseIndex ? '#C9A96E' : 'rgba(255,255,255,0.3)',
          }}
        />
      ))}
    </div>
  )

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative"
      style={{ height: '300svh' }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* ═══ Background images with crossfade ═══ */}
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Adriane Nogueira Makeup — foto ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{
              opacity: getImageOpacity(i),
              transform: `scale(${getImageScale(i)})`,
              objectPosition: isMobile ? phases[i].mobileObjectPosition : phases[i].objectPosition,
              transition: 'opacity 0.4s ease, transform 0.1s linear',
            }}
          />
        ))}

        {/* Dark overlay — base */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream-900/80 via-cream-900/30 to-cream-900/20" />

        {/* Horizontal gradient (left dark) — desktop */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-cream-900/80 via-cream-900/40 to-transparent" />

        {/* ═══ MOBILE CONTENT ═══ */}
        <div className="lg:hidden relative h-full flex flex-col justify-end px-3 pb-16 z-10">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="absolute bottom-0 left-0 right-0 px-3 pb-16"
              style={{
                opacity: getTextOpacity(i),
                transform: `translateY(${getTextOpacity(i) > 0.5 ? 0 : 20}px)`,
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                pointerEvents: i === phaseIndex ? 'auto' : 'none',
              }}
            >
              <p className="text-gold text-xs tracking-[0.3em] uppercase font-body mb-3">
                {phase.tagline}
              </p>
              <h1 className="font-heading text-5xl sm:text-6xl text-white leading-[1.1] mb-4">
                {phase.title[0]}
                <br />
                {phase.title[1]}
              </h1>
              <p className="font-body text-white/60 text-sm leading-relaxed mb-8 max-w-[340px]">
                {phase.description}
              </p>

              {i === 0 && (
                <div className="flex items-center gap-4">
                  <a
                    href="#servicos"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo('#servicos')
                    }}
                    className="font-body text-xs uppercase tracking-wider px-5 py-3 rounded-full border border-white/30 text-white hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    Serviços
                  </a>
                  <button
                    onClick={() => openModal('agendar')}
                    className="font-body text-xs uppercase tracking-wider px-5 py-3 rounded-full bg-blush-100 text-cream-900 hover:bg-blush-200 transition-all duration-300"
                  >
                    Agendar
                  </button>
                </div>
              )}
              {i === 1 && (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <span className="text-white/70 text-sm">
                    4.8 no Google · 31+ avaliações
                  </span>
                </div>
              )}
              {i === 2 && (
                <button
                  onClick={() => openModal('agendar')}
                  className="font-body text-sm uppercase tracking-wider px-8 py-4 rounded-full bg-whatsapp text-white hover:bg-whatsapp/90 transition-all duration-300 flex items-center gap-3"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-current" />
                  Agendar Agora
                </button>
              )}
            </div>
          ))}

          {scrollIndicator}
        </div>

        {/* ═══ DESKTOP CONTENT ═══ */}
        <div className="hidden lg:flex relative h-full max-w-7xl mr-auto pl-2 pr-6 items-center z-10">
          <div className="max-w-[600px] relative">
            {phases.map((phase, i) => {
              const Icon = phase.icon
              return (
                <div
                  key={i}
                  style={{
                    opacity: getTextOpacity(i),
                    transform: `translateY(${getTextOpacity(i) > 0.5 ? 0 : 30}px)`,
                    transition: 'opacity 0.4s ease, transform 0.4s ease',
                    pointerEvents: i === phaseIndex ? 'auto' : 'none',
                    position: i === 0 ? 'relative' : 'absolute',
                    top: i === 0 ? undefined : 0,
                    left: i === 0 ? undefined : 0,
                    right: i === 0 ? undefined : 0,
                  }}
                >
                  {/* Gold decorative line */}
                  <div className="w-16 h-[2px] bg-gold mb-8" />

                  {/* Icon badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <Icon size={14} className="text-gold" />
                    <p className="text-gold text-xs tracking-[0.35em] uppercase font-body">
                      {phase.tagline}
                    </p>
                  </div>

                  {/* Title */}
                  <h1 className="font-heading text-[5.5rem] text-white leading-[1.05] mb-6">
                    {phase.title[0]}
                    <br />
                    {phase.title[1]}
                  </h1>

                  {/* Description */}
                  <p className="font-body text-white/70 text-lg leading-relaxed mb-10 max-w-[520px]">
                    {phase.description}
                  </p>

                  {/* CTA per phase */}
                  {i === 0 && (
                    <div className="flex items-center gap-6">
                      <button
                        onClick={() => openModal('agendar')}
                        className="font-body text-sm uppercase tracking-wider px-8 py-4 rounded-full bg-blush-100 text-cream-900 hover:bg-blush-200 transition-all duration-300 ambient-shadow"
                      >
                        Agendar Atendimento
                      </button>
                      <a
                        href="#servicos"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollTo('#servicos')
                        }}
                        className="group flex items-center gap-2 font-body text-sm uppercase tracking-wider text-white/80 hover:text-gold transition-colors duration-300"
                      >
                        Conheça os Serviços
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </a>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-3">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={14} className="text-gold fill-gold" />
                          ))}
                        </div>
                        <span className="text-white/90 text-sm">
                          4.8 no Google · 31+ avaliações
                        </span>
                      </div>
                      <a
                        href="#depoimentos"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollTo('#depoimentos')
                        }}
                        className="group flex items-center gap-2 font-body text-sm uppercase tracking-wider text-white/80 hover:text-gold transition-colors duration-300"
                      >
                        Ver Depoimentos
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="flex items-center gap-6">
                      <button
                        onClick={() => openModal('agendar')}
                        className="font-body text-sm uppercase tracking-wider px-8 py-4 rounded-full bg-whatsapp text-white hover:bg-whatsapp/90 transition-all duration-300 flex items-center gap-3"
                      >
                        <WhatsAppIcon className="w-5 h-5 fill-current" />
                        Agendar pelo WhatsApp
                      </button>
                      <a
                        href="#servicos"
                        onClick={(e) => {
                          e.preventDefault()
                          scrollTo('#servicos')
                        }}
                        className="group flex items-center gap-2 font-body text-sm uppercase tracking-wider text-white/80 hover:text-gold transition-colors duration-300"
                      >
                        Nossos Serviços
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Floating badge — bottom right, phase 0 only */}
          <div
            className="absolute bottom-10 right-10 transition-all duration-500"
            style={{ opacity: phaseIndex === 0 ? 1 : 0 }}
          >
            <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-3">
              <Star size={16} className="text-gold fill-gold" />
              <span className="font-body text-sm text-white/90 tracking-wide">
                <span className="font-semibold text-white">4.8</span> no Google
              </span>
            </div>
          </div>

          {scrollIndicator}
        </div>

      </div>
    </section>
  )
}

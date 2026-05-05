import { useState } from 'react'

const base = import.meta.env.BASE_URL

const portfolioItems = [
  {
    label: "Noiva",
    images: [`${base}resultado1.jpg`, `${base}resultado5.jpg`, `${base}resultado9.jpg`],
    mask: "organic-mask-1",
    delay: "1",
  },
  {
    label: "Madrinha",
    images: [`${base}resultado2.jpg`, `${base}resultado6.jpg`, `${base}resultado10.jpg`],
    mask: "organic-mask-2",
    delay: "2",
  },
  {
    label: "Social",
    images: [`${base}resultado3.jpg`, `${base}resultado7.jpg`, `${base}resultado11.jpg`],
    mask: "organic-mask-3",
    delay: "3",
  },
  {
    label: "Automaquiagem",
    images: [`${base}resultado4.jpg`, `${base}resultado8.jpg`, `${base}resultado12.jpg`],
    mask: "organic-mask-1",
    delay: "4",
  },
];

export default function Portfolio() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>(portfolioItems.map(() => 0))

  const handleClick = (cardIndex: number) => {
    setActiveIndexes(prev => {
      const next = [...prev]
      next[cardIndex] = (next[cardIndex] + 1) % portfolioItems[cardIndex].images.length
      return next
    })
  }

  return (
    <section id="portfolio" className="relative bg-cream-50 py-20 lg:py-28 px-6 overflow-hidden">
      {/* Decorative background elements */}
      {/* Circles */}
      <div className="absolute top-16 left-8 w-64 h-64 rounded-full border border-blush/25 pointer-events-none" />
      <div className="absolute top-40 right-12 w-40 h-40 rounded-full bg-blush-100/60 pointer-events-none" />
      <div className="absolute bottom-20 left-1/4 w-52 h-52 rounded-full border border-gold/20 pointer-events-none" />
      <div className="absolute bottom-32 right-8 w-28 h-28 rounded-full bg-gold/10 pointer-events-none" />
      <div className="absolute top-1/2 left-6 w-20 h-20 rounded-full border-2 border-dashed border-blush/20 pointer-events-none" />
      <div className="absolute top-[15%] right-[20%] w-10 h-10 rounded-full bg-blush/12 pointer-events-none" />

      {/* Lines */}
      <div className="absolute top-1/3 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-1/4 left-12 w-px h-24 bg-gradient-to-b from-transparent via-blush/35 to-transparent pointer-events-none" />
      <div className="absolute top-[60%] right-10 w-16 h-px bg-gradient-to-r from-gold/40 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] left-[15%] w-12 h-px bg-gradient-to-r from-transparent to-blush/35 pointer-events-none" />

      {/* Diamonds */}
      <div className="absolute top-24 left-1/3 w-20 h-20 rotate-45 border border-gold/18 rounded-lg pointer-events-none" />
      <div className="absolute bottom-[15%] right-[15%] w-12 h-12 rotate-45 border border-blush/20 pointer-events-none" />
      <div className="absolute top-[70%] left-[8%] w-8 h-8 rotate-45 bg-gold/10 pointer-events-none" />

      {/* Rings (double border) */}
      <div className="absolute bottom-40 right-1/3 w-16 h-16 rotate-12 border border-blush/20 rounded-full pointer-events-none" />
      <div className="absolute top-[45%] right-6 w-24 h-24 rounded-full border border-gold/18 pointer-events-none">
        <div className="absolute inset-2 rounded-full border border-gold/12" />
      </div>

      {/* Dots cluster */}
      <div className="absolute top-[80%] left-[20%] flex gap-2 pointer-events-none">
        <span className="w-2 h-2 rounded-full bg-blush/30" />
        <span className="w-2 h-2 rounded-full bg-blush/20" />
        <span className="w-2 h-2 rounded-full bg-blush/12" />
      </div>
      <div className="absolute top-[10%] right-[35%] flex flex-col gap-2 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-gold/35" />
        <span className="w-1.5 h-1.5 rounded-full bg-gold/25" />
        <span className="w-1.5 h-1.5 rounded-full bg-gold/15" />
      </div>

      {/* Arcs / half circles */}
      <div className="absolute bottom-12 left-[40%] w-32 h-16 border-t-2 border-gold/20 rounded-t-full pointer-events-none" />
      <div className="absolute top-10 right-[10%] w-20 h-10 border-b-2 border-blush/20 rounded-b-full pointer-events-none" />

      {/* Cross / plus shape */}
      <div className="absolute top-[55%] left-[45%] pointer-events-none opacity-[0.2]">
        <div className="w-8 h-[1.5px] bg-gold absolute top-1/2 left-0" />
        <div className="w-[1.5px] h-8 bg-gold absolute left-1/2 top-0" />
      </div>

      {/* Hexagon-ish shape */}
      <div className="absolute bottom-[30%] left-[5%] w-16 h-16 pointer-events-none opacity-[0.15]" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
        <div className="w-full h-full bg-blush" />
      </div>

      {/* Triangle */}
      <div className="absolute top-[35%] right-[8%] w-0 h-0 pointer-events-none opacity-[0.15]" style={{ borderLeft: '14px solid transparent', borderRight: '14px solid transparent', borderBottom: '24px solid #C9A96E' }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center justify-center gap-4 mb-4 anim-fade-up" data-animate>
          <span className="h-px w-8 bg-gold/50" />
          <span className="text-gold font-body text-xs uppercase tracking-[0.3em]">Portfólio</span>
          <span className="h-px w-8 bg-gold/50" />
        </div>

        {/* Title with highlight */}
        <h2
          className="font-heading text-3xl lg:text-4xl text-center text-cream-900 anim-fade-up"
          data-animate
          data-delay="1"
        >
          A beleza dos nossos <span className="text-blush">resultados</span>.
        </h2>

        {/* Decorative separator */}
        <div className="flex items-center justify-center gap-1.5 mt-5 anim-fade-up" data-animate data-delay="2">
          <span className="block w-8 h-[1.5px] bg-gold/60 rounded-full" />
          <span className="block w-2 h-2 rounded-full bg-gold/40" />
          <span className="block w-8 h-[1.5px] bg-gold/60 rounded-full" />
        </div>

        <p
          className="text-cream-600 text-center max-w-2xl mx-auto mt-4 leading-relaxed anim-fade-up"
          data-animate
          data-delay="3"
        >
          Cada produção é pensada para realçar a beleza única de cada cliente,
          com técnicas que garantem naturalidade e sofisticação.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-12 items-center">
          {portfolioItems.map((item, index) => {
            const isLarge = index === 0 || index === 2;
            const currentImageIndex = activeIndexes[index];

            return (
              <div
                key={item.label}
                className="group anim-fade-up"
                data-animate
                data-delay={item.delay}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleClick(index)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(index) }}
                  className={`${isLarge ? 'aspect-[3/5]' : 'aspect-[3/4]'} ${item.mask} overflow-hidden relative cursor-pointer select-none`}
                  style={{ touchAction: 'manipulation' }}
                >
                  {item.images.map((src, imgIndex) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Resultado — ${item.label}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        imgIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
                {/* Dots indicator */}
                <div className="flex justify-center gap-1.5 mt-2">
                  {item.images.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        dotIndex === currentImageIndex ? 'bg-blush w-3' : 'bg-blush/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

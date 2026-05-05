import { Award, Heart, Users, Star } from 'lucide-react'

const differentials = [
  {
    Icon: Award,
    title: 'Experiência Comprovada',
    desc: 'Mais de 5 anos transformando beleza com técnicas atualizadas e formação profissional contínua.',
  },
  {
    Icon: Heart,
    title: 'Especialista em Noivas',
    desc: 'Expertise dedicada ao dia mais importante, com teste prévio de maquiagem e acompanhamento completo.',
  },
  {
    Icon: Users,
    title: 'Atendimento Personalizado',
    desc: 'Cada cliente é única. Escuta ativa e produção pensada para realçar sua beleza individual.',
  },
  {
    Icon: Star,
    title: 'Avaliação 4.8 Estrelas',
    desc: 'Reconhecimento de mais de 31 clientes satisfeitas no Google Maps pela qualidade e profissionalismo.',
  },
]

export default function Diferenciais() {
  return (
    <section className="bg-cream-100 py-20 lg:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center justify-center gap-4 mb-4 anim-fade-up" data-animate>
          <span className="h-px w-8 bg-gold/50" />
          <span className="text-gold font-body text-xs uppercase tracking-[0.3em]">Diferenciais</span>
          <span className="h-px w-8 bg-gold/50" />
        </div>

        {/* Title with highlight */}
        <h2
          className="font-heading text-3xl lg:text-4xl text-center text-cream-900 anim-fade-up"
          data-animate
          data-delay="1"
        >
          Por que escolher a <span className="text-blush">Adriane</span>.
        </h2>

        {/* Decorative separator */}
        <div className="flex items-center justify-center gap-1.5 mt-5 mb-12 lg:mb-16 anim-fade-up" data-animate data-delay="2">
          <span className="block w-8 h-[1.5px] bg-gold/60 rounded-full" />
          <span className="block w-2 h-2 rounded-full bg-gold/40" />
          <span className="block w-8 h-[1.5px] bg-gold/60 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {differentials.map((item, i) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-3xl p-7 lg:p-9 border border-cream-300/60 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blush/5 hover:-translate-y-2 anim-fade-up"
              data-animate
              data-delay={String(i + 1)}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32 group-hover:from-gold/10" />

              {/* Gold left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-gold/70 via-blush/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number watermark */}
              <span className="absolute top-4 right-6 font-heading text-6xl text-cream-200/60 select-none transition-colors duration-500 group-hover:text-gold/10">
                0{i + 1}
              </span>

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blush-100 to-cream-200 border border-blush/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blush/15">
                <item.Icon className="text-blush transition-transform duration-500 group-hover:scale-110" size={22} strokeWidth={1.8} />
              </div>

              {/* Content */}
              <h3 className="relative font-heading text-xl text-cream-900 mt-5 transition-colors duration-300 group-hover:text-blush">
                {item.title}
              </h3>
              <p className="relative text-cream-600 text-sm mt-3 leading-relaxed max-w-[90%]">
                {item.desc}
              </p>

              {/* Bottom decorative line */}
              <div className="mt-6 flex items-center gap-2">
                <span className="block w-8 h-[2px] rounded-full bg-gold/40 transition-all duration-500 group-hover:w-12 group-hover:bg-gold/70" />
                <span className="block w-2 h-[2px] rounded-full bg-blush/30 transition-all duration-500 group-hover:bg-blush/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

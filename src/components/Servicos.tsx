import { Crown, Sparkles, GraduationCap, Home } from 'lucide-react'
import { useWhatsApp } from '../WhatsAppContext'

const services = [
  {
    name: 'Maquiagem para Noivas',
    tag: 'Premium',
    tagColor: 'bg-blush text-white',
    description:
      'Maquiagem impecável para o dia mais especial da sua vida. Técnicas de longa duração que garantem beleza do altar à última dança.',
    Icon: Crown,
    context: 'noivas',
    image: '/noivasServicos.jpg',
    objectPosition: '50% 15%',
  },
  {
    name: 'Maquiagem para Madrinhas',
    tag: 'Popular',
    tagColor: 'bg-gold-50 text-gold-300',
    description:
      'Produção completa para madrinhas e convidadas especiais. Beleza harmoniosa para brilhar na celebração.',
    Icon: Sparkles,
    context: 'social',
    image: '/madrinhasServicos.jpg',
  },
  {
    name: 'Curso de Automaquiagem',
    tag: 'Exclusivo',
    tagColor: 'bg-blush-100 text-blush-dark',
    description:
      'Aprenda técnicas profissionais para valorizar sua beleza no dia a dia. Aulas personalizadas para seu tipo de rosto e estilo.',
    Icon: GraduationCap,
    context: 'curso',
    image: '/cursoServicos.jpg',
  },
  {
    name: 'Atendimento em Domicílio',
    tag: 'Conforto',
    tagColor: 'bg-cream-200 text-cream-800',
    description:
      'Levamos toda a estrutura profissional até você. Preparação no conforto da sua casa com qualidade de estúdio.',
    Icon: Home,
    context: 'domicilio',
    image: '/domicilioServicos.jpg',
  },
]

export default function Servicos() {
  const { openModal } = useWhatsApp()

  return (
    <section id="servicos" className="bg-cream-50 py-20 lg:py-28 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center justify-center gap-4 mb-4 anim-fade-up" data-animate data-delay="0">
          <span className="h-px w-8 bg-gold/50" />
          <span className="text-gold font-body text-xs uppercase tracking-[0.3em]">Nossos Serviços</span>
          <span className="h-px w-8 bg-gold/50" />
        </div>

        <h2
          className="font-heading text-3xl lg:text-4xl text-center text-cream-900 mb-6 anim-fade-up"
          data-animate
          data-delay="1"
        >
          Serviços que realçam a sua <span className="text-blush">beleza natural</span>.
        </h2>

        {/* Decorative separator */}
        <div className="flex items-center justify-center gap-1.5 mt-5 mb-12 lg:mb-16 anim-fade-up" data-animate data-delay="2">
          <span className="block w-8 h-[1.5px] bg-gold/60 rounded-full" />
          <span className="block w-2 h-2 rounded-full bg-gold/40" />
          <span className="block w-8 h-[1.5px] bg-gold/60 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div
              key={service.context}
              className="bg-white ambient-shadow overflow-hidden transition-all duration-300 hover:ambient-shadow-hover hover:-translate-y-1 anim-scale-in"
              style={{ borderRadius: '0 36px 0 36px' }}
              data-animate
              data-delay={String(i + 1)}
            >
              {/* Image area */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: service.objectPosition || '50% 50%' }}
                />
                <span
                  className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${service.tagColor}`}
                >
                  {service.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="font-heading text-xl text-cream-900">{service.name}</h3>
                <p className="text-cream-600 text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>
                <button
                  onClick={() => openModal(service.context)}
                  className="mt-4 text-blush hover:text-blush-dark font-medium text-sm transition-colors cursor-pointer"
                >
                  Saiba mais &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

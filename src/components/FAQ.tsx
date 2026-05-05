import { useState } from 'react'
import { Plus, Shield, Leaf, Clock, Calendar, CreditCard, Star } from 'lucide-react'

const faqData = [
  {
    icon: Shield,
    question: 'Os procedimentos são seguros?',
    answer:
      'Sim! Utilizo apenas produtos profissionais de marcas renomadas e certificadas. Todos os materiais são higienizados e de uso individual para garantir total segurança.',
  },
  {
    icon: Leaf,
    question: 'O resultado fica natural?',
    answer:
      'Com certeza! Minha técnica prioriza realçar a beleza natural de cada cliente. O objetivo é que você se sinta a melhor versão de si mesma, nunca fantasiada.',
  },
  {
    icon: Clock,
    question: 'Quanto tempo antes devo agendar?',
    answer:
      'Para noivas, recomendo agendar com pelo menos 2 meses de antecedência. Para outros eventos, 2 a 3 semanas é ideal. Em períodos de alta demanda, quanto antes melhor!',
  },
  {
    icon: Calendar,
    question: 'Vocês fazem teste de maquiagem?',
    answer:
      'Sim! Para noivas, o teste é parte essencial do processo. Agendamos com antecedência para definir juntas o look perfeito para o grande dia.',
  },
  {
    icon: CreditCard,
    question: 'Qual o valor dos serviços?',
    answer:
      'Os valores variam de acordo com o serviço e a complexidade. Entre em contato pelo WhatsApp para receber um orçamento personalizado e sem compromisso.',
  },
  {
    icon: Star,
    question: 'Como funciona o curso de automaquiagem?',
    answer:
      'O curso é individual e personalizado. Em uma sessão de aproximadamente 3 horas, você aprende técnicas adaptadas ao seu tipo de rosto, pele e estilo pessoal.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative bg-cream-50 py-20 lg:py-28 px-6 overflow-hidden">
      {/* Decorative organic circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blush-100/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-blush-100/20 blur-3xl pointer-events-none" />

      <div className="text-center">
        <div className="flex items-center justify-center gap-4 mb-4 anim-fade-up" data-animate>
          <span className="h-px w-8 bg-gold/50" />
          <span className="text-gold font-body text-xs uppercase tracking-[0.3em]">Dúvidas</span>
          <span className="h-px w-8 bg-gold/50" />
        </div>
        <h2 className="font-heading text-3xl lg:text-4xl text-cream-900 text-center anim-fade-up" data-animate data-delay="1">
          Perguntas <span className="text-blush">frequentes</span>.
        </h2>
        <div className="flex items-center justify-center gap-1.5 mt-5 anim-fade-up" data-animate data-delay="2">
          <span className="block w-8 h-[1.5px] bg-gold/60 rounded-full" />
          <span className="block w-2 h-2 rounded-full bg-gold/40" />
          <span className="block w-8 h-[1.5px] bg-gold/60 rounded-full" />
        </div>
        <p className="text-cream-600 text-center max-w-2xl mx-auto mt-4 anim-fade-up" data-animate data-delay="3">
          Tudo o que você precisa saber antes de agendar.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        {faqData.map((item, index) => {
          const Icon = item.icon
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              data-animate
              data-delay={index + 1}
              className={`anim-fade-up border-b border-cream-400/50 py-4 delay-${index + 1}`}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="flex items-center">
                  <Icon className="w-5 h-5 text-blush mr-3 flex-shrink-0" />
                  <span className="font-heading text-lg text-cream-900">{item.question}</span>
                </span>
                <Plus
                  className={`w-5 h-5 text-cream-600 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-cream-600 text-sm leading-relaxed pt-3 pl-8">
                  {item.answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

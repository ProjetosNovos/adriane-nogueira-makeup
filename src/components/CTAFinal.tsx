import { Leaf } from 'lucide-react'
import { useWhatsApp } from '../WhatsAppContext'

export default function CTAFinal() {
  const { openModal } = useWhatsApp()

  return (
    <section className="relative bg-blush-100 min-h-[400px] flex items-center py-20 lg:py-28 px-6 overflow-hidden">
      {/* Decorative gold accent lines */}
      <div className="absolute top-8 left-8 w-16 h-px bg-gold/30" />
      <div className="absolute bottom-8 right-8 w-16 h-px bg-gold/30" />

      {/* Decorative floating leaf */}
      <Leaf className="absolute top-8 right-8 w-12 h-12 text-blush/20 animate-float" />

      {/* Subtle radial overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,169,110,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative w-full text-center">
        {/* Label */}
        <div data-animate className="anim-fade-up flex items-center justify-center gap-2 text-gold text-sm tracking-widest uppercase">
          <Leaf className="w-4 h-4" />
          <span>Sua Transformação Começa Aqui</span>
        </div>

        {/* Title */}
        <h2 data-animate className="anim-fade-up delay-1 font-heading text-3xl lg:text-5xl text-cream-900 mt-4">
          Agende seu atendimento e sinta-se <span className="text-blush">deslumbrante</span>.
        </h2>

        {/* Subtitle */}
        <p data-animate className="anim-fade-up delay-2 text-cream-700 mt-4 max-w-xl mx-auto leading-relaxed">
          Entre em contato e descubra como podemos realçar sua beleza natural para o momento mais especial da sua vida.
        </p>

        {/* CTA Button */}
        <div data-animate className="anim-fade-up delay-3 mt-8">
          <button
            onClick={() => openModal('agendar')}
            className="inline-flex items-center gap-3 bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors cursor-pointer mx-auto"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Agendar pelo WhatsApp
          </button>
        </div>

        {/* Secondary link */}
        <div data-animate className="anim-fade-up delay-4 mt-4">
          <a
            href="#servicos"
            className="text-cream-700 hover:text-blush underline underline-offset-4 transition-colors text-sm"
          >
            Conheça nossos serviços
          </a>
        </div>

        {/* Trust badge */}
        <p data-animate className="anim-fade-in delay-5 mt-8 text-cream-600 text-sm">
          +500 clientes atendidas · Nota 4.8 no Google
        </p>
      </div>
    </section>
  )
}

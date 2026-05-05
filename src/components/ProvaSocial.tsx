import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Fernanda R.",
    service: "Noiva",
    initial: "F",
    text: "A Adriane fez a maquiagem do dia mais importante da minha vida. Ficou absolutamente perfeita e durou a festa toda! Me senti a noiva mais linda do mundo.",
  },
  {
    name: "Patrícia L.",
    service: "Curso de Automaquiagem",
    initial: "P",
    text: "O curso mudou minha relação com a maquiagem. Agora sei valorizar minha beleza no dia a dia com técnicas profissionais.",
  },
  {
    name: "Juliana M.",
    service: "Madrinha",
    initial: "J",
    text: "Profissional incrível! Me senti linda e a maquiagem durou o dia inteiro, mesmo com o calor de Brasília. Atendimento impecável.",
  },
];

export default function ProvaSocial() {
  return (
    <section id="depoimentos" className="relative bg-cream-50 py-20 lg:py-28 overflow-hidden">
      {/* Decorative line-art makeup illustrations */}

      {/* Lipstick — top right */}
      <svg className="absolute top-10 right-6 lg:right-16 w-16 lg:w-20 pointer-events-none" viewBox="0 0 80 200" fill="none" stroke="#B76E79" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.10">
        <path d="M25 85 L25 170 C25 175 55 175 55 170 L55 85" />
        <path d="M22 85 L58 85" />
        <path d="M25 85 L25 75 C25 73 28 73 28 75 L28 85" />
        <path d="M52 85 L52 75 C52 73 55 73 55 75 L55 85" />
        <path d="M28 75 L28 45 C28 43 40 15 40 15 C40 15 52 43 52 45 L52 75" />
        <path d="M28 75 L52 75" />
      </svg>

      {/* Powder brush — bottom left */}
      <svg className="absolute bottom-8 left-4 lg:left-14 w-24 lg:w-32 pointer-events-none -rotate-[20deg]" viewBox="0 0 100 300" fill="none" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" opacity="0.09">
        <path d="M48 130 L48 260 C48 268 52 268 52 260 L52 130" />
        <path d="M44 130 C44 130 42 125 42 120" />
        <path d="M56 130 C56 130 58 125 58 120" />
        <path d="M42 120 C30 100 22 80 28 55 C32 38 40 30 50 25 C60 30 68 38 72 55 C78 80 70 100 58 120" />
        <path d="M35 95 C38 85 42 78 50 72 C58 78 62 85 65 95" />
        <path d="M32 75 C38 60 44 50 50 45 C56 50 62 60 68 75" />
      </svg>

      {/* Mascara — center right */}
      <svg className="absolute top-1/2 -translate-y-1/2 right-2 lg:right-10 w-10 lg:w-14 pointer-events-none rotate-[35deg]" viewBox="0 0 50 280" fill="none" stroke="#B76E79" strokeWidth="1" strokeLinecap="round" opacity="0.07">
        <path d="M25 90 L25 240" />
        <rect x="17" y="240" width="16" height="30" rx="4" />
        <rect x="15" y="10" width="20" height="80" rx="6" />
        <path d="M15 25 L10 23" /><path d="M15 35 L9 33" /><path d="M15 45 L10 44" /><path d="M15 55 L9 54" /><path d="M15 65 L10 64" /><path d="M15 75 L9 74" />
        <path d="M35 25 L40 23" /><path d="M35 35 L41 33" /><path d="M35 45 L40 44" /><path d="M35 55 L41 54" /><path d="M35 65 L40 64" /><path d="M35 75 L41 74" />
      </svg>

      {/* Eye with lashes — top left (desktop) */}
      <svg className="absolute top-16 left-1/4 w-20 lg:w-28 pointer-events-none hidden lg:block" viewBox="0 0 120 80" fill="none" stroke="#B76E79" strokeWidth="1.2" strokeLinecap="round" opacity="0.08">
        <path d="M10 45 C30 15 90 15 110 45" />
        <path d="M10 45 C30 65 90 65 110 45" />
        <circle cx="60" cy="43" r="12" />
        <circle cx="60" cy="43" r="5" fill="#B76E79" fillOpacity="0.3" stroke="none" />
        <path d="M30 28 L26 15" /><path d="M45 20 L43 8" /><path d="M60 17 L60 5" /><path d="M75 20 L77 8" /><path d="M90 28 L94 15" />
      </svg>

      {/* Lips outline — bottom right (desktop) */}
      <svg className="absolute bottom-20 right-1/4 w-16 lg:w-24 pointer-events-none hidden lg:block" viewBox="0 0 100 60" fill="none" stroke="#C9A96E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.08">
        <path d="M10 32 C10 32 25 10 50 25 C75 10 90 32 90 32" />
        <path d="M10 32 C10 32 30 55 50 42 C70 55 90 32 90 32" />
        <path d="M50 25 L50 42" />
      </svg>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          {/* Label */}
          <div className="flex items-center justify-center gap-4 mb-4 anim-fade-up" data-animate data-delay="0">
            <span className="h-px w-8 bg-gold/50" />
            <span className="text-gold font-body text-xs uppercase tracking-[0.3em]">Depoimentos</span>
            <span className="h-px w-8 bg-gold/50" />
          </div>

          <h2
            className="font-heading text-3xl lg:text-4xl text-center text-cream-900 mb-4 anim-fade-up"
            data-animate
            data-delay="1"
          >
            O que nossas <span className="text-blush">clientes</span> dizem
          </h2>
          <p
            className="text-cream-600 text-lg anim-fade-up"
            data-animate
            data-delay="2"
          >
            Mais de 31 avaliações com nota 4.8 no Google Maps
          </p>

          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-1.5 mt-5 anim-fade-up" data-animate data-delay="3">
            <span className="block w-8 h-[1.5px] bg-gold/60 rounded-full" />
            <span className="block w-2 h-2 rounded-full bg-gold/40" />
            <span className="block w-8 h-[1.5px] bg-gold/60 rounded-full" />
          </div>
        </div>

        {/* Rating bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 anim-fade-up"
          data-animate
          data-delay="3"
        >
          <span className="font-heading text-5xl text-cream-900 font-bold">4.8</span>

          <div className="flex items-center gap-1">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-6 h-6 fill-gold text-gold" />
            ))}
            {/* Almost-full star */}
            <span className="relative w-6 h-6">
              <Star className="absolute inset-0 w-6 h-6 text-gold" />
              <span className="absolute inset-0 overflow-hidden" style={{ width: "80%" }}>
                <Star className="w-6 h-6 fill-gold text-gold" />
              </span>
            </span>
          </div>

          <span className="text-cream-600 text-sm">+31 avaliações verificadas</span>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="bg-cream-100 p-8 anim-fade-up"
              style={{ borderRadius: "0 24px 0 24px" }}
              data-animate
              data-delay={String(idx + 2)}
            >
              {/* Decorative top bar */}
              <div className="h-1 w-16 bg-blush rounded-full mb-6" />

              {/* Testimonial text */}
              <p className="italic text-cream-800 leading-relaxed mb-6">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blush-100 flex items-center justify-center text-blush font-bold text-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-cream-900 text-sm">{t.name}</p>
                  <p className="text-cream-600 text-xs">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

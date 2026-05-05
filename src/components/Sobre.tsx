const fotoAdriana = "/profissionalAdriana.png";

const metrics = [
  { value: "+5", label: "Anos de Experiência" },
  { value: "4.8", label: "Avaliação no Google" },
  { value: "+500", label: "Clientes Atendidas" },
];

export default function Sobre() {
  return (
    <section id="sobre" className="bg-cream-100 py-20 lg:py-28 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image column — 5 cols */}
          <div
            className="lg:col-span-5 relative flex justify-center anim-fade-up"
            data-animate
            data-delay="1"
          >
            {/* Decorative circles behind image */}
            <div className="absolute -top-6 -left-6 w-72 h-72 rounded-full bg-blush-200/30 pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-64 h-64 rounded-full border-2 border-gold pointer-events-none" />

            <img
              src={fotoAdriana}
              alt="Adriane Nogueira — Maquiadora Profissional em Brasília"
              className="relative z-10 w-full max-w-md organic-mask-1"
            />
          </div>

          {/* Text column — 7 cols */}
          <div className="lg:col-span-7">
            {/* Label */}
            <div
              className="flex items-center gap-4 mb-6 anim-fade-up"
              data-animate
              data-delay="1"
            >
              <hr className="h-px w-12 bg-gold border-0" />
              <span className="text-gold font-body text-sm uppercase tracking-widest">
                Sobre Mim
              </span>
              <hr className="h-px w-12 bg-gold border-0" />
            </div>

            {/* Title */}
            <h2
              className="font-heading text-3xl lg:text-4xl text-cream-900 mb-6 anim-fade-up"
              data-animate
              data-delay="2"
            >
              Uma <span className="text-blush">paixão</span> que virou arte.
            </h2>

            {/* Paragraphs */}
            <div data-animate data-delay="3" className="anim-fade-up">
              <p className="text-cream-800 leading-relaxed mb-4">
                Há mais de 5 anos, o Espaço Adriane Nogueira Makeup nasceu do amor pela beleza e
                pelo desejo de fazer cada mulher se sentir única e especial.
              </p>
              <p className="text-cream-800 leading-relaxed mb-10">
                Especializada em noivas e madrinhas, meu trabalho é realçar a sua beleza natural com
                técnicas modernas, produtos de alta qualidade e um atendimento personalizado que faz
                toda a diferença.
              </p>
            </div>

            {/* Metrics */}
            <div
              className="grid grid-cols-3 gap-6 anim-fade-up"
              data-animate
              data-delay="4"
            >
              {metrics.map((m) => (
                <div key={m.label} className="text-center lg:text-left">
                  <p className="font-heading text-2xl text-blush font-bold">{m.value}</p>
                  <p className="text-sm text-cream-600">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

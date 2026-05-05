const steps = [
  {
    number: "01",
    title: "Entre em Contato",
    description:
      "Envie uma mensagem pelo WhatsApp e conte sobre o seu evento ou ocasião especial.",
    delay: "1",
  },
  {
    number: "02",
    title: "Consulta e Teste",
    description:
      "Agendamos uma consulta para conhecer você e definir o look perfeito para o momento.",
    delay: "2",
  },
  {
    number: "03",
    title: "Dia Perfeito",
    description:
      "No grande dia, você só precisa relaxar enquanto cuidamos de cada detalhe da sua produção.",
    delay: "3",
  },
] as const;

export default function ComoFunciona() {
  return (
    <section className="bg-cream-100 py-20 lg:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <div className="flex items-center justify-center gap-4 mb-4 anim-fade-up" data-animate>
          <span className="h-px w-8 bg-gold/50" />
          <span className="text-gold font-body text-xs uppercase tracking-[0.3em]">Passo a Passo</span>
          <span className="h-px w-8 bg-gold/50" />
        </div>

        {/* Title with highlight */}
        <h2
          className="font-heading text-3xl lg:text-4xl text-center text-cream-900 anim-fade-up"
          data-animate
          data-delay="1"
        >
          Como funciona o seu <span className="text-blush">agendamento</span>.
        </h2>

        {/* Decorative separator */}
        <div className="flex items-center justify-center gap-1.5 mt-5 anim-fade-up" data-animate data-delay="2">
          <span className="block w-8 h-[1.5px] bg-gold/60 rounded-full" />
          <span className="block w-2 h-2 rounded-full bg-gold/40" />
          <span className="block w-8 h-[1.5px] bg-gold/60 rounded-full" />
        </div>

        <div className="relative mt-16">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-gold/20 via-gold to-gold/20"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="anim-fade-up relative"
                data-animate
                data-delay={step.delay}
              >
                {/* Number circle */}
                <div className="w-24 h-24 rounded-full border-2 border-gold flex items-center justify-center mx-auto bg-cream-100 relative z-10">
                  <span className="font-heading text-3xl text-gold">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl mt-6 text-center text-cream-900">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-cream-600 text-sm text-center mt-2 max-w-xs mx-auto leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

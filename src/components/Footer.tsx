import { MapPin, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-blush-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Section 1 — Brand */}
          <div className="lg:col-span-4">
            <span className="font-heading text-2xl text-cream-900">Adriane Nogueira</span>
            <p className="text-cream-700 text-sm mt-3 leading-relaxed">
              Maquiadora profissional especializada em noivas e madrinhas. Mais de 5 anos
              transformando beleza em arte em Brasília.
            </p>
          </div>

          {/* Section 2 — Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-cream-900 text-sm font-semibold uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-cream-700 hover:text-blush text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Section 3 — Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-cream-900 text-sm font-semibold uppercase tracking-wider mb-4">
              Contato
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-cream-700 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Ceilândia, Brasília — DF</span>
              </li>
              <li>
                <a
                  href="https://wa.me/5561986163642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream-700 hover:text-blush text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>(61) 98616-3642</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/adrianenogueiramakeup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cream-700 hover:text-blush text-sm transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 flex-shrink-0"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>@adrianenogueiramakeup</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4 — Social */}
          <div className="lg:col-span-3">
            <h4 className="text-cream-900 text-sm font-semibold uppercase tracking-wider mb-4">
              Redes Sociais
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/adrianenogueiramakeup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Adriane Nogueira Makeup"
                className="text-cream-700 hover:text-blush transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/ZErLLVV1yC9xXfv16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Localização no Google Maps"
                className="text-cream-700 hover:text-blush transition-colors"
              >
                <MapPin size={22} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blush-200/60 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-cream-700 text-xs">
              &copy; {currentYear} Adriane Nogueira Makeup. Todos os direitos reservados.
            </p>

            <div className="flex items-center gap-2 text-cream-700 text-xs">
              <a href="#" className="hover:text-blush transition-colors">
                Política de Privacidade
              </a>
              <span>&middot;</span>
              <a href="#" className="hover:text-blush transition-colors">
                Termos de Uso
              </a>
            </div>

            <a
              href="https://trafixpro.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream-700 hover:text-blush text-xs transition-colors"
            >
              Desenvolvido por: traffixpro
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

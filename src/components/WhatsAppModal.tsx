import { useState, useEffect, useRef } from 'react'
import { X, Send } from 'lucide-react'
import { useWhatsApp } from '../WhatsAppContext'

const contextMessages: Record<string, string> = {
  agendar:
    'Vim pelo site e gostaria de agendar um horário para maquiagem. Quais datas estão disponíveis?',
  noivas:
    'Vim pelo site e estou noiva! Gostaria de saber sobre o pacote de maquiagem para noivas, incluindo valores e disponibilidade para teste.',
  social:
    'Vim pelo site e gostaria de informações sobre maquiagem para madrinhas. Tenho um evento em breve e quero saber sobre valores e horários.',
  curso:
    'Vim pelo site e tenho interesse no curso de automaquiagem! Gostaria de saber como funciona, valores e próximas turmas disponíveis.',
  domicilio:
    'Vim pelo site e gostaria de saber sobre o atendimento em domicílio. Qual a disponibilidade e valores para maquiagem a domicílio?',
}

const defaultMessage =
  'Vim pelo site e gostaria de mais informações sobre os serviços do Espaço Adriane Nogueira Makeup.'

export default function WhatsAppModal() {
  const { isOpen, context, closeModal } = useWhatsApp()
  const [name, setName] = useState('')
  const [show, setShow] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Entrance animation
  useEffect(() => {
    if (isOpen) {
      setName('')
      requestAnimationFrame(() => setShow(true))
    } else {
      setShow(false)
    }
  }, [isOpen])

  // Escape key
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isOpen, closeModal])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return

    const suffix = context ? contextMessages[context] ?? defaultMessage : defaultMessage
    const message = `Olá! Meu nome é ${trimmed}. ${suffix}`
    const encoded = encodeURIComponent(message)

    window.open(`https://wa.me/5561986163642?text=${encoded}`, '_blank')
    closeModal()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-cream-900/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          show ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeModal}
      />

      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4" onClick={closeModal}>
        <div
          ref={cardRef}
          onClick={(e) => e.stopPropagation()}
          className={`bg-white rounded-2xl p-6 lg:p-8 max-w-md w-full relative ambient-shadow transition-all duration-300 ${
            show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-cream-600 hover:text-cream-900 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* WhatsApp icon */}
          <div className="w-16 h-16 rounded-full bg-whatsapp/10 flex items-center justify-center mx-auto animate-breathe">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-whatsapp">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>

          {/* Title */}
          <h3 className="font-heading text-xl text-center mt-4">Agende pelo WhatsApp</h3>

          {/* Subtitle */}
          <p className="text-cream-600 text-sm text-center mt-1">
            Digite seu nome para enviarmos uma mensagem personalizada
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              autoFocus
              className="w-full border border-cream-400 rounded-xl px-4 py-3 text-cream-900 placeholder-cream-600 focus:outline-none focus:border-blush focus:ring-1 focus:ring-blush/30 transition-colors"
            />
            <button
              type="submit"
              className="mt-4 w-full bg-whatsapp hover:bg-whatsapp/90 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              Enviar Mensagem
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

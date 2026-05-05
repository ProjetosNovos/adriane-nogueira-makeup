import { createContext, useContext, useState, type ReactNode } from 'react'

type WhatsAppContextType = {
  isOpen: boolean
  context: string
  openModal: (context?: string) => void
  closeModal: () => void
}

const WhatsAppContext = createContext<WhatsAppContextType | null>(null)

export function WhatsAppProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [context, setContext] = useState('geral')

  const openModal = (ctx = 'geral') => {
    setContext(ctx)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  return (
    <WhatsAppContext.Provider value={{ isOpen, context, openModal, closeModal }}>
      {children}
    </WhatsAppContext.Provider>
  )
}

export function useWhatsApp() {
  const ctx = useContext(WhatsAppContext)
  if (!ctx) throw new Error('useWhatsApp must be used within WhatsAppProvider')
  return ctx
}

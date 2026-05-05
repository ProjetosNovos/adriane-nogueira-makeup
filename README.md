# Adriane Nogueira Makeup

Landing page profissional para o Espaco Adriane Nogueira Makeup — maquiadora profissional especializada em noivas e madrinhas em Brasilia, DF.

## Sobre o Projeto

Website institucional single-page desenvolvido com foco em conversao (agendamento via WhatsApp), design elegante e experiencia mobile-first. O site apresenta os servicos, portfolio, depoimentos e facilita o contato direto com a profissional.

## Tecnologias

| Tecnologia | Versao | Uso |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.8 | Tipagem estatica |
| Vite | 6.3 | Build tool e dev server |
| Tailwind CSS | 4.1 | Estilizacao utility-first |
| Lucide React | 0.468 | Icones |

## Estrutura do Projeto

```
src/
├── App.tsx                  # Componente raiz com IntersectionObserver para animacoes
├── main.tsx                 # Entry point
├── index.css                # Tema Tailwind (cores, fontes, animacoes, masks)
├── WhatsAppContext.tsx       # Context API para modal de agendamento
├── components/
│   ├── Navbar.tsx           # Navegacao com logo fixa e menu mobile fullscreen
│   ├── Hero.tsx             # Hero com scroll-driven crossfade (3 fases)
│   ├── Sobre.tsx            # Secao "Sobre Mim" com foto e metricas
│   ├── ProvaSocial.tsx      # Depoimentos de clientes com rating Google
│   ├── Servicos.tsx         # Cards de servicos com fotos reais
│   ├── Diferenciais.tsx     # Cards de diferenciais com hover effects
│   ├── Portfolio.tsx        # Grid de resultados com masks organicas
│   ├── ComoFunciona.tsx     # Passo a passo do agendamento
│   ├── FAQ.tsx              # Perguntas frequentes (accordion)
│   ├── CTAFinal.tsx         # Call-to-action final com WhatsApp
│   ├── Footer.tsx           # Rodape com links, contato e redes sociais
│   └── WhatsAppModal.tsx    # Modal de agendamento via WhatsApp
public/
├── 1.svg, 2.svg, 3.svg     # Imagens do hero (SVG alta qualidade)
├── profissionalAdriana.png  # Foto profissional (secao Sobre)
├── resultado1-4.jpg         # Fotos do portfolio
├── noivasServicos.jpg       # Foto servico noivas
├── madrinhasServicos.jpg    # Foto servico madrinhas
├── cursoServicos.jpg        # Foto servico curso
└── domicilioServicos.jpg    # Foto servico domicilio
```

## Funcionalidades

### Hero Scroll-Driven
- 3 fases com crossfade de imagens e textos
- Efeito Ken Burns (zoom sutil)
- Indicadores de progresso (dots)
- Layout separado mobile/desktop

### Sistema de Agendamento
- Context API gerencia estado do modal
- Mensagens contextuais por servico (noivas, madrinhas, curso, domicilio)
- Redirecionamento para WhatsApp com mensagem pre-formatada
- Inclui nome do cliente na mensagem

### Design System
- **Fontes**: Playfair Display (headings) + Raleway (body)
- **Cores principais**: Blush (#B76E79), Gold (#C9A96E), Cream palette
- **Animacoes**: Scroll-triggered via IntersectionObserver
- **Grain overlay**: Textura sutil sobre todo o site
- **Organic masks**: Shapes com clip-path para imagens

### Responsividade
- Mobile-first com breakpoint `lg` (1024px)
- Menu hamburger fullscreen no mobile
- Grids adaptativos (1col mobile → 2-4col desktop)
- Logo fixa com fade-out na 3a fase do hero

## Instalacao

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para producao
npm run build

# Preview do build
npm run preview
```

## Scripts

| Comando | Descricao |
|---|---|
| `npm run dev` | Inicia o dev server (Vite) |
| `npm run build` | Compila TypeScript e gera build otimizado |
| `npm run preview` | Serve o build localmente para preview |

## Configuracao

### Numero do WhatsApp
Alterar em `src/components/WhatsAppModal.tsx` na linha do `window.open`:
```
https://wa.me/5561986163642
```

### Redes Sociais
- Instagram: configurado em `Navbar.tsx` e `Footer.tsx`
- Localizacao (Google Maps): configurado em `Navbar.tsx` e `Footer.tsx`

### Cores do Tema
Definidas em `src/index.css` dentro do bloco `@theme`:
```css
--color-blush: #B76E79;
--color-gold: #C9A96E;
--color-cream-900: #2A2224;
```

## Deploy

O build gera arquivos estaticos em `dist/`. Compativel com:
- Vercel
- Netlify
- GitHub Pages
- Qualquer hosting de arquivos estaticos

## Desenvolvido por

[TrafixPro](https://trafixpro.com.br/)

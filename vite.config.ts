import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/adriane-nogueira-makeup/',
  plugins: [react(), tailwindcss()]
})

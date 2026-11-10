import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// "base" precisa ser o nome do repositório para funcionar no GitHub Pages
export default defineConfig({
  base: '/allHub/',
  plugins: [react()],
})

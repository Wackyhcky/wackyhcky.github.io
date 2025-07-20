import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No subfolder needed for user site (https://wackyhcky.github.io)
export default defineConfig({
  base: '/',
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // VITE_BASE_PATH = '/' for Render, '/BRDGen-Report/' for GitHub Pages
  base: process.env.VITE_BASE_PATH || '/',
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Determine base dynamically based on environment
const base = process.env.NODE_ENV === 'production' ? '/shopping-cart/' : '/';

export default defineConfig({
  plugins: [react()],
  base: base,
});
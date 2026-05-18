import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use '/' for Vercel and root domains. For GitHub *Project* Pages
// (e.g. user.github.io/repo-name/) set: base: '/<repo-name>/'
// and align paths in public/manifest.json + public/sw.js + index.html.
export default defineConfig({
  plugins: [react()],
  base: '/',
})

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  // keep public files in the repo-level `public/` directory
  publicDir: '../public',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
  }
});

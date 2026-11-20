import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  // Custom-domain deployments use root paths. The GitHub Pages
  // deployment is currently served through the repository URL.
  base: '/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  server: {
    port: 5173,
    open: true
  },

  build: {
    outDir: 'dist',
    sourcemap: true
  }
});
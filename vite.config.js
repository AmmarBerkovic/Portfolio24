import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio24/',  // Important for GitHub Pages!
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'build',  // Keep same as CRA for deployment
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@globals': '/src/globals',
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/globals/variables.scss"; @import "@/globals/mixins.scss";`,
      },
    },
  },
});

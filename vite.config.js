import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = import.meta.dirname;

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this repo at https://chesleyguo.github.io/deveng_portfolio/
  base: '/deveng_portfolio/',
  build: {
    // One HTML page per entry: the homepage and the My Story page
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        story: resolve(root, 'story.html'),
      },
    },
  },
});

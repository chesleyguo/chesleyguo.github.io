import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const root = import.meta.dirname;

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this repo (chesleyguo.github.io) at the domain root
  base: '/',
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

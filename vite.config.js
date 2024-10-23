import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { visualizer } from 'rollup-plugin-visualizer';
import { TextEncoder, TextDecoder } from 'util';

// Polyfills globaux pour TextEncoder et TextDecoder
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    visualizer({
      emitFile: true, // crée le fichier dans dist
      sourcemap: true,
    })
  ],

  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
  }
});

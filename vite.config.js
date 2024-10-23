import { build, defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import {visualizer} from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    visualizer({
      emitFile: true, // crée le fichier dabs dist (sinon il va dans la racine ce qui n'est pas top)
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
})

 

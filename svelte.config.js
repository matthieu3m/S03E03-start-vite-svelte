import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { sveltekit } from '@sveltejs/kit/vite';

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  plugins: [sveltekit()],
  preprocess: vitePreprocess(),
  compilerOptions: {
    compatibility: {
      componentApi: 4,
    },
  },
}

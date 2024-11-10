import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';

export default {
	preprocess: [vitePreprocess()],
	plugins: [sveltekit()]
};

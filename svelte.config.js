import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: preprocess({
		scss: {
				prependData: `@import './static/styles/variables.scss';`
		}
})
};

export default config;

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import rehypeHighlight from 'rehype-highlight';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		{
			enforce: 'pre',
			...mdx({ rehypePlugins: [rehypeHighlight] }),
		},
		react(),
	],
	server: {
		watch: {
			usePolling: true,
		},
	},
});

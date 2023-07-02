import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import rehypeHighlight from 'rehype-highlight';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		{
			enforce: 'pre',
			...mdx({
				remarkPlugins: [remarkGfm, remarkBreaks],
				rehypePlugins: [rehypeHighlight],
			}),
		},
		react(),
	],
	server: {
		watch: {
			usePolling: true,
		},
	},
});

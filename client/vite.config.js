import { sveltekit, vitePreprocess } from '@sveltejs/kit/vite';
import dotenv from 'dotenv'
dotenv.config()

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		port: process.env.PORT,
		strictPort: false,
	},
	preprocess: vitePreprocess()
};

export default config;

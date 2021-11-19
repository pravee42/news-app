import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';

import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
	base: '/',
	server: {
		port: 3000,
	},
	define: {
		'process.env.VITE_Email_Clint_ID': `"${process.env.VITE_Email_Clint_ID}"`,
		'process.env.VITE_1SERVICE_ID': `"${process.env.VITE_1SERVICE_ID}"`,
		'process.env.VITE_1TEMPLATE_ID': `"${process.env.VITE_1TEMPLATE_ID}"`,
		'process.env.NODE_ENV': `"${'development'}"`,
	},
	plugins: [reactRefresh(), svgr()],
});

// import { svelteTesting } from '@testing-library/svelte/vite';
// import { sveltekit } from '@sveltejs/kit/vite';
// import { defineConfig } from 'vite';

// export default defineConfig({
// 	plugins: [sveltekit()],
// 	test: {
// 		workspace: [
// 			{
// 				extends: './vite.config.js',
// 				plugins: [svelteTesting()],
// 				test: {
// 					name: 'client',
// 					environment: 'jsdom',
// 					clearMocks: true,
// 					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
// 					exclude: ['src/lib/server/**'],
// 					setupFiles: ['./vitest-setup-client.js']
// 				}
// 			},
// 			{
// 				extends: './vite.config.js',
// 				test: {
// 					name: 'server',
// 					environment: 'node',
// 					include: ['src/**/*.{test,spec}.{js,ts}'],
// 					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
// 				}
// 			}
// 		]
// 	}
// });

import { defineConfig, loadEnv } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [sveltekit()],
    define: {
      'import.meta.env.PUBLIC_SUPABASE_URL': JSON.stringify(env.PUBLIC_SUPABASE_URL),
      'import.meta.env.PUBLIC_SUPABASE_ANON_KEY': JSON.stringify(env.PUBLIC_SUPABASE_ANON_KEY)
    }
  }
})

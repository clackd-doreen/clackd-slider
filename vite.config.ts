import { defineConfig } from 'vite'
import * as path from 'path'

import autoprefixer from 'autoprefixer'
import checker from 'vite-plugin-checker'
import dts from 'vite-plugin-dts'
import eslint from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react'
import StylelintPlugin from 'vite-plugin-stylelint'
import tsconfigPaths from 'vite-tsconfig-paths'
// import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
// https://stackoverflow.com/questions/68217795/vite-resolve-alias-how-to-resolve-paths

export default defineConfig({
	assetsInclude: ['**/*.cjs'],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'MyLib',
			formats: ['es'],
			fileName: 'my-lib'
		}
	},
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
			scopeBehaviour: 'global',
		},
		postcss: {
			plugins: [
				autoprefixer
			],
		},
		// preprocessorOptions: {
    	// 	scss: {
        // 		additionalData: `
		// 			@use "./src/styles/_reset.scss" as *;
       	// 			@use "./src/styles/_variables.scss" as *;
       	// 		`,
    	// 	},
    	// },
	},
	// esbuild: {
	// 	jsxInject: `import React from 'react'`
	// },
	optimizeDeps: {
		esbuildOptions: {
			target: 'es2020',
		},
	},
	plugins: [
		checker({
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
			},
			typescript: true
		}),
		dts({ insertTypesEntry: true }),
		eslint(),
		react(),
		StylelintPlugin(),
		tsconfigPaths(),
		// viteCommonjs()
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@contexts': path.resolve(__dirname, './src/contexts'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@modules': path.resolve(__dirname, './src/modules'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@templates': path.resolve(__dirname, './src/templates'),
			'@types': path.resolve(__dirname, './src/types'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
		extensions: [
			'.js',
			'.jsx',
			'.ts',
			'.tsx',
			'.d.ts',
			'.d.tsx',
		]
	},
})

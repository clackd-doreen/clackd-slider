import { defineConfig } from 'vite'
import * as path from 'path'

import autoprefixer from 'autoprefixer'
import checker from 'vite-plugin-checker'
import dts from 'vite-plugin-dts'
import react from '@vitejs/plugin-react'
import StylelintPlugin from 'vite-plugin-stylelint'
import tsconfigPaths from 'vite-tsconfig-paths'

// import eslint from 'vite-plugin-eslint'
// import { esbuildCommonjs, viteCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
// https://stackoverflow.com/questions/68217795/vite-resolve-alias-how-to-resolve-paths

export default defineConfig({
	assetsInclude: ['**/*.cjs'],
	base: './',
	build: {
        // assetsInlineLimit: 100000000,
		cssCodeSplit: false,
		rollupOptions: {
			external: ['react', 'react-dom'],
			input: {
				main: path.resolve(__dirname, 'index.html'),
				// about: './about.html',
				// ...
				// List all files you want in your build
			},
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
				format: 'iife',
			}
		},
		// lib: {
		// 	entry: path.resolve(__dirname, 'index.html'),
		// 	fileName: 'my-lib',
		// 	formats: ['es'],
		// 	name: 'MyLib',
		// },
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
		preprocessorOptions: {
    		scss: {
        		additionalData: `
					@use "./src/styles/_reset.scss" as *;
					@use "./src/styles/_variables.scss" as *;
					@use "./src/styles/_global.scss" as *;
       			`,
    		},
    	},
	},
	define: {
    	'process.env': process.env
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
				lintCommand: 'eslint --cache "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
			},
			typescript: true
		}),
		dts({ insertTypesEntry: true }),
		react(),
		StylelintPlugin(),
		tsconfigPaths(),
		// eslint(),
		// viteCommonjs()
	],
	publicDir: 'public',
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
			'@typings': path.resolve(__dirname, './src/typings'),
			'@utils': path.resolve(__dirname, './src/utils'),
			// 'react': 'https://cdn.skypack.dev/react@17',
		    // 'react-dom': 'https://cdn.skypack.dev/react-dom@17',
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
	server: {
      open: true,
   }
	// optimizeDeps: {
    //     esbuildOptions: {
    //         plugins: [
    //             esbuildCommonjs([
    //                 '@storybook/preview-web',
    //             ]),
    //         ],
    //     },
    // },
	// optimizeDeps: {
	// 	include: [
	// 		path.resolve(__dirname, './.storybook/preview.cjs')
	// 	]
	// },
	
})

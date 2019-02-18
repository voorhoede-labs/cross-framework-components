import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/svelte/src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		file: 'build/svelte/bundle.js',
		name: 'app'
	},
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,

			customElement: true
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve(),
		commonjs(),

		production && terser()
	]
};
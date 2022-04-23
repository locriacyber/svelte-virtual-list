import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const plugins = [
	resolve(),
	typescript(),
	commonjs(),
	svelte(),
]
export default [
	{
		input: 'test/src/index.js',
		output: { file: 'test/public/bundle.js', 'format': 'iife' },
		plugins,
	},

	// tests
	{
		input: 'test/src/index.js',
		output: {
			file: 'test/public/bundle.js',
			format: 'iife'
		},
		plugins,
	}
];
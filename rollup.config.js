import cjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';
import ts from '@rollup/plugin-typescript';

export default {
	input: 'src/main.ts',
	output: {file: 'index.js', format: 'esm'},
	plugins: [ts(), cjs(), json(), terser()],
};


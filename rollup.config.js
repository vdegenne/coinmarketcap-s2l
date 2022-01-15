import cjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import {terser} from 'rollup-plugin-terser'

export default {
  input: 'src/main.js',
  output: { file: 'index.js', format: 'esm' },
  plugins: [cjs(), json(), terser()]
}
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript2 from 'rollup-plugin-typescript2'

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/umd.js',
      format: 'umd',
      name: 'umd',
      globals: {
        'axios':'axios'
      }
    },
    {
      file: 'dist/iife.js',
      format: 'iife',
      name: 'iife',
      globals: {
        'axios':'axios'
      }
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
  ],
  external: [
    'lodash/random',
    'axios'
  ]
};
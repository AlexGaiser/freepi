import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'index.ts',
  output: [
    {
      file: 'dist/cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/index.js',
      format: 'es'
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
    // typescript()
  ],
  external: [
    'lodash/random',
    'axios'
  ]
};
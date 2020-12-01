import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

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
      name: 'index',
      globals: {
        'axios':'axios'
      }
    },
    {
      file: 'dist/iife.js',
      format: 'iife',
      name: 'index',
      globals: {
        'axios':'axios'
      }
    }
  ],
  plugins: [
    resolve(),
    commonjs()
  ],
  external: [
    'lodash/random',
    'axios'
  ]
};
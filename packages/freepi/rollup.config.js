import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'index.ts',
  output: [
    {
      file: 'dist/cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.js',
      format: 'es',
      exports: 'named',
    },
    {
      file: 'dist/umd.js',
      format: 'umd',
      name: 'umd',
      exports: 'named',
      globals: {
        axios: 'axios',
      },
    },
    {
      file: 'dist/iife.js',
      format: 'iife',
      name: 'iife',
      exports: 'named',
      globals: {
        axios: 'axios',
      },
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
  external: ['lodash/random', 'axios'],
};

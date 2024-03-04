import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import typescript from '@rollup/plugin-typescript';
import jsx from 'acorn-jsx';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  acornInjectPlugins: [jsx()],
  plugins: [
    typescript({
      compilerOptions: { jsx: 'preserve' },
    }),
    // Resolve packages from node_modules
    resolve(),
    postcss({
      plugins: [autoprefixer()],
      sourceMap: true,
      extract: true,
      minimize: true
    })
  ],
  external: ['solid-js', 'solid-js/web', 'solid-styled-components'],

};

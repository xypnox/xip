import postcss from 'rollup-plugin-postcss';
import withSolid from 'rollup-preset-solid';
import copy from 'rollup-plugin-copy';

const rollupPlugins = [
  postcss({
    extensions: ['.css'],
    minimize: true,
    modules: true,
    inject: true,
  }),
  copy({
    targets: [
      { src: 'src/**/*.css', dest: 'dist/source' }, // Copy CSS maintaining folder structure
    ],
    flatten: false,
  }),
];

export default withSolid({
  targets: ['esm', 'cjs'],
  input: 'src/index.tsx',
  plugins: rollupPlugins,
});

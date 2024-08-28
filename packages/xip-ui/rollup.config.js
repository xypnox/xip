import withSolid from 'rollup-preset-solid';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const rollupPlugins = [
  postcss({
    extensions: ['.css'],
    minimize: true,
    modules: true,
    inject: true,
  }),
  copy({
    targets: [{ src: 'src/**/*.css', dest: 'dist/source' }],
    flatten: false, // Copy CSS maintaining folder structure
  }),
];

const config = withSolid({
  targets: ['esm', 'cjs'],
  plugins: rollupPlugins,
});

export default config;

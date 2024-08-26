import withSolid from 'rollup-preset-solid';
import postcss from 'rollup-plugin-postcss';
import fs from 'node:fs';
//
const rollupPlugins = [
  // nodeResolve(),
  postcss({
    minimize: true,
    extract: true,
    autoModules: true,
    modules: true,
    inject: false,
  }),
];

const components = (() => {
  const componentFiles = fs.readdirSync('./src/components');
  return (
    componentFiles
      // Filter for only directories
      .filter((file) => fs.statSync(`./src/components/${file}`).isDirectory())
      .map((file) => {
        return {
          mappingName: `components/${file}`,
          targets: ['esm', 'cjs'],
          input: `src/components/${file}/index.tsx`,
          plugins: rollupPlugins,
          writePackageJson: true,
        };
      })
  );
})();

const layouts = (() => {
  const componentFiles = fs.readdirSync('./src/layouts');
  return (
    componentFiles
      // Filter for only directories
      .filter((file) => fs.statSync(`./src/layouts/${file}`).isDirectory())
      .map((file) => {
        return {
          mappingName: `layouts/${file}`,
          targets: ['esm', 'cjs'],
          input: `src/layouts/${file}/index.tsx`,
          plugins: rollupPlugins,
          writePackageJson: true,
        };
      })
  );
})();

const config = withSolid([
  {
    mappingName: 'styles',
    targets: ['esm', 'cjs'],
    input: 'src/index.tsx',
    plugins: rollupPlugins,
    // writePackageJson: true,
  },
  ...components,
  ...layouts,
]);

// console.log({ components }, JSON.stringify(components, null, 2));

export default config;

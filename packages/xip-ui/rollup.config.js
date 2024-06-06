import withSolid from "rollup-preset-solid";
import solidStyled from 'rollup-plugin-solid-styled';

export default withSolid({
  targets: ["esm", "cjs"],
  input: 'src/index.tsx',
  plugins: [solidStyled]
});


import { defineConfig } from 'astro/config';

import solidJs from "@astrojs/solid-js";
import solidStyled from 'unplugin-solid-styled';

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  vite: {
    plugins: [
      solidStyled.vite({
        prefix: 'xip',
        filter: {
          include: 'src/**/*.tsx',
          exclude: 'node_modules/**/*.{ts,js}',
        },
      }),
    ],
  },
});

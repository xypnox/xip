import { defineConfig } from 'astro/config';
import RemarkLinkRewrite from 'remark-link-rewrite';

import solidJs from "@astrojs/solid-js";
import shikiTheme from './shiki.json';

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: shikiTheme
    },
    remarkPlugins: [
      [
      RemarkLinkRewrite,
      {
        replacer: (url) => {
          console.log('Replacing', { url })
          if (url.endsWith('.md')) {
            return url.slice(0, -3)
          }
          return url
        }
      }]
    ]
  },
  integrations: [solidJs()]
});

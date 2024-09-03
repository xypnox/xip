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
          if (url.endsWith('.md')) {
            // Also slice the starting charater
              const newUrl = '/docs/api' + url.slice(0, -3).slice(1)
            console.log('Replacing', { url, newUrl })
            return newUrl
          }
          return url
        }
      }]
    ]
  },
  integrations: [solidJs()]
});

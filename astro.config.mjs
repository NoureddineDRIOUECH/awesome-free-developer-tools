// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://webutil.tech',
  trailingSlash: 'never',
  viewTransitions: true,
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize: (item) => {
        const url = new URL(item.url);
        const path = url.pathname;
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (/^\/(tools|dev|generate|text)\//.test(path)) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (/^\/blog\//.test(path)) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        } else if (/^\/(about|contact|faq|privacy|terms)$/.test(path)) {
          item.priority = 0.5;
          item.changefreq = 'monthly';
        } else if (/^\/(tools|blog|guides)/.test(path)) {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        return item;
      },
    })
  ]
});

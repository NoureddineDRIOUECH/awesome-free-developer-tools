// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://webutil.tech',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404') && !/https?:\/\/[^/]+\/tools\/[a-z0-9-]+$/.test(page),
      serialize: (item) => {
        const url = new URL(item.url);
        const path = url.pathname;
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        } else if (/^\/(dev|generate|text)\//.test(path)) {
          item.priority = 0.9;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        } else if (/^\/(tools|guides|blog)($|\/category)/.test(path)) {
          item.priority = 0.8;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        } else if (/^\/blog\//.test(path)) {
          item.priority = 0.7;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        } else if (/^\/(about|contact|faq|privacy|terms)$/.test(path)) {
          item.priority = 0.5;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        } else {
          item.priority = 0.6;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        }
        return item;
      },
    })
  ]
});

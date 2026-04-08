// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://jmnmarquisio.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap(), preact()]
});
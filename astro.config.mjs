// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: process.env.GITHUB_PAGES === 'true' ? 'https://joost-berg.github.io' : undefined,
    base: process.env.GITHUB_PAGES === 'true' ? '/mycocoon-website' : '/',
    vite: {
        plugins: [tailwindcss()],
    },
});

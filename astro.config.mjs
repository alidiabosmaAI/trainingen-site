// @ts-check
import { defineConfig } from 'astro/config';

// Voor GitHub Pages draait de site onder /trainingen-site.
// Bij een eigen domein: zet `site` op dat domein en verwijder `base`.
export default defineConfig({
  site: 'https://alidiabosmaai.github.io',
  base: '/trainingen-site',
});

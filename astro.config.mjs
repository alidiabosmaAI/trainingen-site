// @ts-check
import { defineConfig } from 'astro/config';
import { readdir, rm, rename, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// true = alleen de pagina "Binnenkort online" wordt gepubliceerd; elke andere link toont die ook.
// false = de volledige website wordt gepubliceerd. Lokaal (npm run dev) zie je altijd de volledige site.
const BINNENKORT = true;

// Bestanden die de binnenkort-pagina nodig heeft en dus blijven staan.
const BEHOUDEN = new Set(['_astro', 'favicon.svg', 'CNAME', 'index.html', '404.html']);

/** Na het bouwen: vervang de site door de binnenkort-pagina. */
const binnenkort = {
  name: 'binnenkort',
  hooks: {
    /** @param {{ dir: URL }} opties */
    'astro:build:done': async ({ dir }) => {
      if (!BINNENKORT) return;
      const root = fileURLToPath(dir);
      await rename(join(root, 'binnenkort', 'index.html'), join(root, 'index.html'));
      await copyFile(join(root, 'index.html'), join(root, '404.html'));
      for (const naam of await readdir(root)) {
        if (!BEHOUDEN.has(naam)) await rm(join(root, naam), { recursive: true, force: true });
      }
    },
  },
};

// De site draait op het eigen domein, gekoppeld via GitHub Pages.
export default defineConfig({
  site: 'https://bestuurskundigleerhuis.nl',
  integrations: [binnenkort],
});

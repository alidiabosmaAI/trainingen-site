# Trainingen-site

Website voor trainingen in AI-geletterdheid en algoritmisch bestuur, gebouwd met [Astro](https://astro.build).

## Lokaal draaien

Eenmalig nodig: [Git](https://git-scm.com), [Node.js](https://nodejs.org) (LTS) en een editor zoals [VS Code](https://code.visualstudio.com).

```bash
git clone https://github.com/alidiabosmaAI/trainingen-site.git
cd trainingen-site
npm install
npm run dev
```

Open daarna http://localhost:4321/trainingen-site/ in je browser. Wijzigingen zie je direct.

## Waar pas je wat aan?

| Wat | Waar |
|---|---|
| Naam, e-mail, KvK, menu | `src/config.ts` |
| Kleuren en lettertype (huisstijl) | `src/styles/tokens.css` |
| Trainingen | `src/content/trainingen/*.md` (één bestand per training) |
| Pagina's | `src/pages/` |
| Logo, header, footer | `src/components/` |

**Nieuwe training toevoegen:** kopieer een bestand in `src/content/trainingen/`, geef het een nieuwe naam (dat wordt de URL) en pas de tekst aan.

## Wijzigingen opslaan op GitHub

```bash
git add .
git commit -m "Korte omschrijving van de wijziging"
git push
```

## Online testversie (GitHub Pages)

Eenmalig: ga op GitHub naar **Settings → Pages** en kies bij *Source* voor **GitHub Actions**.
Daarna wordt de site bij elke `git push` automatisch gepubliceerd op
https://alidiabosmaai.github.io/trainingen-site/

## Later: eigen domein

Zet in `astro.config.mjs` de `site` op je eigen domein en verwijder de regel met `base`.

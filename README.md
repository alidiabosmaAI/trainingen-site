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

Open daarna http://localhost:4321/ in je browser. Wijzigingen zie je direct.

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

## Online

De site staat op https://bestuurskundigleerhuis.nl en wordt gehost via GitHub Pages.
Bij elke `git push` naar `main` wordt de site automatisch opnieuw gepubliceerd.

Het domein is geregistreerd bij Hostnet. De DNS wijst naar GitHub Pages:
- A-records voor `bestuurskundigleerhuis.nl`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- CNAME-record voor `www`: `alidiabosmaai.github.io`

De MX-records voor e-mail blijven bij Hostnet.

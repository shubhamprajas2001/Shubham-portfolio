# Shubham Kumar · Portfolio

Personal portfolio site, live at https://shubhamprajas2001.github.io/Shubham-portfolio/

## Stack

- Astro 6, static output
- Vanilla JavaScript for the interactions (`src/scripts`); no framework runtime
- Plain CSS (`src/styles`)

## Editing content

All copy and data live in `src/data/site.js`. Edit that file; the page in `src/pages/index.astro` renders from it.

## Scripts

- `npm run dev` starts the dev server
- `npm run build` builds to `dist/`
- `npm run preview` serves the production build locally

## Deployment

`.github/workflows/deploy.yml` builds on every push and pull request. Pushes to `main` (and manual runs) publish `dist/` to the `gh-pages` branch. If the site is not being served, set Settings > Pages > Deploy from branch > `gh-pages` / root.

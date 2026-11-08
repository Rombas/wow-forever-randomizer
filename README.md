# WoW Forever Character Randomizer

Rolls a random character for World of Warcraft: Forever: faction, race, class, specialization
and main profession. Each part can be switched off, and only combinations the game allows
are rolled.

**Live page:** <https://rombas.github.io/wow-forever-randomizer/>

## What it knows

All game data is in [`src/app/modules/info.ts`](src/app/modules/info.ts): patch 1.60.1, 10 race
variants, 9 classes. Skyborne needs a paid upgrade pack, so the page can leave it out of the
roll. Icons are in `public/`, named after the values in `info.ts`.

"Guardian" and "Frost AOE" are play styles kept next to the talent trees, not trees of their
own.

## Run it

Needs Node 20. `npm ci` works with npm 10, the version bundled with Node 20. npm 11 rejects
this lock file.

```bash
npm ci
npm run dev
```

The site is built with a base path, so open <http://localhost:3000/wow-forever-randomizer/>.

## Deploy

A push to `master` runs `.github/workflows/nextjs.yml`, which builds a static export into
`out/` and publishes it to GitHub Pages.

## Credits

Based on [ebaynissen/wow-classic-randomizer](https://github.com/ebaynissen/wow-classic-randomizer).
MIT license.

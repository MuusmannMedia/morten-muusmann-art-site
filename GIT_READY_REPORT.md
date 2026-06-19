# Git ready-rapport

Dato: 19. juni 2026

## Aktuel status

Status: **Committed, pushed og deployet**

Projektet er et selvstændigt Git-repository med:

- Egen `package.json` og `package-lock.json`
- Egen Astro- og TypeScript-konfiguration
- Egen `public/`- og `src/`-struktur
- 7 offentlige indholdssider samt en 404-side
- 35 værker i `src/data/paintings.ts`
- Node.js-versionstyring via `.nvmrc`
- Ingen nødvendige runtime-afhængigheder til legacy-filer uden for projektmappen

GitHub:

- Repository:
  [MuusmannMedia/morten-muusmann-art-site](https://github.com/MuusmannMedia/morten-muusmann-art-site)
- Standardbranch: `main`
- Projektet er committed og pushed.

Vercel:

- Aktiv deployment:
  [morten-muusmann-art-site.vercel.app](https://morten-muusmann-art-site.vercel.app)
- Push til `main` er det normale deploymentflow.
- `mortenmuusmann.dk` er tilføjet, men DNS hos one.com afventer support.
- Nødvendig A-record: `mortenmuusmann.dk → 216.198.79.1`
- MX- og øvrige mail-records må ikke ændres.

## Build-status

Det oprindelige kontrolbuild den 19. juni 2026 bestod:

- Astro 6.4.8 byggede statisk output uden fejl eller advarsler.
- 8 HTML-sider inklusive 404-siden blev genereret.
- `robots.txt` og `sitemap.xml` fandtes i build-outputtet.
- Outputtet blev skrevet til `dist/`.
- Buildet blev kørt med Node.js 24.14.0.

Efter opdateringen af projektdokumentationen den 19. juni 2026 blev
`npm run build` kørt igen med Node.js 24.14.0. Buildet bestod og genererede
fortsat 8 sider inklusive 404-siden.

Projektkravet er Node.js 22.12.0 eller nyere. Lokal opsætning og build:

```bash
nvm install 22.12.0
nvm use
npm run build
```

## `.gitignore`

Følgende lokale eller genererede filer er beskyttet mod tracking:

- `node_modules/`
- `dist/`
- `.astro/`
- `.vercel/`
- `.env` og lokale `.env.*`-varianter
- `.DS_Store`
- `.cache/`
- `.vite/`
- ESLint- og Stylelint-cache
- Generelle logfiler samt npm-, yarn- og pnpm-debuglogs

En eventuel `.env.example` må fortsat trackes.

## Repositoryafgrænsning

Status: **Ja**

Git-repositoryet er initialiseret direkte i `morten-muusmann-art-site/`.
Legacy-materialet i overordnede mapper er ikke en del af repositoryet og må
ikke ændres.

## Advarsler

Ingen blokerende problemer blev fundet.

Ikke-blokerende forhold:

1. `public/images/` fylder cirka 122 MB, hvoraf originale malerier fylder cirka 108 MB. Den største enkeltfil er cirka 7,2 MB, altså klart under GitHubs grænse på 100 MB pr. fil. Repositoryet vil dog være relativt billedtungt.
2. `BUILD_NOTES.md` dokumenterer to tidligere registrerede transitive npm-advisories med lav alvorlighed. De påvirkede ikke dette build.
3. `.gitignore` forhindrer, at det genererede `dist/`, lokale dependencies og
   cachefiler kommer med i commits.
4. one.coms DNS-panel gav “ukendt fejl”. DNS-ændringen afventer one.com support.

## Normalt Git-flow

Efter lokale ændringer:

```bash
cd "/Users/mortenmuusmann/Projects/morten-muusmann-web/morten-muusmann-art-site"
nvm install 22.12.0
nvm use
npm run build
git add .
git status
git commit -m "Beskriv ændringen"
git push origin main
```

`git status` skal gennemgås før commit. Især bør `node_modules/`, `dist/`,
`.astro/`, `.env` og lokale cache-/logfiler ikke være staged.

Push til `main` udløser det normale Vercel-flow. Der skal ikke deployes manuelt.

## Tidligere status

Den oprindelige Git-ready-kontrol blev udført, før `git init`, første commit,
GitHub-repository, push og Vercel-import. De trin er nu gennemført. Rapportens
oprindelige build- og `.gitignore`-resultater er bevaret ovenfor som historisk
dokumentation.

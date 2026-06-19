# Git ready-rapport

Dato: 19. juni 2026

## Status

Projektet er klar til at blive initialiseret som et selvstændigt lokalt Git-repository.

Kontrollen bekræfter, at `morten-muusmann-art-site/` er en selvstændig, statisk Astro-side med:

- Egen `package.json` og `package-lock.json`
- Egen Astro- og TypeScript-konfiguration
- Egen `public/`- og `src/`-struktur
- 7 offentlige indholdssider samt en 404-side
- Node.js-versionstyring via `.nvmrc`
- Ingen eksisterende `.git/`-mappe
- Ingen nødvendige runtime-afhængigheder til legacy-filer uden for projektmappen

## Build-status

Status: **Bestået**

Kørt den 19. juni 2026:

```bash
npm run build
```

Resultat:

- Astro 6.4.8 byggede statisk output uden fejl eller build-advarsler.
- 8 HTML-sider blev genereret.
- `robots.txt` og `sitemap.xml` findes i build-outputtet.
- Outputtet blev skrevet til `dist/`.
- Buildet blev kørt med Node.js 24.14.0, som opfylder projektets krav om Node.js 22.12 eller nyere.

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

## Klar som selvstændigt GitHub-repository

Status: **Ja**

Git bør initialiseres direkte inde i `morten-muusmann-art-site/`. Så bliver kun den nye Astro-side en del af repositoryet, mens legacy-materialet i den overordnede mappe forbliver udenfor.

Der er ikke kørt `git init`, lavet commit, oprettet GitHub-repository eller pushet kode under denne kontrol.

## Advarsler

Ingen blokerende problemer blev fundet.

Ikke-blokerende forhold:

1. `public/images/` fylder cirka 122 MB, hvoraf originale malerier fylder cirka 108 MB. Den største enkeltfil er cirka 7,2 MB, altså klart under GitHubs grænse på 100 MB pr. fil. Repositoryet vil dog være relativt billedtungt.
2. `BUILD_NOTES.md` dokumenterer to tidligere registrerede transitive npm-advisories med lav alvorlighed. De påvirkede ikke dette build.
3. `.gitignore` forhindrer, at det genererede `dist/`, lokale dependencies og cachefiler kommer med i første commit.

## Manuel Git-initialisering og første commit

Kør disse kommandoer manuelt:

```bash
cd "/Users/mortenmuusmann/Projects/morten-muusmann-web/morten-muusmann-art-site"
nvm use
git init -b main
git add .
git status
git commit -m "Initial Astro portfolio site"
```

`git status` bør gennemgås før commit. Især bør `node_modules/`, `dist/`, `.astro/`, `.env` og lokale cache-/logfiler ikke stå på listen over staged filer.

Hvis Git mangler navn eller e-mail, kan de sættes lokalt for dette repository før commit:

```bash
git config user.name "DIT NAVN"
git config user.email "DIN GITHUB-E-MAIL"
git commit -m "Initial Astro portfolio site"
```

Oprettelse af GitHub-repository, tilføjelse af remote og push er næste separate trin og er ikke udført her.

# Build notes

Dato: 19. juni 2026

## 1. Hvad der er bygget

Der er bygget en selvstændig, statisk Astro-hjemmeside i:

```text
./morten-muusmann-art-site/
```

Projektet bruger:

- Astro 6.4.8
- TypeScript
- Statisk output
- Almindelig CSS uden UI-framework
- Ingen klient-side JavaScript til kernefunktionerne

Sider:

- `/` – forside
- `/biografi` – biografi og kunstnerprofil
- `/malerier` – samlet oversigt med 35 værker
- `/malerier/olie` – 11 oliemalerier
- `/malerier/akryl` – 3 akrylmalerier
- `/malerier/akvarel` – 21 akvareller
- `/kontakt` – e-mail og Instagram
- `/404` – statisk fejlside

Malerigallerierne genereres fra:

```text
src/data/paintings.ts
```

Hvert værk har:

- `id`
- `title`
- `category`
- `technique`
- `size`
- `image`
- `sourcePage`
- `originalImage`
- original pixelbredde og -højde

Designet er responsivt og bruger en neutral, lys baggrund, stor typografi, god afstand omkring billederne og en enkel navigation. Billeder åbnes i original størrelse i en ny fane.

## 2. Hvilke gamle filer der er brugt

Primære indholdskilder:

- `../SITE_AUDIT.md`
- `../morten-muusmann-web/malerier/index.html`
- `../morten-muusmann-web/malerier/akryl.html`
- `../morten-muusmann-web/malerier/akvarel.html`
- `../morten-muusmann-web/malerier/olie.html`
- De 35 aktive JPG-filer under `../morten-muusmann-web/malerier/`

Sekundære kilder:

- `../morten-muusmann-web/index.html` – biografi, e-mail og Instagram
- `../morten-muusmann-web/home.html`
- `../morten-muusmann-web/hjem.html` – grafisk baggrund
- `../morten-muusmann-web/onewebmedia/MM-LOGO-outline.svg`
- `../morten-muusmann-web/photos/Morten Muusmann.jpg`

`akvarel.html` er brugt som den autoritative akvarelkilde, fordi auditten identificerede den som den komplette, aktive side. `akvarel-03.html` er ikke brugt som datakilde.

Ingen gamle filer er ændret, flyttet, omdøbt eller slettet.

## 3. Hvilke billeder der er kopieret

Kun de 35 aktive malerier fra auditten er kopieret til `public/images/paintings/`.

| Ny projektsti | Original kilde |
|---|---|
| `public/images/paintings/akryl/the-breeze.jpg` | `morten-muusmann-web/malerier/akryl/The Breeze.jpg` |
| `public/images/paintings/akryl/dont-stare.jpg` | `morten-muusmann-web/malerier/akryl/Don_t Stare.jpg` |
| `public/images/paintings/akryl/night-crawler.jpg` | `morten-muusmann-web/malerier/akryl/Night Crawler.jpg` |
| `public/images/paintings/akvarel/i-was-18.jpg` | `morten-muusmann-web/malerier/akvarel/I WAS 18.jpg` |
| `public/images/paintings/akvarel/birthday-girl.jpg` | `morten-muusmann-web/malerier/akvarel/Birthday Girl.jpg` |
| `public/images/paintings/akvarel/inner-sadness.jpg` | `morten-muusmann-web/malerier/akvarel/Inner Sadness.jpg` |
| `public/images/paintings/akvarel/into-the-deep.jpg` | `morten-muusmann-web/malerier/akvarel/Torsk.jpg` |
| `public/images/paintings/akvarel/may-field.jpg` | `morten-muusmann-web/malerier/akvarel/May-Field.jpg` |
| `public/images/paintings/akvarel/pin-code.jpg` | `morten-muusmann-web/malerier/akvarel/The Eye.jpg` |
| `public/images/paintings/akvarel/corel-draw.jpg` | `morten-muusmann-web/malerier/akvarel/Strong- Strong.jpg` |
| `public/images/paintings/akvarel/fish-man.jpg` | `morten-muusmann-web/malerier/akvarel/Fish-Man.jpg` |
| `public/images/paintings/akvarel/i-was-happy.jpg` | `morten-muusmann-web/malerier/akvarel/Mind Crush.jpg` |
| `public/images/paintings/akvarel/after-man.jpg` | `morten-muusmann-web/malerier/akvarel/After-Man.jpg` |
| `public/images/paintings/akvarel/forest-yoke.jpg` | `morten-muusmann-web/malerier/akvarel/Forest Yoke.jpg` |
| `public/images/paintings/akvarel/new-greenland.jpg` | `morten-muusmann-web/malerier/akvarel/New-Greenland.jpg` |
| `public/images/paintings/akvarel/deep-sea-oil.jpg` | `morten-muusmann-web/malerier/akvarel/Deep-Sea.jpg` |
| `public/images/paintings/akvarel/wolf-woman.jpg` | `morten-muusmann-web/malerier/akvarel/Wolf Woman.jpg` |
| `public/images/paintings/akvarel/summer-bird.jpg` | `morten-muusmann-web/malerier/akvarel/Summer-bird.jpg` |
| `public/images/paintings/akvarel/autumn-flowers.jpg` | `morten-muusmann-web/malerier/akvarel/Autumn-flower.jpg` |
| `public/images/paintings/akvarel/left-with-lungs.jpg` | `morten-muusmann-web/malerier/akvarel/Left With Lungs.jpg` |
| `public/images/paintings/akvarel/carbon-eater.jpg` | `morten-muusmann-web/malerier/akvarel/Carbon-Aeter.jpg` |
| `public/images/paintings/akvarel/krims.jpg` | `morten-muusmann-web/malerier/akvarel/Splash.jpg` |
| `public/images/paintings/akvarel/deadly-virus.jpg` | `morten-muusmann-web/malerier/akvarel/The_Virus_From_Hell.jpg` |
| `public/images/paintings/akvarel/arms-lenghts.jpg` | `morten-muusmann-web/malerier/akvarel/Arm.jpg` |
| `public/images/paintings/olie/the-empty-head.jpg` | `morten-muusmann-web/malerier/olie/Empty Head.jpg` |
| `public/images/paintings/olie/the-kosak.jpg` | `morten-muusmann-web/malerier/olie/Kosakken.jpg` |
| `public/images/paintings/olie/summer-waves.jpg` | `morten-muusmann-web/malerier/olie/SUMMER-WAVES.jpg` |
| `public/images/paintings/olie/life-runner.jpg` | `morten-muusmann-web/malerier/olie/LIFE-RUNNER.jpg` |
| `public/images/paintings/olie/innocent-behind-bars.jpg` | `morten-muusmann-web/malerier/olie/INNOCENT-BEHIND-BARS.jpg` |
| `public/images/paintings/olie/bad-hair-day.jpg` | `morten-muusmann-web/malerier/olie/Bad Hair Day-02.jpg` |
| `public/images/paintings/olie/eye-out.jpg` | `morten-muusmann-web/malerier/olie/EYE-OUT.jpg` |
| `public/images/paintings/olie/arctic-rust.jpg` | `morten-muusmann-web/malerier/olie/ARCTIC-RUST.jpg` |
| `public/images/paintings/olie/arctic-water.jpg` | `morten-muusmann-web/malerier/olie/Ice turning to water.jpg` |
| `public/images/paintings/olie/ice-turning-to-water.jpg` | `morten-muusmann-web/malerier/olie/Arctic Water.jpg` |
| `public/images/paintings/olie/politician-souls.jpg` | `morten-muusmann-web/malerier/olie/Politician Souls.jpg` |

Derudover er følgende relevante profilassets kopieret:

- `public/images/brand/mm-logo.svg`
- `public/images/portraits/morten-muusmann.jpg`

For at undgå at gallerierne sender ca. 108 MB originalbilleder ved normal browsing, er der genereret 35 WebP-previews under:

```text
public/images/previews/paintings/
```

Previewfilerne er højst 1600 × 1600 pixels og bruger WebP-kvalitet 82. De fylder samlet ca. 12 MB. Originalerne bevares uændret i `public/images/paintings/` og bruges som mål for “åbn i fuld størrelse”.

Der er også genereret en WebP-preview af portrættet.

## 4. Eventuelle billeder eller data der manglede

Ingen af de 35 aktive malerifiler manglede.

Følgende data findes ikke i kildematerialet og er derfor ikke opfundet:

- Pris
- Salgsstatus
- Årstal
- Beskrivelse pr. enkeltværk
- Enhed for størrelserne `40X40` og `60X80`

De felter er ikke vist på siden. `size` er bevaret som den oprindelige tekstværdi.

## 5. Eventuelle filnavne der er ændret

Alle kopierede malerier har fået stabile, URL-venlige filnavne:

- Små bogstaver
- Mellemrum erstattet med bindestreger
- Apostroffer og underscores fjernet
- Filnavnet følger som udgangspunkt værktitlen

Den fulde mapping står i tabellen ovenfor og i `originalImage` på hver post i `src/data/paintings.ts`.

Eksempler:

- `Don_t Stare.jpg` → `dont-stare.jpg`
- `Torsk.jpg` → `into-the-deep.jpg`
- `The Eye.jpg` → `pin-code.jpg`
- `Strong- Strong.jpg` → `corel-draw.jpg`
- `Splash.jpg` → `krims.jpg`

Synlige værktitler er som hovedregel bevaret ordret fra den aktive HTML-kilde, også når de sandsynligvis indeholder stavefejl:

- `NIGHT CRALER`
- `INNER SADNES`
- `ARMS LENGHTS`

De bør først rettes efter redaktionel godkendelse.

To tydelige forfatternavne/citatformuleringer er normaliseret i sideteksten:

- `Pablo Picassoi` → `Pablo Picasso`
- `Univers` → `universe`

Dette ændrer ikke maleridata.

## 6. Kendte mangler

1. `ARCTIC WATER` bruger fortsat den fil, som `olie.html` koblede til titlen:
   - `Ice turning to water.jpg`
2. `ICE TURNING TO WATER` bruger tilsvarende:
   - `Arctic Water.jpg`
3. Det kan være en fejl i det gamle site, men mappingen er ikke byttet uden kunstnerens bekræftelse.
4. `BAD HAIR DAY` bruger `Bad Hair Day-02.jpg`, fordi det er den aktive fil i `olie.html`. Den alternative `BAD HAIR DAY.jpg` er ikke kopieret.
5. `MAY FIELD` er valgt frem for `SPRING`, og `KRIMS` er valgt frem for `KRIMS KRAMS`, fordi den komplette aktive `akvarel.html` bruger disse titler.
6. Der er ingen kontaktformular. Den gamle PHP-/one.com-formular er ikke genbrugt.
7. Priser, status og årstal mangler som beskrevet ovenfor.
8. De originale JPG-filer er store, men normale sidevisninger bruger de mindre WebP-previews.
9. `npm install` rapporterede to transitive advisories med lav alvorlighed. Der er ikke kørt en tvungen, potentielt breaking `npm audit fix --force`.

## 7. Hvordan siden køres lokalt

Astro 6 kræver Node.js 22.12 eller nyere.

Fra projektmappen:

```bash
cd morten-muusmann-art-site
npm install
npm run dev
```

Astro viser derefter den lokale URL, normalt:

```text
http://localhost:4321
```

Produktionsbuild:

```bash
npm run build
```

Preview af produktionsbuild:

```bash
npm run preview
```

Det statiske output skrives til:

```text
dist/
```

## 8. Hvordan siden senere kan deployes til Vercel

Projektet kræver ingen serveradapter og kan deployes som statisk Astro-site.

### Via Vercel Dashboard

1. Push projektet til et Git-repository.
2. Importér repositoryet i Vercel.
3. Hvis repositoryets rod også indeholder legacy-materialet, vælg:

   ```text
   morten-muusmann-art-site
   ```

   som **Root Directory**.
4. Vercel bør registrere Astro automatisk.
5. Build command:

   ```text
   npm run build
   ```

6. Output directory:

   ```text
   dist
   ```

7. Vælg Node.js 22 eller nyere i projektindstillingerne.

### Via Vercel CLI

Kør fra `morten-muusmann-art-site/`:

```bash
npx vercel
```

Der er ikke foretaget nogen deploy i denne fase.

## 9. GitHub- og Vercel-klargøring

Dato: 19. juni 2026

Projektet er klargjort som en selvstændig GitHub- og Vercel-klar Astro-mappe.

### Node.js-versionstyring

- `.nvmrc` er tilføjet med Node.js `22.12.0`.
- `package.json` angiver fortsat `"node": ">=22.12.0"` under `engines`.
- Det afsluttende kontrolbuild blev kørt med Node.js 24.14.0, som opfylder minimumskravet.

### Dokumentation

- `README.md` er tilføjet med projektbeskrivelse, sidetal, værktal, Node-krav og lokale npm-kommandoer.
- `DEPLOYMENT.md` er tilføjet med vejledning til GitHub, Vercel og en forsigtig senere domæne-/DNS-proces.
- DNS-vejledningen understreger, at MX- og øvrige mail-records skal kontrolleres, før DNS ændres.

### Git-ignore

`.gitignore` dækker nu:

- `node_modules/`
- `dist/`
- `.astro/`
- `.vercel/`
- `.DS_Store`
- `.env` og lokale miljøvarianter
- Lokale cachefiler
- Logfiler fra npm, yarn og pnpm

En eventuel `.env.example` kan fortsat trackes.

### Build-resultat

`npm run build` gennemførte uden fejl den 19. juni 2026:

- Statisk Astro-output
- 8 genererede sider inklusive 404-siden
- Buildtid cirka 1,06 sekunder
- Output i `dist/`

Der er ikke oprettet et GitHub-repository, pushet kode, deployet til Vercel eller ændret DNS som del af denne klargøring.

# QA-rapport

Dato: 19. juni 2026

## Kort konklusion

Den første Astro-version består den tekniske og visuelle kvalitetssikring. Produktionsbuildet gennemfører uden fejl, alle 7 indholdssider samt 404-siden genereres, alle kontrollerede interne links og billedstier virker, og de 35 værker vises med korrekt kategorifordeling.

Siden er klar til en første Vercel-deploy. Der er udført to små, sikre rettelser: en manglende sitemap-fil er tilføjet, og en synlig legacy-bemærkning om one.com er fjernet fra kontaktsiden. Ingen filer uden for `morten-muusmann-art-site/` er ændret.

## 1. Build-status

Status: **Bestået**

Kontrolleret med:

```bash
npm run build
```

Resultat:

- Astro 6.4.8 byggede siden som statisk output.
- Buildet blev kørt med Node.js 24.14.0, som opfylder kravet om Node.js 22.12 eller nyere.
- 8 HTML-sider blev genereret.
- Buildet sluttede uden fejl eller build-advarsler.
- Det endelige output ligger i `dist/`.
- Det samlede `dist/` fylder cirka 140 MB, primært på grund af de 35 originale JPG-filer.

Node-kravet er tydeligt angivet to steder:

- `package.json`: `"engines": { "node": ">=22.12.0" }`
- `BUILD_NOTES.md`: lokal kørsel og Vercel-opsætning beskriver Node.js 22.12+.

## 2. Sideoversigt

Alle forventede sider findes i det endelige build:

| Rute | Genereret fil | H1 | Resultat |
|---|---|---:|---|
| `/` | `dist/index.html` | 1 | Bestået |
| `/biografi` | `dist/biografi/index.html` | 1 | Bestået |
| `/malerier` | `dist/malerier/index.html` | 1 | Bestået |
| `/malerier/olie` | `dist/malerier/olie/index.html` | 1 | Bestået |
| `/malerier/akryl` | `dist/malerier/akryl/index.html` | 1 | Bestået |
| `/malerier/akvarel` | `dist/malerier/akvarel/index.html` | 1 | Bestået |
| `/kontakt` | `dist/kontakt/index.html` | 1 | Bestået |
| `/404` | `dist/404.html` | 1 | Bestået |

404-siden blev både genereret som statisk HTML og leveret med HTTP-status 404 under den lokale Astro-test.

Den visuelle browserkontrol viste:

- Intet vandret overflow på desktop eller mobil.
- Desktopnavigationen er tydelig og korrekt markeret.
- Mobilnavigationen åbner og viser Forside, Biografi, Malerier og Kontakt.
- Forside, galleri, kategorinavigation og malerikort tilpasser sig mobilbredden.
- Ingen fejl eller advarsler blev registreret i browserkonsollen.
- Designet fremstår roligt, læsbart og konsistent uden tung animation eller legacy-layout.

## 3. Link-check

Status: **Bestået**

Det endelige statiske output blev gennemgået for lokale `href`- og `src`-referencer:

- 279 lokale referenceforekomster blev kontrolleret på tværs af de 8 HTML-sider.
- 0 brudte interne referencer blev fundet.
- Navigationen mellem alle sider virker.
- Kategorilinks fra forsiden og malerioversigten virker.
- Links fra malerikort til originale JPG-filer virker.
- Skip-linket til `#main-content` findes på alle sider.
- E-mail-links bruger `mailto:`.
- Instagram-links bruger HTTPS, åbner i ny fane og har `rel="noreferrer"`.

Eksterne destinationer er ikke funktionstestet hos tredjeparten; kontrollen omfatter den lokale markup og URL-struktur.

## 4. Billed-check

Status: **Bestået**

`public/images/` indeholder 73 relevante filer:

- 35 originale JPG-filer med aktive malerier.
- 35 WebP-previews af de samme malerier.
- 1 SVG-logo.
- 1 originalt portræt.
- 1 WebP-preview af portrættet.

Kontrolresultater:

- Alle 72 rasterfiler kunne åbnes og aflæses teknisk.
- Alle 35 originale billeddimensioner matcher værdierne i `paintings.ts`.
- Alle billedstier fra de genererede sider findes.
- Alle maleribilleder har alt-tekst baseret på værktitlen.
- Der blev ikke fundet indholdsmæssigt identiske filer via filhash.
- Der blev ikke fundet uventede eller åbenlyst irrelevante filer i `public/images/`.
- Originalerne fylder cirka 108 MB; previews fylder cirka 13 MB og bruges ved normal browsing.

De store originaler er bevidst bevaret som mål for “åbn i fuld størrelse”. Det gør deployet større, men normale gallerivisninger bruger de mindre, lazy-loadede WebP-filer.

## 5. Datacheck af paintings.ts

Status: **Bestået**

`src/data/paintings.ts` indeholder præcis 35 værker:

| Kategori | Data | Genereret kategoriside |
|---|---:|---:|
| Olie | 11 | 11 |
| Akryl | 3 | 3 |
| Akvarel | 21 | 21 |
| **I alt** | **35** | **35** |

Kontrolresultater:

- Ingen dublerede `id`-værdier.
- Ingen dublerede titler.
- Ingen dublerede nye billedstier.
- Ingen dublerede originale billedstier.
- Ingen ugyldige kategorier eller stavevarianter i kategorifelterne.
- Ingen tomme kritiske felter: `id`, `title`, `category`, `technique`, `image` og `sourcePage`.
- Alle 35 poster har også en størrelse.
- Kategorisiderne indeholder kun ID'er fra den relevante kategori.
- Der mangler ingen værker på kategorisiderne.
- Titlerne i HTML-outputtet matcher datafilen; apostroffen i `DON'T STARE` HTML-escapes korrekt.

Følgende sandsynlige stavefejl er fortsat bevaret fra det autoritative kildemateriale og er ikke rettet uden redaktionel godkendelse:

- `NIGHT CRALER`
- `INNER SADNES`
- `ARMS LENGHTS`

De kendte mulige titel-/billedforbytninger omkring `ARCTIC WATER` og `ICE TURNING TO WATER` er fortsat dokumenteret i `BUILD_NOTES.md`.

## 6. SEO/meta-check

Status: **Bestået**

Alle 8 sider har:

- `<html lang="da">`
- En unik og ikke-tom `<title>`
- En ikke-tom meta description
- Canonical URL
- Open Graph-titel, beskrivelse, URL og billede
- `og:locale="da_DK"`
- Twitter card-metadata
- SVG-favicon

HTML-strukturen er semantisk fornuftig:

- `header`, navngivne `nav`-landmarks, `main` og `footer`.
- Præcis ét `main` og ét `h1` pr. side.
- Malerier er markeret som `article`.
- Biografiportræt og citater bruger `figure`/`figcaption`, hvor det er relevant.
- Siden har en synlig-ved-fokus skip-link.

Fundet og rettet:

- `robots.txt` pegede på `sitemap-index.xml`, men denne fil fandtes ikke.
- Der er nu tilføjet `public/sitemap.xml` med de 7 offentlige indholdssider.
- `robots.txt` peger nu korrekt på `https://mortenmuusmann.dk/sitemap.xml`.
- 404-siden er ikke medtaget i sitemap, hvilket er korrekt.

## 7. Vercel-readiness

Status: **Klar til første deploy**

Projektet er egnet til direkte statisk Vercel-deploy:

- `output: "static"` er sat i `astro.config.mjs`.
- Der bruges ingen serveradapter eller serverfunktioner.
- Scripts til `dev`, `build` og `preview` findes.
- `package-lock.json` findes, så installationen kan reproduceres.
- Node.js-kravet er sat til `>=22.12.0`.
- Build command er `npm run build`.
- Output directory er `dist`.
- Canonical site er sat til `https://mortenmuusmann.dk`.
- `robots.txt` og `sitemap.xml` kopieres til build-outputtet.

Hvis hele legacy-repositoriet importeres i Vercel, skal `morten-muusmann-art-site` vælges som Root Directory. Der er ikke behov for en `vercel.json` i denne version.

## 8. Fundne problemer

### Rettet under QA

1. `robots.txt` refererede til en sitemap-fil, som ikke fandtes.
2. Kontaktsiden viste en intern implementationstekst om den gamle one.com-formular. Den var ikke relevant for besøgende og gav unødig legacy-støj.

### Kendte, ikke-blokerende forhold

1. `dist/` er cirka 140 MB, fordi originale højopløste værker følger med. Det er ikke en buildfejl, men bør overvåges ved deploy og performance-test.
2. Tre sandsynlige stavefejl i værktitler er bevaret fra kilden og kræver kunstnerens godkendelse før ændring.
3. To kendte mulige olie-billedforbytninger kræver redaktionel afklaring.
4. `BUILD_NOTES.md` registrerer to transitive npm-advisories med lav alvorlighed. Der er ikke kørt en tvungen, potentielt breaking dependency-opdatering.
5. Der er endnu ikke kørt Lighthouse mod en rigtig Vercel-preview med netværksmåling.

Der blev ikke fundet:

- Absolutte lokale macOS-brugerstier.
- Runtime-imports eller scripts fra one.com.
- Referencer til `onewebmedia`, `onewebstatic`, `sendmail.php`, Termly eller gamle eksterne one.com-image-URL'er i `src/` eller `public/`.
- Brudte lokale links eller billeder.
- Ugyldige malerikategorier.

`sourcePage` og `originalImage` i `paintings.ts` indeholder relative dokumentationsstier til legacy-materialet. De bruges ikke som runtime-imports og er bevidst bevaret som sporbarhed.

## 9. Rettelser udført

Følgende små og sikre rettelser er udført:

1. Oprettet `public/sitemap.xml`.
2. Rettet sitemap-URL'en i `public/robots.txt`.
3. Fjernet den besøgende-vendte one.com-bemærkning fra `src/pages/kontakt.astro`.
4. Fjernet den nu ubrugte CSS-regel `.contact-card__note`.
5. Oprettet denne QA-rapport.

Efter rettelserne er `npm run build` kørt igen med succes, og det endelige output er genkontrolleret for sider, metadata og lokale referencer.

## 10. Anbefalede næste trin

1. Deploy siden til en Vercel Preview med `morten-muusmann-art-site` som Root Directory.
2. Kør Lighthouse på mobil og desktop mod preview-URL'en.
3. Bekræft de tre sandsynlige titelstavefejl med Morten.
4. Bekræft billedmappingen for `ARCTIC WATER` og `ICE TURNING TO WATER`.
5. Beslut om højopløste originaler fortsat skal være offentligt tilgængelige, eller om der skal bruges mindre downloadversioner.
6. Gennemgå npm-advisories og opdatér afhængigheder uden `--force`, når en kompatibel opdatering er tilgængelig.
7. Tilføj eventuelt årstal, pris og salgsstatus senere, når autoritative data findes.

# GitHub- og Vercel-deployment

Status pr. 19. juni 2026. Dokumentet beskriver den aktuelle opsætning og udfører
ikke deploy eller DNS-ændringer.

## Aktuel status

- GitHub-repository:
  [MuusmannMedia/morten-muusmann-art-site](https://github.com/MuusmannMedia/morten-muusmann-art-site)
- Standardbranch: `main`
- Vercel-deployment:
  [morten-muusmann-art-site.vercel.app](https://morten-muusmann-art-site.vercel.app)
- Custom domain: `mortenmuusmann.dk` er tilføjet i Vercel.
- DNS-status: Afventer ændring hos one.com og svar fra one.com support.
- Nødvendig A-record: `mortenmuusmann.dk → 216.198.79.1`

## GitHub- og deploymentflow

Projektmappen er roden i sit eget GitHub-repository. Legacy-materiale uden for
projektmappen indgår ikke i repositoryet og må ikke ændres.

Det normale flow er:

1. Foretag og kontrollér ændringer lokalt.
2. Kør `npm run build` med Node.js 22.12.0 eller nyere.
3. Commit ændringerne til Git.
4. Push til `main` på GitHub.
5. Vercel bygger og deployer fra GitHub.

Der skal normalt ikke køres et manuelt Vercel-deploy.

Kontrollér før commit, at genererede og lokale filer ikke er staged:

```bash
git status
```

`node_modules/`, `dist/`, `.astro/`, `.vercel/`, miljøfiler og lokale cache-/logfiler er dækket af `.gitignore`.

## Vercel-konfiguration

Projektet er allerede importeret i Vercel. Den relevante konfiguration er:

| Indstilling | Værdi |
|---|---|
| Framework Preset | Astro |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js Version | 22.12 eller nyere |
| Produktionsbranch | `main` |

Projektet er statisk og kræver ingen Vercel-serveradapter eller `vercel.json`.

## Lokal buildkontrol

Astro 6 kræver Node.js 22.12.0 eller nyere. Hvis den anbefalede version ikke er
installeret lokalt:

```bash
nvm install 22.12.0
nvm use
npm run build
```

## Domæne og DNS

`mortenmuusmann.dk` er tilføjet i Vercel, men domænet peger endnu ikke korrekt
på deploymentet. Vercel kræver:

```text
Type: A
Host/navn: @ (mortenmuusmann.dk)
Værdi: 216.198.79.1
```

one.coms DNS-panel gav “ukendt fejl”, da ændringen blev forsøgt. Der afventes
derfor hjælp fra one.com support, før DNS ændres.

Vigtige begrænsninger:

- MX-records må ikke ændres.
- SPF-, DKIM-, DMARC- og andre mailrelaterede records skal bevares.
- Nameservere må ikke ændres som genvej.
- Dokumentér den eksisterende DNS-zone før ændringen.
- Fjern eller erstat kun eventuelle konkurrerende web-records efter konkret
  afklaring.
- Kontrollér `www` separat i Vercel, hvis subdomænet også skal bruges.

Når one.com har gennemført eller muliggjort ændringen, skal følgende
kontrolleres:

1. At `mortenmuusmann.dk` peger på Vercel.
2. At Vercel viser domænet som korrekt konfigureret.
3. At HTTPS-certifikatet er udstedt og gyldigt.
4. At eksisterende e-mail fortsat fungerer.
5. At canonical URL, `robots.txt` og `sitemap.xml` virker på hoveddomænet.

## Tidligere status

Ved den oprindelige klargøring var GitHub-repositoryet og Vercel-projektet endnu
ikke oprettet. Den fase er afsluttet: repositoryet er nu pushed, og
Vercel-deploymentet er aktivt. Kun custom-domain-DNS mangler.

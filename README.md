# Morten Muusmann

En statisk kunst- og portfolio-hjemmeside for kunstmaler og grafisk designer Morten Muusmann. Siden præsenterer værker i akvarel, olie og akryl i et enkelt, responsivt galleri.

## Teknologi

- Astro 6
- TypeScript
- Statisk HTML og CSS
- Deployet til Vercel

## Aktuel status

Status pr. 19. juni 2026:

- Projektet er committed til Git og pushed til
  [MuusmannMedia/morten-muusmann-art-site](https://github.com/MuusmannMedia/morten-muusmann-art-site).
- Det aktive Vercel-deployment findes på
  [morten-muusmann-art-site.vercel.app](https://morten-muusmann-art-site.vercel.app).
- `mortenmuusmann.dk` er tilføjet i Vercel, men DNS hos one.com afventer
  ændring og support.
- Vercel kræver denne A-record:
  `mortenmuusmann.dk → 216.198.79.1`.
- MX- og øvrige mailrelaterede DNS-records må ikke ændres.
- one.coms DNS-panel gav fejlen “ukendt fejl”; support afventes.

## Indhold

Hjemmesiden består af 7 offentlige indholdssider samt en 404-side:

- Forside
- Biografi
- Samlet malerioversigt
- Olie
- Akryl
- Akvarel
- Kontakt
- 404

Gallerierne indeholder i alt 35 værker:

- 11 oliemalerier
- 3 akrylmalerier
- 21 akvareller

Maleridata vedligeholdes i `src/data/paintings.ts`.

## Krav

- Node.js 22.12.0 eller nyere
- npm

Projektets anbefalede Node-version står i `.nvmrc`. Hvis versionen ikke allerede
er installeret lokalt, bruges:

```bash
nvm install 22.12.0
nvm use
npm run build
```

## Lokal udvikling

Installér afhængigheder:

```bash
npm install
```

Start udviklingsserveren:

```bash
npm run dev
```

Byg produktionsversionen:

```bash
npm run build
```

Se produktionsbuildet lokalt:

```bash
npm run preview
```

Det statiske build skrives til `dist/`.

## Vercel

Projektet er forbundet til GitHub og deployet på Vercel. Push til `main` er den
normale deploymentvej. Der skal ikke foretages et manuelt deploy som del af
almindelig udvikling.

Se [DEPLOYMENT.md](./DEPLOYMENT.md) for den aktuelle GitHub-, Vercel- og
DNS-status.

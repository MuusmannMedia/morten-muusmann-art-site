# Morten Muusmann

En statisk kunst- og portfolio-hjemmeside for kunstmaler og grafisk designer Morten Muusmann. Siden præsenterer værker i akvarel, olie og akryl i et enkelt, responsivt galleri.

## Teknologi

- Astro 6
- TypeScript
- Statisk HTML og CSS
- Klargjort til Vercel

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

Projektets anbefalede Node-version står i `.nvmrc`. Med nvm kan den aktiveres med:

```bash
nvm use
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

Projektet er klar til at blive importeret som et Astro-projekt i Vercel. Se [DEPLOYMENT.md](./DEPLOYMENT.md) for GitHub-, Vercel- og DNS-vejledning.

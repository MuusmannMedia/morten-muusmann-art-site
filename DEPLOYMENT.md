# GitHub- og Vercel-deployment

Denne vejledning beskriver den senere publicering. Den udfører ikke en deploy og ændrer ikke DNS.

## 1. Opret et GitHub-repository

1. Log ind på GitHub.
2. Vælg **New repository**.
3. Vælg et navn, for eksempel `morten-muusmann-art-site`.
4. Vælg Public eller Private efter behov.
5. Opret helst repositoryet uden automatisk README, `.gitignore` eller licens, fordi projektet allerede indeholder de relevante filer.

Det anbefales, at `morten-muusmann-art-site/` bliver roden i GitHub-repositoryet. På den måde indeholder repositoryet kun den nye Astro-side og ikke legacy-materialet i den overordnede mappe.

## 2. Push projektet til GitHub

Kør følgende fra `morten-muusmann-art-site/`:

```bash
git init
git add .
git commit -m "Initial Astro portfolio site"
git branch -M main
git remote add origin https://github.com/DIT-BRUGERNAVN/morten-muusmann-art-site.git
git push -u origin main
```

Erstat `DIT-BRUGERNAVN` og repository-navnet med de rigtige værdier.

Kontrollér før første commit, at genererede og lokale filer ikke er staged:

```bash
git status
```

`node_modules/`, `dist/`, `.astro/`, `.vercel/`, miljøfiler og lokale cache-/logfiler er dækket af `.gitignore`.

## 3. Importér projektet i Vercel

1. Log ind på Vercel.
2. Vælg **Add New → Project**.
3. Forbind GitHub, og vælg det nye repository.
4. Kontrollér disse indstillinger:

   | Indstilling | Værdi |
   |---|---|
   | Framework Preset | Astro |
   | Build Command | `npm run build` |
   | Output Directory | `dist` |
   | Node.js Version | 22.12 eller nyere |

5. Hvis Astro-projektet mod forventning ligger i et større repository, skal `morten-muusmann-art-site` vælges som **Root Directory**.
6. Start først deployet, når repository, build-indstillinger og eventuelle miljøvariabler er gennemgået.

Projektet er statisk og kræver ingen Vercel-serveradapter.

## 4. Domæne og DNS

Domænet `mortenmuusmann.dk` kan peges til Vercel senere via projektets domæneindstillinger.

DNS må ikke ændres ukritisk. Eksisterende mail kan være afhængig af domænets MX-, SPF-, DKIM- og eventuelle DMARC-records. Kontrollér derfor altid de aktuelle MX-records og øvrige mailrelaterede DNS-records, før nameservere eller DNS-zone ændres.

En sikker fremgangsmåde er normalt at:

1. Registrere domænet i Vercel.
2. Notere de DNS-records, Vercel anbefaler.
3. Dokumentere den eksisterende DNS-zone.
4. Bekræfte, at mail-records bevares.
5. Ændre kun de nødvendige web-records.

Der er ikke foretaget nogen Vercel-deploy eller DNS-ændring som del af denne klargøring.

# KaaiSpots — The Game

Een verborgen-parel-project voor The Game (Erasmushogeschool Brussel, 2026).
Team: **Lucas · Milan · Zeno**.

De app: een kaart met spots rond Campus Kaai (eten, drinken, studeren, chillen, cultuur, gratis), met detailpagina per spot.

- [`KaaiSpots.html`](KaaiSpots.html) — hoofdpagina (kaart + lijst + filters)
- [`spot.html`](spot.html) — detailpagina (`spot.html?id=...`)
- [`spots.js`](spots.js) — gedeelde data (SPOTS, CAMPUS, CAT_GLYPH, CAT_CLASS)

---

## Taakverdeling

### 1. Site afwerken (KaaiSpots)

**Lucas — content & data**
- [X ] Verifieer alle 12 spots in `spots.js`: echte coords, openingsuren, prijzen, menu's, foto-rechten
- [ ] Finale NL-copy voor hero, footer, empty states; laten proofreaden
- [ ] Beslissen over EN-vertaling (toggle is nu dood) — wiren of weghalen
- [ ] Kleurvlak-thumbnails vervangen door echte foto's, OF bewust als stijlkeuze houden (verdedigen in reflectie)

**Milan — frontend polish**
- [ ] "Open nu"-toggle echt laten filteren op `hours` (nu mock)
- [ ] "Gratis"-categorie-chip echt laten filteren (`price === 0`)
- [ ] Favicon + OG-image + meta description toevoegen (voor sharing)
- [ ] Testen op iPhone Safari + Android Chrome; mobile-default tab heroverwegen (`view-list` vs `view-map`)
- [ ] Lighthouse-pass — accessibility + perf

**Zeno — deploy & infra**
- [ ] Host kiezen: Netlify / Vercel / GitHub Pages → deployen vanuit de repo
- [ ] Custom domein of subdomein (bv. `kaaispots.be` of `kaaispots.netlify.app`)
- [ ] GitHub-remote toevoegen aan de theGame-repo en pushen (zodat deploy kan koppelen)
- [ ] "Suggesteer een spot"-mailto vervangen door een echt form (Tally / Google Form / Typeform)

### 2. Data-deel (capteren → verwerken → visualiseren)

**Lucas**
- [ ] Anonieme analytics: Plausible of Umami (privacy-vriendelijk, EU-conform). Tracken: pin-clicks, filter-gebruik, "Meer info"-clicks per spot, route-clicks
- [ ] Suggestie-form opzetten (Google Form / Tally) → output in een Google Sheet

**Milan**
- [ ] Make.com- of n8n-flow:
    - trigger: nieuwe rij in Google Sheet (suggestie-form)
    - acties: valideren → team notifiëren in Discord/mail → optioneel naar moderatie-queue
- [ ] Tweede flow: wekelijkse analytics-digest → mail naar team

**Zeno**
- [ ] Kleine `/stats.html` dashboardpagina in dezelfde repo:
    - Meest geklikte spots (bar chart)
    - Filter-gebruik breakdown
    - Suggesties over tijd
    - Chart.js of Observable Plot; data uit Plausible public API of een stats-JSON

### 3. Presentatie & marketing-portfolio

**Lucas**
- [ ] Instagram/TikTok-account `@kaaispots` — 3-5 korte video's: "spot of the week", student vox-pops, walk-from-campus timelapses
- [ ] Posters/flyers (A4 + A5) geprint voor campus-borden — QR naar site

**Milan**
- [ ] Pitch deck (.pptx, ~10 slides) — probleem, oplossing, demo, data, marketing, team
- [ ] Demo-video (90 sec screen recording met voice-over), embed op landing-page

**Zeno**
- [ ] Landing/marketing-pagina (los van de app) — `index.html` die de parel verkoopt en doorlinkt naar `KaaiSpots.html`
- [ ] E-mailhandtekening + Linktree-stijl pagina met alle assets

### 4. Proces & reflectie (cursusvereisten)

**Iedereen**
- [ ] Samenwerkings-tool kiezen **en actief gebruiken** (Notion, Linear, Trello, ClickUp). Notion is wellicht handigst, ook voor de reflectie. Wekelijks documenteren
- [ ] Elk schrijft eigen zelfreflectie — focus op: *waarom* welke tool, wat liep mis, wat verraste
- [ ] Eigen **Definition of Done** schrijven (rubric vereist dit) — criteria die jullie zelf vooropstelden vóór de score-verdediging
- [ ] Verwachte score beargumenteren tegenover de rubric

**Vibe-coding bewijs (vereist)**
- [ ] Chat-transcripts bewaren bij gebruik van Claude/ChatGPT/etc. De chat die KaaiSpots produceerde staat als referentie; doe hetzelfde voor elk volgend AI-stuk. Verzamel in `/docs/vibe-coding/`

---

## Lokaal draaien

Open `KaaiSpots.html` in een browser. Geen build-stap; alle dependencies (Leaflet, Google Fonts, CARTO tiles) komen via CDN.

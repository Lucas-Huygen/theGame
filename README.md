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

**Lucas — deploy & infra**
- [ ] **Site deployen op Netlify** vanuit deze repo (drag-and-drop of Git-koppeling)
- [ ] Custom domein of subdomein (bv. `kaaispots.be` of `kaaispots.netlify.app`)
- [ ] GitHub-remote toevoegen aan de theGame-repo en pushen (zodat Netlify auto-deploy kan koppelen)
- [ ] "Suggesteer een spot"-mailto vervangen door een echt form (Tally / Google Form / Typeform)

**Milan — frontend polish**
- [ ] "Open nu"-toggle echt laten filteren op `hours` (nu mock)
- [ ] "Gratis"-categorie-chip echt laten filteren (`price === 0`)
- [ ] Favicon + OG-image + meta description toevoegen (voor sharing)
- [ ] Testen op iPhone Safari + Android Chrome; mobile-default tab heroverwegen (`view-list` vs `view-map`)
- [ ] Lighthouse-pass — accessibility + perf

**Zeno — content & data**
- [ ] Verifieer alle 12 spots in `spots.js`: echte coords, openingsuren, prijzen, menu's, foto-rechten
- [ ] Finale NL-copy voor hero, footer, empty states; laten proofreaden
- [ ] Beslissen over EN-vertaling (toggle is nu dood) — wiren of weghalen
- [ ] Kleurvlak-thumbnails vervangen door echte foto's, OF bewust als stijlkeuze houden (verdedigen in reflectie)

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

## Tools testen (experiment > resultaat)

De cursus zegt letterlijk *"experiment is belangrijker dan resultaat"*. Pak per categorie **2 tools, gebruik ze allebei, vergelijk en documenteer waarom je een winnaar koos**. Dat geeft meteen materiaal voor de zelfreflectie.

### LLM's — test **Claude vs ChatGPT**
- Doe dezelfde taak in beide (bv. een social post schrijven, of een stuk copy verbeteren)
- Vergelijk: kwaliteit, snelheid, toon, hoeveel prompts je nodig had
- Documenteer welke jullie kiezen voor welke use-case (Claude voor code, ChatGPT voor brainstorm, …)
- Bonus: probeer Gemini erbij voor lange-context taken (heel het Google Sheet samenvatten)

### Automation — test **Make.com vs n8n**
- Bouw dezelfde flow in beide: *Google Sheet rij → valideren → Discord/mail-notificatie*
- Vergelijk: setup-tijd, hoe visueel, gratis-tier-limieten, hoe het voelt om te debuggen
- Make = makkelijker voor beginners, n8n = open-source en zelf-hostbaar
- Documenteer welke jullie definitief gebruiken en waarom

### Analytics — test **Plausible vs eigen `localStorage`-logger**
- Plausible: privacy-vriendelijk pageview-tracking, externe tool
- Eigen logger: schrijf in `/stats.html` zelf events naar localStorage, visualiseer met Chart.js
- Vergelijk: privacy, controle, gemak, wat de docent waarschijnlijk wil zien
- Documenteer de keuze

### Forms — test **Tally vs Google Forms**
- Beide het "Suggesteer een spot"-formulier opzetten
- Vergelijk: design, embed-mogelijkheid, integratie met Make/n8n
- Documenteer

### Vibe-coding — test **Claude Code vs Cursor**
- Beide laten een klein stukje van de site genereren (bv. de stats-pagina)
- Bewaar de chats als bewijs (`/docs/vibe-coding/`)
- Documenteer welke prompts werkten, welke niet

---

## Waar samen documenteren?

**Aanrader: Notion** (gratis voor teams van 3, alles op één plek)
- Eén workspace `KaaiSpots — The Game` met paginas:
    - `Tasks` (kanban: To do / Doing / Done) — vervangt deze README-checkboxes naarmate jullie vorderen
    - `Tool-vergelijkingen` — één pagina per test hierboven, met conclusie
    - `Wekelijks logboek` — kort wat elk gedaan heeft + blockers
    - `Vibe-coding chats` — exports/screenshots van AI-gesprekken
    - `Reflecties` — drie sub-pagina's, één per persoon
    - `Definition of Done` + `Score-argumentatie`
- Voordeel: combineert tasks + docs + reflectie. Examinatoren kunnen één link openen.

**Alternatieven:**
- **Google Docs + Drive** — simpelst, iedereen kent het, maar tasks zijn rommelig
- **GitHub `/docs/`-map in deze repo** — mooie nerd-move ("we hebben alles in markdown versioned"), maar zwaar voor reflectie-schrijven
- **Linear** — beste pure task-tool, maar geen plek voor lange docs → dan combineren met Notion of Docs

Mijn keuze: **Notion als hoofd, deze repo voor code + chat-exports**. Eén Notion-link in de finale inlevering.

➡️ Een kant-en-klare Notion-template staat in [`notion-template/`](notion-template/). Importeer alle `.md`-bestanden tegelijk via Notion → Settings → Import → Markdown & CSV. Zie [`notion-template/README.md`](notion-template/README.md).

---

## Lokaal draaien

Open `KaaiSpots.html` in een browser. Geen build-stap; alle dependencies (Leaflet, Google Fonts, CARTO tiles) komen via CDN.

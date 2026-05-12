# Make.com setup — 3 forms → 1 Google Sheet

**Doel:** Tally, Google Forms én Typeform laten doorstromen naar dezelfde **`KaaiSpots — Suggesties`** Sheet. Zo kunnen we de 3 tools eerlijk vergelijken (welke krijgt meer submissions? welke kwaliteit?) en hebben we 1 centraal review-overzicht.

**Tijdsinschatting:** ±45 min totaal (15 min per form).

---

## 0. Eenmalig: accounts + Sheet

1. **Make-account** aanmaken op [make.com](https://www.make.com) — gratis tier = 1000 ops/maand, ruim voldoende.
2. **Google Sheet** maken: `KaaiSpots — Suggesties` met deze kolommen (eerste rij):

   | A | B | C | D | E | F | G | H | I | J | K |
   |---|---|---|---|---|---|---|---|---|---|---|
   | Timestamp | Bron | Naam spot | Adres / Maps | Categorie | Gratis? | Prijs | Uren | Waarom tof | Foto-URL | Tipper | E-mail | Status |

   **Bron** = `tally` / `google` / `typeform` (zo zien we welke form het meest gebruikt wordt).
   **Status** = leeg → vullen we handmatig met `review` / `live` / `dupe` / `rejected`.

3. Sheet delen met je Make-account (View+Edit) — Make moet erbij kunnen.

---

## 1. Tally → Sheet (Scenario 1)

### In Tally
1. Open je form (`obKK0b`) → tab **Integrations** → zoek **Webhooks** → *Connect*.
2. Laat URL even leeg, we vullen dat zo in.

### In Make
1. New scenario → blok **Tally → Watch New Submissions**.
2. Make geeft je een webhook-URL → kopieer.
3. Plak terug in Tally's webhook-veld → **Save**.
4. Test: vul de Tally-form 1× in op `suggest.html` → in Make verschijnt de data.
5. Voeg blok toe: **Google Sheets → Add a Row** → kies je Sheet.
6. Map de velden:
   - Timestamp → `{{now}}`
   - Bron → `tally` (hard-coded)
   - Naam spot → veld 1 uit Tally
   - …rest in dezelfde volgorde
7. Run once → check of er een rij verschijnt. ✅
8. Activeer scenario (toggle ON, "every 15 min" of "instant").

---

## 2. Google Forms → Sheet (Scenario 2)

⚠️ **Truc:** Google Forms heeft géén native webhook. Twee opties:

### Optie A — Direct in dezelfde Sheet (zonder Make)
1. In je Google Form → tab **Responses** → groen Sheet-icoontje → "Create new spreadsheet" → kies *Select existing → KaaiSpots — Suggesties*.
2. ⚠️ Google maakt een **apart tabblad** ("Form Responses 1") — kolommen matchen niet met onze hoofdtab.
3. **Oplossing:** voeg in cel `A2` van onze hoofdtab een `IMPORTRANGE` of `QUERY` formule toe om Form Responses te kopiëren met onze kolom-volgorde + `"google"` als bron.

   ```
   =QUERY('Form Responses 1'!A:J; "SELECT A, 'google', B, C, D, …"; 0)
   ```

### Optie B — Met Make (uniform met de andere 2)
1. New scenario → **Google Sheets → Watch Rows** op het "Form Responses 1" tabblad.
2. Tweede blok: **Google Sheets → Add a Row** naar onze hoofdtab.
3. Map velden + zet Bron = `google`.

**Aanbeveling:** Optie B — uniforme flow, makkelijker te debuggen.

---

## 3. Typeform → Sheet (Scenario 3)

### In Typeform
1. Open form `AnMkzP8O` → **Connect** tab → zoek **Webhooks** of **Make**.
2. Typeform heeft een **native Make-connector** — gewoon doorklikken en authoriseren.

### In Make
1. New scenario → blok **Typeform → Watch Responses** → kies je form.
2. Test: vul Typeform 1× in op `suggest.html` → data verschijnt in Make.
3. Voeg blok toe: **Google Sheets → Add a Row** → zelfde Sheet als de andere 2.
4. Map velden, Bron = `typeform`.
5. Activeer.

---

## 4. Test alle 3 (eindcheck)

Vul elke form 1× in met testdata:

| Form        | Test-input naam spot |
|-------------|----------------------|
| Tally       | "TEST — Tally spot"     |
| Google      | "TEST — Google spot"    |
| Typeform    | "TEST — Typeform spot"  |

In je Sheet moeten **3 rijen** verschijnen, elk met de juiste **Bron**. Daarna mag je die test-rijen verwijderen.

---

## 5. Volgende stappen (later)

- [ ] **Discord-notificatie** toevoegen: nieuw blok na "Add a Row" → Discord "Send a Message" naar `#spots-suggesties`.
- [ ] **Dedup-filter:** Make-router met "Filter: Naam spot bestaat al in Sheet" → Status auto op `dupe`.
- [ ] **Auto-publish:** als Status = `live` → schrijf naar `spots.json` via GitHub API → site update automatisch.
- [ ] **Stats:** in de Sheet een tabblad `Stats` met `=COUNTIF(B:B; "tally")` etc. → meten welke form het meest gebruikt wordt → onderbouwing voor de winnaar-keuze.

---

## Troubleshooting

- **"Webhook fires niet"** → check in Tally/Typeform of de webhook *active* staat (groen vinkje).
- **"Velden zijn leeg in Sheet"** → in Make: open de execution log, kijk welke velden de form effectief stuurt — namen kunnen verschillen (Tally gebruikt veld-labels, Typeform interne IDs).
- **"Quota op"** → Make gratis = 1000 ops/maand. Elke submission = 2-3 ops. Ruim voldoende voor onze schaal.

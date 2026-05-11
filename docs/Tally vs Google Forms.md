# Form-tool vergelijking: Tally vs Google Forms vs Typeform

**Use-case:** "Suggesteer een spot"-formulier voor KaaiSpots — studenten die een chill / vibe / eet-plek rond Campus Kaai willen tippen (tijdens pauze, voor/na school). Antwoorden moeten doorvloeien naar onze Make/n8n-flow (Sheet → validatie → Discord/mail).

**Test-pagina:** `/suggest.html` — embedt alle 3 in tabs zodat we ze naast elkaar kunnen proberen.

**Tester:** Lucas
**Datum:** 2026-05-11

## Scores per tool

| Criterium                          | Tally | Google Forms | Typeform |
|------------------------------------|-------|--------------|----------|
| Design / past bij KaaiSpots-look   | 5/5   | 2/5          | 4/5      |
| Out-of-the-box prebuilds           | 5/5   | 3/5          | 4/5      |
| Snelheid van opzetten              | 4/5   | 5/5          | 5/5 ⚡   |
| Doet wat je vraagt                 | 5/5   | 4/5          | 4/5      |
| Eindcijfer                         | **8/10** | 5/10      | 8/10     |

\* Velden in form: naam spot · adres / map-link · categorie (chill / eten / studeren / vibe) · gratis ja/nee · prijs · openingsuren · waarom tof · foto · jouw naam · e-mail

## Notities per tool

### Tally — 8/10
- Live URL: https://tally.so/embed/obKK0b
- Embed-snippet werkt: ✅
- Webhook naar Make: ☐ (nog te testen)
- **Opmerkingen:** Heel clean qua design. Sterke prebuilds, doet exact wat je vraagt zonder gedoe. Goeie default.

### Google Forms — 5/10
- Live URL: https://docs.google.com/forms/d/e/1FAIpQLSeCXhlF_8TPp5V8xkX9zwZVf5ewz6-MGHH-UDU9qzZf4PDAhw/viewform
- Embed-snippet werkt: ✅
- Naar Google Sheet → Make: ☐ (Sheet-koppeling is wel gratis en snel als we daarvoor kiezen)
- **Opmerkingen:** Heel simpel en droog. Doet wat je vraagt maar past niet bij de KaaiSpots-look. Wint enkel op "gratis + voorspelbaar".

### Typeform — 8/10
- Live URL: https://form.typeform.com/to/AnMkzP8O
- Embed-snippet werkt: ✅
- Webhook naar Make: ☐ (nog te testen)
- **Opmerkingen:** AI-prompt bouwt de hele form in ±2 minuten — dat is gigantisch verschil qua workflow. Mooi op mobiel (één-vraag-per-scherm). ⚠️ Let op de gratis-tier (10 antwoorden/maand) — kan krap worden als de site echt loopt.

## Conclusie

**Winnaar:** Tally (met Typeform als sterke runner-up)

**Waarom:**
- **Tally** wint op *design + prebuilds + geen limiet op gratis-tier*. Past visueel het best bij de KaaiSpots-stijl en we hebben geen submission-limit waar we ons zorgen over moeten maken.
- **Typeform** is even goed (8/10) en de AI-builder is een killer-feature voor snel itereren — maar de 10/maand gratis-tier is een blocker voor productie.
- **Google Forms** valt af op design — past niet bij de site-look, ook al is 'ie functioneel prima.

**Live formulier (wordt in `suggest.html` als hoofd-embed gezet):**
→ Tally — https://tally.so/embed/obKK0b

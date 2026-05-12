# Analytics-tool vergelijking: Plausible vs Umami

**Use-case:** Anonieme, privacy-vriendelijke analytics voor KaaiSpots. Geen cookies, EU/GDPR-conform, geen Google Analytics. We willen pageviews + 4 custom events tracken: `pin_click`, `filter_use`, `more_info_click`, `route_click`.

**Test-pagina:** [`/analytics.html`](../analytics.html) — toont beide dashboards naast elkaar via iframe-embeds.

**Setup:** beide scripts draaien parallel in `index.html` + `spot.html`. `analytics.js` is een abstractie die elk event naar beide tools stuurt → identieke dataset, eerlijke vergelijking.

**Tester:**
**Datum:**

---

## Wat we tracken

| Event              | Trigger                       | Props                       |
|--------------------|-------------------------------|-----------------------------|
| `pageview`         | elke pagina-load              | (automatisch)               |
| `pin_click`        | klik op kaart-marker          | `spot`, `name`              |
| `filter_use`       | category / price / open_now / reset chip | `filter`, `value` |
| `more_info_click`  | "Meer info →" in popup        | `spot`                      |
| `route_click`      | "Route" knop (popup + detail) | `spot`, `source`            |
| `suggest_open`     | klik op "+ Suggesteer"        | `source`                    |

---

## Criteria (1 = slecht, 5 = top)

| Criterium                          | Plausible | Umami |
|------------------------------------|-----------|-------|
| Setup-tijd                         |           |       |
| Cookieless / GDPR-vriendelijk      |           |       |
| Dashboard-UX                       |           |       |
| Custom events bekijken             |           |       |
| Embedbaar in eigen pagina          |           |       |
| Gratis-tier voor schoolproject     |           |       |
| Data-export (CSV/API)              |           |       |
| Mobile dashboard                   |           |       |

---

## Notities per tool

### Plausible — [plausible.io](https://plausible.io)
- **Hosted by:** Plausible (EU-servers, Duitsland).
- **Prijs:** vanaf €9/maand, **30 dagen gratis trial**, geen forever-free tier.
- **Account:** ☐
- **Site toegevoegd:** ☐ (domein: `kaaispots.be` of netlify-URL)
- **Shared dashboard-link werkt:** ☐
- **Custom events zichtbaar:** ☐
- **Opmerkingen:**

### Umami — [umami.is](https://umami.is)
- **Hosted by:** Umami Cloud OF zelf hosten (Docker, open-source).
- **Prijs:** **gratis tot 10K events/maand** op cloud; self-host = 0€ maar je host het zelf.
- **Account:** ☐
- **Site toegevoegd:** ☐ (krijg `data-website-id` UUID)
- **Shared URL werkt:** ☐
- **Custom events zichtbaar:** ☐
- **Opmerkingen:**

---

## Conclusie

**Winnaar:**
**Waarom:**
**Live setup (welke staat actief in productie):**

---

## Voor wie geen externe tool wil: alternatief

In de README staat ook *"Plausible vs eigen localStorage-logger"* als optie. Als beide externe tools afvallen op privacy/kost, kunnen we events lokaal in `localStorage` schrijven en visualiseren in een eigen `/stats.html`. `analytics.js` is daar al klaar voor: we hoeven enkel een 3e `send`-target toe te voegen.

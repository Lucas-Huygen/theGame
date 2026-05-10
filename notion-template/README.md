# Notion-template — KaaiSpots

Hoe importeren:

1. Ga in Notion naar **Settings & members → Settings → Import**
2. Kies **Markdown & CSV**
3. Selecteer alle `.md`-bestanden in deze map (`notion-template/`) tegelijk
4. Notion maakt automatisch één pagina per bestand
5. Sleep ze daarna onder een hoofdpagina **KaaiSpots — The Game** zodat je deze structuur krijgt:

```
KaaiSpots — The Game
├── 00 — Hub
├── 01 — Tasks
├── 02 — Tool-vergelijkingen
│   ├── Claude vs ChatGPT
│   ├── Make.com vs n8n
│   ├── Plausible vs localStorage logger
│   ├── Tally vs Google Forms
│   └── Claude Code vs Cursor
├── 03 — Wekelijks logboek
├── 04 — Vibe-coding chats
├── 05 — Reflecties
│   ├── Reflectie — Lucas
│   ├── Reflectie — Milan
│   └── Reflectie — Zeno
├── 06 — Definition of Done
└── 07 — Score-argumentatie
```

Tip: zet `01 — Tasks` om naar een **Board** view nadat het geïmporteerd is (de checkboxes uit de README worden lijst-items, je kan ze converten naar database-items via `/board`).

/* ===== KaaiSpots — Data & Shared Logic ===== */
window.CAMPUS = [50.84232308508647, 4.322822277113688];

window.CAT_GLYPH = {
  Eten: '🥖', Drinken: '☕', Studeren: '📖',
  Chillen: '🌳', Cultuur: '◐', Gratis: '∅'
};
window.CAT_CLASS = {
  Eten: 'cat-eten', Drinken: 'cat-drinken', Studeren: 'cat-studeren',
  Chillen: 'cat-chillen', Cultuur: 'cat-cultuur', Gratis: 'cat-gratis'
};

const TRANSLATIONS = {
  nl: {
    tagline: "door studenten, voor studenten",
    heroTitle: 'De buurt rond Campus Kaai, <span class="accent">eindelijk in kaart gebracht.</span>',
    heroDesc: "plekken om te eten, studeren, chillen of gewoon te ontdekken — allemaal dicht bij campus Kaai.",
    heroCount: "plekken",
    catEten: "Eten",
    catDrinken: "Drinken",
    catStuderen: "Studeren",
    catChillen: "Chillen",
    catCultuur: "Cultuur",
    catGratis: "Gratis",
    openNow: "Open nu",
    reset: "Reset ✕",
    mapTab: "Kaart",
    listTab: "Lijst",
    listTitle: "Spots in de buurt",
    results: "resultaten",
    footerProject: "Een project voor The Game",
    suggestSpot: "+ Suggesteer een spot",
    backToMap: "← terug naar de kaart",
    moreInfo: "Meer info & menu →",
    route: "Route ↗",
    walkMin: "min wandelen",
    walkMinCampus: "min wandelen vanaf campus",
    noSpots: "Geen spots gevonden",
    resetFilter: "Probeer een filter weg te halen of klik reset.",
    emptyList: "<strong>Geen spots gevonden</strong>Probeer een filter weg te halen of klik reset.",
    fromCampus: "Vanaf campus",
    hours: "Openingsuren",
    practical: "Praktisch",
    address: "Adres",
    phone: "Telefoon",
    website: "Website",
    payment: "Betaling",
    studentPerk: "Studentenvoordeel",
    insiderTip: "Insider tip.",
    backToMapDetail: "← Terug naar de kaart",
    routeGoogle: "Route via Google Maps →",
    favTeam: "★ Favoriet van het team",
    nowOpen: "Nu open",
    spotNotFound: "Spot niet gevonden",
    spotNotFoundDesc: 'Geen spot met id "<span class="mono">{id}</span>". Misschien is hij verwijderd, of de link klopt niet.',
    whatTheySell: "Wat ze verkopen",
    whatToSee: "Wat er te zien is",
    facilities: "Faciliteiten",
    whyHere: "Waarom hier",
    closed: "Gesloten",
    everyDay: "Alle dagen",
    openUntil: "geopend",
  },
  en: {
    tagline: "by students, for students",
    heroTitle: 'The neighborhood around Campus Kaai, <span class="accent">finally mapped out.</span>',
    heroDesc: "places to eat, study, chill or just discover — all close to campus Kaai.",
    heroCount: "places",
    catEten: "Eat",
    catDrinken: "Drink",
    catStuderen: "Study",
    catChillen: "Chill",
    catCultuur: "Culture",
    catGratis: "Free",
    openNow: "Open now",
    reset: "Reset ✕",
    mapTab: "Map",
    listTab: "List",
    listTitle: "Spots nearby",
    results: "results",
    footerProject: "A project for The Game",
    suggestSpot: "+ Suggest a spot",
    backToMap: "← back to map",
    moreInfo: "More info & menu →",
    route: "Route ↗",
    walkMin: "min walk",
    walkMinCampus: "min walk from campus",
    noSpots: "No spots found",
    resetFilter: "Try removing a filter or click reset.",
    emptyList: "<strong>No spots found</strong>Try removing a filter or click reset.",
    fromCampus: "From campus",
    hours: "Opening hours",
    practical: "Practical",
    address: "Address",
    phone: "Phone",
    website: "Website",
    payment: "Payment",
    studentPerk: "Student perk",
    insiderTip: "Insider tip.",
    backToMapDetail: "← Back to map",
    routeGoogle: "Route via Google Maps →",
    favTeam: "★ Team favorite",
    nowOpen: "Open now",
    spotNotFound: "Spot not found",
    spotNotFoundDesc: 'No spot with id "<span class="mono">{id}</span>". Maybe it was deleted, or the link is broken.',
    whatTheySell: "What they sell",
    whatToSee: "What to see",
    facilities: "Facilities",
    whyHere: "Why here",
    closed: "Closed",
    everyDay: "Every day",
    openUntil: "open",
  }
};

let currentLang = 'nl';

function updateLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  
  // Update static elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  // Update language toggle buttons
  const langButtons = document.querySelectorAll('#langToggle button');
  langButtons.forEach(btn => {
    btn.classList.toggle('on', btn.getAttribute('data-lang') === lang);
  });

  // Trigger re-renders
  if (typeof applyFilters === 'function') applyFilters();
  if (typeof renderDetail === 'function') renderDetail();
}

// Global lang toggle listener
document.addEventListener('click', e => {
  const btn = e.target.closest('#langToggle button');
  if (btn) {
    updateLanguage(btn.getAttribute('data-lang'));
  }
});

window.SPOTS = [
  {
    id: 'castelao', name: 'Établissement Castelao',
    cats: ['Eten'], price: 1, coords: [50.84009017991707, 4.3258508412449075],
    desc: 'Onze vaste broodjeszaak. Belegde baguette, vriendelijke bazin, geen poespas.',
    desc_en: 'Our regular sandwich shop. Filled baguette, friendly owner, no nonsense.',
    walk: 4, color: '#FF6B35', favorite: true,
    address: 'Bergensesteenweg 258, 1070 Anderlecht',
    phone: '025220341',
    hours: {
      'Zondag':     'Gesloten',
      'Maandag':    '10:00 – 15:30',
      'Dinsdag':    '10:00 – 15:30',
      'Woensdag':   '10:00 – 15:30',
      'Donderdag':  '10:00 – 15:30 ',
      'Vrijdag':    '10:00 – 15:30',
      'Zaterdag':   'Gesloten'
    },
    hours_en: {
      'Sunday':     'Closed',
      'Monday':     '10:00 – 15:30',
      'Tuesday':    '10:00 – 15:30',
      'Wednesday':  '10:00 – 15:30',
      'Thursday':   '10:00 – 15:30 ',
      'Friday':     '10:00 – 15:30',
      'Saturday':   'Closed'
    },
    long: 'Een tegelvloer uit 1962, een toonbank vol charcuterie en madame Castelao die elke student bij naam kent. Studentenkorting (-10%) op vertoon van je EhB-kaart, en als je vraagt om "den dagschotel" geeft ze meestal iets dat niet op de kaart staat.',
    long_en: 'A tiled floor from 1962, a counter full of charcuterie and Madame Castelao who knows every student by name. Student discount (-10%) upon showing your EhB card, and if you ask for "the daily special" she usually gives you something not on the menu.',
    why: ['Goedkoopste warme lunch in straal van 500m', 'Studentenkorting met EhB-kaart', '4 min wandelen vanaf de campus', 'Wifi vragen mag, maar werkt traag'],
    why_en: ['Cheapest hot lunch within a 500m radius', 'Student discount with EhB card', '4 min walk from campus', 'You can ask for Wifi, but it works slowly'],
    menu: [
      { section: 'Belegde broodjes', section_en: 'Filled sandwiches',
        items: [
          { name: 'Boterham Boerenham', name_en: 'Farmer\'s Ham Sandwich', desc: 'Hesp, augurkjes, mosterd', desc_en: 'Ham, pickles, mustard', price: '3,50' },
          { name: 'Baguette Italien',   name_en: 'Italian Baguette', desc: 'Salami, mozzarella, tomaat, pesto', desc_en: 'Salami, mozzarella, tomato, pesto', price: '5,80' },
          { name: 'Vegabroodje',        name_en: 'Veggie Sandwich', desc: 'Hummus, geroosterde paprika, rucola', desc_en: 'Hummus, roasted bell pepper, arugula', price: '5,20' },
          { name: 'Croque Castelao',    name_en: 'Croque Castelao', desc: 'Huisspecialiteit — kaas, hesp, bechamel', desc_en: 'House specialty — cheese, ham, béchamel', price: '6,50' }
        ]
      },
      { section: 'Warm', section_en: 'Hot',
        items: [
          { name: 'Soep van de dag',    name_en: 'Soup of the day', desc: 'Met stuk brood', desc_en: 'With a piece of bread', price: '3,00' },
          { name: 'Spaghetti bolognaise', name_en: 'Spaghetti bolognaise', desc: 'Familierecept', desc_en: 'Family recipe', price: '7,50' },
          { name: 'Dagschotel',         name_en: 'Daily special', desc: 'Wisselt — vraag aan de toog', desc_en: 'Changes — ask at the counter', price: '8,90' }
        ]
      },
      { section: 'Drank', section_en: 'Drinks',
        items: [
          { name: 'Koffie',             name_en: 'Coffee', desc: 'Klein / groot', desc_en: 'Small / large', price: '1,80 / 2,40' },
          { name: 'Verse jus',          name_en: 'Fresh juice', desc: 'Sinaas, geperst per glas', desc_en: 'Orange, squeezed per glass', price: '3,50' },
          { name: 'Pintje',             name_en: 'Beer', desc: 'Jupiler, na 11u', desc_en: 'Jupiler, after 11am', price: '2,80' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact', 'Payconiq'],
    student_perk: '−10% op vertoon van EhB-kaart',
    student_perk_en: '−10% on presentation of EhB card',
    tips: 'Donderdag is dagschotel-dag (lasagne). Ga vroeg, om 12u30 staat er rij.',
    tips_en: 'Thursday is daily special day (lasagna). Go early, there is a line at 12:30pm.'
  },

  {
    id: 'kafka', name: 'Café Kafka',
    cats: ['Drinken','Studeren'], price: 1, coords: [50.84927761999179, 4.3480804],
    website: 'https://kaffabar.be',
    desc: 'Brak lichtinval, sterke koffie, stopcontacten op elke tafel. Stilteplek tot 17u.',
    desc_en: 'Dim lighting, strong coffee, power outlets on every table. Quiet spot until 5pm.',
    walk: 6, color: '#4A2FAB',
    address: 'Rue des Poissonniers 21, 1070 Anderlecht',
    hours: {
      'Maandag':    '08:00 – 22:00',
      'Dinsdag':    '08:00 – 22:00',
      'Woensdag':   '08:00 – 22:00',
      'Donderdag':  '08:00 – 23:00',
      'Vrijdag':    '08:00 – 00:00',
      'Zaterdag':   '10:00 – 00:00',
      'Zondag':     '10:00 – 20:00'
    },
    hours_en: {
      'Monday':     '08:00 – 22:00',
      'Tuesday':    '08:00 – 22:00',
      'Wednesday':  '08:00 – 22:00',
      'Thursday':   '08:00 – 23:00',
      'Friday':     '08:00 – 00:00',
      'Saturday':   '10:00 – 00:00',
      'Sunday':     '10:00 – 20:00'
    },
    long: 'Voormalig boekenwinkeltje omgebouwd tot café. De achterzaal is officieel "stiltezone" tot 17u — laptops welkom, telefoongesprekken niet. Na 17u draait de muziek aan en wordt het een gewoon buurtcafé.',
    long_en: 'Former bookstore converted into a café. The back room is officially a "quiet zone" until 5pm — laptops welcome, phone calls are not. After 5pm, the music turns on and it becomes a regular neighborhood bar.',
    why: ['Stopcontact bij elke tafel', 'Wifi-paswoord op het bord (KAFKA2026)', 'Koffie blijft 1,80 — al jaren', 'Achterzaal is stil tot 17u'],
    why_en: ['Power outlet at every table', 'Wifi password on the board (KAFKA2026)', 'Coffee stays 1.80 — for years', 'Back room is quiet until 5pm'],
    menu: [
      { section: 'Koffie & thee', section_en: 'Coffee & tea',
        items: [
          { name: 'Espresso', name_en: 'Espresso', desc: '', price: '1,80' },
          { name: 'Cappuccino', name_en: 'Cappuccino', desc: 'Met of zonder cacao', desc_en: 'With or without cocoa', price: '2,80' },
          { name: 'Flat white', name_en: 'Flat white', desc: 'Bonen van Or Coffee', desc_en: 'Beans from Or Coffee', price: '3,20' },
          { name: 'Verse muntthee', name_en: 'Fresh mint tea', desc: 'Met honing', desc_en: 'With honey', price: '3,00' }
        ]
      },
      { section: 'Bier op tap', section_en: 'Beer on tap',
        items: [
          { name: 'Jupiler', name_en: 'Jupiler', desc: '25cl', price: '2,80' },
          { name: 'Karmeliet Tripel', name_en: 'Karmeliet Tripel', desc: '33cl', price: '4,50' },
          { name: 'Brussels Calling', name_en: 'Brussels Calling', desc: 'Lokaal, IPA', desc_en: 'Local, IPA', price: '4,80' }
        ]
      },
      { section: 'Klein eten', section_en: 'Small snacks',
        items: [
          { name: 'Toast kaas/hesp', name_en: 'Cheese/ham toast', desc: '', price: '4,50' },
          { name: 'Bord olijven & brood', name_en: 'Olive & bread plate', desc: '', price: '5,50' },
          { name: 'Charcuterie plank', name_en: 'Charcuterie board', desc: 'Voor 2', desc_en: 'For 2', price: '12,00' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact'],
    student_perk: 'Eerste koffie gratis bij eerste bezoek — vraag ernaar',
    student_perk_en: 'First coffee free on first visit — just ask',
    tips: 'Ga naar de achterzaal voor stilte. Vrijdagavond is er soms vinyl-DJ.',
    tips_en: 'Go to the back room for silence. Friday evening there is sometimes a vinyl DJ.'
  },

  {
    id: 'parkvorst', name: 'Park van Vorst',
    cats: ['Chillen','Gratis'], price: 0, coords: [50.8252, 4.3278],
    desc: 'Open grasveld, vijver, weinig toeristen. Perfect voor een lange middagpauze.',
    desc_en: 'Open lawn, pond, few tourists. Perfect for a long lunch break.',
    walk: 12, color: '#1F6B2E',
    address: 'Park van Vorst, 1190 Vorst',
    hours: {
      'Alle dagen': 'Open 24/7 (verlicht tot 22u)'
    },
    hours_en: {
      'Every day': 'Open 24/7 (lit until 10pm)'
    },
    long: 'Een van de weinige Brusselse parken waar je nog gewoon op het gras mag liggen zonder dat een agent komt zeggen dat het verboden is. Vijver met eenden, een tiental beuken die schaduw geven, en in de zomer wordt er soms gratis film geprojecteerd op een opblaasbaar scherm.',
    long_en: 'One of the few Brussels parks where you can still just lie on the grass without an officer coming to say it\'s forbidden. Pond with ducks, a dozen beeches that provide shade, and in summer, free films are sometimes projected on an inflatable screen.',
    why: ['Helemaal gratis', 'Geen toeristen', 'Bankjes met rugleuning (zeldzaam)', 'Drinkfontein bij de hoofdingang'],
    why_en: ['Completely free', 'No tourists', 'Benches with backrests (rare)', 'Drinking fountain at the main entrance'],
    menu: null,
    facilities: [
      { name: 'Drinkfontein', name_en: 'Drinking fountain', desc: 'Bij hoofdingang', desc_en: 'At main entrance' },
      { name: 'Toiletten', name_en: 'Toilets', desc: 'Gratis, geopend 9–17u', desc_en: 'Free, open 9am–5pm' },
      { name: 'Speelplein', name_en: 'Playground', desc: 'In het zuidelijke deel', desc_en: 'In the southern part' },
      { name: 'Boules-pleintje', name_en: 'Pétanque court', desc: 'Materiaal moet je zelf meebrengen', desc_en: 'Bring your own equipment' }
    ],
    student_perk: null,
    tips: 'In juli/augustus elke donderdagavond gratis openluchtcinema (vanaf 21u30).',
    tips_en: 'In July/August every Thursday evening free open-air cinema (from 9:30pm).'
  },

  {
    id: 'abattoir', name: 'Abattoir Markt',
    cats: ['Eten','Cultuur'], price: 1, coords: [50.84321248872317, 4.325844886000292],
    desc: 'Vrijdag-zaterdag-zondag. Goedkope groenten, Marokkaanse bakkers, levendig.',
    desc_en: 'Friday-Saturday-Sunday. Cheap vegetables, Moroccan bakers, lively.',
    walk: 8, color: '#B5430A',
    address: 'Ropsy Chaudronstraat 24, 1070 Anderlecht',
    hours: {
      'Maandag t/m donderdag': 'Gesloten',
      'Vrijdag':   '07:00 – 14:00',
      'Zaterdag':  '07:00 – 14:00',
      'Zondag':    '07:00 – 14:00'
    },
    hours_en: {
      'Monday to Thursday': 'Closed',
      'Friday':    '07:00 – 14:00',
      'Saturday':  '07:00 – 14:00',
      'Sunday':    '07:00 – 14:00'
    },
    long: 'De grootste overdekte markt van Brussel, op het terrein van een oud slachthuis. Ongeveer 150 kraampjes: groenten, vis, kruiden, stoffen, goedkope kleren, vers brood. Kom hier niet voor tafel-ervaring — kom om eten mee te nemen of een msemmen-pannenkoek voor 1,50 ter plaatse op te eten.',
    long_en: 'The largest indoor market in Brussels, on the site of an old slaughterhouse. About 150 stalls: vegetables, fish, spices, fabrics, cheap clothes, fresh bread. Don\'t come here for a table experience — come to take food away or eat a msemmen pancake for 1.50 on the spot.',
    why: ['Groenten 30% goedkoper dan supermarkt', 'Verse Marokkaanse bakkers', 'Echt Brussel, geen toeristenmarkt', 'Open op zondag (zeldzaam)'],
    why_en: ['Vegetables 30% cheaper than supermarket', 'Fresh Moroccan bakers', 'Real Brussels, not a tourist market', 'Open on Sunday (rare)'],
    menu: [
      { section: 'Wat je hier vindt (richtprijs)', section_en: 'What you can find here (approx. price)',
        items: [
          { name: 'Kilo tomaten', name_en: 'Kilo of tomatoes', desc: 'Spaans of Marokkaans', desc_en: 'Spanish or Moroccan', price: '1,50 – 2,00' },
          { name: 'Msemmen', name_en: 'Msemmen', desc: 'Marokkaanse pannenkoek, vers', desc_en: 'Moroccan pancake, fresh', price: '1,00 – 1,50' },
          { name: 'Stuk brood (1 kg)', name_en: 'Loaf of bread (1 kg)', desc: 'Versgebakken, nog warm', desc_en: 'Freshly baked, still warm', price: '1,80' },
          { name: 'Olijven (250g)', name_en: 'Olives (250g)', desc: 'Tien soorten', desc_en: 'Ten types', price: '2,50' },
          { name: 'Hele kip', name_en: 'Whole chicken', desc: 'Geroosterd, met patatten', desc_en: 'Roasted, with potatoes', price: '8,00 – 10,00' },
          { name: 'Couscous-mix (kruiden)', name_en: 'Couscous mix (spices)', desc: 'Per zakje', desc_en: 'Per bag', price: '2,00' }
        ]
      }
    ],
    payments: ['Vooral cash — pin werkt soms'],
    student_perk: null,
    tips: 'Kom voor 11u, dan is alles vers en nog niet uitverkocht. Neem een eigen tas mee.',
    tips_en: 'Come before 11am, everything is fresh and not sold out yet. Bring your own bag.'
  },
  
  {
    id: 'biblio', name: 'Bibliotheek Anderlecht',
    cats: ['Studeren','Gratis'], price: 0, coords: [50.8367, 4.3074],
    desc: 'Stille verdieping op 2. Gratis wifi, lange tafels, sluit om 19u door de week.',
    desc_en: 'Quiet floor on level 2. Free wifi, long tables, closes at 7pm during the week.',
    walk: 11, color: '#134B8A',
    address: 'Sint-Guidostraat 97, 1070 Anderlecht',
    hours: {
      'Maandag':    'Gesloten',
      'Dinsdag':    '12:30 – 19:00',
      'Woensdag':   '12:30 – 17:30',
      'Donderdag':  '15:00 – 19:00',
      'Vrijdag':    '12:30 – 17:30',
      'Zaterdag':   '10:00 – 14:00',
      'Zondag':     'Gesloten'
    },
    hours_en: {
      'Monday':     'Closed',
      'Tuesday':    '12:30 – 19:00',
      'Wednesday':  '12:30 – 17:30',
      'Thursday':   '15:00 – 19:00',
      'Friday':     '12:30 – 17:30',
      'Saturday':   '10:00 – 14:00',
      'Sunday':     'Closed'
    },
    long: 'Drie verdiepingen. Beneden = boeken, kinderhoek, soms lawaai. Verdieping 1 = computers en kranten. Verdieping 2 = stiltezone, lange houten tafels, raam op de straat. Lid worden is gratis voor wie in Brussel woont, anders 5 euro per jaar.',
    long_en: 'Three floors. Ground floor = books, children\'s corner, sometimes noisy. Floor 1 = computers and newspapers. Floor 2 = quiet zone, long wooden tables, window overlooking the street. Membership is free for those living in Brussels, otherwise 5 euros per year.',
    why: ['Gratis lidmaatschap (-26 jaar)', 'Stille tafels op verdieping 2', 'Wifi: open netwerk, geen paswoord', '24/7 boeken-inleverbus aan ingang'],
    why_en: ['Free membership (-26 years)', 'Quiet tables on floor 2', 'Wifi: open network, no password', '24/7 book return box at entrance'],
    menu: null,
    facilities: [
      { name: 'Studie-tafels', name_en: 'Study tables', desc: '~30 plaatsen op verdieping 2', desc_en: '~30 places on floor 2' },
      { name: 'Computers', name_en: 'Computers', desc: '12 stuks, gratis met lidkaart', desc_en: '12 units, free with membership card' },
      { name: 'Wifi', name_en: 'Wifi', desc: 'Open, geen wachtwoord', desc_en: 'Open, no password' },
      { name: 'Drukker', name_en: 'Printer', desc: '0,10 / pagina zwart-wit', desc_en: '0.10 / page black and white' },
      { name: 'Watercooler', name_en: 'Water cooler', desc: 'Bij de ingang', desc_en: 'At the entrance' }
    ],
    student_perk: 'Gratis lidkaart onder 26 jaar',
    student_perk_en: 'Free membership card under 26 years old',
    tips: 'Examenweek = vol. Kom voor 10u of zoek een plek op verdieping 1.',
    tips_en: 'Exam week = full. Come before 10am or find a spot on floor 1.'
  },

  {
    id: 'ramen', name: 'Takumi Tonkotsu Brussel',
    cats: ['Eten','Drinken'], price: 2, coords: [50.85016763409128, 4.3479046308424065],
    desc: 'Ramen-zaakje . Lunchformule 12 euro, drukst rond 13u.',
    desc_en: 'Ramen shop. Lunch formula 12 euros, busiest around 1pm.',
    walk: 32, bike: 8, transit: 18, color: '#7A1F2D',
    address: 'Rue Sainte-Catherine 35, 1000 Brussel',
    hours: {
      'Maandag':    '12:00 – 22:00',
      'Dinsdag':    '12:00 – 22:00',
      'Woensdag':   '12:00 – 22:00',
      'Donderdag':  '12:00 – 22:00',
      'Vrijdag':    '12:00 – 22:30',
      'Zaterdag':   '12:00 – 22:30',
      'Zondag':     '12:00 – 21:30'
    },
    hours_en: {
      'Monday':     '12:00 – 22:00',
      'Tuesday':    '12:00 – 22:00',
      'Wednesday':  '12:00 – 22:00',
      'Thursday':   '12:00 – 22:00',
      'Friday':     '12:00 – 22:30',
      'Saturday':   '12:00 – 22:30',
      'Sunday':     '12:00 – 21:30'
    },
    long: 'Tien tafels, een open keuken, drie soorten ramen. De bouillon trekt 14 uur. Lunchformule (ramen + bijgerecht + drank) is 12 euro en is een van de beste deals in zuidelijk Brussel. Reserveren via Instagram-DM.',
    long_en: 'Ten tables, an open kitchen, three types of ramen. The broth simmers for 14 hours. Lunch formula (ramen + side dish + drink) is 12 euros and is one of the best deals in southern Brussels. Reservation via Instagram DM.',
    why: ['Lunchformule 12 euro', '14u-bouillon — geen poederzooi', 'Vegan ramen op de kaart', 'Reserveren makkelijk via Insta'],
    why_en: ['Lunch formula 12 euros', '14h broth — no powder mess', 'Vegan ramen on the menu', 'Easy reservation via Insta'],
    menu: [
      { section: 'Ramen', section_en: 'Ramen',
        items: [
          { name: 'Tonkotsu', name_en: 'Tonkotsu', desc: 'Klassiek varkensbouillon, chashu, ei', desc_en: 'Classic pork broth, chashu, egg', price: '14,50' },
          { name: 'Shoyu kip', name_en: 'Shoyu chicken', desc: 'Sojabouillon, gerookte kip', desc_en: 'Soy broth, smoked chicken', price: '13,50' },
          { name: 'Vegan miso', name_en: 'Vegan miso', desc: 'Tofu, paddenstoelen, mais', desc_en: 'Tofu, mushrooms, corn', price: '13,00' }
        ]
      },
      { section: 'Bijgerechten', section_en: 'Side dishes',
        items: [
          { name: 'Gyoza (5)', name_en: 'Gyoza (5)', desc: 'Varken of groenten', desc_en: 'Pork or vegetables', price: '6,50' },
          { name: 'Edamame', name_en: 'Edamame', desc: 'Met zeezout', desc_en: 'With sea salt', price: '4,00' },
          { name: 'Karaage', name_en: 'Karaage', desc: 'Gefrituurde kip, 6 stuks', desc_en: 'Fried chicken, 6 pieces', price: '7,50' }
        ]
      },
      { section: 'Lunchformule (12u – 14u30)', section_en: 'Lunch formula (12pm – 2:30pm)',
        items: [
          { name: 'Ramen + edamame + thee', name_en: 'Ramen + edamame + tea', desc: 'Alle ramen behalve tonkotsu', desc_en: 'All ramen except tonkotsu', price: '12,00' }
        ]
      }
    ],
    payments: ['Bancontact', 'Cash', 'Payconiq'],
    student_perk: null,
    tips: 'Reserveer via @tonkotsubxl op Instagram. Walk-in voor 12u30 lukt meestal nog.',
    tips_en: 'Reserve via @tonkotsubxl on Instagram. Walk-in before 12:30pm usually works.'
  },
  {
    id: 'kaffabar', name: 'Kaffabar',
    cats: ['Drinken','Studeren','Eten'], price: 2, coords: [50.842998, 4.345641],
    desc: 'Specialty coffee aan Rouppeplein. Veel laptops, goeie brunch en rustige sfeer.',
    desc_en: 'Specialty coffee at Rouppe Square. Lots of laptops, good brunch and quiet atmosphere.',
    walk: 24, bike: 9, transit: 14, color: '#8C5E3C', favorite: true,
    address: 'Rouppeplein 1, 1000 Brussel',
    phone: '+32498426684',
    hours: {
      'Maandag':    'Gesloten',
      'Dinsdag':    '08:00 – 18:00',
      'Woensdag':   '08:00 – 18:00',
      'Donderdag':  '08:00 – 18:00',
      'Vrijdag':    '08:00 – 18:00',
      'Zaterdag':   '09:00 – 18:00',
      'Zondag':     'Gesloten'
    },
    hours_en: {
      'Monday':     'Closed',
      'Tuesday':    '08:00 – 18:00',
      'Wednesday':  '08:00 – 18:00',
      'Thursday':   '08:00 – 18:00',
      'Friday':     '08:00 – 18:00',
      'Saturday':   '09:00 – 18:00',
      'Sunday':     'Closed'
    },
    long: 'Kaffabar is een vaste waarde geworden voor studenten, freelancers en koffiemensen in Brussel. Binnen hangt een rustige Scandinavische vibe met veel natuurlijk licht, houten tafels en genoeg plaats om een paar uur te werken. Ze serveren specialty coffee, slow coffee en stevige brunches. Vooral in de voormiddag zie je hier veel laptops en mensen die rustig zitten te studeren of werken.',
    long_en: 'Kaffabar has become a regular spot for students, freelancers and coffee lovers in Brussels. Inside is a quiet Scandinavian vibe with lots of natural light, wooden tables and enough space to work for a few hours. They serve specialty coffee, slow coffee and hearty brunches. Especially in the morning you see many laptops here and people sitting quietly studying or working.',
    why: ['Laptopvriendelijk buiten de lunchrush', 'Specialty coffee & slow coffee', 'Rustige sfeer om te studeren', 'Sterke brunch en homemade pastries', 'Terras op het Rouppeplein'],
    why_en: ['Laptop friendly outside the lunch rush', 'Specialty coffee & slow coffee', 'Quiet atmosphere to study', 'Strong brunch and homemade pastries', 'Terrace on Rouppe Square'],
    menu: [
      { section: 'Koffie', section_en: 'Coffee',
        items: [
          { name: 'Espresso', name_en: 'Espresso', desc: 'House blend', desc_en: 'House blend', price: '2,80' },
          { name: 'Flat White', name_en: 'Flat White', desc: 'Dubbele espresso met gestoomde melk', desc_en: 'Double espresso with steamed milk', price: '4,20' },
          { name: 'Filter Coffee', name_en: 'Filter Coffee', desc: 'V60 of Chemex', desc_en: 'V60 or Chemex', price: '4,50' },
          { name: 'Espresso Tonic', name_en: 'Espresso Tonic', desc: 'Iced coffee signature', desc_en: 'Iced coffee signature', price: '5,50' }
        ]
      },
      { section: 'Ontbijt & lunch', section_en: 'Breakfast & lunch',
        items: [
          { name: 'Fresh Breakfast', name_en: 'Fresh Breakfast', desc: 'Granola, yoghurt, fruit', desc_en: 'Granola, yogurt, fruit', price: '9,50' },
          { name: 'Rustic Breakfast', name_en: 'Rustic Breakfast', desc: 'Brood, ei, kaas, confituur', desc_en: 'Bread, egg, cheese, jam', price: '13,00' },
          { name: 'Lunch Tartines', name_en: 'Lunch Tartines', desc: 'Open sandwiches van de dag', desc_en: 'Open sandwiches of the day', price: '11,50' },
          { name: 'Cake van de dag', name_en: 'Cake of the day', desc: 'Homemade', desc_en: 'Homemade', price: '4,50' }
        ]
      },
      { section: 'Extra', section_en: 'Extra',
        items: [
          { name: 'Chai Latte', name_en: 'Chai Latte', desc: 'Huisgemaakt', desc_en: 'Homemade', price: '4,80' },
          { name: 'Iced Tea', name_en: 'Iced Tea', desc: 'Vers gemaakt', desc_en: 'Freshly made', price: '4,20' },
          { name: 'Espresso Martini', name_en: 'Espresso Martini', desc: 'Vanaf de namiddag', desc_en: 'From the afternoon', price: '11,00' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact', 'Payconiq'],
    student_perk: 'Gratis wifi + veel stopcontacten',
    student_perk_en: 'Free wifi + many power outlets',
    tips: 'Kom voor 11u als je rustig wilt studeren. Vrijdagmiddag zit het vaak helemaal vol.',
    tips_en: 'Come before 11am if you want to study quietly. Friday afternoon is often completely full.'
  },
  {
    id: 'izycoffee', name: 'Izy Coffee',
    website: 'https://www.izycoffee.be/',
    cats: ['Drinken','Studeren','Eten'], price: 2, coords: [50.848291, 4.347015],
    desc: 'Grote koffiebar in centrum Brussel met veel plaats, lange openingsuren en laptopvriendelijke sfeer.',
    desc_en: 'Large coffee bar in central Brussels with plenty of space, long opening hours and a laptop-friendly atmosphere.',
    walk: 22, bike: 8, transit: 13, color: '#D87B4A', favorite: true,
    address: 'Auguste Ortsstraat 9, 1000 Brussel',
    hours: {
      'Maandag':   '07:00 – 22:00',
      'Dinsdag':   '07:00 – 22:00',
      'Woensdag':  '07:00 – 22:00',
      'Donderdag': '07:00 – 22:00',
      'Vrijdag':   '07:00 – 22:00',
      'Zaterdag':  '07:00 – 22:00',
      'Zondag':    '07:00 – 22:00'
    },
    hours_en: {
      'Monday':    '07:00 – 22:00',
      'Tuesday':   '07:00 – 22:00',
      'Wednesday': '07:00 – 22:00',
      'Thursday':  '07:00 – 22:00',
      'Friday':    '07:00 – 22:00',
      'Saturday':  '07:00 – 22:00',
      'Sunday':    '07:00 – 22:00'
    },
    long: 'Izy Coffee is één van de populairste study cafés in centrum Brussel. Door de lange openingsuren, vele zitplaatsen en snelle wifi zie je hier constant studenten en freelancers met laptops zitten. De sfeer is minder rustig dan specialty coffee bars zoals Kaffabar, maar ideaal als je lang wilt blijven werken of studeren. Ze serveren specialty coffee, iced drinks, matcha’s, vegan pastries en snelle ontbijt- of lunchopties.',
    long_en: 'Izy Coffee is one of the most popular study cafes in central Brussels. Due to the long opening hours, many seats and fast wifi, you constantly see students and freelancers with laptops here. The atmosphere is less quiet than specialty coffee bars like Kaffabar, but ideal if you want to keep working or studying for a long time. They serve specialty coffee, iced drinks, matchas, vegan pastries and quick breakfast or lunch options.',
    why: ['Elke dag open tot 22u', 'Veel plaats voor laptops', 'Goede wifi en stopcontacten', 'Populaire study spot bij studenten', 'Snelle service voor tussen lessen'],
    why_en: ['Open every day until 10pm', 'Lots of space for laptops', 'Good wifi and power outlets', 'Popular study spot for students', 'Quick service for between classes'],
    menu: [
      { section: 'Koffie', section_en: 'Coffee',
        items: [
          { name: 'Flat White', name_en: 'Flat White', desc: 'Dubbele espresso met melk', desc_en: 'Double espresso with milk', price: '4,40' },
          { name: 'Cappuccino', name_en: 'Cappuccino', desc: 'House blend espresso', desc_en: 'House blend espresso', price: '4,20' },
          { name: 'Iced Latte', name_en: 'Iced Latte', desc: 'Koude latte met ijs', desc_en: 'Cold latte with ice', price: '5,20' },
          { name: 'Espresso', name_en: 'Espresso', desc: 'Classic espresso shot', desc_en: 'Classic espresso shot', price: '2,90' }
        ]
      },
      { section: 'Specials', section_en: 'Specials',
        items: [
          { name: 'Taro Latte', name_en: 'Taro Latte', desc: 'Populaire signature drink', desc_en: 'Popular signature drink', price: '6,20' },
          { name: 'Pandan Matcha', name_en: 'Pandan Matcha', desc: 'Specialty matcha drink', desc_en: 'Specialty matcha drink', price: '6,50' },
          { name: 'Speculicious Coffee', name_en: 'Speculicious Coffee', desc: 'Signature winter coffee', desc_en: 'Signature winter coffee', price: '6,80' }
        ]
      },
      { section: 'Food', section_en: 'Food',
        items: [
          { name: 'Banana Bread', name_en: 'Banana Bread', desc: 'Homemade style cake', desc_en: 'Homemade style cake', price: '4,80' },
          { name: 'Vegan Pastries', name_en: 'Vegan Pastries', desc: 'Wisselend aanbod', desc_en: 'Varying offer', price: '4,50' },
          { name: 'Lunch Bun', name_en: 'Lunch Bun', desc: 'Snelle lunchoptie', desc_en: 'Quick lunch option', price: '7,50' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact', 'Payconiq'],
    student_perk: 'Open tot laat + veel laptopplaatsen',
    student_perk_en: 'Open late + lots of laptop spaces',
    tips: 'In de namiddag wordt het druk. Beste moment om rustig te studeren is voor 11u.',
    tips_en: 'It gets busy in the afternoon. Best time to study quietly is before 11am.'
  },
  {
    id: 'mokcoffee', name: 'MOK Coffee',
    website: 'https://mokcoffee.be/',
    cats: ['Drinken','Studeren','Eten'], price: 2, coords: [50.853005, 4.343961],
    desc: 'Bekende specialty coffee bar in de Dansaertwijk met rustige sfeer, top koffie en aparte laptopruimte.',
    desc_en: 'Well-known specialty coffee bar in the Dansaert district with a quiet atmosphere, top coffee and a separate laptop room.',
    walk: 18, bike: 7, transit: 11, color: '#6B4C3B', favorite: true,
    address: 'Antoine Dansaertstraat 196, 1000 Brussel',
    phone: '+32472058224',
    hours: {
      'Maandag':   '08:00 – 18:00',
      'Dinsdag':   '08:00 – 18:00',
      'Woensdag':  '08:00 – 18:00',
      'Donderdag': '08:00 – 18:00',
      'Vrijdag':   '08:00 – 18:00',
      'Zaterdag':  '10:00 – 18:00',
      'Zondag':    '10:00 – 18:00'
    },
    hours_en: {
      'Monday':    '08:00 – 18:00',
      'Tuesday':   '08:00 – 18:00',
      'Wednesday': '08:00 – 18:00',
      'Thursday':  '08:00 – 18:00',
      'Friday':    '08:00 – 18:00',
      'Saturday':  '10:00 – 18:00',
      'Sunday':    '10:00 – 18:00'
    },
    long: 'MOK Coffee is één van de bekendste specialty coffee bars van Brussel en wordt vaak genoemd als één van de beste koffieplekken van België. De zaak ligt in de Dansaertwijk en combineert minimalistische Scandinavische vibes met een heel rustige sfeer. Achteraan is er een aparte ruimte waar laptops welkom zijn, waardoor veel studenten en freelancers hier komen werken of studeren. Ze roasten hun eigen bonen en serveren filter coffee, espresso’s en seizoensgebonden brunchgerechten.',
    long_en: 'MOK Coffee is one of Brussels\' most famous specialty coffee bars and is often cited as one of the best coffee spots in Belgium. Located in the Dansaert district, the place combines minimalist Scandinavian vibes with a very quiet atmosphere. In the back, there is a separate space where laptops are welcome, making it a popular spot for students and freelancers to work or study. They roast their own beans and serve filter coffee, espressos and seasonal brunch dishes.',
    why: ['Eén van de bekendste specialty coffee bars van Brussel', 'Aparte laptopruimte achteraan', 'House-roasted koffiebonen', 'Rustige Scandinavische sfeer', 'Populair bij studenten en freelancers'],
    why_en: ['One of the most famous specialty coffee bars in Brussels', 'Separate laptop room in the back', 'House-roasted coffee beans', 'Quiet Scandinavian atmosphere', 'Popular with students and freelancers'],
    menu: [
      { section: 'Koffie', section_en: 'Coffee',
        items: [
          { name: 'Espresso', name_en: 'Espresso', desc: 'House roast espresso', desc_en: 'House roast espresso', price: '3,00' },
          { name: 'Flat White', name_en: 'Flat White', desc: 'Dubbele espresso met melk', desc_en: 'Double espresso with milk', price: '4,50' },
          { name: 'Filter Coffee', name_en: 'Filter Coffee', desc: 'Single origin hand brew', desc_en: 'Single origin hand brew', price: '5,50' },
          { name: 'Nitro Coffee', name_en: 'Nitro Coffee', desc: 'Cold brew van het vat', desc_en: 'Cold brew from the tap', price: '5,80' }
        ]
      },
      { section: 'Ontbijt & lunch', section_en: 'Breakfast & lunch',
        items: [
          { name: 'Avocado Toast', name_en: 'Avocado Toast', desc: 'Zuurdesembrood & kruiden', desc_en: 'Sourdough bread & herbs', price: '13,50' },
          { name: 'Seasonal Brunch', name_en: 'Seasonal Brunch', desc: 'Vegetarische lunch van het seizoen', desc_en: 'Vegetarian lunch of the season', price: '15,00' },
          { name: 'Banana Bread', name_en: 'Banana Bread', desc: 'Housemade banana bread', desc_en: 'Housemade banana bread', price: '4,80' },
          { name: 'Pastries', name_en: 'Pastries', desc: 'Dagelijks vers gebakken', desc_en: 'Freshly baked daily', price: '4,50' }
        ]
      },
      { section: 'Extra', section_en: 'Extra',
        items: [
          { name: 'Matcha Latte', name_en: 'Matcha Latte', desc: 'Ceremonial grade matcha', desc_en: 'Ceremonial grade matcha', price: '5,50' },
          { name: 'Oat Milk Upgrade', name_en: 'Oat Milk Upgrade', desc: 'Havermelk', desc_en: 'Oat milk', price: '0,50' },
          { name: 'Coffee Beans', name_en: 'Coffee Beans', desc: 'House roasted bonen', desc_en: 'House roasted beans', price: 'Vanaf 16,00' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact', 'Payconiq'],
    student_perk: 'Laptopruimte achteraan + gratis wifi',
    student_perk_en: 'Laptop space in the back + free wifi',
    tips: 'Beste moment om rustig te studeren is in de voormiddag. In het weekend vaak erg druk.',
    tips_en: 'Best time to study quietly is in the morning. Often very busy on weekends.'
  },
  {
    id: 'bouche', name: 'BOUCHE Specialty Coffee',
    cats: ['Drinken','Studeren','Eten'], price: 2, coords: [50.841842, 4.359421],
    desc: 'Specialty coffee vlak bij Naamsepoort met minimalistische inrichting en focus op filter coffee.',
    desc_en: 'Specialty coffee near Namur Gate with minimalist interior and focus on filter coffee.',
    walk: 31, bike: 11, transit: 16, color: '#B88A6A', favorite: true,
    address: 'Rue de Namur 4, 1000 Bruxelles',
    phone: '+32493299802',
    hours: {
      'Maandag':   '07:30 – 18:00',
      'Dinsdag':   '07:30 – 18:00',
      'Woensdag':  '07:30 – 18:00',
      'Donderdag': '07:30 – 18:00',
      'Vrijdag':   '07:30 – 18:00',
      'Zaterdag':  '09:00 – 18:00',
      'Zondag':    '09:00 – 18:00'
    },
    hours_en: {
      'Monday':    '07:30 – 18:00',
      'Tuesday':   '07:30 – 18:00',
      'Wednesday': '07:30 – 18:00',
      'Thursday':  '07:30 – 18:00',
      'Friday':    '07:30 – 18:00',
      'Saturday':  '09:00 – 18:00',
      'Sunday':    '09:00 – 18:00'
    },
    long: 'BOUCHE is een specialty coffee bar in het centrum van Brussel with focus op high-end filter coffee en Europese specialty roasters. Online wordt de zaak vaak genoemd als één van de betere specialty coffee spots van Brussel. De ruimte heeft een minimalistische inrichting met grote stenen toog en rustige sfeer.',
    long_en: 'BOUCHE is a specialty coffee bar in the center of Brussels with a focus on high-end filter coffee and European specialty roasters. Online, the place is often cited as one of the better specialty coffee spots in Brussels. The space has a minimalist interior with a large stone counter and a quiet atmosphere.',
    why: ['Bekend in de Brusselse specialty coffee scene', 'Focus op filter coffee en guest roasters', 'Minimalistisch interieur', 'Populair bij koffieliefhebbers', 'Goede locatie vlak bij centrum'],
    why_en: ['Well known in the Brussels specialty coffee scene', 'Focus on filter coffee and guest roasters', 'Minimalist interior', 'Popular with coffee lovers', 'Good location near the center'],
    menu: [
      { section: 'Koffie', section_en: 'Coffee',
        items: [
          { name: 'Espresso', name_en: 'Espresso', desc: 'Specialty espresso', desc_en: 'Specialty espresso', price: '3,60' },
          { name: 'Milk Drinks', name_en: 'Milk Drinks', desc: 'Latte / cappuccino', desc_en: 'Latte / cappuccino', price: '4,60 – 5,20' },
          { name: 'Filter Coffee', name_en: 'Filter Coffee', desc: 'Hand brew / batch brew', desc_en: 'Hand brew / batch brew', price: '—' }
        ]
      },
      { section: 'Food', section_en: 'Food',
        items: [
          { name: 'Pastries', name_en: 'Pastries', desc: 'Dagelijks aanbod pastries', desc_en: 'Daily offer of pastries', price: '—' }
        ]
      }
    ],
    payments: ['Bancontact', 'Cash'],
    student_perk: 'Wifi beschikbaar',
    student_perk_en: 'Wifi available',
    tips: 'In het weekend vaak erg druk volgens online reviews.',
    tips_en: 'Often very busy on weekends according to online reviews.'
  },
  {
    id: 'taes', name: "Tae's sandwich",
    cats: ['Eten'], price: 1, coords: [50.84772931448716, 4.361518750700231],
    desc: 'Kleine sandwichzaak in centrum Brussel met rijk belegde broodjes en vriendelijke service.',
    desc_en: 'Small sandwich shop in central Brussels with richly filled sandwiches and friendly service.',
    walk: 26, bike: 9, transit: 14, color: '#C96A3D', favorite: true,
    address: 'Rue du Gentilhomme 5, 1000 Bruxelles',
    phone: '+32470866835',
    hours: {
      'Maandag':   '11:15 – 15:30',
      'Dinsdag':   '11:15 – 15:30',
      'Woensdag':  '11:15 – 15:30',
      'Donderdag': 'Gesloten',
      'Vrijdag':   'Gesloten',
      'Zaterdag':  'Gesloten',
      'Zondag':    'Gesloten'
    },
    hours_en: {
      'Monday':    '11:15 – 15:30',
      'Tuesday':   '11:15 – 15:30',
      'Wednesday': '11:15 – 15:30',
      'Thursday':  'Closed',
      'Friday':    'Closed',
      'Saturday':  'Closed',
      'Sunday':    'Closed'
    },
    long: 'Tae’s sandwich is een kleine broodjeszaak in het centrum van Brussel. Online reviews vermelden vooral de vriendelijke service, verse producten en goed belegde sandwiches. De zaak lijkt vooral populair als snelle lunchplek.',
    long_en: 'Tae’s sandwich is a small sandwich shop in the center of Brussels. Online reviews especially mention the friendly service, fresh products and well-filled sandwiches. The place seems particularly popular as a quick lunch spot.',
    why: ['Verse ingrediënten volgens reviews', 'Goed belegde sandwiches', 'Kleine lokale zaak', 'Snelle lunchspot', 'Vriendelijke bediening'],
    why_en: ['Fresh ingredients according to reviews', 'Well-filled sandwiches', 'Small local business', 'Quick lunch spot', 'Friendly service'],
    menu: [
      { section: 'Broodjes', section_en: 'Sandwiches',
        items: [
          { name: 'Chicken Sandwich', name_en: 'Chicken Sandwich', desc: 'Kipbroodje', desc_en: 'Chicken sandwich', price: '—' },
          { name: 'Vegetarian Sandwich', name_en: 'Vegetarian Sandwich', desc: 'Vegetarische optie beschikbaar', desc_en: 'Vegetarian option available', price: '—' },
          { name: 'Homemade Dessert', name_en: 'Homemade Dessert', desc: 'Huisgemaakt dessert volgens reviews', desc_en: 'Homemade dessert according to reviews', price: '—' }
        ]
      }
    ],
    payments: ['Bancontact', 'Cash'],
    student_perk: null,
    tips: 'Vooral geschikt voor snelle lunch. Openingsuren lijken beperkt.',
    tips_en: 'Especially suitable for quick lunch. Opening hours seem limited.'
  },
  {
    id: 'fritland', name: 'Fritland',
    website: 'http://fritlandbrussels.be/acceuil',
    cats: ['Eten','Drinken'], price: 1, coords: [50.84772289252201, 4.349910972230997],
    desc: 'Legendarische Brusselse frituur vlak bij de Beurs. Grote porties, lange wachtrijen en open tot laat.',
    desc_en: 'Legendary Brussels chip shop near the Stock Exchange. Large portions, long queues and open late.',
    walk: 24, bike: 8, transit: 13, color: '#D6A02C', favorite: true,
    address: 'Rue Henri Maus 19, 1000 Bruxelles',
    phone: '+3225140627',
    hours: {
      'Maandag':   '11:00 – 01:00',
      'Dinsdag':   '11:00 – 01:00',
      'Woensdag':  '11:00 – 01:00',
      'Donderdag': '11:00 – 03:00',
      'Vrijdag':   '11:00 – 03:00',
      'Zaterdag':  '11:00 – 03:00',
      'Zondag':    '11:00 – 01:00'
    },
    hours_en: {
      'Monday':    '11:00 – 01:00',
      'Tuesday':   '11:00 – 01:00',
      'Wednesday': '11:00 – 01:00',
      'Thursday':  '11:00 – 03:00',
      'Friday':    '11:00 – 03:00',
      'Saturday':  '11:00 – 03:00',
      'Sunday':    '11:00 – 01:00'
    },
    long: 'Fritland is één van de bekendste frituren van Brussel en bestaat sinds 1978. De zaak ligt vlak bij de Beurs en staat bekend om Belgische frieten, mitraillettes en late-night fastfood. Online reviews noemen vooral de grote porties, snelle service en centrale locatie. Het is vaak erg druk, zeker ’s avonds en in het weekend.',
    long_en: 'Fritland is one of the most famous chip shops in Brussels and has existed since 1978. The place is located near the Stock Exchange and is known for Belgian fries, mitraillettes and late-night fast food. Online reviews mainly mention the large portions, quick service and central location. It is often very busy, especially in the evenings and on weekends.',
    why: ['Bekende Brusselse frituur sinds 1978', 'Open tot laat in de nacht', 'Grote porties frieten', 'Vlak bij de Beurs', 'Populaire stop after het uitgaan'],
    why_en: ['Well-known Brussels chip shop since 1978', 'Open until late at night', 'Large portions of fries', 'Near the Stock Exchange', 'Popular stop after going out'],
    menu: [
      { section: 'Frieten & snacks', section_en: 'Fries & snacks',
        items: [
          { name: 'Verse frieten', name_en: 'Fresh fries', desc: 'Belgische frieten', desc_en: 'Belgian fries', price: '3,50 – 5,50' },
          { name: 'Mitraillette', name_en: 'Mitraillette', desc: 'Broodje met frieten en snack', desc_en: 'Sandwich with fries and snack', price: '8,00' },
          { name: 'Fricadelle', name_en: 'Fricadelle', desc: 'Klassieke Belgische snack', desc_en: 'Classic Belgian snack', price: '3,00' },
          { name: 'Bicky Burger', name_en: 'Bicky Burger', desc: 'Belgische fastfoodklassieker', desc_en: 'Belgian fast food classic', price: '5,00' }
        ]
      },
      { section: 'Sauzen', section_en: 'Sauces',
        items: [
          { name: 'Andalouse', name_en: 'Andalouse', desc: 'Pittige Belgische saus', desc_en: 'Spicy Belgian sauce', price: '1,00' },
          { name: 'Samurai', name_en: 'Samurai', desc: 'Pikante mayo', desc_en: 'Spicy mayo', price: '1,00' },
          { name: 'Tartaar', name_en: 'Tartar', desc: 'Klassieke frituursaus', desc_en: 'Classic fry sauce', price: '1,00' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact'],
    student_perk: null,
    tips: 'Na 22u vaak erg druk. Veel mensen nemen hun frieten mee richting Grote Markt.',
    tips_en: 'Often very busy after 10pm. Many people take their fries towards the Grand Place.'
  },
  {
    id: 'biamara', name: 'Bia Mara',
    website: 'https://www.biamara.com/',
    cats: ['Eten','Drinken'], price: 2, coords: [50.848637023774536, 4.350734920398734],
    desc: 'Populaire fish & chips spot vlak bij de Beurs met duurzame vis, homemade sauzen en creatieve smaken.',
    desc_en: 'Popular fish & chips spot near the Stock Exchange with sustainable fish, homemade sauces and creative flavors.',
    walk: 24, bike: 8, transit: 13, color: '#2E5B7A', favorite: true,
    address: 'Rue du Marché aux Poulets 41, 1000 Bruxelles',
    phone: '+3225020061',
    hours: {
      'Maandag':   '12:00 – 14:00 / 18:00 – 21:00',
      'Dinsdag':   '12:00 – 14:00 / 18:00 – 21:00',
      'Woensdag':  '12:00 – 14:00 / 18:00 – 21:00',
      'Donderdag': '12:00 – 14:00 / 18:00 – 21:00',
      'Vrijdag':   '12:00 – 14:00 / 18:00 – 22:00',
      'Zaterdag':  '12:00 – 22:00',
      'Zondag':    '12:00 – 15:00 / 18:00 – 21:00'
    },
    hours_en: {
      'Monday':    '12:00 – 14:00 / 18:00 – 21:00',
      'Tuesday':   '12:00 – 14:00 / 18:00 – 21:00',
      'Wednesday': '12:00 – 14:00 / 18:00 – 21:00',
      'Thursday':  '12:00 – 14:00 / 18:00 – 21:00',
      'Friday':    '12:00 – 14:00 / 18:00 – 22:00',
      'Saturday':  '12:00 – 22:00',
      'Sunday':    '12:00 – 15:00 / 18:00 – 21:00'
    },
    long: 'Bia Mara is één van de bekendste fish & chips restaurants van Brussel. De zaak staat bekend om duurzame vissoorten, lichte krokante batter and homemade sauzen met internationale smaken. Online reviews noemen vooral de creatieve combinaties, grote porties en centrale locatie vlak bij de Beurs.',
    long_en: 'Bia Mara is one of the most famous fish & chips restaurants in Brussels. The place is known for sustainable fish species, light crispy batter and homemade sauces with international flavors. Online reviews especially mention the creative combinations, large portions and central location near the Stock Exchange.',
    why: ['Bekende fish & chips spot in Brussel', 'Duurzame vis en homemade sauzen', 'Creatieve smaken en toppings', 'Vlak bij de Beurs', 'Populair bij toeristen én locals'],
    why_en: ['Well-known fish & chips spot in Brussels', 'Sustainable fish and homemade sauces', 'Creative flavors and toppings', 'Near the Stock Exchange', 'Popular with tourists and locals'],
    menu: [
      { section: 'Fish & Chips', section_en: 'Fish & Chips',
        items: [
          { name: 'Classic Panko', name_en: 'Classic Panko', desc: 'Krokante vis met frieten', desc_en: 'Crispy fish with fries', price: '13,00' },
          { name: 'Lemon & Basil Tempura', name_en: 'Lemon & Basil Tempura', desc: 'Tempura fish met frisse kruiden', desc_en: 'Tempura fish with fresh herbs', price: '14,50' },
          { name: 'Indian Spiced Panko', name_en: 'Indian Spiced Panko', desc: 'Fish & chips met curry-lime saus', desc_en: 'Fish & chips with curry-lime sauce', price: '14,50' }
        ]
      },
      { section: 'Sides', section_en: 'Sides',
        items: [
          { name: 'Sweet Potato Fries', name_en: 'Sweet Potato Fries', desc: 'Zoete aardappelfrietjes', desc_en: 'Sweet potato fries', price: '4,00' },
          { name: 'Minty Mushy Peas', name_en: 'Minty Mushy Peas', desc: 'Klassieke mushy peas', desc_en: 'Classic mushy peas', price: '4,00' },
          { name: 'Vietnamese Salad', name_en: 'Vietnamese Salad', desc: 'Frisse salade', desc_en: 'Fresh salad', price: '4,00' }
        ]
      },
      { section: 'Sauzen', section_en: 'Sauces',
        items: [
          { name: 'Garlic Truffle Sauce', name_en: 'Garlic Truffle Sauce', desc: 'Knoflook & truffel', desc_en: 'Garlic & truffle', price: '1,00' },
          { name: 'Jalapeño Lime Sauce', name_en: 'Jalapeño Lime Sauce', desc: 'Pikant en fris', desc_en: 'Spicy and fresh', price: '1,00' },
          { name: 'Homemade Tartar', name_en: 'Homemade Tartar', desc: 'Huisgemaakte tartaar', desc_en: 'Homemade tartar', price: '1,00' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact'],
    student_perk: null,
    tips: 'Vrijdag- en zaterdagavond vaak lange wachtrij. Lunch is meestal rustiger.',
    tips_en: 'Long queue often on Friday and Saturday evenings. Lunch is usually quieter.'
  },
  {
    id: 'casco', name: 'CASCO',
    website: 'https://cafecasco.be/',
    cats: ['Drinken','Eten','Chillen'], price: 2, coords: [50.84811173316971, 4.351288739388422],
    desc: 'Grote bar-brasserie aan de Beurs met cocktails, speciaalbier, terras en late-night sfeer.',
    desc_en: 'Large bar-brasserie at the Stock Exchange with cocktails, specialty beer, terrace and late-night atmosphere.',
    walk: 24, bike: 8, transit: 13, color: '#8A4F3D', favorite: true,
    address: 'Rue de la Bourse 42, 1000 Bruxelles',
    phone: '',
    hours: {
      'Maandag':   '11:00 – 01:30',
      'Dinsdag':   '11:00 – 01:30',
      'Woensdag':  '11:00 – 01:30',
      'Donderdag': '11:00 – 01:30',
      'Vrijdag':   '11:00 – 03:30',
      'Zaterdag':  '11:00 – 03:30',
      'Zondag':    '11:00 – 01:30'
    },
    hours_en: {
      'Monday':    '11:00 – 01:30',
      'Tuesday':   '11:00 – 01:30',
      'Wednesday': '11:00 – 01:30',
      'Thursday':  '11:00 – 01:30',
      'Friday':    '11:00 – 03:30',
      'Saturday':  '11:00 – 03:30',
      'Sunday':    '11:00 – 01:30'
    },
    long: 'CASCO is een grote café-brasserie vlak bij de Beurs in Brussel. Overdag komen mensen hier for koffie, lunch of een terras, terwijl het ’s avonds meer verandert in een levendige cocktailbar met muziek and DJ-sets. Online reviews noemen vooral de centrale locatie, het grote terras en de levendige sfeer.',
    long_en: 'CASCO is a large cafe-brasserie near the Stock Exchange in Brussels. During the day people come here for coffee, lunch or a terrace, while in the evening it turns more into a lively cocktail bar with music and DJ sets. Online reviews mainly mention the central location, the large terrace and the lively atmosphere.',
    why: ['Groot terras aan de Beurs', 'Cocktails, bier en food op één plek', 'Open tot diep in de nacht', 'Vaak live DJ’s en muziek', 'Populaire afspreekplek in centrum Brussel'],
    why_en: ['Large terrace at the Stock Exchange', 'Cocktails, beer and food in one place', 'Open until deep in the night', 'Often live DJs and music', 'Popular meeting place in central Brussels'],
    menu: [
      { section: 'Drinks', section_en: 'Drinks',
        items: [
          { name: 'Cocktails', name_en: 'Cocktails', desc: 'Klassieke en signature cocktails', desc_en: 'Classic and signature cocktails', price: '10,00 – 14,00' },
          { name: 'Belgische bieren', name_en: 'Belgian beers', desc: 'Lokale en internationale selectie', desc_en: 'Local and international selection', price: '4,00 – 7,00' },
          { name: 'Koffie', name_en: 'Coffee', desc: 'Espresso, cappuccino, latte', desc_en: 'Espresso, cappuccino, latte', price: '3,00 – 5,00' }
        ]
      },
      { section: 'Food', section_en: 'Food',
        items: [
          { name: 'Burgers', name_en: 'Burgers', desc: 'Classic burgers met frieten', desc_en: 'Classic burgers with fries', price: '15,00 – 18,00' },
          { name: 'Croquettes', name_en: 'Croquettes', desc: 'Kaas- of garnaalkroketten', desc_en: 'Cheese or shrimp croquettes', price: '—' },
          { name: 'Fingerfood', name_en: 'Finger food', desc: 'Nachos, onion rings, snacks', desc_en: 'Nachos, onion rings, snacks', price: '—' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact', 'Payconiq', 'Visa', 'Mastercard'],
    student_perk: null,
    tips: 'Vrijdag- en zaterdagavond erg druk. Terras is populair bij goed weer.',
    tips_en: 'Very busy on Friday and Saturday nights. Terrace is popular in good weather.'
  },
  {
    id: 'gecko', name: 'Gecko Brunch & Cocktail Bar',
    website: 'https://m.facebook.com/Gecko-Brussels-165738870268888/',
    cats: ['Drinken','Eten','Chillen'], price: 2, coords: [50.848091838835856, 4.346728016400397],
    desc: 'Populaire brunch- en cocktailbar op Sint-Goriksplein met groot terras en late openingsuren.',
    desc_en: 'Popular brunch and cocktail bar at Saint-Géry Square with a large terrace and late opening hours.',
    walk: 23, bike: 8, transit: 12, color: '#4E7C6D', favorite: true,
    address: 'Place Saint-Géry 16, 1000 Bruxelles',
    phone: '+32485981088',
    hours: {
      'Maandag':   '08:00 – 23:00',
      'Dinsdag':   '08:00 – 23:00',
      'Woensdag':  '08:00 – 23:00',
      'Donderdag': '08:00 – 03:00',
      'Vrijdag':   '08:00 – 03:00',
      'Zaterdag':  '08:00 – 03:00',
      'Zondag':    '08:00 – 23:00'
    },
    hours_en: {
      'Monday':    '08:00 – 23:00',
      'Tuesday':   '08:00 – 23:00',
      'Wednesday': '08:00 – 23:00',
      'Thursday':  '08:00 – 03:00',
      'Friday':    '08:00 – 03:00',
      'Saturday':  '08:00 – 03:00',
      'Sunday':    '08:00 – 23:00'
    },
    long: 'Gecko is een brunch- en cocktailbar aan het Sint-Goriksplein in Brussel. Online reviews noemen vooral de gezellige sfeer, cocktails, brunchgerechten and het grote terras. De zaak ligt midden in één van de populairste uitgaansbuurten van Brussel en wordt vaak genoemd als afspreekplek for drankjes of brunch.',
    long_en: 'Gecko is a brunch and cocktail bar at Saint-Géry Square in Brussels. Online reviews mainly mention the cozy atmosphere, cocktails, brunch dishes and the large terrace. The place is in the middle of one of the most popular nightlife districts in Brussels and is often cited as a meeting place for drinks or brunch.',
    why: ['Groot terras op Sint-Goriksplein', 'Cocktails en brunch op één plek', 'Open tot laat in het weekend', 'Centrale ligging in het centrum', 'Populair bij locals en toeristen'],
    why_en: ['Large terrace on Saint-Géry Square', 'Cocktails and brunch in one place', 'Open until late at weekends', 'Central location in the center', 'Popular with locals and tourists'],
    menu: [
      { section: 'Brunch', section_en: 'Brunch',
        items: [
          { name: 'Pancakes', name_en: 'Pancakes', desc: 'Volgens reviews populair tijdens brunch', desc_en: 'According to reviews, popular during brunch', price: '—' },
          { name: 'Omelettes', name_en: 'Omelettes', desc: 'Custom omelettes beschikbaar', desc_en: 'Custom omelettes available', price: '—' },
          { name: 'Toast & breakfast bowls', name_en: 'Toast & breakfast bowls', desc: 'Ontbijt- en brunchopties', desc_en: 'Breakfast and brunch options', price: '—' }
        ]
      },
      { section: 'Cocktails & drinks', section_en: 'Cocktails & drinks',
        items: [
          { name: 'Mojito', name_en: 'Mojito', desc: 'Vaak genoemd in reviews', desc_en: 'Often mentioned in reviews', price: '—' },
          { name: 'Classic Cocktails', name_en: 'Classic Cocktails', desc: 'Cocktailkaart met klassiekers', desc_en: 'Cocktail menu with classics', price: '—' },
          { name: 'Belgische bieren', name_en: 'Belgian beers', desc: 'Lokale bierselectie', desc_en: 'Local beer selection', price: '—' }
        ]
      },
      { section: 'Food', section_en: 'Food',
        items: [
          { name: 'Cheeseburger', name_en: 'Cheeseburger', desc: 'Vermeld in online reviews', desc_en: 'Mentioned in online reviews', price: '—' },
          { name: 'Meatballs in tomato sauce', name_en: 'Meatballs in tomato sauce', desc: 'Kleine Belgische gerechten', desc_en: 'Small Belgian dishes', price: '—' },
          { name: 'Croque Monsieur', name_en: 'Croque Monsieur', desc: 'Lunch/snack optie', desc_en: 'Lunch/snack option', price: '—' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact', 'Visa', 'Mastercard'],
    student_perk: 'Gratis wifi',
    student_perk_en: 'Free wifi',
    tips: 'Vrijdag- en zaterdagavond meestal erg druk rond Sint-Goriksplein.',
    tips_en: 'Usually very busy around Saint-Géry Square on Friday and Saturday nights.'
  },
  {
    id: 'ausoleil', name: 'Au Soleil.',
    cats: ['Drinken','Chillen','Studeren'], price: 1, coords: [50.84560886718737, 4.348052048168494],
    desc: 'Authentiek Brussels café in de Sint-Jacobswijk met groot terras, goedkope bieren en relaxte sfeer.',
    desc_en: 'Authentic Brussels cafe in the Saint-Jacques neighborhood with a large terrace, cheap beers and a relaxed atmosphere.',
    walk: 25, bike: 8, transit: 13, color: '#B46A43', favorite: true,
    address: 'Rue du Marché au Charbon 86, 1000 Bruxelles',
    phone: '+3225123430',
    hours: {
      'Maandag':   '09:30 – 01:00',
      'Dinsdag':   '09:30 – 01:00',
      'Woensdag':  '09:30 – 01:00',
      'Donderdag': '09:30 – 01:00',
      'Vrijdag':   '09:30 – 02:00',
      'Zaterdag':  '09:30 – 02:00',
      'Zondag':    '09:30 – 00:00'
    },
    hours_en: {
      'Monday':    '09:30 – 01:00',
      'Tuesday':   '09:30 – 01:00',
      'Wednesday': '09:30 – 01:00',
      'Thursday':  '09:30 – 01:00',
      'Friday':    '09:30 – 02:00',
      'Saturday':  '09:30 – 02:00',
      'Sunday':    '09:30 – 00:00'
    },
    long: 'Au Soleil is een klassiek Brussels café in de Sint-Jacobswijk, vlak bij het centrum. Het café bestaat al jaren en staat bekend om zijn groot terras, goedkope Belgische bieren and relaxte sfeer. Brusselse gidsen beschrijven het als één van de aangenaamste cafés van de buurt. Overdag zitten hier vaak mensen rustig koffie te drinken, lezen of werken, terwijl het ’s avonds levendiger wordt.',
    long_en: 'Au Soleil is a classic Brussels cafe in the Saint-Jacques neighborhood, near the center. The cafe has existed for years and is known for its large terrace, cheap Belgian beers and relaxed atmosphere. Brussels guides describe it as one of the pleasantest cafes in the neighborhood. During the day, people often sit here quietly drinking coffee, reading or working, while in the evening it becomes more lively.',
    why: ['Authentieke Brusselse café-sfeer', 'Groot terras bij goed weer', 'Goedkope Belgische bieren', 'Rustig overdag, levendig ’s avonds', 'Populair bij locals'],
    why_en: ['Authentic Brussels cafe atmosphere', 'Large terrace in good weather', 'Cheap Belgian beers', 'Quiet during the day, lively in the evening', 'Popular with locals'],
    menu: [
      { section: 'Drinks', section_en: 'Drinks',
        items: [
          { name: 'Belgische bieren', name_en: 'Belgian beers', desc: 'Chimay, Ciney, Westmalle', desc_en: 'Chimay, Ciney, Westmalle', price: '3,50 – 6,00' },
          { name: 'Koffie', name_en: 'Coffee', desc: 'Espresso en klassieke koffie', desc_en: 'Espresso and classic coffee', price: '—' },
          { name: 'Cocktails', name_en: 'Cocktails', desc: 'Klassieke cocktails beschikbaar', desc_en: 'Classic cocktails available', price: '—' }
        ]
      },
      { section: 'Food', section_en: 'Food',
        items: [
          { name: 'Croque Monsieur', name_en: 'Croque Monsieur', desc: 'Kleine cafégerechten', desc_en: 'Small cafe dishes', price: '—' },
          { name: 'Pasta bolo', name_en: 'Pasta bolo', desc: 'Volgens Brusselse cafégidsen', desc_en: 'According to Brussels cafe guides', price: '—' },
          { name: 'Soep', name_en: 'Soup', desc: 'Kleine lunchoptie', desc_en: 'Small lunch option', price: '—' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact'],
    student_perk: 'Wifi beschikbaar',
    student_perk_en: 'Wifi available',
    tips: 'Overdag relatief rustig. In de zomer zit het terras vaak helemaal vol.',
    tips_en: 'Relatively quiet during the day. In summer the terrace is often completely full.'
  },
  {
    id: 'mortsubite', name: 'À La Mort Subite',
    website: 'https://www.alamortsubite.com/',
    cats: ['Drinken','Chillen','Eten'], price: 2, coords: [50.84862915991566, 4.356252575313457],
    desc: 'Iconisch historisch Brussels café met art deco interieur, lambiekbier en oude Brusselse sfeer.',
    desc_en: 'Iconic historic Brussels cafe with art deco interior, lambic beer and old Brussels atmosphere.',
    walk: 23, bike: 8, transit: 12, color: '#7B5A42', favorite: true,
    address: 'Rue Montagne aux Herbes Potagères 7, 1000 Bruxelles',
    phone: '+3225131318',
    hours: {
      'Maandag':   '11:00 – 23:00',
      'Dinsdag':   '11:00 – 23:00',
      'Woensdag':  '11:00 – 23:00',
      'Donderdag': '11:00 – 23:00',
      'Vrijdag':   '11:00 – 23:00',
      'Zaterdag':  '11:00 – 23:00',
      'Zondag':    'Gesloten'
    },
    hours_en: {
      'Monday':    '11:00 – 23:00',
      'Tuesday':   '11:00 – 23:00',
      'Wednesday': '11:00 – 23:00',
      'Thursday':  '11:00 – 23:00',
      'Friday':    '11:00 – 23:00',
      'Saturday':  '11:00 – 23:00',
      'Sunday':    'Closed'
    },
    long: 'À La Mort Subite is één van de bekendste historische cafés van Brussel. Het café bestaat sinds de jaren 1920 en staat bekend om zijn indrukwekkende art deco interieur, houten banken and traditionele lambiekbieren. De naam komt van een oud dobbelspel dat hier vroeger gespeeld werd. Online reviews and Brusselse gidsen beschrijven het café vaak als een plek die aanvoelt alsof je terug in de tijd stapt.',
    long_en: 'À La Mort Subite is one of the most famous historical cafes in Brussels. The cafe has existed since the 1920s and is known for its impressive art deco interior, wooden benches and traditional lambic beers. The name comes from an old dice game that used to be played here. Online reviews and Brussels guides often describe the cafe as a place that feels like stepping back in time.',
    why: ['Historisch Brussels café sinds de jaren 1920', 'Iconisch art deco interieur', 'Bekend voor lambiek- en geuzebieren', 'Unieke oude Brusselse sfeer', 'Populaire stop voor toeristen én locals'],
    why_en: ['Historical Brussels cafe since the 1920s', 'Iconic art deco interior', 'Known for lambic and gueuze beers', 'Unique old Brussels atmosphere', 'Popular stop for tourists and locals'],
    menu: [
      { section: 'Bieren', section_en: 'Beers',
        items: [
          { name: 'Mort Subite Lambic', name_en: 'Mort Subite Lambic', desc: 'Klassieke lambiek', desc_en: 'Classic lambic', price: '—' },
          { name: 'Kriek', name_en: 'Kriek', desc: 'Belgisch fruitbier', desc_en: 'Belgian fruit beer', price: '—' },
          { name: 'Geuze', name_en: 'Geuze', desc: 'Traditioneel Brussels bier', desc_en: 'Traditional Brussels beer', price: '—' }
        ]
      },
      { section: 'Food', section_en: 'Food',
        items: [
          { name: 'Croques', name_en: 'Croques', desc: 'Klassieke cafégerechten', desc_en: 'Classic cafe dishes', price: '—' },
          { name: 'Toast & snacks', name_en: 'Toast & snacks', desc: 'Kleine gerechten', desc_en: 'Small dishes', price: '—' },
          { name: 'Desserts', name_en: 'Desserts', desc: 'Traditionele Brusselse desserts', desc_en: 'Traditional Brussels desserts', price: '—' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact', 'Visa', 'Mastercard'],
    student_perk: null,
    tips: 'Vaak erg druk door toeristen. Mooiste moment is in de late namiddag wanneer het iets rustiger is.',
    tips_en: 'Often very busy with tourists. Most beautiful moment is in the late afternoon when it is a bit quieter.'
  },
];

/* ===== Main Map & List Page Logic ===== */
if (document.getElementById('map')) {
  const state = {
    cats: new Set(),
    price: null,
    openNow: true,
    active: null
  };

  const map = L.map('map', {
    zoomControl: true,
    scrollWheelZoom: true,
    attributionControl: true
  }).setView(CAMPUS, 15);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    subdomains: 'abcd',
    attribution: '&copy; OpenStreetMap &copy; CARTO'
  }).addTo(map);

  const campusIcon = L.divIcon({
    className: '',
    html: '<div style="position:relative"><div class="campus-pin"></div><div class="campus-label">Campus Kaai</div></div>',
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });
  L.marker(CAMPUS, { icon: campusIcon, interactive: false, zIndexOffset: -100 }).addTo(map);

  const markers = {};
  function makePin(spot) {
    const cat = spot.cats[0];
    const glyph = CAT_GLYPH[cat] || '•';
    const fav = spot.favorite ? 'fav' : '';
    const star = spot.favorite ? '<span class="star">★</span>' : `<span class="glyph">${glyph}</span>`;
    return L.divIcon({
      className: '',
      html: `<div class="pin ${fav}" data-id="${spot.id}"><div class="body">${star}</div></div>`,
      iconSize: [32, 40],
      iconAnchor: [16, 40],
      popupAnchor: [0, -38]
    });
  }

  function popupHtml(spot) {
    const t = TRANSLATIONS[currentLang];
    const displayCats = spot.cats.map(c => t['cat' + c] || c);
    const tags = spot.cats.map((c, i) => `<span class="tag ${CAT_CLASS[c]}">${displayCats[i]}</span>`).join('');
    const priceTag = spot.price === 0
      ? `<span class="tag cat-gratis">${t.catGratis}</span>`
      : `<span class="tag price">${'€'.repeat(spot.price)}</span>`;
    const fav = spot.favorite ? `<span class="fav-badge" title="Favoriet">★</span>` : '';
    const dest = `${spot.coords[0]},${spot.coords[1]}`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${dest}&travelmode=walking`;
    
    const desc = currentLang === 'en' && spot.desc_en ? spot.desc_en : spot.desc;
    
    return `
      <div class="popup-thumb" style="background:${spot.color}">
        <div style="position:relative;z-index:1">${spot.name.toUpperCase()}</div>
      </div>
      <div class="popup-body">
        <h3 class="popup-title">${fav}${spot.name}</h3>
        <div class="popup-meta">${tags}${priceTag}</div>
        <p class="popup-desc">${desc}</p>
        <div class="popup-actions">
          <a class="btn-detail" href="spot.html?id=${spot.id}">${t.moreInfo}</a>
          <div class="popup-actions-row">
            <a class="btn-route-secondary" href="${url}" target="_blank" rel="noopener">${t.route}</a>
            <span class="popup-walk mono">${spot.walk} ${t.walkMin}</span>
          </div>
        </div>
      </div>
    `;
  }

  SPOTS.forEach(spot => {
    const m = L.marker(spot.coords, { icon: makePin(spot) });
    m.bindPopup(() => popupHtml(spot), { closeButton: true, autoPanPadding: [40,40] });
    m.on('click', () => setActive(spot.id, { fly: false }));
    m.on('popupclose', () => {
      if (state.active === spot.id) {
        state.active = null;
        renderList();
      }
    });
    markers[spot.id] = m;
    m.addTo(map);
  });

  function spotMatches(spot) {
    if (state.cats.size > 0) {
      const ok = [...state.cats].every(c => spot.cats.includes(c));
      if (!ok) return false;
    }
    if (state.price !== null) {
      if (spot.price !== state.price) return false;
    }
    return true;
  }

  function applyFilters() {
    let visible = 0;
    SPOTS.forEach(spot => {
      const m = markers[spot.id];
      const show = spotMatches(spot);
      if (show) {
        if (!map.hasLayer(m)) m.addTo(map);
        visible++;
      } else {
        if (map.hasLayer(m)) map.removeLayer(m);
      }
      // Update popup content if open
      if (m.isPopupOpen()) {
        m.setPopupContent(popupHtml(spot));
      }
    });
    document.getElementById('spotCount').textContent = visible;
    const heroCount = document.getElementById('spotCountHero');
    if (heroCount) heroCount.textContent = visible;
    renderList();
  }

  function renderList() {
    const list = document.getElementById('spotList');
    if (!list) return;
    const t = TRANSLATIONS[currentLang];
    const filtered = SPOTS.filter(spotMatches);
    if (filtered.length === 0) {
      list.innerHTML = `<div class="empty">${t.emptyList}</div>`;
      return;
    }
    list.innerHTML = filtered.map(spot => {
      const displayCats = spot.cats.map(c => t['cat' + c] || c);
      const tags = spot.cats.slice(0,2).map((c, i) => `<span class="tag ${CAT_CLASS[c]}">${displayCats[i]}</span>`).join('');
      const priceTag = spot.price === 0
        ? `<span class="tag cat-gratis">${t.catGratis}</span>`
        : `<span class="tag price">${'€'.repeat(spot.price)}</span>`;
      const fav = spot.favorite ? `<span class="fav-badge" title="Favoriet">★</span>` : '';
      const active = state.active === spot.id ? 'active' : '';
      const thumbLabel = spot.name.length > 22 ? spot.name.slice(0, 20) + '…' : spot.name;
      
      const desc = currentLang === 'en' && spot.desc_en ? spot.desc_en : spot.desc;
      
      return `
        <article class="spot-card ${active}" data-id="${spot.id}" tabindex="0">
          <div class="spot-thumb" style="background:${spot.color}">
            <span style="position:relative;z-index:1">${thumbLabel}</span>
          </div>
          <div class="spot-body">
            <div class="spot-title-row">
              ${fav}<span class="name">${spot.name}</span>
            </div>
            <div class="spot-meta">${tags}${priceTag}</div>
            <p class="spot-desc">${desc.split('.')[0]}.</p>
            <div class="spot-foot mono">
              <svg class="walk-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M13 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7.5 22l2-9-2.5-1v-5l4.5-2 3.5 2 2 4 2 1-1 2-3-1.5-1-2v3l3 4-1 4h-2l1-3-3-3-2 6h-2.5z"/></svg>
              ${spot.walk} ${t.walkMinCampus}
            </div>
          </div>
        </article>
      `;
    }).join('');

    list.querySelectorAll('.spot-card').forEach(card => {
      card.addEventListener('click', () => {
        setActive(card.dataset.id, { fly: true });
      });
      card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setActive(card.dataset.id, { fly: true });
        }
      });
    });
  }

  function setActive(id, { fly = true } = {}) {
    state.active = id;
    Object.entries(markers).forEach(([sid, m]) => {
      const el = m.getElement();
      if (!el) return;
      const pinEl = el.querySelector('.pin');
      if (pinEl) pinEl.classList.toggle('is-active', sid === id);
    });
    const spot = SPOTS.find(s => s.id === id);
    if (!spot) return;
    if (fly) {
      if (window.matchMedia('(max-width: 820px)').matches) {
        switchView('map');
      }
      map.flyTo(spot.coords, 16, { duration: 0.6 });
      setTimeout(() => markers[id].openPopup(), 500);
    } else {
      markers[id].openPopup();
    }
    renderList();
    const card = document.querySelector(`.spot-card[data-id="${id}"]`);
    if (card) card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  document.querySelectorAll('#catChips .chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.cat;
      if (state.cats.has(cat)) state.cats.delete(cat);
      else state.cats.add(cat);
      btn.classList.toggle('on');
      applyFilters();
    });
  });
  document.querySelectorAll('#priceChips .chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = parseInt(btn.dataset.price, 10);
      if (state.price === p) {
        state.price = null;
        btn.classList.remove('on');
      } else {
        state.price = p;
        document.querySelectorAll('#priceChips .chip').forEach(b => b.classList.remove('on'));
        btn.classList.add('on');
      }
      applyFilters();
    });
  });
  const openNowBtn = document.getElementById('openNow');
  if (openNowBtn) {
    openNowBtn.addEventListener('click', (e) => {
      state.openNow = !state.openNow;
      e.currentTarget.classList.toggle('on', state.openNow);
      e.currentTarget.setAttribute('aria-pressed', String(state.openNow));
    });
  }
  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.cats.clear();
      state.price = null;
      document.querySelectorAll('#catChips .chip, #priceChips .chip').forEach(b => b.classList.remove('on'));
      state.openNow = true;
      if (openNowBtn) openNowBtn.classList.add('on');
      applyFilters();
      map.flyTo(CAMPUS, 15, { duration: 0.5 });
      map.closePopup();
    });
  }

  function switchView(v) {
    document.body.classList.remove('view-map','view-list');
    document.body.classList.add('view-' + v);
    document.querySelectorAll('.view-tab').forEach(t => t.classList.toggle('on', t.dataset.view === v));
    if (v === 'map') {
      setTimeout(() => map.invalidateSize(), 60);
    }
  }
  document.querySelectorAll('.view-tab').forEach(t => {
    t.addEventListener('click', () => switchView(t.dataset.view));
  });

  applyFilters();
  window.addEventListener('load', () => setTimeout(() => map.invalidateSize(), 100));
}

/* ===== Detail Page Logic ===== */
function renderDetail() {
  const root = document.getElementById('root');
  if (!root) return;
  
  const params = new URLSearchParams(location.search);
  const id = params.get('id');
  const spot = (window.SPOTS || []).find(s => s.id === id);
  const t = TRANSLATIONS[currentLang];

  if (!spot) {
    root.innerHTML = `
      <div class="notfound">
        <h1>${t.spotNotFound}</h1>
        <p>${t.spotNotFoundDesc.replace('{id}', id || '')}</p>
        <p><a class="cta" href="index.html" style="display:inline-block;margin-top:12px">${t.backToMapDetail}</a></p>
      </div>`;
    return;
  }

  document.title = `${spot.name} — KaaiSpots`;

  const displayCats = spot.cats.map(c => t['cat' + c] || c);
  const tags = spot.cats.map((c, i) => `<span class="tag ${CAT_CLASS[c]}">${displayCats[i]}</span>`).join('');
  const priceTag = spot.price === 0
    ? `<span class="tag cat-gratis">${t.catGratis}</span>`
    : `<span class="tag price">${'€'.repeat(spot.price)}</span>`;
  const favBadge = spot.favorite ? `<span class="badge fav">${t.favTeam}</span>` : '';

  const days = currentLang === 'en' 
    ? ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    : ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];
  const todayName = days[new Date().getDay()];

  let hoursHtml = '';
  const hours = currentLang === 'en' && spot.hours_en ? spot.hours_en : spot.hours;
  if (hours) {
    hoursHtml = '<dl class="hours">' + Object.entries(hours).map(([k, v]) => {
      const isToday = k === todayName;
      let val = v;
      if (currentLang === 'en' && v === 'Gesloten') val = 'Closed';
      return `<dt class="${isToday ? 'today' : ''}">${k}</dt><dd>${val || ''}</dd>`;
    }).join('') + '</dl>';
  }

  let menuHtml = '';
  if (spot.menu && spot.menu.length) {
    const sectionTitle = spot.cats.includes('Cultuur') && !spot.cats.includes('Eten') && !spot.cats.includes('Drinken') 
      ? t.whatToSee 
      : t.whatTheySell;
      
    menuHtml = `
      <section>
        <h2 class="section-title">${sectionTitle}</h2>
        ${spot.menu.map(s => `
          <div class="menu-section">
            <h3>${currentLang === 'en' && s.section_en ? s.section_en : s.section}</h3>
            <div class="menu-table">
              ${s.items.map(item => `
                <div class="menu-row">
                  <div>
                    <div class="menu-name">${currentLang === 'en' && item.name_en ? item.name_en : item.name}</div>
                    ${(currentLang === 'en' && item.desc_en ? item.desc_en : item.desc) ? `<div class="menu-desc">${currentLang === 'en' && item.desc_en ? item.desc_en : item.desc}</div>` : ''}
                  </div>
                  <div class="menu-price ${/gratis/i.test(item.price) ? 'free' : ''}">${/^[0-9]/.test(item.price) ? '€ ' + item.price : item.price}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </section>`;
  }

  let facilitiesHtml = '';
  const facilities = spot.facilities;
  if (facilities && facilities.length) {
    facilitiesHtml = `
      <section>
        <h2 class="section-title">${t.facilities}</h2>
        <div class="facilities">
          ${facilities.map(f => `
            <div class="facility">
              <div class="fname">${currentLang === 'en' && f.name_en ? f.name_en : f.name}</div>
              <div class="fdesc">${currentLang === 'en' && f.desc_en ? f.desc_en : f.desc}</div>
            </div>`).join('')}
        </div>
      </section>`;
  }

  let whyHtml = '';
  const why = currentLang === 'en' && spot.why_en ? spot.why_en : spot.why;
  if (why && why.length) {
    whyHtml = `
      <section>
        <h2 class="section-title">${t.whyHere}</h2>
        <ul class="why-list">${why.map(w => `<li>${w}</li>`).join('')}</ul>
      </section>`;
  }

  let tipHtml = '';
  const tips = currentLang === 'en' && spot.tips_en ? spot.tips_en : spot.tips;
  if (tips) {
    tipHtml = `
      <section>
        <div class="tip">
          <div class="tip-glyph">i</div>
          <div class="tip-body"><strong>${t.insiderTip}</strong> ${tips}</div>
        </div>
      </section>`;
  }

  const dest = `${spot.coords[0]},${spot.coords[1]}`;
  const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${dest}&travelmode=walking`;

  let perkHtml = '';
  const perk = currentLang === 'en' && spot.student_perk_en ? spot.student_perk_en : spot.student_perk;
  if (perk) {
    perkHtml = `
      <div class="perk-block">
        <div class="label">${t.studentPerk}</div>
        <div class="body">${perk}</div>
      </div>`;
  }
  
  let paymentsHtml = '';
  if (spot.payments && spot.payments.length) {
    paymentsHtml = `
      <dt>${t.payment}</dt>
      <dd>${spot.payments.join(', ')}</dd>
    `;
  }

  let websiteHtml = '';
  if (spot.website) {
    websiteHtml = `
      <dt>${t.website}</dt>
      <dd>
        <a class="btn-website" href="${spot.website}" target="_blank" rel="noopener">
          ${currentLang === 'en' ? 'Go to website ↗' : 'Ga naar website ↗'}
        </a>
      </dd>
    `;
  }
    
  const longDesc = currentLang === 'en' && spot.long_en ? spot.long_en : (spot.long || spot.desc);

  root.innerHTML = `
    <div class="hero detail" style="background:${spot.color}">
      <div class="hero-inner">
        <div class="crumb">${displayCats.join(' · ')}</div>
        <h1>${spot.name}</h1>
        <div class="meta-row">
          ${tags}${priceTag}
          <span class="badge">${spot.walk} ${t.walkMin}${spot.bike ? ` · ${spot.bike} min fietsen` : ''}${spot.transit ? ` · ${spot.transit} min OV` : ''}</span>
          ${favBadge}
        </div>
      </div>
    </div>

    <div class="wrap">
      <main>
        <p class="lede">${longDesc}</p>
        ${whyHtml}
        ${menuHtml}
        ${facilitiesHtml}
        ${tipHtml}
      </main>

      <aside class="side"> 

        <div class="info-card">
          <span class="open-now-pill">
            <span class="led"></span>${t.nowOpen}
          </span>
          <h3>${t.practical}</h3>
          <dl class="kv">
            ${websiteHtml}
            <dt>${t.address}</dt>
            <dd>${spot.address || '—'}</dd>
            ${spot.phone ? `
              <dt>${t.phone}</dt>
              <dd>
                <a href="tel:${spot.phone.replace(/\s/g,'')}">${spot.phone}</a>
              </dd>
            ` : ''}
            <dt>${t.fromCampus}</dt>
            <dd>
              ${spot.walk} ${t.walkMin}
              ${spot.bike ? `, ${spot.bike} min fietsen` : ''}
              ${spot.transit ? `, ${spot.transit} min OV` : ''}
            </dd>
            ${paymentsHtml}
          </dl>
        </div>

        ${hoursHtml ? `
        <div class="info-card">
          <h3>${t.hours}</h3>
          ${hoursHtml}
        </div>` : ''}

        ${perkHtml}

        <a class="cta" href="${routeUrl}" target="_blank" rel="noopener">${t.routeGoogle}</a>
        <a class="cta secondary" href="index.html">${t.backToMapDetail}</a>
      </aside>
    </div>`;
}

if (document.getElementById('root')) {
  renderDetail();
}

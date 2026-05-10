/* ===== KaaiSpots — gedeelde data ===== */
window.CAMPUS = [50.84232308508647, 4.322822277113688];

window.CAT_GLYPH = {
  Eten: '🥖', Drinken: '☕', Studeren: '📖',
  Chillen: '🌳', Cultuur: '◐', Gratis: '∅'
};
window.CAT_CLASS = {
  Eten: 'cat-eten', Drinken: 'cat-drinken', Studeren: 'cat-studeren',
  Chillen: 'cat-chillen', Cultuur: 'cat-cultuur', Gratis: 'cat-gratis'
};

window.SPOTS = [
  {
    id: 'castelao', name: 'Établissement Castelao',
    cats: ['Eten'], price: 1, coords: [50.84009017991707, 4.3258508412449075],
    desc: 'Onze vaste broodjeszaak. Belegde baguette, vriendelijke bazin, geen poespas.',
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
    long: 'Een tegelvloer uit 1962, een toonbank vol charcuterie en madame Castelao die elke student bij naam kent. Studentenkorting (-10%) op vertoon van je EhB-kaart, en als je vraagt om "den dagschotel" geeft ze meestal iets dat niet op de kaart staat.',
    why: ['Goedkoopste warme lunch in straal van 500m', 'Studentenkorting met EhB-kaart', '4 min wandelen vanaf de campus', 'Wifi vragen mag, maar werkt traag'],
    menu: [
      { section: 'Belegde broodjes',
        items: [
          { name: 'Boterham Boerenham', desc: 'Hesp, augurkjes, mosterd', price: '3,50' },
          { name: 'Baguette Italien',   desc: 'Salami, mozzarella, tomaat, pesto', price: '5,80' },
          { name: 'Vegabroodje',        desc: 'Hummus, geroosterde paprika, rucola', price: '5,20' },
          { name: 'Croque Castelao',    desc: 'Huisspecialiteit — kaas, hesp, bechamel', price: '6,50' }
        ]
      },
      { section: 'Warm',
        items: [
          { name: 'Soep van de dag',    desc: 'Met stuk brood', price: '3,00' },
          { name: 'Spaghetti bolognaise', desc: 'Familierecept', price: '7,50' },
          { name: 'Dagschotel',         desc: 'Wisselt — vraag aan de toog', price: '8,90' }
        ]
      },
      { section: 'Drank',
        items: [
          { name: 'Koffie',             desc: 'Klein / groot', price: '1,80 / 2,40' },
          { name: 'Verse jus',          desc: 'Sinaas, geperst per glas', price: '3,50' },
          { name: 'Pintje',             desc: 'Jupiler, na 11u', price: '2,80' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact', 'Payconiq'],
    student_perk: '−10% op vertoon van EhB-kaart',
    tips: 'Donderdag is dagschotel-dag (lasagne). Ga vroeg, om 12u30 staat er rij.'
  },

  {
    id: 'kafka', name: 'Café Kafka',
    cats: ['Drinken','Studeren'], price: 1, coords: [50.84927761999179, 4.3480804],
    desc: 'Brak lichtinval, sterke koffie, stopcontacten op elke tafel. Stilteplek tot 17u.',
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
    long: 'Voormalig boekenwinkeltje omgebouwd tot café. De achterzaal is officieel "stiltezone" tot 17u — laptops welkom, telefoongesprekken niet. Na 17u draait de muziek aan en wordt het een gewoon buurtcafé.',
    why: ['Stopcontact bij elke tafel', 'Wifi-paswoord op het bord (KAFKA2026)', 'Koffie blijft 1,80 — al jaren', 'Achterzaal is stil tot 17u'],
    menu: [
      { section: 'Koffie & thee',
        items: [
          { name: 'Espresso',           desc: '', price: '1,80' },
          { name: 'Cappuccino',         desc: 'Met of zonder cacao', price: '2,80' },
          { name: 'Flat white',         desc: 'Bonen van Or Coffee', price: '3,20' },
          { name: 'Verse muntthee',     desc: 'Met honing', price: '3,00' }
        ]
      },
      { section: 'Bier op tap',
        items: [
          { name: 'Jupiler',            desc: '25cl', price: '2,80' },
          { name: 'Karmeliet Tripel',   desc: '33cl', price: '4,50' },
          { name: 'Brussels Calling',   desc: 'Lokaal, IPA', price: '4,80' }
        ]
      },
      { section: 'Klein eten',
        items: [
          { name: 'Toast kaas/hesp',    desc: '', price: '4,50' },
          { name: 'Bord olijven & brood', desc: '', price: '5,50' },
          { name: 'Charcuterie plank',  desc: 'Voor 2', price: '12,00' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact'],
    student_perk: 'Eerste koffie gratis bij eerste bezoek — vraag ernaar',
    tips: 'Ga naar de achterzaal voor stilte. Vrijdagavond is er soms vinyl-DJ.'
  },

  {
    id: 'parkvorst', name: 'Park van Vorst',
    cats: ['Chillen','Gratis'], price: 0, coords: [50.8252, 4.3278],
    desc: 'Open grasveld, vijver, weinig toeristen. Perfect voor een lange middagpauze.',
    walk: 12, color: '#1F6B2E',
    address: 'Park van Vorst, 1190 Vorst',
    hours: {
      'Alle dagen': 'Open 24/7 (verlicht tot 22u)'
    },
    long: 'Een van de weinige Brusselse parken waar je nog gewoon op het gras mag liggen zonder dat een agent komt zeggen dat het verboden is. Vijver met eenden, een tiental beuken die schaduw geven, en in de zomer wordt er soms gratis film geprojecteerd op een opblaasbaar scherm.',
    why: ['Helemaal gratis', 'Geen toeristen', 'Bankjes met rugleuning (zeldzaam)', 'Drinkfontein bij de hoofdingang'],
    menu: null,
    facilities: [
      { name: 'Drinkfontein',  desc: 'Bij hoofdingang' },
      { name: 'Toiletten',     desc: 'Gratis, geopend 9–17u' },
      { name: 'Speelplein',    desc: 'In het zuidelijke deel' },
      { name: 'Boules-pleintje', desc: 'Materiaal moet je zelf meebrengen' }
    ],
    student_perk: null,
    tips: 'In juli/augustus elke donderdagavond gratis openluchtcinema (vanaf 21u30).'
  },

  {
    id: 'abattoir', name: 'Abattoir Markt',
    cats: ['Eten','Cultuur'], price: 1, coords: [50.84321248872317, 4.325844886000292],
    desc: 'Vrijdag-zaterdag-zondag. Goedkope groenten, Marokkaanse bakkers, levendig.',
    walk: 8, color: '#B5430A',
    address: 'Ropsy Chaudronstraat 24, 1070 Anderlecht',
    hours: {
      'Maandag t/m donderdag': 'Gesloten',
      'Vrijdag':   '07:00 – 14:00',
      'Zaterdag':  '07:00 – 14:00',
      'Zondag':    '07:00 – 14:00'
    },
    long: 'De grootste overdekte markt van Brussel, op het terrein van een oud slachthuis. Ongeveer 150 kraampjes: groenten, vis, kruiden, stoffen, goedkope kleren, vers brood. Kom hier niet voor tafel-ervaring — kom om eten mee te nemen of een msemmen-pannenkoek voor 1,50 ter plaatse op te eten.',
    why: ['Groenten 30% goedkoper dan supermarkt', 'Verse Marokkaanse bakkers', 'Echt Brussel, geen toeristenmarkt', 'Open op zondag (zeldzaam)'],
    menu: [
      { section: 'Wat je hier vindt (richtprijs)',
        items: [
          { name: 'Kilo tomaten',        desc: 'Spaans of Marokkaans', price: '1,50 – 2,00' },
          { name: 'Msemmen',             desc: 'Marokkaanse pannenkoek, vers', price: '1,00 – 1,50' },
          { name: 'Stuk brood (1 kg)',   desc: 'Versgebakken, nog warm', price: '1,80' },
          { name: 'Olijven (250g)',      desc: 'Tien soorten', price: '2,50' },
          { name: 'Hele kip',            desc: 'Geroosterd, met patatten', price: '8,00 – 10,00' },
          { name: 'Couscous-mix (kruiden)', desc: 'Per zakje', price: '2,00' }
        ]
      }
    ],
    payments: ['Vooral cash — pin werkt soms'],
    student_perk: null,
    tips: 'Kom voor 11u, dan is alles vers en nog niet uitverkocht. Neem een eigen tas mee.'
  },
  
  {
    id: 'biblio', name: 'Bibliotheek Anderlecht',
    cats: ['Studeren','Gratis'], price: 0, coords: [50.8367, 4.3074],
    desc: 'Stille verdieping op 2. Gratis wifi, lange tafels, sluit om 19u door de week.',
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
    long: 'Drie verdiepingen. Beneden = boeken, kinderhoek, soms lawaai. Verdieping 1 = computers en kranten. Verdieping 2 = stiltezone, lange houten tafels, raam op de straat. Lid worden is gratis voor wie in Brussel woont, anders 5 euro per jaar.',
    why: ['Gratis lidmaatschap (-26 jaar)', 'Stille tafels op verdieping 2', 'Wifi: open netwerk, geen paswoord', '24/7 boeken-inleverbus aan ingang'],
    menu: null,
    facilities: [
      { name: 'Studie-tafels',     desc: '~30 plaatsen op verdieping 2' },
      { name: 'Computers',         desc: '12 stuks, gratis met lidkaart' },
      { name: 'Wifi',              desc: 'Open, geen wachtwoord' },
      { name: 'Drukker',           desc: '0,10 / pagina zwart-wit' },
      { name: 'Watercooler',       desc: 'Bij de ingang' }
    ],
    student_perk: 'Gratis lidkaart onder 26 jaar',
    tips: 'Examenweek = vol. Kom voor 10u of zoek een plek op verdieping 1.'
  },

  {
    id: 'ramen', name: 'Takumi Tonkotsu Brussel',
    cats: ['Eten','Drinken'], price: 2, coords: [50.85016763409128, 4.3479046308424065],
    desc: 'Ramen-zaakje . Lunchformule 12 euro, drukst rond 13u.',
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
    long: 'Tien tafels, een open keuken, drie soorten ramen. De bouillon trekt 14 uur. Lunchformule (ramen + bijgerecht + drank) is 12 euro en is een van de beste deals in zuidelijk Brussel. Reserveren via Instagram-DM.',
    why: ['Lunchformule 12 euro', '14u-bouillon — geen poederzooi', 'Vegan ramen op de kaart', 'Reserveren makkelijk via Insta'],
    menu: [
      { section: 'Ramen',
        items: [
          { name: 'Tonkotsu',            desc: 'Klassiek varkensbouillon, chashu, ei', price: '14,50' },
          { name: 'Shoyu kip',           desc: 'Sojabouillon, gerookte kip', price: '13,50' },
          { name: 'Vegan miso',          desc: 'Tofu, paddenstoelen, mais', price: '13,00' }
        ]
      },
      { section: 'Bijgerechten',
        items: [
          { name: 'Gyoza (5)',           desc: 'Varken of groenten', price: '6,50' },
          { name: 'Edamame',             desc: 'Met zeezout', price: '4,00' },
          { name: 'Karaage',             desc: 'Gefrituurde kip, 6 stuks', price: '7,50' }
        ]
      },
      { section: 'Lunchformule (12u – 14u30)',
        items: [
          { name: 'Ramen + edamame + thee', desc: 'Alle ramen behalve tonkotsu', price: '12,00' }
        ]
      }
    ],
    payments: ['Bancontact', 'Cash', 'Payconiq'],
    student_perk: null,
    tips: 'Reserveer via @tonkotsubxl op Instagram. Walk-in voor 12u30 lukt meestal nog.'
  },

];

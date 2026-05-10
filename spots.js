/* ===== KaaiSpots — gedeelde data ===== */
window.CAMPUS = [50.8348, 4.3186];

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
    cats: ['Eten'], price: 1, coords: [50.8362, 4.3201],
    desc: 'Onze vaste broodjeszaak. Belegde baguette, vriendelijke bazin, geen poespas.',
    walk: 4, color: '#FF6B35', favorite: true,
    address: 'Bergensesteenweg 42, 1070 Anderlecht',
    phone: '+32 2 521 88 14',
    hours: {
      'Maandag':    '07:00 – 16:00',
      'Dinsdag':    '07:00 – 16:00',
      'Woensdag':   '07:00 – 16:00',
      'Donderdag':  '07:00 – 16:00',
      'Vrijdag':    '07:00 – 16:00',
      'Zaterdag':   '08:00 – 14:00',
      'Zondag':     'Gesloten'
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
    cats: ['Drinken','Studeren'], price: 1, coords: [50.8331, 4.3215],
    desc: 'Brak lichtinval, sterke koffie, stopcontacten op elke tafel. Stilteplek tot 17u.',
    walk: 6, color: '#4A2FAB',
    address: 'Dokter De Meersmanstraat 18, 1070 Anderlecht',
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
    cats: ['Eten','Cultuur'], price: 1, coords: [50.8378, 4.3270],
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
    id: 'kanaal', name: 'Kanaalkant Pier',
    cats: ['Chillen','Gratis'], price: 0, coords: [50.8390, 4.3158],
    desc: 'Stuk kade tegenover Sphinx. Bankjes, late zon, geen entree.',
    walk: 5, color: '#0F7185',
    address: 'Kade ter hoogte van Klein Eilandstraat 1, 1070 Anderlecht',
    hours: { 'Alle dagen': 'Altijd open' },
    long: 'Geen officiële naam, geen bordje. Gewoon een stuk kade waar in 2022 vier picknicktafels en zes bankjes werden gezet door de gemeente. Westkant van het kanaal — krijgt zon vanaf 16u tot zonsondergang. Op warme dagen volgepakt met studenten en jonge ouders, op donderdag verbazend rustig.',
    why: ['Avondzon tot 21u in de zomer', 'Kanaal-uitzicht zonder café-prijs', 'Eigen drank meebrengen mag', 'Geen muziek, geen drukte'],
    menu: null,
    facilities: [
      { name: 'Picknicktafels', desc: '4 stuks, met banken' },
      { name: 'Vuilnisbakken',  desc: 'Worden 2× per week leeggemaakt' },
      { name: 'Geen toiletten', desc: 'Dichtsbijzijnde: Delhaize op 200m' },
      { name: 'Geen drinkfontein', desc: 'Neem water mee' }
    ],
    student_perk: null,
    tips: 'Vrijdagavond brengt iemand bijna altijd een Bluetooth-speaker. Vroeg komen voor een tafel.'
  },

  {
    id: 'studio', name: 'Studio Heyvaert',
    cats: ['Cultuur','Gratis'], price: 0, coords: [50.8311, 4.3242],
    desc: 'Gratis expo wisselt elke maand. Vroeger een autohandel, nu kunstenaarscollectief.',
    walk: 7, color: '#9B1B3F',
    address: 'Heyvaertstraat 102, 1070 Anderlecht',
    hours: {
      'Maandag':    'Gesloten',
      'Dinsdag':    'Gesloten',
      'Woensdag':   '14:00 – 19:00',
      'Donderdag':  '14:00 – 19:00',
      'Vrijdag':    '14:00 – 22:00',
      'Zaterdag':   '12:00 – 22:00',
      'Zondag':     '12:00 – 18:00'
    },
    long: 'Vroeger een tweedehands-autohandelaar (de garagedeuren zijn er nog), sinds 2019 een collectief van 14 kunstenaars. Elke maand een nieuwe expo, altijd gratis. Vrijdagavond opening met gratis pintje en chips als je rond 19u langskomt.',
    why: ['Altijd gratis', 'Maandelijks nieuwe expo', 'Vrijdag-vernissage met gratis drank', 'Echt jong en lokaal — geen MoMA-vibes'],
    menu: [
      { section: 'Wat er deze maand loopt',
        items: [
          { name: '"Tegen de stroom" — Lila Vandeput', desc: 'Schilderijen + video, t/m 12 mei', price: 'Gratis' },
          { name: 'Open atelier (zaterdag)', desc: 'Praat met de kunstenaars', price: 'Gratis' }
        ]
      }
    ],
    payments: null,
    student_perk: 'Gratis catalogus voor studenten kunstrichtingen',
    tips: 'Vrijdag tussen 19–21u is er bijna altijd opening. Pintje gratis, sfeer gegarandeerd.'
  },

  {
    id: 'pita', name: 'Pita Aladin',
    cats: ['Eten'], price: 1, coords: [50.8345, 4.3158],
    desc: 'Pita falafel voor 6,50. Ze geven extra saus zonder vragen. Gesloten op zondag.',
    walk: 3, color: '#C25E0A',
    address: 'Bergensesteenweg 86, 1070 Anderlecht',
    phone: '+32 2 522 11 09',
    hours: {
      'Maandag t/m vrijdag': '11:00 – 22:00',
      'Zaterdag':  '11:00 – 23:00',
      'Zondag':    'Gesloten'
    },
    long: 'Klein zaakje, drie tafeltjes, pleksaus uit een ongelabeld plastic flesje. De falafel wordt vers gefrituurd — als het rustig is duurt het 4 minuten. Kebab is ok, maar kom hier voor de falafel.',
    why: ['Falafel voor 6,50 (vegan)', 'Gigantische porties', 'Gratis extra saus', 'Pita is dichter bij campus dan welke andere'],
    menu: [
      { section: 'Pita',
        items: [
          { name: 'Pita falafel',        desc: '6 balletjes, hummus, sla, tomaat', price: '6,50' },
          { name: 'Pita kip',            desc: 'Gegrilde kip', price: '7,00' },
          { name: 'Pita lam',            desc: 'Bavette van lam', price: '8,50' },
          { name: 'Pita mix',            desc: 'Kip + lam', price: '8,00' }
        ]
      },
      { section: 'Met patat',
        items: [
          { name: 'Schotel falafel',     desc: 'Met patatten en salade', price: '11,00' },
          { name: 'Schotel mix',         desc: 'Kip + lam, patatten', price: '13,50' }
        ]
      },
      { section: 'Drank',
        items: [
          { name: 'Frisdrank (33cl)',    desc: '', price: '2,00' },
          { name: 'Ayran',               desc: 'Yoghurtdrank', price: '2,50' },
          { name: 'Verse muntlimonade',  desc: '', price: '3,50' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact (vanaf 5 euro)'],
    student_perk: 'Frisdrank gratis bij schotel',
    tips: 'Tussen 13u en 14u is het hier vol — bestel via afhaal en wandel terug.'
  },

  {
    id: 'biblio', name: 'Bibliotheek Anderlecht',
    cats: ['Studeren','Gratis'], price: 0, coords: [50.8367, 4.3074],
    desc: 'Stille verdieping op 2. Gratis wifi, lange tafels, sluit om 19u door de week.',
    walk: 11, color: '#134B8A',
    address: 'Sint-Guidostraat 97, 1070 Anderlecht',
    hours: {
      'Maandag':    '13:00 – 19:00',
      'Dinsdag':    '10:00 – 19:00',
      'Woensdag':   '10:00 – 19:00',
      'Donderdag':  '13:00 – 19:00',
      'Vrijdag':    '10:00 – 18:00',
      'Zaterdag':   '10:00 – 16:00',
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
    id: 'ramen', name: 'Tonkotsu Brüssel',
    cats: ['Eten','Drinken'], price: 2, coords: [50.8302, 4.3422],
    desc: 'Ramen-zaakje aan rand Sint-Gillis. Lunchformule 12 euro, drukst rond 13u.',
    walk: 14, color: '#7A1F2D',
    address: 'Hallepoortlaan 12, 1060 Sint-Gillis',
    hours: {
      'Maandag':    'Gesloten',
      'Dinsdag t/m vrijdag': '12:00 – 14:30, 18:00 – 22:00',
      'Zaterdag':   '12:00 – 23:00',
      'Zondag':     '12:00 – 21:00'
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

  {
    id: 'koffie', name: 'OR Coffee Slowpoke',
    cats: ['Drinken','Studeren'], price: 2, coords: [50.8290, 4.3349],
    desc: 'Pour-over en flat white. Studeren mag, maar niet de hele dag voor één koffie.',
    walk: 10, color: '#3A2D1F',
    address: 'Bareelstraat 7, 1060 Sint-Gillis',
    hours: {
      'Maandag t/m vrijdag': '07:30 – 17:00',
      'Zaterdag':  '08:30 – 17:00',
      'Zondag':    '09:00 – 16:00'
    },
    long: 'Specialty coffee — bonen worden in Gent gebrand. Geen sirup, geen rietjes, geen Wifi-paswoord-plakkaat. Cake en sandwiches van een bakker uit Vorst. Studeren mag maar laptops na 12u alleen aan de bartafel — vaste regel.',
    why: ['Bonen van OR (Gent)', 'Cake van Charli Bakery', 'Vaste tafel met stopcontacten', 'Geen herrie, geen muzak'],
    menu: [
      { section: 'Koffie',
        items: [
          { name: 'Espresso',            desc: 'Single origin', price: '2,40' },
          { name: 'Flat white',          desc: '', price: '3,80' },
          { name: 'Filter (V60)',        desc: 'Zet 4 minuten', price: '4,20' },
          { name: 'Iced latte',          desc: 'In de zomer', price: '4,50' }
        ]
      },
      { section: 'Eten',
        items: [
          { name: 'Sandwich avocado',    desc: 'Op zuurdesem', price: '8,50' },
          { name: 'Banana bread',        desc: 'Per stuk', price: '4,00' },
          { name: 'Granola bowl',        desc: 'Met fruit en yoghurt', price: '7,50' }
        ]
      }
    ],
    payments: ['Bancontact', 'Cash', 'Apple Pay'],
    student_perk: 'Refill filterkoffie 1,50 ipv 4,20 (vraag ernaar)',
    tips: 'Laptops alleen aan de bartafel achteraan, vanaf 12u. Vraag bij twijfel.'
  },

  {
    id: 'kringwinkel', name: 'Tweedehands De Kaai',
    cats: ['Cultuur'], price: 1, coords: [50.8320, 4.3115],
    desc: 'Vintage truien, kookpotten, kapotte platenspelers. Donderdag is afprijsdag.',
    walk: 8, color: '#5C4A2E',
    address: 'Bergensesteenweg 187, 1070 Anderlecht',
    hours: {
      'Maandag':    'Gesloten',
      'Dinsdag t/m vrijdag': '10:00 – 18:00',
      'Zaterdag':   '10:00 – 17:00',
      'Zondag':     'Gesloten'
    },
    long: 'Loods van 800m² met alles tussen kleren, meubels, boeken, elektronica en de meest willekeurige kookpot. Personeel is sociale economie — vraag rustig, ze hebben tijd. Donderdag = "rode sticker dag", alles met een rode sticker is -50%.',
    why: ['Donderdag -50% op rode stickers', 'Truien tussen 3 en 8 euro', 'Kapotte spullen vaak gratis', 'Goed voor scenografie / props'],
    menu: [
      { section: 'Richtprijzen',
        items: [
          { name: 'Vintage trui',        desc: 'Wol, vaak jaren 80–90', price: '3,00 – 8,00' },
          { name: 'Spijkerbroek',        desc: 'Levi\'s soms tussenuit', price: '5,00 – 12,00' },
          { name: 'Kookpot',             desc: 'Geëmailleerd of inox', price: '2,00 – 6,00' },
          { name: 'Boek',                desc: 'Pocket of hardcover', price: '0,50 – 3,00' },
          { name: 'Vinyl (LP)',          desc: 'Per stuk', price: '1,00 – 5,00' },
          { name: 'Meubel klein',        desc: 'Stoel, tafeltje, lamp', price: '5,00 – 25,00' }
        ]
      }
    ],
    payments: ['Cash', 'Bancontact (vanaf 5 euro)'],
    student_perk: '−10% op donderdagen met studentenkaart',
    tips: 'Donderdag 10u opent → eerste klanten pakken het beste. Ga vroeg.'
  },

  {
    id: 'rooftop', name: 'Daktuin De Vaartkapoen',
    cats: ['Chillen','Drinken','Cultuur'], price: 2, coords: [50.8401, 4.3232],
    desc: 'Open van mei tot september. Pintje van 4 euro met uitzicht over het kanaal.',
    walk: 9, color: '#2E5C4A',
    address: 'Schoolstraat 76, 1080 Sint-Jans-Molenbeek (lift naar 4e verdieping)',
    hours: {
      'Mei – september alleen': '',
      'Maandag':    'Gesloten',
      'Dinsdag t/m donderdag': '17:00 – 23:00',
      'Vrijdag':    '17:00 – 01:00',
      'Zaterdag':   '14:00 – 01:00',
      'Zondag':     '14:00 – 22:00'
    },
    long: 'Daktuin op de 4e verdieping van een vroegere boekenuitgeverij. Hout, plantenbakken, parasol-zwermen, zicht op het kanaal én de Basiliek van Koekelberg. Soms livemuziek op zondag. Bij regen dicht — check Insta-stories voor het oordeel van de dag.',
    why: ['Uitzicht op kanaal én basiliek', 'Lokale bieren op tap', 'Zondag livemuziek (gratis)', 'Geen reservering nodig'],
    menu: [
      { section: 'Bier',
        items: [
          { name: 'Pintje (Brasserie de la Senne)', desc: 'Taras Boulba', price: '4,00' },
          { name: 'IPA Brussels Beer Project',      desc: 'Delta', price: '5,50' },
          { name: 'Geuze',                          desc: 'Cantillon, 33cl', price: '6,50' }
        ]
      },
      { section: 'Wijn & cocktails',
        items: [
          { name: 'Glas natuurwijn',     desc: 'Wit / oranje', price: '5,50' },
          { name: 'Spritz',              desc: 'Aperol of campari', price: '7,50' },
          { name: 'Negroni',             desc: 'Klassiek', price: '8,50' }
        ]
      },
      { section: 'Snacks',
        items: [
          { name: 'Bord olijven',        desc: '', price: '4,50' },
          { name: 'Kaasplank',           desc: 'Lokale kaas, 3 soorten', price: '11,00' },
          { name: 'Focaccia',            desc: 'Met kruidenboter', price: '5,00' }
        ]
      }
    ],
    payments: ['Bancontact', 'Cash'],
    student_perk: null,
    tips: 'Donderdag-zonsondergang is de move. Lift naar verdieping 4, deur staat open.'
  }
];

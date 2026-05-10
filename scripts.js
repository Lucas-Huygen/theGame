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
    website: 'https://kaffabar.be',
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
  {
  id: 'kaffabar',
  name: 'Kaffabar',
  cats: ['Drinken','Studeren','Eten'],
  price: 2,
  coords: [50.842998, 4.345641],
  desc: 'Specialty coffee aan Rouppeplein. Veel laptops, goeie brunch en rustige sfeer.',
  walk: 24,
  bike: 9,
  transit: 14,
  color: '#8C5E3C',
  favorite: true,

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

  long: 'Kaffabar is een vaste waarde geworden voor studenten, freelancers en koffiemensen in Brussel. Binnen hangt een rustige Scandinavische vibe met veel natuurlijk licht, houten tafels en genoeg plaats om een paar uur te werken. Ze serveren specialty coffee, slow coffee en stevige brunches. Vooral in de voormiddag zie je hier veel laptops en mensen die rustig zitten te studeren of werken.',

  why: [
    'Laptopvriendelijk buiten de lunchrush',
    'Specialty coffee & slow coffee',
    'Rustige sfeer om te studeren',
    'Sterke brunch en homemade pastries',
    'Terras op het Rouppeplein'
  ],

  menu: [
    {
      section: 'Koffie',
      items: [
        { name: 'Espresso', desc: 'House blend', price: '2,80' },
        { name: 'Flat White', desc: 'Dubbele espresso met gestoomde melk', price: '4,20' },
        { name: 'Filter Coffee', desc: 'V60 of Chemex', price: '4,50' },
        { name: 'Espresso Tonic', desc: 'Iced coffee signature', price: '5,50' }
      ]
    },

    {
      section: 'Ontbijt & lunch',
      items: [
        { name: 'Fresh Breakfast', desc: 'Granola, yoghurt, fruit', price: '9,50' },
        { name: 'Rustic Breakfast', desc: 'Brood, ei, kaas, confituur', price: '13,00' },
        { name: 'Lunch Tartines', desc: 'Open sandwiches van de dag', price: '11,50' },
        { name: 'Cake van de dag', desc: 'Homemade', price: '4,50' }
      ]
    },

    {
      section: 'Extra',
      items: [
        { name: 'Chai Latte', desc: 'Huisgemaakt', price: '4,80' },
        { name: 'Iced Tea', desc: 'Vers gemaakt', price: '4,20' },
        { name: 'Espresso Martini', desc: 'Vanaf de namiddag', price: '11,00' }
      ]
    }
  ],

  payments: ['Cash', 'Bancontact', 'Payconiq'],
  student_perk: 'Gratis wifi + veel stopcontacten',
  tips: 'Kom voor 11u als je rustig wilt studeren. Vrijdagmiddag zit het vaak helemaal vol.'
},
{
  id: 'izycoffee',
  name: 'Izy Coffee',
  website: 'https://www.izycoffee.be/',

  cats: ['Drinken','Studeren','Eten'],
  price: 2,

  coords: [50.848291, 4.347015],

  desc: 'Grote koffiebar in centrum Brussel met veel plaats, lange openingsuren en laptopvriendelijke sfeer.',

  walk: 22,
  bike: 8,
  transit: 13,

  color: '#D87B4A',
  favorite: true,

  address: 'Auguste Ortsstraat 9, 1000 Brussel',
  phone: '',

  hours: {
    'Maandag':   '07:00 – 22:00',
    'Dinsdag':   '07:00 – 22:00',
    'Woensdag':  '07:00 – 22:00',
    'Donderdag': '07:00 – 22:00',
    'Vrijdag':   '07:00 – 22:00',
    'Zaterdag':  '07:00 – 22:00',
    'Zondag':    '07:00 – 22:00'
  },

  long: 'Izy Coffee is één van de populairste study cafés in centrum Brussel. Door de lange openingsuren, vele zitplaatsen en snelle wifi zie je hier constant studenten en freelancers met laptops zitten. De sfeer is minder rustig dan specialty coffee bars zoals Kaffabar, maar ideaal als je lang wilt blijven werken of studeren. Ze serveren specialty coffee, iced drinks, matcha’s, vegan pastries en snelle ontbijt- of lunchopties.',

  why: [
    'Elke dag open tot 22u',
    'Veel plaats voor laptops',
    'Goede wifi en stopcontacten',
    'Populaire study spot bij studenten',
    'Snelle service voor tussen lessen'
  ],

  menu: [
    {
      section: 'Koffie',
      items: [
        { name: 'Flat White', desc: 'Dubbele espresso met melk', price: '4,40' },
        { name: 'Cappuccino', desc: 'House blend espresso', price: '4,20' },
        { name: 'Iced Latte', desc: 'Koude latte met ijs', price: '5,20' },
        { name: 'Espresso', desc: 'Classic espresso shot', price: '2,90' }
      ]
    },

    {
      section: 'Specials',
      items: [
        { name: 'Taro Latte', desc: 'Populaire signature drink', price: '6,20' },
        { name: 'Pandan Matcha', desc: 'Specialty matcha drink', price: '6,50' },
        { name: 'Speculicious Coffee', desc: 'Signature winter coffee', price: '6,80' }
      ]
    },

    {
      section: 'Food',
      items: [
        { name: 'Banana Bread', desc: 'Homemade style cake', price: '4,80' },
        { name: 'Vegan Pastries', desc: 'Wisselend aanbod', price: '4,50' },
        { name: 'Lunch Bun', desc: 'Snelle lunchoptie', price: '7,50' }
      ]
    }
  ],

  payments: ['Cash', 'Bancontact', 'Payconiq'],

  student_perk: 'Open tot laat + veel laptopplaatsen',

  tips: 'In de namiddag wordt het druk. Beste moment om rustig te studeren is voor 11u.'
},
{
  id: 'mokcoffee',
  name: 'MOK Coffee',

  website: 'https://mokcoffee.be/',

  cats: ['Drinken','Studeren','Eten'],
  price: 2,

  coords: [50.853005, 4.343961],

  desc: 'Bekende specialty coffee bar in de Dansaertwijk met rustige sfeer, top koffie en aparte laptopruimte.',

  walk: 18,
  bike: 7,
  transit: 11,

  color: '#6B4C3B',
  favorite: true,

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

  long: 'MOK Coffee is één van de bekendste specialty coffee bars van Brussel en wordt vaak genoemd als één van de beste koffieplekken van België. De zaak ligt in de Dansaertwijk en combineert minimalistische Scandinavische vibes met een heel rustige sfeer. Achteraan is er een aparte ruimte waar laptops welkom zijn, waardoor veel studenten en freelancers hier komen werken of studeren. Ze roasten hun eigen bonen en serveren filter coffee, espresso’s en seizoensgebonden brunchgerechten.',

  why: [
    'Eén van de bekendste specialty coffee bars van Brussel',
    'Aparte laptopruimte achteraan',
    'House-roasted koffiebonen',
    'Rustige Scandinavische sfeer',
    'Populair bij studenten en freelancers'
  ],

  menu: [
    {
      section: 'Koffie',
      items: [
        { name: 'Espresso', desc: 'House roast espresso', price: '3,00' },
        { name: 'Flat White', desc: 'Dubbele espresso met melk', price: '4,50' },
        { name: 'Filter Coffee', desc: 'Single origin hand brew', price: '5,50' },
        { name: 'Nitro Coffee', desc: 'Cold brew van het vat', price: '5,80' }
      ]
    },

    {
      section: 'Ontbijt & lunch',
      items: [
        { name: 'Avocado Toast', desc: 'Zuurdesembrood & kruiden', price: '13,50' },
        { name: 'Seasonal Brunch', desc: 'Vegetarische lunch van het seizoen', price: '15,00' },
        { name: 'Banana Bread', desc: 'Housemade banana bread', price: '4,80' },
        { name: 'Pastries', desc: 'Dagelijks vers gebakken', price: '4,50' }
      ]
    },

    {
      section: 'Extra',
      items: [
        { name: 'Matcha Latte', desc: 'Ceremonial grade matcha', price: '5,50' },
        { name: 'Oat Milk Upgrade', desc: 'Havermelk', price: '0,50' },
        { name: 'Coffee Beans', desc: 'House roasted bonen', price: 'Vanaf 16,00' }
      ]
    }
  ],

  payments: ['Cash', 'Bancontact', 'Payconiq'],

  student_perk: 'Laptopruimte achteraan + gratis wifi',

  tips: 'Beste moment om rustig te studeren is in de voormiddag. In het weekend vaak erg druk.'
},
{
  id: 'bouche',
  name: 'BOUCHE Specialty Coffee',

  cats: ['Drinken','Studeren','Eten'],
  price: 2,

  coords: [50.841842, 4.359421],

  desc: 'Specialty coffee vlak bij Naamsepoort met minimalistische inrichting en focus op filter coffee.',

  walk: 31,
  bike: 11,
  transit: 16,

  color: '#B88A6A',
  favorite: true,

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

  long: 'BOUCHE is een specialty coffee bar in het centrum van Brussel met focus op high-end filter coffee en Europese specialty roasters. Online wordt de zaak vaak genoemd als één van de betere specialty coffee spots van Brussel. De ruimte heeft een minimalistische inrichting met grote stenen toog en rustige sfeer.',

  why: [
    'Bekend in de Brusselse specialty coffee scene',
    'Focus op filter coffee en guest roasters',
    'Minimalistisch interieur',
    'Populair bij koffieliefhebbers',
    'Goede locatie vlak bij centrum'
  ],

  menu: [
    {
      section: 'Koffie',
      items: [
        { name: 'Espresso', desc: 'Specialty espresso', price: '3,60' },
        { name: 'Milk Drinks', desc: 'Latte / cappuccino', price: '4,60 – 5,20' },
        { name: 'Filter Coffee', desc: 'Hand brew / batch brew', price: '—' }
      ]
    },

    {
      section: 'Food',
      items: [
        { name: 'Pastries', desc: 'Dagelijks aanbod pastries', price: '—' }
      ]
    }
  ],

  payments: ['Bancontact', 'Cash'],

  student_perk: 'Wifi beschikbaar',

  tips: 'In het weekend vaak erg druk volgens online reviews.'
},
{
  id: 'taes',
  name: "Tae's sandwich",

  cats: ['Eten'],
  price: 1,

  coords: [50.84772931448716, 4.361518750700231],

  desc: 'Kleine sandwichzaak in centrum Brussel met rijk belegde broodjes en vriendelijke service.',

  walk: 26,
  bike: 9,
  transit: 14,

  color: '#C96A3D',
  favorite: true,

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

  long: 'Tae’s sandwich is een kleine broodjeszaak in het centrum van Brussel. Online reviews vermelden vooral de vriendelijke service, verse producten en goed belegde sandwiches. De zaak lijkt vooral populair als snelle lunchplek.',

  why: [
    'Verse ingrediënten volgens reviews',
    'Goed belegde sandwiches',
    'Kleine lokale zaak',
    'Snelle lunchspot',
    'Vriendelijke bediening'
  ],

  menu: [
    {
      section: 'Broodjes',
      items: [
        { name: 'Chicken Sandwich', desc: 'Kipbroodje', price: '—' },
        { name: 'Vegetarian Sandwich', desc: 'Vegetarische optie beschikbaar', price: '—' },
        { name: 'Homemade Dessert', desc: 'Huisgemaakt dessert volgens reviews', price: '—' }
      ]
    }
  ],

  payments: ['Bancontact', 'Cash'],

  student_perk: null,

  tips: 'Vooral geschikt voor snelle lunch. Openingsuren lijken beperkt.'
},
{
  id: 'fritland',
  name: 'Fritland',

  website: 'http://fritlandbrussels.be/acceuil',

  cats: ['Eten','Drinken'],
  price: 1,

  coords: [50.84772289252201, 4.349910972230997],

  desc: 'Legendarische Brusselse frituur vlak bij de Beurs. Grote porties, lange wachtrijen en open tot laat.',

  walk: 24,
  bike: 8,
  transit: 13,

  color: '#D6A02C',
  favorite: true,

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

  long: 'Fritland is één van de bekendste frituren van Brussel en bestaat sinds 1978. De zaak ligt vlak bij de Beurs en staat bekend om Belgische frieten, mitraillettes en late-night fastfood. Online reviews noemen vooral de grote porties, snelle service en centrale locatie. Het is vaak erg druk, zeker ’s avonds en in het weekend.',

  why: [
    'Bekende Brusselse frituur sinds 1978',
    'Open tot laat in de nacht',
    'Grote porties frieten',
    'Vlak bij de Beurs',
    'Populaire stop na het uitgaan'
  ],

  menu: [
    {
      section: 'Frieten & snacks',
      items: [
        { name: 'Verse frieten', desc: 'Belgische frieten', price: '3,50 – 5,50' },
        { name: 'Mitraillette', desc: 'Broodje met frieten en snack', price: '8,00' },
        { name: 'Fricadelle', desc: 'Klassieke Belgische snack', price: '3,00' },
        { name: 'Bicky Burger', desc: 'Belgische fastfoodklassieker', price: '5,00' }
      ]
    },

    {
      section: 'Sauzen',
      items: [
        { name: 'Andalouse', desc: 'Pittige Belgische saus', price: '1,00' },
        { name: 'Samurai', desc: 'Pikante mayo', price: '1,00' },
        { name: 'Tartaar', desc: 'Klassieke frituursaus', price: '1,00' }
      ]
    }
  ],

  payments: ['Cash', 'Bancontact'],

  student_perk: null,

  tips: 'Na 22u vaak erg druk. Veel mensen nemen hun frieten mee richting Grote Markt.'
},
{
  id: 'biamara',
  name: 'Bia Mara',

  website: 'https://www.biamara.com/',

  cats: ['Eten','Drinken'],
  price: 2,

  coords: [50.848637023774536, 4.350734920398734],

  desc: 'Populaire fish & chips spot vlak bij de Beurs met duurzame vis, homemade sauzen en creatieve smaken.',

  walk: 24,
  bike: 8,
  transit: 13,

  color: '#2E5B7A',
  favorite: true,

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

  long: 'Bia Mara is één van de bekendste fish & chips restaurants van Brussel. De zaak staat bekend om duurzame vissoorten, lichte krokante batter en homemade sauzen met internationale smaken. Online reviews noemen vooral de creatieve combinaties, grote porties en centrale locatie vlak bij de Beurs.',

  why: [
    'Bekende fish & chips spot in Brussel',
    'Duurzame vis en homemade sauzen',
    'Creatieve smaken en toppings',
    'Vlak bij de Beurs',
    'Populair bij toeristen én locals'
  ],

  menu: [
    {
      section: 'Fish & Chips',
      items: [
        { name: 'Classic Panko', desc: 'Krokante vis met frieten', price: '13,00' },
        { name: 'Lemon & Basil Tempura', desc: 'Tempura fish met frisse kruiden', price: '14,50' },
        { name: 'Indian Spiced Panko', desc: 'Fish & chips met curry-lime saus', price: '14,50' }
      ]
    },

    {
      section: 'Sides',
      items: [
        { name: 'Sweet Potato Fries', desc: 'Zoete aardappelfrietjes', price: '4,00' },
        { name: 'Minty Mushy Peas', desc: 'Klassieke mushy peas', price: '4,00' },
        { name: 'Vietnamese Salad', desc: 'Frisse salade', price: '4,00' }
      ]
    },

    {
      section: 'Sauzen',
      items: [
        { name: 'Garlic Truffle Sauce', desc: 'Knoflook & truffel', price: '1,00' },
        { name: 'Jalapeño Lime Sauce', desc: 'Pikant en fris', price: '1,00' },
        { name: 'Homemade Tartar', desc: 'Huisgemaakte tartaar', price: '1,00' }
      ]
    }
  ],

  payments: ['Cash', 'Bancontact'],

  student_perk: null,

  tips: 'Vrijdag- en zaterdagavond vaak lange wachtrij. Lunch is meestal rustiger.'
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
    const tags = spot.cats.map(c => `<span class="tag ${CAT_CLASS[c]}">${c}</span>`).join('');
    const priceTag = spot.price === 0
      ? `<span class="tag cat-gratis">Gratis</span>`
      : `<span class="tag price">${'€'.repeat(spot.price)}</span>`;
    const fav = spot.favorite ? `<span class="fav-badge" title="Favoriet">★</span>` : '';
    const dest = `${spot.coords[0]},${spot.coords[1]}`;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${dest}&travelmode=walking`;
    return `
      <div class="popup-thumb" style="background:${spot.color}">
        <div style="position:relative;z-index:1">${spot.name.toUpperCase()}</div>
      </div>
      <div class="popup-body">
        <h3 class="popup-title">${fav}${spot.name}</h3>
        <div class="popup-meta">${tags}${priceTag}</div>
        <p class="popup-desc">${spot.desc}</p>
        <div class="popup-actions">
          <a class="btn-detail" href="spot.html?id=${spot.id}">Meer info & menu →</a>
          <div class="popup-actions-row">
            <a class="btn-route-secondary" href="${url}" target="_blank" rel="noopener">Route ↗</a>
            <span class="popup-walk mono">${spot.walk} min wandelen</span>
          </div>
        </div>
      </div>
    `;
  }

  SPOTS.forEach(spot => {
    const m = L.marker(spot.coords, { icon: makePin(spot) });
    m.bindPopup(popupHtml(spot), { closeButton: true, autoPanPadding: [40,40] });
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
    });
    document.getElementById('spotCount').textContent = visible;
    const heroCount = document.getElementById('spotCountHero');
    if (heroCount) heroCount.textContent = visible;
    renderList();
  }

  function renderList() {
    const list = document.getElementById('spotList');
    if (!list) return;
    const filtered = SPOTS.filter(spotMatches);
    if (filtered.length === 0) {
      list.innerHTML = `<div class="empty"><strong>Geen spots gevonden</strong>Probeer een filter weg te halen of klik reset.</div>`;
      return;
    }
    list.innerHTML = filtered.map(spot => {
      const tags = spot.cats.slice(0,2).map(c => `<span class="tag ${CAT_CLASS[c]}">${c}</span>`).join('');
      const priceTag = spot.price === 0
        ? `<span class="tag cat-gratis">Gratis</span>`
        : `<span class="tag price">${'€'.repeat(spot.price)}</span>`;
      const fav = spot.favorite ? `<span class="fav-badge" title="Favoriet">★</span>` : '';
      const active = state.active === spot.id ? 'active' : '';
      const thumbLabel = spot.name.length > 22 ? spot.name.slice(0, 20) + '…' : spot.name;
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
            <p class="spot-desc">${spot.desc.split('.')[0]}.</p>
            <div class="spot-foot mono">
              <svg class="walk-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M13 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7.5 22l2-9-2.5-1v-5l4.5-2 3.5 2 2 4 2 1-1 2-3-1.5-1-2v3l3 4-1 4h-2l1-3-3-3-2 6h-2.5z"/></svg>
              ${spot.walk} min wandelen vanaf campus
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
if (document.getElementById('root')) {
  (function() {
    const params = new URLSearchParams(location.search);
    const id = params.get('id');
    const spot = (window.SPOTS || []).find(s => s.id === id);
    const root = document.getElementById('root');

    if (!spot) {
      root.innerHTML = `
        <div class="notfound">
          <h1>Spot niet gevonden</h1>
          <p>Geen spot met id "<span class="mono">${id || ''}</span>". Misschien is hij verwijderd, of de link klopt niet.</p>
          <p><a class="cta" href="KaaiSpots.html" style="display:inline-block;margin-top:12px">← Terug naar de kaart</a></p>
        </div>`;
      return;
    }

    document.title = `${spot.name} — KaaiSpots`;

    const tags = spot.cats.map(c => `<span class="tag ${CAT_CLASS[c]}">${c}</span>`).join('');
    const priceTag = spot.price === 0
      ? `<span class="tag cat-gratis">Gratis</span>`
      : `<span class="tag price">${'€'.repeat(spot.price)}</span>`;
    const favBadge = spot.favorite ? `<span class="badge fav">★ Favoriet van het team</span>` : '';

    const days = ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];
    const todayName = days[new Date().getDay()];

    let hoursHtml = '';
    if (spot.hours) {
      hoursHtml = '<dl class="hours">' + Object.entries(spot.hours).map(([k, v]) => {
        const isToday = k === todayName;
        return `<dt class="${isToday ? 'today' : ''}">${k}</dt><dd>${v || ''}</dd>`;
      }).join('') + '</dl>';
    }

    let menuHtml = '';
    if (spot.menu && spot.menu.length) {
      menuHtml = `
        <section>
          <h2 class="section-title">${spot.cats.includes('Cultuur') && !spot.cats.includes('Eten') && !spot.cats.includes('Drinken') ? 'Wat er te zien is' : 'Wat ze verkopen'}</h2>
          ${spot.menu.map(s => `
            <div class="menu-section">
              <h3>${s.section}</h3>
              <div class="menu-table">
                ${s.items.map(item => `
                  <div class="menu-row">
                    <div>
                      <div class="menu-name">${item.name}</div>
                      ${item.desc ? `<div class="menu-desc">${item.desc}</div>` : ''}
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
    if (spot.facilities && spot.facilities.length) {
      facilitiesHtml = `
        <section>
          <h2 class="section-title">Faciliteiten</h2>
          <div class="facilities">
            ${spot.facilities.map(f => `
              <div class="facility">
                <div class="fname">${f.name}</div>
                <div class="fdesc">${f.desc}</div>
              </div>`).join('')}
          </div>
        </section>`;
    }

    let whyHtml = '';
    if (spot.why && spot.why.length) {
      whyHtml = `
        <section>
          <h2 class="section-title">Waarom hier</h2>
          <ul class="why-list">${spot.why.map(w => `<li>${w}</li>`).join('')}</ul>
        </section>`;
    }

    let tipHtml = '';
    if (spot.tips) {
      tipHtml = `
        <section>
          <div class="tip">
            <div class="tip-glyph">i</div>
            <div class="tip-body"><strong>Insider tip.</strong> ${spot.tips}</div>
          </div>
        </section>`;
    }

    const dest = `${spot.coords[0]},${spot.coords[1]}`;
    const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${dest}&travelmode=walking`;

    let perkHtml = '';
    if (spot.student_perk) {
      perkHtml = `
        <div class="perk-block">
          <div class="label">Studentenvoordeel</div>
          <div class="body">${spot.student_perk}</div>
        </div>`;
    }
let paymentsHtml = '';

if (spot.payments && spot.payments.length) {
  paymentsHtml = `
    <dt>Betaling</dt>
    <dd>${spot.payments.join(', ')}</dd>
  `;
}

let websiteHtml = '';

if (spot.website) {
  websiteHtml = `
    <dt>Website</dt>
    <dd>
      <a class="btn-website" href="${spot.website}" target="_blank" rel="noopener">
        Ga naar website ↗
      </a>
    </dd>
  `;
}
    

    root.innerHTML = `
      <div class="hero detail" style="background:${spot.color}">
        <div class="hero-inner">
          <div class="crumb">${spot.cats.join(' · ')}</div>
          <h1>${spot.name}</h1>
          <div class="meta-row">
            ${tags}${priceTag}
            <span class="badge">${spot.walk} min wandelen${spot.bike ? ` · ${spot.bike} min fietsen` : ''}${spot.transit ? ` · ${spot.transit} min OV` : ''}</span>
            ${favBadge}
          </div>
        </div>
      </div>

      <div class="wrap">
        <main>
          <p class="lede">${spot.long || spot.desc}</p>
          ${whyHtml}
          ${menuHtml}
          ${facilitiesHtml}
          ${tipHtml}
        </main>

        <aside class="side"> 

  <div class="info-card">

    <span class="open-now-pill">
      <span class="led"></span>Nu open
    </span>

    <h3>Praktisch</h3>

    <dl class="kv">

      ${websiteHtml}

      <dt>Adres</dt>
      <dd>${spot.address || '—'}</dd>

      ${spot.phone ? `
        <dt>Telefoon</dt>
        <dd>
          <a href="tel:${spot.phone.replace(/\s/g,'')}">${spot.phone}</a>
        </dd>
      ` : ''}

      <dt>Vanaf campus</dt>
      <dd>
        ${spot.walk} min wandelen
        ${spot.bike ? `, ${spot.bike} min fietsen` : ''}
        ${spot.transit ? `, ${spot.transit} min OV` : ''}
      </dd>

      ${paymentsHtml}

    </dl>

  </div>

          ${hoursHtml ? `
          <div class="info-card">
            <h3>Openingsuren</h3>
            ${hoursHtml}
          </div>` : ''}

          ${perkHtml}

          <a class="cta" href="${routeUrl}" target="_blank" rel="noopener">Route via Google Maps →</a>
          <a class="cta secondary" href="KaaiSpots.html">← Terug naar de kaart</a>
        </aside>
      </div>`;
  })();
}

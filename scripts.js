/* ===== KaaiSpots — Data & Shared Logic ===== */
window.CAMPUS = [50.84232308508647, 4.322822277113688];

// Language management
window.CURRENT_LANG = localStorage.getItem('kaaispots-lang') || 'nl';

window.CAT_GLYPH = {
  Eten: '🥖', Drinken: '☕', Studeren: '📖',
  Chillen: '🌳', Cultuur: '◐', Gratis: '∅'
};
window.CAT_CLASS = {
  Eten: 'cat-eten', Drinken: 'cat-drinken', Studeren: 'cat-studeren',
  Chillen: 'cat-chillen', Cultuur: 'cat-cultuur', Gratis: 'cat-gratis'
};

// UI Text Translations
window.I18N = {
  nl: {
    // Header & Navigation
    tagline: 'door studenten, voor studenten',
    backToMap: '← terug naar de kaart',
    // Hero
    heroTitle: 'De buurt rond Campus Kaai, <span class="accent">eindelijk in kaart gebracht.</span>',
    heroDesc: '<strong>{count}</strong> plekken om te eten, studeren, chillen of gewoon te ontdekken — allemaal dicht bij campus Kaai.',
    heroMeta: 'plekken',
    heroLocation: 'Anderlecht · Kuregem · Sint-Gillis',
    // Filter
    openNow: 'Open nu',
    reset: 'Reset ✕',
    // Tabs
    mapTab: 'Kaart',
    listTab: 'Lijst',
    // Categories
    Eten: 'Eten',
    Drinken: 'Drinken',
    Studeren: 'Studeren',
    Chillen: 'Chillen',
    Cultuur: 'Cultuur',
    Gratis: 'Gratis',
    // List empty state
    noSpotsFound: 'Geen spots gevonden',
    noSpotsHelp: 'Probeer een filter weg te halen of klik reset.',
    // Walk time
    walkMinutes: 'min wandelen',
    walkFrom: 'min wandelen vanaf campus',
    bikeMinutes: 'min fietsen',
    transitMinutes: 'min OV',
    // Detail page
    moreInfo: 'Meer info & menu →',
    route: 'Route ↗',
    notFound: 'Spot niet gevonden',
    notFoundDesc: 'Geen spot met id "<span class="mono">{id}</span>". Misschien is hij verwijderd, of de link klopt niet.',
    backLink: '← Terug naar de kaart',
    favoriteTeam: '★ Favoriet van het team',
    practical: 'Praktisch',
    website: 'Ga naar website ↗',
    address: 'Adres',
    phone: 'Telefoon',
    payment: 'Betaling',
    openingHours: 'Openingsuren',
    studentDiscount: 'Studentenvoordeel',
    routeGoogle: 'Route via Google Maps →',
    whatToEat: 'Wat ze verkopen',
    whatToSee: 'Wat er te zien is',
    facilities: 'Faciliteiten',
    why: 'Waarom hier',
    insiderTip: 'Insider tip'
  },
  en: {
    // Header & Navigation
    tagline: 'by students, for students',
    backToMap: '← back to map',
    // Hero
    heroTitle: 'The neighborhood around Campus Kaai, <span class="accent">finally mapped out.</span>',
    heroDesc: '<strong>{count}</strong> spots to eat, study, chill or simply discover — all close to Campus Kaai.',
    heroMeta: 'spots',
    heroLocation: 'Anderlecht · Kuregem · Sint-Gillis',
    // Filter
    openNow: 'Open now',
    reset: 'Reset ✕',
    // Tabs
    mapTab: 'Map',
    listTab: 'List',
    // Categories
    Eten: 'Food',
    Drinken: 'Drinks',
    Studeren: 'Study',
    Chillen: 'Chill',
    Cultuur: 'Culture',
    Gratis: 'Free',
    // List empty state
    noSpotsFound: 'No spots found',
    noSpotsHelp: 'Try removing a filter or click reset.',
    // Walk time
    walkMinutes: 'min walk',
    walkFrom: 'min walk from campus',
    bikeMinutes: 'min bike',
    transitMinutes: 'min public transport',
    // Detail page
    moreInfo: 'More info & menu →',
    route: 'Route ↗',
    notFound: 'Spot not found',
    notFoundDesc: 'No spot with id "<span class="mono">{id}</span>". It may have been deleted or the link is incorrect.',
    backLink: '← Back to map',
    favoriteTeam: '★ Team favorite',
    practical: 'Practical info',
    website: 'Visit website ↗',
    address: 'Address',
    phone: 'Phone',
    payment: 'Payment',
    openingHours: 'Opening hours',
    studentDiscount: 'Student discount',
    routeGoogle: 'Route via Google Maps →',
    whatToEat: 'What they sell',
    whatToSee: 'What to see',
    facilities: 'Facilities',
    why: 'Why visit here',
    insiderTip: 'Insider tip'
  }
};

function t(key, vars = {}) {
  let text = window.I18N[window.CURRENT_LANG][key] || window.I18N.nl[key] || key;
  Object.entries(vars).forEach(([k, v]) => {
    text = text.replace('{' + k + '}', v);
  });
  return text;
}

function setLanguage(lang) {
  window.CURRENT_LANG = lang;
  localStorage.setItem('kaaispots-lang', lang);
  document.documentElement.lang = lang;
  location.reload();
}

(async () => {
  try {
    const res = await fetch('/api/spots');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    window.SPOTS = await res.json();
  } catch {
    // Fallback voor lokale ontwikkeling (geen Netlify functions actief)
    try {
      const res = await fetch('/spots.json');
      if (!res.ok) throw new Error();
      window.SPOTS = await res.json();
    } catch {
      console.error('KaaiSpots: kon spots niet laden');
      window.SPOTS = [];
    }
  }

   // Load translations from Supabase for non-Dutch languages
  async function loadTranslations() {
    if (window.CURRENT_LANG === 'nl' || !window.SPOTS || window.SPOTS.length === 0) {
      return; // No translations needed for Dutch
    }
    
    try {
      // Fetch all translations for the current language
      const response = await fetch(
        `https://udjhfoyhvxlcsyscwxwt.supabase.co/rest/v1/spot_translations?language=eq.${window.CURRENT_LANG}&select=*`,
        {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkamhmb3lodnhsY3N5c2N3eHd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0NzcwNjgsImV4cCI6MjA5NDA1MzA2OH0.Wv4pFtNFAgWlYlcf3xCempNHO4B1AseNToBvEa_nIlg'
          }
        }
      );
      
      if (!response.ok) {
        console.warn('Supabase translation query failed:', response.status);
        return;
      }
      
      const translations = await response.json();
      if (!Array.isArray(translations) || translations.length === 0) {
        console.warn('No translations found in Supabase');
        return;
      }
      
      // Build translation map
      const translationMap = {};
      translations.forEach(t => {
        translationMap[t.spot_id] = t;
      });
      
      // Apply translations to spot objects
      window.SPOTS.forEach(spot => {
        const trans = translationMap[spot.id];
        if (trans) {
          if (trans.name) spot.name = trans.name;
          if (trans.short_desc) spot.desc = trans.short_desc;
          if (trans.long_desc) spot.long = trans.long_desc;
          if (trans.tips) spot.tips = trans.tips;
          if (trans.student_perk !== null && trans.student_perk !== undefined) {
            spot.student_perk = trans.student_perk;
          }
          if (trans.why && Array.isArray(trans.why) && trans.why.length > 0) spot.why = trans.why;
          if (trans.menu && Array.isArray(trans.menu) && trans.menu.length > 0) spot.menu = trans.menu;
          if (trans.facilities && Array.isArray(trans.facilities) && trans.facilities.length > 0) spot.facilities = trans.facilities;
        }
      });
      
      console.log('Loaded translations for', Object.keys(translationMap).length, 'spots');
    } catch (err) {
      console.warn('Error loading translations from Supabase:', err.message);
      // Silently continue with Dutch content
    }
  }
  
  // Wait for translations to load before rendering
  await loadTranslations();

  // Set document language
  document.documentElement.lang = window.CURRENT_LANG;

  // Language toggle handlers (on all pages)
  document.querySelectorAll('.lang-toggle button').forEach(btn => {
    const lang = btn.textContent.trim().toLowerCase();
    btn.classList.toggle('on', lang === window.CURRENT_LANG);
    btn.addEventListener('click', () => {
      setLanguage(lang === 'nl' ? 'nl' : 'en');
    });
  });

  // Update tagline
  const tagline = document.querySelector('.tagline');
  if (tagline && window.CURRENT_LANG === 'en') {
    tagline.textContent = t('tagline');
  }

  // Update header back link
  const backLink = document.querySelector('.back-link');
  if (backLink && window.CURRENT_LANG === 'en') {
    backLink.textContent = t('backToMap');
  }

  // Update static UI text on main page
  if (document.getElementById('spotTotalCount') || document.getElementById('spotCountHero')) {
    const heroTitle = document.querySelector('.hero h1');
    const heroDesc = document.querySelector('.hero p');
    const openNowBtn = document.getElementById('openNow');
    const resetBtn = document.getElementById('resetBtn');
    const viewTabs = document.querySelectorAll('.view-tab');
    
    if (heroTitle && window.CURRENT_LANG === 'en') {
      heroTitle.innerHTML = t('heroTitle');
    }
    if (heroDesc && window.CURRENT_LANG === 'en') {
      const totalSpots = window.SPOTS ? window.SPOTS.length : 0;
      heroDesc.innerHTML = t('heroDesc', { count: totalSpots });
    }
    if (openNowBtn && window.CURRENT_LANG === 'en') {
      openNowBtn.querySelector('.label-text').textContent = t('openNow');
    }
    if (resetBtn && window.CURRENT_LANG === 'en') {
      resetBtn.textContent = t('reset');
    }
    viewTabs.forEach(tab => {
      const view = tab.dataset.view;
      tab.textContent = view === 'map' ? t('mapTab') : t('listTab');
    });

    // Translate category buttons
    document.querySelectorAll('#catChips .chip').forEach(btn => {
      const cat = btn.dataset.cat;
      const glyphEl = btn.querySelector('.glyph');
      if (glyphEl && window.CURRENT_LANG === 'en') {
        const glyphHtml = glyphEl.innerHTML;
        btn.innerHTML = `<span class="glyph">${glyphHtml}</span>${t(cat)}`;
      }
    });

    // Translate price chip labels if needed
    document.querySelectorAll('#priceChips .chip').forEach(btn => {
      // Price chips are just € symbols, no translation needed
    });
  }

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

    // Update hero meta on load and when filters change
    function updateHeroMeta() {
      const heroMeta = document.querySelector('.hero-meta');
      if (heroMeta) {
        const spotCountEl = heroMeta.querySelector('.hero-count strong');
        if (spotCountEl) {
          const count = spotCountEl.textContent;
          const metaText = heroMeta.querySelector('.hero-meta > span:nth-child(3)');
          if (metaText && window.CURRENT_LANG === 'en') {
            metaText.textContent = t('heroLocation');
          }
        }
      }
    }
    updateHeroMeta();

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
      const tags = spot.cats.map(c => `<span class="tag ${CAT_CLASS[c]}">${t(c)}</span>`).join('');
      const priceTag = spot.price === 0
        ? `<span class="tag cat-gratis">${t('Gratis')}</span>`
        : `<span class="tag price">${'€'.repeat(spot.price)}</span>`;
      const fav = spot.favorite ? `<span class="fav-badge" title="${t('favoriteTeam')}">★</span>` : '';
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
            <a class="btn-detail" href="spot.html?id=${spot.id}" data-track="more_info_click" data-track-spot="${spot.id}">${t('moreInfo')}</a>
            <div class="popup-actions-row">
              <a class="btn-route-secondary" href="${url}" target="_blank" rel="noopener" data-track="route_click" data-track-spot="${spot.id}" data-track-source="popup">${t('route')}</a>
              <span class="popup-walk mono">${spot.walk} ${t('walkMinutes')}</span>
            </div>
          </div>
        </div>
      `;
    }

    SPOTS.forEach(spot => {
      const m = L.marker(spot.coords, { icon: makePin(spot) });
      m.bindPopup(popupHtml(spot), { closeButton: true, autoPanPadding: [40,40] });
      m.on('click', () => {
        if (window.kst) window.kst.track('pin_click', { spot: spot.id, name: spot.name });
        setActive(spot.id, { fly: false });
      });
      m.on('popupclose', () => {
        if (state.active === spot.id) {
          state.active = null;
          renderList();
        }
      });
      markers[spot.id] = m;
      m.addTo(map);
    });

    function isOpenNow(spot) {
      if (!spot.hours) return true;
      const days = ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];
      const today = spot.hours[days[new Date().getDay()]];
      if (!today || today === 'Gesloten') return false;
      const m = today.match(/(\d{1,2}:\d{2})\s*[–\-]\s*(\d{1,2}:\d{2})/);
      if (!m) return true;
      const toMin = t => { const [h, mn] = t.split(':').map(Number); return h * 60 + mn; };
      const cur = new Date().getHours() * 60 + new Date().getMinutes();
      return cur >= toMin(m[1]) && cur < toMin(m[2]);
    }

    function spotMatches(spot) {
      if (state.cats.size > 0) {
        const ok = [...state.cats].every(c => spot.cats.includes(c));
        if (!ok) return false;
      }
      if (state.price !== null) {
        if (spot.price !== state.price) return false;
      }
      if (state.openNow && !isOpenNow(spot)) return false;
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
      
      // Update hero description with spot count
      const heroDesc = document.querySelector('.hero p');
      if (heroDesc) {
        heroDesc.innerHTML = t('heroDesc', { count: visible });
      }
      
      renderList();
    }

    function renderList() {
      const list = document.getElementById('spotList');
      if (!list) return;
      const filtered = SPOTS.filter(spotMatches);
      if (filtered.length === 0) {
        list.innerHTML = `<div class="empty"><strong>${t('noSpotsFound')}</strong>${t('noSpotsHelp')}</div>`;
        return;
      }
      list.innerHTML = filtered.map(spot => {
        const tags = spot.cats.slice(0,2).map(c => `<span class="tag ${CAT_CLASS[c]}">${t(c)}</span>`).join('');
        const priceTag = spot.price === 0
          ? `<span class="tag cat-gratis">${t('Gratis')}</span>`
          : `<span class="tag price">${'€'.repeat(spot.price)}</span>`;
        const fav = spot.favorite ? `<span class="fav-badge" title="${t('favoriteTeam')}">★</span>` : '';
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
                ${spot.walk} ${t('walkFrom')}
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
      const cat = btn.dataset.cat;
      // Update label if in English
      if (window.CURRENT_LANG === 'en') {
        const glyphEl = btn.querySelector('.glyph');
        if (glyphEl) {
          const glyphHtml = glyphEl.innerHTML;
          btn.innerHTML = `<span class="glyph">${glyphHtml}</span>${t(cat)}`;
        }
      }
      btn.addEventListener('click', () => {
        if (cat === 'Gratis') {
          if (state.price === 0) {
            state.price = null;
            btn.classList.remove('on');
          } else {
            state.price = 0;
            document.querySelectorAll('#priceChips .chip').forEach(b => b.classList.remove('on'));
            btn.classList.add('on');
          }
        } else {
          if (state.cats.has(cat)) state.cats.delete(cat);
          else state.cats.add(cat);
          btn.classList.toggle('on');
        }
        if (window.kst) window.kst.track('filter_use', { filter: 'category', value: cat });
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
          document.querySelector('#catChips .chip[data-cat="Gratis"]')?.classList.remove('on');
          btn.classList.add('on');
        }
        if (window.kst) window.kst.track('filter_use', { filter: 'price', value: String(p) });
        applyFilters();
      });
    });
    const openNowBtn = document.getElementById('openNow');
    if (openNowBtn) {
      openNowBtn.addEventListener('click', (e) => {
        state.openNow = !state.openNow;
        e.currentTarget.classList.toggle('on', state.openNow);
        e.currentTarget.setAttribute('aria-pressed', String(state.openNow));
        if (window.kst) window.kst.track('filter_use', { filter: 'open_now', value: state.openNow ? 'on' : 'off' });
        applyFilters();
      });
    }
    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (window.kst) window.kst.track('filter_use', { filter: 'reset', value: 'all' });
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
            <h1>${t('notFound')}</h1>
            <p>${t('notFoundDesc', { id: id || '' })}</p>
            <p><a class="cta" href="index.html" style="display:inline-block;margin-top:12px">${t('backLink')}</a></p>
          </div>`;
        return;
      }

      document.title = `${spot.name} — KaaiSpots`;

      const tags = spot.cats.map(c => `<span class="tag ${CAT_CLASS[c]}">${t(c)}</span>`).join('');
      const priceTag = spot.price === 0
        ? `<span class="tag cat-gratis">${t('Gratis')}</span>`
        : `<span class="tag price">${'€'.repeat(spot.price)}</span>`;
      const favBadge = spot.favorite ? `<span class="badge fav">${t('favoriteTeam')}</span>` : '';

      const days = window.CURRENT_LANG === 'en' 
        ? ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        : ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];
      const todayName = days[new Date().getDay()];

      // Map Dutch day names to current language
      const dayTranslationMap = {
        'Zondag': 'Sunday',
        'Maandag': 'Monday',
        'Dinsdag': 'Tuesday',
        'Woensdag': 'Wednesday',
        'Donderdag': 'Thursday',
        'Vrijdag': 'Friday',
        'Zaterdag': 'Saturday'
      };

      let hoursHtml = '';
      if (spot.hours) {
        hoursHtml = '<dl class="hours">' + Object.entries(spot.hours).map(([k, v]) => {
          const displayDay = window.CURRENT_LANG === 'en' ? dayTranslationMap[k] || k : k;
          const isToday = displayDay === todayName;
          const displayValue = window.CURRENT_LANG === 'en' && v === 'Gesloten' ? 'Closed' : v;
          return `<dt class="${isToday ? 'today' : ''}">${displayDay}</dt><dd>${displayValue || ''}</dd>`;
        }).join('') + '</dl>';
      }

      let menuHtml = '';
      if (spot.menu && spot.menu.length) {
        const menuTitle = spot.cats.includes('Cultuur') && !spot.cats.includes('Eten') && !spot.cats.includes('Drinken') 
          ? t('whatToSee') 
          : t('whatToEat');
        menuHtml = `
          <section>
            <h2 class="section-title">${menuTitle}</h2>
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
                      <div class="menu-price ${/gratis|free/i.test(item.price) ? 'free' : ''}">${/^[0-9]/.test(item.price) ? '€ ' + item.price : item.price}</div>
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
            <h2 class="section-title">${t('facilities')}</h2>
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
            <h2 class="section-title">${t('why')}</h2>
            <ul class="why-list">${spot.why.map(w => `<li>${w}</li>`).join('')}</ul>
          </section>`;
      }

      let tipHtml = '';
      if (spot.tips) {
        tipHtml = `
          <section>
            <div class="tip">
              <div class="tip-glyph">i</div>
              <div class="tip-body"><strong>${t('insiderTip')}.</strong> ${spot.tips}</div>
            </div>
          </section>`;
      }

      const dest = `${spot.coords[0]},${spot.coords[1]}`;
      const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${dest}&travelmode=walking`;

      let paymentsHtml = '';
      if (spot.payments && spot.payments.length) {
        paymentsHtml = `
          <dt>${t('payment')}</dt>
          <dd>${spot.payments.join(', ')}</dd>
        `;
      }

      let websiteHtml = '';
      if (spot.website) {
        websiteHtml = `
          <dt>${t('website')}</dt>
          <dd>
            <a class="btn-website" href="${spot.website}" target="_blank" rel="noopener">
              ${t('website')} ↗
            </a>
          </dd>
        `;
      }

      let perkHtml = '';
      if (spot.student_perk) {
        perkHtml = `
          <div class="perk-block">
            <div class="label">${t('studentDiscount')}</div>
            <div class="body">${spot.student_perk}</div>
          </div>`;
      }

      root.innerHTML = `
        <div class="hero detail" style="background:${spot.color}">
          <div class="hero-inner">
            <div class="crumb">${spot.cats.map(c => t(c)).join(' · ')}</div>
            <h1>${spot.name}</h1>
            <div class="meta-row">
              ${tags}${priceTag}
              <span class="badge">${spot.walk} ${t('walkMinutes')}${spot.bike ? ` · ${spot.bike} ${t('bikeMinutes')}` : ''}${spot.transit ? ` · ${spot.transit} ${t('transitMinutes')}` : ''}</span>
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

      <span class="open-now-pill" style="display:none">
        <span class="led"></span><span class="open-label">…</span>
      </span>

      <h3>${t('practical')}</h3>

      <dl class="kv">

        ${websiteHtml}

        <dt>${t('address')}</dt>
        <dd>${spot.address || '—'}</dd>

        ${spot.phone ? `
          <dt>${t('phone')}</dt>
          <dd>
            <a href="tel:${spot.phone.replace(/\s/g,'')}">${spot.phone}</a>
          </dd>
        ` : ''}

        <dt>${t('walkFrom')}</dt>
        <dd>
          ${spot.walk} ${t('walkMinutes')}
          ${spot.bike ? `, ${spot.bike} ${t('bikeMinutes')}` : ''}
          ${spot.transit ? `, ${spot.transit} ${t('transitMinutes')}` : ''}
        </dd>

        ${paymentsHtml}

      </dl>

    </div>

            ${hoursHtml ? `
            <div class="info-card">
              <h3>${t('openingHours')}</h3>
              ${hoursHtml}
            </div>` : ''}

            ${perkHtml}

            <a class="cta" href="${routeUrl}" target="_blank" rel="noopener" data-track="route_click" data-track-spot="${spot.id}" data-track-source="detail">${t('routeGoogle')}</a>
            <a class="cta secondary" href="index.html">${t('backLink')}</a>
          </aside>
        </div>`;

      // Live open/gesloten badge
      const pill = root.querySelector('.open-now-pill');
      if (pill) {
        function showPill(isOpen, label) {
          pill.style.display = '';
          pill.classList.toggle('closed', !isOpen);
          pill.querySelector('.open-label').textContent = isOpen ? (window.CURRENT_LANG === 'en' ? 'Open now' : 'Nu open') : (window.CURRENT_LANG === 'en' ? 'Closed' : 'Gesloten');
          if (label && label !== 'Gesloten' && label !== 'Closed') pill.title = (window.CURRENT_LANG === 'en' ? 'Today: ' : 'Vandaag: ') + label;
        }

        function showFromDbHours() {
          if (!spot.hours) return;
          const dayNames = window.CURRENT_LANG === 'en' 
            ? ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
            : ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];
          const todayEntry = spot.hours[dayNames[new Date().getDay()]];
          const closedLabel = window.CURRENT_LANG === 'en' ? 'Closed' : 'Gesloten';
          if (todayEntry === 'Gesloten' || todayEntry === 'Closed') { showPill(false, null); return; }
          if (todayEntry) {
            const m = todayEntry.match(/(\d{1,2}:\d{2})\s*[–\-]\s*(\d{1,2}:\d{2})/);
            if (m) {
              const toMin = t => { const [h, mn] = t.split(':').map(Number); return h * 60 + mn; };
              const cur = new Date().getHours() * 60 + new Date().getMinutes();
              showPill(cur >= toMin(m[1]) && cur < toMin(m[2]), todayEntry);
            }
          }
        }

        if (spot.osm_id) {
          fetch(`/api/place-hours?osm_id=${encodeURIComponent(spot.osm_id)}`)
            .then(r => r.ok ? r.json() : null)
            .then(data => {
              if (data && data.isOpen !== undefined) showPill(data.isOpen, data.todayHours);
              else showFromDbHours(); // OSM heeft geen opening_hours tag → gebruik DB
            })
            .catch(() => showFromDbHours());
        } else {
          showFromDbHours();
        }
      }
    })();
  }
})();

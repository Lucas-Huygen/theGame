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
        applyFilters();
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
            <p><a class="cta" href="index.html" style="display:inline-block;margin-top:12px">← Terug naar de kaart</a></p>
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

      <span class="open-now-pill" style="display:none">
        <span class="led"></span><span class="open-label">…</span>
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
            <a class="cta secondary" href="index.html">← Terug naar de kaart</a>
          </aside>
        </div>`;

      // Live open/gesloten badge
      const pill = root.querySelector('.open-now-pill');
      if (pill) {
        function showPill(isOpen, label) {
          pill.style.display = '';
          pill.classList.toggle('closed', !isOpen);
          pill.querySelector('.open-label').textContent = isOpen ? 'Nu open' : 'Gesloten';
          if (label && label !== 'Gesloten') pill.title = `Vandaag: ${label}`;
        }

        function showFromDbHours() {
          if (!spot.hours) return;
          const dayNames = ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];
          const todayEntry = spot.hours[dayNames[new Date().getDay()]];
          if (todayEntry === 'Gesloten') { showPill(false, null); return; }
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

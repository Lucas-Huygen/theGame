/* ===== KaaiSpots — Analytics abstraction =====
 * Stuurt elk event naar ZOWEL Plausible als Umami, zodat we beide tools
 * fair kunnen vergelijken op dezelfde dataset. Domeinen worden in
 * index.html / spot.html via <script data-...> ingeladen.
 *
 * Gebruik: kst.track('pin_click', { spot: 'soir', name: 'Café Soir' })
 * Of via HTML: <a data-track="route_click" data-track-spot="soir">...</a>
 */
(function () {
  const queue = [];
  let ready = false;

  function send(name, props) {
    // Plausible
    if (typeof window.plausible === 'function') {
      try { window.plausible(name, { props }); } catch (e) { /* ignore */ }
    } else if (window.plausible && window.plausible.q) {
      // script tag aanwezig, nog niet geladen — eigen queue
      window.plausible.q.push([name, { props }]);
    }

    // Umami — werkt met window.umami.track of fallback op data-website-id script
    if (window.umami && typeof window.umami.track === 'function') {
      try { window.umami.track(name, props); } catch (e) { /* ignore */ }
    }

    // Console log voor dev / debugging
    if (window.KST_DEBUG) console.log('[kst]', name, props);
  }

  function track(name, props = {}) {
    if (!ready) { queue.push([name, props]); return; }
    send(name, props);
  }

  // Drain queue zodra DOM klaar is (analytics-scripts laden meestal async)
  function flush() {
    ready = true;
    while (queue.length) {
      const [n, p] = queue.shift();
      send(n, p);
    }
  }

  // Globale delegatie voor data-track attributen — zo hoeven we scripts.js
  // niet vol te plempen met event-listeners voor elke knop.
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-track]');
    if (!el) return;
    const name = el.dataset.track;
    const props = {};
    for (const key of Object.keys(el.dataset)) {
      if (key.startsWith('track') && key !== 'track') {
        // data-track-spot → props.spot
        const propKey = key.replace(/^track/, '').replace(/^./, c => c.toLowerCase());
        props[propKey] = el.dataset[key];
      }
    }
    track(name, props);
  });

  // Public API
  window.kst = { track, flush };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', flush);
  } else {
    flush();
  }
})();

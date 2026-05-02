/* TIU v3 — MAIN PAGE RENDERERS (global) */
window.TIU_MainRender = (function() {

  function _formatNow() {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    return pad(now.getUTCHours()) + ':' + pad(now.getUTCMinutes()) + ':' + pad(now.getUTCSeconds()) + ' UTC';
  }

  function _commandHero() {
    const timeEl = document.getElementById('sessionTime');
    if (timeEl) timeEl.textContent = _formatNow();
  }

  function _statusWall() {
    const c = document.getElementById('statusWallGrid');
    if (!c) return;
    const d = window.TIU_I18N.getDict().statusWall;
    if (!d) return;
    const arrow = { up: '↑', down: '↓', flat: '=' };
    c.innerHTML = d.cells.map(cell => {
      const isNum = typeof cell.target === 'number';
      const display = isNum ? cell.target + cell.suffix : cell.target;
      return '<div class="status-wall-cell status-wall-cell--' + cell.variant + '">' +
        '<div class="status-wall-label">' + cell.label + '</div>' +
        '<div class="status-wall-value" data-target="' + cell.target + '" data-suffix="' + cell.suffix + '" data-is-num="' + isNum + '">' + (isNum ? '0' + cell.suffix : display) + '</div>' +
        '<div class="status-wall-trend status-wall-trend--' + cell.trend + '">' +
          '<span class="status-wall-trend-arrow">' + arrow[cell.trend] + '</span>' +
          '<span>' + cell.trend.toUpperCase() + '</span>' +
        '</div>' +
      '</div>';
    }).join('');
    _animateWall();
  }

  function _animateWall() {
    const els = document.querySelectorAll('.status-wall-value[data-is-num="true"]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { _tickNumber(entry.target); io.unobserve(entry.target); }
      });
    }, { threshold: 0.3 });
    els.forEach(el => io.observe(el));
  }

  function _tickNumber(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const isDec = target % 1 !== 0;
    const steps = 40; let step = 0;
    const t = setInterval(() => {
      step++;
      const v = target * (step / steps);
      el.textContent = (isDec ? v.toFixed(1) : Math.floor(v)) + suffix;
      if (step >= steps) { clearInterval(t); el.textContent = (isDec ? target.toFixed(1) : target) + suffix; }
    }, 35);
  }

  function _threatGrid() {
    const c = document.getElementById('threatGridCards');
    if (!c) return;
    const d = window.TIU_I18N.getDict().threatGrid;
    if (!d) return;
    c.innerHTML = d.factions.map(f => {
      const logo = f.logo ? '<img class="threat-card-logo" src="' + f.logo + '" alt="' + f.name + '" loading="lazy">' : '';
      return '<article class="threat-card threat-card--' + f.variant + '" data-sound-hover>' +
        logo +
        '<div class="threat-card-top"><div class="threat-card-name">' + f.name + '</div><div class="threat-card-status">' + f.status + '</div></div>' +
        '<div><div class="threat-card-last-label">' + d.labels.last + '</div><div class="threat-card-last">' + f.last + '</div></div>' +
        '<div><div class="threat-card-meter-label"><span>' + d.labels.threat + '</span><span class="threat-card-meter-value">' + f.threat + '%</span></div>' +
        '<div class="threat-card-meter"><div class="threat-card-meter-fill" style="width:' + f.threat + '%"></div></div></div>' +
      '</article>';
    }).join('');
  }

  function _activityFeed() {
    const c = document.getElementById('activityFeedList');
    if (!c) return;
    const d = window.TIU_I18N.getDict().activityFeed;
    if (!d) return;
    const markers = { ok: '✓', warn: '⚠', danger: '✕', '': '—' };
    c.innerHTML = d.events.map(e =>
      '<div class="activity-item activity-item--' + (e.type || 'default') + '">' +
        '<span class="activity-item-time">' + e.time + '</span>' +
        '<span class="activity-item-marker">' + (markers[e.type] || '—') + '</span>' +
        '<span class="activity-item-text">' + e.text + '</span>' +
      '</div>'
    ).join('');
  }

  function _categories(onComingSoon) {
    const c = document.getElementById('categoryGrid');
    if (!c) return;
    const d = window.TIU_I18N.getDict().categories;
    if (!d) return;
    c.innerHTML = d.items.map(item => {
      const badge = item.ready ? '' : '<span class="category-card-badge">' + d.comingSoon + '</span>';
      return '<a class="category-card" href="' + item.href + '" data-ready="' + item.ready + '" data-cat-id="' + item.id + '" data-sound-hover data-sound-click>' +
        badge +
        '<div class="category-card-icon">' + item.icon + '</div>' +
        '<div class="category-card-name">' + item.name + '</div>' +
        '<div class="category-card-sub">' + item.sub + '</div>' +
        '<div class="category-card-arrow">›</div>' +
      '</a>';
    }).join('');
    c.querySelectorAll('.category-card[data-ready="false"]').forEach(card => {
      card.addEventListener('click', (e) => { e.preventDefault(); onComingSoon(card.dataset.catId); });
    });
  }

  function _gnav(onComingSoon) {
    const c = document.getElementById('gnavInner');
    if (!c) return;
    const items = window.TIU_I18N.getDict().gnav || [];
    const currentPage = location.pathname.split('/').pop().replace('.html', '') || 'main';
    c.innerHTML = items.map(item => {
      const active = (currentPage === 'main' && item.id === 'home') ? ' is-active' : '';
      return '<a class="gnav-item' + active + '" href="' + item.href + '" data-gnav-id="' + item.id + '">' +
        '<span class="gnav-icon">' + item.icon + '</span>' +
        '<span class="gnav-label">' + item.label + '</span>' +
      '</a>';
    }).join('');
    c.querySelectorAll('.gnav-item[href="#"]').forEach(el => {
      el.addEventListener('click', (e) => { e.preventDefault(); onComingSoon(el.dataset.gnavId); });
    });
    document.body.classList.add('has-gnav');
  }

  return {
    all: function(onComingSoon) {
      _commandHero();
      _statusWall();
      _threatGrid();
      _activityFeed();
      _categories(onComingSoon);
      _gnav(onComingSoon);
      if (window.TIU_EntryMap) window.TIU_EntryMap.render();
    },
    updateSessionTime: function() {
      const el = document.getElementById('sessionTime');
      if (el) el.textContent = _formatNow();
    }
  };
})();

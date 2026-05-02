/* TIU v3 — ENTRY PAGE RENDERERS (global, non-module) */
window.TIU_EntryRender = (function() {

  function _layers() {
    const container = document.getElementById('layerStack');
    if (!container) return;
    const layers = window.TIU_I18N.getDict().world.layers;
    container.innerHTML = layers.map((layer, i) =>
      '<div class="layer" data-reveal data-reveal-delay="' + (i * 80) + '">' +
        '<div class="layer-bar layer-bar--l' + (i + 1) + '"></div>' +
        '<div class="layer-code">' + layer.code + '</div>' +
        '<div class="layer-desc">' + layer.desc + '</div>' +
      '</div>'
    ).join('');
  }

  function _factions() {
    const dict = window.TIU_I18N.getDict().factions;
    const primary = document.getElementById('factionsPrimary');
    const irregular = document.getElementById('factionsIrregular');
    if (primary) {
      primary.innerHTML = dict.primary.map((f, i) => {
        const logo = f.logo ? '<img class="card-faction-logo" src="' + f.logo + '" alt="' + f.name + '" loading="lazy">' : '';
        const meta = f.meta ? '<div class="card-meta">' + f.meta + '</div>' : '';
        const detail = f.detail ? '<div class="card-detail">' + f.detail + '</div>' : '';
        const access = f.access ? '<div class="card-access">' + f.access + '</div>' : '';
        return '<div class="card card--faction card--' + f.variant + '" data-reveal data-reveal-delay="' + (i * 60) + '" data-sound-hover>' +
          logo +
          meta +
          '<div class="card-name">' + f.name + '</div>' +
          '<div class="card-tagline">' + f.tagline + '</div>' +
          detail +
          access +
        '</div>';
      }).join('');
    }
    if (irregular) {
      irregular.innerHTML = dict.irregular.map((f, i) => {
        const bg = f.img ? '<div class="card-faction-bg"><img src="' + f.img + '" alt="' + f.name + '" loading="lazy"></div>' : '';
        const meta = f.meta ? '<div class="card-meta">' + f.meta + '</div>' : '';
        const detail = f.detail ? '<div class="card-detail">' + f.detail + '</div>' : '';
        const access = f.access ? '<div class="card-access">' + f.access + '</div>' : '';
        return '<div class="card card--faction card--irregular" data-reveal data-reveal-delay="' + (i * 60) + '" data-sound-hover>' +
          bg +
          meta +
          '<div class="card-name">' + f.name + '</div>' +
          '<div class="card-tagline">' + f.tagline + '</div>' +
          detail +
          access +
        '</div>';
      }).join('');
    }
  }

  function _koreaArchive() {
    const c = document.getElementById('koreaArchiveGrid');
    if (!c) return;
    const d = window.TIU_I18N.getDict().korea;
    if (!d || !d.nodes) return;
    c.innerHTML = d.nodes.map((node, i) =>
      '<article class="korea-archive-card korea-archive-card--' + node.tone + '" data-reveal data-reveal-delay="' + (i * 50) + '">' +
        '<div class="korea-archive-card-top">' +
          '<span class="korea-archive-card-code">' + node.code + '</span>' +
          '<span class="korea-archive-card-access">' + node.access + '</span>' +
        '</div>' +
        '<div class="korea-archive-card-name">' + node.name + '</div>' +
        '<div class="korea-archive-card-text">' + node.text + '</div>' +
      '</article>'
    ).join('');
  }

  function _threatArchive() {
    const container = document.getElementById('threatArchive');
    if (!container) return;
    const archive = window.TIU_I18N.getDict().threat.archive;
    container.innerHTML = archive.map((item, i) =>
      '<article class="archive-card" data-reveal data-reveal-delay="' + (i * 80) + '">' +
        '<div class="archive-card-img" style="background-image:url(\'' + item.img + '\')">' +
          '<div class="archive-card-overlay"></div>' +
          '<div class="archive-card-code">' + item.code + '</div>' +
        '</div>' +
        '<div class="archive-card-body">' +
          '<div class="archive-card-title">' + item.title + '</div>' +
          '<div class="archive-card-note">' + item.note + '</div>' +
        '</div>' +
      '</article>'
    ).join('');
  }

  function _publicSpecIndex() {
    const c = document.getElementById('publicSpecGrid');
    if (!c) return;
    const d = window.TIU_I18N.getDict().specIndex;
    if (!d || !d.items) return;
    c.innerHTML = d.items.map((item, i) =>
      '<article class="public-spec-card public-spec-card--' + item.tone + '" data-reveal data-reveal-delay="' + (i * 55) + '">' +
        '<div class="public-spec-head">' +
          '<span class="public-spec-code">' + item.code + '</span>' +
          '<span class="public-spec-risk">' + item.risk + '</span>' +
        '</div>' +
        '<h3 class="public-spec-name">' + item.name + '</h3>' +
        '<p class="public-spec-desc">' + item.desc + '</p>' +
        '<dl class="public-spec-meta">' +
          '<div><dt>' + d.labels.type + '</dt><dd>' + item.type + '</dd></div>' +
          '<div><dt>' + d.labels.rule + '</dt><dd>' + item.rule + '</dd></div>' +
        '</dl>' +
      '</article>'
    ).join('');
  }

  function _regionDigest() {
    const c = document.getElementById('regionDigestGrid');
    if (!c) return;
    const d = window.TIU_I18N.getDict().regions;
    if (!d || !d.items) return;
    c.innerHTML = d.items.map((item, i) =>
      '<article class="region-digest-card region-digest-card--' + item.tone + '" data-reveal data-reveal-delay="' + (i * 45) + '">' +
        '<div class="region-digest-top">' +
          '<span class="region-digest-code">' + item.code + '</span>' +
          '<span class="region-digest-status">' + item.status + '</span>' +
        '</div>' +
        '<h3 class="region-digest-name">' + item.name + '</h3>' +
        '<p class="region-digest-line">' + item.line + '</p>' +
        '<ul class="region-digest-tags">' + item.tags.map(tag => '<li>' + tag + '</li>').join('') + '</ul>' +
      '</article>'
    ).join('');
  }

  function _mystery() {
    const container = document.getElementById('mysteryGrid');
    if (!container) return;
    const items = window.TIU_I18N.getDict().mystery.items;
    container.innerHTML = items.map((item, i) =>
      '<div class="card card--mystery" data-reveal data-reveal-delay="' + (i * 80) + '">' +
        '<div class="card-code">' + item.code + '</div>' +
        '<div class="card-quote">' + item.quote + '</div>' +
      '</div>'
    ).join('');
  }

  function _footer() {
    const container = document.getElementById('footerLinks');
    if (!container) return;
    const links = window.TIU_I18N.getDict().footer.links;
    container.innerHTML = links.map(link =>
      '<a href="' + link.url + '" target="_blank" rel="noopener">' + link.label + '</a>'
    ).join('');
  }

  function _status() {
    const container = document.getElementById('statusGrid');
    if (!container) return;
    const cells = window.TIU_I18N.getDict().status.cells;
    container.innerHTML = cells.map(c =>
      '<div class="status-cell status-cell--' + c.variant + '">' +
        '<div class="status-cell-label">' + c.label + '</div>' +
        '<div class="status-cell-value" data-target="' + c.target + '" data-suffix="' + c.suffix + '">0' + c.suffix + '</div>' +
      '</div>'
    ).join('');
  }

  function _timeline() { if (window.TIU_EntryTimeline) window.TIU_EntryTimeline.render(); }

  function _officers() {
    const c = document.getElementById('officersGrid');
    if (!c) return;
    const d = window.TIU_I18N.getDict().officers;
    if (!d) return;
    c.innerHTML = d.members.map((m, i) => {
      return '<article class="officer-card" data-reveal data-reveal-delay="' + (i * 60) + '" data-sound-hover>' +
        '<div class="officer-card-img"><img src="' + m.img + '" alt="' + m.name + '" loading="lazy"></div>' +
        '<div class="officer-card-body">' +
          '<div class="officer-card-code">' + m.code + '</div>' +
          '<div class="officer-card-name">' + m.name + '</div>' +
          '<div class="officer-card-bg">' + m.bg + '</div>' +
          '<div class="officer-card-role">' + m.role + '</div>' +
          (m.brief ? '<div class="officer-card-brief">' + m.brief + '</div>' : '') +
          (m.links ? '<div class="officer-card-links">' + m.links.map(link => '<span>' + link + '</span>').join('') + '</div>' : '') +
        '</div>' +
      '</article>';
    }).join('');
  }

  function _gameCta() {
    const btn = document.getElementById('gameCtaBtn');
    if (!btn) return;
    const d = window.TIU_I18N.getDict().gameCta;
    if (d) btn.href = d.url;
  }

  function _voices() {
    const c = document.getElementById('voicesGrid');
    if (!c) return;
    const d = window.TIU_I18N.getDict().voices;
    if (!d) return;
    c.innerHTML = d.items.map((v, i) =>
      '<div class="voice-card" data-reveal data-reveal-delay="' + (i * 100) + '">' +
        '<div class="voice-quote">' + v.quote + '</div>' +
        '<div class="voice-cite">' + v.cite + '</div>' +
      '</div>'
    ).join('');
  }

  function _dbPreview() {
    const container = document.getElementById('dbPreviewGrid');
    if (!container) return;
    const stats = window.TIU_I18N.getDict().dbPreview.stats;
    container.innerHTML = stats.map(s =>
      '<div class="db-preview-stat">' +
        '<div class="db-preview-value">' + s.value + '</div>' +
        '<div class="db-preview-label-sm">' + s.label + '</div>' +
      '</div>'
    ).join('');
  }

  /* 카운트업 애니메이션 */
  function _animateValue(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const isDec = target % 1 !== 0;
    const steps = 40;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const v = target * (step / steps);
      el.textContent = (isDec ? v.toFixed(1) : Math.floor(v)) + suffix;
      if (step >= steps) {
        clearInterval(timer);
        el.textContent = (isDec ? target.toFixed(1) : target) + suffix;
      }
    }, 35);
  }

  function initCountUp() {
    const els = document.querySelectorAll('.status-cell-value[data-target]');
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          _animateValue(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    els.forEach(el => io.observe(el));
  }

  return {
    all: function() {
      _layers(); _factions(); _threatArchive(); _publicSpecIndex(); _regionDigest(); _mystery();
      _footer(); _status(); _timeline(); _dbPreview();
      _officers(); _koreaArchive(); _gameCta(); _voices();
      if (window.TIU_EntryMap) window.TIU_EntryMap.render();
    },
    initCountUp: initCountUp
  };
})();

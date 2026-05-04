/* TIU v3 — MAIN Phase 3 RENDERERS + INTERACTIONS */
window.TIU_MainPhase3 = (function() {

  function _philosophy() {
    /* static data-i18n elements */
  }

  function _situation() {
    const c = document.getElementById('situationActs');
    if (!c) return;
    const d = window.TIU_I18N.getDict().situation;
    if (!d) return;
    c.innerHTML = d.acts.map(a =>
      '<article class="situation-act situation-act--' + a.variant + '">' +
        '<div class="situation-act-num">' + a.num + '</div>' +
        '<div class="situation-act-body">' +
          '<div class="situation-act-meta">' +
            '<span class="situation-act-state">' + a.state + '</span>' +
            '<span class="situation-act-period">' + a.period + '</span>' +
          '</div>' +
          '<div class="situation-act-label">' + a.label + '</div>' +
          '<div class="situation-act-text">' + a.body + '</div>' +
        '</div>' +
      '</article>'
    ).join('');
  }

  function _queryTerminal() {
    const input = document.getElementById('queryInput');
    const submit = document.getElementById('querySubmit');
    const chipsWrap = document.getElementById('querySuggestions');
    const response = document.getElementById('queryResponse');
    if (!chipsWrap) return;

    const d = window.TIU_I18N.getDict().queryTerminal;
    if (!d) return;

    chipsWrap.innerHTML = d.suggestions.map(s =>
      '<button type="button" class="query-chip" data-q="' + s + '">' + s + '</button>'
    ).join('');

    chipsWrap.querySelectorAll('.query-chip').forEach(btn => {
      btn.onclick = () => {
        if (input) input.value = btn.dataset.q;
        _triggerQuery();
      };
    });

    if (input) input.placeholder = d.placeholder;

    function _triggerQuery() {
      if (!response) return;
      response.textContent = d.offlineMsg;
      response.classList.add('is-visible');
      if (window.TIU_Sound) window.TIU_Sound.play('click');
    }

    if (submit) submit.onclick = _triggerQuery;
    if (input) {
      input.onkeydown = (e) => {
        if (e.key === 'Enter') _triggerQuery();
      };
    }
  }

  function _publicDossier() {
    const d = window.TIU_I18N.getDict().publicDossier;
    if (!d) return;

    const filters = document.getElementById('publicDossierFilters');
    if (filters) {
      filters.innerHTML = d.filters.map(f =>
        '<span class="public-dossier-filter public-dossier-filter--' + (f.variant || 'default') + '">' + f.label + '</span>'
      ).join('');
    }

    const counters = document.getElementById('publicDossierCounters');
    if (counters) {
      counters.innerHTML = d.counters.map(c =>
        '<div class="public-dossier-counter public-dossier-counter--' + (c.variant || 'default') + '">' +
          '<div class="public-dossier-counter-value">' + c.value + '</div>' +
          '<div class="public-dossier-counter-label">' + c.label + '</div>' +
        '</div>'
      ).join('');
    }

    const cards = document.getElementById('publicDossierCards');
    if (cards) {
      cards.innerHTML = d.cards.map(card =>
        '<article class="public-dossier-card public-dossier-card--' + (card.variant || 'default') + '" data-sound-hover>' +
          '<div class="public-dossier-card-code">' + card.code + '</div>' +
          '<h3 class="public-dossier-card-title">' + card.title + '</h3>' +
          '<p class="public-dossier-card-text">' + card.text + '</p>' +
          '<dl class="public-dossier-meta">' + card.meta.map(row =>
            '<div><dt>' + row.k + '</dt><dd>' + row.v + '</dd></div>'
          ).join('') + '</dl>' +
        '</article>'
      ).join('');
    }

    const relations = document.getElementById('publicDossierRelations');
    if (relations) {
      relations.innerHTML = d.relations.map(r =>
        '<div class="public-dossier-rel public-dossier-rel--' + (r.variant || 'default') + '">' +
          '<span class="public-dossier-rel-from">' + r.from + '</span>' +
          '<span class="public-dossier-rel-type">' + r.type + '</span>' +
          '<span class="public-dossier-rel-to">' + r.to + '</span>' +
        '</div>'
      ).join('');
    }

    const records = document.getElementById('publicDossierRecords');
    if (records) {
      records.innerHTML = d.records.map(rec =>
        '<article class="public-dossier-record public-dossier-record--' + (rec.variant || 'default') + '">' +
          '<div class="public-dossier-record-code">' + rec.code + '</div>' +
          '<div class="public-dossier-record-main">' +
            '<div class="public-dossier-record-title">' + rec.title + '</div>' +
            '<div class="public-dossier-record-text">' + rec.text + '</div>' +
          '</div>' +
          '<div class="public-dossier-record-level">' + rec.level + '</div>' +
        '</article>'
      ).join('');
    }
  }

  function _restricted() {
    const grid = document.getElementById('restrictedGrid');
    if (!grid) return;
    const d = window.TIU_I18N.getDict().restricted;
    if (!d) return;

    grid.innerHTML = d.cards.map(c =>
      '<article class="restricted-card restricted-card--' + c.type + '" data-rid="' + c.id + '" data-sound-hover>' +
        '<div class="restricted-card-flag">' + c.flag + '</div>' +
        '<div class="restricted-card-icon">' + c.icon + '</div>' +
        '<div class="restricted-card-name">' + c.name + '</div>' +
        '<div class="restricted-card-code">' + c.code + '</div>' +
        '<div class="restricted-card-sub">' + c.sub + '</div>' +
        '<button type="button" class="restricted-card-action" data-rid="' + c.id + '" data-sound-click>' + c.action + '</button>' +
        '<div class="restricted-card-msg">' + (c.msg || '') + '</div>' +
      '</article>'
    ).join('');

    const modal = document.getElementById('restrictedModal');
    const closeBtn = document.getElementById('restrictedModalClose');

    grid.querySelectorAll('.restricted-card-action').forEach(btn => {
      btn.onclick = () => {
        const card = d.cards.find(x => x.id === btn.dataset.rid);
        if (!card) return;
        if (card.type === 'verify' && modal) modal.classList.add('is-open');
        else if (card.type === 'locked') {
          const parent = btn.closest('.restricted-card');
          if (parent) parent.classList.add('is-denied');
          if (window.TIU_Sound) window.TIU_Sound.play('click');
        }
      };
    });
    if (closeBtn && modal) closeBtn.onclick = () => modal.classList.remove('is-open');
    if (modal) modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('is-open'); });

    _krVerify();
  }

  function _krVerify() {
    const input = document.getElementById('krCodeInput');
    const submit = document.getElementById('krSubmit');
    const response = document.getElementById('krResponse');
    if (!submit) return;
    const d = window.TIU_I18N.getDict().krClassified;
    if (!d) return;

    function verify() {
      if (!input || !response) return;
      const val = (input.value || '').trim().toUpperCase();
      const valid = val === d.validCode.toUpperCase();
      if (valid) {
        response.textContent = d.successMsg;
        response.className = 'restricted-modal-response is-success';
        if (window.TIU_Sound) window.TIU_Sound.play('check');
        setTimeout(() => { window.location.href = d.v2Url; }, 1200);
      } else {
        response.textContent = d.denyMsg;
        response.className = 'restricted-modal-response is-error';
        input.value = '';
        if (window.TIU_Sound) window.TIU_Sound.play('click');
      }
    }
    submit.onclick = verify;
    if (input) input.onkeydown = (e) => { if (e.key === 'Enter') verify(); };
  }

  function _phaseDiagram() {
    const c = document.getElementById('phaseGrid');
    if (!c) return;
    const d = window.TIU_I18N.getDict().phaseDiagram;
    if (!d) return;

    c.innerHTML = d.phases.map(p =>
      '<div class="phase-card phase-card--' + p.variant + '" data-sound-hover>' +
        '<div class="phase-card-num">' + p.num + '</div>' +
        '<div class="phase-card-name">' + p.name + '</div>' +
        '<div class="phase-card-type">' + p.type + '</div>' +
        '<div><div class="phase-card-window-label">' + d.windowLabel + '</div>' +
        '<div class="phase-card-window">' + p.window + '</div></div>' +
        '<div class="phase-card-note">' + p.note + '</div>' +
      '</div>'
    ).join('');
  }

  function _intel() {
    const c = document.getElementById('intelGrid');
    if (!c) return;
    const d = window.TIU_I18N.getDict().intel;
    if (!d) return;

    c.innerHTML = d.items.map(item => {
      const img = item.img ? '<div class="intel-card-img"><img src="' + item.img + '" alt="" loading="lazy"></div>' : '';
      return '<article class="intel-card intel-card--' + item.tone + '" data-sound-hover>' +
        img +
        '<div class="intel-card-body">' +
          '<div class="intel-card-code">' + item.code + '</div>' +
          '<div class="intel-card-title">' + item.title + '</div>' +
          '<div class="intel-card-text">' + item.text + '</div>' +
          '<div class="intel-card-source">' + item.source + '</div>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  return {
    all: function() {
      _philosophy();
      _situation();
      _queryTerminal();
      _publicDossier();
      _restricted();
      _phaseDiagram();
      _intel();
    }
  };
})();

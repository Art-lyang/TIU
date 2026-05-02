/* TIU v3 — ENTRY page TIMELINE renderer (split for 200-line rule) */
window.TIU_EntryTimeline = (function() {
  function render() {
    const container = document.getElementById('timelineEvents');
    if (!container) return;
    const tl = window.TIU_I18N.getDict().timeline;
    const events = tl.events;
    container.innerHTML = events.map((e, i) =>
      '<button type="button" class="timeline-event' + (e.title === 'NOW' ? ' timeline-event--now' : '') + '" data-tl-idx="' + i + '" data-sound-click>' +
        '<div class="timeline-year">' + e.year + '</div>' +
        '<div class="timeline-title">' + e.title + '</div>' +
        '<div class="timeline-note">' + e.note + '</div>' +
      '</button>'
    ).join('');
    const hint = document.getElementById('timelineHint');
    if (hint && tl.hint) hint.textContent = tl.hint;
    const panel = document.getElementById('timelineDetail');
    if (!panel) return;
    container.querySelectorAll('.timeline-event').forEach(btn => {
      btn.onclick = () => {
        const e = events[parseInt(btn.dataset.tlIdx, 10)];
        if (!e) return;
        container.querySelectorAll('.timeline-event').forEach(x => x.classList.remove('is-active'));
        btn.classList.add('is-active');
        panel.innerHTML = '<button type="button" class="timeline-detail-close" aria-label="' + (tl.closeLabel || 'Close') + '">×</button>' +
          '<div class="timeline-detail-year">' + e.year + '</div>' +
          '<div class="timeline-detail-title">' + e.title + '</div>' +
          '<div class="timeline-detail-body">' + (e.detail || e.note) + '</div>';
        panel.classList.add('is-open');
        const close = panel.querySelector('.timeline-detail-close');
        if (close) close.onclick = () => {
          panel.classList.remove('is-open'); panel.innerHTML = '';
          container.querySelectorAll('.timeline-event').forEach(x => x.classList.remove('is-active'));
        };
      };
    });
  }
  return { render: render };
})();

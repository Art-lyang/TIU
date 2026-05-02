/* TIU v3 — TACTICAL MAP (global, non-module)
 * 핫스팟 · 레티클 · 회전링 · 상세 패널 클릭 인터랙션 */
window.TIU_EntryMap = (function() {

  /* 구역 좌표 (id = i18n key와 일치) */
  const ZONES = [
    { id: 'philadelphia', x: 27.9, y: 29.4, color: 'purple', ring: true  },
    { id: 'ashfall',      x: 25.3, y: 35,   color: 'red',    ring: false },
    { id: 'silentbelt',   x: 62.8, y: 11.6, color: 'amber',  ring: false },
    { id: 'euBorder',     x: 48.2, y: 26.2, color: 'green',  ring: false },
    { id: 'germany',      x: 50.6, y: 27.7, color: 'green',  ring: false },
    { id: 'redveil',      x: 80.6, y: 25.6, color: 'red',    ring: false },
    { id: 'korea',        x: 85.3, y: 28.4, color: 'green',  reticle: true },
    { id: 'japan',        x: 87.9, y: 31,   color: 'amber',  ring: false },
    { id: 'australia',    x: 82.8, y: 70.5, color: 'green',  ring: false },
    { id: 'meridian',     x: 55.6, y: 40.6, color: 'amber',  ring: false },
    { id: 'unregisteredInland', x: 48, y: 54, color: 'muted', ring: false },
    { id: 'antarctic',    x: 50,   y: 91,   color: 'purple', ring: true  }
  ];

  function render() {
    const hotspotsEl = document.getElementById('mapHotspots');
    const legendEl   = document.getElementById('mapLegend');
    if (!hotspotsEl) return;

    const dict = window.TIU_I18N.getDict().map;

    /* 핫스팟 + 특수 요소(회전링·레티클) */
    hotspotsEl.innerHTML = ZONES.map(z => {
      const zData = dict.zones[z.id] || {};
      const title = zData.title || z.id;
      const country = zData.country ? '<div class="map-hotspot-country">' + zData.country + '</div>' : '';
      let extra = '';
      if (z.ring) {
        extra = '<div class="map-ring map-ring--' + z.color + '" style="left:' + z.x + '%;top:' + z.y + '%;"></div>';
      }
      if (z.reticle) {
        extra = '<div class="map-reticle" style="left:' + z.x + '%;top:' + z.y + '%;"></div>';
      }
      const edgeClass =
        (z.x > 76 ? ' map-hotspot--edge-right' : '') +
        (z.x < 24 ? ' map-hotspot--edge-left' : '') +
        (z.y < 18 ? ' map-hotspot--edge-top' : '');
      return extra +
        '<button class="map-hotspot map-hotspot--' + z.color + edgeClass + '" type="button"' +
          ' data-zone="' + z.id + '"' +
          ' style="left:' + z.x + '%;top:' + z.y + '%;"' +
          ' aria-label="' + title + '" data-sound-hover>' +
          '<div class="map-hotspot-label"><div class="map-hotspot-title">' + title + '</div>' + country + '</div>' +
        '</button>';
    }).join('');

    /* 범례 */
    if (legendEl) {
      legendEl.innerHTML = dict.legend.map(i =>
        '<div class="map-legend-item map-legend-item--' + i.color + '">' +
          '<span class="map-legend-dot"></span>' + i.label +
        '</div>'
      ).join('');
    }

    /* 메타 라벨 (언어별) */
    const tl = document.getElementById('mdThreatLabel');
    const rl = document.getElementById('mdResponseLabel');
    const cl = document.getElementById('mdCountryLabel');
    if (tl) tl.textContent = dict.metaLabels.threat;
    if (rl) rl.textContent = dict.metaLabels.response;
    if (cl) cl.textContent = dict.metaLabels.country;

    _bind();
  }

  function _bind() {
    document.querySelectorAll('.map-hotspot').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        _open(btn.dataset.zone);
      });
    });

    const closeBtn = document.getElementById('mapDetailClose');
    if (closeBtn) closeBtn.onclick = _close;

    const wrap = document.getElementById('mapWrap');
    if (wrap) {
      wrap.addEventListener('click', (e) => {
        if (e.target === wrap || e.target.classList.contains('map-base') ||
            e.target.classList.contains('map-scanline')) _close();
      });
    }
  }

  function _open(zoneId) {
    const z = window.TIU_I18N.getDict().map.zones[zoneId];
    if (!z) return;

    const panel = document.getElementById('mapDetailPanel');
    const wrap  = document.getElementById('mapWrap');
    if (!panel || !wrap) return;

    document.getElementById('mdTitle').textContent  = z.title;
    document.getElementById('mdDesc').textContent   = z.desc;
    document.getElementById('mdThreat').textContent = z.threat;
    document.getElementById('mdResponse').textContent = z.response;
    const countryCell = document.getElementById('mdCountryCell');
    const countryEl = document.getElementById('mdCountry');
    if (countryCell && countryEl) {
      if (z.country) {
        countryEl.textContent = z.country;
        countryCell.style.display = '';
      } else {
        countryEl.textContent = '';
        countryCell.style.display = 'none';
      }
    }

    /* 이미지 (조건부) */
    const imgWrap = document.getElementById('mdImage');
    if (imgWrap) {
      if (z.img) {
        imgWrap.innerHTML = '<img src="' + z.img + '" alt="' + z.title + '">';
        imgWrap.style.display = 'block';
      } else {
        imgWrap.innerHTML = '';
        imgWrap.style.display = 'none';
      }
    }

    const status = document.getElementById('mdStatus');
    status.textContent = z.status;
    status.className = 'map-detail-status map-detail-status--' + z.tone;

    panel.classList.add('is-open');
    wrap.classList.add('has-selection');

    document.querySelectorAll('.map-hotspot').forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.zone === zoneId);
    });

    if (window.TIU_Sound) window.TIU_Sound.play('click');
  }

  function _close() {
    const panel = document.getElementById('mapDetailPanel');
    const wrap  = document.getElementById('mapWrap');
    if (panel) panel.classList.remove('is-open');
    if (wrap)  wrap.classList.remove('has-selection');
    document.querySelectorAll('.map-hotspot').forEach(btn => {
      btn.classList.remove('is-active');
    });
  }

  return { render: render, open: _open, close: _close };
})();

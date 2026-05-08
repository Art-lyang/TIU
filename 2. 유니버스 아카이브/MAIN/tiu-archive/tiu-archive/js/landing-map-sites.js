(function () {
  function localized(button, key) {
    const lang = (document.documentElement.lang || 'ko').slice(0, 2);
    const suffix = lang.charAt(0).toUpperCase() + lang.slice(1);
    return button.dataset[key + suffix] || button.dataset[key] || '';
  }

  function clearIntel(scope) {
    const intel = scope.querySelector('[data-map-intel]');
    scope.querySelectorAll('[data-map-site]').forEach(site => {
      site.classList.remove('is-active');
      site.setAttribute('aria-pressed', 'false');
    });
    if (intel) intel.classList.remove('is-visible');
  }

  function positionIntel(scope, button, intel) {
    const mapRect = scope.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const intelRect = intel.getBoundingClientRect();
    const gap = 14;
    const margin = 12;

    let left = buttonRect.left - mapRect.left + buttonRect.width / 2 + gap;
    let top = buttonRect.top - mapRect.top + buttonRect.height / 2 - intelRect.height / 2;

    if (left + intelRect.width > mapRect.width - margin) {
      left = buttonRect.left - mapRect.left - intelRect.width - gap;
    }

    left = Math.max(margin, Math.min(left, mapRect.width - intelRect.width - margin));
    top = Math.max(margin, Math.min(top, mapRect.height - intelRect.height - margin));

    intel.style.setProperty('--intel-left', left + 'px');
    intel.style.setProperty('--intel-top', top + 'px');
  }

  function updateIntel(button) {
    const scope = button.closest('[data-map-scope]');
    if (!scope) return;

    const intel = scope.querySelector('[data-map-intel]');
    if (!intel) return;

    scope.querySelectorAll('[data-map-site]').forEach(site => {
      const active = site === button;
      site.classList.toggle('is-active', active);
      site.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    const status = intel.querySelector('[data-map-intel-status]');
    const title = intel.querySelector('[data-map-intel-title]');
    const desc = intel.querySelector('[data-map-intel-desc]');
    const img = intel.querySelector('[data-map-intel-img]');
    const tone = intel.querySelector('[data-map-intel-tone]');
    const country = intel.querySelector('[data-map-intel-country]');
    const threat = intel.querySelector('[data-map-intel-threat]');
    const response = intel.querySelector('[data-map-intel-response]');

    if (status) status.textContent = localized(button, 'mapStatus');
    if (title) title.textContent = localized(button, 'mapTitle');
    if (desc) desc.textContent = localized(button, 'mapDesc');
    if (tone) tone.textContent = localized(button, 'mapTone');
    if (country) country.textContent = localized(button, 'mapCountry');
    if (threat) threat.textContent = localized(button, 'mapThreat');
    if (response) response.textContent = localized(button, 'mapResponse');
    if (img) {
      img.src = localized(button, 'mapImg');
      img.alt = localized(button, 'mapTitle');
    }

    intel.classList.add('is-visible');
    positionIntel(scope, button, intel);
  }

  function refreshActive() {
    document.querySelectorAll('[data-map-scope]').forEach(scope => {
      const intel = scope.querySelector('[data-map-intel]');
      const active = scope.querySelector('[data-map-site].is-active');
      if (active && intel && intel.classList.contains('is-visible')) updateIntel(active);
    });
  }

  function init() {
    document.querySelectorAll('[data-map-scope]').forEach(scope => {
      const sites = scope.querySelectorAll('[data-map-site]');
      sites.forEach(site => site.addEventListener('click', () => updateIntel(site)));
      clearIntel(scope);
      scope.addEventListener('click', event => {
        if (event.target.closest('[data-map-site], [data-map-intel]')) return;
        clearIntel(scope);
      });
    });
  }

  document.addEventListener('tiu:langchange', refreshActive);
  window.addEventListener('resize', refreshActive);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

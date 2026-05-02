/* TIU v3 — i18n MANAGER (global, non-module) */
(function() {
  const STORAGE_KEY = 'tiu-lang';
  const DICT = { ko: window.TIU_KO, en: window.TIU_EN };
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'ko';

  function getDict() { return DICT[currentLang]; }

  function resolveKey(obj, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
  }

  function applyTexts() {
    const dict = getDict();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const value = resolveKey(dict, el.getAttribute('data-i18n'));
      if (typeof value === 'string') el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const value = resolveKey(dict, el.getAttribute('data-i18n-html'));
      if (typeof value === 'string') el.innerHTML = value;
    });
    document.title = dict.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.meta.description);
  }

  function setLang(lang) {
    if (!DICT[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyTexts();
    updateLangToggle();
  }

  function updateLangToggle() {
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.langBtn === currentLang);
    });
  }

  window.TIU_I18N = {
    getLang: () => currentLang,
    getDict: getDict,
    setLang: setLang,
    applyTexts: applyTexts,
    init: function() {
      document.documentElement.lang = currentLang;
      applyTexts();
      updateLangToggle();
      document.querySelectorAll('[data-lang-btn]').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.langBtn));
      });
    }
  };
})();

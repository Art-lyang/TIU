/* TIU v3 — TICKER (global) */
window.TIU_Ticker = {
  init: function(selector) {
    const el = document.querySelector(selector || '#tickerInner');
    if (!el) return;

    function render() {
      const items = (window.TIU_I18N.getDict().ticker) || [];
      const html = items.concat(items).map(item => {
        const cls = item.type ? 't-' + item.type : '';
        return '<span class="' + cls + '">' + item.text + '</span>';
      }).join('');
      el.innerHTML = html;
    }

    render();

    const observer = new MutationObserver(() => {
      if (document.documentElement.lang !== el.dataset.lang) {
        el.dataset.lang = document.documentElement.lang;
        render();
      }
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    });
  }
};

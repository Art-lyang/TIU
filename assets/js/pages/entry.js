/* TIU v3 — ENTRY PAGE CONTROLLER (global, non-module) */
(function() {

  function renderAndBind() {
    window.TIU_EntryRender.all();
    /* 재렌더된 요소에 reveal + sound 재바인딩 */
    setTimeout(() => {
      window.TIU_Reveal.init();
      window.TIU_Sound.bindUI();
      window.TIU_EntryRender.initCountUp();
    }, 50);
  }

  function hookLanguageRerender() {
    const observer = new MutationObserver(() => {
      renderAndBind();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => document.body.classList.add('is-loaded'), 100);
    window.TIU_I18N.init();
    renderAndBind();

    window.TIU_HeroCanvas.init();
    window.TIU_Ticker.init();
    window.TIU_Sound.initToggle();
    window.TIU_DragScroll.init();

    hookLanguageRerender();

    /* 사운드가 켜져 있으면 첫 사용자 상호작용 후 배경음 시작 */
    const startBg = () => {
      if (window.TIU_Sound.isEnabled()) window.TIU_Sound.startBackground();
      document.removeEventListener('click', startBg);
      document.removeEventListener('touchstart', startBg);
    };
    document.addEventListener('click', startBg, { once: true });
    document.addEventListener('touchstart', startBg, { once: true });
  });

})();

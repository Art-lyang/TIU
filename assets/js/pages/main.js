/* TIU v3 — MAIN PAGE CONTROLLER (global) */
(function() {

  function openComingSoon() {
    const modal = document.getElementById('csModal');
    if (!modal) return;
    modal.classList.add('is-open');
    if (window.TIU_Sound) window.TIU_Sound.play('click');
  }

  function closeComingSoon() {
    const modal = document.getElementById('csModal');
    if (modal) modal.classList.remove('is-open');
  }

  function bindComingSoon() {
    const closeBtn = document.getElementById('csClose');
    const v2Btn = document.getElementById('csV2');
    const overlay = document.getElementById('csModal');
    if (closeBtn) closeBtn.onclick = closeComingSoon;
    if (v2Btn)    v2Btn.onclick = () => { window.location.href = '../tiu-v2-complete/main.html'; };
    if (overlay)  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeComingSoon(); });
  }

  function renderAndBind() {
    window.TIU_MainRender.all(openComingSoon);
    if (window.TIU_MainPhase3) window.TIU_MainPhase3.all();
    setTimeout(() => {
      window.TIU_Reveal.init();
      window.TIU_Sound.bindUI();
    }, 50);
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (window.TIU_Boot) window.TIU_Boot.init();
    setTimeout(() => document.body.classList.add('is-loaded'), 100);

    window.TIU_I18N.init();
    renderAndBind();

    window.TIU_Ticker.init();
    window.TIU_Sound.initToggle();
    bindComingSoon();

    /* 언어 전환 시 재렌더 */
    new MutationObserver(() => renderAndBind())
      .observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    /* 첫 상호작용 후 배경음 */
    const startBg = () => {
      if (window.TIU_Sound.isEnabled()) window.TIU_Sound.startBackground();
      document.removeEventListener('click', startBg);
    };
    document.addEventListener('click', startBg, { once: true });

    /* 세션 시간 1초마다 갱신 */
    setInterval(() => window.TIU_MainRender.updateSessionTime(), 1000);
  });
})();

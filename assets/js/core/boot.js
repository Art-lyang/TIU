/* TIU v3 — BOOT SEQUENCE (global)
 * sessionStorage로 중복 부팅 방지 */
window.TIU_Boot = {
  STORAGE_KEY: 'tiu-boot-done',

  /* 이미 부팅했는지 체크 */
  isDone: function() {
    try {
      return sessionStorage.getItem(this.STORAGE_KEY) === '1';
    } catch (e) { return false; }
  },

  markDone: function() {
    try { sessionStorage.setItem(this.STORAGE_KEY, '1'); } catch (e) {}
  },

  init: function() {
    const screen = document.getElementById('bootScreen');
    if (!screen) return;

    const root = document.documentElement;
    const body = document.body;

    /* 돌아온 사용자: 즉시 스킵 */
    if (this.isDone()) {
      screen.style.display = 'none';
      root.classList.remove('boot-active');
      body.classList.remove('boot-active');
      return;
    }

    root.classList.add('boot-active');
    body.classList.add('boot-active');
    this._renderTerminal();
    this._bindButton();
  },

  _renderTerminal: function() {
    const container = document.getElementById('bootTerminal');
    if (!container || !window.TIU_I18N) return;

    const lines = window.TIU_I18N.getDict().boot.terminalLines || [];
    container.innerHTML = '';

    lines.forEach((line, i) => {
      const el = document.createElement('div');
      el.className = 'boot-terminal-line ' + (line.cls || '');
      el.textContent = line.text;
      el.style.animationDelay = (i * 0.28) + 's';
      container.appendChild(el);
    });
  },

  _bindButton: function() {
    const btn = document.getElementById('bootBtn');
    const screen = document.getElementById('bootScreen');
    if (!btn || !screen) return;

    btn.addEventListener('click', () => {
      this.markDone();
      if (window.TIU_Sound) window.TIU_Sound.play('click');
      screen.classList.add('is-hidden');
      document.documentElement.classList.remove('boot-active');
      document.body.classList.remove('boot-active');

      /* 트랜지션 후 완전 제거 */
      setTimeout(() => {
        screen.style.display = 'none';
        /* 부팅 후 배경음 시작 */
        if (window.TIU_Sound && window.TIU_Sound.isEnabled()) {
          window.TIU_Sound.startBackground();
        }
      }, 600);
    });
  }
};

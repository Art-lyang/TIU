/* TIU v3 — SOUND MANAGER (global) */
(function() {
  const STORAGE_KEY = 'tiu-sound';
  const SOUNDS = {
    bg:     'assets/sound/act1_bg_sound.mp3',
    hover:  'assets/sound/button_on.wav',
    click:  'assets/sound/button_off.wav',
    check:  'assets/sound/check_sound.wav'
  };

  const sound = {
    enabled: localStorage.getItem(STORAGE_KEY) === 'on',
    audioMap: new Map(),
    bgAudio: null,
    volume: 0.3,

    preload(key) {
      if (!SOUNDS[key] || this.audioMap.has(key)) return;
      const audio = new Audio(SOUNDS[key]);
      audio.volume = this.volume;
      audio.preload = 'auto';
      this.audioMap.set(key, audio);
    },

    play(key, opts) {
      if (!this.enabled) return;
      this.preload(key);
      const src = this.audioMap.get(key);
      if (!src) return;
      const clone = src.cloneNode();
      clone.volume = (opts && opts.volume) || this.volume;
      clone.play().catch(() => {});
    },

    startBackground() {
      if (!this.enabled) return;
      if (!this.bgAudio) {
        this.bgAudio = new Audio(SOUNDS.bg);
        this.bgAudio.loop = true;
        this.bgAudio.volume = 0.15;
      }
      this.bgAudio.play().catch(() => {});
    },

    stopBackground() {
      if (this.bgAudio) this.bgAudio.pause();
    },

    toggle() {
      this.enabled = !this.enabled;
      localStorage.setItem(STORAGE_KEY, this.enabled ? 'on' : 'off');
      if (this.enabled) this.startBackground();
      else this.stopBackground();
      return this.enabled;
    }
  };

  window.TIU_Sound = {
    obj: sound,
    play: (k, o) => sound.play(k, o),
    startBackground: () => sound.startBackground(),
    isEnabled: () => sound.enabled,

    bindUI() {
      document.querySelectorAll('[data-sound-hover]').forEach(el => {
        el.addEventListener('mouseenter', () => sound.play('hover', { volume: 0.2 }));
      });
      document.querySelectorAll('[data-sound-click]').forEach(el => {
        el.addEventListener('click', () => sound.play('click'));
      });
    },

    initToggle(selector) {
      const btn = document.querySelector(selector || '#soundToggle');
      if (!btn) return;
      btn.dataset.state = sound.enabled ? 'on' : 'off';
      btn.addEventListener('click', () => {
        const newState = sound.toggle();
        btn.dataset.state = newState ? 'on' : 'off';
      });
    }
  };
})();

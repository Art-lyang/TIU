(function () {
  'use strict';
  var words = {
    ko: { areaWorld: '세계관', areaGame: '게임 안내', menu: '목차', loreGroup: '세계관 읽기', gameGroup: '게임과 자료', lore0: '세계 개요', lore1: '한국 기록', lore2: '사건과 단서', lore3: '세계 각지', game0: '게임 소개', game1: '운용 안내', game2: '한국지부 인물', game3: '용어 · SPEC', game4: '플레이 가이드', game5: '게임 자료 색인' },
    en: { areaWorld: 'World', areaGame: 'Game', menu: 'Index', loreGroup: 'Explore the world', gameGroup: 'Game & reference', lore0: 'World overview', lore1: 'Korea records', lore2: 'Events & clues', lore3: 'Around the world', game0: 'Game overview', game1: 'Operations', game2: 'Korea branch people', game3: 'Terms & SPEC', game4: 'Play guide', game5: 'Game reference' },
    ja: { areaWorld: '世界観', areaGame: 'ゲーム', menu: '目次', loreGroup: '世界観を読む', gameGroup: 'ゲームと資料', lore0: '世界の概要', lore1: '韓国の記録', lore2: '事件と手がかり', lore3: '世界各地', game0: 'ゲーム紹介', game1: '運用案内', game2: '韓国支部の人物', game3: '用語・SPEC', game4: 'プレイガイド', game5: 'ゲーム資料索引' }
  };
  var menu = document.querySelector('.site-menu');
  function update() {
    var lang = document.documentElement.lang;
    var copy = words[lang] || words.ko;
    document.querySelectorAll('[data-nav-copy]').forEach(function (node) { if (copy[node.dataset.navCopy]) node.textContent = copy[node.dataset.navCopy]; });
    var labels = {
      ko: ['TIU 주요 영역', '세계관 목차', '게임 목차', '언어 선택', 'TIU 세계관 홈'],
      en: ['TIU main areas', 'World index', 'Game index', 'Language selection', 'TIU world home'],
      ja: ['TIUの主な領域', '世界観の目次', 'ゲームの目次', '言語選択', 'TIU世界観のトップ']
    }[lang] || ['TIU 주요 영역', '세계관 목차', '게임 목차', '언어 선택', 'TIU 세계관 홈'];
    ['.area-nav', '.menu-group:first-child', '.menu-group:last-child', '.site-menu .lang-switch', '.header-inner .wordmark'].forEach(function (selector, index) {
      var node = document.querySelector(selector);
      if (node) node.setAttribute('aria-label', labels[index]);
    });
  }
  function close(focus) {
    if (!menu || !menu.open) return;
    menu.open = false;
    if (focus) menu.querySelector('summary').focus({ preventScroll: true });
  }
  document.addEventListener('DOMContentLoaded', update);
  new MutationObserver(update).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape') close(true); });
  document.addEventListener('pointerdown', function (event) { if (menu && !menu.contains(event.target)) close(false); });
  if (menu) menu.addEventListener('click', function (event) { if (event.target.closest('a')) close(false); });
})();

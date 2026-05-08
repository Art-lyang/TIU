(function () {
  'use strict';

  const LABELS = {
    ko: {
      kicker: 'TIU NAVIGATION',
      title: '아카이브 메뉴',
      status: 'NETWORK DIRECTORY / PUBLIC ROUTE',
      close: '메뉴 닫기',
      footLeft: 'CLEARANCE LIMITED',
      footRight: 'ROUTE MASKED',
      items: [
        ['PUBLIC RECORDS', '공개 기록관', '입문용 공개 색인'],
        ['ARCHIVE DETAILS', '아카이브 상세', '연표, 지도, 세력 기록'],
        ['THREAT MAP', '글로벌 위협 지도', '주요 사건권 지도'],
        ['TIMELINE', '발생 연표', '시기별 사건 기록'],
        ['KOREA ARC', '한국권 기록', '방벽과 사건 단서'],
        ['FACTIONS', '주요 세력', '표면 활동 정리'],
        ['ACCESS', '접속 프로토콜', '공개 게이트']
      ]
    },
    en: {
      kicker: 'TIU NAVIGATION',
      title: 'Archive Menu',
      status: 'NETWORK DIRECTORY / PUBLIC ROUTE',
      close: 'Close menu',
      footLeft: 'CLEARANCE LIMITED',
      footRight: 'ROUTE MASKED',
      items: [
        ['PUBLIC RECORDS', 'Public Records', 'Entry public index'],
        ['ARCHIVE DETAILS', 'Archive Details', 'Timeline, map, faction records'],
        ['THREAT MAP', 'Global Threat Map', 'Major incident-zone map'],
        ['TIMELINE', 'Chronology', 'Time-sequenced incident records'],
        ['KOREA ARC', 'Korea Arc', 'Walls and incident clues'],
        ['FACTIONS', 'Major Factions', 'Surface activity index'],
        ['ACCESS', 'Access Protocol', 'Public gateway']
      ]
    },
    ja: {
      kicker: 'TIU NAVIGATION',
      title: 'アーカイブメニュー',
      status: 'NETWORK DIRECTORY / PUBLIC ROUTE',
      close: 'メニューを閉じる',
      footLeft: 'CLEARANCE LIMITED',
      footRight: 'ROUTE MASKED',
      items: [
        ['PUBLIC RECORDS', '公開記録館', '入門用公開索引'],
        ['ARCHIVE DETAILS', 'アーカイブ詳細', '年表、地図、勢力記録'],
        ['THREAT MAP', 'グローバル脅威地図', '主要事件圏地図'],
        ['TIMELINE', '発生年表', '時系列事件記録'],
        ['KOREA ARC', '韓国圏記録', '防壁と事件の手掛かり'],
        ['FACTIONS', '主要勢力', '表面活動の整理'],
        ['ACCESS', 'アクセスプロトコル', '公開ゲート']
      ]
    }
  };

  const TARGETS = [
    'public-records',
    'landing',
    'threat-map',
    'timeline',
    'korea-branch',
    'factions',
    'access'
  ];

  let menuButton;
  let overlay;
  let lastFocus;

  function lang() {
    return LABELS[document.documentElement.lang] ? document.documentElement.lang : 'ko';
  }

  function paths() {
    const path = window.location.pathname;
    const isStandalone = /standalone\.html$/i.test(path);
    const isLanding = /landing/i.test(path);
    const isPublic = /public-records/i.test(path);
    const isAccess = /access-protocol/i.test(path);
    const landing = isStandalone ? 'landing-standalone.html' : 'landing.html';
    const publicRecords = isStandalone ? 'public-records-standalone.html' : 'public-records.html';
    const access = isStandalone ? 'access-protocol-standalone.html' : 'access-protocol.html';

    return [
      isPublic ? '#public-records' : publicRecords + '#public-records',
      isLanding ? '#archive-hub' : landing + '#archive-hub',
      isLanding ? '#threat-map' : landing + '#threat-map',
      isLanding ? '#timeline-dossier' : landing + '#timeline-dossier',
      isLanding ? '#branch-dossier' : landing + '#branch-dossier',
      isLanding ? '#factions-dossier' : landing + '#factions-dossier',
      isAccess ? '#top' : access
    ];
  }

  function currentIndex() {
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (/public-records/i.test(path)) return 0;
    if (/access-protocol/i.test(path)) return 6;
    if (hash === '#threat-map') return 2;
    if (hash === '#timeline-dossier') return 3;
    if (hash === '#branch-dossier') return 4;
    if (hash === '#factions-dossier') return 5;
    return 1;
  }

  function renderText() {
    if (!overlay) return;
    const dict = LABELS[lang()];
    const hrefs = paths();
    overlay.querySelector('.archive-menu__kicker').textContent = dict.kicker;
    overlay.querySelector('.archive-menu__title').textContent = dict.title;
    overlay.querySelector('.archive-menu__status').textContent = dict.status;
    overlay.querySelector('.archive-menu__close').setAttribute('aria-label', dict.close);
    overlay.querySelector('.archive-menu__foot-left').textContent = dict.footLeft;
    overlay.querySelector('.archive-menu__foot-right').textContent = dict.footRight;
    overlay.setAttribute('aria-label', dict.title);

    overlay.querySelectorAll('.archive-menu__link').forEach((link, index) => {
      link.href = hrefs[index];
      link.querySelector('.archive-menu__code').textContent = dict.items[index][0];
      link.querySelector('.archive-menu__label').textContent = dict.items[index][1];
      link.querySelector('.archive-menu__desc').textContent = dict.items[index][2];
      if (index === currentIndex()) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  function buildMenu() {
    overlay = document.createElement('div');
    overlay.className = 'archive-menu';
    overlay.hidden = true;
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'false');
    overlay.innerHTML =
      '<div class="archive-menu__scrim" data-menu-close></div>' +
      '<div class="archive-menu__panel">' +
        '<div class="archive-menu__head">' +
          '<div><span class="archive-menu__kicker"></span><h2 class="archive-menu__title"></h2><span class="archive-menu__status"></span></div>' +
          '<button class="archive-menu__close" type="button" data-menu-close></button>' +
        '</div>' +
        '<nav class="archive-menu__links" aria-label="Archive navigation">' +
          TARGETS.map(() => '<a class="archive-menu__link" href="#"><span class="archive-menu__code"></span><span><span class="archive-menu__label"></span><span class="archive-menu__desc"></span></span></a>').join('') +
        '</nav>' +
        '<div class="archive-menu__foot"><span class="archive-menu__foot-left"></span><span class="archive-menu__foot-right"></span></div>' +
      '</div>';
    document.body.appendChild(overlay);
    renderText();
  }

  function openMenu() {
    lastFocus = document.activeElement;
    renderText();
    overlay.hidden = false;
    document.body.classList.add('archive-menu-open');
    menuButton.setAttribute('aria-expanded', 'true');
    overlay.querySelector('.archive-menu__close').focus();
  }

  function closeMenu() {
    overlay.hidden = true;
    document.body.classList.remove('archive-menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function bindEvents() {
    menuButton.addEventListener('click', () => {
      if (overlay.hidden) openMenu();
      else closeMenu();
    });
    overlay.addEventListener('click', (event) => {
      if (event.target.closest('[data-menu-close]')) closeMenu();
      if (event.target.closest('.archive-menu__link')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !overlay.hidden) closeMenu();
    });
    document.addEventListener('tiu:langchange', renderText);
  }

  document.addEventListener('DOMContentLoaded', () => {
    menuButton = document.querySelector('.ap-menu');
    if (!menuButton) return;
    buildMenu();
    menuButton.setAttribute('aria-expanded', 'false');
    bindEvents();
  });
})();

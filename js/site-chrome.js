(function () {
  'use strict';
  var copy = {
    ko: {
      menu: '메뉴', nav0: '운용 안내', nav1: '세계관 · 인물', nav2: '용어 · SPEC', nav3: '플레이 가이드', nav4: '아카이브',
      brand: 'TIU 세계관 처음으로', navigation: '게임 안내', open: '메뉴 열기', close: '메뉴 닫기',
      worldTitle: '방벽 안의 세계,<br>그곳의 사람들.', worldLead: '재난 이후의 한국권과 ORACLE 한국지부. 지휘관이 마주할 장소, 조직, 그리고 사람들을 소개합니다.',
      databaseTitle: '낯선 이름을,<br>읽을 수 있도록.', databaseLead: '보고서에 반복되는 지명과 조직명, 이변체의 SPEC 분류를 찾아보세요. 필요한 항목부터 읽어도 좋습니다.',
      archiveTitle: '남겨진 기록을<br>따라가다.', checklist: '첫 플레이 체크리스트',
      briefCaption: '당신의 판단을 기다리는 사람들', briefAlt: '한국지부 통제실에 모인 네 명의 간부', roomAlt: '한국지부 통제실',
      captureCaption: '실제 게임 화면 · 네 가지 지표와 두 개의 선택지', captureAlt: '봉쇄·자원·신뢰·평가 지표와 카드의 두 선택지가 보이는 실제 게임 화면'
    },
    en: {
      menu: 'Menu', nav0: 'Operations', nav1: 'World & people', nav2: 'Terms & SPEC', nav3: 'Play guide', nav4: 'Archive',
      brand: 'TIU world archive home', navigation: 'Game companion pages', open: 'Open menu', close: 'Close menu',
      worldTitle: 'Inside the walls.<br>Among the people.', worldLead: 'Meet the places, organizations, and people of post-disaster Korea and the ORACLE Korea branch.',
      databaseTitle: 'Make sense of<br>unfamiliar names.', databaseLead: 'Look up place names, organizations, and SPEC classifications from the reports. Start with whatever you need.',
      archiveTitle: 'Follow the records<br>left behind.', checklist: 'Your first-session checklist',
      briefCaption: 'The people waiting for your decision', briefAlt: 'Four officers in the Korea branch control room', roomAlt: 'Korea branch control room',
      captureCaption: 'Actual gameplay · four metrics and two choices', captureAlt: 'Actual game screen showing Containment, Resources, Trust, Evaluation, and two card choices'
    },
    ja: {
      menu: 'メニュー', nav0: '運用案内', nav1: '世界観・人物', nav2: '用語・SPEC', nav3: 'プレイガイド', nav4: 'アーカイブ',
      brand: 'TIU世界観のトップへ', navigation: 'ゲーム案内', open: 'メニューを開く', close: 'メニューを閉じる',
      worldTitle: '防壁の内側にある世界、<br>そこに暮らす人々。', worldLead: '災害後の韓国圏とORACLE韓国支部。指揮官が出会う場所、組織、人々を紹介します。',
      databaseTitle: '見知らぬ名前を、<br>読み解くために。', databaseLead: '報告書に登場する地名や組織名、異変体のSPEC分類を調べられます。必要な項目から読んでみてください。',
      archiveTitle: '残された記録を<br>たどる。', checklist: '初回プレイのチェックリスト',
      briefCaption: 'あなたの判断を待つ人々', briefAlt: '韓国支部の管制室に集まる四人の幹部', roomAlt: '韓国支部の管制室',
      captureCaption: '実際のゲーム画面・四つの指標と二つの選択肢', captureAlt: '封鎖・資源・信頼・評価の指標とカードの二つの選択肢が見えるゲーム画面'
    }
  };
  var menu = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.site-header .nav');
  function dictionary() { return copy[document.documentElement.lang] || copy.ko; }
  function updateMenuLabel() { if (menu) menu.setAttribute('aria-label', dictionary()[menu.getAttribute('aria-expanded') === 'true' ? 'close' : 'open']); }
  function updateCopy() {
    var words = dictionary();
    document.querySelectorAll('[data-site-copy]').forEach(function (node) {
      var value = words[node.dataset.siteCopy];
      if (value !== undefined) node.innerHTML = value;
    });
    document.querySelectorAll('[data-site-alt]').forEach(function (node) { node.alt = words[node.dataset.siteAlt] || ''; });
    document.querySelector('.site-header .brand').setAttribute('aria-label', words.brand);
    if (nav) nav.setAttribute('aria-label', words.navigation);
    updateMenuLabel();
  }
  function closeMenu(returnFocus) {
    if (!nav || !nav.classList.contains('is-open')) return;
    nav.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
    updateMenuLabel();
    if (returnFocus) menu.focus();
  }
  document.addEventListener('DOMContentLoaded', updateCopy);
  new MutationObserver(updateCopy).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  if (menu) menu.addEventListener('click', updateMenuLabel);
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape') closeMenu(true); });
  document.addEventListener('click', function (event) { if (!event.target.closest('.site-header')) closeMenu(false); });
  var wideScreen = window.matchMedia('(min-width: 1181px)');
  wideScreen.addEventListener('change', function () { closeMenu(false); });
})();

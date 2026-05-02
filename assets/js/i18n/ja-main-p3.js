/* TIU v3 — JA main Phase 3 data */
(function() {
  if (!window.TIU_JA) return;

  window.TIU_JA.situation = {
    eyebrow: 'PA // SITUATION REPORT',
    title: 'CURRENT WORLD STATE',
    desc: '現在の世界の流れ。崩壊と膠着を三つの幕で要約する。',
    acts: [
      { num: 'I', state: 'PAST', period: '2020 — 2023', label: 'THE COLLAPSE', body: 'フィラデルフィア陥落から世界規模の崩壊が始まった。EV-Σは多くの国家封鎖を破壊し、殺処分は拡散を意味した。都市は一つずつ沈黙した。', variant: 'red' },
      { num: 'II', state: 'PAST', period: '2024 — 2025', label: 'THE PARTITION', body: '各国は即席の生存体系を構築した。米国ARES、中国Red Dragon、ロシアPermafrost、日本JSDF、EU-JBDF。韓国だけが97.3%の封鎖を維持した。', variant: 'amber' },
      { num: 'III', state: 'PRESENT', period: '2026 — NOW', label: 'THE STALEMATE', body: '現在。主要勢力と国家装置は緊張した静寂の中で動いている。TS-Ωはフィラデルフィアから内陸へ前進中。Shed Orderは拡張し、Prometheusは情報作戦を継続。Black-level記録は封印されたまま、韓国支部で何かが起きた。', variant: 'green' }
    ],
    footnote: 'NEXT ARC — UNWRITTEN'
  };

  window.TIU_JA.philosophy = {
    quote: 'あなたが自由意志だと信じるものが設計されたものなら、\nそれでも選択に意味は残るのか。',
    cite: 'PA-TERMINAL FRAGMENT // UNSIGNED'
  };

  window.TIU_JA.queryTerminal = {
    eyebrow: 'ARCHIVE // QUERY',
    title: 'SEARCH ARCHIVE',
    placeholder: '検索語、人物、区域、事件...',
    suggestLabel: 'SUGGESTED QUERIES',
    suggestions: ['EV-Σ', 'Philadelphia', 'Pilehead', 'COASTAL MIRROR', 'KR-INIT-001', 'Unregistered Inland', 'Shed Order'],
    submit: '> EXECUTE',
    offlineMsg: 'QUERY PROCESSOR OFFLINE — DATABASE v3 MIGRATION IN PROGRESS'
  };

  window.TIU_JA.krClassified = {
    eyebrow: 'CLASSIFIED // LEVEL-OMEGA',
    title: 'BRANCH KR-INIT-001',
    desc: 'KR-INIT-001に接続された制限支部記録。アクセスは限定される。このセクターはPA-TERMINAL表層インデックスに表示されない。',
    redacted: '████ ████ █████ ███ ██████ ███ ████',
    codeLabel: 'ACCESS CODE',
    codePlaceholder: 'Enter code...',
    submit: 'VERIFY',
    hint: 'HINT: KR-INIT ____________',
    denyMsg: 'ACCESS DENIED — INVALID CODE',
    successMsg: 'GRANT: VERIFIED — REDIRECTING...',
    v2Url: '../tiu-v2-complete/kr-branch.html',
    validCode: 'KR-INIT SHIELD'
  };

  window.TIU_JA.phaseDiagram = {
    eyebrow: 'ARCHIVE // EV-Σ ANALYSIS',
    title: 'EVOLUTION PHASES',
    desc: '感染進行の四段階。除去可能なのはPhase 0のみ。',
    phases: [
      { num: '0', name: 'DORMANT', type: 'LATENT', window: '24~72h', note: 'プリオン形態。外部兆候なし。血液検査のみ。', variant: 'green' },
      { num: '1', name: 'SURFACE', type: 'MUTATION', window: 'FIXED', note: 'マネキン形態。身体変化が開始。社会的には通過可能。', variant: 'amber' },
      { num: '2', name: 'STRUCTURE', type: 'DEFORM', window: 'SPREAD', note: '石灰化。身体再構成。分裂と胞子。', variant: 'red' },
      { num: '3', name: 'TERMINAL', type: 'COMPLETE', window: 'FINAL', note: 'HeLa形態。群体同化。認知喪失。', variant: 'purple' }
    ],
    windowLabel: 'WINDOW',
    criticalNote: 'CRITICAL: Phase 0（24~72h）のみ可逆。それ以後は不可逆。'
  };

  window.TIU_JA.intel = {
    eyebrow: 'PA // FEATURED INTEL',
    title: 'LATEST SIGNALS',
    desc: '表層インデックスから抽出された信号。更新: リアルタイム。',
    items: [
      { code: 'INTEL #001', title: 'MODEL DEVIATION', text: '"This region should have failed. Outcome does not match model."', source: 'SEALED AUTO-LOG', tone: 'red', img: 'assets/img/korea-barrier.webp' },
      { code: 'INTEL #002', title: 'SELF-INACCESSIBLE', text: '"表層端末がアクセスできないログが存在する。"', source: 'INTERNAL ALERT', tone: 'amber', img: 'assets/img/philadelphia-drone.webp' },
      { code: 'INTEL #003', title: 'UNLOGGED CONTRIBUTORS', text: '"韓国の97.3%のうち31%は、誰も記録していない手に由来する。"', source: 'FIELD ANALYSIS', tone: 'green', img: 'assets/img/meridian-richter.webp' }
    ]
  };

  window.TIU_JA.footer = {
    copyright: '© 2026 TURTLE ISLE UNIVERSE',
    archivist: 'ARCHIVIST // ABOUT THIS PROJECT →'
  };
})();

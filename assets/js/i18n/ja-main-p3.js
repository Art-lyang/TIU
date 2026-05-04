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

  window.TIU_JA.publicDossier = {
    eyebrow: 'PA // SURFACE DOSSIER',
    title: 'PUBLIC DOSSIER LAYER',
    desc: '封印中枢を開示せずに、この世界がどう動いているかを見せる公開インデックス。国家対応、市民生活、灰色市場、公開SPEC、事件の表層記録のみを表示します。',
    queryLabel: 'VISIBLE INDEX',
    queryValue: 'country / faction / incident / specimen / civil system',
    filters: [
      { label: 'PUBLIC', variant: 'green' },
      { label: 'HINT', variant: 'default' },
      { label: 'COUNTRY', variant: 'default' },
      { label: 'SPEC', variant: 'red' },
      { label: 'INCIDENT', variant: 'amber' },
      { label: 'CIVIL', variant: 'green' },
      { label: 'BLACK EXCLUDED', variant: 'red' }
    ],
    counters: [
      { label: 'OPEN RECORDS', value: '100+', variant: 'green' },
      { label: 'COUNTRY PACKS', value: '8+1', variant: 'amber' },
      { label: 'SPEC SAMPLES', value: '7', variant: 'red' },
      { label: 'CIVIL SYSTEMS', value: '12', variant: 'green' },
      { label: 'START ROUTES', value: '30+', variant: 'amber' },
      { label: 'SEALED CORES', value: 'LOCK', variant: 'red' }
    ],
    cards: [
      {
        code: 'STATE / KOREA',
        title: 'WHITE SHIELD',
        text: '韓国は防壁、検問、医療記録、家族申告、感染履歴をめぐる権利問題によって、世界の社会的密度を見せる公開中核地域です。',
        variant: 'green',
        meta: [
          { k: 'VISIBLE', v: '防壁、病棟、検問、許可証' },
          { k: 'CONFLICT', v: '安全記録と市民権の衝突' },
          { k: 'LINK', v: 'KR-INIT-001は表層記録のみ公開' }
        ]
      },
      {
        code: 'GLOBAL CIVIL',
        title: 'NATION RESPONSES',
        text: '米国は保険と封鎖線、日本はマニュアルと怪談、中国は検閲と音声リレー、EUは国境と権利訴訟、豪州は座標アプリと外縁統制で対応が分岐します。',
        variant: 'amber',
        meta: [
          { k: 'VISIBLE', v: '国別の生活感と行政反応' },
          { k: 'SCOPE', v: '米国 / 日本 / 中国 / ロシア / EU / 豪州' },
          { k: 'LIMIT', v: '非公開内陸圏と古代の真相は除外' }
        ]
      },
      {
        code: 'SPEC / PUBLIC SAMPLE',
        title: 'ABERRANT CATALOG',
        text: 'SPEC-001、003、008、011、012など一部サンプルは、外見、対応姿勢、市民被害の範囲のみ公開されます。起源と完全な系譜は封印されます。',
        variant: 'red',
        meta: [
          { k: 'VISIBLE', v: '識別名、被害様相、対応注意' },
          { k: 'RISK', v: '音声模倣、胞子、環境汚染' },
          { k: 'SEALED', v: '発生原因と上位系譜' }
        ]
      },
      {
        code: 'GRAY ECONOMY',
        title: 'MARKETS AND BROKERS',
        text: '検疫ブローカー、回収品取引、偽造許可証、保険コード、医療物資不足は、戦場の外にある生存コストとして世界を拡張します。',
        variant: 'amber',
        meta: [
          { k: 'VISIBLE', v: 'Meridian表層取引 / Silent Wolvesの痕跡' },
          { k: 'CONFLICT', v: '生存コストと倫理の亀裂' },
          { k: 'LIMIT', v: '最上位構造と供給線詳細は除外' }
        ]
      },
      {
        code: 'INCIDENT LINE',
        title: 'PHILADELPHIA / ASHFALL',
        text: 'フィラデルフィア系事件とAshfall以後の信号は、世界の均衡がまだ終わっていないことを示します。TS-Ωは内陸方向へ進むベクトルとしてのみ公開されます。',
        variant: 'red',
        meta: [
          { k: 'VISIBLE', v: '内陸進行、封鎖線、表層信号' },
          { k: 'STATUS', v: 'active hostile vector' },
          { k: 'SEALED', v: '起源、上位接続、ブラックログ' }
        ]
      },
      {
        code: 'PLAYABLE ENTRY',
        title: 'START ROUTES',
        text: 'プレイヤーは組織関係者、研究員、現場要員、灰色地帯の情報員、一般市民として進入できます。選択は報告書とIF記録として蓄積されます。',
        variant: 'green',
        meta: [
          { k: 'VISIBLE', v: '所属選択、初事件、自由入力' },
          { k: 'OUTPUT', v: 'セッション報告書 / IF記録 / 正史候補' },
          { k: 'LIMIT', v: '機密真相は権限上昇前に遮断' }
        ]
      }
    ],
    relationTitle: 'RELATION LAYER',
    relationNote: '公開可能な関係だけを要約します。敵対、協力、灰色取引、市民被害の流れを示し、ブラックレベルの原因は除外します。',
    relations: [
      { from: 'White Shield', type: 'protects / restricts', to: 'Korean civilians', variant: 'green' },
      { from: 'PROMETHEUS', type: 'uneasy contact', to: 'state systems', variant: 'amber' },
      { from: 'SHED ORDER', type: 'ideological threat', to: 'infected communities', variant: 'red' },
      { from: 'Meridian Group', type: 'market pressure', to: 'medical networks', variant: 'amber' },
      { from: 'Silent Wolves', type: 'gray logistics', to: 'closed routes', variant: 'amber' },
      { from: 'TS-Ω', type: 'hostile vector', to: 'Philadelphia inland line', variant: 'red' }
    ],
    recordsTitle: 'RECENTLY INDEXED',
    records: [
      { code: 'KR-CIVIL-REG-012', title: '隔離病棟の面会制限', text: '家族申告義務と感染履歴の権利が衝突した事例。', level: 'PUBLIC', variant: 'default' },
      { code: 'US-INS-LOCK-044', title: '保険コードの先行遮断', text: '公式発表より先に更新された危険算定コード。', level: 'PUBLIC', variant: 'default' },
      { code: 'JP-MANUAL-REV-19', title: '災害マニュアル改訂', text: '怪談化した事件が行政手続きに編入された事例。', level: 'PUBLIC', variant: 'default' },
      { code: 'CN-VOICE-RELAY-07', title: '削除後に残った音声', text: '検閲後、音声メッセージの連鎖として残った地域報告。', level: 'HINT', variant: 'default' },
      { code: 'EU-BORDER-CASE-31', title: '国境ゲート家族地位訴訟', text: '書類上の家族と検疫上の危険分類が衝突。', level: 'PUBLIC', variant: 'default' },
      { code: 'PHL-INLAND-LINE', title: 'フィラデルフィア内陸進行線', text: 'TS-Ωの移動状態のみ公開。起源とブラックログは封印。', level: 'SEALED', variant: 'sealed' }
    ]
  };

  window.TIU_JA.footer = {
    copyright: '© 2026 TURTLE ISLE UNIVERSE',
    archivist: 'ARCHIVIST // ABOUT THIS PROJECT →'
  };
})();

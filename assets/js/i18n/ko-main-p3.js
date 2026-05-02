/* TIU v3 — KO 메인 Phase 3 데이터
 * Philosophy / Query / KR-Classified / Phase Diagram / Intel */
(function() {
  if (!window.TIU_KO) return;

  window.TIU_KO.situation = {
    eyebrow: 'PA // SITUATION REPORT',
    title: 'CURRENT WORLD STATE',
    desc: '세계의 현재 흐름. 3막으로 요약한 붕괴와 교착.',
    acts: [
      { num: 'I',   state: 'PAST',    period: '2020 — 2023', label: 'THE COLLAPSE',  body: 'Philadelphia 함락으로 시작된 전 세계적 붕괴. EV-Σ가 대부분의 국가의 봉쇄선을 무너뜨렸다. 사살은 곧 확산이었고, 도시는 하나씩 침묵했다.', variant: 'red' },
      { num: 'II',  state: 'PAST',    period: '2024 — 2025', label: 'THE PARTITION', body: '국가들이 각자의 방식으로 생존을 모색. 미국 ARES · 중국 Red Dragon · 러시아 Permafrost · 일본 JSDF · EU-JBDF. 한국만이 97.3% 봉쇄를 유지했다.', variant: 'amber' },
      { num: 'III', state: 'PRESENT', period: '2026 — NOW',  label: 'THE STALEMATE', body: '현재. 4대 세력이 정적 속에서 움직인다. TS-Ω는 휴면. 쉐드 오더는 확장 중. 프로메테우스는 정보 작전. 관측자 계열 기록은 봉인 — 그리고 한국 지부에서 무언가가 일어났다.', variant: 'green' }
    ],
    footnote: 'NEXT ARC — UNWRITTEN'
  };

  window.TIU_KO.philosophy = {
    quote: '자유의지라고 믿는 것이 설계된 것이라면,\n선택에 의미가 있는가.',
    cite: 'PA-TERMINAL FRAGMENT // UNSIGNED'
  };

  window.TIU_KO.queryTerminal = {
    eyebrow: 'ARCHIVE // QUERY',
    title: 'SEARCH ARCHIVE',
    placeholder: '용어, 인물, 구역, 사건 검색...',
    suggestLabel: 'SUGGESTED QUERIES',
    suggestions: ['EV-Σ', 'Philadelphia', 'Pilehead', 'COASTAL MIRROR', 'KR-INIT-001', 'Unregistered Inland', 'Shed Order'],
    submit: '> EXECUTE',
    offlineMsg: 'QUERY PROCESSOR OFFLINE — DATABASE v3 MIGRATION IN PROGRESS'
  };

  window.TIU_KO.krClassified = {
    eyebrow: 'CLASSIFIED // LEVEL-OMEGA',
    title: 'BRANCH KR-INIT-001',
    desc: 'KR-INIT-001 관련 비공개 지부 기록. 접근 등급 제한. 이 구역은 PA-TERMINAL 표면 색인에 존재하지 않습니다.',
    redacted: '████████ ████ ██████████ ████ ████ ████████',
    codeLabel: 'ACCESS CODE',
    codePlaceholder: 'Enter code...',
    submit: 'VERIFY',
    hint: 'HINT: OBSERVATION ____________',
    denyMsg: 'ACCESS DENIED — INVALID CODE',
    successMsg: 'GRANT: VERIFIED — REDIRECTING...',
    v2Url: '../tiu-v2-complete/kr-branch.html',
    validCode: 'OBSERVATION TERMINATE'
  };

  window.TIU_KO.phaseDiagram = {
    eyebrow: 'ARCHIVE // EV-Σ ANALYSIS',
    title: 'EVOLUTION PHASES',
    desc: '감염 진행 4단계. Phase 0에서만 제거 가능하다.',
    phases: [
      { num: '0', name: '잠복',       type: 'DORMANT',   window: '24~72h',  note: '프리온형. 외부 증상 없음. 혈액 검사만 감지.',       variant: 'green'  },
      { num: '1', name: '표면 변이',  type: 'SURFACE',   window: '비가역',  note: '마네킹형. 신체 형태 변화 시작. 사회 통합 가능.',   variant: 'amber'  },
      { num: '2', name: '구조 변형',  type: 'STRUCTURE', window: '확산',    note: '경질화. 생체 구조 재편. 분열 및 포자 방출.',       variant: 'red'    },
      { num: '3', name: '터미널',     type: 'COMPLETE',  window: '완성',    note: 'HeLa형. 군체 통합. 인지 및 사회성 소실.',          variant: 'purple' }
    ],
    windowLabel: 'WINDOW',
    criticalNote: 'CRITICAL: Phase 0 (24~72h)만 제거 가능. 이후 비가역.'
  };

  window.TIU_KO.intel = {
    eyebrow: 'PA // FEATURED INTEL',
    title: 'LATEST SIGNALS',
    desc: '관측 기록에서 선별된 주요 신호. 갱신: 실시간.',
    items: [
      { code: 'INTEL #001', title: 'MODEL DEVIATION',      text: '"This region should have failed. Outcome does not match model."',  source: 'SEALED AUTO-LOG',  tone: 'red',   img: 'assets/img/korea-barrier.webp' },
      { code: 'INTEL #002', title: 'SELF-INACCESSIBLE',    text: '"표면 단말로는 열람할 수 없는 로그가 있다."',                       source: 'INTERNAL ALERT',  tone: 'amber', img: 'assets/img/philadelphia-drone.webp' },
      { code: 'INTEL #003', title: 'UNLOGGED CONTRIBUTORS', text: '"한국의 97.3% 중 31%는 누구의 손에서 나온 수치인가."',           source: 'FIELD ANALYSIS',  tone: 'green', img: 'assets/img/meridian-richter.webp' }
    ]
  };

  window.TIU_KO.footer = {
    copyright: '© 2026 TURTLE ISLE UNIVERSE',
    archivist: 'ARCHIVIST // ABOUT THIS PROJECT →'
  };
})();

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
      { num: 'III', state: 'PRESENT', period: '2026 — NOW',  label: 'THE STALEMATE', body: '현재. 주요 세력과 국가 기관이 정적 속에서 움직인다. TS-Ω는 필라델피아 내륙 방향으로 전진 중. 쉐드 오더는 확장 중이며, 프로메테우스는 정보 작전을 지속한다. 블랙 레벨 기록은 봉인 — 그리고 한국 지부에서 무언가가 일어났다.', variant: 'green' }
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
    hint: 'HINT: KR-INIT ____________',
    denyMsg: 'ACCESS DENIED — INVALID CODE',
    successMsg: 'GRANT: VERIFIED — REDIRECTING...',
    v2Url: '../tiu-v2-complete/kr-branch.html',
    validCode: 'KR-INIT SHIELD'
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
    desc: '표면 색인에서 선별된 주요 신호. 갱신: 실시간.',
    items: [
      { code: 'INTEL #001', title: 'MODEL DEVIATION',      text: '"This region should have failed. Outcome does not match model."',  source: 'SEALED AUTO-LOG',  tone: 'red',   img: 'assets/img/korea-barrier.webp' },
      { code: 'INTEL #002', title: 'SELF-INACCESSIBLE',    text: '"표면 단말로는 열람할 수 없는 로그가 있다."',                       source: 'INTERNAL ALERT',  tone: 'amber', img: 'assets/img/philadelphia-drone.webp' },
      { code: 'INTEL #003', title: 'UNLOGGED CONTRIBUTORS', text: '"한국의 97.3% 중 31%는 누구의 손에서 나온 수치인가."',           source: 'FIELD ANALYSIS',  tone: 'green', img: 'assets/img/meridian-richter.webp' }
    ]
  };

  window.TIU_KO.publicDossier = {
    eyebrow: 'PA // SURFACE DOSSIER',
    title: 'PUBLIC DOSSIER LAYER',
    desc: '기밀 핵심을 제외하고도 세계가 어떻게 작동하는지 확인할 수 있는 공개 색인입니다. 국가별 대응, 민간 생활, 회색경제, 공개 SPEC, 사건 표면 기록만 표시됩니다.',
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
        text: '한국은 방벽, 검문, 의료 기록, 가족 신고, 감염 이력 권리 문제로 세계관의 사회적 밀도를 보여주는 핵심 공개 구역입니다.',
        variant: 'green',
        meta: [
          { k: 'VISIBLE', v: '방벽, 병동, 검문, 허가증' },
          { k: 'CONFLICT', v: '안전 기록과 시민 권리의 충돌' },
          { k: 'LINK', v: 'KR-INIT-001 표면 기록만 공개' }
        ]
      },
      {
        code: 'GLOBAL CIVIL',
        title: 'NATION RESPONSES',
        text: '미국은 보험과 봉쇄선, 일본은 매뉴얼과 괴담, 중국은 검열과 음성 메시지, EU는 국경과 권리 소송, 호주는 좌표 앱과 외곽 통제로 갈라집니다.',
        variant: 'amber',
        meta: [
          { k: 'VISIBLE', v: '국가별 생활감과 행정 반응' },
          { k: 'SCOPE', v: '미국 / 일본 / 중국 / 러시아 / EU / 호주' },
          { k: 'LIMIT', v: '비공개 내륙권과 고대 진상 제외' }
        ]
      },
      {
        code: 'SPEC / PUBLIC SAMPLE',
        title: 'ABERRANT CATALOG',
        text: 'SPEC-001, 003, 008, 011, 012 등 일부 샘플은 외형, 대응 방식, 민간 피해 수준만 공개됩니다. 기원과 완전한 계보는 봉인됩니다.',
        variant: 'red',
        meta: [
          { k: 'VISIBLE', v: '식별명, 피해 양상, 대응 주의' },
          { k: 'RISK', v: '음성 모방, 포자, 환경 오염' },
          { k: 'SEALED', v: '발생 원인과 상위 계보' }
        ]
      },
      {
        code: 'GRAY ECONOMY',
        title: 'MARKETS AND BROKERS',
        text: '검역 브로커, 회수품 거래, 위조 허가증, 보험 코드, 의료 물자 부족은 세계관을 전쟁터 밖의 생활 비용으로 확장합니다.',
        variant: 'amber',
        meta: [
          { k: 'VISIBLE', v: 'Meridian 표면 거래 / Silent Wolves 흔적' },
          { k: 'CONFLICT', v: '생존 비용과 윤리의 균열' },
          { k: 'LIMIT', v: '최상위 구조와 공급선 세부 제외' }
        ]
      },
      {
        code: 'INCIDENT LINE',
        title: 'PHILADELPHIA / ASHFALL',
        text: '필라델피아 계열 사건과 Ashfall 이후 신호는 세계의 균형이 아직 끝나지 않았음을 보여줍니다. TS-Ω는 내륙 방향 전진 상태로만 공개됩니다.',
        variant: 'red',
        meta: [
          { k: 'VISIBLE', v: '내륙 전진, 봉쇄선, 표면 신호' },
          { k: 'STATUS', v: 'active hostile vector' },
          { k: 'SEALED', v: '기원, 상위 연결, 블랙 로그' }
        ]
      },
      {
        code: 'PLAYABLE ENTRY',
        title: 'START ROUTES',
        text: '플레이어는 조직 인물, 연구원, 현장요원, 회색지대 정보원, 일반 시민으로 진입할 수 있습니다. 선택지는 보고서와 IF 기록으로 누적됩니다.',
        variant: 'green',
        meta: [
          { k: 'VISIBLE', v: '소속 선택, 첫 사건, 자유 입력' },
          { k: 'OUTPUT', v: '세션 보고서 / IF 기록 / 캐논 후보' },
          { k: 'LIMIT', v: '기밀 진상은 권한 상승 전 차단' }
        ]
      }
    ],
    relationTitle: 'RELATION LAYER',
    relationNote: '공개 가능한 관계만 요약합니다. 적대, 협력, 회색 거래, 민간 피해 흐름을 보여주되 블랙 레벨 원인은 제외됩니다.',
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
      { code: 'KR-CIVIL-REG-012', title: '격리 병동 면회 제한', text: '가족 신고 의무와 감염 이력 권리 충돌 사례.', level: 'PUBLIC', variant: 'default' },
      { code: 'US-INS-LOCK-044', title: '보험 코드 선행 차단', text: '공식 발표보다 먼저 갱신된 위험 산정 코드.', level: 'PUBLIC', variant: 'default' },
      { code: 'JP-MANUAL-REV-19', title: '재난 매뉴얼 개정', text: '괴담으로 번진 사건이 행정 절차에 편입된 사례.', level: 'PUBLIC', variant: 'default' },
      { code: 'CN-VOICE-RELAY-07', title: '삭제 이후 남은 음성', text: '검열 이후 음성 메시지 체인으로 남은 지역 보고.', level: 'HINT', variant: 'default' },
      { code: 'EU-BORDER-CASE-31', title: '국경 게이트 가족 지위 소송', text: '서류상 가족과 검역상 위험자의 지위 충돌.', level: 'PUBLIC', variant: 'default' },
      { code: 'PHL-INLAND-LINE', title: '필라델피아 내륙 전진선', text: 'TS-Ω 이동 상태만 공개. 기원 및 블랙 로그 봉인.', level: 'SEALED', variant: 'sealed' }
    ]
  };

  window.TIU_KO.footer = {
    copyright: '© 2026 TURTLE ISLE UNIVERSE',
    archivist: 'ARCHIVIST // ABOUT THIS PROJECT →'
  };
})();

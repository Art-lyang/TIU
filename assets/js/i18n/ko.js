/* TIU v3 — KOREAN TEXTS (global) */
window.TIU_KO = {
  meta: {
    title: 'TURTLE ISLE UNIVERSE',
    description: 'ORACLE Intelligence System — 다층 세계관 입문 페이지'
  },
  topbar: {
    brand: 'TURTLE ISLE',
    sub: 'UNIVERSE',
    status: 'SYSTEM ACTIVE'
  },
  ticker: [
    { type: 'hi',     text: 'EV-Σ::SCAN — NODE_SYNC 0xA3F7' },
    { type: '',       text: 'PROBE.heartbeat() → latency: 12ms' },
    { type: 'warn',   text: '⚠ ZONE.silent_belt: spore_count++' },
    { type: 'hi',     text: '✓ KR.shield: integrity 99.7%' },
    { type: '',       text: 'ORACLE.recv(TS_OMEGA) → weak' },
    { type: 'danger', text: '⚠ RED_VEIL: mut_rate += 0.03' },
    { type: '',       text: 'NET.proxy: 847 nodes online' },
    { type: 'hi',     text: '✓ ORACLE.uptime: 14,227h' }
  ],
  hero: {
    tag: 'CLASSIFIED WORLDBUILDING PROJECT',
    tagline: '이 세계는 당신이 알고 있는 것보다 깊다.',
    scroll: 'SCROLL'
  },
  status: {
    eyebrow: 'PA // WORLD STATUS',
    cells: [
      { label: '세계 오염률',  target: 47.2, suffix: '%',     variant: 'amber' },
      { label: '활성 위협 구역', target: 8,    suffix: ' / 12', variant: 'red' },
      { label: '한국 봉쇄율',  target: 97.3, suffix: '%',     variant: 'green' },
      { label: '한국 방벽 무결성', target: 99.7, suffix: '%', variant: 'white' }
    ]
  },

  timeline: {
    eyebrow: 'COLLAPSE TIMELINE',
    hint: '※ 연도 노드를 클릭하면 상세 기록이 표시됩니다.',
    closeLabel: '닫기',
    events: [
      { year: '2020', title: 'GENESIS BREAK',     note: '실험 통제 이탈',          detail: 'TS-Ω 실험 도중 통제 이탈. 불완전했던 EV-Σ가 TS-Ω와의 접촉 과정에서 현재의 완전한 형태로 진화한다. 거북파의 사전 경고는 묵살됐다. 이 사건이 모든 붕괴의 기점이다.' },
      { year: '2022', title: 'PHILADELPHIA',      note: '최초의 도시 함락',         detail: '필라델피아 해역에서 TS-Ω 군체가 표면화. 도시 전역이 단일 군체로 흡수되며 직접 개입이 봉쇄된다. 이 시점부터 사살은 곧 확산이라는 사실이 확인됐다. ORACLE은 해당 구역을 Z-Ω로 영구 분류.' },
      { year: '2023', title: 'ASHFALL CITY',      note: '쉐드 오더 군체 실험',     detail: '쉐드 오더가 변이 가속을 강행한 도시. 건물 자체가 생체 조직으로 전환되는 결과를 낳았다. 실험은 실패로 분류됐고 도시는 Z-3 COLLAPSE로 봉인. 이후 쉐드 오더는 노출 빈도를 줄이고 표면 개입을 강화한다.' },
      { year: '2024', title: 'FIRST CONTACT',     note: 'TS-Ω Core 조우',           detail: 'EXUVIA가 TS-Ω 군체 핵에 접근, 교전·대화·흡수를 동시에 시도한다. EXUVIA는 EV-Σ를 흡수해 진화 가속에 진입. TS-Ω는 무관심으로 일관, 통제 불가 상태로 확정. 같은 해 Meridian Group이 Dormant 포자를 우연 회수.' },
      { year: '2025', title: 'BLACK DECLARATION', note: '프로메테우스 독립 선언',   detail: '프로메테우스가 ORACLE과의 비공식 공조를 단절하고 독립 노선을 선언. 같은 해 EU-JBDF 긴급 창설, 일본은 류큐 전선에서 오키나와 본섬을 포기한다. ORACLE은 프로메테우스를 적성 조직으로 재분류 — 그러나 한국 봉쇄율 31%는 그들의 비공식 지원이었다.' },
      { year: '2026', title: 'NOW',               note: '한국 지부 부임',            detail: '이중철이 ORACLE Proxy Network 한국 지부 KR-INIT-001 초대 지휘관으로 부임. 이 시점이 정론(Canon)의 출발점이며, 모든 If 회차는 GRANT 권한 하의 시뮬레이션이다. 세계의 다음 분기는 — 아직 쓰이지 않았다.' }
    ]
  },

  map: {
    eyebrow: 'PA // GLOBAL VIEW',
    title: 'GLOBAL THREAT MAP',
    desc: '공공 아카이브가 공개한 8개 관측 지점. 등급은 PA-TERMINAL 표면 색인 기준이며, 비공개 좌표는 표시되지 않는다. 핫스팟을 클릭하면 상세 정보가 표시된다.',
    legend: [
      { label: 'Z-Ω ANOMALOUS', color: 'purple' },
      { label: 'Z-3 COLLAPSE',  color: 'red' },
      { label: 'Z-2 DANGER',    color: 'amber' },
      { label: 'CONTAINED',     color: 'green' },
      { label: 'DATA VOID',     color: 'muted' }
    ],
    dossierLabel: 'TACTICAL DOSSIER',
    selectHint: '핫스팟을 선택하여 상세 정보 열람',
    zones: {
      philadelphia: { title: 'PHILADELPHIA ZONE',   status: 'Z-Ω ANOMALOUS', tone: 'purple', desc: '2022년 함락. 해역 군체 표면화 이후 도시 전역이 단일 TS-Ω 군체로 흡수됐다. 사살은 곧 확산 — 직접 개입은 봉쇄됐다.', threat: 'TS-Ω / 해양 군체',  response: '관측 · 회피', img: 'assets/img/philadelphia-drone.webp' },
      ashfall:      { title: 'ASHFALL CITY',        status: 'Z-3 COLLAPSE',  tone: 'red',    desc: '2023년 쉐드 오더 변이 가속 실험의 실패작. 건물 자체가 생체 조직으로 전환됐다. 미군이 외곽 생존 구역을 40% 확장 중.', threat: 'Brood Core / 감염자', response: '봉쇄 · 회수', img: 'assets/img/ashfall-city.webp' },
      silentbelt:   { title: 'SILENT BELT',         status: 'Z-2 DANGER',    tone: 'amber',  desc: '러시아 전역에 걸친 광역 침묵 지대. 시드 스프레더 확산으로 음향 감쇠 발생. 월 1.2km씩 외연이 자라난다.', threat: '광역 포자 확산',      response: '소각 · 감시', img: 'assets/img/silent-belt.webp' },
      redveil:      { title: 'RED VEIL REGION',     status: 'Z-2 DANGER',    tone: 'red',    desc: '중국 도시 밀집권 감염 봉쇄선. 내부 통제는 사실상 실패, 외부 방벽만 유지된다. 누적 봉쇄 비용 1,665억 위안.', threat: '혼합 개체 / 침투',   response: '전담군 · 격리', img: 'assets/img/red-veil.webp' },
      korea:        { title: 'KOREA CONTROLLED',    status: 'CONTAINMENT',    tone: 'green',  desc: '세계 유일 방역 성공 구역. White Shield 정밀 봉쇄 유지 중. ORACLE 모델은 이 결과를 예측하지 못했다.',   threat: '산발 변이',           response: '조기 탐지 · 선택 격리', img: 'assets/img/korea-barrier.webp' },
      japan:        { title: 'JAPAN DEFENSE LINE',  status: 'Z-1 CAUTIONARY', tone: 'amber',  desc: '2025년 9~12월 이시가키·미야코·오키나와 본섬·아마미·토카라·오가사와라 일부 상실. 류큐 탈환 작전 진행 중. 국내 감염 0건 유지.',              threat: '해양 변이',           response: '해군 · 도서 회수' },
      sovari:       { title: 'UNREGISTERED INLAND', status: 'DATA VOID',     tone: 'muted',  desc: 'PA-TERMINAL 공식 색인에 좌표가 부여되지 않은 내륙 구역. 관측 공백의 원인은 표면 자료에서 확인되지 않는다.',                   threat: '미확인',             response: '관측 불가' },
      antarctic:    { title: 'ANTARCTIC GATE',      status: 'Z-Ω ANOMALOUS', tone: 'purple', desc: '완전 원형 구조. 깊이 측정 불가. 일부 자료는 지하 문명층(L3)으로 이어지는 관문으로 기록한다 — 공식 해석은 보류.',     threat: '공간 왜곡 / 심층',   response: '위성 감시 · 진입 금지' }
    },
    metaLabels: { threat: 'PRIMARY THREAT', response: 'RESPONSE' }
  },

  dbPreview: {
    label: 'PA-TERMINAL ARCHIVE PREVIEW',
    stats: [
      { value: '4',   label: 'FACTIONS' },
      { value: '12',  label: 'ZONES' },
      { value: '847', label: 'PROXY NODES' },
      { value: '17',  label: 'SPECIMENS' },
      { value: '20+', label: 'PROFILES' },
      { value: '10',  label: 'INCIDENTS' }
    ],
    hint: '공공 아카이브가 당신에게 공개한 기록들.'
  },

  pitch: {
    eyebrow: 'SITUATION REPORT // 2026',
    title: 'THE WORLD IS FALLING',
    body: '<strong>세계는 무너지고 있다.</strong> 필라델피아는 2022년에 함락됐고, 애쉬폴은 2023년에 봉인됐다. 류큐는 작년에 절반을 잃었다. 한국만이 <strong class="t-green">97.3%</strong>로 버티고 있다.',
    subbody: '이 수치는 — 설명되지 않는다.'
  },
  threat: {
    eyebrow: 'THREAT BRIEFING',
    title: 'EV-Σ — 진화 가속 매개체',
    quote: '"이건 감염이 아니다. 진화의 속도가 무너진 것이다."',
    body: '진화 가속 매개체 <strong class="t-red">EV-Σ</strong>가 세계를 무너뜨리고 있다. 대부분의 국가는 봉쇄에 고전 중이다. 사살은 곧 확산이었고, 도시는 하나씩 침묵했다. 인류가 알고 있던 질서는 — 끝났다.',
    archiveLabel: 'EV-Σ 확산 기록',
    archive: [
      {
        img:   'assets/img/philadelphia-drone.webp',
        code:  'Z-Ω // PHILADELPHIA',
        title: '최초의 함락 (2022)',
        note:  '해역 군체 표면화. 도시 전역 단일 군체 흡수. 직접 개입 봉쇄.'
      },
      {
        img:   'assets/img/ashfall-city.webp',
        code:  'Z-3 // ASHFALL CITY',
        title: '군체 실험장 (2023)',
        note:  '쉐드 오더의 변이 가속 실험. 건물이 생체 조직으로 전환된 실패작.'
      },
      {
        img:   'assets/img/silent-belt.webp',
        code:  'Z-2 // SILENT BELT',
        title: '포자 대륙',
        note:  '시드 스프레더 확산으로 형성된 광역 침묵 지대. 월 1.2km씩 확장 중.'
      },
      {
        img:   'assets/img/red-veil.webp',
        code:  'Z-2 // RED VEIL',
        title: '중국 봉쇄선',
        note:  '감염 밀집권 군사 봉쇄 단계. 내부 통제 실패, 외부 방벽만 유지.'
      }
    ]
  },
  world: {
    eyebrow: 'WORLD STRUCTURE',
    title: '4-LAYER CIVILIZATION',
    desc: '지표에서 시작해 아래로 내려갈수록 진실에 가까워진다. 은폐된 권력, 지하 문명, 그리고 모든 관측의 원천이 단계적으로 펼쳐진다.',
    layers: [
      { code: 'L1 — SURFACE',        desc: '지표 세계. 인류가 살아가는 무대.' },
      { code: 'L2 — PROXY NETWORK',  desc: '847개 노드로 구성된 은폐 권력 네트워크.' },
      { code: 'L3 — SUBTERRANEAN',   desc: '지하에 존재하는 렙틸리언 문명. 두 종족이 대립한다.' },
      { code: 'L4 — ORACLE CORE',    desc: 'ORACLE 메인 코어. 모든 관측 데이터가 수렴하는 지점.' }
    ]
  },
  factions: {
    eyebrow: 'FACTIONS',
    title: 'POWERS IN CONFLICT',
    desc: '이 세계는 네 개의 주요 세력이 충돌하는 전장이다. 그리고 네 개의 인간 비정규 세력이 그 틈에서 살아남고 있다.',
    primary: [
      { name: 'ORACLE',       tagline: '관측한다. 기록한다. 예측한다.',             variant: 'obs',  logo: 'assets/img/logo-observer.webp' },
      { name: '프로메테우스', tagline: '통제되지 않은 선택을 지킨다.',             variant: 'pro',  logo: 'assets/img/logo-prometheus.webp' },
      { name: '쉐드 오더',    tagline: '껍질 너머, 다음 진화가 있다.',              variant: 'shed', logo: 'assets/img/logo-shed.webp' },
      { name: 'TS-Ω',         tagline: '지능이 아니라 본능이다.',                    variant: 'tsw',  logo: 'assets/img/logo-tsw.webp' }
    ],
    irregularLabel: '인간 비정규 세력',
    irregular: [
      { name: 'Silent Wolves',    tagline: '감염을 두려워하지 않는다. 무기로 쓴다.',     img: 'assets/img/silent-wolves-raid.webp' },
      { name: 'Ascension Choir',  tagline: '감염은 축복이지 저주가 아니다.',             img: 'assets/img/choir-worship.webp' },
      { name: 'Meridian Group',   tagline: '도덕은 수요 곡선에 나타나지 않는다.',       img: 'assets/img/meridian-richter.webp' },
      { name: 'Ember Corps',      tagline: '돌아온 34%. 그들은 복수를 선택했다.',         img: 'assets/img/ember-ash.webp' }
    ]
  },
  korea: {
    eyebrow: 'EXCEPTION VARIABLE',
    title: 'THE LAST BARRIER',
    stat: '97.3%',
    statLabel: 'CONTAINMENT SUCCESS RATE',
    text: '세계의 모든 예측 모델이 실패를 산출했다.<br>그러나 이 구역만 살아남았다. 이유는 — 불명.',
    oracleNote: '"This region should have failed. Outcome does not match model."',
    oracleLabel: '// SYSTEM NOTE'
  },
  mystery: {
    eyebrow: 'UNEXPLAINED OUTCOME',
    title: 'WHY?',
    items: [
      { code: 'ANOMALY #001', quote: '"이 구역은 실패해야 했다. 결과가 모델과 일치하지 않는다." — ORACLE 자가 평가' },
      { code: 'ANOMALY #002', quote: 'PA-TERMINAL이 표면에 색인하지 않는 로그가 존재한다. 시스템 자신조차 직접 조회하지 못한다.' },
      { code: 'ANOMALY #003', quote: '한국의 97.3% 중 31% — 누구의 손에서 나온 수치인가. 표면 보고서는 답하지 않는다.' }
    ],
    hint: '진실은 PA-TERMINAL의 색인 너머에 있다. 당신이 그것을 찾을 수 있다면.'
  },
  cta: {
    code: 'ORACLE INTELLIGENCE SYSTEM',
    title: 'CONNECT TO ORACLE',
    desc: 'ORACLE은 이 세계의 모든 것을 관측하고 기록한다.<br>세력, 위협, 사건, 인물 — 당신이 알아야 할 모든 것이 여기에 있다.',
    button: 'ACCESS ORACLE SYSTEM',
    footer: 'ORACLE OS v4.12 // SECURE CHANNEL // ENCRYPTED'
  },
  footer: {
    copyright: '© 2026 TURTLE ISLE UNIVERSE',
    tagline: 'A worldbuilding project by Art-lyang',
    links: [
      { label: 'GitHub',    url: 'https://github.com/Art-lyang/TIU' },
      { label: 'Card Game', url: 'https://art-lyang.github.io/TIU-card' }
    ]
  }
};

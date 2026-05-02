/* TIU v3 — KOREAN TEXTS (global) */
window.TIU_KO = {
  meta: {
    title: 'TURTLE ISLE UNIVERSE',
    description: 'PA-TERMINAL — 다층 세계관 입문 페이지'
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
    { type: '',       text: 'PA.recv(TS_OMEGA) → weak' },
    { type: 'danger', text: '⚠ RED_VEIL: mut_rate += 0.03' },
    { type: '',       text: 'NET.proxy: 847 nodes online' },
    { type: 'hi',     text: '✓ PA.uptime: 14,227h' }
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
      { year: '2020', title: 'GENESIS BREAK',     note: '실험 통제 이탈',          detail: 'TS-Ω 관련 실험 도중 통제 이탈. 불완전했던 EV-Σ가 접촉 과정에서 현재의 완전한 형태로 진화한다. 초기 경고는 묵살됐다. 이 사건이 모든 붕괴의 기점이다.' },
      { year: '2022', title: 'PHILADELPHIA',      note: '최초의 도시 함락',         detail: '필라델피아 해역에서 TS-Ω 군체가 표면화. 도시 전역이 단일 군체로 흡수되며 직접 개입이 봉쇄된다. 이 시점부터 사살은 곧 확산이라는 사실이 확인됐다. 해당 구역은 Z-Ω로 영구 분류된다.' },
      { year: '2023', title: 'ASHFALL CITY',      note: '쉐드 오더 군체 실험',     detail: '쉐드 오더가 변이 가속을 강행한 도시. 건물 자체가 생체 조직으로 전환되는 결과를 낳았다. 실험은 실패로 분류됐고 도시는 Z-3 COLLAPSE로 봉인. 이후 쉐드 오더는 노출 빈도를 줄이고 표면 개입을 강화한다.' },
      { year: '2024', title: 'FIRST CONTACT',     note: 'TS-Ω Core 조우',           detail: 'EXUVIA가 TS-Ω 군체 핵에 접근, 교전·대화·흡수를 동시에 시도한다. EXUVIA는 EV-Σ를 흡수해 진화 가속에 진입. TS-Ω는 무관심으로 일관, 통제 불가 상태로 확정. 같은 해 Meridian Group이 Dormant 포자를 우연 회수.' },
      { year: '2025', title: 'BLACK DECLARATION', note: '프로메테우스 독립 선언',   detail: '프로메테우스가 비공식 공조를 단절하고 독립 노선을 선언. 같은 해 EU-JBDF 긴급 창설, 일본은 류큐 전선에서 오키나와 본섬을 포기한다. 이후 프로메테우스는 적성 조직으로 취급된다 — 그러나 한국 봉쇄율 31%는 그들의 비공식 지원이었다.' },
      { year: '2026', title: 'NOW',               note: '한국 지부 부임',            detail: '이중철이 KR-INIT-001 초대 지휘관으로 부임. 이 시점이 정론(Canon)의 출발점이며, 일부 If 회차는 제한된 시뮬레이션 기록으로만 공개된다. 세계의 다음 분기는 — 아직 쓰이지 않았다.' }
    ]
  },

  map: {
    eyebrow: 'PA // GLOBAL VIEW',
    title: 'GLOBAL THREAT MAP',
    desc: '공공 아카이브가 공개한 사건 구역과 국가권역. 등급은 PA-TERMINAL 표면 색인 기준이며, 비공개 좌표는 표시되지 않는다. 핫스팟을 클릭하면 각 지역의 대응 체계와 공개 위험 정보가 표시된다.',
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
      philadelphia: { title: 'PHILADELPHIA ZONE',   country: 'USA',    status: 'Z-Ω ANOMALOUS', tone: 'purple', desc: '2022년 함락. 해역 군체 표면화 이후 도시 전역이 단일 TS-Ω 군체로 흡수됐다. 현재 군체 영향권은 내륙 방향으로 전진 중이다.', threat: 'TS-Ω / 해양 군체',  response: '감시 · 회피', img: 'assets/img/philadelphia-drone.webp' },
      ashfall:      { title: 'ASHFALL CITY',        country: 'USA',    status: 'Z-3 COLLAPSE',  tone: 'red',    desc: '2023년 쉐드 오더 변이 가속 실험의 실패작. 건물 자체가 생체 조직으로 전환됐다. 미군이 외곽 생존 구역을 40% 확장 중.', threat: 'Brood Core / 감염자', response: '봉쇄 · 회수', img: 'assets/img/ashfall-city.webp' },
      silentbelt:   { title: 'SILENT BELT',         country: 'RUSSIA', status: 'Z-2 DANGER',    tone: 'amber',  desc: '러시아 전역에 걸친 광역 침묵 지대. 시드 스프레더 확산으로 음향 감쇠 발생. 월 1.2km씩 외연이 자라난다.', threat: '광역 포자 확산',      response: '소각 · 감시', img: 'assets/img/silent-belt.webp' },
      euBorder:     { title: 'EU BORDER COURTS',    country: 'EU',     status: 'LEGAL FRONT',   tone: 'green',  desc: '국경 검역, 난민 보호, 감염자 권리 소송이 동시에 발생하는 유럽권 방어선. 느린 합의가 생존과 인권 사이에서 흔들린다.', threat: '법적 지연 / 월경 감염', response: '다국어 고지 · 법원 명령 · 공동 대응군' },
      germany:      { title: 'GERMAN BIOETHICS LINE', country: 'GERMANY', status: 'RECORD ETHICS', tone: 'green', desc: '독일권은 감염 기록과 생명윤리 기준을 엄격하게 다룬다. 정확한 문장이 때로 사람의 사회적 지위를 지우는 문제가 반복된다.', threat: '기록 오판 / 권리 충돌', response: '윤리위원회 · 법정 심사 · 의료 기록 감사' },
      redveil:      { title: 'RED VEIL REGION',     country: 'CHINA',  status: 'Z-2 DANGER',    tone: 'red',    desc: '중국 도시 밀집권 감염 봉쇄선. 내부 통제는 사실상 실패, 외부 방벽만 유지된다. 누적 봉쇄 비용 1,665억 위안.', threat: '혼합 개체 / 침투',   response: '전담군 · 격리', img: 'assets/img/red-veil.webp' },
      korea:        { title: 'KOREA CONTROLLED',    country: 'KOREA',  status: 'CONTAINMENT',    tone: 'green',  desc: '세계 유일 방역 성공 구역. White Shield 정밀 봉쇄 유지 중. 공개 예측 모델은 이 결과를 설명하지 못했다.',   threat: '산발 변이',           response: '조기 탐지 · 선택 격리', img: 'assets/img/korea-barrier.webp' },
      japan:        { title: 'JAPAN DEFENSE LINE',  country: 'JAPAN',  status: 'Z-1 CAUTIONARY', tone: 'amber',  desc: '2025년 9~12월 이시가키·미야코·오키나와 본섬·아마미·토카라·오가사와라 일부 상실. 류큐 탈환 작전 진행 중. 국내 감염 0건 유지.',              threat: '해양 변이',           response: '해군 · 도서 회수' },
      australia:    { title: 'AUSTRALIA BIOSAFE GRID', country: 'AUSTRALIA', status: 'FORTRESS PROTOCOL', tone: 'green', desc: '대륙 봉쇄, 자율 신고 앱, 내륙 광산 검역이 결합된 호주권 대응 체계. 시민은 서로를 감시하면서도 서로를 보호한다.', threat: '장거리 노출 / 내륙 통신 공백', response: 'BIOSAFE-AU · 장거리 허가 · 좌표 검역' },
      meridian:     { title: 'MERIDIAN LOGISTICS BELT', country: 'PRIVATE ENTERPRISE', status: 'PUBLIC FRONT', tone: 'amber', desc: '의료, 보험, 물류, 회수품 시장을 연결하는 기업 영향권. 공개본은 계약과 대피 우선순위만 보여주며 상위 구조는 설명하지 않는다.', threat: '계약 차별 / 회색시장', response: '감사 · 제한 거래 · 기업 보호권' },
      unregisteredInland: { title: 'UNREGISTERED INLAND', status: 'DATA VOID', tone: 'muted', desc: 'PA-TERMINAL 공식 색인에 좌표가 부여되지 않은 내륙 구역. 관측 공백의 원인은 표면 자료에서 확인되지 않는다.', threat: '미확인', response: '관측 불가' },
      antarctic:    { title: 'ANTARCTIC GATE',      status: 'Z-Ω ANOMALOUS', tone: 'purple', desc: '완전 원형 구조. 깊이 측정 불가. 일부 자료는 지하 문명층(L3)으로 이어지는 관문으로 기록한다 — 공식 해석은 보류.',     threat: '공간 왜곡 / 심층',   response: '위성 감시 · 진입 금지' }
    },
    metaLabels: { country: 'COUNTRY', threat: 'PRIMARY THREAT', response: 'RESPONSE' }
  },

  dbPreview: {
    label: 'PA-TERMINAL ARCHIVE PREVIEW',
    stats: [
      { value: '20+', label: 'FACTIONS' },
      { value: '12',  label: 'ZONES' },
      { value: '847', label: 'PROXY NODES' },
      { value: '17',  label: 'SPECIMENS' },
      { value: '20+', label: 'PROFILES' },
      { value: '30+', label: 'AGENCIES' }
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
  specIndex: {
    eyebrow: 'PUBLIC SPEC INDEX',
    title: 'SPECIMEN CATALOG',
    desc: '공개 SPEC 색인은 변이체를 괴물 도감처럼 모두 폭로하지 않는다. 대신 현장 요원이 실제로 판단해야 하는 행동 패턴, 접근 금지선, 민간 피해 비용을 우선 보여준다.',
    labels: { type: 'TYPE', rule: 'FIELD RULE' },
    note: '완전 계보, 발생 원인, 상위 분류 코드는 공개 색인에서 제외된다. 하지만 플레이어는 이 정도 정보만으로도 작전 선택을 시작할 수 있다.',
    items: [
      { code: 'SPEC-001', name: '감염체 마네킹', risk: 'PHASE 1 / CLOSE RANGE', tone: 'amber', img: 'assets/img/specs/mannequin-cluster.webp', visual: 'MANNEQUIN CLUSTER', type: 'M-TYPE 인간형', rule: '정지 개체로 보여도 3m 내 단독 접근 금지', desc: '정지 시 인체와 구분하기 어렵다. 자극이 들어오면 0.3초 안에 공격 전환이 발생할 수 있어, 구조 대상과 위협 대상의 판별을 지연시킨다.' },
      { code: 'SPEC-003', name: 'Brood Drone', risk: 'H-TYPE / HIVE', tone: 'red', img: 'assets/img/specs/brood-drone-closeup.webp', visual: 'BROOD CLOSEUP', type: '군집형 하위 개체', rule: '핵 개체 분리 전까지 소모전 금지', desc: '독립 의지는 낮지만 군체 명령에 빠르게 반응한다. 분리 후 12시간 내 비활성화 사례가 있으나, 그 전까지는 봉쇄선을 소모시키는 역할을 한다.' },
      { code: 'SPEC-004', name: 'Seed Spreader', risk: 'S-TYPE / CRITICAL', tone: 'red', img: 'assets/img/specs/seed-spreader.webp', visual: 'SILENT BELT NODE', type: '고정형 확산 개체', rule: '접근 반경 통제, 소각 전 포자 역류 계산', desc: '움직이지 않지만 바람과 토양을 확산 수단으로 사용한다. 제거 시 포자 폭발 방출 위험이 있어, 단순 소각은 2차 확산으로 이어질 수 있다.' },
      { code: 'SPEC-008', name: 'Spore Phantom', risk: 'S-TYPE / AIRBORNE', tone: 'red', img: 'assets/img/specs/spore-phantom.webp', visual: 'SPORE PHANTOM', type: '포자·광반응형', rule: '환기 차단, 조명 통제, 흡입 노출 기록', desc: '광원 조건에서 분산되며 물리적 제거가 어렵다. 흡입 노출이 발생하면 감염 이력 기록과 격리 비용이 개인 단위에서 가족 단위로 확대된다.' },
      { code: 'SPEC-011', name: 'Shell Talker', risk: 'VOICE MIMIC', tone: 'amber', img: 'assets/img/specs/spec_011_shelltalker.jpg', visual: 'VOICE INCIDENT CCTV', type: '음성 모방형', rule: '피해자 음성 확인 시 단독 응답 금지', desc: '실종자나 가족의 목소리를 흉내내어 문을 열게 만든다. TIU에서 공포가 단순 공격이 아니라 관계의 비용으로 작동하는 대표 사례다.' },
      { code: 'SPEC-012', name: 'Blood Pit', risk: 'ENVIRONMENTAL', tone: 'red', img: 'assets/img/specs/spec_012_bloodpit.jpg', visual: 'CONTAMINATED ZONE STILL', type: '환경 오염형', rule: '접촉 표면 소각, 회수품 반출 금지', desc: '붉은 점액질과 소화효소를 통해 유기물을 분해한다. 사건 현장이 곧 개체가 되는 유형이라, 구조와 증거 보존이 서로 충돌한다.' },
      { code: 'SPEC-015', name: 'Brain Seeker', risk: 'H-TYPE / EXILED', tone: 'red', img: 'assets/img/specs/spec_015_brainseeker.jpg', visual: 'EXILED HIVE TRACE', type: '학습형 이탈 개체', rule: '정면 교전 금지, 흔적 추적과 민간 대피 우선', desc: '군체 연결에서 벗어난 뒤 학습 능력이 상승한 개체군으로 분류된다. 세부 명명 사건과 발생 좌표는 공개 색인에 포함하지 않는다.' },
      { code: 'PHASE 0', name: 'Latent Host', risk: 'CIVILIAN COST', tone: 'green', img: 'assets/img/specs/infection-transition.webp', visual: 'INFECTION TRANSITION', type: '무증상 감염 이력자', rule: '기록 삭제 금지, 접근권 제한으로 처리', desc: '겉으로는 일반 시민과 다르지 않다. 학교, 보험, 결혼, 병역, 면회권 같은 생활 제도가 먼저 흔들리기 때문에 사회적 긴장을 만드는 핵심 축이다.' }
    ]
  },
  world: {
    eyebrow: 'WORLD STRUCTURE',
    title: '4-LAYER CIVILIZATION',
    desc: '지표에서 시작해 아래로 내려갈수록 진실에 가까워진다. 은폐된 권력, 지하 문명, 그리고 표면 색인 너머의 코어가 단계적으로 펼쳐진다.',
    layers: [
      { code: 'L1 — SURFACE',        desc: '지표 세계. 인류가 살아가는 무대.' },
      { code: 'L2 — PROXY NETWORK',  desc: '847개 노드로 구성된 은폐 권력 네트워크.' },
      { code: 'L3 — SUBTERRANEAN',   desc: '지하에 존재하는 렙틸리언 문명. 두 종족이 대립한다.' },
      { code: 'L4 — ORACLE CORE',    desc: '표면 색인에서는 코어로만 표시되는 심층 분류 중추. 기원과 주체는 공개되지 않는다.' }
    ]
  },
  factions: {
    eyebrow: 'FACTIONS',
    title: 'POWERS IN CONFLICT',
    desc: '공개 아카이브는 세계의 충돌을 네 개의 큰 축으로 압축한다. 실제 현장에는 국가 대응 체계, 비공식 조직, 민간 브로커, 종교 집단이 그 아래에서 얽혀 움직인다.',
    primary: [
      { name: 'ORACLE CORE', meta: 'L4 / CODE REQUIRED', tagline: '분류한다. 예측한다. 보류한다.', detail: '표면 색인에는 코어로만 남는 심층 분류 중추. 직접 열람은 제한된다.', access: 'BLACK-LEVEL', variant: 'obs',  logo: 'assets/img/logo-oracle-core.webp' },
      { name: '프로메테우스', meta: 'HUMAN BLACK OPS', tagline: '통제되지 않은 선택을 지킨다.', detail: '공식 기록 밖에서 방벽 기술과 정보 작전을 흔든다. 한국 봉쇄율 31%의 그림자가 이들과 연결된다.', access: 'HINT', variant: 'pro',  logo: 'assets/img/logo-prometheus.webp' },
      { name: '쉐드 오더',    meta: 'MUTATION CULT', tagline: '껍질 너머, 다음 진화가 있다.', detail: '감염을 재난이 아니라 진화로 해석하는 확장 세력. Ashfall 기록 이후 표면 활동이 감소했다.', access: 'PUBLIC / HINT', variant: 'shed', logo: 'assets/img/logo-shed.webp' },
      { name: 'TS-Ω',         meta: 'Z-Ω / PHILADELPHIA', tagline: '지능이 아니라 본능이다.', detail: '필라델피아 해역에서 표면화한 군체 축. 현재 영향권은 내륙 방향으로 전진 중이다.', access: 'PUBLIC THREAT', variant: 'tsw',  logo: 'assets/img/logo-tsw.webp' }
    ],
    irregularLabel: '인간·국가·회색지대 세력',
    irregular: [
      { name: 'Silent Wolves',    meta: 'MERCENARY CELL', tagline: '감염을 두려워하지 않는다. 무기로 쓴다.', detail: '러시아권 회색지대 정보원과 무장 계약망.', access: 'HINT', img: 'assets/img/silent-wolves-raid.webp' },
      { name: 'Ascension Choir',  meta: 'RELIGIOUS EXTREMES', tagline: '감염은 축복이지 저주가 아니다.', detail: '재난 이후 확산된 종교적 해석과 감염 숭배 파편.', access: 'PUBLIC / HINT', img: 'assets/img/choir-worship.webp' },
      { name: 'Meridian Group',   meta: 'PRIVATE ENTERPRISE', tagline: '도덕은 수요 곡선에 나타나지 않는다.', detail: '물류·의료·보험 시장을 통해 위기를 상품화하는 기업권.', access: 'PUBLIC FRONT', img: 'assets/img/meridian-richter.webp' },
      { name: 'Ember Corps',      meta: 'SURVIVOR MILITIA', tagline: '돌아온 34%. 그들은 복수를 선택했다.', detail: 'Ashfall 이후 귀환자와 생존자들이 만든 보복 네트워크.', access: 'HINT', img: 'assets/img/ember-ash.webp' }
    ]
  },
  korea: {
    eyebrow: 'EXCEPTION VARIABLE',
    title: 'THE LAST BARRIER',
    stat: '97.3%',
    statLabel: 'CONTAINMENT SUCCESS RATE',
    text: '세계의 모든 예측 모델이 실패를 산출했다.<br>그러나 이 구역만 살아남았다. 방벽, 군 체계, 기록 봉인, 비공식 협력망이 한 국가 안에서 겹쳐 작동한다.',
    archiveHint: '한국 아카이브는 공개 기록과 잠긴 기록을 함께 배치한다. 세계관 문서나 카드게임에서 얻은 코드가 있으면 일부 제한 파일을 더 열람할 수 있다.',
    nodes: [
      { code: 'KR-INIT-001', name: '한국 지부', access: 'CODE REQUIRED', tone: 'green', text: '정론의 시작점. 지휘, 분석, 현장, 생물학, 시스템 관리가 한 거점에 묶이며 카드게임의 첫 작전 기록과 직접 연결된다.' },
      { code: '0과', name: '0과', access: 'RESTRICTED', tone: 'amber', text: '문서와 현장 사이의 불일치를 다루는 한국 내부 특수 조직. 삭제가 아니라 누락, 마스킹, 접근권 차이를 추적한다.' },
      { code: 'DG', name: 'DG', access: 'HINT', tone: 'green', text: '국가 생존 기능을 우선하는 심층 대응 라인. 방벽, 검역, 기록 봉인, 민간 피해 보상 기준과 연결된다.' },
      { code: '특재사', name: '특수재난 대응 라인', access: 'PUBLIC / HINT', tone: 'amber', text: '시민에게는 재난 행정으로 보이는 현장 대응 체계. 검문, 대피, 격리 명령, 병원 이송, 통행 패스를 담당한다.' },
      { code: 'WHITE SHIELD', name: 'White Shield', access: 'PUBLIC', tone: 'green', text: '대한민국 군 EV-Σ 대응 체계. 세계에서 유일하게 97.3% 봉쇄율을 유지한 공개 지표이며 방벽 무결성과 연결된다.' },
      { code: 'COASTAL MIRROR', name: 'COASTAL MIRROR', access: 'HINT', tone: 'red', text: '해안 방벽 기술과 비공식 협력의 흔적. 공개 보고서는 이름만 남기고, 실제 기여율과 협력 주체는 설명하지 않는다.' }
    ],
    systemNote: '"This region should have failed. Outcome does not match model."',
    systemLabel: 'PA // SYSTEM NOTE'
  },
  regions: {
    eyebrow: 'GLOBAL CIVILIAN INDEX',
    title: 'NATIONAL RESPONSE LAYERS',
    desc: 'TIU의 세계는 한 나라의 재난으로 끝나지 않는다. 같은 EV-Σ라도 한국은 방벽과 기록, 미국은 보험과 종교, EU는 권리와 국경, 호주는 앱과 좌표로 다르게 반응한다.',
    note: '이 권역 정보는 공개 페이지에서 바로 읽을 수 있는 표면 자료다. 비공개 심층권과 고대 문명 관련 정보는 여기서 직접명으로 다루지 않는다.',
    items: [
      { code: 'KR', name: '한국', status: '97.3% CONTAINED', tone: 'green', line: '안전하다고 기록되는 나라. 방벽, 가족 신고, 격리 병동, 기록 봉인이 한 사회 안에서 작동한다.', tags: ['방벽', '0과', 'DG', '특재사'] },
      { code: 'US', name: '미국', status: 'DIVIDED BLOCKADE', tone: 'amber', line: '정부 발표보다 보험 코드가 먼저 움직인다. 봉쇄선, 종교 부흥, 음모론 시장이 재난을 해석한다.', tags: ['보험', 'FEMA', 'PARCHMENT', '봉쇄선'] },
      { code: 'JP', name: '일본', status: 'ISLAND DEFENSE', tone: 'amber', line: '매뉴얼에 없는 재난은 괴담이 된다. 해안 상실, 신사 기록, 괴담 채널이 방어선과 겹친다.', tags: ['류큐', '괴담TV', '매뉴얼', '신사'] },
      { code: 'CN', name: '중국', status: 'OUTER WALL ONLY', tone: 'red', line: '글은 사라져도 목소리는 남는다. 검열, 사회신용, 음성 메시지, 외곽 방벽이 서로 충돌한다.', tags: ['검열', 'Red Veil', '음성 메시지', '사회신용'] },
      { code: 'RU', name: '러시아', status: 'SILENT FRONTIER', tone: 'amber', line: '지도에 없어도 신호는 온다. 혹한, 사라진 마을, 단파 라디오, 회색지대 무장망이 핵심이다.', tags: ['Silent Belt', '단파', '철도', 'Silent Wolves'] },
      { code: 'EU', name: 'EU', status: 'LEGAL FRONT', tone: 'green', line: '서류는 가족을 인정하지만 게이트는 멈춘다. 느린 합의와 감염자 권리 소송이 방어선이 된다.', tags: ['국경', '권리', '통역', '소송'] },
      { code: 'DE', name: '독일', status: 'BIOETHICS LINE', tone: 'green', line: '정확한 문장은 때로 사람을 지운다. 감염 이력, 생명윤리, 기록 감사가 사건의 중심이 된다.', tags: ['기록 윤리', '법정', '의료위원회', '베를린'] },
      { code: 'AU', name: '호주', status: 'FORTRESS PROTOCOL', tone: 'green', line: '사람보다 먼저 좌표가 거절된다. 시민 신고 앱, 내륙 광산, 대륙 봉쇄가 생활을 바꾼다.', tags: ['BIOSAFE-AU', 'Outback', '광산', '좌표 검역'] }
    ]
  },
  mystery: {
    eyebrow: 'UNEXPLAINED OUTCOME',
    title: 'WHY?',
    items: [
      { code: 'ANOMALY #001', quote: '"이 구역은 실패해야 했다. 결과가 모델과 일치하지 않는다." — 봉인된 예측 보고서' },
      { code: 'ANOMALY #002', quote: 'PA-TERMINAL이 표면에 색인하지 않는 로그가 존재한다. 공개 단말은 그 내용을 직접 조회하지 못한다.' },
      { code: 'ANOMALY #003', quote: '한국의 97.3% 중 31% — 누구의 손에서 나온 수치인가. 표면 보고서는 답하지 않는다.' }
    ],
    hint: '진실은 PA-TERMINAL의 색인 너머에 있다. 당신이 그것을 찾을 수 있다면.'
  },
  cta: {
    code: 'PA-TERMINAL PUBLIC ARCHIVE',
    title: 'OPEN THE ARCHIVE',
    desc: '공개 가능한 기록은 이 단말을 통해 열람된다.<br>세력, 위협, 사건, 인물 — 표면 색인이 허용한 모든 것이 여기에 있다.',
    button: 'ACCESS PA-TERMINAL',
    footer: 'PA-TERMINAL v3.0 // PUBLIC CHANNEL // FILTERED'
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

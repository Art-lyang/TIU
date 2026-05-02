/* TIU v3 — KO 메인 페이지 데이터 (부팅 / 커맨드 히어로 / 카테고리 / GNav) */
(function() {
  if (!window.TIU_KO) return;

  window.TIU_KO.boot = {
    preTitle: 'PA ACCESS REQUESTED',
    title: 'PA-TERMINAL',
    subtitle: 'PUBLIC ARCHIVE SYSTEM',
    button: 'OPEN ARCHIVE',
    footerOs: 'PA-TERMINAL v3.0',
    footerOsSub: 'STANDBY',
    footerChannel: 'SECURE CHANNEL',
    footerChannelSub: 'ENCRYPTED',
    terminalLines: [
      { text: '> PA-TERMINAL v3.0 — INITIALIZING...', cls: '' },
      { text: '  Loading public archive shell...',     cls: 'dim' },
      { text: '  Scanning disclosure matrix...',       cls: 'dim' },
      { text: '  [OK] EV-Σ public index synced',       cls: 'ok' },
      { text: '  [OK] Branch nodes indexed',           cls: 'ok' },
      { text: '  [OK] Global view calibrated',         cls: 'ok' },
      { text: '  Verifying temporary credentials...',  cls: 'dim' },
      { text: '  [OK] PUBLIC ACCESS confirmed',        cls: 'ok' },
      { text: '  Establishing archive channel...',     cls: 'dim' },
      { text: '> OPENING PA-TERMINAL...',              cls: '' }
    ]
  };

  window.TIU_KO.commandHero = {
    eyebrow: 'PA // ARCHIVE TERMINAL',
    title: 'COMMAND CENTER',
    welcome: '오퍼레이터. 접속을 확인했습니다.',
    sessionLabel: 'SESSION',
    grantLabel: 'GRANT',
    grantValue: 'ACTIVE — TEMPORARY ACCESS'
  };

  window.TIU_KO.categories = {
    eyebrow: 'PA // PUBLIC ARCHIVES',
    title: 'MAIN MENU',
    desc: '공공 아카이브는 일곱 개의 범주로 구성됩니다. 각 범주에서 공개 가능한 기록을 열람하십시오.',
    items: [
      { id: 'factions',  icon: '⚡', name: 'FACTIONS',  sub: '4대 세력 · 관계도 · 철학',                  href: 'factions.html', ready: true },
      { id: 'threats',   icon: '🧬', name: 'THREATS',   sub: 'EV-Σ · 변이체 · 구역 · 검역',                href: 'threats.html', ready: true },
      { id: 'records',   icon: '📡', name: 'RECORDS',   sub: '사건 타임라인 · 공개본 누락 · 교신',         href: 'records.html', ready: true },
      { id: 'incidents', icon: '📋', name: 'INCIDENTS', sub: '첫 사건 · 도시전설 · 서브스토리',            href: 'incidents.html', ready: true },
      { id: 'specimens', icon: '🧪', name: 'SPECIMENS', sub: '변이체 색인 · SPEC 도감',                    href: 'specimens.html', ready: true },
      { id: 'profiles',  icon: '👤', name: 'PROFILES',  sub: '글로벌 인물 · 세력별 분류',                  href: 'profiles.html', ready: true },
      { id: 'database',  icon: '🗄',  name: 'DATABASE',  sub: '전체 색인 · PA-TERMINAL',                     href: 'database.html', ready: true }
    ],
    comingSoon: 'COMING SOON',
    comingSoonMsg: '이 범주는 v3 작업 중입니다.\nv2 버전을 보시겠습니까?'
  };

  window.TIU_KO.restricted = {
    eyebrow: 'PA // RESTRICTED ENTRIES',
    title: 'RESTRICTED',
    desc: '아래 영역은 일반 열람 등급으로는 접근할 수 없습니다.',
    cards: [
      {
        id: 'kr',
        icon: '🔒',
        flag: '🇰🇷',
        name: '한국 지부',
        code: 'BRANCH KR-INIT-001',
        sub: '접근 제한 · VERIFY',
        action: 'VERIFY',
        type: 'verify',
        url: '../tiu-v2-complete/kr-branch.html'
      },
      {
        id: 'inland',
        icon: '🔒',
        flag: '🌍',
        name: '비공개 내륙권',
        code: 'UNREGISTERED INLAND',
        sub: '출처 미표기 구역',
        action: 'ACCESS DENIED',
        type: 'locked',
        msg: '> [REDACTED] :: 본 구역은 공개 좌표가 부여되지 않습니다.'
      },
      {
        id: 'observer',
        icon: '🔒',
        flag: '👁',
        name: 'BLACK-LEVEL SYSTEM',
        code: 'OBSERVATION-CLASS LOG',
        sub: '비공개 로그 · 손상됨',
        action: 'ACCESS DENIED',
        type: 'locked',
        msg: '> [REDACTED] :: 본 시스템은 PA-TERMINAL에서 직접 조회되지 않습니다.'
      }
    ]
  };

  window.TIU_KO.statusWall = {
    eyebrow: 'PA // WORLD STATUS',
    title: 'REAL-TIME METRICS',
    desc: '공개 관측 지표. 수치는 PA-TERMINAL 표면 색인에서 자동 갱신된다.',
    cells: [
      { label: '오염률',      target: 47.2,  suffix: '%',   trend: 'up',   variant: 'amber' },
      { label: '활성 구역',    target: 8,     suffix: '/12', trend: 'flat', variant: 'red' },
      { label: '한국 봉쇄율', target: 99.7,  suffix: '%',   trend: 'up',   variant: 'green' },
      { label: 'PA INDEX',    target: 100,   suffix: '%',   trend: 'flat', variant: 'green' },
      { label: 'PUBLIC NODES',target: 847,   suffix: '',    trend: 'flat', variant: 'green' },
      { label: '위협 레벨',   target: 'HIGH',suffix: '',    trend: 'up',   variant: 'red' }
    ]
  };

  window.TIU_KO.threatGrid = {
    eyebrow: 'PA // FACTION SUMMARY',
    title: 'FACTION ACTIVITY',
    desc: '4대 세력의 현재 활동 상태. 관측 가능한 활동만 기록됨.',
    factions: [
      { id: 'observer',   name: 'OBSERVATION-CLASS', status: 'RESTRICTED', last: '표면 색인 없음',       threat: 100, variant: 'obs',  logo: 'assets/img/logo-observer.webp' },
      { id: 'prometheus', name: 'PROMETHEUS', status: 'ACTIVE',     last: '정보 작전 감지 (14:22)',     threat: 60,  variant: 'pro',  logo: 'assets/img/logo-prometheus.webp' },
      { id: 'shed',       name: 'SHED ORDER', status: 'EXPANDING',  last: 'Ashfall 신호 (14:18)',       threat: 85,  variant: 'shed', logo: 'assets/img/logo-shed.webp' },
      { id: 'tsw',        name: 'TS-Ω',       status: 'DORMANT',    last: 'Philadelphia 정적 (12:45)', threat: 95,  variant: 'tsw',  logo: 'assets/img/logo-tsw.webp' }
    ],
    labels: { status: 'STATUS', last: 'LAST ACTIVITY', threat: 'THREAT LEVEL' }
  };

  window.TIU_KO.activityFeed = {
    eyebrow: 'PA // LIVE FEED',
    title: 'RECENT ACTIVITY',
    desc: 'PA-TERMINAL 공개 수신 기록.',
    events: [
      { time: '14:32:18', type: 'warn',   text: 'RED_VEIL: mut_rate += 0.03' },
      { time: '14:30:02', type: 'ok',     text: 'KR.shield: integrity 99.7%' },
      { time: '14:28:45', type: '',       text: 'PA.recv(TS_OMEGA) → weak' },
      { time: '14:25:10', type: 'warn',   text: 'ZONE.silent_belt: spore_count++' },
      { time: '14:22:33', type: 'ok',     text: 'NET.archive: 847 nodes online' },
      { time: '14:20:07', type: '',       text: 'System uptime: 14,227h' },
      { time: '14:17:52', type: 'danger', text: 'PROTOCOL: CLASSIFIED engaged' },
      { time: '14:15:21', type: 'warn',   text: 'ASHFALL signal detected' },
      { time: '14:12:08', type: '',       text: 'THREAT_MATRIX recalculated' },
      { time: '14:09:44', type: 'ok',     text: 'KR-INIT-001 sync: ACTIVE' }
    ]
  };

  window.TIU_KO.gnav = [
    { id: 'home',      icon: '🏠', label: 'MAIN',      href: 'main.html' },
    { id: 'factions',  icon: '⚡', label: 'FACTIONS',  href: 'factions.html' },
    { id: 'threats',   icon: '🧬', label: 'THREATS',   href: 'threats.html' },
    { id: 'records',   icon: '📡', label: 'RECORDS',   href: 'records.html' },
    { id: 'incidents', icon: '📋', label: 'INCIDENTS', href: 'incidents.html' },
    { id: 'specimens', icon: '🧪', label: 'SPECIMENS', href: 'specimens.html' },
    { id: 'profiles',  icon: '👤', label: 'PROFILES',  href: 'profiles.html' },
    { id: 'database',  icon: '🗄',  label: 'DATABASE',  href: 'database.html' }
  ];
})();

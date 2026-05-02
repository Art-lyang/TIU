/* TIU v3 — EN main page data (boot / command hero / categories / gnav) */
(function() {
  if (!window.TIU_EN) return;

  window.TIU_EN.boot = {
    preTitle: 'ORACLE ACCESS REQUESTED',
    title: 'ORACLE',
    subtitle: 'OBSERVER INTELLIGENCE SYSTEM',
    button: 'CONNECT TO ORACLE',
    footerOs: 'ORACLE OS v4.12',
    footerOsSub: 'STANDBY',
    footerChannel: 'SECURE CHANNEL',
    footerChannelSub: 'ENCRYPTED',
    terminalLines: [
      { text: '> ORACLE OS v4.12 — INITIALIZING...', cls: '' },
      { text: '  Loading neural interface...',        cls: 'dim' },
      { text: '  Scanning threat matrix...',          cls: 'dim' },
      { text: '  [OK] EV-Σ database synced',          cls: 'ok' },
      { text: '  [OK] PROXY NETWORK online (847)',    cls: 'ok' },
      { text: '  [OK] Tactical grid calibrated',      cls: 'ok' },
      { text: '  Verifying GRANT credentials...',     cls: 'dim' },
      { text: '  [OK] TEMPORARY ACCESS confirmed',    cls: 'ok' },
      { text: '  Establishing secure channel...',     cls: 'dim' },
      { text: '> CONNECTING TO ORACLE...',            cls: '' }
    ]
  };

  window.TIU_EN.commandHero = {
    eyebrow: 'PA // ARCHIVE TERMINAL',
    title: 'COMMAND CENTER',
    welcome: 'Operator. Connection confirmed.',
    sessionLabel: 'SESSION',
    grantLabel: 'GRANT',
    grantValue: 'ACTIVE — TEMPORARY ACCESS'
  };

  window.TIU_EN.categories = {
    eyebrow: 'PA // PUBLIC ARCHIVES',
    title: 'MAIN MENU',
    desc: 'The public archive is organized in seven categories. Select one to browse the publicly available records.',
    items: [
      { id: 'factions',  icon: '⚡', name: 'FACTIONS',  sub: '4 powers · Relations · Philosophies',          href: '#', ready: false },
      { id: 'threats',   icon: '🧬', name: 'THREATS',   sub: 'EV-Σ · Variants · Zones · Quarantine',         href: '#', ready: false },
      { id: 'records',   icon: '📡', name: 'RECORDS',   sub: 'Timeline · Missing entries · Signals',          href: '#', ready: false },
      { id: 'incidents', icon: '📋', name: 'INCIDENTS', sub: 'First cases · Urban legends · Substories',      href: '#', ready: false },
      { id: 'specimens', icon: '🧪', name: 'SPECIMENS', sub: 'Aberrants · SPEC catalog',                       href: '#', ready: false },
      { id: 'profiles',  icon: '👤', name: 'PROFILES',  sub: 'Global persons · By faction',                    href: '#', ready: false },
      { id: 'database',  icon: '🗄',  name: 'DATABASE',  sub: 'Full index · PA-TERMINAL',                        href: '#', ready: false }
    ],
    comingSoon: 'COMING SOON',
    comingSoonMsg: 'This category is under v3 construction.\nWould you like to view the v2 version?'
  };

  window.TIU_EN.restricted = {
    eyebrow: 'PA // RESTRICTED ENTRIES',
    title: 'RESTRICTED',
    desc: 'The following entries are not accessible at standard clearance.',
    cards: [
      {
        id: 'kr',
        icon: '🔒',
        flag: '🇰🇷',
        name: 'KOREAN BRANCH',
        code: 'BRANCH KR-INIT-001',
        sub: 'RESTRICTED · VERIFY',
        action: 'VERIFY',
        type: 'verify',
        url: '../tiu-v2-complete/kr-branch.html'
      },
      {
        id: 'inland',
        icon: '🔒',
        flag: '🌍',
        name: 'UNREGISTERED INLAND',
        code: 'UNREGISTERED INLAND',
        sub: 'Unattributed zone',
        action: 'ACCESS DENIED',
        type: 'locked',
        msg: '> [REDACTED] :: This zone is not assigned a public coordinate.'
      },
      {
        id: 'observer',
        icon: '🔒',
        flag: '👁',
        name: 'OBSERVATION-CLASS',
        code: 'OBSERVATION-CLASS LOG',
        sub: 'Restricted log · Corrupted',
        action: 'ACCESS DENIED',
        type: 'locked',
        msg: '> [REDACTED] :: This system is not directly queryable from PA-TERMINAL.'
      }
    ]
  };

  window.TIU_EN.statusWall = {
    eyebrow: 'PA // WORLD STATUS',
    title: 'REAL-TIME METRICS',
    desc: 'Live observational data. Values auto-refresh from ORACLE sensor network.',
    cells: [
      { label: 'CONTAMINATION', target: 47.2,  suffix: '%',   trend: 'up',   variant: 'amber' },
      { label: 'ACTIVE ZONES',  target: 8,     suffix: '/12', trend: 'flat', variant: 'red' },
      { label: 'KOREA SHIELD',  target: 99.7,  suffix: '%',   trend: 'up',   variant: 'green' },
      { label: 'ORACLE',        target: 100,   suffix: '%',   trend: 'flat', variant: 'green' },
      { label: 'PROXY NODES',   target: 847,   suffix: '',    trend: 'flat', variant: 'green' },
      { label: 'THREAT LEVEL',  target: 'HIGH',suffix: '',    trend: 'up',   variant: 'red' }
    ]
  };

  window.TIU_EN.threatGrid = {
    eyebrow: 'PA // FACTION SUMMARY',
    title: 'FACTION ACTIVITY',
    desc: 'Current activity state of the four primary factions. Only observable actions recorded.',
    factions: [
      { id: 'observer',   name: 'ORACLE',     status: 'MONITORING', last: 'Live observation',             threat: 100, variant: 'obs',  logo: 'assets/img/logo-observer.webp' },
      { id: 'prometheus', name: 'PROMETHEUS', status: 'ACTIVE',     last: 'Intel operation (14:22)',      threat: 60,  variant: 'pro',  logo: 'assets/img/logo-prometheus.webp' },
      { id: 'shed',       name: 'SHED ORDER', status: 'EXPANDING',  last: 'Ashfall signal (14:18)',       threat: 85,  variant: 'shed', logo: 'assets/img/logo-shed.webp' },
      { id: 'tsw',        name: 'TS-Ω',       status: 'DORMANT',    last: 'Philadelphia silence (12:45)', threat: 95,  variant: 'tsw',  logo: 'assets/img/logo-tsw.webp' }
    ],
    labels: { status: 'STATUS', last: 'LAST ACTIVITY', threat: 'THREAT LEVEL' }
  };

  window.TIU_EN.activityFeed = {
    eyebrow: 'PA // LIVE FEED',
    title: 'RECENT ACTIVITY',
    desc: 'Live reception log from ORACLE sensor network.',
    events: [
      { time: '14:32:18', type: 'warn',   text: 'RED_VEIL: mut_rate += 0.03' },
      { time: '14:30:02', type: 'ok',     text: 'KR.shield: integrity 99.7%' },
      { time: '14:28:45', type: '',       text: 'ORACLE.recv(TS_OMEGA) → weak' },
      { time: '14:25:10', type: 'warn',   text: 'ZONE.silent_belt: spore_count++' },
      { time: '14:22:33', type: 'ok',     text: 'NET.proxy: 847 nodes online' },
      { time: '14:20:07', type: '',       text: 'System uptime: 14,227h' },
      { time: '14:17:52', type: 'danger', text: 'PROTOCOL: OBSERVER engaged' },
      { time: '14:15:21', type: 'warn',   text: 'ASHFALL signal detected' },
      { time: '14:12:08', type: '',       text: 'THREAT_MATRIX recalculated' },
      { time: '14:09:44', type: 'ok',     text: 'KR-INIT-001 sync: ACTIVE' }
    ]
  };

  window.TIU_EN.gnav = [
    { id: 'home',      icon: '🏠', label: 'MAIN',      href: 'main.html' },
    { id: 'factions',  icon: '⚡', label: 'FACTIONS',  href: '#' },
    { id: 'threats',   icon: '🧬', label: 'THREATS',   href: '#' },
    { id: 'records',   icon: '📡', label: 'RECORDS',   href: '#' },
    { id: 'incidents', icon: '📋', label: 'INCIDENTS', href: '#' },
    { id: 'specimens', icon: '🧪', label: 'SPECIMENS', href: '#' },
    { id: 'profiles',  icon: '👤', label: 'PROFILES',  href: '#' },
    { id: 'database',  icon: '🗄',  label: 'DATABASE',  href: '#' }
  ];
})();

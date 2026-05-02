/* TIU v3 — EN main page data (boot / command hero / categories / gnav) */
(function() {
  if (!window.TIU_EN) return;

  window.TIU_EN.boot = {
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
      { id: 'factions',  icon: '⚡', name: 'FACTIONS',  sub: '4 powers · Relations · Philosophies',          href: 'factions.html', ready: true },
      { id: 'threats',   icon: '🧬', name: 'THREATS',   sub: 'EV-Σ · Variants · Zones · Quarantine',         href: 'threats.html', ready: true },
      { id: 'records',   icon: '📡', name: 'RECORDS',   sub: 'Timeline · Missing entries · Signals',         href: 'records.html', ready: true },
      { id: 'incidents', icon: '📋', name: 'INCIDENTS', sub: 'First cases · Urban legends · Substories',     href: 'incidents.html', ready: true },
      { id: 'specimens', icon: '🧪', name: 'SPECIMENS', sub: 'Aberrants · SPEC catalog',                     href: 'specimens.html', ready: true },
      { id: 'profiles',  icon: '👤', name: 'PROFILES',  sub: 'Global persons · By faction',                  href: 'profiles.html', ready: true },
      { id: 'database',  icon: '🗄',  name: 'DATABASE',  sub: 'Full index · PA-TERMINAL',                     href: 'database.html', ready: true }
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
        id: 'core',
        icon: '🔒',
        flag: '👁',
        name: 'BLACK-LEVEL CORE',
        code: 'SEALED CORE LOG',
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
    desc: 'Public metrics. Values refresh from the PA-TERMINAL surface index.',
    cells: [
      { label: 'CONTAMINATION', target: 47.2,  suffix: '%',   trend: 'up',   variant: 'amber' },
      { label: 'ACTIVE ZONES',  target: 8,     suffix: '/12', trend: 'flat', variant: 'red' },
      { label: 'KOREA SHIELD',  target: 99.7,  suffix: '%',   trend: 'up',   variant: 'green' },
      { label: 'PA INDEX',      target: 100,   suffix: '%',   trend: 'flat', variant: 'green' },
      { label: 'PUBLIC NODES',  target: 847,   suffix: '',    trend: 'flat', variant: 'green' },
      { label: 'THREAT LEVEL',  target: 'HIGH',suffix: '',    trend: 'up',   variant: 'red' }
    ]
  };

  window.TIU_EN.threatGrid = {
    eyebrow: 'PA // FACTION SUMMARY',
    title: 'FACTION ACTIVITY',
    desc: 'Current activity state of key factions and aligned state systems. Only surface-indexed actions are recorded.',
    factions: [
      { id: 'core',       name: 'ORACLE CORE', status: 'RESTRICTED', last: 'Surface index limited', threat: 100, variant: 'obs', logo: 'assets/img/logo-oracle-core.webp' },
      { id: 'prometheus', name: 'PROMETHEUS', status: 'ACTIVE',     last: 'Intel operation (14:22)',      threat: 60,  variant: 'pro',  logo: 'assets/img/logo-prometheus.webp' },
      { id: 'shed',       name: 'SHED ORDER', status: 'EXPANDING',  last: 'Ashfall signal (14:18)',       threat: 85,  variant: 'shed', logo: 'assets/img/logo-shed.webp' },
      { id: 'tsw',        name: 'TS-Ω',       status: 'ADVANCING',  last: 'Philadelphia inland vector (12:45)', threat: 95,  variant: 'tsw',  logo: 'assets/img/logo-tsw.webp' }
    ],
    labels: { status: 'STATUS', last: 'LAST ACTIVITY', threat: 'THREAT LEVEL' }
  };

  window.TIU_EN.activityFeed = {
    eyebrow: 'PA // LIVE FEED',
    title: 'RECENT ACTIVITY',
    desc: 'Public reception log from PA-TERMINAL.',
    events: [
      { time: '14:32:18', type: 'warn',   text: 'RED_VEIL: mut_rate += 0.03' },
      { time: '14:30:02', type: 'ok',     text: 'KR.shield: integrity 99.7%' },
      { time: '14:28:45', type: 'warn',   text: 'PA.recv(TS_OMEGA) → inland_vector' },
      { time: '14:25:10', type: 'warn',   text: 'ZONE.silent_belt: spore_count++' },
      { time: '14:22:33', type: 'ok',     text: 'NET.archive: 847 nodes online' },
      { time: '14:20:07', type: '',       text: 'System uptime: 14,227h' },
      { time: '14:17:52', type: 'danger', text: 'PROTOCOL: CLASSIFIED engaged' },
      { time: '14:15:21', type: 'warn',   text: 'ASHFALL signal detected' },
      { time: '14:12:08', type: '',       text: 'THREAT_MATRIX recalculated' },
      { time: '14:09:44', type: 'ok',     text: 'KR-INIT-001 sync: ACTIVE' }
    ]
  };

  window.TIU_EN.gnav = [
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

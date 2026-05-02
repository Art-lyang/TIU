/* TIU v3 — JA main page data (boot / command hero / categories / gnav) */
(function() {
  if (!window.TIU_JA) return;

  window.TIU_JA.boot = {
    preTitle: 'PA ACCESS REQUESTED',
    title: 'PA-TERMINAL',
    subtitle: 'PUBLIC ARCHIVE SYSTEM',
    button: 'ARCHIVEを開く',
    footerOs: 'PA-TERMINAL v3.0',
    footerOsSub: 'STANDBY',
    footerChannel: 'SECURE CHANNEL',
    footerChannelSub: 'ENCRYPTED',
    terminalLines: [
      { text: '> PA-TERMINAL v3.0 — INITIALIZING...', cls: '' },
      { text: '  公開アーカイブシェルを読み込み中...', cls: 'dim' },
      { text: '  開示マトリクスを走査中...', cls: 'dim' },
      { text: '  [OK] EV-Σ公開インデックス同期完了', cls: 'ok' },
      { text: '  [OK] 支部ノード索引完了', cls: 'ok' },
      { text: '  [OK] Global view補正完了', cls: 'ok' },
      { text: '  一時資格情報を検証中...', cls: 'dim' },
      { text: '  [OK] PUBLIC ACCESS confirmed', cls: 'ok' },
      { text: '  アーカイブチャンネル確立中...', cls: 'dim' },
      { text: '> OPENING PA-TERMINAL...', cls: '' }
    ]
  };

  window.TIU_JA.commandHero = {
    eyebrow: 'PA // ARCHIVE TERMINAL',
    title: 'COMMAND CENTER',
    welcome: 'オペレーター。接続を確認しました。',
    sessionLabel: 'SESSION',
    grantLabel: 'GRANT',
    grantValue: 'ACTIVE — TEMPORARY ACCESS'
  };

  window.TIU_JA.categories = {
    eyebrow: 'PA // PUBLIC ARCHIVES',
    title: 'MAIN MENU',
    desc: '公開アーカイブは7つのカテゴリに整理されている。閲覧可能な記録を確認するには項目を選択せよ。',
    items: [
      { id: 'factions', icon: '⚡', name: 'FACTIONS', sub: '4大勢力 · 関係 · 哲学', href: 'factions.html', ready: true },
      { id: 'threats', icon: '⚠', name: 'THREATS', sub: 'EV-Σ · 変異体 · 区域 · 検疫', href: 'threats.html', ready: true },
      { id: 'records', icon: '▣', name: 'RECORDS', sub: '時系列 · 欠落項目 · 信号', href: 'records.html', ready: true },
      { id: 'incidents', icon: '◆', name: 'INCIDENTS', sub: '初期事例 · 都市伝説 · サブストーリー', href: 'incidents.html', ready: true },
      { id: 'specimens', icon: '◈', name: 'SPECIMENS', sub: 'Aberrants · SPEC catalog', href: 'specimens.html', ready: true },
      { id: 'profiles', icon: '◉', name: 'PROFILES', sub: '主要人物 · 勢力別', href: 'profiles.html', ready: true },
      { id: 'database', icon: '▤', name: 'DATABASE', sub: 'Full index · PA-TERMINAL', href: 'database.html', ready: true }
    ],
    comingSoon: 'COMING SOON',
    comingSoonMsg: 'このカテゴリはv3構築中です。\nv2版を表示しますか？'
  };

  window.TIU_JA.restricted = {
    eyebrow: 'PA // RESTRICTED ENTRIES',
    title: 'RESTRICTED',
    desc: '以下の項目は標準権限ではアクセスできない。',
    cards: [
      { id: 'kr', icon: '🔒', flag: '🇰🇷', name: 'KOREAN BRANCH', code: 'BRANCH KR-INIT-001', sub: 'RESTRICTED · VERIFY', action: 'VERIFY', type: 'verify', url: '../tiu-v2-complete/kr-branch.html' },
      { id: 'inland', icon: '🔒', flag: '∅', name: 'UNREGISTERED INLAND', code: 'UNREGISTERED INLAND', sub: '未帰属区域', action: 'ACCESS DENIED', type: 'locked', msg: '> [REDACTED] :: この区域には公開座標が割り当てられていない。' },
      { id: 'core', icon: '🔒', flag: '■', name: 'BLACK-LEVEL CORE', code: 'SEALED CORE LOG', sub: 'Restricted log · Corrupted', action: 'ACCESS DENIED', type: 'locked', msg: '> [REDACTED] :: このシステムはPA-TERMINALから直接照会できない。' }
    ]
  };

  window.TIU_JA.statusWall = {
    eyebrow: 'PA // WORLD STATUS',
    title: 'REAL-TIME METRICS',
    desc: '公開指標。値はPA-TERMINAL表層インデックスから更新される。',
    cells: [
      { label: 'CONTAMINATION', target: 47.2, suffix: '%', trend: 'up', variant: 'amber' },
      { label: 'ACTIVE ZONES', target: 8, suffix: '/12', trend: 'flat', variant: 'red' },
      { label: 'KOREA SHIELD', target: 99.7, suffix: '%', trend: 'up', variant: 'green' },
      { label: 'PA INDEX', target: 100, suffix: '%', trend: 'flat', variant: 'green' },
      { label: 'PUBLIC NODES', target: 847, suffix: '', trend: 'flat', variant: 'green' },
      { label: 'THREAT LEVEL', target: 'HIGH', suffix: '', trend: 'up', variant: 'red' }
    ]
  };

  window.TIU_JA.threatGrid = {
    eyebrow: 'PA // FACTION SUMMARY',
    title: 'FACTION ACTIVITY',
    desc: '主要勢力および関連国家体系の現在活動状態。表層インデックスに記録された行動のみ表示される。',
    factions: [
      { id: 'core', name: 'ORACLE CORE', status: 'RESTRICTED', last: 'Surface index limited', threat: 100, variant: 'obs', logo: 'assets/img/logo-oracle-core.webp' },
      { id: 'prometheus', name: 'PROMETHEUS', status: 'ACTIVE', last: '情報作戦（14:22）', threat: 60, variant: 'pro', logo: 'assets/img/logo-prometheus.webp' },
      { id: 'shed', name: 'SHED ORDER', status: 'EXPANDING', last: 'Ashfall信号（14:18）', threat: 85, variant: 'shed', logo: 'assets/img/logo-shed.webp' },
      { id: 'tsw', name: 'TS-Ω', status: 'ADVANCING', last: 'Philadelphia内陸ベクトル（12:45）', threat: 95, variant: 'tsw', logo: 'assets/img/logo-tsw.webp' }
    ],
    labels: { status: 'STATUS', last: 'LAST ACTIVITY', threat: 'THREAT LEVEL' }
  };

  window.TIU_JA.activityFeed = {
    eyebrow: 'PA // LIVE FEED',
    title: 'RECENT ACTIVITY',
    desc: 'PA-TERMINAL公開受信ログ。',
    events: [
      { time: '14:32:18', type: 'warn', text: 'RED_VEIL: mut_rate += 0.03' },
      { time: '14:30:02', type: 'ok', text: 'KR.shield: integrity 99.7%' },
      { time: '14:28:45', type: 'warn', text: 'PA.recv(TS_OMEGA) — inland_vector' },
      { time: '14:25:10', type: 'warn', text: 'ZONE.silent_belt: spore_count++' },
      { time: '14:22:33', type: 'ok', text: 'NET.archive: 847 nodes online' },
      { time: '14:20:07', type: '', text: 'System uptime: 14,227h' },
      { time: '14:17:52', type: 'danger', text: 'PROTOCOL: CLASSIFIED engaged' },
      { time: '14:15:21', type: 'warn', text: 'ASHFALL signal detected' },
      { time: '14:12:08', type: '', text: 'THREAT_MATRIX recalculated' },
      { time: '14:09:44', type: 'ok', text: 'KR-INIT-001 sync: ACTIVE' }
    ]
  };

  window.TIU_JA.gnav = [
    { id: 'home', icon: '⌂', label: 'MAIN', href: 'main.html' },
    { id: 'factions', icon: '⚡', label: 'FACTIONS', href: 'factions.html' },
    { id: 'threats', icon: '⚠', label: 'THREATS', href: 'threats.html' },
    { id: 'records', icon: '▣', label: 'RECORDS', href: 'records.html' },
    { id: 'incidents', icon: '◆', label: 'INCIDENTS', href: 'incidents.html' },
    { id: 'specimens', icon: '◈', label: 'SPECIMENS', href: 'specimens.html' },
    { id: 'profiles', icon: '◉', label: 'PROFILES', href: 'profiles.html' },
    { id: 'database', icon: '▤', label: 'DATABASE', href: 'database.html' }
  ];
})();

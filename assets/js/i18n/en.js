/* TIU v3 — ENGLISH TEXTS (global) */
window.TIU_EN = {
  meta: {
    title: 'TURTLE ISLE UNIVERSE',
    description: 'PA-TERMINAL — A multilayered worldbuilding project'
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
    tagline: 'This world runs deeper than you know.',
    scroll: 'SCROLL'
  },
  status: {
    eyebrow: 'PA // WORLD STATUS',
    cells: [
      { label: 'GLOBAL CONTAMINATION', target: 47.2, suffix: '%',     variant: 'amber' },
      { label: 'ACTIVE THREAT ZONES',  target: 8,    suffix: ' / 12', variant: 'red' },
      { label: 'KOREA CONTAINMENT',    target: 97.3, suffix: '%',     variant: 'green' },
      { label: 'KR SHIELD INTEGRITY',  target: 99.7, suffix: '%',     variant: 'white' }
    ]
  },

  timeline: {
    eyebrow: 'COLLAPSE TIMELINE',
    hint: '※ Click a year node to expand the record.',
    closeLabel: 'Close',
    events: [
      { year: '2020', title: 'GENESIS BREAK',     note: 'Containment lost',         detail: 'A TS-Ω-related experiment slips its leash. Through contact, incomplete EV-Σ evolves into its current full form. Early warnings were ignored. Every collapse that follows traces back to this moment.' },
      { year: '2022', title: 'PHILADELPHIA',      note: 'First city falls',          detail: 'TS-Ω hive surfaces in Philadelphia waters. The entire city is absorbed into a single hive; direct intervention becomes impossible. From this point on, killing equals spreading. The zone is permanently classified Z-Ω.' },
      { year: '2023', title: 'ASHFALL CITY',      note: 'Shed Order experiment',     detail: 'A city where Shed Order forced mutation acceleration. The result: buildings converted into living biomass. The experiment was logged as failed and the city sealed under Z-3 COLLAPSE. Shed Order then reduces visible exposure and intensifies surface infiltration.' },
      { year: '2024', title: 'FIRST CONTACT',     note: 'TS-Ω Core encountered',     detail: 'EXUVIA approaches the TS-Ω core, attempting combat, dialogue, and absorption simultaneously. EXUVIA absorbs EV-Σ and enters runaway evolution. TS-Ω stays utterly indifferent — its uncontainable status is confirmed. The same year, Meridian Group accidentally recovers Dormant spores.' },
      { year: '2025', title: 'BLACK DECLARATION', note: 'Prometheus declares autonomy', detail: 'Prometheus severs informal cooperation and declares an autonomous line. The same year EU-JBDF is hastily founded; Japan abandons Okinawa\'s main island on the Ryukyu front. Prometheus is treated as hostile — yet 31% of Korea\'s containment rate came from their unofficial support.' },
      { year: '2026', title: 'NOW',               note: 'KR branch commander posted', detail: 'Lee Jung-chul takes office as the first commander of KR-INIT-001. This moment is the canon\'s starting point; some If-routes are disclosed only as limited simulation records. The world\'s next branch — has not yet been written.' }
    ]
  },

  map: {
    eyebrow: 'PA // GLOBAL VIEW',
    title: 'GLOBAL THREAT MAP',
    desc: 'Eight points disclosed by the Public Archive. Ratings reflect the PA-TERMINAL surface index; unindexed coordinates are omitted. Click a hotspot to view the incident region and country tag.',
    legend: [
      { label: 'Z-Ω ANOMALOUS', color: 'purple' },
      { label: 'Z-3 COLLAPSE',  color: 'red' },
      { label: 'Z-2 DANGER',    color: 'amber' },
      { label: 'CONTAINED',     color: 'green' },
      { label: 'DATA VOID',     color: 'muted' }
    ],
    dossierLabel: 'TACTICAL DOSSIER',
    selectHint: 'Select a hotspot to view details',
    zones: {
      philadelphia: { title: 'PHILADELPHIA ZONE',   country: 'USA',    status: 'Z-Ω ANOMALOUS', tone: 'purple', desc: 'Fell in 2022. After the harbor hive surfaced, the entire city was absorbed into a single TS-Ω hive. The hive influence is now advancing inland.', threat: 'TS-Ω / Marine Hive',   response: 'Monitor · Avoid', img: 'assets/img/philadelphia-drone.webp' },
      ashfall:      { title: 'ASHFALL CITY',        country: 'USA',    status: 'Z-3 COLLAPSE',  tone: 'red',    desc: '2023 Shed Order mutation-acceleration experiment, failed. Buildings converted into biomass. US forces are expanding the outer survival belt by 40%.',  threat: 'Brood Core / Infected', response: 'Contain · Recover', img: 'assets/img/ashfall-city.webp' },
      silentbelt:   { title: 'SILENT BELT',         country: 'RUSSIA', status: 'Z-2 DANGER',    tone: 'amber',  desc: 'Wide silent zone spanning Russia. Acoustic damping from Seed Spreader diffusion. The perimeter advances 1.2 km per month.', threat: 'Wide Spore Diffusion',  response: 'Burn · Monitor', img: 'assets/img/silent-belt.webp' },
      redveil:      { title: 'RED VEIL REGION',     country: 'CHINA',  status: 'Z-2 DANGER',    tone: 'red',    desc: 'Chinese urban-density blockade line. Interior control effectively lost; only the outer wall holds. Cumulative containment cost: 166.5 billion yuan.', threat: 'Mixed Entities',        response: 'Task Force · Isolate', img: 'assets/img/red-veil.webp' },
      korea:        { title: 'KOREA CONTROLLED',    country: 'KOREA',  status: 'CONTAINMENT',    tone: 'green',  desc: 'The only fully contained region in the world. White Shield holds a precision blockade. Public prediction models cannot explain this outcome.',  threat: 'Sporadic Mutation',     response: 'Detect Early · Select Isolation', img: 'assets/img/korea-barrier.webp' },
      japan:        { title: 'JAPAN DEFENSE LINE',  country: 'JAPAN',  status: 'Z-1 CAUTIONARY', tone: 'amber',  desc: 'Sept~Dec 2025: lost Ishigaki, Miyako, Okinawa main island, Amami, Tokara, parts of Ogasawara. Ryukyu reclamation underway. Zero domestic infections.',              threat: 'Marine Mutation',       response: 'Naval · Island Recovery' },
      unregisteredInland: { title: 'UNREGISTERED INLAND', status: 'DATA VOID', tone: 'muted', desc: 'An inland sector with no coordinate assigned in the PA-TERMINAL public index. The cause of the index blank is not stated in surface records.', threat: 'Unknown', response: 'No Public Response' },
      antarctic:    { title: 'ANTARCTIC GATE',      status: 'Z-Ω ANOMALOUS', tone: 'purple', desc: 'A perfect circular structure. Depth is immeasurable. Some records describe it as a gate to a subterranean civilization layer (L3) — the official interpretation is held in reserve.', threat: 'Spatial Distortion',    response: 'Satellite Monitor · No Entry' }
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
    hint: 'Records the Public Archive has disclosed to you.'
  },

  pitch: {
    eyebrow: 'SITUATION REPORT // 2026',
    title: 'THE WORLD IS FALLING',
    body: '<strong>The world is falling.</strong> Philadelphia fell in 2022. Ashfall was sealed in 2023. The Ryukyus lost half their islands last year. Only Korea holds at <strong class="t-green">97.3%</strong>.',
    subbody: 'The number has — no explanation.'
  },
  threat: {
    eyebrow: 'THREAT BRIEFING',
    title: 'EV-Σ — THE ACCELERANT',
    quote: '"This is not an infection. The speed of evolution has broken."',
    body: 'The evolutionary accelerant <strong class="t-red">EV-Σ</strong> is dismantling the world. Most nations are struggling to hold their lines. Killing meant spreading. Cities went silent, one by one. The order humanity knew — has ended.',
    archiveLabel: 'EV-Σ SPREAD ARCHIVE',
    archive: [
      {
        img:   'assets/img/philadelphia-drone.webp',
        code:  'Z-Ω // PHILADELPHIA',
        title: 'THE FIRST FALL (2022)',
        note:  'Hive surfaced from the harbor. Entire city absorbed. Direct intervention sealed off.'
      },
      {
        img:   'assets/img/ashfall-city.webp',
        code:  'Z-3 // ASHFALL CITY',
        title: 'HIVE TESTBED (2023)',
        note:  'Shed Order\'s mutation acceleration. Buildings transformed into biomass — logged as failure.'
      },
      {
        img:   'assets/img/silent-belt.webp',
        code:  'Z-2 // SILENT BELT',
        title: 'SPORE CONTINENT',
        note:  'Wide silent zone formed by Seed Spreader diffusion. Expands 1.2 km per month.'
      },
      {
        img:   'assets/img/red-veil.webp',
        code:  'Z-2 // RED VEIL',
        title: 'THE CHINESE LINE',
        note:  'Dense infection at military blockade level. Interior lost; only the outer wall holds.'
      }
    ]
  },
  world: {
    eyebrow: 'WORLD STRUCTURE',
    title: '4-LAYER CIVILIZATION',
    desc: 'From the surface downward, each layer reveals what the one above concealed: hidden powers, subterranean civilizations, and a core beyond the surface index.',
    layers: [
      { code: 'L1 — SURFACE',        desc: 'The visible world. The human stage.' },
      { code: 'L2 — PROXY NETWORK',  desc: '847 nodes of concealed power infrastructure.' },
      { code: 'L3 — SUBTERRANEAN',   desc: 'Underground reptilian civilization. Two species in conflict.' },
      { code: 'L4 — ORACLE CORE',    desc: 'A deep classification core surfaced only as “core” in the public index. Its origin and acting subject are not disclosed.' }
    ]
  },
  factions: {
    eyebrow: 'FACTIONS',
    title: 'POWERS IN CONFLICT',
    desc: 'The public archive compresses the conflict into four major axes. Beneath them, national systems, unofficial cells, private brokers, and religious fragments move through the same pressure field.',
    primary: [
      { name: 'ORACLE CORE', meta: 'L4 / CODE REQUIRED', tagline: 'Classifies. Predicts. Withholds.', detail: 'A deep classification core surfaced only as core in the public index. Direct access is restricted.', access: 'BLACK-LEVEL', variant: 'obs',  logo: 'assets/img/logo-oracle-core.webp' },
      { name: 'PROMETHEUS',  meta: 'HUMAN BLACK OPS', tagline: 'Preserves uncontrolled choice.', detail: 'A nonofficial network influencing barrier technology and intel operations. A shadow behind Korea’s unexplained 31%.', access: 'HINT', variant: 'pro',  logo: 'assets/img/logo-prometheus.webp' },
      { name: 'SHED ORDER',  meta: 'MUTATION CULT', tagline: 'Beyond the shell, the next evolution waits.', detail: 'Treats infection as evolution rather than disaster. Surface activity drops after the Ashfall record.', access: 'PUBLIC / HINT', variant: 'shed', logo: 'assets/img/logo-shed.webp' },
      { name: 'TS-Ω',        meta: 'Z-Ω / PHILADELPHIA', tagline: 'Not intelligence. Instinct.', detail: 'The hive axis surfaced from Philadelphia waters. Its influence is now advancing inland.', access: 'PUBLIC THREAT', variant: 'tsw',  logo: 'assets/img/logo-tsw.webp' }
    ],
    irregularLabel: 'HUMAN / STATE / GRAY-ZONE NETWORKS',
    irregular: [
      { name: 'Silent Wolves',    meta: 'MERCENARY CELL', tagline: 'They do not fear infection. They weaponize it.', detail: 'A gray-zone armed and intelligence network tied to Russian frontier routes.', access: 'HINT', img: 'assets/img/silent-wolves-raid.webp' },
      { name: 'Ascension Choir',  meta: 'RELIGIOUS EXTREMES', tagline: 'Infection is a blessing, not a curse.', detail: 'Religious interpretations and infection-worship fragments born after the collapse.', access: 'PUBLIC / HINT', img: 'assets/img/choir-worship.webp' },
      { name: 'Meridian Group',   meta: 'PRIVATE ENTERPRISE', tagline: 'Morality does not appear on the demand curve.', detail: 'A corporate front that turns logistics, medicine, and insurance into crisis markets.', access: 'PUBLIC FRONT', img: 'assets/img/meridian-richter.webp' },
      { name: 'Ember Corps',      meta: 'SURVIVOR MILITIA', tagline: 'The 34% who returned. They chose revenge.', detail: 'A retaliation network formed by Ashfall returnees and survivors.', access: 'HINT', img: 'assets/img/ember-ash.webp' }
    ]
  },
  korea: {
    eyebrow: 'EXCEPTION VARIABLE',
    title: 'THE LAST BARRIER',
    stat: '97.3%',
    statLabel: 'CONTAINMENT SUCCESS RATE',
    text: 'Every predictive model forecasted collapse.<br>Only this region survived. Barriers, military systems, sealed records, and unofficial cooperation networks overlap inside one state.',
    archiveHint: 'The Korean archive mixes public records with locked entries. Codes earned through the world documents or the card game can open selected restricted files.',
    nodes: [
      { code: 'KR-INIT-001', name: 'KOREAN BRANCH', access: 'CODE REQUIRED', tone: 'green', text: 'The canon entry point. After Lee Jung-chul takes command, public and restricted records begin to diverge.' },
      { code: '0-DIV', name: '0 DIVISION', access: 'RESTRICTED', tone: 'amber', text: 'A Korean internal special unit that handles mismatches between documents and field reality. Some files never surface.' },
      { code: 'DG', name: 'DG', access: 'HINT', tone: 'green', text: 'A deep response line prioritizing national survival functions. Tied to barriers, quarantine, and sealed records.' },
      { code: 'SDA', name: 'SPECIAL DISASTER LINE', access: 'PUBLIC / HINT', tone: 'amber', text: 'The surface-facing disaster apparatus: checkpoints, evacuation orders, and selective quarantine.' },
      { code: 'WHITE SHIELD', name: 'White Shield', access: 'PUBLIC', tone: 'green', text: 'ROK military EV-Σ response system. The public metric attached to the world’s only 97.3% containment.' },
      { code: 'COASTAL MIRROR', name: 'COASTAL MIRROR', access: 'HINT', tone: 'red', text: 'A trace of coastal barrier technology and nonofficial cooperation. The public report does not explain this name.' }
    ],
    systemNote: '"This region should have failed. Outcome does not match model."',
    systemLabel: 'PA // SYSTEM NOTE'
  },
  mystery: {
    eyebrow: 'UNEXPLAINED OUTCOME',
    title: 'WHY?',
    items: [
      { code: 'ANOMALY #001', quote: '"This region should have failed. Outcome does not match model." — sealed prediction report' },
      { code: 'ANOMALY #002', quote: 'Logs exist that PA-TERMINAL does not surface. The public terminal cannot query them directly.' },
      { code: 'ANOMALY #003', quote: 'Of Korea\'s 97.3% — 31% came from hands nobody logged. The surface report does not answer.' }
    ],
    hint: 'The truth lies beyond the PA-TERMINAL index. If you can find it.'
  },
  cta: {
    code: 'PA-TERMINAL PUBLIC ARCHIVE',
    title: 'OPEN THE ARCHIVE',
    desc: 'Disclosable records are available through this terminal.<br>Factions, threats, incidents, people — everything the surface index allows is here.',
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

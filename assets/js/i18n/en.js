/* TIU v3 — ENGLISH TEXTS (global) */
window.TIU_EN = {
  meta: {
    title: 'TURTLE ISLE UNIVERSE',
    description: 'ORACLE Intelligence System — A multilayered worldbuilding project'
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
      { year: '2020', title: 'GENESIS BREAK',     note: 'Containment lost',         detail: 'TS-Ω experiment slips its leash. Through contact with TS-Ω, the incomplete EV-Σ evolves into its current full form. The Turtle faction\'s warnings were ignored. Every collapse that follows traces back to this moment.' },
      { year: '2022', title: 'PHILADELPHIA',      note: 'First city falls',          detail: 'TS-Ω hive surfaces in Philadelphia waters. The entire city is absorbed into a single hive; direct intervention becomes impossible. From this point on, killing equals spreading. ORACLE classifies the zone as Z-Ω in perpetuity.' },
      { year: '2023', title: 'ASHFALL CITY',      note: 'Shed Order experiment',     detail: 'A city where Shed Order forced mutation acceleration. The result: buildings converted into living biomass. The experiment was logged as failed and the city sealed under Z-3 COLLAPSE. Shed Order then reduces visible exposure and intensifies surface infiltration.' },
      { year: '2024', title: 'FIRST CONTACT',     note: 'TS-Ω Core encountered',     detail: 'EXUVIA approaches the TS-Ω core, attempting combat, dialogue, and absorption simultaneously. EXUVIA absorbs EV-Σ and enters runaway evolution. TS-Ω stays utterly indifferent — its uncontainable status is confirmed. The same year, Meridian Group accidentally recovers Dormant spores.' },
      { year: '2025', title: 'BLACK DECLARATION', note: 'Prometheus declares autonomy', detail: 'Prometheus severs its informal cooperation with ORACLE and declares an autonomous line. The same year EU-JBDF is hastily founded; Japan abandons Okinawa\'s main island on the Ryukyu front. ORACLE reclassifies Prometheus as hostile — yet 31% of Korea\'s containment rate came from their unofficial support.' },
      { year: '2026', title: 'NOW',               note: 'KR branch commander posted', detail: 'Lee Jung-chul takes office as the first commander of ORACLE Proxy Network branch KR-INIT-001. This moment is the canon\'s starting point; every If-route is a simulation under GRANT authority. The world\'s next branch — has not yet been written.' }
    ]
  },

  map: {
    eyebrow: 'PA // GLOBAL VIEW',
    title: 'GLOBAL THREAT MAP',
    desc: 'Eight observation points disclosed by the Public Archive. Ratings reflect the PA-TERMINAL surface index; unindexed coordinates are omitted. Click a hotspot to view details.',
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
      philadelphia: { title: 'PHILADELPHIA ZONE',   status: 'Z-Ω ANOMALOUS', tone: 'purple', desc: 'Fell in 2022. After the harbor hive surfaced, the entire city was absorbed into a single TS-Ω hive. Killing equals spreading — direct intervention is sealed off.', threat: 'TS-Ω / Marine Hive',   response: 'Observe · Avoid', img: 'assets/img/philadelphia-drone.webp' },
      ashfall:      { title: 'ASHFALL CITY',        status: 'Z-3 COLLAPSE',  tone: 'red',    desc: '2023 Shed Order mutation-acceleration experiment, failed. Buildings converted into biomass. US forces are expanding the outer survival belt by 40%.',  threat: 'Brood Core / Infected', response: 'Contain · Recover', img: 'assets/img/ashfall-city.webp' },
      silentbelt:   { title: 'SILENT BELT',         status: 'Z-2 DANGER',    tone: 'amber',  desc: 'Wide silent zone spanning Russia. Acoustic damping from Seed Spreader diffusion. The perimeter advances 1.2 km per month.', threat: 'Wide Spore Diffusion',  response: 'Burn · Monitor', img: 'assets/img/silent-belt.webp' },
      redveil:      { title: 'RED VEIL REGION',     status: 'Z-2 DANGER',    tone: 'red',    desc: 'Chinese urban-density blockade line. Interior control effectively lost; only the outer wall holds. Cumulative containment cost: 166.5 billion yuan.', threat: 'Mixed Entities',        response: 'Task Force · Isolate', img: 'assets/img/red-veil.webp' },
      korea:        { title: 'KOREA CONTROLLED',    status: 'CONTAINMENT',    tone: 'green',  desc: 'The only fully contained region in the world. White Shield holds a precision blockade. ORACLE\'s model failed to predict this outcome.',  threat: 'Sporadic Mutation',     response: 'Detect Early · Select Isolation', img: 'assets/img/korea-barrier.webp' },
      japan:        { title: 'JAPAN DEFENSE LINE',  status: 'Z-1 CAUTIONARY', tone: 'amber',  desc: 'Sept~Dec 2025: lost Ishigaki, Miyako, Okinawa main island, Amami, Tokara, parts of Ogasawara. Ryukyu reclamation underway. Zero domestic infections.',              threat: 'Marine Mutation',       response: 'Naval · Island Recovery' },
      sovari:       { title: 'UNREGISTERED INLAND', status: 'DATA VOID',     tone: 'muted',  desc: 'An inland sector with no coordinate assigned in the PA-TERMINAL public index. The cause of the observation blank is not stated in surface records.',                threat: 'Unknown',               response: 'Observation Impossible' },
      antarctic:    { title: 'ANTARCTIC GATE',      status: 'Z-Ω ANOMALOUS', tone: 'purple', desc: 'A perfect circular structure. Depth is immeasurable. Some records describe it as a gate to a subterranean civilization layer (L3) — the official interpretation is held in reserve.', threat: 'Spatial Distortion',    response: 'Satellite Monitor · No Entry' }
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
    desc: 'From the surface downward — each layer reveals what the one above concealed. Hidden powers, subterranean civilizations, and the core from which all observation originates.',
    layers: [
      { code: 'L1 — SURFACE',        desc: 'The visible world. The human stage.' },
      { code: 'L2 — PROXY NETWORK',  desc: '847 nodes of concealed power infrastructure.' },
      { code: 'L3 — SUBTERRANEAN',   desc: 'Underground reptilian civilization. Two species in conflict.' },
      { code: 'L4 — ORACLE CORE',    desc: 'ORACLE main core. Where all observation data converges.' }
    ]
  },
  factions: {
    eyebrow: 'FACTIONS',
    title: 'POWERS IN CONFLICT',
    desc: 'Four primary factions clash across this world. Four irregular human groups survive in the cracks between them.',
    primary: [
      { name: 'ORACLE',      tagline: 'Observes. Records. Predicts.',              variant: 'obs',  logo: 'assets/img/logo-observer.webp' },
      { name: 'PROMETHEUS',  tagline: 'Preserves uncontrolled choice.',            variant: 'pro',  logo: 'assets/img/logo-prometheus.webp' },
      { name: 'SHED ORDER',  tagline: 'Beyond the shell, the next evolution waits.', variant: 'shed', logo: 'assets/img/logo-shed.webp' },
      { name: 'TS-Ω',        tagline: 'Not intelligence. Instinct.',               variant: 'tsw',  logo: 'assets/img/logo-tsw.webp' }
    ],
    irregularLabel: 'IRREGULAR HUMAN FACTIONS',
    irregular: [
      { name: 'Silent Wolves',    tagline: 'They do not fear infection. They weaponize it.',  img: 'assets/img/silent-wolves-raid.webp' },
      { name: 'Ascension Choir',  tagline: 'Infection is a blessing, not a curse.',           img: 'assets/img/choir-worship.webp' },
      { name: 'Meridian Group',   tagline: 'Morality does not appear on the demand curve.',   img: 'assets/img/meridian-richter.webp' },
      { name: 'Ember Corps',      tagline: 'The 34% who returned. They chose revenge.',       img: 'assets/img/ember-ash.webp' }
    ]
  },
  korea: {
    eyebrow: 'EXCEPTION VARIABLE',
    title: 'THE LAST BARRIER',
    stat: '97.3%',
    statLabel: 'CONTAINMENT SUCCESS RATE',
    text: 'Every predictive model forecasted collapse.<br>Only this region survived. The reason — unknown.',
    oracleNote: '"This region should have failed. Outcome does not match model."',
    oracleLabel: '// SYSTEM NOTE'
  },
  mystery: {
    eyebrow: 'UNEXPLAINED OUTCOME',
    title: 'WHY?',
    items: [
      { code: 'ANOMALY #001', quote: '"This region should have failed. Outcome does not match model." — ORACLE self-evaluation' },
      { code: 'ANOMALY #002', quote: 'Logs exist that PA-TERMINAL does not surface. The system itself cannot query them directly.' },
      { code: 'ANOMALY #003', quote: 'Of Korea\'s 97.3% — 31% came from hands nobody logged. The surface report does not answer.' }
    ],
    hint: 'The truth lies beyond the PA-TERMINAL index. If you can find it.'
  },
  cta: {
    code: 'ORACLE INTELLIGENCE SYSTEM',
    title: 'CONNECT TO ORACLE',
    desc: 'ORACLE observes and records everything in this world.<br>Factions, threats, incidents, people — all that you need to know is here.',
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

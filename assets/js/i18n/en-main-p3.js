/* TIU v3 — EN main Phase 3 data */
(function() {
  if (!window.TIU_EN) return;

  window.TIU_EN.situation = {
    eyebrow: 'PA // SITUATION REPORT',
    title: 'CURRENT WORLD STATE',
    desc: 'The current flow of the world. Summarized in three acts of collapse and stalemate.',
    acts: [
      { num: 'I',   state: 'PAST',    period: '2020 — 2023', label: 'THE COLLAPSE',  body: 'Worldwide breakdown began with Philadelphia\'s fall. EV-Σ shattered most nations\' containment. Killing meant spreading. Cities went silent, one by one.', variant: 'red' },
      { num: 'II',  state: 'PAST',    period: '2024 — 2025', label: 'THE PARTITION', body: 'Nations improvised survival. US ARES · China Red Dragon · Russia Permafrost · Japan JSDF · EU-JBDF. Only Korea held 97.3% containment.', variant: 'amber' },
      { num: 'III', state: 'PRESENT', period: '2026 — NOW',  label: 'THE STALEMATE', body: 'Now. Major factions and state apparatuses move inside a tense silence. TS-Ω is advancing inland from Philadelphia. Shed Order is expanding; Prometheus continues intel operations. Black-level records remain sealed — and in the Korean branch, something has occurred.', variant: 'green' }
    ],
    footnote: 'NEXT ARC — UNWRITTEN'
  };

  window.TIU_EN.philosophy = {
    quote: 'If what you believe to be free will is designed,\ndoes choice still hold meaning?',
    cite: 'PA-TERMINAL FRAGMENT // UNSIGNED'
  };

  window.TIU_EN.queryTerminal = {
    eyebrow: 'ARCHIVE // QUERY',
    title: 'SEARCH ARCHIVE',
    placeholder: 'Search terms, people, zones, incidents...',
    suggestLabel: 'SUGGESTED QUERIES',
    suggestions: ['EV-Σ', 'Philadelphia', 'Pilehead', 'COASTAL MIRROR', 'KR-INIT-001', 'Unregistered Inland', 'Shed Order'],
    submit: '> EXECUTE',
    offlineMsg: 'QUERY PROCESSOR OFFLINE — DATABASE v3 MIGRATION IN PROGRESS'
  };

  window.TIU_EN.krClassified = {
    eyebrow: 'CLASSIFIED // LEVEL-OMEGA',
    title: 'BRANCH KR-INIT-001',
    desc: 'Restricted branch record connected to KR-INIT-001. Access limited. This sector does not appear in the PA-TERMINAL surface index.',
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

  window.TIU_EN.phaseDiagram = {
    eyebrow: 'ARCHIVE // EV-Σ ANALYSIS',
    title: 'EVOLUTION PHASES',
    desc: 'Four progression stages of infection. Removable only at Phase 0.',
    phases: [
      { num: '0', name: 'DORMANT',   type: 'LATENT',     window: '24~72h', note: 'Prion form. No external signs. Blood test only.',         variant: 'green'  },
      { num: '1', name: 'SURFACE',   type: 'MUTATION',   window: 'FIXED',  note: 'Mannequin form. Physical shifts begin. Social passable.', variant: 'amber'  },
      { num: '2', name: 'STRUCTURE', type: 'DEFORM',     window: 'SPREAD', note: 'Calcification. Body restructure. Fission + spores.',     variant: 'red'    },
      { num: '3', name: 'TERMINAL',  type: 'COMPLETE',   window: 'FINAL',  note: 'HeLa form. Hive assimilation. Cognition lost.',          variant: 'purple' }
    ],
    windowLabel: 'WINDOW',
    criticalNote: 'CRITICAL: Only Phase 0 (24~72h) is reversible. Afterward, irreversible.'
  };

  window.TIU_EN.intel = {
    eyebrow: 'PA // FEATURED INTEL',
    title: 'LATEST SIGNALS',
    desc: 'Curated signals from the surface index. Updated: real-time.',
    items: [
      { code: 'INTEL #001', title: 'MODEL DEVIATION',       text: '"This region should have failed. Outcome does not match model."',          source: 'SEALED AUTO-LOG',  tone: 'red',   img: 'assets/img/korea-barrier.webp' },
      { code: 'INTEL #002', title: 'SELF-INACCESSIBLE',     text: '"There are logs the surface terminal cannot access."',                     source: 'INTERNAL ALERT',  tone: 'amber', img: 'assets/img/philadelphia-drone.webp' },
      { code: 'INTEL #003', title: 'UNLOGGED CONTRIBUTORS', text: '"Of Korea\'s 97.3% — 31% came from hands nobody logged."',                   source: 'FIELD ANALYSIS',  tone: 'green', img: 'assets/img/meridian-richter.webp' }
    ]
  };

  window.TIU_EN.publicDossier = {
    eyebrow: 'PA // SURFACE DOSSIER',
    title: 'PUBLIC DOSSIER LAYER',
    desc: 'A public-facing index of how the world operates without exposing sealed cores: national responses, civilian systems, gray markets, public SPEC samples, and surface incident records.',
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
        text: 'Korea exposes the archive density through walls, checkpoints, medical records, family reporting, and civil-rights conflicts around infection history.',
        variant: 'green',
        meta: [
          { k: 'VISIBLE', v: 'walls, wards, checkpoints, permits' },
          { k: 'CONFLICT', v: 'safety records versus civil rights' },
          { k: 'LINK', v: 'KR-INIT-001 surface record only' }
        ]
      },
      {
        code: 'GLOBAL CIVIL',
        title: 'NATION RESPONSES',
        text: 'The U.S. routes danger through insurance and cordons; Japan through manuals and ghost stories; China through censorship and voice relays; the EU through borders and rights cases; Australia through coordinate apps and outback control.',
        variant: 'amber',
        meta: [
          { k: 'VISIBLE', v: 'civilian life and state response' },
          { k: 'SCOPE', v: 'U.S. / Japan / China / Russia / EU / Australia' },
          { k: 'LIMIT', v: 'sealed inland and ancient truth excluded' }
        ]
      },
      {
        code: 'SPEC / PUBLIC SAMPLE',
        title: 'ABERRANT CATALOG',
        text: 'Samples such as SPEC-001, 003, 008, 011, and 012 expose appearance, response posture, and civilian impact only. Origins and full lineage remain sealed.',
        variant: 'red',
        meta: [
          { k: 'VISIBLE', v: 'identifier, impact, handling note' },
          { k: 'RISK', v: 'voice mimicry, spores, pollution' },
          { k: 'SEALED', v: 'cause and upper lineage' }
        ]
      },
      {
        code: 'GRAY ECONOMY',
        title: 'MARKETS AND BROKERS',
        text: 'Quarantine brokers, salvage trade, forged permits, insurance codes, and medical shortages extend the world beyond battlefields into the cost of survival.',
        variant: 'amber',
        meta: [
          { k: 'VISIBLE', v: 'Meridian surface trade / Silent Wolves traces' },
          { k: 'CONFLICT', v: 'survival cost versus ethics' },
          { k: 'LIMIT', v: 'top structure and route details excluded' }
        ]
      },
      {
        code: 'INCIDENT LINE',
        title: 'PHILADELPHIA / ASHFALL',
        text: 'Philadelphia-line incidents and post-Ashfall signals show that the global balance is not finished. TS-Ω is public-indexed only as an inland-advancing vector.',
        variant: 'red',
        meta: [
          { k: 'VISIBLE', v: 'inland vector, cordon, surface signal' },
          { k: 'STATUS', v: 'active hostile vector' },
          { k: 'SEALED', v: 'origin, upper link, black logs' }
        ]
      },
      {
        code: 'PLAYABLE ENTRY',
        title: 'START ROUTES',
        text: 'Players can enter as organizational personnel, researchers, field staff, gray-zone informants, or civilians. Choices accumulate as reports and IF records.',
        variant: 'green',
        meta: [
          { k: 'VISIBLE', v: 'affiliation, first case, free input' },
          { k: 'OUTPUT', v: 'session report / IF record / canon candidate' },
          { k: 'LIMIT', v: 'sealed truth blocked before clearance' }
        ]
      }
    ],
    relationTitle: 'RELATION LAYER',
    relationNote: 'Only public-safe relations are summarized: hostility, unstable cooperation, gray trade, and civilian harm flows. Black-level causes are excluded.',
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
      { code: 'KR-CIVIL-REG-012', title: 'Quarantine ward visitation limit', text: 'A family-reporting obligation collides with infection-history rights.', level: 'PUBLIC', variant: 'default' },
      { code: 'US-INS-LOCK-044', title: 'Insurance code pre-lock', text: 'A risk code updates before any official public announcement.', level: 'PUBLIC', variant: 'default' },
      { code: 'JP-MANUAL-REV-19', title: 'Disaster manual revision', text: 'A rumor-class incident is absorbed into formal procedure.', level: 'PUBLIC', variant: 'default' },
      { code: 'CN-VOICE-RELAY-07', title: 'Voice left after deletion', text: 'A local report survives censorship as an audio relay chain.', level: 'HINT', variant: 'default' },
      { code: 'EU-BORDER-CASE-31', title: 'Border gate family-status case', text: 'Legal family status conflicts with quarantine risk classification.', level: 'PUBLIC', variant: 'default' },
      { code: 'PHL-INLAND-LINE', title: 'Philadelphia inland vector', text: 'Only TS-Ω movement state is public. Origin and black logs are sealed.', level: 'SEALED', variant: 'sealed' }
    ]
  };

  window.TIU_EN.footer = {
    copyright: '© 2026 TURTLE ISLE UNIVERSE',
    archivist: 'ARCHIVIST // ABOUT THIS PROJECT →'
  };
})();

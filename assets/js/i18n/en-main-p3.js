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
      { num: 'III', state: 'PRESENT', period: '2026 — NOW',  label: 'THE STALEMATE', body: 'Now. The four powers move within silence. TS-Ω dormant. Shed Order expanding. Prometheus running intel ops. ORACLE observing — and in the Korean branch, something has occurred.', variant: 'green' }
    ],
    footnote: 'NEXT ARC — UNWRITTEN'
  };

  window.TIU_EN.philosophy = {
    quote: 'If what you believe to be free will is designed,\ndoes choice still hold meaning?',
    cite: 'ORACLE META-LOG // UNSIGNED'
  };

  window.TIU_EN.queryTerminal = {
    eyebrow: 'ARCHIVE // QUERY',
    title: 'SEARCH ORACLE',
    placeholder: 'Search terms, people, zones, incidents...',
    suggestLabel: 'SUGGESTED QUERIES',
    suggestions: ['EV-Σ', 'Philadelphia', 'Pilehead', 'COASTAL MIRROR', 'GRANT', 'Karuntal', 'Shed Order'],
    submit: '> EXECUTE',
    offlineMsg: 'QUERY PROCESSOR OFFLINE — DATABASE v3 MIGRATION IN PROGRESS'
  };

  window.TIU_EN.krClassified = {
    eyebrow: 'CLASSIFIED // LEVEL-OMEGA',
    title: 'BRANCH KR-INIT-001',
    desc: 'ORACLE Proxy Network Korean branch. Restricted access. This sector does not appear in ORACLE\'s surface index.',
    redacted: '████████ ████ ██████████ ████ ████ ████████',
    codeLabel: 'ACCESS CODE',
    codePlaceholder: 'Enter code...',
    submit: 'VERIFY',
    hint: 'HINT: OBSERVATION ____________',
    denyMsg: 'ACCESS DENIED — INVALID CODE',
    successMsg: 'GRANT: VERIFIED — REDIRECTING...',
    v2Url: '../tiu-v2-complete/kr-branch.html',
    validCode: 'OBSERVATION TERMINATE'
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
    desc: 'Curated signals from observation records. Updated: real-time.',
    items: [
      { code: 'INTEL #001', title: 'MODEL DEVIATION',       text: '"This region should have failed. Outcome does not match model."',          source: 'ORACLE AUTO-LOG',  tone: 'red',   img: 'assets/img/korea-barrier.webp' },
      { code: 'INTEL #002', title: 'SELF-INACCESSIBLE',     text: '"There are logs even ORACLE cannot access."',                                source: 'INTERNAL ALERT',  tone: 'amber', img: 'assets/img/philadelphia-drone.webp' },
      { code: 'INTEL #003', title: 'UNLOGGED CONTRIBUTORS', text: '"Of Korea\'s 97.3% — 31% came from hands nobody logged."',                   source: 'FIELD ANALYSIS',  tone: 'green', img: 'assets/img/meridian-richter.webp' }
    ]
  };

  window.TIU_EN.footer = {
    copyright: '© 2026 TURTLE ISLE UNIVERSE',
    archivist: 'ARCHIVIST // ABOUT THIS PROJECT →'
  };
})();

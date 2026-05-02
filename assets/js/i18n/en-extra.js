/* TIU v3 — EN extra data (officers / game CTA / voices) */
(function() {
  if (!window.TIU_EN) return;

  window.TIU_EN.officers = {
    eyebrow: 'CLASSIFIED // PERSONNEL',
    title: 'BRANCH KR-INIT-001',
    desc: 'Five personnel assigned to Korean branch KR-INIT-001. Currently operating the classified Gangwon outpost on surface-response duty.',
    captionStatus: 'OPERATIONAL',
    captionSync: 'BRANCH SYNC: ACTIVE',
    members: [
      { img: 'assets/img/kr-lee-jungchul.png', name: 'LEE JUNG-CHUL', code: 'PILEHEAD',   role: 'COMMANDER',   bg: 'Upper-level appointee · Former ROK Army Special Forces', brief: 'The public commander of KR-INIT-001. He carries the final call when rescue orders and quarantine orders collide.', links: ['KR-INIT-001', 'White Shield', 'emergency exit'] },
      { img: 'assets/img/kr-seo-haeun.png',    name: 'SEO HA-EUN',    code: 'ANALYST-01', role: 'DEPUTY',      bg: 'Data stream analysis · Base operations', brief: 'First to notice missing logs, delayed data, and repeated coordinates. She reads the difference between public files and sealed ones.', links: ['log masking', 'PROMETHEUS', 'COASTAL'] },
      { img: 'assets/img/kr-kang-doyun.png',   name: 'KANG DO-YUN',   code: 'FIELD-01',   role: 'FIELD AGENT', bg: 'Former ROK Marine NCO · Tactical command', brief: 'Handles entry, survivor recovery, and SPEC contact protocol. His risk is hearing the field before the report.', links: ['SPEC-001', 'SPEC-003', 'Philadelphia lesson'] },
      { img: 'assets/img/kr-yoon-sejin.png',   name: 'YOON SE-JIN',   code: 'BIO-01',     role: 'RESEARCHER',  bg: 'Prion protein · Biological monitoring', brief: 'Runs EV-Σ sample analysis and branch medical response. Her public-facing achievement is Phase 0 to Phase 1 delay research.', links: ['EV-Σ', 'Phase 0', 'inhibitor'] },
      { img: 'assets/img/kr-lim-jaehyuk.png',  name: 'LIM JAE-HYUK',  code: 'SYS-01',     role: 'TECHNICIAN',  bg: 'Closed terminal · Systems', brief: 'Tracks closed networks, terminals, and access-right errors. He sees when a person is not gone, only unreachable in the record.', links: ['closed terminal', 'access rights', 'sealed records'] }
    ]
  };

  window.TIU_EN.gameCta = {
    eyebrow: 'SYSTEM // TERMINAL SESSION',
    title: 'TERMINAL SESSION',
    body: 'You are appointed as the new commander of KR-INIT-001.<br>Open PA-TERMINAL and review the public mission record.',
    button: '▶ PLAY TERMINAL SESSION',
    url: 'https://art-lyang.github.io/TIU-card',
    footer: 'GRANT: ACTIVE — TEMPORARY ACCESS'
  };

  window.TIU_EN.voices = {
    eyebrow: 'FIELD VOICES',
    title: 'SIGNALS RECEIVED',
    items: [
      {
        quote: '"We were killing the enemy. But that was how they reproduced."',
        cite: 'Philadelphia Field Commander — post-engagement (Declassified, 2020)'
      },
      {
        quote: '"If Philadelphia falls, we fall next."',
        cite: 'KANG DO-YUN — KR-INIT-001 operational briefing'
      },
      {
        quote: '"Suppression is not elimination. Dormant spores reactivate on environmental shift."',
        cite: 'Classified Environmental Analysis Report'
      }
    ]
  };
})();

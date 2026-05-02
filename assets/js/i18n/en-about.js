/* TIU v3 — EN About page data (ARCHIVIST NOTE) */
(function() {
  if (!window.TIU_EN) return;

  window.TIU_EN.about = {
    title: 'ARCHIVIST NOTE',
    subtitle: 'From the keeper of this archive.',
    intro: 'This archive has accumulated since 2015. The author was a high school student then, drawing a turtle on a single page of a notebook. Eleven years later, that turtle has become a world.',
    timelineLabel: 'TIMELINE',
    timeline: [
      { year: '2015', text: 'First fragments — a student\'s notebook' },
      { year: '2018', text: 'First structured worldbuilding attempt' },
      { year: '2020', text: 'Deep classification-system concept established' },
      { year: '2022', text: 'TIU-CARD prototype' },
      { year: '2024', text: 'Public site v1' },
      { year: '2025', text: 'Canon storyline locked' },
      { year: '2026', text: 'v3 rebuild (current)' }
    ],
    creatorLabel: 'CREATOR',
    creator: 'Solo creator — Art-lyang',
    toolsLabel: 'TOOLS',
    tools: 'AI collaboration: Claude (Anthropic). Used for worldbuilding docs, code, and partial translation.',
    mediaLabel: 'MEDIA',
    media: [
      'TIU-CARD — card game (TERMINAL SESSION)',
      'Worldbuilding Site — this archive (v2 → v3)',
      'Future — novel · soundscape · expanded media'
    ],
    thanksLabel: 'THANKS',
    thanks: 'If this world has meant something to you, the keeper has already received what they wanted.',
    quote: '"Every great worldbuilding begins from a simple personal preference."',
    signature: '— Art-lyang, Archivist',
    backLink: '← RETURN TO ARCHIVE',
    reach: {
      label: 'REACH',
      links: [
        { label: 'GitHub',    url: 'https://github.com/Art-lyang/TIU' },
        { label: 'TIU-CARD',  url: 'https://art-lyang.github.io/TIU-card' }
      ]
    }
  };
})();

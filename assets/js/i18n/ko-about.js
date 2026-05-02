/* TIU v3 — KO About page data (ARCHIVIST NOTE) */
(function() {
  if (!window.TIU_KO) return;

  window.TIU_KO.about = {
    title: 'ARCHIVIST NOTE',
    subtitle: 'From the keeper of this archive.',
    intro: '이 기록은 2015년부터 축적되었습니다. 당시 작성자는 고등학생이었고, 공책 한 장에 거북이 한 마리를 그리고 있었습니다. 11년이 지난 지금, 그 거북이는 세계가 되었습니다.',
    timelineLabel: 'TIMELINE',
    timeline: [
      { year: '2015', text: '첫 단편 — 고등학생의 공책' },
      { year: '2018', text: '세계관 구조화 시도' },
      { year: '2020', text: '심층 관측 시스템 컨셉 정립' },
      { year: '2022', text: 'TIU-CARD 프로토타입' },
      { year: '2024', text: '공개 사이트 v1' },
      { year: '2025', text: '정론(Canon) 스토리라인 확정' },
      { year: '2026', text: 'v3 리빌드 (현재)' }
    ],
    creatorLabel: 'CREATOR',
    creator: '단일 제작자 — Art-lyang',
    toolsLabel: 'TOOLS',
    tools: 'AI 협업: Claude (Anthropic). 세계관 문서, 코드, 번역 일부에서 협업.',
    mediaLabel: 'MEDIA',
    media: [
      'TIU-CARD — 카드 게임 (TERMINAL SESSION)',
      'Worldbuilding Site — 이 아카이브 (v2 → v3)',
      'Future — 소설 · 사운드스케이프 · 확장 매체'
    ],
    thanksLabel: 'THANKS',
    thanks: '이 세계가 당신에게 무언가였다면, 기록 보관인은 이미 원하던 것을 받은 것입니다.',
    quote: '"모든 거대한 세계관은 단순한 개인 선호에서 시작한다."',
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

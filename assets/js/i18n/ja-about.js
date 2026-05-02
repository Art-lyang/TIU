/* TIU v3 — JA About page data (ARCHIVIST NOTE) */
(function() {
  if (!window.TIU_JA) return;

  window.TIU_JA.about = {
    title: 'ARCHIVIST NOTE',
    subtitle: 'このアーカイブの管理者より。',
    intro: 'このアーカイブは2015年から蓄積されている。当時、作者は高校生で、ノートの一ページに一匹の亀を描いていた。十一年後、その亀は一つの世界になった。',
    timelineLabel: 'TIMELINE',
    timeline: [
      { year: '2015', text: '最初の断片 — 学生のノート' },
      { year: '2018', text: '初の構造化された世界観構築' },
      { year: '2020', text: '深層分類システム概念の確立' },
      { year: '2022', text: 'TIU-CARDプロトタイプ' },
      { year: '2024', text: '公開サイトv1' },
      { year: '2025', text: '正史ストーリーライン固定' },
      { year: '2026', text: 'v3再構築（現在）' }
    ],
    creatorLabel: 'CREATOR',
    creator: 'Solo creator — Art-lyang',
    toolsLabel: 'TOOLS',
    tools: 'AI collaboration: Claude (Anthropic)。世界観文書、コード、一部翻訳に使用。',
    mediaLabel: 'MEDIA',
    media: [
      'TIU-CARD — カードゲーム（TERMINAL SESSION）',
      'Worldbuilding Site — このアーカイブ（v2 → v3）',
      'Future — 小説 · サウンドスケープ · 拡張メディア'
    ],
    thanksLabel: 'THANKS',
    thanks: 'この世界があなたに何かを残したなら、管理者はすでに望んだものを受け取っている。',
    quote: '"偉大な世界観構築は、いつも小さな個人的嗜好から始まる。"',
    signature: '— Art-lyang, Archivist',
    backLink: '← ARCHIVEへ戻る',
    reach: {
      label: 'REACH',
      links: [
        { label: 'GitHub', url: 'https://github.com/Art-lyang/TIU' },
        { label: 'TIU-CARD', url: 'https://art-lyang.github.io/TIU-card' }
      ]
    }
  };
})();

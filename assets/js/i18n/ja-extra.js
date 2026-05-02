/* TIU v3 — JA extra data (officers / game CTA / voices) */
(function() {
  if (!window.TIU_JA) return;

  window.TIU_JA.officers = {
    eyebrow: 'CLASSIFIED // PERSONNEL',
    title: 'BRANCH KR-INIT-001',
    desc: '韓国支部KR-INIT-001に配属された5名。現在、表層対応任務として秘匿された江原前哨拠点を運用中。',
    captionStatus: 'OPERATIONAL',
    captionSync: 'BRANCH SYNC: ACTIVE',
    members: [
      { img: 'assets/img/kr-lee-jungchul.png', name: 'LEE JUNG-CHUL', code: 'PILEHEAD', role: 'COMMANDER', bg: '上層任命者 · 元韓国陸軍特殊部隊', brief: 'KR-INIT-001の公開上の指揮官。救助命令と隔離命令が衝突するとき、最終判断を担う。', links: ['KR-INIT-001', 'White Shield', '非常脱出'] },
      { img: 'assets/img/kr-seo-haeun.png', name: 'SEO HA-EUN', code: 'ANALYST-01', role: 'DEPUTY', bg: 'データストリーム分析 · 基地運用', brief: '欠落ログ、遅延データ、反復座標を最初に発見する。公開ファイルと封印ファイルの差分を読む。', links: ['ログマスキング', 'PROMETHEUS', 'COASTAL'] },
      { img: 'assets/img/kr-kang-doyun.png', name: 'KANG DO-YUN', code: 'FIELD-01', role: 'FIELD AGENT', bg: '元韓国海兵隊下士官 · 戦術指揮', brief: '突入、生存者回収、SPEC接触プロトコルを担当。彼の危険は、報告書より先に現場を聞いてしまうことにある。', links: ['SPEC-001', 'SPEC-003', 'Philadelphia lesson'] },
      { img: 'assets/img/kr-yoon-sejin.png', name: 'YOON SE-JIN', code: 'BIO-01', role: 'RESEARCHER', bg: 'プリオンタンパク質 · 生物監視', brief: 'EV-Σサンプル分析と支部医療対応を運用。公開上の成果はPhase 0からPhase 1への遅延研究。', links: ['EV-Σ', 'Phase 0', '阻害剤'] },
      { img: 'assets/img/kr-lim-jaehyuk.png', name: 'LIM JAE-HYUK', code: 'SYS-01', role: 'TECHNICIAN', bg: '閉域端末 · システム', brief: '閉域ネットワーク、端末、アクセス権エラーを追跡する。人が消えたのではなく、記録上到達不能になった瞬間を見ている。', links: ['閉域端末', 'アクセス権', '封印記録'] }
    ]
  };

  window.TIU_JA.gameCta = {
    eyebrow: 'SYSTEM // TERMINAL SESSION',
    title: 'TERMINAL SESSION',
    body: 'あなたはKR-INIT-001の新任指揮官に任命された。<br>PA-TERMINALを開き、公開任務記録を確認せよ。',
    button: '▶ TERMINAL SESSIONを開始',
    url: 'https://art-lyang.github.io/TIU-card',
    footer: 'GRANT: ACTIVE — TEMPORARY ACCESS'
  };

  window.TIU_JA.voices = {
    eyebrow: 'FIELD VOICES',
    title: 'SIGNALS RECEIVED',
    items: [
      { quote: '"我々は敵を殺していた。だが、それが彼らの繁殖方法だった。"', cite: 'Philadelphia現場指揮官 — 交戦後記録（機密解除, 2020）' },
      { quote: '"フィラデルフィアが落ちれば、次は我々だ。"', cite: 'KANG DO-YUN — KR-INIT-001作戦ブリーフィング' },
      { quote: '"抑制は除去ではない。休眠胞子は環境変化で再活性化する。"', cite: '機密環境分析報告書' }
    ]
  };
})();

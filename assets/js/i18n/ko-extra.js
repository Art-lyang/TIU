/* TIU v3 — KO 확장 데이터 (간부진 / 게임 CTA / 보이스)
 * 메인 ko.js 로드 후 병합됨 */
(function() {
  if (!window.TIU_KO) return;

  window.TIU_KO.officers = {
    eyebrow: 'CLASSIFIED // PERSONNEL',
    title: 'BRANCH KR-INIT-001',
    desc: 'ORACLE이 한국 지부에 파견한 다섯 명의 운영진. 강원도 비공개 거점에서 관측 임무를 수행 중이다.',
    captionStatus: 'OPERATIONAL',
    captionSync: 'ORACLE SYNC: ACTIVE',
    members: [
      { img: 'assets/img/kr-lee-jungchul.png', name: '이중철',  code: 'PILEHEAD',   role: 'COMMANDER',   bg: 'ORACLE 지명 / 전 육군 특수부대 장교' },
      { img: 'assets/img/kr-seo-haeun.png',    name: '서하은',  code: 'ANALYST-01', role: 'DEPUTY',      bg: '데이터 스트림 분석 · 기지 운영' },
      { img: 'assets/img/kr-kang-doyun.png',   name: '강도윤',  code: 'FIELD-01',   role: 'FIELD AGENT', bg: '전 해병대 부사관 / 전술 지휘' },
      { img: 'assets/img/kr-yoon-sejin.png',   name: '윤세진',  code: 'BIO-01',     role: 'RESEARCHER',  bg: '프리온 단백질 / 생물학 관측' },
      { img: 'assets/img/kr-lim-jaehyuk.png',  name: '임재혁',  code: 'SYS-01',     role: 'TECHNICIAN',  bg: 'ORACLE 단말기 · 시스템 관리' }
    ]
  };

  window.TIU_KO.gameCta = {
    eyebrow: 'SYSTEM // TERMINAL SESSION',
    title: 'TERMINAL SESSION',
    body: '당신은 한국 지부 KR-INIT-001의 새 지휘관으로 부임합니다.<br>ORACLE 단말기를 열고, 지시를 수행하십시오.',
    button: '▶ PLAY TERMINAL SESSION',
    url: 'https://art-lyang.github.io/TIU-card',
    footer: 'GRANT: ACTIVE — TEMPORARY ACCESS'
  };

  window.TIU_KO.voices = {
    eyebrow: 'FIELD VOICES',
    title: 'SIGNALS RECEIVED',
    items: [
      {
        quote: '"우리는 적을 죽이고 있었다. 하지만 그건 번식이었다."',
        cite: '필라델피아 현장 지휘관 — 초기 교전 후 (기밀 해제, 2020)'
      },
      {
        quote: '"필라델피아 봉쇄가 뚫리면 여기도 끝입니다."',
        cite: '강도윤 — KR-INIT-001 작전 브리핑'
      },
      {
        quote: '"억제는 제거가 아니다. 저온 포자는 환경 변화 시 재활성화한다."',
        cite: 'ORACLE 환경 분석 보고서'
      }
    ]
  };
})();

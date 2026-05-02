/* TIU v3 — KO 확장 데이터 (간부진 / 게임 CTA / 보이스)
 * 메인 ko.js 로드 후 병합됨 */
(function() {
  if (!window.TIU_KO) return;

  window.TIU_KO.officers = {
    eyebrow: 'CLASSIFIED // PERSONNEL',
    title: 'BRANCH KR-INIT-001',
    desc: '한국 지부 KR-INIT-001에 배치된 다섯 명의 운영진. 강원도 비공개 거점에서 표면 대응 임무를 수행 중이다.',
    captionStatus: 'OPERATIONAL',
    captionSync: 'BRANCH SYNC: ACTIVE',
    members: [
      { img: 'assets/img/kr-lee-jungchul.png', name: '이중철',  code: 'PILEHEAD',   role: 'COMMANDER',   bg: '상위 지명 / 전 육군 특수부대 장교', brief: 'KR-INIT-001의 공개 지휘권자. 구조 명령과 격리 명령이 충돌할 때 최종 판단을 떠안는다.', links: ['KR-INIT-001', 'White Shield', '비상 탈출'] },
      { img: 'assets/img/kr-seo-haeun.png',    name: '서하은',  code: 'ANALYST-01', role: 'DEPUTY',      bg: '데이터 스트림 분석 · 기지 운영', brief: '누락된 로그, 지연된 데이터, 반복되는 좌표를 가장 먼저 발견한다. 공개본과 봉인본의 차이를 읽는 인물.', links: ['로그 마스킹', 'PROMETHEUS', 'COASTAL'] },
      { img: 'assets/img/kr-kang-doyun.png',   name: '강도윤',  code: 'FIELD-01',   role: 'FIELD AGENT', bg: '전 해병대 부사관 / 전술 지휘', brief: '현장 진입, 생존자 회수, SPEC 접촉 프로토콜 담당. 보고서보다 현장의 목소리를 먼저 듣는 위험을 가진다.', links: ['SPEC-001', 'SPEC-003', '필라델피아 교훈'] },
      { img: 'assets/img/kr-yoon-sejin.png',   name: '윤세진',  code: 'BIO-01',     role: 'RESEARCHER',  bg: '프리온 단백질 / 생물학 관측', brief: 'EV-Σ 표본 분석과 지부 의료를 맡는다. Phase 0→1 전환 지연 연구가 공개 가능한 핵심 업적이다.', links: ['EV-Σ', 'Phase 0', '억제제'] },
      { img: 'assets/img/kr-lim-jaehyuk.png',  name: '임재혁',  code: 'SYS-01',     role: 'TECHNICIAN',  bg: '폐쇄 단말기 · 시스템 관리', brief: '폐쇄망, 단말기, 접근권 오류를 추적한다. 사람이 사라진 것이 아니라 기록이 접근 불가가 되는 순간을 본다.', links: ['폐쇄 단말', '접근권', '기록 봉인'] }
    ]
  };

  window.TIU_KO.gameCta = {
    eyebrow: 'SYSTEM // TERMINAL SESSION',
    title: 'TERMINAL SESSION',
    body: '당신은 한국 지부 KR-INIT-001의 새 지휘관으로 부임합니다.<br>PA-TERMINAL을 열고, 공개 임무 기록을 확인하십시오.',
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
        cite: '비공개 환경 분석 보고서'
      }
    ]
  };
})();

# TIU UNIVERSE ARCHIVE — 작업 스냅샷

작업일 기준: 2032.05.12
톤: PA-TERMINAL (정부 단말기 / CRT / Orange #FF5A00)

---

## 파일 구조

```
tiu-archive/
├── README.md                            ← 이 파일
│
├── landing-standalone.html              ← 메인 랜딩 (assets 파일 참조)
├── access-protocol-standalone.html      ← 접속 프로토콜 (assets 파일 참조)
│
├── pages/
│   ├── landing.html                     ← 분리 구조 버전 (CSS/JS 외부)
│   └── access-protocol.html
│
├── css/                                 ← 전부 200줄 이내 분할
│   ├── design-tokens.css                  ← 색·폰트·간격 SSOT 변수
│   ├── base.css                           ← reset + 공용 유틸
│   ├── archive-header.css                 ← 공용 헤더 + 언어 토글
│   ├── archive-hud-strip.css              ← 공용 HUD 정보 스트립
│   ├── access-protocol.css                ← 접속 프로토콜 페이지 셸
│   ├── access-protocol-guest.css          ← 게스트 박스 (4상태 버튼)
│   ├── access-protocol-scene.css          ← 시네마틱 이미지 영역
│   ├── landing-page.css                   ← 메인 랜딩 페이지 셸
│   ├── landing-hero.css                   ← 좌측 카피 + INFO STRIP
│   ├── landing-map.css                    ← 세계지도 에셋 슬롯
│   ├── landing-cta.css                    ← 3 CTA 버튼
│   ├── landing-cards.css                  ← 4 sector cards + 공개용 이미지 프리뷰
│   ├── landing-archive.css                ← 공개 기록관 섹션
│   ├── landing-record-images.css          ← 공개 기록관 이미지 프리뷰
│   ├── landing-threat.css                 ← 글로벌 위협 지도 공개 오버레이
│   ├── landing-dossiers.css               ← 공개 열람 기록 상세
│   ├── archive-menu.css                   ← 풀스크린 아카이브 메뉴
│   └── mobile-overrides.css               ← 768px / 380px 반응형
│
├── js/
│   ├── i18n.js                          ← ko/en/ja 사전 + 토글 로직
│   └── archive-menu.js                  ← 풀스크린 메뉴 라우팅
│
└── assets/
    ├── archive-preview-timeline.webp    ← 공개 기록관 / 발생 연표 프리뷰
    ├── archive-preview-threat.webp      ← 공개 기록관 / 글로벌 위협 프리뷰
    ├── archive-preview-branch.webp      ← 공개 기록관 / 지역 지부 프리뷰
    ├── archive-preview-restricted.webp  ← 공개 기록관 / 제한 기록 프리뷰
    └── scene-archive-vault.jpg          ← 접속 프로토콜 시네마틱 이미지
```

---

## 두 페이지 흐름

```
[접속 프로토콜]                      [아카이브 홈 / 공개 기록관]
access-protocol.html ───────►       landing.html#archive-hub
"아카이브 입장"                       "TIU 유니버스 아카이브"
"공개 기록관 보기" ───────►          landing.html#public-records

[아카이브 홈]
PUBLIC INDEX    ───────► 공개 기록관
THREAT INDEX    ───────► 글로벌 위협 지도
ACCESS GATE     ───────► 게스트 세션 관리
ENTRY 001/003/004 ─────► 공개 열람 기록 상세
04 제한 기록 접근 ─────► 접속 프로토콜
```

---

## 단일 파일 사용 (`-standalone.html`)

폰/태블릿에서 그대로 열거나 다른 사람에게 보낼 때:
- **`landing-standalone.html`** — 메인 랜딩, 세계지도 에셋 슬롯 + assets 이미지 참조
- **`access-protocol-standalone.html`** — 접속 프로토콜, assets 시네마틱 이미지 참조

이미지는 base64 인라인이 아니라 `assets/`의 원본 파일을 참조. 폰트(Pretendard, JetBrains Mono)만 CDN 로드.

## 분리 구조 사용 (`pages/` + `css/` + `js/`)

GitHub Pages 또는 일반 호스팅 배포용. `pages/` 안의 HTML이 `../css/`와 `../js/`를 상대경로로 참조.

---

## 디자인 시스템 핵심

```
배경     #0B0B0C (cool ink)
서피스   #121214 / #1A1A1C
텍스트   #CFCFCF (primary) / #A7A7A7 (secondary)
액센트   #FF5A00 (PRIMARY)
보조     #FFC266 / #C74800 / #5A2200
위협등급 friendly #2D7BFF / contested #FFB000 / hostile #D12A2A

폰트 패밀리 (단일 통합)
- Display: Pretendard 900/700/400
- Mono:    JetBrains Mono 700/500/400
```

---

## i18n

3언어 지원: 한국어 / English / 日本語. 페이지 우상단 언어 토글로 전환. localStorage `tiu-lang` 저장.

영어 시스템 라벨(ARCHIVE ID, NODE, GRID, LAT, LONG, SECTOR, STATUS 등)은 의도적으로 영어 유지 — 터미널 톤.

---

## 다음 작업 후보

- 4 sector 카드 시네마틱 이미지 추가 (현재 그라디언트 mock)
- 다음 페이지: 글로벌 위협 지도 / 기록 열람 템플릿
- 세계지도 에셋 추가 후 `landing-map` 슬롯에 연결
- 시안 7번 MAP SYMBOLS 풀(crosshairs / location pins / sector tags) 라이브러리화

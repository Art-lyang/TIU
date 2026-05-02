# TIU v3 — Turtle Isle Universe (New Page)

> v2의 누적 부채를 정리하고 디자인 시스템 기반으로 재구축하는 v3 버전.
> 현재: 입문 페이지 (Entry Page) 제작 완료.

---

## 🎯 프로젝트 목표

v2의 문제점을 해결하고 다음을 달성한다:

1. **디자인 토큰 체계화** — 모든 색상·간격·타이포를 CSS 변수로
2. **컴포넌트 표준화** — 재사용 가능한 단위 기반
3. **모바일 우선 반응형** — 3단 브레이크포인트 (모바일/태블릿/PC)
4. **다국어 지원** — 한국어 + 영어 동시 제공
5. **접근성 준수** — WCAG 2.1 AA 수준
6. **성능 최적화** — Lighthouse 90+ 목표

---

## 📁 디렉토리 구조

```
new_page/
├── index.html                  ← 입문 페이지
├── assets/
│   ├── css/
│   │   ├── 00-tokens.css       ← 디자인 토큰 (CSS 변수)
│   │   ├── 01-reset.css        ← 리셋 + 베이스 타이포
│   │   ├── 02-layout.css       ← 그리드, 컨테이너
│   │   ├── 03-components/      ← 공용 컴포넌트
│   │   │   ├── topbar.css
│   │   │   ├── ticker.css
│   │   │   ├── hero.css
│   │   │   ├── button.css
│   │   │   ├── card.css
│   │   │   ├── layer-stack.css
│   │   │   ├── quote.css
│   │   │   └── sound-toggle.css
│   │   ├── 04-pages/           ← 페이지별 스타일
│   │   │   └── entry.css
│   │   └── main.css            ← 전체 임포트
│   ├── js/
│   │   ├── core/               ← 공용 유틸
│   │   │   ├── hero-canvas.js  ← 코드레인 + DNA
│   │   │   ├── sound-manager.js
│   │   │   ├── ticker.js
│   │   │   └── reveal-on-scroll.js
│   │   ├── pages/              ← 페이지별 컨트롤러
│   │   │   └── entry.js
│   │   └── i18n/               ← 다국어
│   │       ├── ko.js
│   │       ├── en.js
│   │       └── index.js
│   ├── img/                    ← 이미지
│   └── sound/                  ← 사운드 (12 files)
└── docs/
    └── design-system.md        ← 디자인 시스템 가이드
```

---

## 🚀 실행

정적 사이트이므로 로컬 서버만 있으면 됨.

```bash
# Python
cd new_page
python -m http.server 8000

# Node (http-server)
npx http-server . -p 8000

# VSCode Live Server 확장도 가능
```

브라우저에서 `http://localhost:8000` 접속.

> ⚠ ES Modules를 사용하므로 `file://`로 열면 CORS 에러 발생. 반드시 서버 환경에서 실행.

---

## 🎨 디자인 시스템

자세한 규칙은 [`docs/design-system.md`](docs/design-system.md) 참조.

핵심 요약:
- **색상**: 5 브랜드 + 10 뉴트럴. 모두 CSS 변수
- **간격**: 4px 8x 스케일 (space-1~10)
- **타이포**: Bebas Neue / Share Tech Mono / Noto Sans KR
- **브레이크포인트**: 600px / 900px / 1200px
- **애니메이션**: 150/300/600/1200ms 토큰

---

## 🌐 다국어 (i18n)

### 지원 언어
- 🇰🇷 한국어 (기본)
- 🇺🇸 English

### 언어 전환
- 우상단 토글 버튼 (KO / EN)
- `localStorage` 에 선택 저장

### 새 텍스트 추가
1. `assets/js/i18n/ko.js` — 한국어 추가
2. `assets/js/i18n/en.js` — 영어 추가 (톤 체크)
3. HTML 에 `data-i18n="key.path"` 속성

```html
<h2 data-i18n="hero.title">기본 텍스트</h2>
```

---

## 📋 페이지 구성 (입문 페이지)

1. **HERO** — 풀스크린 인트로 + 코드레인 캔버스
2. **PITCH** — "2026, 세계는 무너졌다" 한 줄 임팩트
3. **THREAT** — EV-Σ 소개
4. **WORLD** — 4계층 구조 시각화 (L1~L4)
5. **FACTIONS** — 4대 세력 + 4 인간 비정규 세력
6. **KOREA** — 97.3% 하이라이트
7. **MYSTERY** — 3개의 미스터리 훅
8. **CTA** — PA-TERMINAL 공개 아카이브 접속
9. **FOOTER** — 저작권, 링크

---

## ✅ v2 대비 개선 사항

| 영역 | v2 | v3 |
|---|---|---|
| 인라인 스타일 | 수백 곳 | **0개** |
| CSS 파일 | 20개 (역할 불명확) | 13개 (명확한 계층) |
| 반응형 | 일부 페이지만 | **모든 페이지 3단** |
| 다국어 | 없음 | **KO + EN** |
| 접근성 | 제한적 | **WCAG 2.1** |
| 사운드 | 없음 | **UI 효과음 + 배경음** |
| 파일당 줄 수 | 일부 500+ | **200줄 이하** |
| 디자인 토큰 | 없음 | **CSS 변수 80+** |

---

## 🔜 다음 작업 (로드맵)

### v3 Phase B — 메인 PA-TERMINAL 페이지
- [x] `main.html` 재작성 (부팅 시퀀스 포함)
- [x] 위협 맵, 프로토콜 그리드, 대시보드
- [x] v2 보다 밀도 낮추고 UX 개선

### v3 Phase C — 카테고리 페이지
- [x] factions.html
- [x] threats.html
- [x] records.html
- [x] incidents.html
- [x] specimens.html
- [x] profiles.html
- [x] database.html

### v3 Phase D — 특수 페이지
- [ ] kr-branch.html (한국 지부)
- [ ] akashic.html (숨겨진 레이어)

### v3 Phase E — 최적화
- [ ] 이미지 최적화 (WebP + AVIF)
- [ ] Critical CSS 인라인
- [ ] 폰트 preload
- [ ] Lighthouse 95+ 달성

---

## 📝 세계관 자료

모든 원본 설정 문서는 `../tiu-v2-complete/source-packs/` 에 보관됨.

- `canon/` — 정론 스토리라인
- `restricted-inland/` — 비공개 내륙권 원본 팩 (공개 페이지에서는 직접명 노출 금지)
- `worldbuilding/` — L3 문명, 인간 세력
- `korea-gov/` — 한국 정부
- `nations/` — 국가별 설정
- `INDEX.md` — 전체 목차
- `APPLICATION-MAP.md` — 자료-페이지 매핑
- `APPLIED-LOG.md` — 적용 이력

---

## 📄 라이선스

© 2026 TURTLE ISLE UNIVERSE — Art-lyang

비상업적 참조 목적 외 무단 복제/배포 금지.

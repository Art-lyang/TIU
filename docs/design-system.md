# TIU v3 — 디자인 시스템 가이드

> v3 사이트 제작 시 따라야 할 시각/구조 규칙.
> 모든 신규 페이지는 이 문서의 원칙을 준수한다.

---

## 🎨 1. 색상 시스템

### Brand Colors — 위협 등급 기반

| 변수 | HEX | 용도 |
|---|---|---|
| `--color-green` | `#00e5a0` | PA-TERMINAL, 성공, 생존, 한국 방벽 |
| `--color-amber` | `#ffc744` | 경고, 프로메테우스, 중립 |
| `--color-red` | `#ff3b3b` | 위험, 쉐드 오더, BLACK-LEVEL, CLASSIFIED |
| `--color-blue` | `#4db8ff` | 정보, TS-Ω, 해양 |
| `--color-purple` | `#b47aff` | 이상, Z-Ω, 비정상 |

### Neutrals — 어두운 배경 계층

| 변수 | HEX | 용도 |
|---|---|---|
| `--color-bg` | `#000000` | 페이지 배경 |
| `--color-surface` | `#0a0a0a` | 고정 UI 배경 |
| `--color-card` | `#111111` | 카드 배경 |
| `--color-card-2` | `#161616` | 카드 hover / 대체 |
| `--color-border` | `#1e1e1e` | 기본 보더 |
| `--color-dim` | `#2a2a2a` | 분리선 |
| `--color-text` | `#f0f0f0` | 기본 텍스트 |
| `--color-light` | `#c8ccc4` | 본문 텍스트 |
| `--color-muted` | `#6e7a6e` | 보조 텍스트 |

### ⚠ 규칙
- **인라인 스타일 금지**. 모든 색상은 CSS 변수로.
- **색상 직접 사용 금지**. `#00e5a0` 대신 `var(--color-green)`.
- 알파 색상은 `--alpha-*` 사전 정의된 값만 사용.

---

## 📐 2. 간격 시스템 (Spacing)

4px 기준 8x 스케일. 자의적 간격 금지.

| 변수 | 값 | 사용 |
|---|---|---|
| `--space-1` | 4px | 인라인 간격 |
| `--space-2` | 8px | 작은 요소 간격 |
| `--space-3` | 12px | 기본 간격 |
| `--space-4` | 16px | 블록 간격 |
| `--space-5` | 24px | 섹션 내부 |
| `--space-6` | 32px | 섹션 구분 |
| `--space-7` | 48px | 큰 구분 |
| `--space-8` | 64px | 섹션 간 |
| `--space-9` | 96px | 페이지 내부 큰 간격 |
| `--space-10` | 128px | 페이지 주요 구분 |

---

## 🔤 3. 타이포그래피

### Font Families (Google Fonts)

| 변수 | 폰트 | 용도 |
|---|---|---|
| `--font-display` | Bebas Neue | 제목, 로고, 숫자 강조 |
| `--font-mono` | Share Tech Mono | 코드, 타임스탬프, 에이브로우 |
| `--font-body` | Noto Sans KR | 본문 (한/영 공용) |

### Type Scale

| 변수 | 크기 | 사용 |
|---|---|---|
| `--text-2xs` | 9px | 에이브로우, 코드 라벨 |
| `--text-xs` | 10px | 모노스페이스 UI |
| `--text-sm` | 12px | 보조 텍스트 |
| `--text-md` | 14px | 본문 기본 |
| `--text-lg` | 16px | 강조 본문 |
| `--text-xl` | 20px | 소제목 |
| `--text-2xl` | 24px | 섹션 제목 (모바일) |
| `--text-3xl` | 32px | 섹션 제목 (데스크탑) |
| `--text-4xl` | 48px | 히어로 (모바일) |
| `--text-5xl` | 72px | 히어로 타이틀 |
| `--text-6xl` | 96px | 최대 크기 |

### 반응형 타이포
```css
font-size: clamp(var(--text-2xl), 5vw, var(--text-4xl));
```
최소값·선호값·최대값을 `clamp()`으로 지정.

---

## 🧱 4. 컴포넌트 규칙

### 공용 컴포넌트 (재사용)

| 컴포넌트 | 파일 | 변형 |
|---|---|---|
| Topbar | `topbar.css` | — |
| Ticker | `ticker.css` | — |
| Button | `button.css` | `--primary` `--danger` `--ghost` `--lg` |
| Card | `card.css` | `--faction` `--highlight` `--mystery` |
| Layer Stack | `layer-stack.css` | L1~L4 |
| Quote | `quote.css` | `--green` `--amber` `--muted` |
| Hero | `hero.css` | — |
| Sound Toggle | `sound-toggle.css` | — |

### ⚠ 신규 컴포넌트 추가 시 체크리스트
- [ ] `03-components/` 에 독립 파일 생성
- [ ] `main.css` 에 `@import` 추가
- [ ] BEM 유사 네이밍 (`block__element--modifier`)
- [ ] 모바일 우선 (기본이 모바일, 미디어쿼리는 확장)
- [ ] 파일당 200줄 이하

---

## 📱 5. 반응형 브레이크포인트

| 구간 | 값 | 대상 |
|---|---|---|
| Mobile (기본) | 0~599px | 스마트폰 |
| Tablet | 600px~899px | 태블릿 |
| Desktop | 900px+ | PC |
| Wide | 1200px+ | 와이드 모니터 |

### 원칙
- **모바일 우선 (Mobile First)**: 기본 스타일은 모바일
- **미디어 쿼리는 min-width**: `@media (min-width: 600px)`
- **container max-width**:
  - `--container-sm`: 640px
  - `--container-md`: 800px
  - `--container-lg`: 1100px

---

## ♿ 6. 접근성 (A11y)

### 필수 사항
- [ ] 시맨틱 HTML 사용 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`)
- [ ] 이미지 `alt` 속성
- [ ] 버튼 `aria-label`
- [ ] 랜드마크 `role` 속성
- [ ] 포커스 상태 시각적으로 명확
- [ ] 색상만으로 정보 전달 금지 (아이콘/텍스트 병기)
- [ ] `prefers-reduced-motion` 존중 (이미 reset에 구현)

---

## 🌐 7. 다국어 (i18n)

### 구조
```
assets/js/i18n/
├── ko.js    ← 한국어 사전
├── en.js    ← 영어 사전
└── index.js ← 매니저 (setLang, applyTexts)
```

### HTML 속성
```html
<!-- 일반 텍스트 -->
<h1 data-i18n="hero.title">기본 텍스트</h1>

<!-- HTML 포함 텍스트 -->
<p data-i18n-html="pitch.body"></p>

<!-- 속성 설정 -->
<input data-i18n-attr="placeholder:ui.searchPlaceholder">
```

### 새 텍스트 추가 시
1. `ko.js` 에 키 추가
2. `en.js` 에 동일 키로 영어 번역 추가 (톤 유지!)
3. HTML에 `data-i18n="key.path"` 속성 추가

### ⚠ 번역 톤 가이드
- **PA 공개 기록**: 건조하고 군사적. 주어 생략 가능 (`"PUBLIC CHANNEL // FILTERED"`)
- **철학적 문장**: 문학적 무게 유지. 의역 허용
- **수치/코드**: 원문 그대로 (`EV-Σ`, `97.3%`, `KR-INIT-001`)

---

## 🔊 8. 사운드 시스템

### 파일
- 배경음: `act1_bg_sound.mp3` (루프)
- UI 호버: `button_on.wav`
- UI 클릭: `button_off.wav`
- 체크: `check_sound.wav`
- 라디오 노이즈: `radio static noise.wav`

### HTML 속성
```html
<button data-sound-hover data-sound-click>Action</button>
```

### 규칙
- **기본 음소거**. 사용자가 직접 켜야 함 (접근성)
- **localStorage**에 설정 저장 (`tiu-sound`)
- **배경음**: 첫 사용자 상호작용 후 시작 (브라우저 자동재생 정책)

---

## 📁 9. 파일 구조 규칙

```
new_page/
├── index.html              ← 각 페이지 루트
├── assets/
│   ├── css/
│   │   ├── 00-tokens.css   ← 변수만
│   │   ├── 01-reset.css    ← 리셋 + 베이스
│   │   ├── 02-layout.css   ← 레이아웃
│   │   ├── 03-components/  ← 컴포넌트별
│   │   ├── 04-pages/       ← 페이지별
│   │   └── main.css        ← 통합 임포트
│   ├── js/
│   │   ├── core/           ← 공용 유틸
│   │   ├── pages/          ← 페이지별 컨트롤러
│   │   └── i18n/           ← 다국어
│   ├── img/
│   └── sound/
└── docs/
```

### 파일 크기 규칙
- **CSS 파일당 200줄 이하** — 초과 시 분리
- **JS 모듈당 250줄 이하** — 초과 시 분리
- **HTML 페이지당 200줄 이하** — 초과 시 partial로 분리

---

## 🎬 10. 애니메이션 가이드

### Duration Tokens
| 변수 | 값 | 용도 |
|---|---|---|
| `--duration-fast` | 150ms | 호버, 버튼 즉각 반응 |
| `--duration-normal` | 300ms | 기본 트랜지션 |
| `--duration-slow` | 600ms | 페이드인, 스크롤 리빌 |
| `--duration-slower` | 1200ms | 큰 연출 |

### Easing
- `--ease-out`: 자연스러운 감속 (기본)
- `--ease-in-out`: 부드러운 양방향

### 규칙
- **목적 없는 애니메이션 금지**
- **60fps 유지**: `transform`, `opacity`만 애니메이션
- **`prefers-reduced-motion` 존중** (01-reset.css에 자동 적용)

---

## ✅ 11. 신규 페이지 제작 체크리스트

### Phase 1 — 구조
- [ ] 시맨틱 HTML (`<header>`, `<main>`, `<section>`, `<footer>`)
- [ ] 메타 태그 (title, description, og:title)
- [ ] `<link rel="stylesheet" href="assets/css/main.css">`
- [ ] `data-i18n` 속성으로 텍스트 마크업

### Phase 2 — 스타일
- [ ] `04-pages/페이지명.css` 생성
- [ ] `main.css` 에 `@import` 추가
- [ ] 인라인 스타일 **0개**
- [ ] 공용 컴포넌트 우선 사용

### Phase 3 — 텍스트
- [ ] `ko.js` 에 섹션 키 추가
- [ ] `en.js` 에 영어 번역 추가 (톤 체크)
- [ ] HTML `data-i18n` 매핑 확인

### Phase 4 — 상호작용
- [ ] `data-sound-hover`, `data-sound-click` 적용
- [ ] `data-reveal` 스크롤 리빌 적용
- [ ] 키보드 접근성 검증

### Phase 5 — 검증
- [ ] 모바일/태블릿/PC 3단 반응형
- [ ] KO/EN 전환 정상 작동
- [ ] Lighthouse 90+ (Performance, A11y, SEO)
- [ ] 콘솔 에러 0개

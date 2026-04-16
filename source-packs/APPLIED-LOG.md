# 적용 이력 로그

> 각 커밋별로 어떤 자료의 무엇을 어느 페이지에 반영했는지 기록.
> 중복 작업 방지 + 변경 이력 추적용.

---

## 2026-04-17

### `97a7d1d` — Major worldbuilding expansion
- **자료**: worldbuilding/ 전체, korea-gov/ 전체, sovari/ 전체
- **적용**:
  - `factions.html`: L3 4종파 + 삼두체제 + 케스아룬 + 인간 비정규 4세력
  - `profiles.html`: VRAETH, SOLVEK, CATHARI, VAREK, Marcus Weber, 최우진
  - `region-korea.html`: DG 2,000년사 + White Shield 실체 + NADL + 정치 매트릭스
  - `regions.html`: 소바리 카드
  - `region-sovari.html` (신규): 카룬탈, 금기 10조, 메리디안 조사팀
  - `akashic.html` (신규, 🔴 숨김): 아카식 엔트리 3건

### `bf2d832` — Nation settings (JAPAN/EU) + existing region expansion
- **자료**: nations/ 전체
- **적용**:
  - `region-japan.html` (신규): 류큐 탈환 55일, 제3의 개국
  - `region-eu.html` (신규): EU-JBDF, Klaus Weber, 나폴리/그단스크/발렌시아
  - `region-philadelphia.html` 확장: Project CRUCIBLE, Ember 급진화
  - `region-silent-belt.html` 확장: BARRIER 35k, Permafrost 전원 감염
  - `region-red-veil.html` 확장: RDF 상세, SFJ 검열, Ascension 군 침투
  - `factions.html` 확장: Meridian 글로벌 거점 + 공급망
  - `profiles.html`: Klaus Weber, Dr. Alex Rivera
  - `regions.html`: 일본, EU 카드

---

## 2026-04-12 ~ 이전

### `a7897e4` — Canon v2 application
- **자료**: canon/TIU_정론_스토리라인_v2.md
- **적용**:
  - `factions.html` 프로메테우스 섹션: COASTAL MIRROR + 31% + 마르쿠스 베버
  - `incidents-data.js`: INC-010 PROXY FRACTURE 추가
  - `incidents.html`: CLASSIFIED: KR-BRANCH 진입 블록

### `c8541a4` — index/main swap
- **작업**: entry.html ↔ index.html ↔ main.html 이름 변경
- **영향**: 전체 GNav + 2개 JS 파일 링크 갱신

### `f5962a2` — Entry page creation
- **자료**: 직접 작성 (자료 기반 아님)
- **적용**: `entry.html` + `css/entry.css` (6섹션 입문 페이지)

### `ff00327` — KR Branch rebuild
- **자료**: canon/TIU_정론_스토리라인_v2.md
- **적용**: `kr-branch.html` 전면 재구성 + 6개 파티션 파일
  - kr-section-overview/officers/timeline/protocol/observer/cta
  - `regions.html` + `region-*.html` 5개 신규 생성

---

## 📊 자료별 적용 진척률

| 자료 카테고리 | 전체 | 적용 | 진척률 |
|---|---|---|---|
| canon/ | 1 | 1 | 100% |
| sovari/ | 4 | 3 (FIELD-LOG 미적용) | 75% |
| worldbuilding/ | 11 | 10 (PRIVATE 제외) | 91% |
| korea-gov/ | 12 | 12 | 100% |
| nations/ | 12 | 11 (GERMANY 힌트만) | 92% |

---

## 📝 다음 커밋 템플릿

```
<작업 내용 한 줄 요약>

자료 출처:
  - <source-packs/경로/파일.md>

적용 위치:
  - <파일.html>: <섹션/변경 내용>

공개 레벨: 🟢/🟡/🔴
```

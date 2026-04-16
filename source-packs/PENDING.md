# 미반영 대기열

> 자료 원본에는 있으나 아직 사이트에 반영되지 않은 항목 목록.
> v2 추가 작업 또는 v3 마이그레이션 시 참고.

---

## 🔥 v2에 추가 가능 (중요도 순)

### 1. 소바리 필드로그 — incidents 서브스토리 편입
- **자료**: `sovari/TIU-SOVARI-FIELD-LOG.md` (32KB, 549줄, 47일)
- **제안 적용**: `incidents-data.js`에 INC-011 추가 + phases 5~7개로 축약
  - Phase 1: 팀 도착 (Day 1~6) — 접촉, Nyame 침묵
  - Phase 2: 왜곡 감지 (Day 7~16) — 중력, GPS, 꿈
  - Phase 3: 사원 진입 (Day 17~24) — 브란트 강행, 장비 오작동
  - Phase 4: 우마르 사건 (Day 25~32) — 4시간 실종, 기억 상실
  - Phase 5: 균열 (Day 33~47) — 타나카 내부 고발, 우기 첫 비
- **공개 레벨**: 🟢 PUBLIC

### 2. Ahnenerbe 계승자 힌트 확장
- **자료**: `nations/TIU-GERMANY-AHNENERBE-SUCCESSOR.md` (25KB)
- **제안 적용**: `region-eu.html` 또는 별도 페이지
  - 현재는 "성과 편차 91% vs 41%" 힌트만 존재
  - 독일 Ahnenerbe 계승자 조직이 숨겨진 드라이버라는 내용 추가 (🟡 HINT 레벨)
- **공개 레벨**: 🟡 HINT

### 3. 북한 블랙존 Observer 진실 → akashic 추가 엔트리
- **자료**: `korea-gov/TIU-KOREA-NORTH.md` §진실
- **제안 적용**: `akashic.html`에 ENTRY #004 추가
  - "북한 블랙존은 EV-Σ가 아니다 — Observer의 시공간 능력 오작동"
  - 단, "Observer"라는 단어는 사용 불가 (PRIVATE 영역). "관측자의 능력 한계" 같은 간접 표현으로
- **공개 레벨**: 🔴 OBSERVER

### 4. 의식 흔적 데이터 → akashic ENTRY #002 강화
- **자료**: `korea-gov/TIU-KOREA-VARIANT.md` §6 + ARCHIVE-ENTRIES #002
- **현재 상태**: 이미 akashic.html에 반영되어 있으나 수위가 낮음
- **제안**: 의료진 내부 메모 추가, 삭제 명령 세부 묘사 보강

### 5. 메리디안 소바리 조사팀 캐릭터 프로필
- **자료**: `sovari/TIU-SOVARI-FIELD-LOG.md` 8인 캐릭터
- **제안 적용**: `profiles.html`에 5명 추가
  - Dr. Adama Sékou, Jonas Brandt, Yuki Tanaka, Moussa Traoré, Idrissa Diallo
  - 원주민 3인 (Nyame, Fadima, Oumar)은 별도 민간인 카테고리
- **공개 레벨**: 🟢 PUBLIC

### 6. Elena Richter 확장
- **자료**: `nations/TIU-MERIDIAN-GROUP.md`
- **제안**: profiles에 이미 존재. 프로필 desc/notes에 Meridian 사업 구조 요약 추가

---

## 💡 v3 마이그레이션 시 처리 (보류)

### A. 한국 경제·사회 심층 문서
- `korea-gov/TIU-KOREA-ECONOMY.md` (19KB)
- `korea-gov/TIU-KOREA-SOCIETY.md` (20KB)
- **이유**: v2의 region-korea.html은 이미 166줄로 포화. v3에서 `/korea/` 하위 페이지로 분리 필요 (economy, society, military, politics 별도)

### B. 중국 사회·경제 확장
- `nations/TIU-CHINA-ECONOMY.md`
- `nations/TIU-CHINA-SOCIAL.md`
- **이유**: v2의 region-red-veil.html은 봉쇄 지대 중심. 중국 본토 사회 구조는 별도 구조 필요

### C. 미국 사회·ARES 상세
- `nations/TIU-USA-SOCIETY.md`
- `nations/TIU-USA-ORACLE-REPORT.md`
- **이유**: region-philadelphia와 분리되어야 함. 미국 전체 관점 페이지가 별도로 존재해야 맞음

### D. 캐릭터 바이블의 v1 14인 이미지 매핑
- `worldbuilding/TIU-CHARACTER-BIBLE.md` §이미지 인벤토리
- **이유**: 8인 이미지 미확보 (VRAETH, SOLVEK, CATHARI, VAREK, 소바리 팀 4인)

### E. L3 기술 상세
- `worldbuilding/TIU-L3-TECHNOLOGY.md`
- **이유**: 현재 factions.html에 요약만. `protocols.html` 또는 별도 기술 페이지 필요

---

## 🚫 의도적으로 반영하지 않는 것

### ⚫ PRIVATE — 영구 비공개
- ORACLE 시간 기원 (Observer 과거 배치)
- Observer 능력 불완전성 (구조적 설명)
- CATHARI 진짜 소속 (VAREK 이식 명시)
- EXUVIA 드래곤 흡수 (단일 흡수가 수천 년 능력의 근원)
- ORACLE의 Shed Order 조종 (직접 서술)

**이유**: 독자가 "발견"해야 하는 숨은 의미. 문서로 확정하면 서사 텐션이 죽는다.

---

## 🔄 주기적 검토 항목

### 매 분기마다 검토
- 원본 자료에 업데이트가 있는지 확인 (사용자가 새 ZIP 전달 시)
- PENDING 항목 중 "이건 이제 v2에 넣어야겠다" 하는 게 있는지
- v3 마이그레이션 준비 진척도

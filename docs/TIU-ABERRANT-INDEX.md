# TIU-ABERRANT-INDEX — 변이체 색인 총괄

> 통칭: ABERRANT (이탈체)  최종 업데이트: 2026-04-11

## 분류 체계

| 타입 | 명칭 | 성격 | 파일 |
|---|---|---|---|
| **M-TYPE** | MUTATION (변이) | 개체 단위 변이. 감염 단계별 분화 | TIU-ABERRANT-M.md |
| **H-TYPE** | HIVE (군체) | 집단 의식. 기본적으로 독립 의지 없음 | TIU-ABERRANT-H.md |
| **S-TYPE** | SPREADER (확산) | 광역 확산 기능. 고정형 또는 비실체 | TIU-ABERRANT-S.md |
| **X-TYPE** | APEX (정점) | 분류 체계 상위. 대응 프로토콜 수립 불가 | TIU-ABERRANT-X.md |

> **상위 맥락:** EV-Σ의 기원, 자기 진화 특성, 숙주 종별 반응 차이에 관해서는 `TIU-EV-SIGMA-EVOLUTION.md` 참조.

## 전체 개체 목록

| ID | 명칭 | 타입 | 위협 | 이미지 |
|---|---|---|---|---|
| SPEC-001 | 감염체 마네킹 | M | CAUTION | ✅ |
| SPEC-002 | 경질화 개체 | M | DANGER | — |
| SPEC-003 | Brood Drone | H | DANGER(집단) | ✅ |
| SPEC-004 | Seed Spreader | S | CRITICAL | ✅ |
| SPEC-005 | Shell Walker | H | DANGER | — |
| SPEC-006 | EXUVIA | X-APEX | ██████ | ✅ |
| SPEC-007 | Phase 3 터미널 | M | CRITICAL | — |
| SPEC-008 | Spore Phantom | S | CAUTION | — |
| SPEC-009 | TS-Ω Core | X-APEX | ██████ | ✅ |
| SPEC-010 | Infiltrator Scale | M | DANGER | — |
| SPEC-011 | Shell Talker (쉘 토커) | H (자율) | HIGH | — |
| SPEC-012 | Blood Pit (블러드 핏) | M | DANGER (환경) | — |
| SPEC-013 | 결착체 (結着體) | M | DANGER | ✅ |
| SPEC-014 | 자이언트 (Giant) | M | DANGER | ✅ |
| SPEC-015 | 브레인 시커 (Brain Seeker) | H (자율) | HIGH / CRITICAL | ✅ |
| SPEC-016 | Beacon Swarm (비컨 스웜) | S | CAUTION / CRITICAL | ✅ |
| SPEC-017 | Shell Render (쉘 렌더) | H (조건부) | HIGH / CRITICAL | ✅ |

## EV-Σ 환경 조건

| 조건 | 효과 |
|---|---|
| 중간 온도/습도 | **활성 진화** — 최적 확산 |
| 저온 | **Dormant** — 억제. ⚠️ 제거가 아님 |
| 고온 | **구조 붕괴** — 사멸 |
| 극한 환경 | 비활성 또는 제거 |

> "억제는 제거가 아니다." 예외: 소바리 — 고온인데 사멸 안 함 (→ `TIU-SOVARI-NATION.md`)

## EV-Σ 감염 4단계

| Phase | 명칭 | 핵심 | 메커니즘 |
|---|---|---|---|
| 0 | 잠복 (24~72h) | 외부 증상 없음. 혈액 검사만 감지 | 프리온형 단백질 자기 변형 |
| 1 | 표면 변이 | 피부 경질화. 행동 정지(마네킹). 인지 유지, 감정 소실 | 군체 통신 회로 접속 시도 |
| 2 | 구조 변형 | 골격·근육 재편. 경질화 완료. 인지 대폭 저하 | — |
| 3 | 터미널 | 원래 종 소실. 비가역적 | HeLa형 무한 증식 |

## 종별 반응

| 종 | 반응 | 진화 분류 |
|---|---|---|
| 인간 | 경질화 / 정지 / 인지 저하 / 다양한 분기 | 편입 실패 — 개별 분화 |
| 거북 | 진화 가속 / 군체 확장 / 일부 개체 이탈 | 기본 설계 — 군체 편입 |
| 도마뱀 | 공격성 강화 / 탈피 촉진 / 거대화 분기 | 진화 분기 |

> 숙주 종별 반응 차이의 원인은 `TIU-EV-SIGMA-EVOLUTION.md` 2장 참조.

## 새 개체 추가 규칙

- ID: SPEC-018부터 순번 부여
- 해당 타입 파일에 추가 (M/H/S/X)
- 이 INDEX 파일의 전체 목록도 함께 업데이트
- 진화 이탈 개체(Evolutionary Divergence)는 `TIU-EV-SIGMA-EVOLUTION.md` 부록에도 등록
- 새로운 타입이 필요하면 새 파일 생성

관련: `TIU-ABERRANT-M/H/S/X.md`, `TIU-EV-SIGMA-EVOLUTION.md`

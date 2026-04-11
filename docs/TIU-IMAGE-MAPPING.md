# TIU 이미지 매핑 테이블

> 최종 업데이트: 2026-04-11
> 패키지: `TIU-ABERRANT-PACKAGE.zip`
> 총 22개 PNG (변이체 12 + 캐릭터/씬 10)

---

## 네이밍 규칙

**변이체:**
- 기본: `spec-[번호]-[영문명].png`
- CCTV 포맷: `spec-[번호]-[영문명]-cctv-[카메라번호].png`
- 동일 SPEC 다수: 접미사 `-v1`, `-victim`, `-field` 등

**캐릭터/씬:**
- 캐릭터: `character-[역할]-[성별+번호].png` (임시명, 캐릭터 바이블 확정 시 재리네임)
- 씬: `scene-[주제].png`

---

## 변이체 이미지 (12개, 9 SPEC)

| 파일명 | SPEC | 명칭 | 원본 UUID | 비고 |
|---|---|---|---|---|
| `spec-005-shell-walker-cctv-089.png` | SPEC-005 | Shell Walker | `3A84CF08` | CCTV-089, 숲 편대 정찰 |
| `spec-011-shell-talker-cctv-073.png` | SPEC-011 | Shell Talker | `A2D510ED` | CCTV-073, 본체, ALERT: HIGH |
| `spec-011-shell-talker-cctv-089.png` | SPEC-011 | Shell Talker | `AAE5641E` | CCTV-089, 희생자 + FALSE DISTRESS |
| `spec-011-shell-talker-field.png` | SPEC-011 | Shell Talker | `FD34509C` | 프레임 없는 필드 뷰 |
| `spec-012-blood-pit-cctv-089.png` ★ | SPEC-012 | Blood Pit | `8C910704` | 환경 단독 샷 (캐논 톤) |
| `spec-012-blood-pit-cctv-089-victim.png` | SPEC-012 | Blood Pit | `38AC746C` | 고착된 대원 포착 |
| `spec-013-bound-cctv-076.png` ★ | SPEC-013 | 결착체 | `22A9A12C` | 최종본, `20██-██-██` |
| `spec-013-bound-cctv-076-v1.png` | SPEC-013 | 결착체 | `D84CDF26` | 구버전, `08/16/21` (캐논 외) |
| `spec-014-giant.png` | SPEC-014 | 자이언트 | `94E10187` | 정글, 거대 테구 도마뱀 |
| `spec-015-brain-seeker.png` | SPEC-015 | 브레인 시커 | `87008FD6` | 하수구 직립 포식자 |
| `spec-016-beacon-swarm.png` | SPEC-016 | Beacon Swarm | `C51964D7` | 해파리 군집, 격자 발광 |
| `spec-017-shell-render.png` | SPEC-017 | Shell Render | `E8EA6D98` | 수생 / 확장 턱 |

**★ = 최종 채택 추천본**

---

## 캐릭터 / 씬 이미지 (10개)

| 파일명 | 분류 | 특징 | 원본 UUID |
|---|---|---|---|
| `character-scientist-f01.png` | 과학자 (여) | 단발 / 흰 가운 + 펜던트 / 차분한 포트레이트 | `90F58D58` |
| `character-scientist-f02.png` | 과학자 (여) | 긴 머리 포니테일 / 실험실 현장 | `A8159BDB` |
| `character-analyst-f01.png` | 분석가 (여) | 긴 머리 / 다크 셔츠 / 사무실 배경 | `5672027D` |
| `character-operator-m01.png` | 오퍼레이터 (남) | 안경 + 헤드셋 / 흰 가운 / 연구실 | `70ED0F6D` |
| `character-agent-m01.png` | 야전 요원 (남) | 차량 내부 / 담배 / 전술 조끼 / 서양인 | `13D5D188` |
| `character-director-m01.png` | 간부 (남) | 정장 + 타이 / 날카로운 눈매 / 서양인 | `31D55455` |
| `character-soldier-m01.png` | 군인 (남) | 얼굴 흉터 / 전술 장비 / 젊음 | `A8371216` |
| `character-soldier-m02.png` | 군인 (남) | 이마 흉터 / 전투 후 / 중년 | `8F0945F6` |
| `scene-sovari-landing.png` | 씬 | 해안 / 5인 실루엣 / 달밤 / 정글 입구 | `6137F752` |
| `scene-team-0457.png` | 씬 | 4인 실내 그룹 / 04:57 시계 | `396BF37F` |

---

## SPEC별 이미지 확보 현황

| SPEC | 명칭 | 이미지 | 파일 수 |
|---|---|---|---|
| SPEC-001 | 감염체 마네킹 | ❌ | 0 |
| SPEC-002 | 경질화 개체 | ❌ | 0 |
| SPEC-003 | Brood Drone | ❌ | 0 |
| SPEC-004 | Seed Spreader | ❌ | 0 |
| SPEC-005 | Shell Walker | ✅ | 1 |
| SPEC-006 | EXUVIA | ❌ | 0 |
| SPEC-007 | Phase 3 터미널 | ❌ | 0 |
| SPEC-008 | Spore Phantom | ❌ | 0 |
| SPEC-009 | TS-Ω Core | ❌ | 0 |
| SPEC-010 | Infiltrator Scale | ❌ | 0 |
| SPEC-011 | Shell Talker | ✅ | 3 |
| SPEC-012 | Blood Pit | ✅ | 2 |
| SPEC-013 | 결착체 | ✅ | 2 |
| SPEC-014 | 자이언트 | ✅ | 1 |
| SPEC-015 | 브레인 시커 | ✅ | 1 |
| SPEC-016 | Beacon Swarm | ✅ | 1 |
| SPEC-017 | Shell Render | ✅ | 1 |

**확보율**: 9/17 SPEC (53%)
**우선 생성 추천**: SPEC-001 마네킹, SPEC-009 TS-Ω Core

---

## 비고

- **Shell Talker가 3장으로 최다** — 메인 빌런급 서사 비중 반영
- **결착체 v1**은 구버전 타임스탬프로 캐논 외 상태지만 접미사로 보관
- **Blood Pit**: 환경 단독 샷(★)이 LOG-012B 톤에 가장 적합
- **군인 m01 / m02**: 얼굴 흉터 위치 유사 → 동일 인물 가능성, 캐릭터 바이블 확인 필요
- **과학자 f01 / f02**: 별개 인물로 보임
- **scene-team-0457**의 04:57 시계 = 특정 사건 타임스탬프 가능성

---

## 향후 재리네임 대상

캐릭터 바이블 확정 시 모든 `character-*.png` → 실제 캐릭터 이름 기반으로 재매핑 예정

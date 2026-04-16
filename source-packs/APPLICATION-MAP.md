# 자료 ↔ 사이트 페이지 매핑

> 각 원본 자료가 사이트의 어느 페이지/섹션에 적용되는지 정의하는 기준 문서.
> 작업 시 이 문서를 먼저 참조하여 **중복 적용, 자료-페이지 미스매치** 방지.

---

## 📍 페이지별 적용 맵

### `main.html` — ORACLE DB 허브
| 자료 | 적용 섹션 | 상태 |
|---|---|---|
| canon/ | 세계 개요 문장 | ✅ 반영 |
| nations/TIU-*-ORACLE-REPORT | Tactical Map 데이터 | 🟡 부분 |

### `index.html` — 입문 페이지
| 자료 | 적용 섹션 | 상태 |
|---|---|---|
| worldbuilding/TIU-L3-FOUNDATION | 4계층 구조 설명 | ✅ |
| worldbuilding/TIU-HUMAN-FACTIONS | 4대 세력 카드 | ✅ |
| korea-gov/ 전체 | 한국 97.3% 하이라이트 | ✅ |

### `factions.html` — 세력 페이지
| 자료 | 적용 섹션 | 상태 |
|---|---|---|
| worldbuilding/TIU-SHED-ORDER | Shed Order 본문 | ✅ |
| worldbuilding/TIU-L3-FACTIONS | Shed Order → L3 4종파 | ✅ |
| worldbuilding/TIU-L3-EXUVIA-COUNCIL | Shed Order → 삼두체제 | ✅ |
| worldbuilding/TIU-L3-KETH-ARUN | Shed Order → 케스아룬 요약 | ✅ |
| worldbuilding/TIU-L3-TURTLEFACTION | Shed Order → VAREK (VRETH'OL 종파) | ✅ |
| worldbuilding/TIU-HUMAN-FACTIONS | Human Irregular Factions 섹션 | ✅ |
| nations/TIU-MERIDIAN-GROUP | Meridian 글로벌 거점 보강 | ✅ |
| canon/ (COASTAL MIRROR) | Prometheus 섹션 31%/Weber | ✅ |

### `profiles.html` — 인물
| 자료 | 캐릭터 | 상태 |
|---|---|---|
| worldbuilding/TIU-CHARACTER-BIBLE | 기존 14인 | ✅ |
| worldbuilding/TIU-L3-EXUVIA-COUNCIL | VRAETH, SOLVEK, CATHARI | ✅ |
| worldbuilding/TIU-L3-TURTLEFACTION | VAREK | ✅ |
| canon/ | Marcus Weber | ✅ |
| korea-gov/TIU-KOREA-CHARACTERS | 최우진 대통령 | ✅ |
| canon/ + kr-section-officers | KR 간부진 5인 | ✅ |
| nations/TIU-EUROPEAN-UNION | Klaus Weber | ✅ |
| nations/TIU-USA-MILITARY | Dr. Alex Rivera | ✅ |

### `regions.html` + `region-*.html`
| 자료 | 페이지 | 상태 |
|---|---|---|
| nations/TIU-USA-* | region-philadelphia | ✅ (Project CRUCIBLE, Ember 급진화) |
| nations/TIU-RUSSIA | region-silent-belt | ✅ (BARRIER, Permafrost) |
| nations/TIU-CHINA | region-red-veil | ✅ (RDF, SFJ, Ascension 침투) |
| nations/TIU-JAPAN + -DEFENSE | region-japan | ✅ |
| nations/TIU-EUROPEAN-UNION | region-eu | ✅ |
| nations/TIU-GERMANY-AHNENERBE-SUCCESSOR | region-eu (힌트) | 🟡 힌트만 |
| korea-gov/ 전체 | region-korea (DG·NADL·정치) | ✅ |
| sovari/TIU-SOVARI + TIU-KARUNTAL | region-sovari | ✅ |
| sovari/TIU-SOVARI-FIELD-LOG | **미반영** (서브스토리용) | ⏳ PENDING |

### `kr-branch.html` + 파티션 6개
| 자료 | 섹션 | 상태 |
|---|---|---|
| canon/TIU_정론_스토리라인_v2 | kr-section-timeline (§3) | ✅ 완벽 일치 |
| korea-gov/TIU-KOREA-CHARACTERS (KR 간부진) | kr-section-officers (§2) | ✅ |
| 전체 | §0~§7 전체 구조 | ✅ |

### `incidents.html` + `incidents-data.js`
| 자료 | 사건 ID | 상태 |
|---|---|---|
| canon/ | INC-010 PROXY FRACTURE | ✅ |
| 기존 v1 | INC-001~009 | ✅ |
| sovari/FIELD-LOG | **미반영** (서브스토리 확장 시 추가) | ⏳ |
| korea-gov/ARCHIVE-ENTRIES | 광원 사건 등 → akashic에만 노출 | ✅ 의도적 회피 |

### `akashic.html` — 숨겨진 레이어 (🔴 OBSERVER)
| 자료 | 엔트리 | 상태 |
|---|---|---|
| korea-gov/TIU-ARCHIVE-ENTRIES | #001 광원 진상 | ✅ |
| korea-gov/TIU-ARCHIVE-ENTRIES | #002 의식 흔적 | ✅ |
| korea-gov/TIU-ARCHIVE-ENTRIES | #003 북한 귀환자 | ✅ |
| korea-gov/TIU-KOREA-NORTH (Observer 진실) | **미반영** — akashic 추가 엔트리 후보 | ⏳ |

---

## 🚫 적용 금지 자료

### ⚫ PRIVATE — 절대 사이트 노출 불가
- `worldbuilding/PRIVATE/CREATOR-NOTES-PRIVATE.md`
  - ORACLE 시간 기원 (Observer가 과거에 배치)
  - Observer 능력 불완전성 (DPRK 오작동)
  - CATHARI 진짜 소속 (VAREK 이식)
  - EXUVIA 드래곤 흡수
  - ORACLE의 Shed Order 조종
- 이 내용은 **작성 가이드로만 사용**. 페이지 작성 시 독자가 "읽어내야 하는" 숨은 의미로 심는다.

### 🔴 OBSERVER — akashic/kr-section-observer에만
- 북한 블랙존 = Observer 오작동 진실
- 광원 사건 민간 사상자 진상
- Phase 1+ 의식 잔재 데이터

### 🟡 HINT — 힌트만, 확정 노출 금지
- CATHARI 진짜 정체 → "이력 불일치 — 상세 미확인" 같은 플래그만
- Wei Liang 하이브 가설 → "신뢰도 41%" 등으로만
- Ahnenerbe 계승자 정체 → "설명 불가능한 성과 편차" 등으로만

---

## 🔗 자료 교차 참조 (동일 설정의 여러 출처)

| 설정 | 출처 파일들 | 최우선 참조 |
|---|---|---|
| White Shield 실체 | korea-gov/TIU-KOREA-MILITARY, -DAEGA, -WALL | TIU-KOREA-MILITARY |
| Meridian Group | worldbuilding/TIU-HUMAN-FACTIONS, nations/TIU-MERIDIAN-GROUP | **nations/TIU-MERIDIAN-GROUP** (더 상세) |
| Ember Corps | worldbuilding/TIU-HUMAN-FACTIONS, nations/TIU-USA-SOCIETY | 양쪽 병합 참조 |
| EU 성과 편차 | nations/TIU-EUROPEAN-UNION, TIU-GERMANY-AHNENERBE-SUCCESSOR | 양쪽 병합 (독일 건은 힌트만) |
| Phase 시스템 | korea-gov/TIU-KOREA-VARIANT, 기존 TIU-WORLDBUILDING-BIBLE | TIU-KOREA-VARIANT (최신) |

**충돌 시 우선순위**: canon/ > korea-gov/ > nations/ > worldbuilding/ > sovari/

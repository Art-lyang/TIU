# TIU: KR-INIT-001 — 림월드 모드

TIU(The Interconnected Universe) 세계관의 **KR-INIT-001 ORACLE SYSTEM MANUAL** 공개 교본을 바탕으로 만든 림월드(RimWorld) 콘텐츠 모드입니다. 순수 XML 모드라 별도 컴파일이 필요 없습니다.

## 폴더 위치

```
rimworld-mod/TIU-KR-INIT-001/
```

이 `TIU-KR-INIT-001` 폴더를 통째로 림월드 Mods 디렉터리에 복사하면 됩니다.

- Windows: `C:\Program Files (x86)\Steam\steamapps\common\RimWorld\Mods\`
- macOS: `~/Library/Application Support/Steam/steamapps/common/RimWorld/Mods/`
- Linux: `~/.steam/steam/steamapps/common/RimWorld/Mods/`

복사 후 게임 내 **모드 메뉴**에서 활성화하고 재시작하세요.

## 추가되는 콘텐츠

| 분류 | 이름 | 비고 |
|------|------|------|
| 세력 | 화이트실드 / NADL | 우호 세력 (특재사 SDAC 현장 대응) — 교역·동맹 가능 |
| 세력 | 이변체 / ABERRANT | 영구 적대 세력 — 습격 출현 |
| 이변체 | 마네킹 (SPEC-001) | 인간형 위장, 근접 |
| 이변체 | 브루드 드론 (SPEC-003) | 군체·고속 추격 |
| 이변체 | 쉘 토커 (SPEC-011) | 고위험 대형 개체 |
| 무기 | NADL 제식 소총 | 3점사 산업기 화기 |
| 방어구 | 화이트실드 방호복 | 중간 레이어, 대근접/대오염 |
| 의약품 | EV-Σ 억제제 | 투여 시 `EV-Σ 억제` 버프 (독성·면역 저항) |
| 연구 | 한국방벽 대응 프로토콜 | 위 무기·방어구·억제제 제작 잠금 해제 |

## 호환 버전

- RimWorld 1.5
- RimWorld 1.6

## 텍스처에 대하여

현재는 핑크 박스(텍스처 누락)를 막기 위해 **바닐라 텍스처를 재사용**합니다.

- 이변체 → 바닐라 곤충형(메가거미/스펠로피드/메가풍뎅이) 그래픽
- NADL 제식 소총 → 돌격소총 아이콘
- 화이트실드 방호복 → 방탄조끼 그래픽
- EV-Σ 억제제 → 페녹시실린 아이콘

전용 아트가 준비되면 `TIU-KR-INIT-001/Textures/` 폴더에 같은 상대 경로로 추가하고, 각 def의 `texPath`를 새 경로로 바꾸면 됩니다.

## 세계관 출처

본 모드의 고유명사·설정은 저장소 루트의 다음 공개 교본 페이지에서 확인 가능한 범위만 사용했습니다.

- `index.html`, `world.html`, `database.html` (KR-INIT-001 ORACLE SYSTEM MANUAL)

기원급 기록, 상위 구조, 잠금(LV5) 정보 등 비공개 범위는 포함하지 않았습니다.

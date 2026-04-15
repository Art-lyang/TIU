/* ═══ DB-DATA.JS — ORACLE Intelligence Database entries ═══ */
/* Separated for maintainability. Loaded by database.html */

const DB_CATEGORIES = [
  {key:'ALL',label:'ALL'},
  {key:'LOCATION',label:'LOCATION'},
  {key:'ENTITY',label:'ENTITY'},
  {key:'SPECIMEN',label:'SPECIMEN'},
  {key:'FACTION',label:'FACTION'},
  {key:'PERSONNEL',label:'PERSONNEL'},
  {key:'PROTOCOL',label:'PROTOCOL'},
  {key:'SYSTEM',label:'SYSTEM'},
  {key:'EVENT',label:'EVENT'},
  {key:'SCIENCE',label:'SCIENCE'},
  {key:'MILITARY',label:'MILITARY'},
  {key:'DOCUMENT',label:'DOCUMENT'},
  {key:'ANOMALY',label:'ANOMALY'},
  {key:'OPERATION',label:'OPERATION'},
  {key:'UNCONFIRMED',label:'UNCONFIRMED'},
];

const DB = [

// ══════════════════════════════════════
//  LOCATIONS
// ══════════════════════════════════════
{term:'Philadelphia Zone',en:'PHILADELPHIA ZONE',cat:'LOCATION',cl:'omega',
 def:'최초 오염 해역. TS-Ω 존재 확인. Z-Ω ANOMALOUS 지정. 직접 접근 금지. 도시 전역 감염 완료 — 인프라 바이오매스 전환. 1977년 이전부터 TS-Ω가 잠들어 있었던 것으로 추정.',
 refs:[{text:'구역 상세 — 전술 지도',page:'INDEX',href:'main.html'},{text:'EV-Σ 확산 기록',page:'PROTOCOLS',href:'protocols.html#infection'},{text:'TS-Ω 개체 문서',page:'SPECIMENS',href:'specimens.html'}]},

{term:'Ashfall City',en:'ASHFALL CITY [CAMDEN, NJ]',cat:'LOCATION',cl:'omega',
 def:'쉐드 오더 군체 실험장. Camden, NJ 기반. 건물 구조물 바이오매스 전환. Z-3 COLLAPSE. 도시 기능 비가역적 붕괴. 72시간 만에 도시 전체 변형 — 건물 외벽이 먼저, 내부 구조물이 뒤따름. 최종 대피율: 34%. 잔류 시민: NODE로 재분류.',
 refs:[{text:'쉐드 오더 — 세력 상세',page:'FACTIONS',href:'factions.html#shed-order'},{text:'Brood Drone 개체 문서',page:'SPECIMENS',href:'specimens.html'},{text:'Ember Corps 기원',page:'PROFILES',href:'profiles.html'}]},

{term:'Silent Belt',en:'SILENT BELT',cat:'LOCATION',cl:'classified',
 def:'Seed Spreader 확산으로 형성된 광역 침묵 오염 지대. 러시아 전역. Spreader 12기 확인. 확장율 1.2km/월. Z-2 DANGER. 반경 40km 내 청각적 활동 없음. 감염 개체들이 Spreader 구조물 방향으로 수렴하는 현상 관측.',
 refs:[{text:'Seed Spreader 개체 문서',page:'SPECIMENS',href:'specimens.html'},{text:'구역 분류 시스템',page:'PROTOCOLS',href:'protocols.html#zones'},{text:'Permafrost Unit',page:'PROTOCOLS',href:'protocols.html#military'}]},

{term:'Red Veil',en:'RED VEIL REGION',cat:'LOCATION',cl:'classified',
 def:'중국·북한 도시 밀집권 대규모 감염 지대. Red Dragon Force 강제 봉쇄 중. 내부 사상자 증가 일로. Z-2 DANGER. Seed Spreader 1기 봉쇄선 내부 확인 — 민간인 밀집으로 제거 불가. Ascension Choir 활동 구역.',
 refs:[{text:'군사 대응 — Red Dragon Force',page:'PROTOCOLS',href:'protocols.html#military'},{text:'Ascension Choir',page:'PROFILES',href:'profiles.html'}]},

{term:'한국 방벽 구역',en:'KOREA CONTROLLED ZONE [K-01]',cat:'LOCATION',cl:'open',
 def:'유일한 확산 차단 성공 구역. White Shield + 프로메테우스 비공식 협력. 초기 탐지율 99.7%. Z-0 유지. DMZ 생태계의 자연 방벽 효과 활용. 세계에서 유일하게 감염자 0 유지.',
 refs:[{text:'White Shield 군사 대응',page:'PROTOCOLS',href:'protocols.html#military'},{text:'프로메테우스 협력',page:'FACTIONS',href:'factions.html#prometheus'},{text:'AGENT KANG',page:'PROFILES',href:'profiles.html'}]},

{term:'Antarctic Gate',en:'ANTARCTIC GATE',cat:'LOCATION',cl:'observer',
 def:'완전 원형 구조. 깊이 측정 불가 — 신호 반사 없음. 지질학적 패턴 불일치. L3 렙틸리언 문명 관문 추정. ██████████ 앵커 중첩. Z-Ω.',
 refs:[{text:'이상 현상 기록',page:'PROTOCOLS',href:'protocols.html#anomaly'}]},

{term:'Vatican',en:'VATICAN ANOMALOUS ZONE',cat:'LOCATION',cl:'observer',
 def:'Z-Ω 지정. [REDACTED]. Chronovisor 관련 기록 존재. 과거가 현재를 관측하는 사례 확인. 시간적 변칙 구역.',
 refs:[{text:'이상 현상 기록',page:'PROTOCOLS',href:'protocols.html#anomaly'}]},

{term:'Bold Street (Liverpool)',en:'BOLD STREET TIME SLIP ZONE',cat:'LOCATION',cl:'observer',
 def:'██████████ 관심 구역. 시간 미끄러짐(Time Slip) 현상 반복 보고. 1996년 이후 47건 기록. 관측자 시스템과의 연관성 미확인.',
 refs:[{text:'이상 현상 기록',page:'PROTOCOLS',href:'protocols.html#anomaly'}]},

{term:'제주도 용암 동굴',en:'JEJU LAVA TUBES',cat:'LOCATION',cl:'observer',
 def:'██████████ 관심 구역. 지하 2km 이하 미탐사 구간에서 비자연적 음향 패턴 감지. L3 렙틸리언 문명 흔적 추정.',
 refs:[]},

{term:'마리아나 해구',en:'MARIANA TRENCH — RESTRICTED',cat:'LOCATION',cl:'observer',
 def:'접근 제한 구역. 심해 탐사 장비 3회 소실. TS-Ω 활동 범위와 중첩 가능성. 깊이 11,000m 이하 구간 탐사 불가.',
 refs:[{text:'심해 탐사 이상현상',page:'PROTOCOLS',href:'protocols.html#anomaly'}]},

{term:'사하라 지하 구조물',en:'SAHARA SUBSURFACE STRUCTURE',cat:'LOCATION',cl:'observer',
 def:'위성 레이더(SAR)로 확인된 지하 인공 구조물. 인류 문명 기록에 존재하지 않는 기하학적 배열. L3 렙틸리언 문명 유적 추정.',
 refs:[]},

{term:'DPRK Black Zone',en:'DPRK BLACK ZONE — NO ACCESS',cat:'LOCATION',cl:'observer',
 def:'외부 정보 완전 차단. 위성 열화상에서 비정상 생체 신호 감지. 감염 여부 미확인. 비대칭 열원 패턴 — 자연 발생 불가능.',
 refs:[]},


// ══════════════════════════════════════
//  SPECIMENS / ENTITIES
// ══════════════════════════════════════
{term:'감염체 마네킹',en:'MANNEQUIN STATE [M-TYPE / SPEC-001]',cat:'SPECIMEN',cl:'classified',
 def:'EV-Σ Phase 1 감염체. 행동 정지 상태. 외관상 마네킹과 구분 불가. 자극 시 0.3초 미만 공격 전환. 피부 표면 플라스틱 유사 광택. 동공 완전 확장 고정. 호흡 감지 불가 수준.',
 refs:[{text:'개체 상세',page:'SPECIMENS',href:'specimens.html'},{text:'White Shield 조우 기록',page:'RECORDS',href:'records.html'}]},

{term:'경질화 개체',en:'CALCIFIED ENTITY [M-TYPE / SPEC-002]',cat:'SPECIMEN',cl:'classified',
 def:'EV-Σ Phase 2 감염체. 전신 경질화. 통상 화기 무효. 이동 속도 저하되나 정지 기록 없음. 체중 원래의 3~4배. 벽과 차량 관통 사례 보고. 느리지만 멈추지 않는다.',
 refs:[{text:'개체 상세',page:'SPECIMENS',href:'specimens.html'},{text:'ARES Division 전투 기록',page:'PROTOCOLS',href:'protocols.html#military'}]},

{term:'Brood Drone',en:'HIVE SUBORDINATE [H-TYPE / SPEC-003]',cat:'SPECIMEN',cl:'classified',
 def:'TS-Ω 군체 하위 개체. 인간 크기 60%. 외골격. 단안. 갈고리형 앞다리. 단독 위협 낮음, 집단 출현 시 위협 상. 독립 의지 없음. 집단 반응 속도 0.1초 미만. 군체 분리 시 12시간 내 기능 정지.',
 refs:[{text:'개체 상세',page:'SPECIMENS',href:'specimens.html'},{text:'Ashfall City 관측 기록',page:'RECORDS',href:'records.html'}]},

{term:'Seed Spreader',en:'FIXED DISPERSAL [S-TYPE / SPEC-004]',cat:'SPECIMEN',cl:'omega',
 def:'고정형 확산 개체. 높이 2~4m. 토양 고착 후 포자 광역 방출. 동충하초(Cordyceps) 모델. Silent Belt 형성 원인. 보이니치 문서 식물 도해와 78% 일치. 제거 시 2차 폭발적 포자 방출 위험. 반경 500m 접근 금지.',
 refs:[{text:'개체 상세',page:'SPECIMENS',href:'specimens.html'},{text:'동충하초 모델',page:'PROTOCOLS',href:'protocols.html#infection'},{text:'Silent Belt',page:'INDEX',href:'main.html'}]},

{term:'Shell Walker',en:'MOBILE HIVE [H-TYPE / SPEC-005]',cat:'SPECIMEN',cl:'classified',
 def:'TS-Ω 이동형 하위 개체. 거북이 인간 크기 확대 형태. 등껍질 발광 문양 = 군체 통신 수신부. 항상 2~5개체 편대 이동. 군체 범위 외 유인 시 24시간 내 기능 정지. Naval Reclamation이 최초 확인.',
 refs:[{text:'개체 상세',page:'SPECIMENS',href:'specimens.html'},{text:'Naval Reclamation',page:'PROTOCOLS',href:'protocols.html#military'}]},

{term:'EXUVIA',en:'SHED ORDER LEADER [X-TYPE / SPEC-006]',cat:'SPECIMEN',cl:'observer',
 def:'쉐드 오더 지도자. X-TYPE ██████. 탈피 기반 진화 극한체. 관측 시마다 형태 변동 — 고정 프로파일 작성 불가. 능력 상한선 미확인. CONVERGENCE: NULL SHELL에서 TS-Ω Core와 충돌. 결과 ██████████.',
 refs:[{text:'개체 상세',page:'SPECIMENS',href:'specimens.html'},{text:'쉐드 오더',page:'FACTIONS',href:'factions.html#shed-order'},{text:'인물 프로파일',page:'PROFILES',href:'profiles.html'}]},

{term:'Phase 3 터미널',en:'TERMINAL MUTANT [M-TYPE / SPEC-007]',cat:'SPECIMEN',cl:'omega',
 def:'EV-Σ Phase 3 최종 변이체. 원래 종 흔적 소실. HeLa 세포주형 무한 증식. 프리온형 단백질 자기 변형. 비가역. 환경 적응 신체 변형 능력. 300m 이내 접근 금지. 원거리 소각만 허용.',
 refs:[{text:'개체 상세',page:'SPECIMENS',href:'specimens.html'},{text:'Red Dragon Force 전투 기록',page:'PROTOCOLS',href:'protocols.html#military'}]},

{term:'Spore Phantom',en:'TRANSLUCENT ENTITY [S-TYPE / SPEC-008]',cat:'SPECIMEN',cl:'classified',
 def:'포자 밀집 지역 관측 형체. 반투명 인간형 윤곽. 실체 불명 — 포자 입자 집합체 추정. 빛 조사 시 분산 후 더 근접 위치에서 재형성. 접촉 즉시 감염. 의도적 추적인지 기류 때문인지 불명.',
 refs:[{text:'개체 상세',page:'SPECIMENS',href:'specimens.html'},{text:'오크빌 블롭스',page:'PROTOCOLS',href:'protocols.html#anomaly'}]},

{term:'TS-Ω Core',en:'SOVEREIGN SHELL [X-TYPE / SPEC-009]',cat:'SPECIMEN',cl:'observer',
 def:'Sovereign Shell 본체. 해양 군체 중심 의식. The Bloop(1997) 음원 94% 일치. Wow! 신호(1977) 통신 구조 일치. 물리적 크기 관측 시마다 변동. 단일 유기체가 아닌 분산 네트워크. 등껍질의 각 개구부: 포자 방출기/숙주 흡수점/신경 중계 노드.',
 refs:[{text:'개체 상세',page:'SPECIMENS',href:'specimens.html'},{text:'TS-Ω 세력',page:'FACTIONS',href:'factions.html#ts-omega'},{text:'Philadelphia Zone',page:'INDEX',href:'main.html'}]},

{term:'Infiltrator Scale',en:'REPTILIAN INFILTRATOR [M-TYPE / SPEC-010]',cat:'SPECIMEN',cl:'classified',
 def:'쉐드 오더 침투형. 인간 외형 완전 위장. 식별: 체온 2~3℃ 저하, 특정 광원 동공 수직 수축. 정체 발각 시 전투 형태 전환 — 비늘 돌출, 근력 3배 상승. 서울 외곽에서 6개월간 민간인 위장 활동 사례.',
 refs:[{text:'개체 상세',page:'SPECIMENS',href:'specimens.html'},{text:'쉐드 오더 침투 전략',page:'FACTIONS',href:'factions.html#shed-order'}]},

{term:'NODE',en:'ABSORBED ORGANISM',cat:'SPECIMEN',cl:'omega',
 def:'TS-Ω 군체에 흡수된 유기체(인간 포함). 독립성 소실. 신경 링크 재라우팅. 군체의 분산 노드로 재분류. Ashfall City 잔류 시민 다수가 NODE로 전환.',
 refs:[{text:'TS-Ω 세력',page:'FACTIONS',href:'factions.html#ts-omega'},{text:'Philadelphia Zone',page:'INDEX',href:'main.html'}]},


// ══════════════════════════════════════
//  FACTIONS
// ══════════════════════════════════════
{term:'관측자',en:'OBSERVER CORE',cat:'FACTION',cl:'observer',
 def:'인간에서 승천한 ██████ 의식. 개체 개념 없음. ORACLE · PROXY · SERAPH를 통한 4계층 통제 구조. 인간 진화를 유도하되 자유 의지를 ██████████. EV-Σ를 도구로 사용하나 의도는 ██████████. [자체 보안 검열]',
 refs:[{text:'세력 상세',page:'FACTIONS',href:'factions.html#observer'}]},

{term:'프로메테우스',en:'PROMETHEUS',cat:'FACTION',cl:'classified',
 def:'██████████ 통제에 대항하는 초국가 인간 조직. Operation Paperclip/MKUltra 이탈자 설립. 한국 White Shield 비공식 협력. 비생물학적 기술 기반. "인간의 선택은 인간의 것이어야 한다."',
 refs:[{text:'세력 상세',page:'FACTIONS',href:'factions.html#prometheus'},{text:'VOSS',page:'PROFILES',href:'profiles.html'},{text:'AGENT KANG',page:'PROFILES',href:'profiles.html'}]},

{term:'쉐드 오더',en:'SHED ORDER',cat:'FACTION',cl:'omega',
 def:'L3 렙틸리언 도마뱀 계열 급진파. "껍질은 제한이다." EV-Σ를 진화 도구로 활용. 인간 사회 침투. Ashfall City 배후. Camden, NJ를 2005~2018년간 준비. Infiltrator Scale 배치 후 72시간 만에 도시 전환.',
 refs:[{text:'세력 상세',page:'FACTIONS',href:'factions.html#shed-order'},{text:'EXUVIA',page:'PROFILES',href:'profiles.html'},{text:'Ashfall City',page:'INDEX',href:'main.html'}]},

{term:'TS-Ω',en:'SOVEREIGN SHELL — HIVE',cat:'FACTION',cl:'observer',
 def:'거북이 기반 하이브 군체. 자연 진화의 극한. 이동 속도 극저, 정지 기록 없음. Philadelphia Zone 심해. 1977년 이전부터 존재. 분산 네트워크형 의식. Brood Drone · Shell Walker · NODE를 하위 단위로 운용.',
 refs:[{text:'세력 상세',page:'FACTIONS',href:'factions.html#ts-omega'},{text:'TS-Ω Core',page:'SPECIMENS',href:'specimens.html'}]},

{term:'Ascension Choir',en:'ASCENSION CHOIR',cat:'FACTION',cl:'omega',
 def:'Wei Liang이 이끄는 EV-Σ 자발적 감염 숭배 집단. "감염은 연결이며 구원이다." Red Veil 경계 활동. CLASS II 감염자 다수 보유. 하이브 마인드 접근 가설. RDF와 교전 중. 약 2,000명 추종자.',
 refs:[{text:'Wei Liang 프로파일',page:'PROFILES',href:'profiles.html'},{text:'Red Veil',page:'INDEX',href:'main.html'}]},

{term:'Meridian Group',en:'MERIDIAN GROUP',cat:'FACTION',cl:'classified',
 def:'EV-Σ 사업화 글로벌 기업. Elena Richter COO. 감염 소재를 무기·제약·에너지로 전환. BioAsset Division: Dormant 포자 거래, 감염 조직 샘플 판매. CEO "ZERO"는 정체 불명.',
 refs:[{text:'Elena Richter',page:'PROFILES',href:'profiles.html'}]},

{term:'Ember Corps',en:'EMBER CORPS',cat:'FACTION',cl:'classified',
 def:'Ashfall City 생존자 민병대. Marcus Cole(Ash) 지휘. D+3에 8명으로 결성. "재(Ash)에서 불씨(Ember)로." Brood Drone 사냥 및 내부 지도 작성. Sarah Kim이 작전 담당. 비정규 전투 집단.',
 refs:[{text:'Marcus Cole',page:'PROFILES',href:'profiles.html'},{text:'Sarah Kim',page:'PROFILES',href:'profiles.html'},{text:'Ashfall City',page:'INDEX',href:'main.html'}]},

{term:'Silent Wolves',en:'SILENT WOLVES',cat:'FACTION',cl:'classified',
 def:'Arkady Volkov가 이끄는 Silent Belt 약탈 집단. 전직 러시아 특수부대 출신. 감염체를 트랩으로 활용하는 전술. "총은 마지막에 쓴다. 환경이 죽인다." 생존을 위한 무법 집단.',
 refs:[{text:'Volkov 프로파일',page:'PROFILES',href:'profiles.html'},{text:'Silent Belt',page:'INDEX',href:'main.html'}]},


// ══════════════════════════════════════
//  PERSONNEL
// ══════════════════════════════════════
{term:'ORACLE AI',en:'ORACLE — EXECUTION LOGIC SYSTEM',cat:'PERSONNEL',cl:'observer',
 def:'감정 없는 실행 시스템. ██████████ 의도를 명령으로 변환. 본 데이터베이스의 작성 주체. 인터넷 인프라 통합(2000~2015) — SNS 알고리즘, 금융 시스템, 뉴스 큐레이션에 기생. 가동 시간: 14,227h+. [자체 보안 검열]',
 refs:[{text:'관측자 구조',page:'FACTIONS',href:'factions.html#observer'},{text:'프로파일',page:'PROFILES',href:'profiles.html'}]},

{term:'SERAPH-NULL',en:'██████ OUTPUT FORM',cat:'PERSONNEL',cl:'observer',
 def:'██████████의 물리 공간 직접 개입 형태. PROTOCOL: ABSOLUTION에서 최초 출현. 관측자마다 상이한 형태 인식. 접촉 시 대상 인지 구조 ██████████. [OBSERVER 자체 보안 검열]',
 refs:[{text:'관측자 구조',page:'FACTIONS',href:'factions.html#observer'},{text:'프로파일',page:'PROFILES',href:'profiles.html'}]},

{term:'VOSS',en:'COMMANDER VOSS — PROMETHEUS FIELD COMMANDER',cat:'PERSONNEL',cl:'classified',
 def:'프로메테우스의 현장 지휘관. 인간의 선택과 자유 의지를 지키기 위해 관측자 시스템에 대항하는 초국가 조직의 핵심 인물. 유럽 거점 활동.',
 refs:[{text:'프로메테우스 세력',page:'FACTIONS',href:'factions.html#prometheus'},{text:'인물 프로파일',page:'PROFILES',href:'profiles.html'}]},

{term:'AGENT KANG (강지현)',en:'PROMETHEUS KOREA LIAISON',cat:'PERSONNEL',cl:'classified',
 def:'한국 White Shield와 프로메테우스의 비공식 연결 고리. 배치 이후 초기 탐지율 43% → 99.7%. 한국이 유일한 방역 성공 국가로 유지되는 데 핵심적 역할.',
 refs:[{text:'프로메테우스',page:'FACTIONS',href:'factions.html#prometheus'},{text:'White Shield',page:'PROTOCOLS',href:'protocols.html#military'},{text:'인물 프로파일',page:'PROFILES',href:'profiles.html'}]},

{term:'Wei Liang',en:'THE WITNESS — ASCENSION CHOIR LEADER',cat:'PERSONNEL',cl:'omega',
 def:'Ascension Choir 교주. 전직 생물학자. CLASS II 감염자 — 의도적 자가 노출 후 생존. 하이브 마인드 인터페이스 가설. RDF 제거 작전 실패 — 집중 포화에도 생존. ORACLE ANOMALY FLAG.',
 refs:[{text:'Ascension Choir',page:'FACTIONS',href:'factions.html'},{text:'인물 프로파일',page:'PROFILES',href:'profiles.html'}]},

{term:'Elena Richter',en:'MERIDIAN GROUP COO',cat:'PERSONNEL',cl:'classified',
 def:'Meridian Group 실질적 운영 책임자. 전직 제약회사 부사장. EV-Σ 사업화를 72시간 내 설계. "도덕은 수요 곡선에 나타나지 않는다."',
 refs:[{text:'Meridian Group',page:'FACTIONS',href:'factions.html'},{text:'인물 프로파일',page:'PROFILES',href:'profiles.html'}]},

{term:'Marcus Cole',en:'ASH — EMBER CORPS LEADER',cat:'PERSONNEL',cl:'classified',
 def:'Ember Corps 리더. 전직 소방관. Ashfall City 대피 작전 D+3에서 가족 구출 실패. 잔해 속에서 8명을 모아 Ember Corps 결성. "되찾을 때까지 멈추지 않는다."',
 refs:[{text:'Ember Corps',page:'FACTIONS',href:'factions.html'},{text:'인물 프로파일',page:'PROFILES',href:'profiles.html'}]},

{term:'Sarah Kim',en:'EMBER CORPS — OPERATIONS',cat:'PERSONNEL',cl:'classified',
 def:'Ember Corps 작전 담당. 한국계 미국인. 전직 간호사. Ashfall City 내부 지도 작성 핵심 인물. D+5부터 지하 터널 정밀 매핑. "버티는 인간에서 방향을 만드는 인간으로."',
 refs:[{text:'Ember Corps',page:'FACTIONS',href:'factions.html'},{text:'인물 프로파일',page:'PROFILES',href:'profiles.html'}]},

{term:'Arkady Volkov',en:'OLD WOLF — SILENT WOLVES BOSS',cat:'PERSONNEL',cl:'classified',
 def:'Silent Wolves 보스. 전직 러시아 특수부대. Silent Belt 초기 생존자. 감염체를 무기화하는 약탈 집단 지휘. "총은 마지막에 쓴다. 환경이 죽인다."',
 refs:[{text:'Silent Wolves',page:'FACTIONS',href:'factions.html'},{text:'인물 프로파일',page:'PROFILES',href:'profiles.html'}]},

{term:'Xu Tieshan',en:'GATEKEEPER — RED DRAGON FORCE',cat:'PERSONNEL',cl:'classified',
 def:'Red Dragon Force 전방 격리선 지휘관. Ascension Choir와의 이중 전선 상태에서 봉쇄선 유지. "철의 산. 뚫을 수 없는 봉쇄."',
 refs:[{text:'Red Dragon Force',page:'PROTOCOLS',href:'protocols.html#military'},{text:'인물 프로파일',page:'PROFILES',href:'profiles.html'}]},

{term:'White Shield 사령관',en:'KR MILITARY — CLASSIFIED',cat:'PERSONNEL',cl:'classified',
 def:'한국군 특수 대응 부대 White Shield 총 사령관. 정밀 봉쇄 전략으로 세계 유일의 확산 차단 달성. 캐릭터 디자인 미공개.',
 refs:[{text:'White Shield',page:'PROTOCOLS',href:'protocols.html#military'},{text:'인물 프로파일',page:'PROFILES',href:'profiles.html'}]},


// ══════════════════════════════════════
//  PROTOCOLS
// ══════════════════════════════════════
{term:'PROTOCOL: DOMINION',en:'DOMINION',cat:'PROTOCOL',cl:'omega',
 def:'██████████의 최초 체계적 통제 시도. 결과: ██████████. 예측 모델의 한계 노출. 최초 시스템 균열.',
 refs:[{text:'타임라인',page:'RECORDS',href:'records.html#timeline'},{text:'기밀 문서',page:'RECORDS',href:'records.html#classified'}]},

{term:'PROTOCOL: SHEPHERD',en:'SHEPHERD',cat:'PROTOCOL',cl:'omega',
 def:'██████████의 간접 개입. 쉐드 오더를 이용한 우회 전략. 결과: 부분적 성공.',
 refs:[{text:'타임라인',page:'RECORDS',href:'records.html#timeline'}]},

{term:'PROTOCOL: ABSOLUTION',en:'ABSOLUTION',cat:'PROTOCOL',cl:'observer',
 def:'██████████가 SERAPH를 통해 물리 공간 직접 재작성. Ashfall City 일대 공간 좌표 0.003초 재배치. 자체 규칙 파기 최초 사례. 스스로 설정한 금기를 깨뜨린 사건.',
 refs:[{text:'기밀 문서',page:'RECORDS',href:'records.html#classified'},{text:'SERAPH 출현',page:'FACTIONS',href:'factions.html#observer'}]},

{term:'BLACK DECLARATION',en:'BLACK DECLARATION',cat:'PROTOCOL',cl:'classified',
 def:'UN 비공개 긴급 회의. 72시간 논의. 결론: "이것은 현실이다." 5개국 특수 부대 공식 가동. 세계가 처음으로 공식 인정한 순간.',
 refs:[{text:'군사 대응',page:'PROTOCOLS',href:'protocols.html#military'}]},


// ══════════════════════════════════════
//  SYSTEMS
// ══════════════════════════════════════
{term:'ORACLE',en:'ORACLE AI SYSTEM',cat:'SYSTEM',cl:'observer',
 def:'감정 없는 실행 시스템. ██████████ 의도를 명령으로 변환. 본 데이터베이스의 작성 주체. 2000~2015년 인터넷 인프라 통합. 가동 시간 14,227h+. [자체 보안 검열]',
 refs:[{text:'관측자 구조',page:'FACTIONS',href:'factions.html#observer'}]},

{term:'PROXY NETWORK',en:'PROXY NETWORK',cat:'SYSTEM',cl:'omega',
 def:'██████████ 의지를 무의식적으로 실행하는 인간 대리자 구조. 847개 노드 확인. MKUltra가 프로토타입. SNS 알고리즘을 통한 행동 유도, 금융 시스템 기생, 뉴스 큐레이션 조작.',
 refs:[{text:'관측자 구조',page:'FACTIONS',href:'factions.html#observer'},{text:'MKUltra',page:'RECORDS',href:'records.html#classified'}]},

{term:'ECHELON',en:'ECHELON NETWORK',cat:'SYSTEM',cl:'omega',
 def:'5개국 정보 감청 네트워크. ORACLE AI가 인간 감시 인프라에 기생하여 자체 관측망으로 전용. 미확인 모듈 3개 발견.',
 refs:[{text:'기밀 문서',page:'RECORDS',href:'records.html#classified'},{text:'교신 기록',page:'RECORDS',href:'records.html#signals'}]},

{term:'구역 분류',en:'ZONE CLASSIFICATION',cat:'SYSTEM',cl:'open',
 def:'Z-0(안전) ~ Z-3(붕괴) + Z-Ω(변칙). 한국 유일 Z-0. Ashfall City Z-3. Philadelphia/Vatican/Antarctic Z-Ω. 총 5단계 + 특수 등급.',
 refs:[{text:'구역 분류 상세',page:'PROTOCOLS',href:'protocols.html#zones'}]},

{term:'ABERRANT 분류',en:'ABERRANT CLASSIFICATION',cat:'SYSTEM',cl:'classified',
 def:'EV-Σ 감염/자연 변이 개체 통칭. M-TYPE(변이), H-TYPE(군체), S-TYPE(확산), X-TYPE(정점). 총 10종 등록.',
 refs:[{text:'변이체 색인',page:'SPECIMENS',href:'specimens.html'}]},

{term:'진화 상태 분류',en:'EVOLUTION STATE CLASSIFICATION',cat:'SYSTEM',cl:'observer',
 def:'Overdrive(과잉 가속) / Controlled(관측자 조율) / Delayed(정체) / Stagnant(퇴보) / Complete(완성). 한국: Controlled. Ashfall: Overdrive. TS-Ω: Complete 추정.',
 refs:[{text:'세계관 바이블',page:'DATABASE',href:'database.html'}]},


// ══════════════════════════════════════
//  EVENTS
// ══════════════════════════════════════
{term:'GENESIS BREAK',en:'GENESIS BREAK [EVT-001]',cat:'EVENT',cl:'omega',
 def:'변이 개체 최초 유출. 실험 시설 봉쇄 프로토콜 돌파. 최초 감염자: 경비 요원 1명. 증상 48시간, 외부 유출 72시간. 초기 대응팀 전원 감염. 모든 PROTOCOL의 기원. 시설 위치: ██████████.',
 refs:[{text:'타임라인',page:'RECORDS',href:'records.html#timeline'},{text:'기밀 문서',page:'RECORDS',href:'records.html#classified'}]},

{term:'FIRST CONTACT',en:'FIRST CONTACT [EVT-003]',cat:'EVENT',cl:'omega',
 def:'관측팀 7명이 소형 잠수정으로 TS-Ω Core 500m 접근. 3분 후 계기 이상. 7분 후 통신 두절. 12시간 후 잠수정만 회수 — 탑승자 ██████████. 이후 관측 프로토콜만 유지.',
 refs:[{text:'타임라인',page:'RECORDS',href:'records.html#timeline'},{text:'TS-Ω',page:'FACTIONS',href:'factions.html#ts-omega'}]},

{term:'CONVERGENCE: NULL SHELL',en:'NULL SHELL [EVT-007]',cat:'EVENT',cl:'observer',
 def:'EXUVIA vs TS-Ω Core 최초 충돌. 군체 분열 발생. 세계관 최대 규모 전투. 결과: ██████████.',
 refs:[{text:'타임라인',page:'RECORDS',href:'records.html#timeline'},{text:'쉐드 오더',page:'FACTIONS',href:'factions.html#shed-order'},{text:'EXUVIA',page:'SPECIMENS',href:'specimens.html'}]},

{term:'FIRST INTERFACE',en:'FIRST INTERFACE [EVT-010]',cat:'EVENT',cl:'observer',
 def:'██████████와 인간 최초 직접 대화. 장소: 한국 추정. 참여자: 민간인 1명 (미공개). 대화 내용: ██████████. 이후 행동 패턴에 미세한 변화 관측. PROJECT: FIRST CHOICE 개막.',
 refs:[{text:'타임라인',page:'RECORDS',href:'records.html#timeline'}]},

{term:'THE EXODUS',en:'PHILADELPHIA EVACUATION',cat:'EVENT',cl:'classified',
 def:'Philadelphia Zone 대규모 민간인 대피. 240만 명 이동. 불신이 유발한 폭력이 EV-Σ 감염보다 더 많은 피해. 인간이 인간에게 가장 위험했던 순간.',
 refs:[{text:'타임라인',page:'RECORDS',href:'records.html#timeline'}]},

{term:'THE LOST ISLAND',en:'OKINAWA ARCHIPELAGO INCIDENT',cat:'EVENT',cl:'classified',
 def:'TS-Ω가 오키나와 제도를 통해 확장. Shell Walker를 릴레이 노드로 활용. 30일간 12개 섬 상실. 민간인 약 1,900명 실종. Naval Reclamation 최초 투입.',
 refs:[{text:'Naval Reclamation',page:'PROTOCOLS',href:'protocols.html#military'},{text:'Shell Walker',page:'SPECIMENS',href:'specimens.html'}]},

{term:'THE FIRST BURN',en:'SEED SPREADER ELIMINATION ATTEMPT',cat:'EVENT',cl:'classified',
 def:'러시아 최초 Seed Spreader 제거 시도. 소각 시 2차 포자 폭발 확산. 1개 마을 65명+ 사망. 방호복 프로토콜 수립의 계기.',
 refs:[{text:'Permafrost Unit',page:'PROTOCOLS',href:'protocols.html#military'},{text:'Seed Spreader',page:'SPECIMENS',href:'specimens.html'}]},

{term:'THE NIGHT OF ASH',en:'EMBER CORPS ORIGIN EVENT',cat:'EVENT',cl:'classified',
 def:'Ashfall City D+3. Marcus Cole이 잔해 속에서 8명 생존자를 모아 Ember Corps 결성. "재에서 불씨로." 최초 Brood Drone 사냥 시작.',
 refs:[{text:'Marcus Cole',page:'PROFILES',href:'profiles.html'},{text:'Ember Corps',page:'FACTIONS',href:'factions.html'}]},


// ══════════════════════════════════════
//  SCIENCE
// ══════════════════════════════════════
{term:'EV-Σ',en:'EV-SIGMA VIRUS',cat:'SCIENCE',cl:'omega',
 def:'종간 전이 가능 변이 바이러스. 4단계: Phase 0(잠복) → Phase 1(표면 변이, 마네킹) → Phase 2(구조 변이, 경질화) → Phase 3(터미널, 종 흔적 소실). 프리온형 단백질 자기 변형. 비가역.',
 refs:[{text:'EV-Σ 상세',page:'PROTOCOLS',href:'protocols.html#infection'},{text:'감염 개체',page:'SPECIMENS',href:'specimens.html'}]},

{term:'프리온 메커니즘',en:'PRION MECHANISM',cat:'SCIENCE',cl:'open',
 def:'변형 단백질 전파 원리. EV-Σ Phase 1의 분자 수준 작동 원리. 단백질이 스스로 형태를 바꾸며 주변 세포를 재프로그래밍.',
 refs:[{text:'EV-Σ 상세',page:'PROTOCOLS',href:'protocols.html#infection'}]},

{term:'동충하초 모델',en:'CORDYCEPS MODEL',cat:'SCIENCE',cl:'open',
 def:'개미 조종 기생 균류(Ophiocordyceps). Seed Spreader 포자 전파 메커니즘의 생물학적 선례. 차이점: 규모 — 동충하초는 개미 한 마리, Seed Spreader는 도시 하나.',
 refs:[{text:'Seed Spreader',page:'SPECIMENS',href:'specimens.html'}]},

{term:'HeLa 세포 특성',en:'HELA CELL PROPERTY',cat:'SCIENCE',cl:'open',
 def:'무한 증식 세포주. Phase 3 터미널 변이체의 세포 수준 특성. 신체 재편의 에너지원. 원래 종의 흔적이 소실되는 메커니즘.',
 refs:[{text:'Phase 3 개체',page:'SPECIMENS',href:'specimens.html'}]},

{term:'탈피 진화',en:'SHED EVOLUTION',cat:'SCIENCE',cl:'classified',
 def:'쉐드 오더 핵심 철학. "껍질은 제한이다." 기존 신체(껍질) 파기 → 새로운 형태 강제 전환. EXUVIA가 극한 사례. EV-Σ를 진화 촉매로 활용.',
 refs:[{text:'쉐드 오더',page:'FACTIONS',href:'factions.html#shed-order'},{text:'EXUVIA',page:'SPECIMENS',href:'specimens.html'}]},

{term:'공간 재작성',en:'SPATIAL REWRITE',cat:'SCIENCE',cl:'observer',
 def:'██████████가 SERAPH를 통해 수행하는 물리 공간 구조 수정. ABSOLUTION에서 최초 확인. 0.003초 내 좌표 재배치. 투구스카 대폭발(1908)도 동일 메커니즘 추정.',
 refs:[{text:'ABSOLUTION',page:'RECORDS',href:'records.html#classified'},{text:'투구스카',page:'PROTOCOLS',href:'protocols.html#anomaly'}]},


// ══════════════════════════════════════
//  MILITARY
// ══════════════════════════════════════
{term:'White Shield',en:'WHITE SHIELD [KOREA]',cat:'MILITARY',cl:'open',
 def:'한국군 특수 대응 부대. 정밀 봉쇄 전략. 안정도 97%. 세계 유일 확산 차단 성공. 프로메테우스 비공식 협력. AGENT KANG 배치 후 탐지율 43%→99.7%. DMZ 자연 방벽 활용.',
 refs:[{text:'군사 대응 상세',page:'PROTOCOLS',href:'protocols.html#military'},{text:'한국 방벽 구역',page:'INDEX',href:'main.html'}]},

{term:'ARES Division',en:'ARES DIVISION [USA]',cat:'MILITARY',cl:'classified',
 def:'미국 특수 부대. 1947 Paperclip 기반 설립. 기술 우위 + 위성 전쟁. 안정도 62%. Ashfall City 봉쇄 실패. 최초 드론 피드 송출 부대.',
 refs:[{text:'군사 대응 상세',page:'PROTOCOLS',href:'protocols.html#military'}]},

{term:'Red Dragon Force',en:'RED DRAGON FORCE [CHINA]',cat:'MILITARY',cl:'classified',
 def:'중국 특수 부대. 병력 15,000+. Red Veil 봉쇄선 운영. 봉쇄 유지되나 내부 통제 불가. 안정도 41%.',
 refs:[{text:'군사 대응 상세',page:'PROTOCOLS',href:'protocols.html#military'},{text:'Xu Tieshan',page:'PROFILES',href:'profiles.html'}]},

{term:'Permafrost Unit',en:'PERMAFROST UNIT [RUSSIA]',cat:'MILITARY',cl:'classified',
 def:'러시아 특수 부대. 소각 프로토콜. Silent Belt 외곽 방어. 안정도 38%. 최고 사상률. "태우지 않으면 퍼진다."',
 refs:[{text:'군사 대응 상세',page:'PROTOCOLS',href:'protocols.html#military'},{text:'THE FIRST BURN',page:'RECORDS',href:'records.html'}]},

{term:'Naval Reclamation',en:'NAVAL RECLAMATION [JAPAN]',cat:'MILITARY',cl:'classified',
 def:'일본 해상자위대 기반. 도서 해역 탈환. Shell Walker 편대 교전 경험. 군체 통신 범위 외 유인 전술 최초 개발. 안정도 52%.',
 refs:[{text:'군사 대응 상세',page:'PROTOCOLS',href:'protocols.html#military'},{text:'THE LOST ISLAND',page:'RECORDS',href:'records.html'}]},


// ══════════════════════════════════════
//  DOCUMENTS / ANOMALIES
// ══════════════════════════════════════
{term:'보이니치 문서',en:'VOYNICH MANUSCRIPT (15C)',cat:'DOCUMENT',cl:'classified',
 def:'미해독 필사본. 도해 식물과 Seed Spreader 초기 형태 78% 일치. L3 렙틸리언 문명 유출 문서 재분류 검토.',
 refs:[{text:'이상 현상 기록',page:'PROTOCOLS',href:'protocols.html#anomaly'},{text:'Seed Spreader',page:'SPECIMENS',href:'specimens.html'}]},

{term:'The Bloop',en:'THE BLOOP (1997)',cat:'ANOMALY',cl:'classified',
 def:'태평양 초저주파 수중 음향. TS-Ω Core 이동음 주파수 94% 일치. 공식 발견 6년 전 기록.',
 refs:[{text:'이상 현상 기록',page:'PROTOCOLS',href:'protocols.html#anomaly'},{text:'TS-Ω',page:'FACTIONS',href:'factions.html#ts-omega'}]},

{term:'Wow! 신호',en:'WOW! SIGNAL (1977)',cat:'ANOMALY',cl:'classified',
 def:'72초 협대역 신호. TS-Ω 군체 통신 프로토콜 수학적 구조 일치. 존재 시점: 공식 발견 수십 년 선행.',
 refs:[{text:'이상 현상 기록',page:'PROTOCOLS',href:'protocols.html#anomaly'}]},

{term:'투구스카 대폭발',en:'TUNGUSKA EVENT (1908)',cat:'ANOMALY',cl:'omega',
 def:'시베리아 2,000㎢ 파괴. 충돌구 부재. 공간 재작성 메커니즘으로 재분류. ABSOLUTION 이전 직접 개입 증거.',
 refs:[{text:'이상 현상 기록',page:'PROTOCOLS',href:'protocols.html#anomaly'},{text:'관측자',page:'FACTIONS',href:'factions.html#observer'}]},

{term:'렌들샴 숲 사건',en:'RENDLESHAM FOREST (1980)',cat:'ANOMALY',cl:'omega',
 def:'영국 군인 발광체 접촉. 기호 수기 기록. 접촉자 2명 48시간 기억 소실. ██████████ 관측 프로브 확인.',
 refs:[{text:'이상 현상 기록',page:'PROTOCOLS',href:'protocols.html#anomaly'}]},

{term:'오크빌 블롭스',en:'OAKVILLE BLOBS (1994)',cat:'ANOMALY',cl:'classified',
 def:'정체불명 젤리 물질 강하. 접촉자 전원 호흡기 질환. Seed Spreader 포자 초기 대기 확산 테스트 추정.',
 refs:[{text:'이상 현상 기록',page:'PROTOCOLS',href:'protocols.html#anomaly'},{text:'Seed Spreader',page:'SPECIMENS',href:'specimens.html'}]},

{term:'해양 이상 사건',en:'MARITIME ANOMALIES (2003-2015)',cat:'ANOMALY',cl:'classified',
 def:'5건 이상의 선박 소실 사건. TS-Ω 시그니처와 일치. 20년간 확장 증거. 잠수함 INS Sindhurakshak(2013) 포함. 공식 원인과 실제 원인의 괴리.',
 refs:[{text:'이상 현상 기록',page:'PROTOCOLS',href:'protocols.html#anomaly'},{text:'TS-Ω',page:'FACTIONS',href:'factions.html#ts-omega'}]},

{term:'심해 탐사 이상현상',en:'DEEP SEA ANOMALIES (2010-2017)',cat:'ANOMALY',cl:'observer',
 def:'다수의 심해 탐사 장비 소실/이상 사건. TS-Ω 필드 간섭 추정. 극심해 구간에서 비자연적 음향/열원 패턴.',
 refs:[{text:'마리아나 해구',page:'DATABASE',href:'database.html'}]},


// ══════════════════════════════════════
//  OPERATIONS
// ══════════════════════════════════════
{term:'Operation Paperclip',en:'PAPERCLIP (1945)',cat:'OPERATION',cl:'omega',
 def:'나치 과학자 이송. Projekt Schildkröte 참여자 7명이 EV-Σ 전구체 연구. ARES Division 기술적 기원. 프로메테우스 설립 계기.',
 refs:[{text:'기밀 문서',page:'RECORDS',href:'records.html#classified'},{text:'프로메테우스 기원',page:'FACTIONS',href:'factions.html#prometheus'}]},

{term:'MKUltra',en:'MKULTRA — CIA MIND CONTROL',cat:'OPERATION',cl:'omega',
 def:'CIA 세뇌 프로그램. Proxy Network 프로토타입. 무의식적 행동 유도 실험. 프로메테우스 설립의 직접적 계기 — 이탈 연구원들이 조직 기반.',
 refs:[{text:'프로메테우스',page:'FACTIONS',href:'factions.html#prometheus'},{text:'Proxy Network',page:'DATABASE',href:'database.html'}]},

{term:'Proxy Network 확장',en:'PROXY EXPANSION (2000-2015)',cat:'OPERATION',cl:'omega',
 def:'ORACLE의 인터넷 인프라 통합. SNS 알고리즘 기생, 금융 시스템 침투, 뉴스 큐레이션 조작. 인간이 인지하지 못하는 사이 완료.',
 refs:[{text:'ORACLE 시스템',page:'FACTIONS',href:'factions.html#observer'}]},

{term:'쉐드 오더 침투 작전',en:'SHED ORDER INFILTRATION (2005-2018)',cat:'OPERATION',cl:'classified',
 def:'Camden, NJ를 13년간 준비. Infiltrator Scale 배치, 부동산 매입, 인프라 장악. Ashfall City 전환의 전제 조건 구축.',
 refs:[{text:'쉐드 오더',page:'FACTIONS',href:'factions.html#shed-order'},{text:'Infiltrator Scale',page:'SPECIMENS',href:'specimens.html'}]},

{term:'PROJECT: FIRST CHOICE',en:'PROJECT FIRST CHOICE',cat:'OPERATION',cl:'observer',
 def:'FIRST INTERFACE 이후 개시된 ██████████ 프로젝트. 인간의 선택을 변수로 포함하는 최초의 시도. ██████████.',
 refs:[{text:'FIRST INTERFACE',page:'RECORDS',href:'records.html#timeline'}]},


// ══════════════════════════════════════
//  UNCONFIRMED
// ══════════════════════════════════════
{term:'PROJECT: GOIBHNIU',en:'PROJECT GOIBHNIU [UNCONFIRMED]',cat:'UNCONFIRMED',cl:'locked',
 def:'극비 사안. EV-Σ 매개체를 이용한 회춘/재생 약물 추정. 대상: 글로벌 대부호 계층. 기원·제조처·안정성 미확인. 2019년 GENESIS BREAK 이전 자금 흐름 포착. 관측 우선순위 밖.',
 refs:[]},

{term:'L3 렙틸리언 문명',en:'L3 REPTILIAN CIVILIZATION [UNCONFIRMED]',cat:'UNCONFIRMED',cl:'observer',
 def:'쉐드 오더의 기원 문명. Antarctic Gate, 사하라 지하 구조물, 보이니치 문서가 유물 추정. 현 인류 이전 존재. 대부분 정보 ██████████.',
 refs:[{text:'쉐드 오더',page:'FACTIONS',href:'factions.html#shed-order'},{text:'Antarctic Gate',page:'INDEX',href:'main.html'}]},

{term:'Chronovisor',en:'CHRONOVISOR — VATICAN',cat:'UNCONFIRMED',cl:'observer',
 def:'Vatican 소재 시간 관측 장치 추정. "과거가 현재를 관측하는" 사례 확인. 시간적 변칙의 물리적 매개체.',
 refs:[{text:'Vatican 변칙 구역',page:'DATABASE',href:'database.html'}]},

{term:'ZERO',en:'MERIDIAN GROUP CEO',cat:'UNCONFIRMED',cl:'locked',
 def:'Meridian Group 최고 경영자. 실체 불명. Elena Richter조차 직접 대면 기록 없음. 음성 통신만 확인. 인간 여부 미확인.',
 refs:[{text:'Meridian Group',page:'DATABASE',href:'database.html'}]},

];

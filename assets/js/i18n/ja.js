/* TIU v3 — JAPANESE TEXTS (global) */
window.TIU_JA = {
  meta: {
    title: 'TURTLE ISLE UNIVERSE',
    description: 'PA-TERMINAL — 多層構造の世界観アーカイブ'
  },
  topbar: {
    brand: 'TURTLE ISLE',
    sub: 'UNIVERSE',
    status: 'SYSTEM ACTIVE'
  },
  ticker: [
    { type: 'hi',     text: 'EV-Σ::SCAN — NODE_SYNC 0xA3F7' },
    { type: '',       text: 'PROBE.heartbeat() — latency: 12ms' },
    { type: 'warn',   text: 'ZONE.silent_belt: spore_count++' },
    { type: 'hi',     text: 'KR.shield: integrity 99.7%' },
    { type: '',       text: 'PA.recv(TS_OMEGA) — weak' },
    { type: 'danger', text: 'RED_VEIL: mut_rate += 0.03' },
    { type: '',       text: 'NET.proxy: 847 nodes online' },
    { type: 'hi',     text: 'PA.uptime: 14,227h' }
  ],
  hero: {
    tag: 'CLASSIFIED WORLDBUILDING PROJECT',
    tagline: 'この世界は、あなたが知るより深く沈んでいる。',
    scroll: 'SCROLL'
  },
  status: {
    eyebrow: 'PA // WORLD STATUS',
    cells: [
      { label: '世界汚染率', target: 47.2, suffix: '%',     variant: 'amber' },
      { label: '活動中脅威区域', target: 8, suffix: ' / 12', variant: 'red' },
      { label: '韓国封鎖成功率', target: 97.3, suffix: '%',  variant: 'green' },
      { label: 'KR防壁完全性', target: 99.7, suffix: '%',    variant: 'white' }
    ]
  },

  timeline: {
    eyebrow: 'COLLAPSE TIMELINE',
    hint: '年ノードを選択すると詳細記録が展開されます。',
    closeLabel: '閉じる',
    events: [
      { year: '2020', title: 'GENESIS BREAK', note: '封鎖喪失', detail: 'TS-Ω関連実験が制御を離脱。不完全なEV-Σは接触過程で現在の完全形へ進化した。初期警告は黙殺され、以後の崩壊はこの一点へ遡る。' },
      { year: '2022', title: 'PHILADELPHIA', note: '最初の都市陥落', detail: 'フィラデルフィア水域でTS-Ω群体が浮上。市域全体が単一の群体へ吸収され、直接介入は不可能となった。この時点以降、殺処分は拡散と同義になり、区域は恒久的にZ-Ωへ分類された。' },
      { year: '2023', title: 'ASHFALL CITY', note: 'Shed Order実験', detail: 'Shed Orderが変異加速を強行した都市。建造物そのものが生体組織へ転換したため、実験は失敗として記録され、都市はZ-3 COLLAPSEとして封鎖された。以後、Shed Orderは露出を抑え、地表浸透を強化する。' },
      { year: '2024', title: 'FIRST CONTACT', note: 'TS-Ω Core接触', detail: 'EXUVIAがTS-Ω中枢へ接近し、戦闘、対話、吸収を同時に試みた。EXUVIAはEV-Σを吸収して暴走進化へ移行。TS-Ωはなお無関心であり、制御不能状態が確認された。同年、Meridian Groupは休眠胞子を偶発的に回収する。' },
      { year: '2025', title: 'BLACK DECLARATION', note: 'Prometheus自律宣言', detail: 'Prometheusは非公式協力を断ち、自律路線を宣言。同年、EU-JBDFが急造され、日本は琉球戦線で沖縄本島を放棄する。Prometheusは敵対組織として扱われるが、韓国封鎖率の31%は彼らの非公式支援に由来する。' },
      { year: '2026', title: 'NOW', note: 'KR支部長着任', detail: 'イ・ジュンチョルがKR-INIT-001初代支部長として着任。この時点が正史の起点であり、一部のIFルートは限定シミュレーション記録としてのみ公開される。世界の次の分岐は、まだ記されていない。' }
    ]
  },

  map: {
    eyebrow: 'PA // GLOBAL VIEW',
    title: 'GLOBAL THREAT MAP',
    desc: 'Public Archiveが公開した事件区域と国家別対応層。等級はPA-TERMINALの表層インデックス基準であり、未登録座標は表示されない。ホットスポットを選択すると、各地域の対応体系と公開リスク情報を確認できる。',
    legend: [
      { label: 'Z-Ω ANOMALOUS', color: 'purple' },
      { label: 'Z-3 COLLAPSE', color: 'red' },
      { label: 'Z-2 DANGER', color: 'amber' },
      { label: 'CONTAINED', color: 'green' },
      { label: 'DATA VOID', color: 'muted' }
    ],
    dossierLabel: 'TACTICAL DOSSIER',
    selectHint: 'ホットスポットを選択して詳細を表示',
    zones: {
      philadelphia: { title: 'PHILADELPHIA ZONE', country: 'USA', status: 'Z-Ω ANOMALOUS', tone: 'purple', desc: '2022年陥落。港湾群体の浮上後、市域全体が単一のTS-Ω群体へ吸収された。群体影響圏は現在、内陸方向へ前進している。', threat: 'TS-Ω / 海洋群体', response: '監視 · 回避', img: 'assets/img/philadelphia-drone.webp' },
      ashfall: { title: 'ASHFALL CITY', country: 'USA', status: 'Z-3 COLLAPSE', tone: 'red', desc: '2023年、Shed Orderによる変異加速実験が失敗。建造物は生体質量へ転換した。米軍は外縁生存帯を40%拡張中。', threat: 'Brood Core / 感染体', response: '封鎖 · 回収', img: 'assets/img/ashfall-city.webp' },
      silentbelt: { title: 'SILENT BELT', country: 'RUSSIA', status: 'Z-2 DANGER', tone: 'amber', desc: 'ロシア広域にまたがる沈黙帯。Seed Spreader拡散による音響減衰が確認されている。外縁は月1.2kmの速度で拡大中。', threat: '広域胞子拡散', response: '焼却 · 監視', img: 'assets/img/silent-belt.webp' },
      euBorder: { title: 'EU BORDER COURTS', country: 'EU', status: 'LEGAL FRONT', tone: 'green', desc: '国境検疫、難民保護、感染者権利訴訟が同時に進行する欧州防衛線。合意形成は遅く、生存と人権の間で防衛線が揺れている。', threat: '法的遅延 / 越境感染', response: '多言語告知 · 裁判所命令 · 共同対応部隊' },
      germany: { title: 'GERMAN BIOETHICS LINE', country: 'GERMANY', status: 'RECORD ETHICS', tone: 'green', desc: 'ドイツ圏は感染記録と生命倫理を厳密な手続きで扱う。正確な一文が、肉体変化より先に人の社会的地位を消し得る。', threat: '記録誤差 / 権利衝突', response: '倫理委員会 · 法廷審査 · 医療監査' },
      redveil: { title: 'RED VEIL REGION', country: 'CHINA', status: 'Z-2 DANGER', tone: 'red', desc: '中国都市密集圏の封鎖線。内部統制は実質的に失われ、外壁のみが維持されている。累積封鎖費用は1,665億元。', threat: '混合個体群', response: '任務部隊 · 隔離', img: 'assets/img/red-veil.webp' },
      korea: { title: 'KOREA CONTROLLED', country: 'KOREA', status: 'CONTAINMENT', tone: 'green', desc: '世界で唯一の完全封鎖成功圏。White Shieldが精密封鎖を維持している。公開予測モデルはこの結果を説明できない。', threat: '散発的変異', response: '早期検知 · 選択隔離', img: 'assets/img/korea-barrier.webp' },
      japan: { title: 'JAPAN DEFENSE LINE', country: 'JAPAN', status: 'Z-1 CAUTIONARY', tone: 'amber', desc: '2025年9〜12月、石垣、宮古、沖縄本島、奄美、トカラ、小笠原の一部を喪失。琉球奪還作戦が進行中。本土感染は0件。', threat: '海洋変異', response: '海上封鎖 · 島嶼回収' },
      australia: { title: 'AUSTRALIA BIOSAFE GRID', country: 'AUSTRALIA', status: 'FORTRESS PROTOCOL', tone: 'green', desc: '大陸閉鎖、自己申告アプリ、内陸鉱山検疫を結合した豪州型防衛網。市民は互いを監視し、同時に互いを守る。', threat: '長距離曝露 / 内陸通信空白', response: 'BIOSAFE-AU · 長距離許可 · 座標検疫' },
      meridian: { title: 'MERIDIAN LOGISTICS BELT', country: 'PRIVATE ENTERPRISE', status: 'PUBLIC FRONT', tone: 'amber', desc: '医療、保険、物流、回収品を結ぶ企業影響圏。公開ファイルが示すのは契約と避難優先順位であり、上位構造ではない。', threat: '契約差別 / グレー市場', response: '監査 · 制限取引 · 企業保護権' },
      unregisteredInland: { title: 'UNREGISTERED INLAND', status: 'DATA VOID', tone: 'muted', desc: 'PA-TERMINAL公開インデックスに座標が割り当てられていない内陸セクター。空白の理由は表層記録に記載されていない。', threat: '不明', response: '公開対応なし' },
      antarctic: { title: 'ANTARCTIC GATE', status: 'Z-Ω ANOMALOUS', tone: 'purple', desc: '完全な円形構造。深度測定不能。一部記録では地底文明層（L3）へ接続する門として記述されるが、公式解釈は保留されている。', threat: '空間歪曲', response: '衛星監視 · 進入禁止' }
    },
    metaLabels: { country: 'COUNTRY', threat: 'PRIMARY THREAT', response: 'RESPONSE' }
  },

  dbPreview: {
    label: 'PA-TERMINAL ARCHIVE PREVIEW',
    stats: [
      { value: '20+', label: 'FACTIONS' },
      { value: '12', label: 'ZONES' },
      { value: '847', label: 'PROXY NODES' },
      { value: '17', label: 'SPECIMENS' },
      { value: '20+', label: 'PROFILES' },
      { value: '30+', label: 'AGENCIES' }
    ],
    hint: 'Public Archiveがあなたに開示した記録。'
  },

  pitch: {
    eyebrow: 'SITUATION REPORT // 2026',
    title: 'THE WORLD IS FALLING',
    body: '<strong>世界は崩壊しつつある。</strong> フィラデルフィアは2022年に陥落し、Ashfallは2023年に封鎖された。琉球は昨年、島嶼の半数を失った。韓国だけが <strong class="t-green">97.3%</strong> で持ちこたえている。',
    subbody: 'その数値には、説明がない。'
  },
  threat: {
    eyebrow: 'THREAT BRIEFING',
    title: 'EV-Σ — THE ACCELERANT',
    quote: '"これは感染ではない。進化の速度が壊れている。"',
    body: '進化加速因子 <strong class="t-red">EV-Σ</strong> が世界を解体している。多くの国家は防衛線の維持に失敗しつつある。殺すことは、拡散させることだった。都市は一つずつ沈黙し、人類が知っていた秩序は終わった。',
    archiveLabel: 'EV-Σ SPREAD ARCHIVE',
    archive: [
      { img: 'assets/img/philadelphia-drone.webp', code: 'Z-Ω // PHILADELPHIA', title: '最初の陥落（2022）', note: '港湾から群体が浮上。市域全体が吸収され、直接介入は遮断された。' },
      { img: 'assets/img/ashfall-city.webp', code: 'Z-3 // ASHFALL CITY', title: '群体実験場（2023）', note: 'Shed Orderの変異加速。建造物は生体質量へ転換し、失敗として記録された。' },
      { img: 'assets/img/silent-belt.webp', code: 'Z-2 // SILENT BELT', title: '胞子大陸', note: 'Seed Spreader拡散により形成された広域沈黙帯。月1.2kmの速度で拡大中。' },
      { img: 'assets/img/red-veil.webp', code: 'Z-2 // RED VEIL', title: '中国封鎖線', note: '軍事封鎖級の高密度感染。内部は失われ、外壁のみが維持されている。' }
    ]
  },
  specIndex: {
    eyebrow: 'PUBLIC SPEC INDEX',
    title: 'SPECIMEN CATALOG',
    desc: '公開SPECインデックスは、変異体を怪物図鑑のようにすべて列挙しない。現場要員が判断に必要とする行動パターン、接近禁止範囲、民間被害コストを優先する。',
    labels: { type: 'TYPE', rule: 'FIELD RULE' },
    note: '完全な系譜、発生機序、上位分類コードは公開インデックスから除外される。この程度の情報だけでも、プレイヤーは作戦判断を始められる。',
    items: [
      { code: 'SPEC-001', name: 'Infected Mannequin', risk: 'PHASE 1 / CLOSE RANGE', tone: 'amber', img: 'assets/img/specs/mannequin-cluster.webp', visual: 'MANNEQUIN CLUSTER', type: 'M-TYPE 人型', rule: '静止していても3m以内の単独接近は禁止', desc: '静止中は人体とほぼ区別できない。刺激を受けると0.3秒以内に攻撃へ移行し、救助対象と脅威対象の境界を遅延させる。' },
      { code: 'SPEC-003', name: 'Brood Drone', risk: 'H-TYPE / HIVE', tone: 'red', img: 'assets/img/specs/brood-drone-closeup.webp', visual: 'BROOD CLOSEUP', type: '群体従属個体', rule: '中枢分離が確認されるまで消耗戦を避ける', desc: '自律意思は低く、群体命令に高速で反応する。分離個体の一部は12時間以内に不活性化するが、それまでは封鎖線を急速に消耗させる。' },
      { code: 'SPEC-004', name: 'Seed Spreader', risk: 'S-TYPE / CRITICAL', tone: 'red', img: 'assets/img/specs/seed-spreader.webp', visual: 'SILENT BELT NODE', type: '固定拡散個体', rule: '接近半径を制御し、焼却前に胞子逆流を計算', desc: '移動しない。風と土壌が代わりに移動するためである。破壊は爆発的な胞子放出を誘発し、単純焼却が二次拡散になり得る。' },
      { code: 'SPEC-008', name: 'Spore Phantom', risk: 'S-TYPE / AIRBORNE', tone: 'red', img: 'assets/img/specs/spore-phantom.webp', visual: 'SPORE PHANTOM', type: '胞子 / 光反応型', rule: '換気を封鎖し、照明を制御し、吸入曝露を記録', desc: '光条件下で分散し、物理的除去に強い抵抗を示す。吸入曝露が発生すると、隔離コストは個人から世帯単位へ拡大する。' },
      { code: 'SPEC-011', name: 'Shell Talker', risk: 'VOICE MIMIC', tone: 'amber', img: 'assets/img/specs/spec_011_shelltalker.jpg', visual: 'VOICE INCIDENT CCTV', type: '音声模倣', rule: '被害者の声が聞こえても単独応答は禁止', desc: '行方不明者や家族の声を模倣して扉を開かせる。恐怖を単純な攻撃ではなく、関係のコストとして作動させる。' },
      { code: 'SPEC-012', name: 'Blood Pit', risk: 'ENVIRONMENTAL', tone: 'red', img: 'assets/img/specs/spec_012_bloodpit.jpg', visual: 'CONTAMINATED ZONE STILL', type: '環境汚染型', rule: '接触面を焼却し、回収品を持ち出さない', desc: '赤色粘液と消化酵素で有機物を分解する。事件現場そのものが個体となり、救助と証拠保全が衝突する。' },
      { code: 'SPEC-015', name: 'Brain Seeker', risk: 'H-TYPE / EXILED', tone: 'red', img: 'assets/img/specs/spec_015_brainseeker.jpg', visual: 'EXILED HIVE TRACE', type: '学習型離脱個体', rule: '直接交戦を避け、痕跡追跡と民間退避を優先', desc: '群体接続から切断された後、学習能力が上昇する個体群。命名済み事件と発生座標は公開インデックスから除外される。' },
      { code: 'PHASE 0', name: 'Latent Host', risk: 'CIVILIAN COST', tone: 'green', img: 'assets/img/specs/infection-transition.webp', visual: 'INFECTION TRANSITION', type: '無症候感染記録', rule: '記録は削除しない。アクセスのみ制限する', desc: '外見上は一般市民と区別できない。学校、保険、婚姻、兵役、面会権が先に不安定化し、社会圧力の中核軸となる。' }
    ]
  },
  world: {
    eyebrow: 'WORLD STRUCTURE',
    title: '4-LAYER CIVILIZATION',
    desc: '地表から下層へ降りるほど、上層が隠したものが露出する。秘匿権力、地底文明、そして表層インデックス外の中枢。',
    layers: [
      { code: 'L1 — SURFACE', desc: '可視世界。人類の舞台。' },
      { code: 'L2 — PROXY NETWORK', desc: '847ノードで構成された秘匿権力インフラ。' },
      { code: 'L3 — SUBTERRANEAN', desc: '地底爬虫類文明。二つの種族が対立している。' },
      { code: 'L4 — ORACLE CORE', desc: '公開インデックスでは「core」としてのみ表出する深層分類中枢。起源と行為主体は公開されない。' }
    ]
  },
  factions: {
    eyebrow: 'FACTIONS',
    title: 'POWERS IN CONFLICT',
    desc: '公開アーカイブは衝突を四つの主要軸へ圧縮する。その下で、国家体系、非公式セル、民間ブローカー、宗教断片が同じ圧力場の中を移動する。',
    primary: [
      { name: 'ORACLE CORE', meta: 'L4 / CODE REQUIRED', tagline: '分類する。予測する。保留する。', detail: '公開インデックスではcoreとしてのみ表出する深層分類中枢。直接アクセスは制限される。', access: 'BLACK-LEVEL', variant: 'obs', logo: 'assets/img/logo-oracle-core.webp' },
      { name: 'PROMETHEUS', meta: 'HUMAN BLACK OPS', tagline: '制御されない選択を保存する。', detail: '防壁技術と情報作戦へ影響する非公式ネットワーク。韓国の説明不能な31%の背後にある影。', access: 'HINT', variant: 'pro', logo: 'assets/img/logo-prometheus.webp' },
      { name: 'SHED ORDER', meta: 'MUTATION CULT', tagline: '殻の先に、次の進化が待つ。', detail: '感染を災害ではなく進化として扱う。Ashfall記録以後、表層活動は低下している。', access: 'PUBLIC / HINT', variant: 'shed', logo: 'assets/img/logo-shed.webp' },
      { name: 'TS-Ω', meta: 'Z-Ω / PHILADELPHIA', tagline: '知性ではない。本能である。', detail: 'フィラデルフィア水域から浮上した群体軸。影響圏は現在、内陸方向へ前進中。', access: 'PUBLIC THREAT', variant: 'tsw', logo: 'assets/img/logo-tsw.webp' }
    ],
    irregularLabel: 'HUMAN / STATE / GRAY-ZONE NETWORKS',
    irregular: [
      { name: 'Silent Wolves', meta: 'MERCENARY CELL', tagline: '彼らは感染を恐れない。武器化する。', detail: 'ロシア辺境ルートと結びつくグレーゾーン武装・情報ネットワーク。', access: 'HINT', img: 'assets/img/silent-wolves-raid.webp' },
      { name: 'Ascension Choir', meta: 'RELIGIOUS EXTREMES', tagline: '感染は呪いではなく祝福である。', detail: '崩壊後に発生した宗教解釈と感染崇拝の断片。', access: 'PUBLIC / HINT', img: 'assets/img/choir-worship.webp' },
      { name: 'Meridian Group', meta: 'PRIVATE ENTERPRISE', tagline: '道徳は需要曲線に現れない。', detail: '物流、医療、保険を危機市場へ変換する企業フロント。', access: 'PUBLIC FRONT', img: 'assets/img/meridian-richter.webp' },
      { name: 'Ember Corps', meta: 'SURVIVOR MILITIA', tagline: '帰還した34%。彼らは復讐を選んだ。', detail: 'Ashfall帰還者と生存者によって形成された報復ネットワーク。', access: 'HINT', img: 'assets/img/ember-ash.webp' }
    ]
  },
  korea: {
    eyebrow: 'EXCEPTION VARIABLE',
    title: 'THE LAST BARRIER',
    stat: '97.3%',
    statLabel: 'CONTAINMENT SUCCESS RATE',
    text: 'すべての予測モデルは崩壊を示していた。<br>この地域だけが生存した。防壁、軍事体系、封印記録、非公式協力網が一つの国家内部で重なっている。',
    archiveHint: '韓国アーカイブは公開記録とロック済み項目を混在させる。世界観文書やカードゲームで得たコードにより、一部の制限ファイルを開くことができる。',
    nodes: [
      { code: 'KR-INIT-001', name: '韓国支部', access: 'CODE REQUIRED', tone: 'green', text: '正史の入口。指揮、分析、現場対応、生物、システムが一つの前哨拠点に結合され、カードゲーム最初の作戦記録と直接接続される。' },
      { code: '0-DIV', name: '0課', access: 'RESTRICTED', tone: 'amber', text: '文書と現場実態の不一致を処理する韓国内部特殊部門。削除ではなく、欠落、マスキング、アクセス権差異を追跡する。' },
      { code: 'DG', name: 'DG', access: 'HINT', tone: 'green', text: '国家生存機能を優先する深層対応ライン。防壁、検疫、封印記録、民間被害補償と結びつく。' },
      { code: 'SDA', name: '特殊災害ライン', access: 'PUBLIC / HINT', tone: 'amber', text: '表向きの災害装置。検問、退避命令、病院移送、選択隔離、移動許可証を処理する。' },
      { code: 'WHITE SHIELD', name: 'White Shield', access: 'PUBLIC', tone: 'green', text: '韓国軍EV-Σ対応体系。世界唯一の97.3%封鎖成功率と防壁完全性に結びつく公開指標。' },
      { code: 'COASTAL MIRROR', name: 'COASTAL MIRROR', access: 'HINT', tone: 'red', text: '沿岸防壁技術と非公式協力の痕跡。公開報告書は名称のみを残し、寄与率と行為主体は説明しない。' }
    ],
    systemNote: '"This region should have failed. Outcome does not match model."',
    systemLabel: 'PA // SYSTEM NOTE'
  },
  regions: {
    eyebrow: 'GLOBAL CIVILIAN INDEX',
    title: 'NATIONAL RESPONSE LAYERS',
    desc: 'TIUは一国の災害ではない。同じEV-Σ圧力が、韓国では防壁と記録に、米国では保険と宗教に、EUでは権利と国境に、豪州ではアプリと座標に変換される。',
    note: 'これらの地域項目は公開ページで読める表層記録である。深層制限区域はここでは直接名指しされない。',
    items: [
      { code: 'KR', name: '韓国', status: '97.3% CONTAINED', tone: 'green', line: '安全と記録される国。防壁、家族申告、隔離病棟、封印記録が一つの社会で作動する。', tags: ['防壁', '0課', 'DG', 'SDA'] },
      { code: 'US', name: '米国', status: 'DIVIDED BLOCKADE', tone: 'amber', line: '政府発表より先に保険コードが動く。封鎖線、宗教復興、陰謀市場が災害を解釈する。', tags: ['保険', 'FEMA', 'PARCHMENT', '封鎖線'] },
      { code: 'JP', name: '日本', status: 'ISLAND DEFENSE', tone: 'amber', line: 'マニュアル外の災害は怪談になる。沿岸喪失、神社記録、怪談チャンネルが防衛線と重なる。', tags: ['琉球', '怪談TV', 'マニュアル', '神社'] },
      { code: 'CN', name: '中国', status: 'OUTER WALL ONLY', tone: 'red', line: '文字は消えるが、声は残る。検閲、社会信用、音声メッセージ、外壁が衝突する。', tags: ['検閲', 'Red Veil', '音声メッセージ', '社会信用'] },
      { code: 'RU', name: 'ロシア', status: 'SILENT FRONTIER', tone: 'amber', line: '地図から消えた場所から信号が届く。寒冷、消えた村、短波無線、グレーゾーン武装ルートが前線を定義する。', tags: ['Silent Belt', '短波', '鉄道', 'Silent Wolves'] },
      { code: 'EU', name: 'EU', status: 'LEGAL FRONT', tone: 'green', line: '書類は家族を認めるが、ゲートは動かない。遅い合意形成と感染者権利裁判が防衛線になる。', tags: ['国境', '権利', '通訳', '訴訟'] },
      { code: 'DE', name: 'ドイツ', status: 'BIOETHICS LINE', tone: 'green', line: '正確な一文が人を消し得る。感染履歴、生命倫理、記録監査が事件そのものになる。', tags: ['記録倫理', '裁判所', '医療委員会', 'ベルリン'] },
      { code: 'AU', name: '豪州', status: 'FORTRESS PROTOCOL', tone: 'green', line: '人より先に座標が拒否される。自己申告アプリ、内陸鉱山、大陸閉鎖が日常を変える。', tags: ['BIOSAFE-AU', 'Outback', '鉱山', '座標検疫'] }
    ]
  },
  mystery: {
    eyebrow: 'UNEXPLAINED OUTCOME',
    title: 'WHY?',
    items: [
      { code: 'ANOMALY #001', quote: '"This region should have failed. Outcome does not match model." — 封印予測報告書' },
      { code: 'ANOMALY #002', quote: 'PA-TERMINALが表出しないログが存在する。公開端末から直接照会することはできない。' },
      { code: 'ANOMALY #003', quote: '韓国の97.3%のうち31%は、誰も記録していない手によって支えられていた。表層報告書は答えない。' }
    ],
    hint: '真実はPA-TERMINALインデックスの外側にある。見つけられるなら。'
  },
  cta: {
    code: 'PA-TERMINAL PUBLIC ARCHIVE',
    title: 'OPEN THE ARCHIVE',
    desc: '開示可能な記録はこの端末から閲覧できる。<br>勢力、脅威、事件、人物。表層インデックスが許可するものは、すべてここにある。',
    button: 'ACCESS PA-TERMINAL',
    footer: 'PA-TERMINAL v3.0 // PUBLIC CHANNEL // FILTERED'
  },
  footer: {
    copyright: '© 2026 TURTLE ISLE UNIVERSE',
    tagline: 'A worldbuilding project by Art-lyang',
    links: [
      { label: 'GitHub', url: 'https://github.com/Art-lyang/TIU' },
      { label: 'Card Game', url: 'https://art-lyang.github.io/TIU-card' }
    ]
  }
};

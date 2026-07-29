/* archive-i18n.js — 세계관 아카이브(archive.html) KO/EN/JA
   play-guide-i18n.js와 동일한 data-i18n 속성 방식.
   카드 42종의 태그(EV-Σ, SPEC-001, NADL 등)는 언어 중립 코드라 사전에 넣지 않는다
   (키가 없으면 원문 유지 → KO 원본 그대로 노출). */
(function () {
  const TRANSLATIONS = {
    en: {
      title: "World Archive | TERMINAL SESSION",
      meta: "World archive for the card command game TERMINAL SESSION. The EV-Σ disaster, the Korean wall, Aberrant SPEC records, factions, and regional records.",
      text: {
        navKorea: "Operations Manual",
        navPersonnel: "World / Personnel",
        navGlossary: "Terms / SPEC",
        navGuide: "Play Reading",
        manualTabOps: "Operations Manual",
        manualTabWorld: "World / Personnel",
        manualTabData: "Terms / SPEC",
        manualTabPlay: "Play Reading",
        archiveTitle: "World Archive",
        archiveLead: "A public-clearance archive for readers who want records deeper than the universe primer. It classifies records of the world after the EV-Σ disaster, the Korean sphere, Aberrants, factions, and regions worldwide. Deep classified material and the endings of later records cannot be accessed at this clearance.",
        filterAll: "All",
        filterWorld: "World / Disaster",
        filterKorea: "Korean Sphere",
        filterAberrant: "Aberrants",
        filterFaction: "Factions",
        filterRegion: "Regions",

        /* ── 세계 · 재난 ── */
        arc1Title: "EV-Σ — Biological Evolution Accelerant",
        arc1Desc: "EV-Σ is classified not as a simple virus but as a biological evolution accelerant. It mutates hosts through a prion-protein-based self-modification mechanism, and progression is divided into four stages, from Phase 0 (initial infection) to Phase 3 (loss of species traces, irreversible). Suppressants are only partially effective during the Phase 0 latency window; beyond Phase 2 the subject is recorded as independently evolving and beyond control.",
        arc2Title: "GENESIS BREAK — First Large-Scale Outbreak",
        arc2Desc: "GENESIS BREAK is recorded as the event in which EV-Σ first manifested at large scale. It subsequently became the reference event for every containment protocol worldwide. The period is the early 2030s, and global spread of EV-Σ is confirmed to have begun after this event.",
        arc3Title: "Post-Disaster Global Containment Order",
        arc3Desc: "After EV-Σ spread, most nations failed at full containment and shifted into a state of PARTIAL CONTAINMENT. Evolution rates in contaminated zones are classified and managed as OVERDRIVE (runaway/collapse), CONTROLLED, DELAYED, and STAGNANT. The Republic of Korea is recorded as the sole exception — a CONTROLLED zone that artificially manages evolution rate while maintaining a 97.3% containment success rate.",
        arc4Title: "Containment Line — Multi-Layer Defensive Perimeter",
        arc4Desc: "Contaminated zones are isolated by multi-layer defensive perimeters known as containment lines. A containment line is operated in four or more segments, each designed for independent isolation. Electric fencing, thermal sensors, and two-person night patrol routes form the standard configuration; blind spots in thermal sensor coverage are confirmed to exist.",
        arc5Title: "ORACLE — Global Observation and Management Network",
        arc5Desc: "ORACLE is presented as a planet-scale autonomous management network that remotely controls quarantine bases worldwide. It performs commander performance evaluation, supply management, and operational recommendations for each branch, and calculates and records national response success rates. Clinically toned briefings, warnings, and notifications delivered through the terminal are operated consistently as the standard interface. The system's ultimate purpose cannot be accessed at this clearance.",

        /* ── 한국권 ── */
        arc6Title: "Korea Wall / National Aberrant Defense Line (NADL)",
        arc6Desc: "The public refers to it as the \"Korea Wall\" while official military documents designate the same object as the National Aberrant Defense Line (NADL). It is recorded not as a simple wall but as an integrated defense system in the form of a multi-layer surveillance and strike network, overlaying four layers: physical barrier, sensor grid, automated engagement, and mobile response. Segments are divided into NADL-North (DMZ border), NADL-West (Yellow Sea, toward China), and NADL-East (East Sea), with operational authority vested in the Special Disaster & Aberrant Command (SDAC).",
        arc7Title: "Threat-Directional Density and the Gangwon Isolation Zone",
        arc7Desc: "Wall density is distributed differentially by threat direction; at present the greatest practical threat is the China vector (NADL-West), which is confirmed to carry the highest density of sensor and automated engagement layers. The traditional main front toward North Korea (NADL-North) retains high symbolic weight, but border-crossing activity is recorded only intermittently. Parts of the Gangwon zone near the DMZ are designated full isolation (Class C) areas closed to civilians, with the official justification given as \"former battlegrounds, unexploded ordnance hazard, and ongoing environmental restoration.\"",
        arc8Title: "Government Structure and the Daega Axis Controversy",
        arc8Desc: "State affairs are run around the Office of the President, the National Security Council (NSC), the Ministry of National Defense, and the Joint Chiefs of Staff, with the Joint Operations Command recorded as the official executor of anti-Aberrant operations. The oldest surface issue in current Korean politics is confirmed to be whether the exercise of power by DG — an effectively semi-nationalized private enterprise — carries democratic legitimacy. Pro-DG and anti-DG factions clash in the National Assembly and in hearings over civilian dependence in defense, medicine, and infrastructure, and over the scope of DG's business monopolies and tax benefits.",
        arc9Title: "SDAC / White Shield",
        arc9Desc: "The Republic of Korea's anti-Aberrant apparatus is known publicly and externally as \"White Shield,\" while its official designation within the military and government is confirmed to be the Special Disaster & Aberrant Command (SDAC). It is an independent command reporting directly to the Joint Chiefs of Staff; its commander holds four-star rank and retains direct reporting authority to the President. Formal troop strength and budget details are recorded as classified in bulk even within national defense budget documents.",
        arc10Title: "A Specialized, Asymmetric Power",
        arc10Desc: "Korean military strength is recorded as a \"specialized asymmetric\" structure: high-ranking within East Asia in overall scale, but limited in global expeditionary capability. Anti-Aberrant capability, by contrast, is confirmed to be world-leading, holding first place across equipment generation, biometric detection, field response, and vaccine infrastructure. Anti-Aberrant technology in other states and institutions lags by at least one generation, producing an inverted arrangement in which foreign laboratories request access to Korean response data.",
        arc11Title: "Biometric Screening as Daily Routine",
        arc11Desc: "Passing biometric screening has settled in as a basic daily rhythm for urban residents, and is confirmed to be tiered from level A to C by region and industry. High-risk industries and border areas (level C) scan even residential entry, producing dozens of screenings per day; urban commercial districts (level B) extend to cafes, public transit, and hospitals; ordinary residential areas (level A) apply it mainly in public spaces. Refusing or evading screening draws strong social suspicion and is recorded as effectively impossible.",
        arc12Title: "\"No Infection History\" Certificates in the Marriage Market",
        arc12Desc: "Submitting a no-infection-history certificate has settled in as an unofficial baseline requirement when seeking a marriage partner, and matchmakers and marriage agencies are confirmed to treat it as a precondition. Actual cases of infection history are extremely rare, yet the social weight of the certificate is recorded as equal to or greater than education and income. Cases demanding the histories of the entire family, not only the individual, are increasing, and the practice is assessed as having institutionalized a structure of discrimination within the domain of marriage.",
        arc13Title: "Normal on the Surface, Bifurcated Within",
        arc13Desc: "GDP, employment rate, and financial market indicators are maintained at advanced-economy levels, and an external image of \"a model nation functioning stably even in crisis\" is confirmed. The real economy, however, is recorded as clearly bifurcated between a high-growth DG economic sphere — pharmaceuticals, bio, military, wall, and tech — and a stagnant general private economy of tourism, food service, and small-to-medium manufacturing. Low mobility between the two spheres, which makes structural transition from declining to rising industries difficult, is noted as a long-term stress factor.",
        arc14Title: "The Paradox of Surging Long-Term Residency Applications",
        arc14Desc: "Although international movement is effectively paralyzed by overlapping quarantine, detection, and containment regimes, applications for long-term residency and immigration to Korea are confirmed to be surging instead — a paradox. This functions as social evidence of Korea's quarantine success, representing demand willing to endure that much hardship to get in, and applicants are recorded as predominantly middle class and above from developed and middle-income countries. Owing to the double barrier of movement difficulty and selective residency requirements, inbound arrivals concentrate largely among the highly educated, professionals, and asset holders.",
        arc15Title: "DPRK Black Zone — Official ROK Assessment",
        arc15Desc: "The North Korean territory is recorded as an unobservable zone accessible only through satellite imagery and limited observation, with the government, the military, and the international community alike able only to estimate internal conditions. Former patterns such as military drills and parades have vanished entirely and urban population movement is observed at extremely low levels, but this confirms neither total collapse nor normal operation. The official position of the ROK government and military is that a large-scale EV-Σ mutation event is presumed to have occurred in the DPRK region, and all policy and military organization is confirmed to be built on this assumption.",
        arc16Title: "Daega Industries (DG Inc.)",
        arc16Desc: "Formally Daega Industries (common abbreviation DG Inc.), recorded as a pharmaceutical, military, and tech conglomerate megacorp headquartered in Yeouido, Seoul. The founding family is the Gimhae Heo clan, and its official public founding is recognized as 1946, one year after liberation. True to the name meaning \"great house,\" it is publicly presented as a chaebol structure controlled by the founding family across three generations, and the public regards it as one of the most influential families in Korea.",
        arc17Title: "DG's Quasi-State Position",
        arc17Desc: "DG effectively administers substantial portions of defense, medicine, and infrastructure, and is confirmed to form a de facto dual public-private government structure — a \"quasi-state\" arrangement in which the government concentrates on administrative, diplomatic, and legal functions. It is recorded as dominating Korean industry across pharmaceuticals and bio (EV-Σ vaccines and early detection), military and defense (principal supplier of Korea Wall equipment), and tech and infrastructure. The structure by which it effectively monopolizes even biometric equipment and sensor maintenance has emerged as the central issue for the anti-DG faction.",

        /* ── 이변체 ── */
        arc18Title: "Aberrant Classification — M and H Types",
        arc18Desc: "Aberrants are classified into four types according to EV-Σ mutation pattern. M-TYPE (MUTATION) denotes individual-level mutation, recorded as differentiating by infection stage and remaining addressable on an individual basis. H-TYPE (HIVE) denotes colony forms operating on collective consciousness; no independent will is observed, and functional shutdown within a fixed period is confirmed when a unit is separated from the colony.",
        arc19Title: "Aberrant Classification — S and X Types",
        arc19Desc: "S-TYPE (SPREADER) denotes stationary or non-corporeal entities with wide-area dispersal function; long-range spread via spores is classified as the primary threat. X-TYPE (APEX) is the highest grade in the classification system; because form and behavior are non-fixed, establishing a standard response protocol is recorded as impossible. The origin and nature of the X-TYPE population is under investigation, and at present only a no-direct-contact observation protocol is maintained.",
        arc20Title: "The Four-Phase Progression of EV-Σ Infection",
        arc20Desc: "EV-Σ infection progresses through four phases. Phase 0 (latency, 24–72h) presents no external symptoms and is detectable only by blood test; intervention within this window is confirmed capable of halting progression. Phase 1 (surface mutation) brings skin hardening and behavioral arrest; Phase 2 (structural deformation) involves skeletal and muscular reorganization; and in Phase 3 (terminal) traces of the original species are lost and the state becomes fixed and irreversible.",
        arc21Title: "Infected Mannequin",
        arc21Desc: "Recorded as an EV-Σ Phase 1 entity. When behavior is fully arrested it is visually indistinguishable from a mannequin; the skin is observed with a plastic-like sheen and pupils fixed in full dilation. Transition to a violent state in under 0.3 seconds is confirmed upon contact, noise, or change in light level. Approach within 3 m is prohibited, and thermal scanner verification is advised.",
        arc22Title: "Brood Drone",
        arc22Desc: "A subordinate unit of an H-TYPE colony. Observed at roughly 60% of human size, with an exoskeleton, a single eye, and hooked forelimbs. It performs reconnaissance, collection, and defense without independent will, and functional shutdown within 12 hours is confirmed when separated from the colony. The solitary threat level is low, but immediate withdrawal is advised when they appear in groups.",
        arc23Title: "Seed Spreader",
        arc23Desc: "An S-TYPE stationary dispersal entity. Recorded at 2–4 m in height with a plant-like exterior, releasing irregular spore clouds from its upper body. Without self-locomotion it disperses spores across a radius of several kilometers and is classified as a principal cause of Silent Belt formation. Approach within a 500 m radius is prohibited, and explosive spore release (secondary dispersal) is confirmed as a hazard during removal attempts.",
        arc24Title: "Spore Phantom",
        arc24Desc: "An S-TYPE spore aggregate. It forms a humanoid silhouette within fog and approaches; when a light source is directed at it, it disperses and is observed to reform in darkness. Having no substance, physical removal is impossible, and a sharp rise in spore concentration on approach is confirmed to pose an inhalation infection risk. Maintaining illumination and wearing a gas mask are required.",
        arc25Title: "Shell Talker",
        arc25Desc: "Observed as a large mutant in the form of a long-necked turtle (body length 1.6–1.8 m). Vocal mimicry behavior is recorded in which it stores and replays the voices of previously captured or absorbed subjects as a lure (\"help me,\" \"over here,\" and similar). It observes armament, personnel count, and alert level to select vulnerable targets, and learning behavior — changing tactics after a failed hunt — is confirmed. Responding to voices is prohibited even when familiar; prior position confirmation by radio is required. Origin unconfirmed.",
        arc26Title: "Blood Pit",
        arc26Desc: "A reddish-brown semi-solid pool that collects in low-lying ground within infected zones. Recorded as formed by the dissolution and merging of numerous entities that failed EV-Σ mutation. It has no self-locomotion or judgment, but viscosity shifts abruptly on contact with an organism, fixing the subject in place, and prolonged exposure is confirmed to lead to infection. At rest it is difficult to distinguish from pooled blood; verifying the ground before entering low-lying terrain and avoiding reddish-brown liquid are advised.",
        arc27Title: "Standard Field Response Protocol for Aberrants",
        arc27Desc: "Environmental responses of EV-Σ entities are confirmed: at low temperature an entity enters a Dormant (suppressed) state, but this does not constitute removal; structural collapse and death are recorded only under high-temperature incineration. Gunfire against hardened entities is ineffective, and only high-temperature incineration is confirmed effective. Within infected zones, responding to voices — unfamiliar or familiar alike — is prohibited, and thermal verification of the ground and surroundings before contact or movement is advised as standard protocol.",

        /* ── 조직 · 세력 ── */
        arc28Title: "White Shield",
        arc28Desc: "Confirmed as the publicly used designation for the Republic of Korea's anti-Aberrant apparatus. The official internal designation is recorded as the Special Disaster & Aberrant Command (SDAC). The public, foreign press, and other states are confirmed to regard SDAC as a domestically developed Korean system. Cross-verification systems for quarantine and identity records are robust, and even high-grade forgeries are recorded as having a high detection rate at the field stage.",
        arc29Title: "Daega (DG) — Factional Relations",
        arc29Desc: "Recorded as a technological and industrial axis holding a quasi-official relationship with the Korean government and SDAC. A substantial portion of domestic technology and industry flows is confirmed to sit beneath the DG axis. For some high-grade gray-zone goods it is ambiguous whether they fall within DG's tolerated periphery or entirely outside it, and an unofficial view exists that certain SDAC lines regard this ambiguity as a manageable stabilizer.",
        arc30Title: "Meridian Group Global Inc.",
        arc30Desc: "Registered as a global corporation established in 2019 as a legal private military company (PMC), headquartered in Zurich, Switzerland. Recorded with over 4,000 full-time employees, governments of 14 countries and numerous private corporations as clients, and divisions covering PMC, logistics supply, and biomaterials. COO Elena Richter is confirmed as the effective head of operations, while CEO \"ZERO\" remains unidentified. Holding a monopolistic position in supplying materiel to containment zones, it is classified as a national-level security threat.",
        arc31Title: "Meridian Global Node Network (Korean Linkage)",
        arc31Desc: "Recorded as operating regional hubs in Hamburg, Dubai, Singapore, and São Paulo, plus a worldwide cold-chain logistics network, centered on its legal headquarters in Zurich and its effective operational hub in Miami, USA. As the supplier of essential materiel to containment zones in each country, a monopolistic position with high governmental dependence is confirmed. Within Korea, indications are reported that some mid-level brokers have been drawn into the lower end of its subcontracted logistics network through refrigerated container modification and port subcontracting.",
        arc32Title: "Prometheus",
        arc32Desc: "Confirmed as a force leaving technological and informational traces outside the official government apparatus. It is not a party to cooperation, and surveillance and interdiction are recorded as the standing policy. Its internal structure, membership, and purpose remain unconfirmed.",
        arc33Title: "Gray-Zone Economy",
        arc33Desc: "Recorded as an intermediate economy arising at the intersection of two pressures: the structural paralysis of international movement and the non-erasability of infection history. Principal product categories are confirmed as forged quarantine and identity documents, off-regulation Phase 0 detection kits, containment-origin goods, infection-history laundering, and smuggling and border-bypass services. In Korea, domestic outflow is suppressed by the SDAC interdiction net, and the country is confirmed to function as a consumption and concealment hub rather than a production hub.",
        arc34Title: "Ember Corps",
        arc34Desc: "Recorded as a vigilante and revenge organization formed by survivors and bereaved families of the Ashfall City collapse. Former firefighter Marcus Cole \"ASH\" is registered as its leader, with Korean-American former nurse Sarah Kim as operations lead. A progressive radicalization from initially defensive rescue and search work toward aggressive methods is confirmed.",
        arc35Title: "Silent Wolves",
        arc35Desc: "Recorded as a scavenging and survival group that endured within the Russian Silent Belt zone. It is confirmed to hold an advantage in intelligence about the interior of infected zones. It connects to Meridian Group as an exclusive supply line for containment-origin goods and is confirmed not to mix with general gray-zone distribution networks.",
        arc36Title: "Haejinhoe",
        arc36Desc: "Recorded as a self-proclaimed group that carried out night raids on villages adjacent to the containment line. Under the claim that the wall must be opened, it attacked resident shelters, and some members are confirmed to have first destroyed communication relays. Classified as both a civil security incident and a disturbance adjacent to the containment line, it drew a governmental response including a provincial agency demand for field records. Currently registered as WATCHED.",

        /* ── 세계 각지 ── */
        arc37Title: "United States — Partial Containment Zone",
        arc37Desc: "The United States is classified at EV-Σ response grade \"partial containment.\" Principal contaminated zones are Philadelphia (Z-Ω) and Ashfall City in Camden (Z-3), with response divided between the anti-Aberrant special force ARES Division and the civilian biosecurity agency NBS (National Biosecurity Service). Philadelphia failed containment within a single night, and Ashfall City is recorded as having collapsed irreversibly as urban infrastructure converted into biological tissue. Under ORACLE assessment, the ARES response success rate is confirmed at 62%, the highest globally.",
        arc38Title: "American Civil Society — Internal Fracture",
        arc38Desc: "American civil society is observed in a state of chronic anxiety under a partial-disclosure policy. Of roughly 1.9 million people affected across Philadelphia and Ashfall combined, confirmed evacuation reaches only 34%. Amid the information vacuum, numerous conspiracy-theory clusters and disclosure protests and riots are spreading, and ORACLE assesses that American society is more likely to collapse from internal fracture than from external threat.",
        arc39Title: "Japan — The Third Opening",
        arc39Desc: "Japan's EV-Σ response grade is YELLOW-GREEN (alert–safe), with no confirmed domestic cases. However, southwestern islands including Ishigaki, Miyako, and the Okinawa main island were lost to maritime spread, after which the Okinawa main island was retaken in the \"Ryukyu Liberation Operation.\" Prompted by the shock of territorial loss and the success of the recapture, a social and institutional transition called \"the Third Opening\" is underway, including the renaming of the Self-Defense Forces to the \"Japan Defense Forces.\"",
        arc40Title: "China — Red Veil Containment",
        arc40Desc: "China's EV-Σ response grade is \"partial containment,\" with the principal contaminated zone confirmed as Red Veil (Z-2) in Hebei Province along the North Korean border. The anti-Aberrant force RDF (红龙部队) exceeds 15,000 personnel — the largest in the world — but relies on large-scale firepower projection, and its success rate is recorded at 41%. Roughly 30% of the national defense budget is committed to Red Veil containment, and the system is operated with a specialization in blocking external spread rather than fully clearing the interior. Civilian quarantine and information are controlled by SFJ, an organ directly under the Party.",
        arc41Title: "European Union — Integrated Crisis Response",
        arc41Desc: "The EU established an integrated crisis response headquarters in Berlin and organized a joint biodefense force (EU-JBDF) of 45,000 personnel across 27 member states. Under ORACLE assessment the integrated response success rate is 54%, exceeding the individual-nation average of roughly 35%. Germany, the largest economic and technological member, bears about 40% of the budget and assumes the leadership role, and cross-border rapid response tactics such as support to a neighboring state within 30 minutes of an EV-Σ event are recorded as characteristic.",
        arc42Title: "Russia — Regional Isolation and Defense in Depth",
        arc42Desc: "Owing to the vast extent of 11 time zones and 85 federal subjects, Russia operates a system of REGIONAL ISOLATION, and its response success rate varies extremely by region, recorded at an average of 38%. \"Defense in depth\" adapted from Soviet military doctrine and \"winter containment\" exploiting the Siberian cold are its core strategies. In the Far East, wall units watch and suppress the expanding Silent Belt (a DELAYED evolution zone), and the regional gap is wide — a 78% success rate in the Moscow-centered region against 22% in Siberia."
      },
      aria: {
        navAria: "Manual categories",
        tabAria: "Manual categories",
        langAria: "Language selection",
        filterAria: "Archive category filter"
      }
    },

    ja: {
      title: "世界観アーカイブ | TERMINAL SESSION",
      meta: "カード指揮ゲーム TERMINAL SESSION の世界観アーカイブ。EV-Σ災厄、韓国圏の防壁、異変体SPEC、組織・勢力、世界各地の公開記録。",
      text: {
        navKorea: "運用教本",
        navPersonnel: "世界観・人物",
        navGlossary: "用語・SPEC",
        navGuide: "プレイ判読",
        manualTabOps: "運用教本",
        manualTabWorld: "世界観・人物",
        manualTabData: "用語・SPEC",
        manualTabPlay: "プレイ判読",
        archiveTitle: "世界観アーカイブ",
        archiveLead: "ユニバース概要よりも深い記録を求める閲覧者のための公開等級アーカイブ。EV-Σ災厄以後の世界、韓国圏、異変体、組織・勢力、世界各地の記録が分類されている。深層機密と後続記録の結末は本権限では閲覧できない。",
        filterAll: "全体",
        filterWorld: "世界・災厄",
        filterKorea: "韓国圏",
        filterAberrant: "異変体",
        filterFaction: "組織・勢力",
        filterRegion: "世界各地",

        /* ── 世界・災厄 ── */
        arc1Title: "EV-Σ — 生物学的進化加速媒体",
        arc1Desc: "EV-Σは単なるウイルスではなく生物学的進化加速媒体として分類される。プリオンタンパク質を基盤とする自己変形メカニズムで宿主を変異させ、進行段階はPhase 0(初期感染)からPhase 3(種の痕跡消失・不可逆)までの4段階に区分される。抑制剤はPhase 0の潜伏期においてのみ部分的に有効であり、Phase 2以降は独自進化・制御不能の状態として記録される。",
        arc2Title: "GENESIS BREAK — 最初の大規模発現",
        arc2Desc: "GENESIS BREAKはEV-Σが初めて大規模に発現した事件として記録される。以後、世界のあらゆる封鎖プロトコルの基準事件となった。背景年代は2030年代初頭であり、この事件以降EV-Σが地球規模で拡散し始めたことが確認される。",
        arc3Title: "災厄以後の世界封鎖秩序",
        arc3Desc: "EV-Σ拡散以降、大半の国家が完全封鎖に失敗し「部分封鎖(PARTIAL CONTAINMENT)」状態へ移行した。汚染区域の進化速度はOVERDRIVE(暴走・崩壊)、CONTROLLED(統制)、DELAYED(遅延)、STAGNANT(停滞)などに分類・管理される。大韓民国のみが進化速度を人為的に管理するCONTROLLED区域であり、97.3%の封鎖成功率を維持する唯一の例外として記録される。",
        arc4Title: "封鎖線 — 多層防御境界体系",
        arc4Desc: "汚染区域は封鎖線と呼ばれる多層防御境界線によって隔離される。封鎖線は4区画以上に分割運用され、各区画が独立して隔離可能なよう設計される。電気柵、熱感知センサー、2人1組の夜間巡察ルートが標準構成として運用され、熱感知センサーには死角が存在することが確認される。",
        arc5Title: "ORACLE — 全地球観測・管理ネットワーク",
        arc5Desc: "ORACLEは地球規模の自律管理ネットワークとして紹介され、世界各地の隔離基地を遠隔統制する。各支部に対し指揮官の成果評価・補給管理・作戦勧告を行い、国家別の対応成功率を算出・記録する。端末を通じた臨床的な語調のブリーフィング・警告・通知が標準インターフェースとして一貫して運用される。システムの最終目的は本権限では閲覧できない。",

        /* ── 韓国圏 ── */
        arc6Title: "韓国防壁 / 国家変異防衛線(NADL)",
        arc6Desc: "一般には「韓国防壁」、軍の公式文書では国家変異防衛線(NADL, National Aberrant Defense Line)として同一の対象を指すことが確認される。単なる壁ではなく、物理障壁・センサー網・自動交戦・機動対応の4レイヤーを重ねた多層監視・打撃ネットワーク型の統合防御体系として記録される。区域はNADL-北部(DMZ接境)、NADL-西部(黄海・中国方向)、NADL-東部(東海)に区分され、運用主管は国家特殊災難変異司令部(特災司)に帰属する。",
        arc7Title: "脅威方向別の傾斜配置と江原道の隔離区域",
        arc7Desc: "防壁は脅威の方向に応じて密度が傾斜配置され、現時点での最大の実質的脅威は中国方向(NADL-西部)であり、センサー・自動交戦レイヤーの密度が最も高いことが確認される。伝統的な主戦線である北朝鮮方向(NADL-北部)は象徴性は大きいが、越境活動は断続的に記録されるにとどまる。江原道DMZ近傍の一部区域は完全隔離(C級)地域に指定され民間人の立入が不可であり、公式の名分は「過去の激戦地・不発弾の危険・環境復旧中」として告知される。",
        arc8Title: "政府組織と大家(デガ)軸をめぐる論争",
        arc8Desc: "国政は大統領室・国家安全保障会議(NSC)・国防部・合同参謀本部を中心に運営され、対アベラント作戦の公式主体は合同作戦司令部として記録される。現在の韓国政治における最も古い表面的争点は、準国家化した私企業DGの権力行使が民主的正当性を持つか否かであることが確認される。国防・医療・インフラの民間依存、DGの事業独占・税制優遇の範囲をめぐり、親DG・反DG派閥が国会・聴聞を舞台に対立する。",
        arc9Title: "特災司 / White Shield (SDAC)",
        arc9Desc: "大韓民国の対アベラント体系は対外・一般通用名「White Shield(白色防盾)」と呼ばれ、軍・政府内部の公式編制名は国家特殊災難変異司令部(略称 特災司、英文 SDAC — Special Disaster & Aberrant Command)であることが確認される。合同参謀本部直属の独立司令部であり、指揮官は大将(4つ星)で大統領への直接報告権限を保有する。正式な兵力規模・予算の詳細は国防予算書においても一括して機密処理されると記録される。",
        arc10Title: "特化型・不均衡の強国",
        arc10Desc: "韓国の軍事力は、全体規模では東アジア地域の上位圏にあるがグローバルな遠征能力は限定的な「特化型・不均衡」構造として記録される。一方、対アベラント能力は世界最高水準であり、装備世代・生体感知・現場対応・ワクチン基盤の全軸で先頭を維持することが確認される。他国・他機関の対アベラント技術は少なくとも一世代遅れており、外国の研究所が韓国の対応データへのアクセスを要請する逆転した構図が現れている。",
        arc11Title: "日常化した生体感知義務の浸透",
        arc11Desc: "生体感知の通過は都市居住者の日常的な基本リズムとして定着しており、地域・業種に応じてA〜Cの水準に段階化されていることが確認される。高リスク業種・接境地域(C水準)は住居の出入りまでスキャンされ一日数十回感知され、都市商業地(B水準)はカフェ・公共交通・病院まで、一般住居地(A水準)は公共の場を中心に適用される。感知の拒否・回避は強い社会的疑念の対象であり、事実上不可能と記録される。",
        arc12Title: "「感染歴なし」証明書の結婚市場への定着",
        arc12Desc: "結婚相手を探す際に感染歴なし証明書の提出が非公式の基本要件として定着しており、仲人・結婚情報会社がこれを前提条件として分類することが確認される。実際に感染歴を持つ者は極めて少数であるが、証明書の社会的比重は学歴・所得と同等かそれ以上として記録される。本人のみならず家族全員の履歴まで要求される事例が増加しており、この慣行は婚姻領域における差別構造を制度化したものと評価される。",
        arc13Title: "表面は正常、内部は二重化した経済",
        arc13Desc: "GDP・雇用率・金融市場の指標は先進国水準を維持しており、「危機下でも安定的に機能する模範国家」という対外イメージが確認される。しかし実質経済は、製薬・バイオ・軍事・防壁・テックの高成長DG経済圏と、観光・外食・中小製造の停滞した一般民間経済圏に明確に二分されていると記録される。両経済圏の間の移動性が低く、沈む産業から伸びる産業への転換が構造的に困難である点が長期的なストレス要因として指摘される。",
        arc14Title: "外国人の長期滞在・移民申請が急増する逆説",
        arc14Desc: "国際的な検疫・感知・封鎖体系の重複により国際移動そのものが事実上麻痺しているにもかかわらず、韓国への長期滞在・移民申請はむしろ急増するという逆説が確認される。これは「それほどの苦労をしてでも行くという需要」として韓国の防疫成功の社会的証拠として機能し、申請主体は主に先進国・中進国の中産層以上と記録される。移動の難易度と選別的な滞在要件という二重の障壁により、流入者はおおむね高学歴・専門職・資産家に集中する。",
        arc15Title: "DPRK Black Zone — 韓国の公式認識",
        arc15Desc: "北朝鮮地域は衛星映像と限定的な観測のみが可能な観測不能区域であり、政府・軍・国際社会のいずれも内部の実状を推定するにとどまる状態として記録される。軍事訓練・パレードなど従来の行動様式は完全に消滅し、都市部の人口の動きは極低水準で観測されるが、これは完全崩壊も正常運営も確証しない。韓国政府・軍の公式見解は「DPRK地域で大規模なEV-Σ変異事態が発生したと推定される」であり、あらゆる政策・軍事編制がこの仮定の上に構築されていることが確認される。",
        arc16Title: "大家インダストリー (DG Inc.)",
        arc16Desc: "正式名称は大家(デガ)インダストリー、英文 Daega Industries(通用略称 DG Inc.)であり、ソウル汝矣島に本社を置く製薬・軍事・テック複合メガコーポとして記録される。創業家門は金海許氏であり、対外的な公式設立は解放の1年後である1946年と認識される。「巨大な家門」という商号のとおり、創業家門が3代にわたり支配する財閥構造として公表され、一般には「韓国で最も影響力のある家門の一つ」と認識される。",
        arc17Title: "DGの準国家的位置",
        arc17Desc: "DGは国防・医療・インフラの相当領域を実質的に代行し、政府が行政・外交・法律機能に集中する「準国家型」の事実上の官民二重政府構造を形成していることが確認される。製薬・バイオ(EV-Σワクチン・早期感知)、軍事・防産(韓国防壁装備の主供給)、テック・インフラの全領域で韓国産業を掌握していると記録される。生体感知装備・センサーの保守までを事実上独占供給する構造が、反DG派閥の核心的争点として浮上している。",

        /* ── 異変体 ── */
        arc18Title: "異変体分類体系 — M・Hタイプ",
        arc18Desc: "異変体(ABERRANT)はEV-Σの変異様相に応じて4つのタイプに分類される。M-TYPE(MUTATION)は個体単位の変異であり、感染段階ごとに分化し個別の対応が可能と記録される。H-TYPE(HIVE)は集団意識で作動する群体型であり、独立した意志は観測されず、群体から分離した場合は一定時間内に機能停止することが確認される。",
        arc19Title: "異変体分類体系 — S・Xタイプ",
        arc19Desc: "S-TYPE(SPREADER)は広域拡散機能を持つ固定型または非実体の個体であり、胞子を介した遠距離拡散が主たる脅威として分類される。X-TYPE(APEX)は分類体系の最上位等級であり、形態・挙動が非固定であるため標準対応プロトコルの策定が不可能と記録される。X-TYPE個体群の起源・性格は調査中であり、現在は直接接触禁止・観測プロトコルのみが維持される。",
        arc20Title: "EV-Σ感染の4段階進行体系",
        arc20Desc: "EV-Σ感染は4段階で進行する。Phase 0(潜伏、24〜72時間)は外部症状がなく血液検査でのみ感知され、この時間枠内の処置により進行の停止が可能であることが確認される。Phase 1(表面変異)では皮膚の硬質化・行動停止が、Phase 2(構造変形)では骨格・筋肉の再編が進行し、Phase 3(ターミナル)では元の種の痕跡が消失し不可逆の状態に固着する。",
        arc21Title: "感染体マネキン",
        arc21Desc: "EV-Σ Phase 1個体として記録される。行動が完全に停止した状態では外見上マネキンとの区別が不可能であり、皮膚はプラスチック様の光沢、瞳孔は完全散大で固定された状態として観測される。接触・騒音・光量の変化があった場合、0.3秒未満で暴力状態へ転換することが確認される。3m以内への接近禁止、熱感知スキャナーによる確認が勧告される。",
        arc22Title: "Brood Drone(ブルード・ドローン)",
        arc22Desc: "H-TYPE群体の下位個体。人間の約60%の大きさで、外骨格・単眼・鉤状の前肢を持つ形態として観測される。独立した意志を持たず偵察・収集・防御を遂行し、群体から分離した場合は12時間以内に機能停止することが確認される。単独での脅威は低いが、集団で出現した場合は即時後退が勧告される。",
        arc23Title: "Seed Spreader(シード・スプレッダー)",
        arc23Desc: "S-TYPEの固定型拡散個体。高さ2〜4m、植物に類似した外形で、上部から不規則な胞子雲を放出すると記録される。自ら移動することなく半径数kmに胞子を拡散させ、Silent Belt形成の主要因として分類される。半径500m以内への接近禁止、除去を試みた際の爆発的な胞子放出(二次拡散)の危険が確認される。",
        arc24Title: "Spore Phantom(スポア・ファントム)",
        arc24Desc: "S-TYPEの胞子集合体。霧の中で人型のシルエットを形成して接近し、光源を当てると分散した後、暗闇の中で再形成されることが観測される。実体がないため物理的な除去が不可能であり、接近時の胞子濃度の急上昇による吸入感染の危険が確認される。照明の維持・防毒マスクの着用が要求される。",
        arc25Title: "Shell Talker(シェル・トーカー)",
        arc25Desc: "長い首を持つ亀の形態をした大型変異体(体長1.6〜1.8m)として観測される。過去に捕獲・吸収した対象の音声を保存し、再生して誘引する音声模倣行動が記録される(「助けて」「こっちだ」など)。武装・人員・警戒水準を観察して脆弱な対象を選別し、狩りに失敗した際には戦術を変える学習行動が確認される。知っている声であっても反応禁止、無線による位置の事前確認が要求される。起源は未確認。",
        arc26Title: "Blood Pit(ブラッド・ピット)",
        arc26Desc: "感染区域の低地に溜まる赤褐色の半固体状の水たまり。EV-Σの変異に失敗した個体の多くが溶解・合流して形成されたものと記録される。自ら移動・判断する能力はないが、有機体と接触すると粘性が急変して対象を固着させ、長時間放置された場合は感染に至ることが確認される。静止状態では溜まった血との区別が難しく、低地に進入する際は足元の事前確認・赤褐色の液体への接近禁止が勧告される。",
        arc27Title: "異変体の現場対応標準規則",
        arc27Desc: "EV-Σ個体の環境反応が確認される。低温下で個体はDormant(抑制)状態となるが、これは除去ではなく、高温焼却時にのみ構造崩壊・死滅が記録される。硬質化した個体に対する銃撃は無効であり、高温焼却のみが有効であることが確認される。感染区域では見知らぬ音声・聞き慣れた音声のいずれにも反応禁止、接触・移動の前に足元と周囲の熱感知確認を行うことが標準規則として勧告される。",

        /* ── 組織・勢力 ── */
        arc28Title: "ホワイト・シールド (White Shield)",
        arc28Desc: "大韓民国の対アベラント体系を指す一般通用の名称として確認される。内部の公式編制名は国家特殊災難変異司令部(特災司、SDAC)として記録される。一般・外信・他国は特災司を韓国が自ら開発した体系として認識していることが確認される。検疫・身分記録の交差検証システムが強力であり、高度な偽造物であっても現場段階での摘発率が高いと記録される。",
        arc29Title: "大家 (DG) — 勢力関係",
        arc29Desc: "韓国政府・特災司と準公式の関係にある技術・産業の軸として記録される。国内の技術・産業の流れの相当部分がDG軸の下に置かれていることが確認される。グレーゾーンの一部高級商品については、DG周辺部の黙認領域なのか完全な外郭なのかの区別が曖昧であり、特災司の一部ラインがこの曖昧さを管理可能な安全装置とみなしているという非公式の見解が存在する。",
        arc30Title: "メリディアン・グループ (Meridian Group Global Inc.)",
        arc30Desc: "2019年に合法的な民間軍事企業(PMC)として設立され、スイス・チューリッヒに本社を置くグローバル企業として登記される。正規職員4,000名以上、14か国の政府および多数の民間企業を顧客とし、PMC・物流供給・生物素材の各事業部で構成されると記録される。COOのElena Richterが実質的な運営責任者であり、CEO「ZERO」は身元未確認の状態であることが確認される。封鎖区域への物資供給において独占的地位を保有し、国家単位の安全保障上の脅威として分類される。",
        arc31Title: "メリディアンの世界拠点網(韓国との連携)",
        arc31Desc: "チューリッヒの法的本社と米国マイアミの実質的な運営ハブを中心に、ハンブルク・ドバイ・シンガポール・サンパウロの地域ハブおよび世界規模の低温物流ネットワークを運用すると記録される。各国の封鎖区域への必須物資供給業者として、政府の依存度が高い独占的地位が確認される。韓国国内では、一部の中間級ブローカーが冷蔵コンテナの改造・港湾下請けなどを通じて下請け物流網の末端に取り込まれているという情況が報告される。",
        arc32Title: "プロメテウス (Prometheus)",
        arc32Desc: "政府の公式体系の外部で技術・情報の痕跡を残す勢力として確認される。協力の対象ではなく、監視・阻止が優先方針として記録される。内部構造・構成員・目的は未確認のまま残されている。",
        arc33Title: "グレーゾーン経済 (Gray-Zone Economy)",
        arc33Desc: "国際移動の構造的麻痺と感染歴の非消去性という二つの圧力が交差する地点で発生する中間経済として記録される。偽造の検疫・身分書類、正規外のPhase 0探知キット、封鎖区域由来物(Containment-Origin Goods)、感染歴の洗浄、密航・国境迂回サービスが主要な商品群として確認される。韓国は国内への流出が特災司の遮断網によって抑制されており、生産ハブではなく消費・隠匿ハブとして機能することが確認される。",
        arc34Title: "残り火軍団 (Ember Corps)",
        arc34Desc: "Ashfall Cityの崩壊を生き延びた者と遺族が結成した自警団・復讐組織として記録される。元消防士のMarcus Cole「ASH」がリーダー、韓国系アメリカ人で元看護師のSarah Kimが作戦担当として登録される。初期の防御的な救出・捜索から次第に攻撃的な方式へと過激化していることが確認される。",
        arc35Title: "沈黙の狼たち (Silent Wolves)",
        arc35Desc: "ロシアのSilent Belt区域で生き延びた略奪・生存集団として記録される。感染区域内部の情報において優位を確保していることが確認される。封鎖区域由来物の専属供給線としてMeridian Groupと結びついており、グレーゾーンの一般流通網とは混ざらないことが確認される。",
        arc36Title: "ヘジンフェ (Haejinhoe)",
        arc36Desc: "封鎖線に隣接する村落で夜間襲撃を行った自称集団として記録される。防壁を開くべきだという主張の下に住民の避難所を襲撃し、一部は先に通信中継器を破壊したことが確認される。民間の治安事件かつ封鎖線隣接の騒擾として分類され、地方庁が現場記録を要求するなど政府の対応が行われた。現在は監視対象(WATCHED)として登録される。",

        /* ── 世界各地 ── */
        arc37Title: "アメリカ — 部分封鎖区域",
        arc37Desc: "米国はEV-Σ対応等級「部分封鎖」に分類される。主要な汚染区域はフィラデルフィア(Z-Ω)とキャムデンのAshfall City(Z-3)であり、対変異体特殊部隊ARES Divisionと民間防疫機関NBS(国家生物安保局)が対応を分担する。フィラデルフィアは一夜のうちに封鎖に失敗し、Ashfall Cityは都市インフラが生体組織へ転換しながら不可逆的に崩壊したと記録される。ORACLEの評価上、ARESの対応成功率は62%で世界最高値であることが確認される。",
        arc38Title: "アメリカ民間社会 — 内部分裂",
        arc38Desc: "米国の民間社会は部分公開政策の下で慢性的な不安状態として観測される。フィラデルフィアとAshfallを合算した被害人口約190万人のうち、避難が確認されたのは34%にとどまる。情報の空白の中で多数の陰謀論クラスターと情報公開デモ・暴動が拡散しており、ORACLEは米国社会が外部の脅威よりも内部分裂によって先に崩壊する可能性が高いと評価する。",
        arc39Title: "日本 — 第三の開国",
        arc39Desc: "日本のEV-Σ対応等級はYELLOW-GREEN(警戒—安全)であり、国内の確定症例は確認されていない。ただし石垣・宮古・沖縄本島などの南西諸島を海上拡散により喪失し、その後「琉球解放作戦」により沖縄本島を奪還した。領土喪失の衝撃と奪還の成功を契機として、自衛隊の「日本防衛軍」への改称など「第三の開国」と呼ばれる社会・制度の転換が進行している。",
        arc40Title: "中国 — Red Veil封鎖",
        arc40Desc: "中国のEV-Σ対応等級は「部分封鎖」であり、主要な汚染区域は河北省・北朝鮮接境のRed Veil(Z-2)であることが確認される。対変異体部隊RDF(红龙部队)は15,000名以上と世界最大規模であるが、大規模な火力投射に依存するため成功率は41%と記録される。Red Veilの封鎖に国防予算の約30%が投入され、内部の完全な掃討よりも外部への拡散遮断に特化した体系として運用される。民間の防疫・情報は党直属機関のSFJが統制する。",
        arc41Title: "欧州連合 — 統合危機対応体系",
        arc41Desc: "EUはベルリンに統合危機対応本部を創設し、27か国・45,000名規模の共同防疫軍(EU-JBDF)を編成した。ORACLEの評価上、統合対応の成功率は54%であり、個別国家の平均(約35%)を上回る。最大の経済・技術国であるドイツが予算の約40%を負担して指導的役割を担い、「EV-Σ事案の発生時、30分以内に隣接国を支援する」など国境を越えた迅速対応戦術が特徴として記録される。",
        arc42Title: "ロシア — 地域別隔離と層状防御",
        arc42Desc: "ロシアは11の時間帯・85の連邦構成主体という広域性のため「地域別隔離(REGIONAL ISOLATION)」体系を運用しており、対応成功率は地域差が極めて大きく平均38%と記録される。ソビエト軍事ドクトリンを応用した「層状防御」と、シベリアの酷寒を利用した「冬季封鎖」が中核戦略である。極東では拡散中のSilent Belt(DELAYED進化地帯)を防壁部隊が警戒・抑制しており、モスクワ中心地域の成功率78%に対しシベリアは22%と地域格差が大きい。"
      },
      aria: {
        navAria: "教本カテゴリ",
        tabAria: "教本カテゴリ",
        langAria: "言語選択",
        filterAria: "アーカイブ分類フィルター"
      }
    }
  };

  const KO_TITLE = '세계관 아카이브 | TERMINAL SESSION';
  const KO_META = '카드 지휘 게임 TERMINAL SESSION의 세계관 아카이브. EV-Σ 재난, 한국권 방벽, 이변체 SPEC, 조직·세력, 세계 각 지역 공개 기록.';

  const originalText = new Map();
  const originalAttrs = new Map();

  function snapshot() {
    document.querySelectorAll('[data-i18n]').forEach((node) => {
      originalText.set(node, node.dataset.i18nHtml === undefined ? node.textContent : node.innerHTML);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
      originalAttrs.set(node, node.getAttribute('aria-label') || '');
    });
  }

  function setText(node, value) {
    if (node.dataset.i18nHtml !== undefined) node.innerHTML = value;
    else node.textContent = value;
  }

  function applyLang(lang) {
    const next = TRANSLATIONS[lang] ? lang : 'ko';
    document.documentElement.lang = next;
    document.title = next === 'ko' ? KO_TITLE : TRANSLATIONS[next].title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', next === 'ko' ? KO_META : TRANSLATIONS[next].meta);

    document.querySelectorAll('.lang-button').forEach((button) => {
      const active = button.dataset.lang === next;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    if (next === 'ko') {
      originalText.forEach((value, node) => setText(node, value));
      originalAttrs.forEach((value, node) => node.setAttribute('aria-label', value));
    } else {
      const dict = TRANSLATIONS[next];
      document.querySelectorAll('[data-i18n]').forEach((node) => {
        const value = dict.text[node.dataset.i18n];
        if (value !== undefined) setText(node, value);
      });
      document.querySelectorAll('[data-i18n-aria]').forEach((node) => {
        const value = dict.aria[node.dataset.i18nAria];
        if (value !== undefined) node.setAttribute('aria-label', value);
      });
    }

    try { localStorage.setItem('kor-init-lang', next); } catch (error) {}
  }

  document.addEventListener('DOMContentLoaded', () => {
    snapshot();
    document.querySelectorAll('.lang-button').forEach((button) => {
      button.addEventListener('click', () => applyLang(button.dataset.lang || 'ko'));
    });
    let saved = 'ko';
    try { saved = localStorage.getItem('kor-init-lang') || 'ko'; } catch (error) {}
    try {
      const queryLang = new URLSearchParams(window.location.search).get('lang');
      if (queryLang && (queryLang === 'ko' || TRANSLATIONS[queryLang])) saved = queryLang;
    } catch (error) {}
    applyLang(saved);
  });
})();

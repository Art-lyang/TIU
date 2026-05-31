(function () {
  const TRANSLATIONS = {
    en: {
      title: "KR-INIT-001 Play Reading Manual | ORACLE MANUAL",
      meta: "A KR-INIT-001 companion manual for TIU cardgame players: card decisions, DAY loop, logs, facilities, missions, and archive access.",
      text: {
        navKorea: "Operations Manual",
        navPersonnel: "World / Personnel",
        navGlossary: "Terms / SPEC",
        navSpec: "Terms / SPEC",
        navGuide: "Play Reading",
        manualTabWorld: "World Manual",
        manualTabPlay: "Play Reading",
        heroTitle: "KR-INIT-001<br>Play Reading<br>Manual",
        heroLead: "This manual assists newly assigned commanders in reading recurring card choices, resources, DAY, LOG, facilities, and mission information during play. Later-record endings and deep classified material are not covered.",
        heroPrimary: "Check Session Loop",
        heroGhost: "Screen Terms",
        heroWorld: "World Manual",
        console1Label: "Target",
        console1Value: "New commander",
        console2Label: "Reading Scope",
        console2Value: "DAY / ACT / LOG",
        console3Label: "Core Metrics",
        console3Value: "C / R / T / O",
        console4Label: "Excluded Data",
        console4Value: "Deep classified",
        order1Title: "Read card text",
        order1Desc: "Cross-check loss, gain, and follow-up signals before selection",
        order2Title: "Check four metrics",
        order2Desc: "Stabilize any metric nearing 0 first",
        order3Title: "Check evening hub",
        order3Desc: "One conversation per day; trust and clues recorded",
        order4Title: "Hold locked records",
        order4Desc: "Reopen after clearance rise or LOG acquisition",
        cycleTitle: "One-Day Session Loop",
        cycleLead: "A session proceeds by repeating card judgment and report accumulation. Small daily losses carry into later records and field conditions.",
        cycle1Title: "Receive card",
        cycle1Desc: "Situation, request, or anomaly appears as a card. Text and tags checked first.",
        cycle2Title: "Left / right judgment",
        cycle2Desc: "Left or right selection alters metrics, LOG, and follow-up-card conditions.",
        cycle3Title: "Metric change",
        cycle3Desc: "Containment, Resources, Trust, and Evaluation checked. Critical metrics recovered first.",
        cycle4Title: "Report receipt",
        cycle4Desc: "Daily reports, news, and warning toasts reclassify choice outcomes.",
        cycle5Title: "Evening hub",
        cycle5Desc: "One officer conversation available. Trust and investigation clues accumulate.",
        cycle6Title: "Next DAY",
        cycle6Desc: "LOG, facilities, and mission conditions preserved before the next day.",
        cardTitle: "Card Directive Reading",
        cardLead: "Choices are not answer labels. Cost, delayed effect, and record-unlock potential must be cross-checked together.",
        card1Label: "IMMEDIATE DELTA",
        card1Title: "Immediate change",
        card1Desc: "Visible metrics change immediately. If a metric is low, collapse prevention outranks gain.",
        card2Label: "DELAYED RECORD",
        card2Title: "Delayed result",
        card2Desc: "Even small same-day effects may reappear in the next DAY report, news, or personnel dialogue.",
        card3Label: "CHAIN / LOG",
        card3Title: "Record condition",
        card3Desc: "Some selections are stored as LOG, follow-up-card, or field-mission entry conditions.",
        screenTitle: "Game Screen Terms",
        screenLead: "Repeated labels in menus and terminals. Unlock conditions are separate records.",
        screenDayTitle: "Day count",
        screenDayDesc: "Daily progress. Cards and reports increase.",
        screenActTitle: "Act stage",
        screenActDesc: "Stage marker for story and risk shifts.",
        screenLogTitle: "Log",
        screenLogDesc: "Trace left by choices and missions.",
        screenArcTitle: "Archive",
        screenArcDesc: "Personnel, faction, and incident records.",
        screenEveningTitle: "Evening",
        screenEveningDesc: "One daily talk. Trust and clues gained.",
        screenTableTitle: "Investigation table",
        screenTableDesc: "Evidence combinations after records.",
        screenFacilityTitle: "Facilities",
        screenFacilityDesc: "Supply, medicine, isolation, wall support.",
        screenMissionTitle: "Field mission",
        screenMissionDesc: "Operations entered from card choices.",
        screenEndingTitle: "Ending records",
        screenEndingDesc: "Session results and ending records.",
        screenStatusTitle: "Status tags",
        screenStatusDesc: "Stable, watch, danger, critical.",
        screenLockTitle: "Lock mark",
        screenLockDesc: "Clearance, LOG, or run condition unmet.",
        screenUnknownTitle: "Locked auxiliary gauge",
        screenUnknownDesc: "Limited display after repeated sessions.",
        warningTitle: "Resource Warning Reading",
        warningLead: "Mission fails at 0. Tracking accumulated causes of decline takes priority over single increases.",
        warning1Title: "Containment",
        warning1Desc: "Connected to NADL cracks, infiltration, escapees, and external inflow signals.",
        warning2Title: "Resources",
        warning2Desc: "Connected to food, medicine, equipment, and facility-operating degradation.",
        warning3Title: "Trust",
        warning3Desc: "Connected to officer cooperation, personnel departure, order acceptance, and dialogue quality.",
        warning4Title: "Evaluation",
        warning4Desc: "Connected to ORACLE clearance, commander reassessment, and access-block risk.",
        missionTitle: "Field Missions And Minigames",
        missionLead: "After Act 2, some card choices branch into field missions. Representative types and result effects are summarized together.",
        mission1Title: "Signal alignment",
        mission1Desc: "Audio and pattern operation. Partial information may remain even after failure.",
        mission2Title: "Seal sequence",
        mission2Desc: "Isolation and containment operation. Input accuracy and time loss compared.",
        mission3Title: "Trace breach",
        mission3Desc: "Terminal and clearance operation. Record reliability changes by success rank.",
        mission4Title: "Supply allocation",
        mission4Desc: "Adjusts scarce-resource priority and loss range.",
        mission5Title: "Infection scan",
        mission5Desc: "Reads symptom phase before isolation judgment.",
        mission6Title: "Containment response",
        mission6Desc: "Blocks breach points and corrects wall status.",
        mission7Title: "Route securing",
        mission7Desc: "Decides civilian and field-team route access.",
        mission8Title: "Specimen reading",
        mission8Desc: "Cross-checks anomaly type and field risk.",
        mission9Title: "Comms recovery",
        mission9Desc: "Reconnects broken reports and follow-up LOG.",
        accessTitle: "Archive And Locked Records",
        accessLead: "Unopened records are not failure labels. Access changes by session progress, LOG acquisition, personnel trust, and run conditions.",
        access1Title: "First-run baseline",
        access1Desc: "Four-metric stability and officer-role recognition before locked-record pursuit.",
        access2Title: "Recheck after report",
        access2Desc: "Archive state may change after DAY reports, evening dialogue, or field missions.",
        access3Title: "Session memory",
        access3Desc: "LOG and ending records accumulate as comparison data for later judgments.",
        access4Title: "Do not force bypass",
        access4Desc: "Lock marks indicate records outside current clearance. Forced reading unavailable before displayed conditions.",
        returnWorld: "Return To World Manual",
        returnTop: "Review Session Loop",
        footerLock: "Non-spoiler reading manual for TIU cardgame players."
      },
      aria: {
        brandAria: "Move to KR-INIT-001 world manual",
        navAria: "Manual categories",
        langAria: "Language selection",
        tabAria: "Manual categories",
        actionsAria: "Quick links",
        consoleAria: "Play reading summary console",
        orderAria: "Recommended first-play order"
      }
    },
    ja: {
      title: "KR-INIT-001プレイ判読教本 | ORACLE MANUAL",
      meta: "TIUカードゲームのプレイヤー向けに、KR-INIT-001のカード選択、DAY進行、ログ、施設、任務、アーカイブを整理した判読教本です。",
      text: {
        navKorea: "運用教本",
        navPersonnel: "世界観・人物",
        navGlossary: "用語・SPEC",
        navSpec: "用語・SPEC",
        navGuide: "プレイ判読",
        manualTabWorld: "世界観教本",
        manualTabPlay: "プレイ判読",
        heroTitle: "KR-INIT-001<br>プレイ判読<br>教本",
        heroLead: "本教本は、カードゲーム進行中に反復表示される選択、資源、DAY、LOG、施設、任務情報を新任指揮官基準で判読するための補助文書。後続記録の結末と深層機密は扱わない。",
        heroPrimary: "進行ループ確認",
        heroGhost: "画面用語",
        heroWorld: "世界観教本",
        console1Label: "対象",
        console1Value: "新任指揮官",
        console2Label: "判読範囲",
        console2Value: "DAY / ACT / LOG",
        console3Label: "核心指標",
        console3Value: "C / R / T / O",
        console4Label: "除外情報",
        console4Value: "深層機密",
        order1Title: "カード文面確認",
        order1Desc: "選択前に損失・利益・後続信号を照合",
        order2Title: "4大資源確認",
        order2Desc: "0到達危険指標を優先安定化",
        order3Title: "イブニングハブ確認",
        order3Desc: "1日1名会話、信頼・手掛かり記録",
        order4Title: "ロック記録保留",
        order4Desc: "権限上昇またはLOG確保後に再閲覧",
        cycleTitle: "1日進行ループ",
        cycleLead: "セッションはカード判断と報告蓄積の反復で進行。各DAYの小さな損失が後続記録と現場条件へ移行。",
        cycle1Title: "カード受信",
        cycle1Desc: "状況、要請、異常兆候がカード単位で表示。文面とタグを先に確認。",
        cycle2Title: "左右判断",
        cycle2Desc: "左・右の選択が指標、LOG、後続カード条件に反映。",
        cycle3Title: "資源変動",
        cycle3Desc: "封鎖・資源・信頼・評価の変化を確認。臨界指標を優先回復。",
        cycle4Title: "報告受信",
        cycle4Desc: "日次報告、ニュース、警告トーストが選択結果を再分類。",
        cycle5Title: "イブニングハブ",
        cycle5Desc: "幹部1名と会話可能。信頼と調査手掛かりが蓄積。",
        cycle6Title: "次のDAY",
        cycle6Desc: "LOG、施設、任務条件を保持したまま翌日へ進行。",
        cardTitle: "カード命令文判読",
        cardLead: "選択肢は正解表示ではない。費用、遅延効果、記録解放可能性を同時照合。",
        card1Label: "IMMEDIATE DELTA",
        card1Title: "即時変化",
        card1Desc: "表示指標が即時変動。低い指標がある場合、利益より崩壊防止を優先。",
        card2Label: "DELAYED RECORD",
        card2Title: "遅延結果",
        card2Desc: "当日の損益が小さくても、翌DAY報告、ニュース、人物会話で再登場可能。",
        card3Label: "CHAIN / LOG",
        card3Title: "記録条件",
        card3Desc: "一部選択はLOG、後続カード、現場任務進入条件として保存。",
        screenTitle: "ゲーム画面用語",
        screenLead: "メニューと端末の反復表記。解放条件は別記録。",
        screenDayTitle: "日数",
        screenDayDesc: "1日の進行値。カードと報告が増加。",
        screenActTitle: "段階",
        screenActDesc: "物語と危険度が変わる区間。",
        screenLogTitle: "記録",
        screenLogDesc: "選択と任務が残す内部痕跡。",
        screenArcTitle: "アーカイブ",
        screenArcDesc: "人物・組織・事件資料の閲覧。",
        screenEveningTitle: "イブニング",
        screenEveningDesc: "1日1名会話。信頼と手掛かり。",
        screenTableTitle: "調査テーブル",
        screenTableDesc: "記録後の証拠組合表示。",
        screenFacilityTitle: "施設",
        screenFacilityDesc: "補給・医療・隔離・防壁補助。",
        screenMissionTitle: "現場任務",
        screenMissionDesc: "カード選択後に入る作戦。",
        screenEndingTitle: "エンディング記録",
        screenEndingDesc: "セッション結果と結末記録。",
        screenStatusTitle: "状態タグ",
        screenStatusDesc: "安定・警戒・危険の状態要約。",
        screenLockTitle: "ロック表示",
        screenLockDesc: "権限、LOG、周回条件の未充足。",
        screenUnknownTitle: "未解放補助指標",
        screenUnknownDesc: "反復セッション後に限定表示。",
        warningTitle: "資源警告判読",
        warningLead: "0到達時、任務失敗。単発上昇より低下原因の累積追跡を優先。",
        warning1Title: "封鎖",
        warning1Desc: "NADL亀裂、侵入、離脱者、外部流入信号と接続。",
        warning2Title: "資源",
        warning2Desc: "食料、医薬品、装備、施設稼働率低下と接続。",
        warning3Title: "信頼",
        warning3Desc: "幹部協力、職員離脱、命令受容度、会話品質と接続。",
        warning4Title: "評価",
        warning4Desc: "ORACLE権限、指揮官再評価、接続遮断リスクと接続。",
        missionTitle: "現場任務とミニゲーム",
        missionLead: "Act 2以降、一部カード選択が現場任務へ分岐。代表類型と結果反映範囲を整理。",
        mission1Title: "信号整列",
        mission1Desc: "音響・パターン系作戦。失敗しても情報の一部が残留する場合あり。",
        mission2Title: "封印シーケンス",
        mission2Desc: "隔離・封鎖系作戦。入力精度と時間損失を照合。",
        mission3Title: "権限痕跡追跡",
        mission3Desc: "端末・接続系作戦。成功等級により記録信頼度が変動。",
        mission4Title: "補給分配",
        mission4Desc: "不足資源の優先順位と損失幅を調整。",
        mission5Title: "感染スキャン",
        mission5Desc: "症状段階を判読し隔離可否を判断。",
        mission6Title: "封鎖対応",
        mission6Desc: "亀裂・侵入地点を遮断し防壁を補正。",
        mission7Title: "経路確保",
        mission7Desc: "民間人・現場チームの移動路を判断。",
        mission8Title: "標本判別",
        mission8Desc: "異変体類型と現場危険度を照合。",
        mission9Title: "通信復旧",
        mission9Desc: "途切れた報告線と後続LOGを再接続。",
        accessTitle: "アーカイブとロック記録",
        accessLead: "開かない記録は失敗表示ではない。セッション進行、LOG確保、人物信頼、周回条件で接近範囲が変動。",
        access1Title: "初回基準",
        access1Desc: "ロック記録追跡より4大資源安定化と幹部役割把握を優先。",
        access2Title: "報告後再確認",
        access2Desc: "DAY報告、イブニング会話、現場任務後にアーカイブ変動の可能性。",
        access3Title: "セッション記憶",
        access3Desc: "LOGとエンディング記録は次の判断の比較資料として蓄積。",
        access4Title: "迂回接近禁止",
        access4Desc: "ロック表示は現在権限外記録。表示条件充足前の強制判読不可。",
        returnWorld: "世界観教本へ戻る",
        returnTop: "進行ループ再確認",
        footerLock: "TIUカードゲームプレイヤー向けの非スポイラー判読教本。"
      },
      aria: {
        brandAria: "KR-INIT-001世界観教本へ移動",
        navAria: "教本カテゴリ",
        langAria: "言語選択",
        tabAria: "教本カテゴリ",
        actionsAria: "クイックリンク",
        consoleAria: "プレイ判読要約コンソール",
        orderAria: "初回プレイ推奨順序"
      }
    }
  };

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
    document.title = next === 'ko' ? 'KR-INIT-001 플레이 판독 교본 | ORACLE MANUAL' : TRANSLATIONS[next].title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute('content', next === 'ko'
        ? 'TIU 카드게임 플레이어를 위한 KR-INIT-001 카드 선택, DAY 루프, 로그, 시설, 미션 판독 교본.'
        : TRANSLATIONS[next].meta);
    }

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

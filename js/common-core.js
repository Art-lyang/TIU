
// ── MAP ZONE DATA & HOTSPOT INTERACTION ─────────
const MAP_ZONE_DATA = {
  philadelphia:{title:'PHILADELPHIA ZONE',short:'Z-Ω / TS-Ω / 군체 중심',status:'Z-Ω ANOMALOUS',tone:'purple',desc:'최초 오염 해역. TS-Ω 존재가 확인된 군체 중심 구역. 직접 침투보다 장기 관측과 외곽 데이터 회수가 우선된다.',threat:'TS-Ω / 해양 군체',control:'직접 통제 불가',value:'세계 기준점 수준',response:'관측 / 회피 / 제한 접촉'},
  ashfall:{title:'ASHFALL CITY',short:'Z-3 / 실패한 군체 / 쉐드 오더',status:'Z-3 COLLAPSE',tone:'red',desc:'쉐드 오더가 만든 실패한 군체 실험 도시. 도시 구조 자체가 살아 있는 생체 실험 환경으로 재편되었다.',threat:'BROOD CORE / 감염 인간',control:'실질 붕괴',value:'실패 군체 분석',response:'제거 / 회수 / 봉쇄'},
  vatican:{title:'[CLASSIFIED]',short:'CLASSIFIED — ACCESS DENIED',status:'CLASSIFIED',tone:'classified',desc:'이 구역에 대한 모든 정보는 분류 등급에 의해 보호됩니다. 열람 권한이 없습니다.',threat:'[ACCESS DENIED]',control:'[ACCESS DENIED]',value:'[ACCESS DENIED]',response:'전면 차단 / 정보 통제'},
  silentbelt:{title:'SILENT BELT',short:'Z-2 / 광역 확산 / 러시아',status:'Z-2 DANGER',tone:'amber',desc:'시드 스프레더 확산으로 형성된 광역 침묵 오염 지대. 장기 방치 시 대륙 단위 확산이 가능한 구역.',threat:'광역 확산 / 침묵군체',control:'부분 봉쇄 중',value:'확산 메커니즘 분석',response:'소각 / 봉쇄 / 장기 감시'},
  redveil:{title:'RED VEIL REGION',short:'Z-2 / 도시 감염 / 중국',status:'Z-2 DANGER',tone:'red',desc:'도시 밀집권 감염이 군사적 봉쇄 단계까지 상승한 구역. 통제는 유지되나 내부 사상자는 계속 증가 중.',threat:'도시형 감염 / 혼합 개체',control:'강제 봉쇄',value:'대규모 대응 실험장',response:'전담군 투입 / 격리'},
  korea:{title:'KOREA CONTROLLED ZONE',short:'K-01 / 방역 성공 / WHITE SHIELD',status:'CONTAINMENT ACTIVE',tone:'green',desc:'초기 탐지와 정밀 차단에 성공한 핵심 방어 구역. 프로메테우스와 비공식 협력이 이루어지는 세계 기준점.',threat:'산발적 변이 / 초기 개체',control:'정밀 유지 중',value:'세계 최고 수준 방역',response:'조기 탐지 / 선택 격리'},
  japan:{title:'ISLAND RECLAMATION LINE',short:'Z-2 / 해군 방어선 / 일본',status:'Z-2 DANGER',tone:'amber',desc:'오염된 소규모 섬과 해역을 다시 확보하기 위한 일본 해상 방어선. 해양형 변이 대응의 최전선.',threat:'해양 변이 개체',control:'재확보 진행',value:'해상 방어선 유지',response:'해군 투입 / 섬 회수'},
  antarctic:{title:'ANTARCTIC GATE',short:'Z-Ω / 지하 연결 / 앵커 중첩',status:'Z-Ω ANOMALOUS',tone:'purple',desc:'완전 원형 구조. 깊이 측정 불가 — 신호 반사 없음. 지질학적 패턴과 불일치. 지하 렙틸리언 문명으로 이어지는 핵심 관문. ██████████ 앵커와 구조가 일부 겹쳐 있는 것으로 추정.',threat:'공간 왜곡 / 심층 개체',control:'접근 금지',value:'문명 단위 전략 거점',response:'위성 감시 / 진입 금지'},
};

const mapTooltip = document.getElementById('map-tooltip');
const mapTTTitle = document.getElementById('map-tt-title');
const mapTTSub = document.getElementById('map-tt-sub');

function updateMapDetail(key){
  const z = MAP_ZONE_DATA[key]; if(!z) return;
  const els = {
    title: document.getElementById('map-detail-title'),
    desc: document.getElementById('map-detail-desc'),
    threat: document.getElementById('map-detail-threat'),
    control: document.getElementById('map-detail-control'),
    value: document.getElementById('map-detail-value'),
    response: document.getElementById('map-detail-response'),
    status: document.getElementById('map-detail-status'),
  };
  if(els.title) els.title.textContent = z.title;
  if(els.desc) els.desc.textContent = z.desc;
  if(els.threat) els.threat.textContent = z.threat;
  if(els.control) els.control.textContent = z.control;
  if(els.value) els.value.textContent = z.value;
  if(els.response) els.response.textContent = z.response;
  if(els.status){ els.status.textContent = z.status; els.status.className = 'map-detail-status ' + z.tone; }
  document.querySelectorAll('.map-hotspot').forEach(el=>el.classList.toggle('active', el.dataset.zone===key));
  const panel = document.getElementById('map-detail-panel');
  if(panel) panel.style.display='block';
}

function hideMapDetail(){
  const panel = document.getElementById('map-detail-panel');
  if(panel) panel.style.display='none';
  document.querySelectorAll('.map-hotspot').forEach(el=>el.classList.remove('active'));
}

function showMapTooltip(el){
  const z = MAP_ZONE_DATA[el.dataset.zone]; if(!z||!mapTooltip) return;
  if(mapTTTitle) mapTTTitle.textContent = z.title;
  if(mapTTSub) mapTTSub.textContent = z.short;
  mapTooltip.style.left = el.style.left;
  mapTooltip.style.top = el.style.top;
  mapTooltip.classList.add('show');
}
function hideMapTooltip(){ mapTooltip && mapTooltip.classList.remove('show'); }

document.querySelectorAll('.map-hotspot').forEach(el=>{
  el.addEventListener('mouseenter', ()=>showMapTooltip(el));
  el.addEventListener('mouseleave', hideMapTooltip);
  el.addEventListener('click', e=>{ e.stopPropagation(); updateMapDetail(el.dataset.zone); });
});

const detailPanel = document.getElementById('map-detail-panel');
if(detailPanel) detailPanel.addEventListener('click', e=>e.stopPropagation());
const mapWrap = document.querySelector('.map-wrap');
if(mapWrap) mapWrap.addEventListener('click', ()=>hideMapDetail());

// ── RANDOM TICKER ──────────────────────────────
const ALL_NEWS = [
  {cls:'danger', text:'EV-Σ PHASE 2 confirmed — multiple zones'},
  {cls:'warn',   text:'Shed Order expanding — Eastern sector'},
  {cls:'hi',     text:'Korea: White Shield containment holding'},
  {cls:'danger', text:'PROTOCOL ABSOLUTION: ██████████ intervening'},
  {cls:'warn',   text:'Philadelphia Zone — TS-Ω activity surge'},
  {cls:'hi',     text:'██████████ recalibration complete'},
  {cls:'warn',   text:'Antarctic Gate: anomalous reading detected'},
  {cls:'danger', text:'Ashfall City: Z-3 status confirmed'},
  {cls:'hi',     text:'Prometheus network: active globally'},
  {cls:'warn',   text:'Silent Belt: Z-2 spread confirmed — Russia'},
  {cls:'danger', text:'Red Veil: containment breach — Zone 7'},
  {cls:'hi',     text:'██████████ last sighting: ██████████'},
  {cls:'warn',   text:'[CLASSIFIED]: temporal distortion spike'},
  {cls:'danger', text:'EXUVIA location: unknown'},
  {cls:'hi',     text:'Dragon lineage: extinction confirmed'},
  {cls:'warn',   text:'Bold Street anomaly — repeat observation'},
  {cls:'danger', text:'EV-Σ C-type mutation: specimen acquired'},
  {cls:'hi',     text:'Water contamination: NONE confirmed'},
  {cls:'warn',   text:'Proxy network: 3 nodes compromised'},
  {cls:'danger', text:'FIRST INTERFACE logged — Korea sector'},
];

function buildTicker(){
  const shuffled = ALL_NEWS.slice().sort(()=>Math.random()-0.5);
  const selected = shuffled.slice(0,5);
  const html = selected.map(n=>
    `<span class="${n.cls}">[${n.cls==='danger'?'ALERT':n.cls==='warn'?'WARN':'INFO'}]</span> ${n.text} &nbsp;///&nbsp; `
  ).join('');
  const el = document.getElementById('ticker-inner');
  if(el) el.innerHTML = html + html;
}
buildTicker();
setInterval(buildTicker, 60000);

// ── BOOT ────────────────────────────────
const BOOT_LINES = [
  {text:'> ORACLE OS v4.12 — INITIALIZING...', cls:''},
  {text:'  Loading neural interface...', cls:'dim'},
  {text:'  Scanning threat matrix...', cls:'dim'},
  {text:'  [OK] EV-Σ database synced', cls:'ok'},
  {text:'  [OK] Proxy network: 847 nodes', cls:'ok'},
  {text:'  [WARN] Anomalous readings: 3 zones', cls:'warn'},
  {text:'  [OK] ██████████ tracker: ██████████', cls:'ok'},
  {text:'  [OK] Korea containment: ACTIVE', cls:'ok'},
  {text:'> ALL SYSTEMS OPERATIONAL', cls:''},
  {text:'> CONNECTING TO ORACLE...', cls:''},
];

function initInterface(){
  const btn = document.querySelector('.boot-btn');
  if(btn) btn.style.display='none';
  // hide corruption text when terminal starts
  const corr = document.querySelector('.boot-corruption');
  if(corr) corr.style.transition='opacity 0.3s';
  if(corr) corr.style.opacity='0';
  const term = document.getElementById('boot-terminal');
  if(!term){ document.getElementById('boot')?.classList.add('hidden'); document.body.classList.remove('boot-active'); document.documentElement.classList.remove('boot-active'); return; }
  term.classList.add('active');
  BOOT_LINES.forEach((line, i) => {
    setTimeout(()=>{
      const el = document.createElement('div');
      el.className = 'boot-terminal-line ' + line.cls;
      el.textContent = line.text;
      term.appendChild(el);
      if(i === BOOT_LINES.length - 1){
        setTimeout(()=>{
          document.getElementById('boot').classList.add('hidden');
          document.body.classList.remove('boot-active');
          document.documentElement.classList.remove('boot-active');
        }, 600);
      }
    }, i * 280);
  });
}

// ── STATUS COUNTUP ──────────────────────────────
function animateCountUp(){
  document.querySelectorAll('.status-value[data-target]').forEach(el=>{
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const isFloat = String(target).includes('.');
    let current = 0;
    const step = target / 40;
    const timer = setInterval(()=>{
      current += step;
      if(current >= target){ current = target; clearInterval(timer); }
      el.textContent = (isFloat ? current.toFixed(1) : Math.floor(current)) + suffix;
    }, 35);
  });
}

// ── OBSERVER DOTS ──────────────────────────────
function initObserverDots(){
  document.querySelectorAll('.obs-dot').forEach(dot=>{
    dot.style.setProperty('--d', (2 + Math.random()*5).toFixed(1)+'s');
    dot.style.setProperty('--dl', (Math.random()*4).toFixed(1)+'s');
  });
}

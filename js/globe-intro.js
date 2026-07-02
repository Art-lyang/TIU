// globe-intro.js — 인트로 지구본 (canvas 2D, 의존성 없음)
// 정사영 투영 + 자동 회전. ACCESS 시 한국(강원 해안 KR-INIT-001)으로 회전·줌인 후 manual.html 이동.
// 데이터: js/globe-data.js (GLOBE_LAND 해안선 폴리라인). prefers-reduced-motion 시 즉시 이동.
(function(){
  var canvas=document.getElementById('globe');
  if(!canvas||typeof GLOBE_LAND==='undefined')return;
  var ctx=canvas.getContext('2d');
  var DPR=Math.min(2,window.devicePixelRatio||1);
  var W,H,R,CX,CY;
  function resize(){
    W=canvas.clientWidth;H=canvas.clientHeight;
    canvas.width=W*DPR;canvas.height=H*DPR;
    ctx.setTransform(DPR,0,0,DPR,0,0);
    R=Math.min(W,H)*0.345;CX=W/2;CY=H*0.46;
  }
  resize();window.addEventListener('resize',resize);

  // 세계관 문서가 존재하는 지역만 관측 노드로 표기 (표시 전용)
  var KR={lon:129.11,lat:37.52,code:'KR-INIT-001',main:true};
  var NODES=[
    KR,
    {lon:139.7,lat:35.7,code:'JP-OBS'},
    {lon:116.4,lat:39.9,code:'CN-OBS'},
    {lon:131.9,lat:43.1,code:'RU-FE-OBS'},
    {lon:4.35,lat:50.85,code:'EU-OBS'},
    {lon:13.4,lat:52.5,code:'DE-OBS'},
    {lon:8.54,lat:47.37,code:'MERIDIAN-HQ',corp:true}
  ];

  var DEG=Math.PI/180;
  // 회전 상태: lam=경도 회전, phi=위도 기울기
  var lam=-35*DEG, phi=-18*DEG, zoom=1, t0=performance.now();
  var mode='idle'; // idle → target(한국 정렬) → dive(줌인) → done
  var modeT=0;
  var TARGET_LAM=-KR.lon*DEG, TARGET_PHI=KR.lat*DEG; // phi=+lat 일 때 해당 위도가 화면 중앙
  var startLam=0,startPhi=0;
  var reduced=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;

  function project(lon,lat){
    var l=lon*DEG+lam, p=lat*DEG;
    var cosP=Math.cos(p),sinP=Math.sin(p);
    var x=cosP*Math.sin(l);
    var y0=sinP, z0=cosP*Math.cos(l);
    // phi 기울기 (x축 회전)
    var y=y0*Math.cos(phi)-z0*Math.sin(phi);
    var z=y0*Math.sin(phi)+z0*Math.cos(phi);
    return {x:CX+x*R*zoom, y:CY-y*R*zoom, z:z};
  }
  function ease(t){return t<0.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}

  function draw(now){
    var dt=(now-t0)/1000;t0=now;
    if(mode==='idle'){lam+=dt*0.055;}
    else if(mode==='target'){
      modeT+=dt/1.15;var k=ease(Math.min(1,modeT));
      lam=startLam+(TARGET_LAM-startLam)*k;
      phi=startPhi+(TARGET_PHI-startPhi)*k;
      if(modeT>=1){mode='dive';modeT=0;}
    }else if(mode==='dive'){
      modeT+=dt/0.9;var k2=ease(Math.min(1,modeT));
      zoom=1+k2*3.4;
      if(modeT>=1&&mode!=='done'){mode='done';go();}
    }
    ctx.clearRect(0,0,W,H);

    // 구체 디스크
    var rad=R*zoom;
    var g=ctx.createRadialGradient(CX-rad*0.35,CY-rad*0.4,rad*0.1,CX,CY,rad);
    g.addColorStop(0,'rgba(20,44,38,0.9)');
    g.addColorStop(0.75,'rgba(6,14,13,0.95)');
    g.addColorStop(1,'rgba(3,7,8,0.98)');
    ctx.beginPath();ctx.arc(CX,CY,rad,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();
    ctx.strokeStyle='rgba(74,222,150,0.35)';ctx.lineWidth=1;ctx.stroke();

    // 위경도 그리드
    ctx.lineWidth=0.5;ctx.strokeStyle='rgba(74,222,150,0.10)';
    for(var la=-60;la<=60;la+=30){
      ctx.beginPath();var pen=false;
      for(var lo=-180;lo<=180;lo+=4){
        var pt=project(lo,la);
        if(pt.z>0){if(pen)ctx.lineTo(pt.x,pt.y);else{ctx.moveTo(pt.x,pt.y);pen=true}}else pen=false;
      }
      ctx.stroke();
    }
    for(var lo2=-180;lo2<180;lo2+=30){
      ctx.beginPath();var pen2=false;
      for(var la2=-85;la2<=85;la2+=4){
        var pt2=project(lo2,la2);
        if(pt2.z>0){if(pen2)ctx.lineTo(pt2.x,pt2.y);else{ctx.moveTo(pt2.x,pt2.y);pen2=true}}else pen2=false;
      }
      ctx.stroke();
    }

    // 해안선
    ctx.lineWidth=0.9;ctx.strokeStyle='rgba(74,222,150,0.55)';
    for(var i=0;i<GLOBE_LAND.length;i++){
      var line=GLOBE_LAND[i];ctx.beginPath();var on=false;
      for(var j=0;j<line.length;j++){
        var q=project(line[j][0],line[j][1]);
        if(q.z>0){if(on)ctx.lineTo(q.x,q.y);else{ctx.moveTo(q.x,q.y);on=true}}else on=false;
      }
      ctx.stroke();
    }

    // 관측 노드
    var pulse=(Math.sin(now/380)+1)/2;
    for(var n=0;n<NODES.length;n++){
      var nd=NODES[n],pp=project(nd.lon,nd.lat);
      if(pp.z<=0.02)continue;
      var col=nd.corp?'rgba(180,170,255,':(nd.main?'rgba(255,176,72,':'rgba(74,222,150,');
      if(nd.main){
        ctx.beginPath();ctx.arc(pp.x,pp.y,6+pulse*7,0,Math.PI*2);ctx.strokeStyle=col+(0.5-pulse*0.35)+')';ctx.lineWidth=1;ctx.stroke();
      }
      ctx.beginPath();ctx.arc(pp.x,pp.y,nd.main?3.4:2.2,0,Math.PI*2);
      ctx.fillStyle=col+'0.95)';ctx.fill();
      // 비주요 노드는 점만 — 유럽권 3노드 라벨 겹침 방지, 시네마틱 유지
      if(nd.main){
        ctx.font='9px "Courier New",monospace';
        ctx.fillStyle=col+'0.95)';
        ctx.fillText(nd.code,pp.x+8,pp.y+3);
      }
    }

    // dive 시 화이트아웃 플래시
    if(mode==='dive'){
      ctx.fillStyle='rgba(190,255,220,'+(modeT*0.55)+')';
      ctx.fillRect(0,0,W,H);
    }
    if(mode!=='done')requestAnimationFrame(draw);
  }

  function go(){location.href='./manual.html';}

  var btn=document.getElementById('access');
  if(btn)btn.addEventListener('click',function(e){
    e.preventDefault();
    if(reduced||mode!=='idle'){go();return}
    btn.classList.add('is-armed');
    var body=document.body;if(body)body.classList.add('is-accessing');
    // 최단 경로 회전을 위해 lam 정규화
    var TWO=Math.PI*2;
    lam=((lam%TWO)+TWO)%TWO; var tgt=((TARGET_LAM%TWO)+TWO)%TWO;
    if(tgt-lam>Math.PI)lam+=TWO; if(lam-tgt>Math.PI)lam-=TWO;
    TARGET_LAM=tgt;
    startLam=lam;startPhi=phi;mode='target';modeT=0;
  });

  requestAnimationFrame(draw);
})();

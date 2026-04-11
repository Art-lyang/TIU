
// ── HERO CANVAS: CODE RAIN + DNA HELIX ──────────
(function(){
  const canvas = document.getElementById('heroCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ∑ΩΨΦ{}[]<>/=+-.;:';
  let W, H, cols, drops, dnaOffset = 0;
  const FONT_SIZE = 13;
  const DNA_SPEED = 0.008;

  function resize(){
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.parentElement.getBoundingClientRect();
    W = rect.width; H = rect.height;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.floor(W / FONT_SIZE);
    drops = new Float32Array(cols);
    for(let i = 0; i < cols; i++) drops[i] = Math.random() * -H / FONT_SIZE;
  }
  resize();
  window.addEventListener('resize', resize);

  function drawDNA(x0, baseOpacity, flip){
    const amp = W * 0.06, freq = 0.012, rungGap = 28, nodeR = 2.2;
    ctx.save();
    for(let strand = 0; strand < 2; strand++){
      const phase = strand * Math.PI;
      ctx.beginPath();
      for(let y = -40; y < H + 40; y += 2){
        const yy = y + (dnaOffset * 400) % (rungGap * 2);
        const dx = Math.sin((yy * freq) + phase + dnaOffset * 4) * amp;
        const px = x0 + dx * (flip ? -1 : 1);
        if(y === -40) ctx.moveTo(px, y); else ctx.lineTo(px, y);
      }
      ctx.strokeStyle = `rgba(0,229,160,${baseOpacity * (strand === 0 ? 1 : 0.7)})`;
      ctx.lineWidth = 1.5; ctx.stroke();
    }
    for(let y = -40; y < H + 40; y += rungGap){
      const yy = y + (dnaOffset * 400) % (rungGap * 2);
      const dx1 = Math.sin((yy * freq) + dnaOffset * 4) * amp;
      const dx2 = Math.sin((yy * freq) + Math.PI + dnaOffset * 4) * amp;
      const px1 = x0 + dx1 * (flip ? -1 : 1);
      const px2 = x0 + dx2 * (flip ? -1 : 1);
      ctx.beginPath(); ctx.moveTo(px1, y); ctx.lineTo(px2, y);
      ctx.strokeStyle = `rgba(0,229,160,${baseOpacity * 0.35})`; ctx.lineWidth = 0.8; ctx.stroke();
      for(const px of [px1, px2]){
        ctx.beginPath(); ctx.arc(px, y, nodeR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,229,160,${baseOpacity * 0.6})`; ctx.fill();
      }
    }
    ctx.restore();
  }

  let lastTime = 0;
  const frameInterval = 1000 / 18;
  function draw(timestamp){
    if(timestamp - lastTime < frameInterval){ requestAnimationFrame(draw); return; }
    lastTime = timestamp;
    ctx.fillStyle = 'rgba(0,0,0,0.12)'; ctx.fillRect(0, 0, W, H);
    ctx.font = FONT_SIZE + 'px "Share Tech Mono", monospace';
    for(let i = 0; i < cols; i++){
      if(i % 3 === 0) continue;
      const x = i * FONT_SIZE, y = drops[i] * FONT_SIZE;
      if(y > 0 && y < H){
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        ctx.fillStyle = 'rgba(0,229,160,0.28)'; ctx.fillText(ch, x, y);
        for(let t = 1; t <= 3; t++){
          const ty = y - t * FONT_SIZE;
          if(ty > 0){
            ctx.fillStyle = `rgba(0,229,160,${Math.max(0.18 - t * 0.045, 0.02)})`;
            ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], x, ty);
          }
        }
      }
      drops[i] += 0.4 + Math.random() * 0.3;
      if(drops[i] * FONT_SIZE > H && Math.random() > 0.985) drops[i] = Math.random() * -4;
    }
    dnaOffset += DNA_SPEED;
    drawDNA(W * 0.82, 0.13, false);
    drawDNA(W * 0.18, 0.06, true);
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
  document.querySelector('.boot-btn')?.addEventListener('click', ()=>{ setTimeout(resize, 900); });
})();

// ── INIT ──────────────────────────────
document.addEventListener('DOMContentLoaded', ()=>{
  initObserverDots();
  const bar = document.querySelector('.status-bar');
  if(bar){
    const io = new IntersectionObserver(entries=>{
      if(entries[0].isIntersecting){ animateCountUp(); io.disconnect(); }
    },{threshold:0.5});
    io.observe(bar);
  }
});

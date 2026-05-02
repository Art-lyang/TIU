/* TIU v3 — HERO CANVAS (코드레인 + DNA 헬릭스) */
window.TIU_HeroCanvas = {
  init: function(selector) {
    selector = selector || '#heroCanvas';
    const canvas = document.querySelector(selector);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const wrap = canvas.parentElement;
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789αβγδεζΣΩ+-*/=<>';
    const FPS = 18;
    const FRAME_MS = 1000 / FPS;
    let w = 0, h = 0, dpr = 1, cols = 0;
    let drops = [];
    let dnaOffset = 0;
    let lastFrame = 0;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = wrap.clientWidth;
      h = wrap.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.floor(w / 14);
      drops = [];
      for (let i = 0; i < cols; i++) {
        if (Math.random() < 0.65) {
          drops.push({ x: i * 14, y: Math.random() * h, speed: 8 + Math.random() * 12 });
        }
      }
    }

    function drawHelix(cx, flip) {
      const amp = w * 0.06;
      const step = 28;
      for (let y = 0; y < h; y += step) {
        const phase = (y * 0.025) + dnaOffset;
        const x1 = cx + Math.sin(phase) * amp * (flip ? -1 : 1);
        const x2 = cx + Math.sin(phase + Math.PI) * amp * (flip ? -1 : 1);
        ctx.fillStyle = 'rgba(0, 229, 160, 0.35)';
        ctx.beginPath(); ctx.arc(x1, y, 2.2, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(x2, y, 2.2, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(0, 229, 160, 0.12)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x1, y);
        ctx.lineTo(x2, y);
        ctx.stroke();
      }
    }

    function draw(ts) {
      requestAnimationFrame(draw);
      if (ts - lastFrame < FRAME_MS) return;
      lastFrame = ts;
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, w, h);
      ctx.font = '11px "Share Tech Mono", monospace';
      drops.forEach(d => {
        for (let k = 3; k >= 0; k--) {
          const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
          const y = d.y - k * 14;
          const alpha = (1 - k * 0.3) * 0.8;
          ctx.fillStyle = k === 0
            ? 'rgba(0, 229, 160, ' + alpha + ')'
            : 'rgba(0, 229, 160, ' + (alpha * 0.4) + ')';
          ctx.fillText(ch, d.x, y);
        }
        d.y += d.speed * 0.2;
        if (d.y > h + 14) d.y = -14;
      });
      drawHelix(w * 0.82, false);
      drawHelix(w * 0.18, true);
      dnaOffset += 0.03;
    }

    window.addEventListener('resize', resize);
    resize();
    requestAnimationFrame(draw);
  }
};

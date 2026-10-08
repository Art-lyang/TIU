(function () {
  'use strict';
  var data = window.TIU_NATIONS, ui = window.TIU_UI;
  if (!data || !ui) return;
  var esc=ui.esc;
  document.getElementById('nations-list').innerHTML = data.map(function (n,i) {
    return '<details class="nation" id="'+esc(n.id)+'"><summary><span class="nation-number mono">'+String(i+1).padStart(2,'0')+'</span><span class="nation-name"><b>'+esc(n.name)+'</b><small class="mono">'+esc(n.en)+'</small></span><span class="nation-line">'+esc(n.line)+'</span>'+ui.icon('chevron-right')+'</summary><div class="nation-body"><div class="tags">'+n.tags.map(function(t){return '<span>'+esc(t)+'</span>';}).join('')+'</div><div><blockquote>'+esc(n.excerpt)+'</blockquote><p class="public-label">세계관 공개 소개 · 이야기의 입구</p>'+(n.related?'<a class="text-link" href="./'+esc(n.related)+'">'+esc(n.relatedLabel)+' '+ui.icon()+'</a>':'<a class="text-link" href="./records.html">다른 이야기의 단서 읽기 '+ui.icon()+'</a>')+'<button type="button" class="copy-link" data-copy-id="'+esc(n.id)+'">이 기록 링크 복사</button></div></div></details>';
  }).join('');
})();

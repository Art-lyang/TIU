(function () {
  'use strict';
  var data = window.TIU_RECORDS, ui = window.TIU_UI;
  if (!data || !ui) return;
  var esc = ui.esc, input = document.getElementById('record-search'), filter='all', grid=document.getElementById('records-grid');
  function card(item) {
    return '<article class="clue-card" id="'+esc(item.id)+'"><span class="mono">'+(item.category==='life'?'LIFE / RECORD':'WITNESS / RUMOR')+'</span><h2>'+esc(item.title)+'</h2><p>'+esc(item.summary)+'</p><div class="tags">'+item.tags.map(function (s) {return '<span>'+esc(s)+'</span>';}).join('')+'</div><a class="text-link" href="./'+esc(item.related)+'">'+esc(item.relatedLabel)+' '+ui.icon()+'</a><button type="button" class="copy-link" data-copy-id="'+esc(item.id)+'">단서 링크 복사</button></article>';
  }
  function render() {
    var query = input.value.normalize('NFKC').trim().toLocaleLowerCase('ko');
    var results = data.filter(function (item) {return (filter==='all'||item.category===filter)&&(!query||(item.title+' '+item.summary+' '+item.tags.join(' ')).normalize('NFKC').toLocaleLowerCase('ko').includes(query));});
    grid.innerHTML = results.map(card).join('');
    document.getElementById('result-count').textContent = query ? '“'+input.value.trim()+'” · '+results.length+'개의 단서' : results.length+'개의 공개된 단서';
    document.getElementById('empty-state').hidden = results.length > 0;
    document.querySelectorAll('[data-filter]').forEach(function (b) {b.setAttribute('aria-pressed',String(b.dataset.filter===filter));});
  }
  document.querySelectorAll('[data-filter]').forEach(function (button) { button.addEventListener('click',function () {filter=button.dataset.filter;render();}); });
  input.addEventListener('input',render);
  document.getElementById('reset-search').addEventListener('click',function () {input.value='';filter='all';render();input.focus();});
  window.addEventListener('hashchange',function () {if (location.hash && (input.value || filter!=='all')) {input.value='';filter='all';render();ui.showHash();}});
  render();
})();

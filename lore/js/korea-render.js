(function () {
  'use strict';
  var K = window.TIU_KOREA, ui = window.TIU_UI;
  if (!K || !ui) return;
  var esc = ui.esc, icon = ui.icon;
  function list(values, className) { return '<ul'+(className ? ' class="'+className+'"' : '')+'>'+values.map(function (s) { return '<li>'+esc(s)+'</li>'; }).join('')+'</ul>'; }
  function renderRecord(rec, open) {
    var content = '';
    if (rec.table) {
      content = '<div class="table-wrap" tabindex="0" role="region" aria-label="'+esc(rec.title)+'"><table class="record-table" role="table"><thead role="rowgroup"><tr role="row">'+rec.table.head.map(function (h) {return '<th scope="col" role="columnheader">'+esc(h)+'</th>';}).join('')+'</tr></thead><tbody role="rowgroup">'+rec.table.rows.map(function (row) { return '<tr role="row">'+row.map(function (cell, column) {return '<td role="cell"><span class="cell-label" aria-hidden="true">'+esc(rec.table.head[column])+'</span><span>'+esc(cell)+'</span></td>';}).join('')+'</tr>';}).join('')+'</tbody></table></div>';
    } else if (rec.screen || rec.form) {
      content = '<pre class="'+(rec.screen?'record-screen':'record-form')+'">'+esc((rec.screen||rec.form).join('\n'))+'</pre>';
    } else if (rec.lists) {
      content = '<div class="record-columns">'+rec.lists.map(function (group) {return '<div><h4>'+esc(group.heading)+'</h4>'+list(group.items)+'</div>';}).join('')+'</div>';
    } else {
      content = list(rec.lines || rec.body || rec.notices || [],rec.docType === 'voice'?'record-voice':'');
    }
    if (rec.note) content += '<p class="record-note">'+esc(rec.note)+'</p>';
    content += '<div class="record-meta"><p>'+esc(rec.publicSourceLabel)+'</p><button class="copy-link" type="button" data-copy-id="'+esc(rec.id)+'">기록 링크 복사</button></div>';
    return '<details class="record" id="'+esc(rec.id)+'"'+(open?' open':'')+'><summary><span>'+esc(rec.label)+'</span><h3>'+esc(rec.title)+'</h3>'+icon('chevron-right')+'</summary><div class="record-body">'+content+'</div></details>';
  }
  var nav = K.topics.map(function (t) {return '<a href="#'+esc(t.id)+'"><span>'+esc(t.no)+'</span>'+esc(t.title)+'</a>';}).join('');
  document.getElementById('kr-toc').innerHTML = nav;
  document.getElementById('kr-mobile-toc').innerHTML = nav;
  document.getElementById('record-total').textContent = K.topics.length+'개 주제 · '+K.topics.reduce(function (n,t) {return n+t.records.length;},0)+'개 기록';
  document.getElementById('kr-topics').innerHTML = K.topics.map(function (topic,index) {
    var next = K.topics[index+1];
    return '<section class="kr-topic" id="'+esc(topic.id)+'" aria-labelledby="'+esc(topic.id)+'-title"><div class="kr-topic-heading"><p class="eyebrow mono">KOREA / '+esc(topic.no)+'</p><h2 id="'+esc(topic.id)+'-title">'+esc(topic.title)+'</h2><p>'+esc(topic.desc)+'</p></div>'+topic.records.map(function (r,i) {return renderRecord(r,i===0);}).join('')+(next?'<div class="topic-next"><a class="text-link" href="#'+esc(next.id)+'">다음 기록 · '+esc(next.title)+' '+icon()+'</a></div>':'')+'</section>';
  }).join('');
})();

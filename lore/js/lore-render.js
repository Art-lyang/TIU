(function () {
  'use strict';
  var esc = function (v) { return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); };
  var icon = function (name) { return '<img class="icon" src="./assets/icons/' + (name || 'arrow-right') + '.svg" alt="" width="18" height="18">'; };
  var announcement = document.getElementById('announcement');
  var fallback = document.getElementById('copy-fallback');
  var returnFocus;
  function showHash() {
    var id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch (_) { return; }
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    var item = target;
    while (item && item !== document.body) { if (item.tagName === 'DETAILS') item.open = true; item = item.parentElement; }
    if (target.classList.contains('kr-topic')) { var first = target.querySelector('details'); if (first) first.open = true; }
    document.querySelectorAll('.topic-sidebar a').forEach(function (link) {
      if (link.getAttribute('href') === '#' + id || (target.closest('.kr-topic') && link.hash === '#' + target.closest('.kr-topic').id)) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
    requestAnimationFrame(function () {
      target.scrollIntoView({block:'start',behavior:'instant'});
      var focusTarget = target.tagName === 'DETAILS' ? target.querySelector('summary') : target;
      if (!focusTarget.hasAttribute('tabindex') && focusTarget.tagName !== 'SUMMARY') focusTarget.tabIndex = -1;
      focusTarget.focus({preventScroll:true});
    });
  }
  function closeFallback() {
    fallback.hidden = true;
    if (returnFocus && returnFocus.isConnected) returnFocus.focus();
  }
  document.addEventListener('click',async function (event) {
    var button = event.target.closest('[data-copy-id]');
    if (button) {
      var url = new URL(location.href); url.search = ''; url.hash = button.dataset.copyId;
      var original = button.textContent;
      button.disabled = true;
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(url.href);
        button.textContent = '링크 복사됨';
        announcement.textContent = '기록 링크를 복사했습니다.';
        setTimeout(function () { if (button.isConnected) button.textContent = original; },1800);
      } catch (_) {
        returnFocus = button; fallback.hidden = false;
        var field = document.getElementById('copy-url'); field.value = url.href; field.focus(); field.select();
        announcement.textContent = '복사할 주소를 표시했습니다.';
      } finally { button.disabled = false; }
    }
    var mobileLink = event.target.closest('.mobile-toc a, .mobile-menu nav a');
    if (mobileLink) mobileLink.closest('details').open = false;
  });
  document.getElementById('copy-close').addEventListener('click',closeFallback);
  document.addEventListener('keydown',function (event) {
    if (event.key !== 'Escape') return;
    if (!fallback.hidden) { closeFallback(); return; }
    document.querySelectorAll('.mobile-menu[open],.mobile-toc[open]').forEach(function (menu) { menu.open = false; menu.querySelector('summary').focus(); });
  });
  document.addEventListener('pointerdown',function (event) {
    var menu = document.querySelector('.mobile-menu[open]');
    if (menu && !menu.contains(event.target)) menu.open = false;
  });
  window.addEventListener('hashchange',showHash);
  window.TIU_UI = {esc:esc,icon:icon,showHash:showHash};
  document.addEventListener('DOMContentLoaded',function () {
    var fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();
    fontsReady.then(showHash);
  });
})();

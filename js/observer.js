// ═══ OBSERVER.JS — OBSERVER ACCESS logic ═══

// ═══ OBSERVER ACCESS — SELF-CONTAINED ═══
(function(){
  function initObserverAccess(){
    var input = document.getElementById('db-search');
    var overlay = document.getElementById('apex-overlay');
    var response = document.getElementById('ot-response');
    var dbContent = document.querySelector('.db-content');
    
    if(!input || !overlay) return;

    input.addEventListener('keydown', function(e){
      if(e.key !== 'Enter') return;

      var cmd = input.value.trim().toUpperCase();
      if(cmd !== 'PROTOCOL: OBSERVER' && cmd !== 'PROTOCOL:OBSERVER'){
        // Not an observer command — let other handlers process it
        return;
      }

      e.preventDefault();
      e.stopImmediatePropagation();
      input.disabled = true;
      
      if(response){
        response.innerHTML = '<span style="color:#ff3b3b;font-family:Share Tech Mono,monospace;font-size:11px;letter-spacing:2px;">ACCESS GRANTED. DECRYPTING DATABASE...</span>';
      }
      
      // Simple delayed reveal — no fancy animation
      setTimeout(function(){
        // Hide normal content
        if(dbContent) dbContent.style.display = 'none';
        // Show observer access
        overlay.style.display = 'block';
        overlay.scrollIntoView({behavior:'smooth'});
      }, 800);
    });

    // Close button
    var closeBtn = overlay.querySelector('.apex-close');
    if(closeBtn){
      closeBtn.addEventListener('click', function(){
        overlay.style.display = 'none';
        if(dbContent) dbContent.style.display = '';
        input.disabled = false;
        input.value = '';
        if(response) response.textContent = '';
        window.scrollTo(0,0);
      });
    }
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initObserverAccess);
  } else {
    initObserverAccess();
  }
})();
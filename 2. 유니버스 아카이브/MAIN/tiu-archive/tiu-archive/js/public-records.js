(function () {
  'use strict';

  function normalize(value) {
    return (value || '').trim().toUpperCase().replace(/[\s_-]/g, '');
  }

  function initCaseModal() {
    const modal = document.querySelector('[data-case-modal]');
    if (!modal) return;

    const input = modal.querySelector('[data-case-code]');
    const gate = modal.querySelector('[data-case-gate]');
    const content = modal.querySelector('[data-case-content]');
    const error = modal.querySelector('[data-case-error]');
    const validCodes = new Set(['GANGWON', '강원', 'GW', 'GW2032']);
    let lastFocus = null;

    function openModal() {
      lastFocus = document.activeElement;
      modal.hidden = false;
      if (gate) gate.hidden = false;
      if (content) content.hidden = true;
      if (error) error.hidden = true;
      if (input) {
        input.value = '';
        window.setTimeout(() => input.focus(), 0);
      }
      document.body.classList.add('case-modal-open');
    }

    function closeModal() {
      modal.hidden = true;
      document.body.classList.remove('case-modal-open');
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    }

    function submitCode() {
      const normalized = normalize(input && input.value);
      if (validCodes.has(normalized)) {
        if (gate) gate.hidden = true;
        if (content) content.hidden = false;
        if (error) error.hidden = true;
        return;
      }
      if (error) error.hidden = false;
    }

    document.querySelectorAll('[data-case-open]').forEach(button => {
      button.addEventListener('click', openModal);
    });

    modal.addEventListener('click', event => {
      if (event.target.closest('[data-case-close]')) closeModal();
      if (event.target.closest('[data-case-submit]')) submitCode();
    });

    modal.addEventListener('keydown', event => {
      if (event.key === 'Escape') closeModal();
      if (event.key === 'Enter' && !content.hidden) return;
      if (event.key === 'Enter') submitCode();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCaseModal);
  } else {
    initCaseModal();
  }
})();

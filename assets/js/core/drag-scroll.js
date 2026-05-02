/* TIU v3 — DRAG TO SCROLL (global)
 * 가로 스크롤 영역을 마우스 드래그로 스크롤할 수 있게 함 */
window.TIU_DragScroll = {
  init: function(selector) {
    const els = document.querySelectorAll(selector || '[data-drag-scroll]');
    els.forEach(el => this._attach(el));
  },

  _attach: function(el) {
    if (el.dataset.dragAttached) return;
    el.dataset.dragAttached = '1';

    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const down = (e) => {
      isDown = true;
      moved = false;
      el.classList.add('is-dragging');
      startX = (e.pageX || e.touches?.[0]?.pageX) - el.offsetLeft;
      startScroll = el.scrollLeft;
    };

    const move = (e) => {
      if (!isDown) return;
      const x = (e.pageX || e.touches?.[0]?.pageX) - el.offsetLeft;
      const dx = x - startX;
      if (Math.abs(dx) > 3) moved = true;
      el.scrollLeft = startScroll - dx;
      /* 드래그 중 텍스트 선택 방지 */
      if (e.cancelable) e.preventDefault();
    };

    const up = () => {
      if (!isDown) return;
      isDown = false;
      el.classList.remove('is-dragging');
    };

    el.addEventListener('mousedown', down);
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseup', up);
    el.addEventListener('mouseleave', up);

    /* 터치는 브라우저 기본 동작 사용 (overflow-x: auto) */

    /* 드래그 도중에 발생한 클릭은 무시 (호버 텍스트 등 원치 않는 트리거 방지) */
    el.addEventListener('click', (e) => {
      if (moved) {
        e.stopPropagation();
        e.preventDefault();
      }
    }, true);
  }
};

(function () {
  const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
  const termCards = Array.from(document.querySelectorAll(".term-card"));
  const copyButton = document.getElementById("copyBriefing");
  const copyStatus = document.getElementById("copyStatus");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";

      filterButtons.forEach((item) => {
        item.classList.toggle("is-active", item === button);
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });

      termCards.forEach((card) => {
        const matches = filter === "all" || card.dataset.type === filter;
        card.classList.toggle("is-hidden", !matches);
      });
    });
  });

  if (copyButton && copyStatus) {
    copyButton.addEventListener("click", async () => {
      const localized = window.KOR_INIT_COPY;
      const text = (localized && localized.text ? localized.text : [
        "ORACLE SYSTEM MANUAL / KR-INIT-001",
        "1. 오라클 AI를 운용하는 기지의 신규 지휘관을 위한 안내 교본입니다.",
        "2. KR-INIT-001, SPEC, Phase, NADL은 오라클 명령문과 운용 로그에서 반복 확인되는 기본 식별자입니다.",
        "3. 오라클 단말 정보와 현장 인원의 인지 범위는 구분됩니다.",
        "4. 핵심 인원: 이중철(지휘), 서하은(데이터), 강도윤(현장), 윤세진(의료), 임재혁(시스템).",
        "5. 더 깊은 기록은 권한 상승 및 후속 아카이브에서 이어집니다."
      ]).join("\n");

      try {
        await navigator.clipboard.writeText(text);
        copyStatus.textContent = localized && localized.status
          ? localized.status
          : "교본 요약이 클립보드에 복사되었습니다.";
      } catch (error) {
        copyStatus.textContent = localized && localized.error
          ? localized.error
          : "복사 권한을 사용할 수 없습니다. 브라우저 설정을 확인해주세요.";
      }
    });
  }
})();

(function () {
  var labels = {
    ko: {
      kicker: "TIU NAVIGATION",
      title: "\uc544\uce74\uc774\ube0c \uba54\ub274",
      status: "NETWORK DIRECTORY / KR-PZ-10",
      close: "\uba54\ub274 \ub2eb\uae30",
      footLeft: "CLEARANCE LIMITED",
      footRight: "SESSION ROUTING ACTIVE",
      items: [
        ["PUBLIC RECORDS", "공개 기록관", "빠른 공개 색인"],
        ["ARCHIVE DETAILS", "아카이브 상세", "연표 · 지도 · 세력 상세 기록"],
        ["ACCESS", "\uc811\uc18d \ud504\ub85c\ud1a0\ucf5c", "\uac8c\uc2a4\ud2b8 \uc138\uc158 \uc9c4\uc785"],
        ["TIMELINE", "\ubc1c\uc0dd \uc5f0\ud45c", "\uc2dc\uac04\uc21c \uae30\ub85d \uc0c9\uc778"],
        ["THREAT MAP", "\uae00\ub85c\ubc8c \uc704\ud611 \uc9c0\ub3c4", "\ud655\uc0b0 \ud604\ud669\uacfc \uc704\ud611 \ub4f1\uae09"],
        ["KOREA BRANCH", "\uc9c0\ubd80 \u00b7 \ub300\ud55c\ubbfc\uad6d", "\ud55c\uad6d \uac70\uc810 \uc6b4\uc601 \ud604\ud669"],
        ["FACTIONS", "\uc8fc\uc694 \uc138\ub825", "\uc138\ub825\uac04 \uc774\ud574\uad00\uacc4"]
      ]
    },
    en: {
      kicker: "TIU NAVIGATION",
      title: "Archive Menu",
      status: "NETWORK DIRECTORY / KR-PZ-10",
      close: "Close menu",
      footLeft: "CLEARANCE LIMITED",
      footRight: "SESSION ROUTING ACTIVE",
      items: [
        ["PUBLIC RECORDS", "Public Records", "Quick public index"],
        ["ARCHIVE DETAILS", "Archive Details", "Timeline, map, and faction records"],
        ["ACCESS", "Access Protocol", "Enter the guest session"],
        ["TIMELINE", "Timeline", "Chronological incident index"],
        ["THREAT MAP", "Global Threat Map", "Spread status and threat ratings"],
        ["KOREA BRANCH", "Korea Branch", "Korean node operations"],
        ["FACTIONS", "Factions", "Strategic relationship map"]
      ]
    },
    ja: {
      kicker: "TIU NAVIGATION",
      title: "\u30a2\u30fc\u30ab\u30a4\u30d6\u30e1\u30cb\u30e5\u30fc",
      status: "NETWORK DIRECTORY / KR-PZ-10",
      close: "\u30e1\u30cb\u30e5\u30fc\u3092\u9589\u3058\u308b",
      footLeft: "CLEARANCE LIMITED",
      footRight: "SESSION ROUTING ACTIVE",
      items: [
        ["PUBLIC RECORDS", "公開記録館", "クイック公開索引"],
        ["ARCHIVE DETAILS", "アーカイブ詳細", "年表・地図・勢力詳細記録"],
        ["ACCESS", "\u30a2\u30af\u30bb\u30b9 \u30d7\u30ed\u30c8\u30b3\u30eb", "\u30b2\u30b9\u30c8\u30bb\u30c3\u30b7\u30e7\u30f3\u306b\u5165\u5834"],
        ["TIMELINE", "\u767a\u751f\u5e74\u8868", "\u6642\u7cfb\u5217\u306e\u8a18\u9332\u7d22\u5f15"],
        ["THREAT MAP", "\u30b0\u30ed\u30fc\u30d0\u30eb\u8105\u5a01\u5730\u56f3", "\u62e1\u6563\u72b6\u6cc1\u3068\u8105\u5a01\u7b49\u7d1a"],
        ["KOREA BRANCH", "\u652f\u90e8 \u00b7 \u5927\u97d3\u6c11\u56fd", "\u97d3\u56fd\u30ce\u30fc\u30c9\u306e\u904b\u7528\u72b6\u6cc1"],
        ["FACTIONS", "\u4e3b\u8981\u52e2\u529b", "\u52e2\u529b\u9593\u306e\u5229\u5bb3\u95a2\u4fc2"]
      ]
    }
  };

  var targets = ["public-records", "landing", "access", "timeline", "threat-map", "korea-branch", "factions"];
  var menuButton;
  var overlay;
  var lastFocus;

  function lang() {
    return labels[document.documentElement.lang] ? document.documentElement.lang : "ko";
  }

  function hrefs() {
    var path = window.location.pathname;
    var isStandalone = /standalone\.html$/i.test(path);
    var isLanding = /landing/i.test(path);
    var isPublic = /public-records/i.test(path);
    var landing = isStandalone ? "landing-standalone.html" : "landing.html";
    var publicRecords = isStandalone ? "public-records-standalone.html" : "public-records.html";
    var access = isStandalone ? "access-protocol-standalone.html" : "access-protocol.html";
    return [
      isPublic ? "#public-records" : publicRecords + "#public-records",
      landing,
      access,
      isLanding ? "#timeline-dossier" : landing + "#timeline-dossier",
      isLanding ? "#threat-map" : landing + "#threat-map",
      isLanding ? "#branch-dossier" : landing + "#branch-dossier",
      isLanding ? "#factions-dossier" : landing + "#factions-dossier"
    ];
  }

  function currentIndex() {
    var path = window.location.pathname;
    if (/public-records/i.test(path)) return 0;
    if (/access-protocol/i.test(path)) return 2;
    return 1;
  }

  function renderText() {
    var dict = labels[lang()];
    var links = hrefs();
    overlay.querySelector(".archive-menu__kicker").textContent = dict.kicker;
    overlay.querySelector(".archive-menu__title").textContent = dict.title;
    overlay.querySelector(".archive-menu__status").textContent = dict.status;
    overlay.querySelector(".archive-menu__close").setAttribute("aria-label", dict.close);
    overlay.querySelector(".archive-menu__foot-left").textContent = dict.footLeft;
    overlay.querySelector(".archive-menu__foot-right").textContent = dict.footRight;
    overlay.setAttribute("aria-label", dict.title);

    overlay.querySelectorAll(".archive-menu__link").forEach(function (link, index) {
      link.href = links[index];
      link.querySelector(".archive-menu__code").textContent = dict.items[index][0];
      link.querySelector(".archive-menu__label").textContent = dict.items[index][1];
      link.querySelector(".archive-menu__desc").textContent = dict.items[index][2];
      if (index === currentIndex()) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function buildMenu() {
    overlay = document.createElement("div");
    overlay.className = "archive-menu";
    overlay.hidden = true;
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML =
      '<div class="archive-menu__scrim" data-menu-close></div>' +
      '<div class="archive-menu__panel">' +
      '<div class="archive-menu__head"><div><span class="archive-menu__kicker"></span>' +
      '<h2 class="archive-menu__title"></h2><span class="archive-menu__status"></span></div>' +
      '<button class="archive-menu__close" type="button" data-menu-close></button></div>' +
      '<nav class="archive-menu__links" aria-label="Archive navigation">' +
      targets.map(function () {
        return '<a class="archive-menu__link" href="#"><span class="archive-menu__code"></span>' +
          '<span><span class="archive-menu__label"></span><span class="archive-menu__desc"></span></span></a>';
      }).join("") +
      '</nav><div class="archive-menu__foot"><span class="archive-menu__foot-left"></span>' +
      '<span class="archive-menu__foot-right"></span></div></div>';
    document.body.appendChild(overlay);
    renderText();
  }

  function openMenu() {
    lastFocus = document.activeElement;
    renderText();
    overlay.hidden = false;
    document.body.classList.add("archive-menu-open");
    menuButton.setAttribute("aria-expanded", "true");
    overlay.querySelector(".archive-menu__close").focus();
  }

  function closeMenu() {
    overlay.hidden = true;
    document.body.classList.remove("archive-menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function bindEvents() {
    menuButton.addEventListener("click", openMenu);
    overlay.addEventListener("click", function (event) {
      if (event.target.closest("[data-menu-close]")) closeMenu();
      if (event.target.closest(".archive-menu__link")) closeMenu();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !overlay.hidden) closeMenu();
    });
    document.querySelectorAll("[data-lang-btn]").forEach(function (button) {
      button.addEventListener("click", function () { window.setTimeout(renderText, 0); });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    menuButton = document.querySelector(".ap-menu");
    if (!menuButton) return;
    buildMenu();
    menuButton.setAttribute("aria-expanded", "false");
    bindEvents();
  });
})();

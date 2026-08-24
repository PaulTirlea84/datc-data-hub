(function () {
  "use strict";

  function key(id) {
    return "datc-course:" + id;
  }

  function updateBadge(level, track) {
    var sel = '.course-done[data-level="' + level + '"][data-mandatory="true"]';
    if (track) sel += '[data-track="' + track + '"]';
    var all   = document.querySelectorAll(sel);
    var done  = [].filter.call(all, function (c) { return c.checked; }).length;

    var bSel = '.level-progress[data-level="' + level + '"]';
    if (track) bSel += '[data-track="' + track + '"]';
    var badge = document.querySelector(bSel);
    if (!badge || all.length === 0) return;

    if (done === all.length) {
      badge.className = "level-progress lp-ok";
      badge.textContent =
        "✓ " + level.toUpperCase() +
        (track ? " — " + track.toUpperCase() : "") +
        ": all " + all.length + " mandatory courses completed";
    } else {
      badge.className = "level-progress lp-wip";
      badge.textContent = done + " / " + all.length + " mandatory completed";
    }
  }

  function init() {
    var cbs = document.querySelectorAll(".course-done[data-id]");
    [].forEach.call(cbs, function (cb) {
      if (localStorage.getItem(key(cb.dataset.id)) === "1") cb.checked = true;
      cb.addEventListener("change", function () {
        localStorage.setItem(key(cb.dataset.id), cb.checked ? "1" : "0");
        updateBadge(cb.dataset.level, cb.dataset.track || "");
      });
    });

    document.querySelectorAll(".level-progress").forEach(function (el) {
      updateBadge(el.dataset.level, el.dataset.track || "");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

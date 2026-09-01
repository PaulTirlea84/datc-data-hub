(function () {
  "use strict";

  function key(id) { return "datc-course:" + id; }

  function updateBadge(level, track) {
    // All items (mandatory + optional) — for display count
    var selAll = '.course-done[data-level="' + level + '"]';
    if (track) selAll += '[data-track="' + track + '"]';
    var allItems = document.querySelectorAll(selAll);
    var doneAll  = [].filter.call(allItems, function (c) { return c.checked; }).length;

    // Mandatory only — for threshold check
    var selMand = '.course-done[data-level="' + level + '"][data-mandatory="true"]';
    if (track) selMand += '[data-track="' + track + '"]';
    var mandItems = document.querySelectorAll(selMand);
    var doneMand  = [].filter.call(mandItems, function (c) { return c.checked; }).length;

    var bSel = '.level-progress[data-level="' + level + '"]';
    if (track) bSel += '[data-track="' + track + '"]';
    var badge = document.querySelector(bSel);
    if (!badge || allItems.length === 0) return;

    var threshold = parseInt(badge.dataset.threshold || mandItems.length, 10);

    if (doneMand >= threshold) {
      badge.className = "level-progress lp-ok";
      badge.textContent = "✓ " + doneAll + " / " + allItems.length + " completed · target of " + threshold + " met";
    } else {
      badge.className = "level-progress lp-wip";
      badge.textContent = doneAll + " / " + allItems.length + " completed · target: " + threshold;
    }
  }

  function updateSummary() {
    var el = document.querySelector(".proficiency-summary");
    if (!el) return;

    function isDone(id) { return localStorage.getItem(key(id)) === "1"; }

    var levels = ["p1", "p2", "p3", "p4"];
    var mandatory = {
      p1: JSON.parse(el.dataset.p1Mandatory || "[]"),
      p2: JSON.parse(el.dataset.p2Mandatory || "[]"),
      p3: JSON.parse(el.dataset.p3Mandatory || "[]"),
      p4: JSON.parse(el.dataset.p4Mandatory || "[]")
    };
    var p5ids      = JSON.parse(el.dataset.p5Ids || "[]");
    var p5threshold = parseInt(el.dataset.p5Threshold || "3", 10);
    var updateUrl  = el.dataset.updateUrl || "";

    var levelNames = {
      p1: "P1 — AI Assisted",
      p2: "P2 — AI Accelerated",
      p3: "P3 — Agentic AI",
      p4: "P4 — Integrated AI",
      p5: "P5 — Governed AI"
    };

    function levelComplete(lvl) {
      if (lvl === "p5") return p5ids.filter(isDone).length >= p5threshold;
      return mandatory[lvl].length > 0 && mandatory[lvl].every(isDone);
    }

    // Highest consecutive completed level
    var achieved = null;
    for (var i = 0; i < levels.length; i++) {
      if (levelComplete(levels[i])) { achieved = levels[i]; } else { break; }
    }
    if (achieved === "p4" && levelComplete("p5")) achieved = "p5";

    // Next target
    var nextLvl = null;
    for (var j = 0; j < levels.length; j++) {
      if (!levelComplete(levels[j])) { nextLvl = levels[j]; break; }
    }
    if (!nextLvl && achieved === "p4" && !levelComplete("p5")) nextLvl = "p5";

    // Total checked
    var allIds = mandatory.p1.concat(mandatory.p2, mandatory.p3, mandatory.p4, p5ids);
    var checkedCount = allIds.filter(isDone).length;
    var totalCount   = allIds.length;

    var html = "";

    if (checkedCount === 0) {
      html = '<div class="ps-box ps-empty">'
           + '<span class="ps-icon">○</span>'
           + '<div class="ps-body"><strong>No items confirmed yet</strong>'
           + '<p>Complete courses and check them off above — your recommended level will appear here.</p>'
           + '</div></div>';
    } else if (achieved) {
      html = '<div class="ps-box ps-ok">'
           + '<span class="ps-icon">✓</span>'
           + '<div class="ps-body"><strong>Recommended level: ' + levelNames[achieved] + '</strong>';
      if (nextLvl) {
        var nd = (nextLvl === "p5") ? p5ids.filter(isDone).length : mandatory[nextLvl].filter(isDone).length;
        var nt = (nextLvl === "p5") ? p5threshold : mandatory[nextLvl].length;
        html += '<p>' + checkedCount + ' of ' + totalCount + ' items confirmed'
              + ' &nbsp;·&nbsp; next: ' + nd + ' / ' + nt + ' items towards ' + levelNames[nextLvl] + '</p>';
      } else {
        html += '<p>' + checkedCount + ' of ' + totalCount + ' items confirmed — all levels complete.</p>';
      }
      html += '</div></div>';
    } else {
      var nd2 = (nextLvl === "p5") ? p5ids.filter(isDone).length : mandatory[nextLvl].filter(isDone).length;
      var nt2 = (nextLvl === "p5") ? p5threshold : mandatory[nextLvl].length;
      html = '<div class="ps-box ps-wip">'
           + '<span class="ps-icon">◑</span>'
           + '<div class="ps-body"><strong>In progress — working towards ' + levelNames[nextLvl] + '</strong>'
           + '<p>' + nd2 + ' / ' + nt2 + ' mandatory items for ' + levelNames[nextLvl]
           + ' &nbsp;·&nbsp; ' + checkedCount + ' items confirmed in total</p>'
           + '</div></div>';
    }

    if (updateUrl && checkedCount > 0) {
      html += '<a href="' + updateUrl + '" target="_blank" class="ps-update-link">'
            + 'Update my proficiency level in Power Apps →</a>';
    }

    el.innerHTML = html;
  }

  function init() {
    var cbs = document.querySelectorAll(".course-done[data-id]");
    [].forEach.call(cbs, function (cb) {
      if (localStorage.getItem(key(cb.dataset.id)) === "1") cb.checked = true;
      cb.addEventListener("change", function () {
        localStorage.setItem(key(cb.dataset.id), cb.checked ? "1" : "0");
        updateBadge(cb.dataset.level, cb.dataset.track || "");
        if (cb.dataset.track) updateBadge(cb.dataset.level, "");
        updateSummary();
      });
    });

    document.querySelectorAll(".level-progress").forEach(function (el) {
      updateBadge(el.dataset.level, el.dataset.track || "");
    });

    updateSummary();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();

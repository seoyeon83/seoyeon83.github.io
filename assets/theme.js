(function () {
  var KEY = "theme";
  var root = document.documentElement;

  function current() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    function sync() {
      var dark = current() === "dark";
      btn.setAttribute("aria-label", dark ? "라이트 모드로 전환" : "다크 모드로 전환");
      btn.setAttribute("aria-pressed", String(dark));
    }
    sync();
    btn.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      sync();
    });
  });
})();

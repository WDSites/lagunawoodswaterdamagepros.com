(function () {
  var t = document.getElementById("mob-toggle");
  var d = document.getElementById("mob-drawer");
  var o = document.getElementById("mob-overlay");
  var c = document.getElementById("drawer-close");
  function openMenu() {
    d.classList.add("open");
    o.classList.add("visible");
    t.setAttribute("aria-expanded", "true");
    document.documentElement.style.overflow = "hidden";
  }
  function closeMenu() {
    d.classList.remove("open");
    o.classList.remove("visible");
    t.setAttribute("aria-expanded", "false");
    document.documentElement.style.overflow = "";
  }
  if (t && d && o) {
    t.addEventListener("click", function () {
      if (t.getAttribute("aria-expanded") === "true") { closeMenu(); } else { openMenu(); }
    });
    if (c) { c.addEventListener("click", closeMenu); }
    o.addEventListener("click", closeMenu);
    var links = d.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeMenu); }
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeMenu(); } });
  }
  var qs = document.querySelectorAll(".faq-q");
  for (var j = 0; j < qs.length; j++) {
    qs[j].addEventListener("click", function () {
      var item = this.parentNode;
      var isOpen = item.classList.contains("open");
      item.classList.toggle("open");
      this.setAttribute("aria-expanded", isOpen ? "false" : "true");
    });
  }
})();

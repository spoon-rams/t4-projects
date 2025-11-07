document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".program-search")) {
    var e = document.getElementById("area-study-button"),
      t = document.getElementById("degree-button"),
      n = document.getElementById("college-school-button"),
      r = document.getElementById("campus-button"),
      i = document.getElementById("modality-button"),
      o = document.getElementById("schedule-button"),
      x = document.getElementById("living-learning-button"),
      s = document.getElementById("area-study-filter"),
      a = document.getElementById("degree-filter"),
      c = document.getElementById("college-school-filter"),
      l = document.getElementById("campus-filter"),
      u = document.getElementById("modality-filter"),
      f = document.getElementById("schedule-filter"),
      g = document.getElementById("living-learning-filter");
    x &&
      x.addEventListener("click", function () {
        g.classList.contains("active") ? g.classList.remove("active") : g.classList.add("active"),
          s && s.classList.contains("active") && s.classList.remove("active"),
          a && a.classList.contains("active") && a.classList.remove("active"),
          c && c.classList.contains("active") && c.classList.remove("active"),
          l && l.classList.contains("active") && l.classList.remove("active"),
          f && f.classList.contains("active") && f.classList.remove("active"),
          u && u.classList.contains("active") && u.classList.remove("active");
      }),
      e &&
        e.addEventListener("click", function () {
          s.classList.contains("active") ? s.classList.remove("active") : s.classList.add("active"),
            a && a.classList.contains("active") && a.classList.remove("active"),
            c && c.classList.contains("active") && c.classList.remove("active"),
            l && l.classList.contains("active") && l.classList.remove("active"),
            u && u.classList.contains("active") && u.classList.remove("active"),
            g && g.classList.contains("active") && g.classList.remove("active"),
            f && f.classList.contains("active") && f.classList.remove("active");
        }),
      t &&
        t.addEventListener("click", function () {
          a.classList.contains("active") ? a.classList.remove("active") : a.classList.add("active"),
            s && s.classList.contains("active") && s.classList.remove("active"),
            c && c.classList.contains("active") && c.classList.remove("active"),
            l && l.classList.contains("active") && l.classList.remove("active"),
            u && u.classList.contains("active") && u.classList.remove("active"),
            g && g.classList.contains("active") && g.classList.remove("active"),
            f && f.classList.contains("active") && f.classList.remove("active");
        }),
      n &&
        n.addEventListener("click", function () {
          c.classList.contains("active") ? c.classList.remove("active") : c.classList.add("active"),
            s && s.classList.contains("active") && s.classList.remove("active"),
            a && a.classList.contains("active") && a.classList.remove("active"),
            l && l.classList.contains("active") && l.classList.remove("active"),
            u && u.classList.contains("active") && u.classList.remove("active"),
            g && g.classList.contains("active") && g.classList.remove("active"),
            f && f.classList.contains("active") && f.classList.remove("active");
        }),
      r &&
        r.addEventListener("click", function () {
          l.classList.contains("active") ? l.classList.remove("active") : l.classList.add("active"),
            s && s.classList.contains("active") && s.classList.remove("active"),
            a && a.classList.contains("active") && a.classList.remove("active"),
            c && c.classList.contains("active") && c.classList.remove("active"),
            u && u.classList.contains("active") && u.classList.remove("active"),
            g && g.classList.contains("active") && g.classList.remove("active"),
            f && f.classList.contains("active") && f.classList.remove("active");
        }),
      o &&
        o.addEventListener("click", function () {
          f.classList.contains("active") ? f.classList.remove("active") : f.classList.add("active"),
            s && s.classList.contains("active") && s.classList.remove("active"),
            a && a.classList.contains("active") && a.classList.remove("active"),
            c && c.classList.contains("active") && c.classList.remove("active"),
            u && u.classList.contains("active") && u.classList.remove("active"),
            g && g.classList.contains("active") && g.classList.remove("active"),
            l && l.classList.contains("active") && l.classList.remove("active");
        }),
      i &&
        i.addEventListener("click", function () {
          u.classList.contains("active") ? u.classList.remove("active") : u.classList.add("active"),
            s && s.classList.contains("active") && s.classList.remove("active"),
            a && a.classList.contains("active") && a.classList.remove("active"),
            c && c.classList.contains("active") && c.classList.remove("active"),
            l && l.classList.contains("active") && l.classList.remove("active"),
            g && g.classList.contains("active") && g.classList.remove("active"),
            f && f.classList.contains("active") && f.classList.remove("active");
        });
  }
});

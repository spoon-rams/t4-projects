we = function () {
  if (document.querySelector(".program-search")) {
    var e = document.getElementById("area-study-button"),
      t = document.getElementById("degree-button"),
      n = document.getElementById("college-school-button"),
      r = document.getElementById("campus-button"),
      u = document.getElementById("modality-button"),
      /* ADDED SCHEDULE BUTTON */
      k = document.getElementById("schedule-button"),
      /* END */

      i = document.getElementById("area-study-filter"),
      o = document.getElementById("degree-filter"),
      s = document.getElementById("college-school-filter"),
      a = document.getElementById("campus-filter"),
      q = document.getElementById("modality-filter"),
      /* ADDED SCHEDULE FILTER */
      b = document.getElementById("schedule-filter");
    /* END */

    e.addEventListener("click", function () {
      i.classList.contains("active") ? i.classList.remove("active") : i.classList.add("active"),
        o.classList.contains("active") && o.classList.remove("active"),
        s.classList.contains("active") && s.classList.remove("active"),
        a.classList.contains("active") && a.classList.remove("active"),
        u && q.classList.contains("active") && q.classList.remove("active"),
        // ADDED SCHEDULE FILTER REMOVAL
        k && b.classList.contains("active") && b.classList.remove("active");
    }),
      t.addEventListener("click", function () {
        o.classList.contains("active") ? o.classList.remove("active") : o.classList.add("active"),
          i.classList.contains("active") && i.classList.remove("active"),
          s.classList.contains("active") && s.classList.remove("active"),
          a.classList.contains("active") && a.classList.remove("active"),
          u && q.classList.contains("active") && q.classList.remove("active"),
          // ADDED SCHEDULE FILTER REMOVAL
          k && b.classList.contains("active") && b.classList.remove("active");
      }),
      n.addEventListener("click", function () {
        s.classList.contains("active") ? s.classList.remove("active") : s.classList.add("active"),
          i.classList.contains("active") && i.classList.remove("active"),
          o.classList.contains("active") && o.classList.remove("active"),
          a.classList.contains("active") && a.classList.remove("active"),
          u && q.classList.contains("active") && q.classList.remove("active"),
          // ADDED SCHEDULE FILTER REMOVAL
          k && b.classList.contains("active") && b.classList.remove("active");
      }),
      r.addEventListener("click", function () {
        a.classList.contains("active") ? a.classList.remove("active") : a.classList.add("active"),
          i.classList.contains("active") && i.classList.remove("active"),
          o.classList.contains("active") && o.classList.remove("active"),
          s.classList.contains("active") && s.classList.remove("active"),
          q.classList.contains("active") && q.classList.remove("active"),
          // ADDED SCHEDULE FILTER REMOVAL
          b.classList.contains("active") && b.classList.remove("active");
      });

    if (u || k) {
        
      u.addEventListener("click", () => {
        q.classList.contains("active") ? q.classList.remove("active") : q.classList.add("active"),
          i.classList.contains("active") && i.classList.remove("active"),
          o.classList.contains("active") && o.classList.remove("active"),
          s.classList.contains("active") && s.classList.remove("active"),
          a.classList.contains("active") && a.classList.remove("active"),
          // ADDED SCHEDULE FILTER REMOVAL
          k && b.classList.contains("active") && b.classList.remove("active");
      }),
        /* ADDED SCHEDULE BUTTON CLICK ACTION */
        k.addEventListener("click", () => {
          b.classList.contains("active") ? b.classList.remove("active") : b.classList.add("active"),
            i.classList.contains("active") && i.classList.remove("active"),
            o.classList.contains("active") && o.classList.remove("active"),
            s.classList.contains("active") && s.classList.remove("active"),
            a.classList.contains("active") && a.classList.remove("active"),
            u && q.classList.contains("active") && q.classList.remove("active");
        });
      /* END */
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".featured-stories")) {
    var e = document.querySelector(".featured-stories .slide-container"),
      t = document.querySelectorAll(".featured-stories .slide"),
      n = document.querySelector(".featured-stories .carousel-arrow.prev"),
      r = document.querySelector(".featured-stories .carousel-arrow.next"),
      i = 0,
      o = 1,
      s = t[0].clientWidth;
    c(),
      u(),
      window.addEventListener("resize", function () {
        c(), u(), l();
      }),
      r.addEventListener("click", function () {
        i < t.length - o && (i++, l(), u());
      }),
      n.addEventListener("click", function () {
        i > 0 && (i--, l(), u());
      });
    var a = 0;
    function c() {
      var e = window.innerWidth;
      (o = e >= 1024 ? 3 : 1), (s = t[0].clientWidth);
    }
    function l() {
      var t, n, r, o, a, c;
      (n = i * s),
        (r = 600),
        (o = (t = e).scrollLeft),
        (a = n - o),
        (c = null),
        requestAnimationFrame(function e(n) {
          null === c && (c = n);
          var i,
            s,
            l,
            u = n - c,
            f = ((i = u), (s = o), (l = a), (i /= r / 2) < 1 ? (l / 2) * i * i + s : (i--, (-l / 2) * (i * (i - 2) - 1) + s));
          (t.scrollLeft = f), u < r && requestAnimationFrame(e);
        });
    }
    function u() {
      (n.style.visibility = 0 === i ? "hidden" : "visible"), i >= t.length - o ? (r.style.visibility = "hidden") : (r.style.visibility = "visible");
    }
    e.addEventListener("touchstart", function (e) {
      a = e.touches[0].clientX;
    }),
      e.addEventListener("touchend", function (e) {
        var n = e.changedTouches[0].clientX,
          r = a - n;
        r > 50 && i < t.length - o ? i++ : r < -50 && i > 0 && i--, l(), u();
      });
  }
});

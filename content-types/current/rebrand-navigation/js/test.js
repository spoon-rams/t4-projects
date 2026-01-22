document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".header-nav__bottom__list .header-nav__bottom__item.header-nav__dropdown");

  menuItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.children[1].classList.add("header-nav__dropdown-menu--active");
    });

    item.addEventListener("mouseout", () => {
      item.children[1].classList.remove("header-nav__dropdown-menu--active");
    });
  });
});

// SITE WIDE NOTICE FIX
window.addEventListener("load", () => {
  var e = document.querySelector(".header-sticky"),
    t = document.querySelector(".header-placeholder"),
    n = e.getBoundingClientRect().height,
    r = 0,
    i = document.querySelector(".notification-popup"),
    o = document.querySelector("html"),
    i = document.querySelector(".site-wide-notice"),
    g = document.querySelector(".fullwidth");

  if (window.innerWidth <= 1024 && i.children.length > 0) {
    g.style.marginTop = t.style.height;
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1279 && i.children.length > 0) {
      (g.style.marginTop = t.style.height),
        window.addEventListener("scroll", function () {
          var t = window.pageYOffset;
          0 === t || t < 0
            ? e.classList.remove("scroll-down")
            : (t > n && t > r && !e.classList.contains("scroll-down")
                ? (e.classList.remove("scroll-up"),
                  e.classList.add("scroll-down"),
                  i && i.classList.add("notification-popup--up"),
                  o.classList.contains("no-scroll") && e.classList.remove("scroll-down"))
                : t < r && e.classList.contains("scroll-down") && (e.classList.remove("scroll-down"), e.classList.add("scroll-up"), i && i.classList.remove("notification-popup--up")),
              (r = t));
        });
    } else {
      g.removeAttribute("style");
    }
  });
});

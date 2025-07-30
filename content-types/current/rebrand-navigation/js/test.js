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

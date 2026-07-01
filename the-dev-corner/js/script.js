const accordions = document.querySelectorAll(".accordion");
const submenuToggles = document.querySelectorAll(".submenu-toggle");

accordions.forEach((button) => {
  button.addEventListener("click", () => {
    const navItem = button.parentElement;
    if (navItem.classList.contains("open")) {
      navItem.classList.remove("open");
    } else {
      const openItem = document.querySelector(".nav-item.open");
      if (openItem) {
        openItem.classList.remove("open");
      }
      navItem.classList.add("open");
    }
  });
});

submenuToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const submenuItem = button.parentElement;
    submenuItem.classList.toggle("open");
  });
});

const navLinks = document.querySelectorAll(".submenu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

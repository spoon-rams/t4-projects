const accordions = document.querySelectorAll(".accordion");

accordions.forEach((button) => {
  button.addEventListener("click", () => {
    const navItem = button.parentElement;
    navItem.classList.toggle("open");
  });
});

const navLinks = document.querySelectorAll(".submenu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

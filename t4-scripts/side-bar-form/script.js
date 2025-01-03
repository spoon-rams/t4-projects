function moveForm() {
  const viewWidth = window.innerWidth;
  const form = document.querySelector(".inner__sidebar__widget");
  const sideBar = document.querySelector(".inner__sidebar");
  const footer = document.querySelector(".inner__footer");

  if (footer.firstChild) {
    while (footer.firstChild) {
      footer.removeChild(footer.firstChild);
    }
  }
  if (viewWidth < 991) {
    footer.appendChild(form);
  }
  if (viewWidth > 991) {
    sideBar.appendChild(form);
  }
}

window.addEventListener("resize", moveForm);
document.addEventListener("DOMContentLoaded", moveForm);

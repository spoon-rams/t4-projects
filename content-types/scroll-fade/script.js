document.addEventListener("DOMContentLoaded", function () {
  const fadeIns = document.querySelectorAll("section");

  function checkFadeIns() {
    fadeIns.forEach((fadeIn) => {
      const fadeInPosition = fadeIn.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (fadeInPosition < windowHeight * 0.9) {
        fadeIn.classList.add("active");
      } else {
        fadeIn.classList.remove("active");
      }
    });
  }

  // Initial check when the page loads
  checkFadeIns();

  // Check for fade-ins on scroll
  window.addEventListener("scroll", checkFadeIns);
});

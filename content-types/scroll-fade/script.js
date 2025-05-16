// document.addEventListener("DOMContentLoaded", function () {
//     const fadeIns = document.querySelectorAll("section");
//     function checkFadeIns() {
//       fadeIns.forEach((fadeIn) => {
//         const fadeInPosition = fadeIn.getBoundingClientRect().top;
//         const windowHeight = window.innerHeight;
//         if (fadeInPosition < windowHeight - 500) {
//           fadeIn.classList.add("animate__animated", "animate__fadeInUp", "active");
//         } else {
//           fadeIn.classList.remove("animate__animated", "animate__fadeInUp", "active");
//         }
//       });
//     }
//     // Initial check when the page loads
//     checkFadeIns();
//     // Check for fade-ins on scroll
//     window.addEventListener("scroll", checkFadeIns);
// });

document.addEventListener("DOMContentLoaded", function () {
  const fadeIns = document.querySelectorAll("section");

  function checkFadeIns() {
    fadeIns.forEach((fadeIn) => {
      const fadeInPosition = fadeIn.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (fadeInPosition < windowHeight * 0.9 && !fadeIn.classList.contains("active")) {
        fadeIn.classList.add("active");
      } else if (fadeIn.classList.contains("active") && fadeInPosition > windowHeight) {
        fadeIn.classList.remove("active");
      }
    });
  }

  // Initial check when the page loads
  checkFadeIns();
  // Check for fade-ins on scroll
  window.addEventListener("scroll", checkFadeIns);
});

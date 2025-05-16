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

// document.addEventListener("DOMContentLoaded", function () {
//   const fadeIns = document.querySelectorAll("section");

//   function checkFadeIns() {
//     fadeIns.forEach((fadeIn) => {
//       const fadeInPosition = fadeIn.getBoundingClientRect().top;
//       const windowHeight = window.innerHeight;

//       if (fadeInPosition < windowHeight * 0.9 && !fadeIn.classList.contains("active")) {
//         fadeIn.classList.add("active");
//       } else if (fadeIn.classList.contains("active") && fadeInPosition > windowHeight) {
//         fadeIn.classList.remove("active");
//       }
//     });
//   }

//   // Initial check when the page loads
//   checkFadeIns();
//   // Check for fade-ins on scroll
//   window.addEventListener("scroll", checkFadeIns);
// });

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  function scrollAnimations() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.6 && !section.classList.contains("active")) {
        const animationClass = Array.from(section.classList).find((cls) => cls.startsWith("animate__") && cls !== "animate__animated");

        if (!animationClass) {
          section.classList.add("active");
        }

        if (animationClass) {
          section.classList.add("animate__animated", "active");
          // Re-add the animation class to trigger it
          section.classList.remove(animationClass);
          void section.offsetWidth; // trigger reflow
          section.classList.add(animationClass);
        }
      } else if (section.classList.contains("active", "animate__animated") && sectionTop > windowHeight) {
        section.classList.remove("animate__animated", "active");
      }
    });
  }

  scrollAnimations();

  window.addEventListener("scroll", scrollAnimations);
});

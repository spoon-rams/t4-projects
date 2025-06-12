const body = document.querySelector("body");
// TEMP
const test = document.querySelector(".hero-banner-parallax__video__section");
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-banner-parallax__video .parallax-video video");
  const test = document.querySelector(".hero-banner-parallax__video .parallax-video");
  const test2 = document.querySelector(".hero-banner-parallax__video__text-bottom .parallax-video");
  const videoTitleBottom = document.querySelector(".hero-banner-parallax__video__text-bottom .parallax-video video");

  if (!video) {
    return;
  } else {
    document.body.addEventListener("scroll", () => {
      let scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
      requestAnimationFrame(() => {
        test.style.transform = `translate(-50%, ${scrollPosition * -0.5}px)`;
        video.style.transform = `translateY(${scrollPosition * 1}px)`;
      });
    });
  }
  if (!videoTitleBottom) {
    return;
  } else {
    document.body.addEventListener("scroll", () => {
      let scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
      requestAnimationFrame(() => {
        test2.style.transform = `translate(-50%, ${scrollPosition * -0.5}px)`;
        videoTitleBottom.style.transform = `translateY(${scrollPosition * 1}px)`;
      });
    });
  }
});

// First Solution for - Jittery
// const body = document.querySelector("body");

// document.addEventListener("DOMContentLoaded", () => {
//   let video = document.querySelector(".parallax-video video");

//   window.addEventListener("scroll", () => {
//     let scrollPosition = window.scrollTop || document.documentElement.scrollTop;
//     requestAnimationFrame(() => {
//       video.style.transform = "translateY(" + scrollPosition * 1 + "px)";
//     });
//   });
// });

// Second Solution for - Jittery
// document.addEventListener("DOMContentLoaded", () => {
//   let video = document.querySelector(".parallax-video video");
//   let lastScrollPosition = 0;
//   let isScrolling = false;

//   window.addEventListener("scroll", () => {
//     if (!isScrolling) {
//       isScrolling = true;
//       requestAnimationFrame(() => {
//         let scrollPosition = window.scrollTop || document.documentElement.scrollTop;
//         // Debounce the scroll event
//         if (Math.abs(scrollPosition - lastScrollPosition) > 1) {
//           lastScrollPosition = scrollPosition;
//           // Adjust the multiplier as needed
//           video.style.transform = "translateY(" + scrollPosition * 1 + "px)";
//         }
//         isScrolling = false;
//       });
//     }
//   });
// });

// SECTION PARALLAX
document.addEventListener("DOMContentLoaded", function () {
  const videoParallaxSection = document.querySelector(".hero-banner-parallax__video__section");
  if (!videoParallaxSection) return;
  const videoContainer = document.querySelector(".hero-banner-parallax__video__section .parallax-video");
  const video = document.querySelector(".hero-banner-parallax__video__section .parallax-video video");

  const halfwayViewport = document.body.scrollHeight / 2;
  const sectionPosition = videoParallaxSection.getBoundingClientRect();
  console.log(document.body.scrollHeight);
  console.log(halfwayViewport);
  console.log(sectionPosition);

  document.body.addEventListener("scroll", function () {
    const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;
    if (sectionPosition.top < halfwayViewport && sectionPosition.bottom < halfwayViewport) {
      // Adjust parallax intensity as needed
      console.log("SECTION IS Above");
      video.style.transform = `translateY(-${500 + scrollPosition * 0.15}px)`;
    } else if (sectionPosition.top > halfwayViewport && sectionPosition.bottom > halfwayViewport) {
      console.log("SECTION IS below");
      video.style.transform = `translateY(-${100 + scrollPosition * 0.15}px)`;
    } else {
      console.log("SECTION IS AT HALFWAY");
      videoContainer.style.transform = `translateY(${scrollPosition * -0.3}px)`;
      //video.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
  });
});




// TEST - Page Fade in
document.addEventListener("DOMContentLoaded", function () {
  const fadeIns = document.querySelectorAll("section");

  function checkFadeIns() {
    fadeIns.forEach((fadeIn) => {
      const fadeInPosition = fadeIn.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (fadeInPosition < windowHeight * .8) {
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

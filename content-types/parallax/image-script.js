document.addEventListener("DOMContentLoaded", () => {
  console.log("connected!");
  const imageTextBottom = document.querySelector(".hero-banner-parallax__text-bottom");
  const imageTextBottomContainer = document.querySelector(".hero-banner-parallax__text-bottom .hero-banner-parallax");
//   const videoContainerTitleBottom = document.querySelector(".hero-banner-parallax__video__text-bottom .parallax-video");
//   const videoTitleBottom = document.querySelector(".hero-banner-parallax__video__text-bottom .parallax-video video");

  if (!imageTextBottom) {
    return;
  } else {
    window.addEventListener("scroll", () => {
      let scrollPosition = window.scrollTop || document.documentElement.scrollTop;
      console.log(scrollPosition);
      requestAnimationFrame(() => {
        imageTextBottomContainer.style.transform = `translate(-50%, ${scrollPosition * -0.33}px)`;
        imageTextBottom.style.transform = `translateY(${scrollPosition * 1}px)`;
      });
    });
  }
//   if (!videoTitleBottom) {
//     return;
//   } else {
//     window.addEventListener("scroll", () => {
//       let scrollPosition = window.scrollTop || document.documentElement.scrollTop;
//       console.log(scrollPosition);
//       requestAnimationFrame(() => {
//         videoContainerTitleBottom.style.transform = `translate(-50%, ${scrollPosition * -0.3}px)`;
//         videoTitleBottom.style.transform = `translateY(${scrollPosition * 1}px)`;
//       });
//     });
//   }
});

const body = document.querySelector("body");
document.addEventListener("DOMContentLoaded", () => {
  console.log("CONNECTED!");
  let video = document.querySelector(".parallax-video video");
  // let scrollPosition = body.scrollTop || document.documentElement.scrollTop;

  function scrollHandler() {
    console.log("SCROLL")
    scrollPosition = window.scrollTop || document.documentElement.scrollTop;
    video.style.transform = "translateY(" + scrollPosition * 1 + "px)";
  }

  window.addEventListener("scroll", scrollHandler);
});

console.log("CONNECTED!");
document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("hero-video");
  const playPauseBtn = document.querySelector(".play-pause-btn");

  const playback = {
    pause: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor" />
              </svg>`,
    play: `<svg class="play-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M8 5v14l11-7z" fill="currentColor" />
             </svg>`,
  };

  playPauseBtn.innerHTML = playback.pause;

  playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      playPauseBtn.innerHTML = playback.pause;
    } else {
      video.pause();
      playPauseBtn.innerHTML = playback.play;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const mainNav = document.querySelector(".header-nav__bottom");
  const fillStart = 0; // starts (at the very top)
  const fillEnd = 200; // fill is complete (200px down)
  let windowSize = window.innerWidth;


  window.addEventListener("resize", () => {
    windowSize = window.innerWidth;
    // Removes the style attribute so that the mobile menu is visible
    if (windowSize < 1279) {
      mainNav.removeAttribute("style");
    }
  });

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    if (windowSize > 1279 && scrollY > -1) {
      // Calculate the progress of the scroll within the fill range
      let progress = (scrollY - fillStart) / (fillEnd - fillStart);

      // Clamp the progress between 0 and 1
      progress = Math.max(0, Math.min(1, progress));

      // Fades in and fades out the main navigation background color and border top of the navigation
      mainNav.style.backgroundColor = `rgba(126,7,42, ${progress})`;
      mainNav.style.borderTop = `1px solid rgba(255, 255, 255, ${progress})`;
    }
  });
});

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

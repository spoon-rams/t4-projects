const orb = document.querySelector(".orb");
const heroScroll = document.querySelector(".hero-scroll");
const heroBg = document.querySelector(".hero-bg");
const heroCopy = document.querySelector(".hero-copy");
const scrollCue = document.querySelector("[data-scroll-cue]");
const scrollCuePanels = document.querySelectorAll("[data-transition-panel]");
const scrollCueControls = document.querySelectorAll("[data-transition-mode]");

let mouseX = 0;
let mouseY = 0;
let ticking = false;
let scrollCueDirection = "forward";


function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getHeroScrollProgress() {
  if (!heroScroll) return 0;

  const heroScrollTop = heroScroll.offsetTop;
  const heroScrollDistance = Math.max(heroScroll.offsetHeight - window.innerHeight, 1);

  return clamp((window.scrollY - heroScrollTop) / heroScrollDistance, 0, 1);
}

function getSectionTransitionMode() {
  return heroScroll?.dataset.sectionTransition === "vertical" ? "vertical" : "horizontal";
}

function updateScrollParallax() {
  if (!heroScroll || !heroBg || !heroCopy) return;

  const progress = getHeroScrollProgress();

  heroBg.style.transform = `
        translateY(${progress * 140}px)
        scale(${1.08 + progress * 0.18})
      `;

  heroCopy.style.transform = `
        translateY(${progress * -130}px)
        scale(${1 - progress * 0.1})
      `;

  heroCopy.style.opacity = clamp(1 - progress * 1.45, 0, 1);
  heroCopy.style.filter = `blur(${progress * 70}px)`;

  updateScrollCue();

  ticking = false;
}

function updateScrollCue() {
  if (!scrollCue) return;

  const progress = getHeroScrollProgress();
  const mode = getSectionTransitionMode();
  const shouldHide = scrollCuePanels.length === 0;

  if (progress >= 0.995) {
    scrollCueDirection = "reverse";
  } else if (progress <= 0.005) {
    scrollCueDirection = "forward";
  }

  const shouldReverse = scrollCueDirection === "reverse";

  scrollCue.classList.toggle("is-hidden", shouldHide);
  scrollCue.classList.toggle("is-reverse", shouldReverse);
  scrollCue.classList.toggle("is-horizontal", mode === "horizontal");
  scrollCue.setAttribute("aria-label", shouldReverse ? `Scroll to previous ${mode} section` : `Scroll to next ${mode} section`);
}

function scrollToTransitionStop() {
  if (!heroScroll || scrollCuePanels.length === 0) return;

  const progress = getHeroScrollProgress();
  const sceneTop = heroScroll.offsetTop;
  const sceneDistance = Math.max(heroScroll.offsetHeight - window.innerHeight, 1);
  const currentStep = Math.round(progress * scrollCuePanels.length);
  const targetStep =
    scrollCueDirection === "reverse"
      ? Math.max(currentStep - 1, 0)
      : Math.min(Math.floor(progress * scrollCuePanels.length) + 1, scrollCuePanels.length);
  const targetProgress = targetStep / scrollCuePanels.length;

  if (targetStep === 0) {
    scrollCueDirection = "forward";
  } else if (targetStep === scrollCuePanels.length) {
    scrollCueDirection = "reverse";
  }

  window.scrollTo({
    top: sceneTop + sceneDistance * targetProgress,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollParallax);
    ticking = true;
  }
});

window.addEventListener("resize", updateScrollParallax);
scrollCue?.addEventListener("click", scrollToTransitionStop);
scrollCueControls.forEach((control) => {
  control.addEventListener("click", () => {
    window.requestAnimationFrame(updateScrollCue);
  });
});
updateScrollParallax();

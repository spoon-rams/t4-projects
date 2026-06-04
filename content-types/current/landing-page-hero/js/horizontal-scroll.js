const transitionScene = document.querySelector(".hero-scroll");
const transitionViewport = document.querySelector(".transition-viewport");
const transitionPanels = document.querySelectorAll("[data-transition-panel]");
const transitionControls = document.querySelectorAll("[data-transition-mode]");
const scrollCue = document.querySelector("[data-scroll-cue]");

let transitionTicking = false;

function setTransitionSceneHeight() {
  if (!transitionScene) return;

  transitionScene.style.height = `${(transitionPanels.length + 1) * 100}vh`;
}

function getTransitionProgress() {
  if (!transitionScene) return 0;

  const sceneTop = transitionScene.offsetTop;
  const sceneDistance = Math.max(transitionScene.offsetHeight - window.innerHeight, 1);
  const rawProgress = (window.scrollY - sceneTop) / sceneDistance;

  return Math.min(Math.max(rawProgress, 0), 1);
}

function getTransitionMode() {
  return transitionScene?.dataset.sectionTransition === "vertical" ? "vertical" : "horizontal";
}

function setTransitionMode(mode) {
  if (!transitionScene) return;

  transitionScene.dataset.sectionTransition = mode;
  transitionScene.classList.toggle("is-vertical-transition", mode === "vertical");
  transitionScene.classList.toggle("is-horizontal-transition", mode === "horizontal");

  transitionControls.forEach((control) => {
    control.setAttribute("aria-pressed", String(control.dataset.transitionMode === mode));
  });

  updateTransitionPanels();
}

function updateTransitionPanels() {
  const progress = getTransitionProgress();
  const mode = getTransitionMode();

  updateTransitionViewport();
  updateScrollCue(progress, mode);

  transitionPanels.forEach((panel, index) => {
    const panelProgress = Math.min(Math.max(progress * transitionPanels.length - index, 0), 1);
    const offset = (1 - panelProgress) * 100;

    panel.style.transform =
      mode === "vertical" ? `translate3d(0, ${offset}vh, 0)` : `translate3d(${offset}vw, 0, 0)`;
    panel.style.zIndex = 8 + index;

    if (panelProgress > 0.45) {
      panel.classList.add("in-view");
    } else {
      panel.classList.remove("in-view");
    }
  });

  transitionTicking = false;
}

function updateTransitionViewport() {
  if (!transitionScene || !transitionViewport) return;

  const sceneTop = transitionScene.offsetTop;
  const sceneEnd = sceneTop + transitionScene.offsetHeight - window.innerHeight;
  const isPinned = window.scrollY >= sceneTop && window.scrollY <= sceneEnd;
  const isComplete = window.scrollY > sceneEnd;

  transitionScene.classList.toggle("is-transition-pinned", isPinned);
  transitionScene.classList.toggle("is-transition-complete", isComplete);
}

function updateScrollCue(progress, mode) {
  if (!scrollCue) return;

  const shouldHide = mode !== "vertical" || progress >= 0.995 || transitionPanels.length === 0;
  scrollCue.classList.toggle("is-hidden", shouldHide);
}

function scrollToNextVerticalStop() {
  if (!transitionScene || getTransitionMode() !== "vertical" || transitionPanels.length === 0) return;

  const progress = getTransitionProgress();
  const sceneTop = transitionScene.offsetTop;
  const sceneDistance = Math.max(transitionScene.offsetHeight - window.innerHeight, 1);
  const nextStep = Math.min(Math.floor(progress * transitionPanels.length) + 1, transitionPanels.length);
  const targetProgress = nextStep / transitionPanels.length;

  window.scrollTo({
    top: sceneTop + sceneDistance * targetProgress,
    behavior: "smooth",
  });
}

function requestTransitionUpdate() {
  if (!transitionTicking) {
    window.requestAnimationFrame(updateTransitionPanels);
    transitionTicking = true;
  }
}

transitionControls.forEach((control) => {
  control.addEventListener("click", () => {
    setTransitionMode(control.dataset.transitionMode);
  });
});

scrollCue?.addEventListener("click", scrollToNextVerticalStop);

if (transitionPanels.length) {
  setTransitionSceneHeight();
  setTransitionMode(getTransitionMode());
  window.addEventListener("scroll", requestTransitionUpdate);
  window.addEventListener("resize", () => {
    setTransitionSceneHeight();
    requestTransitionUpdate();
  });
}

/**
 * Fordham slider carousel — supports multiple independent instances per page.
 *
 * Every element with the class "fordham-slider-carousel" gets its own state
 * (current slide, animation lock, indicators, autoplay timer, listeners).
 *
 * Optional per-carousel settings via data attributes on the root element:
 *   data-autoplay="7000"  autoplay delay in ms (0 disables autoplay)
 *   data-speed="800"      slide animation duration in ms
 */
function initCarousel(slider) {
  // Guard against double initialization (e.g. script included twice)
  if (slider.dataset.carouselInitialized === "true") return;

  const slidesContainer = slider.querySelector(".slides-container");
  const prevButton = slider.querySelector(".slide-arrow.prev");
  const nextButton = slider.querySelector(".slide-arrow.next");
  const indicatorParent = slider.querySelector(".slider-indicators");

  if (!slidesContainer || !prevButton || !nextButton || !indicatorParent) return;

  let slides = Array.from(slider.querySelectorAll(".slide"));
  const totalSlides = slides.length;
  if (totalSlides === 0) return;

  slider.dataset.carouselInitialized = "true";

  const autoplayAttr = Number(slider.dataset.autoplay);
  const autoplayDelay = Number.isNaN(autoplayAttr) || slider.dataset.autoplay === undefined ? 7000 : autoplayAttr;
  const speed = Number(slider.dataset.speed) || 800;

  let currentIndex = 0; // logical slide index (0..totalSlides-1)
  let isAnimating = false;
  let startX = 0;

  // Make sure native smooth scroll doesn't fight us
  slidesContainer.style.scrollBehavior = "auto";
  slidesContainer.scrollLeft = 0;

  function getSlideWidth() {
    // all slides are equal width
    return slides[0].clientWidth;
  }

  if (totalSlides > 1) {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("div");
      dot.className = i === 0 ? "slider-indicator active" : "slider-indicator";
      indicatorParent.append(dot);
    }
  }

  const indicators = slider.querySelectorAll(".slider-indicator");

  function setIndicator(realIndex) {
    indicators.forEach((dot, i) => {
      dot.classList.toggle("active", i === realIndex);
    });
  }

  // Rotate via repeated moves to reach a given logical index
  indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      if (isAnimating || totalSlides < 2 || i === currentIndex) return;

      let steps = i - currentIndex;

      // Take the shorter way around the circle
      if (Math.abs(steps) > totalSlides / 2) {
        steps = steps > 0 ? steps - totalSlides : steps + totalSlides;
      }

      const stepForward = () => {
        if (steps <= 0) return;
        moveNext(() => {
          steps--;
          stepForward();
        });
      };

      const stepBackward = () => {
        if (steps >= 0) return;
        movePrev(() => {
          steps++;
          stepBackward();
        });
      };

      steps > 0 ? stepForward() : stepBackward();
    });
  });

  function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  function smoothScrollTo(target, duration, onComplete) {
    const element = slidesContainer;
    const startPosition = element.scrollLeft;
    const distance = target - startPosition;
    let startTime = null;

    // disable scroll-snap while animating
    element.classList.add("no-snap");

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const t = Math.min(timeElapsed, duration);
      element.scrollLeft = easeInOutQuad(t, startPosition, distance, duration);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        element.scrollLeft = target;
        element.classList.remove("no-snap"); // re-enable snap
        if (typeof onComplete === "function") onComplete();
      }
    }

    requestAnimationFrame(animation);
  }

  function moveNext(callback) {
    if (isAnimating || totalSlides < 2) {
      if (callback) callback();
      return;
    }

    isAnimating = true;
    const width = getSlideWidth();

    // Animate 0 → width (slide to next)
    smoothScrollTo(width, speed, () => {
      // Rotate DOM: move first slide to the end
      slidesContainer.appendChild(slides[0]);
      slides = Array.from(slider.querySelectorAll(".slide"));

      // Snap back by width so new first slide is aligned
      slidesContainer.scrollLeft -= width;

      currentIndex = (currentIndex + 1) % totalSlides;
      setIndicator(currentIndex);

      isAnimating = false;
      if (callback) callback();
    });
  }

  function movePrev(callback) {
    if (isAnimating || totalSlides < 2) {
      if (callback) callback();
      return;
    }

    isAnimating = true;
    const width = getSlideWidth();

    // Rotate DOM first: last slide → front
    slidesContainer.insertBefore(slides[slides.length - 1], slides[0]);
    slides = Array.from(slider.querySelectorAll(".slide"));

    // Start one slide to the right
    slidesContainer.scrollLeft += width;

    // Animate back to 0 (show previous slide)
    smoothScrollTo(0, speed, () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      setIndicator(currentIndex);

      isAnimating = false;
      if (callback) callback();
    });
  }

  prevButton.style.display = "block";
  nextButton.style.display = "block";

  nextButton.addEventListener("click", () => moveNext());
  prevButton.addEventListener("click", () => movePrev());

  if (totalSlides > 1 && autoplayDelay > 0) {
    setInterval(() => {
      moveNext();
    }, autoplayDelay);
  }

  slidesContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slidesContainer.addEventListener("touchend", (e) => {
    const delta = startX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? moveNext() : movePrev();
    }
  });

  window.addEventListener("resize", () => {
    // Keep current slide aligned after breakpoint changes
    slidesContainer.scrollLeft = 0;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fordham-slider-carousel").forEach(initCarousel);
});

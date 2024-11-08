document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".block-quote-embed .slide-container");
  const slides = document.querySelectorAll(".block-quote-embed .slide");
  const prevButton = document.querySelector(".block-quote-embed .carousel-arrow.prev");
  const nextButton = document.querySelector(".block-quote-embed .carousel-arrow.next");

  let currentSlide = 0;
  let slidesToShow = 1; // Default for mobile view
  let slideWidth = slides[0].clientWidth;
  let slideSnapShot;

  // Initialize on page load
  updateSlidesToShow();
  updateArrowVisibility();

  // Handle window resize
  window.addEventListener("resize", () => {
    updateSlidesToShow();
    updateArrowVisibility();
    adjustScrollPosition();
  });

  // Arrow click handling
  nextButton.addEventListener("click", () => {
    if (currentSlide < slides.length - slidesToShow) {
      const iframe = document.querySelectorAll(".block-quote-embed iframe"); // Select your iframe element
      const src = iframe[currentSlide].src; // Save the current src
      iframe[currentSlide].src = ""; // Clear the src to stop the video
      iframe[currentSlide].src = src; // Reset src to original value to reload the video
      currentSlide++;
      adjustScrollPosition();
      updateArrowVisibility();
    }
  });

  prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
      const iframe = document.querySelectorAll(".block-quote-embed iframe"); // Select your iframe element
      const src = iframe[currentSlide].src; // Save the current src
      iframe[currentSlide].src = ""; // Clear the src to stop the video
      iframe[currentSlide].src = src; // Reset src to original value to reload the video
      currentSlide--;
      adjustScrollPosition();
      updateArrowVisibility();
    }
  });

  // Mobile swipe handling
  let startX = 0;
  slidesContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slidesContainer.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX;
    const swipeThreshold = 50; // Minimum swipe distance

    if (deltaX > swipeThreshold && currentSlide < slides.length - slidesToShow) {
      currentSlide++;
    } else if (deltaX < -swipeThreshold && currentSlide > 0) {
      currentSlide--;
    }
    adjustScrollPosition();
    updateArrowVisibility();
  });

  // Updates the number of slides to show based on screen width
  function updateSlidesToShow() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 991 && currentSlide > 2) {
      slideSnapShot = currentSlide;
      slidesToShow = 3; // Desktop
      currentSlide = 2;
      prevButton.style.visibility = "hidden";
      nextButton.style.visibility = "hidden";
    } else if (screenWidth >= 991) {
      slidesToShow = 3; // Mobile
      prevButton.style.visibility = "hidden";
      nextButton.style.visibility = "hidden";
    } else if (screenWidth < 991 && slideSnapShot) {
      slidesToShow = 1;
      currentSlide = slideSnapShot;
    } else {
      slidesToShow = 1;
    }

    slideWidth = slides[0].clientWidth;
  }

  // Adjusts the scroll position based on the current slide index
  function adjustScrollPosition() {
    const targetScrollPosition = currentSlide * slideWidth;
    smoothScroll(slidesContainer, targetScrollPosition, 100);
  }

  // Updates arrow visibility based on the current slide
  function updateArrowVisibility() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 991) {
      // Hide both arrows when the viewport is above 991
      prevButton.style.visibility = "hidden";
      nextButton.style.visibility = "hidden";
    } else {
      // Show or hide arrows based on the current slide and slides to show when below 991
      prevButton.style.visibility = currentSlide === 0 ? "hidden" : "visible";
      nextButton.style.visibility = currentSlide >= slides.length - slidesToShow ? "hidden" : "visible";
    }
  }

  // Smooth scroll function for custom scroll animation
  function smoothScroll(element, target, duration) {
    const startPosition = element.scrollLeft;
    const distance = target - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      element.scrollLeft = run;
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
});

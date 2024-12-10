document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".founders-slider .slides-container");
  const slide = document.querySelector(".founders-slider .slide");
  const slides = document.querySelectorAll(".founders-slider .slide");
  const findContent = document.querySelectorAll(".founders-slider .slide .col-lg-12");
  const prevButton = document.querySelector(".founders-slider .slide-arrow.prev");
  const nextButton = document.querySelector(".founders-slider .slide-arrow.next");
  const indicatorParent = document.querySelector(".founders-slider .slider-indicators");

  let startX = 0;
  let currentSlide = 0;
  let clickPending = false;

  // CREATE INDICATOR DOTS
  if (slides.length > 1) {
    let numIndicators = slides.length;
    while (numIndicators > 0) {
      const div = document.createElement("div");
      if (numIndicators === slides.length) {
        div.className = "slider-indicator active";
        indicatorParent.append(div);
        numIndicators--;
      } else {
        div.className = "slider-indicator";
        indicatorParent.append(div);
        numIndicators--;
      }
    }
  }

  // DEFAULT ARROW SETUP
  if (slides.length > 1) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "none";
    nextButton.style.display = "none";
  }

  // CHECK IF CONTENT ELEMENTS IS THERE
  findContent.forEach((element) => {
    const content = element.children[1];
    const image = element.children[0];
    if (!content) {
      image.style.height = "100%";
    }
  });

  // INDICATORS CLICK ACTION
  const indicators = document.querySelectorAll(".slider-indicator");
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      handleClick("indicator", slidesContainer, slide, index);
    });
  });

  // HELPER FUNCTION - SETS THE INDICATOR DOT - Refactoring
  function setIndicator(index) {
    // Hides Previous Button
    if (index === 0) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "block";
    }

    // Hides Next Button
    if (index === slides.length - 1) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "block";
    }

    // Sets Indicators
    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  // SMOOTH SCROLL FUNCTION - for custom scroll speed
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

  // CLICK ACTION REFACTOR
  function handleClick(action, container, slide, index) {
    let targetScrollPosition;
    let position = container.scrollLeft;
    switch (action) {
      case "next":
        targetScrollPosition = position += slide.clientWidth;
        currentSlide += 1;
        break;
      case "previous":
        targetScrollPosition = position -= slide.clientWidth;
        currentSlide -= 1;
        break;
      case "indicator":
        targetScrollPosition = position = index * slide.clientWidth;
        currentSlide = index;
        setIndicator(index);
        break;
      case "resize":
        targetScrollPosition = position = currentSlide * slide.clientWidth;
        break;
    }
    setIndicator(currentSlide);
    smoothScroll(container, targetScrollPosition, 800);
  }

  // DESKTOP CLICK ACTION - NEED TO turn this into a function
  nextButton.addEventListener("click", (e) => {
    if (clickPending) {
      e.stopImmediatePropagation();
      return;
    }

    clickPending = true;
    handleClick("next", slidesContainer, slide);
    return setTimeout(() => (clickPending = false), 800);
  });

  prevButton.addEventListener("click", (e) => {
    if (clickPending) {
      e.stopImmediatePropagation;
      return;
    }

    clickPending = true;
    handleClick("previous", slidesContainer, slide);
    return setTimeout(() => (clickPending = false), 800);
  });

  // MOBILE VIEW
  window.addEventListener("resize", () => {
    return handleClick("resize", slidesContainer, slide);
  });

  // MOBILE TOUCH ACTION
  slidesContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slidesContainer.addEventListener("touchend", (e) => {
    var endX = e.changedTouches[0].clientX;
    var deltaX = startX - endX;

    // Set a threshold for swipe distance
    var swipeThreshold = 50;

    if (deltaX > swipeThreshold) {
      // Swipe left, scroll to the next box
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        setIndicator(currentSlide);
      }
    } else if (deltaX < -swipeThreshold) {
      // Swipe right, scroll to the previous box
      if (currentSlide > 0) {
        currentSlide--;
        setIndicator(currentSlide);
      }
    }

    // Calculate the scroll position based on the current index
    const scrollPosition = slides[currentSlide].offsetLeft - slidesContainer.offsetLeft;
    // Scroll to the selected box with a smooth animation
    smoothScroll(slidesContainer, scrollPosition, 800);
  });
});

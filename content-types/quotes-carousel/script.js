document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides-container");
  const slide = document.querySelector(".slide");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");
  const indicatorParent = document.querySelector(".slider-indicators");

  let startX = 0;
  let clickPending = false;
  let currentSlide = 0;
  // CREATE INDICATOR DOTS
  if (slides.length > 1) {
    let numIndicators = slides.length;
    let currentSlide = 0;
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

  if (slides.length > 1) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "none";
    nextButton.style.display = "none";
  }

  // INDICATORS CLICK ACTION
  const indicators = document.querySelectorAll(".slider-indicator");
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      handleClick("indicator", slidesContainer, slide, index);
    });
  });

  // DESKTOP CLICK ACTION - NEED TO turn this into a function
  nextButton.addEventListener("click", (e) => {
    if (clickPending) {
      e.stopImmediatePropagation();
      return;
    }
    handleClick("next", slidesContainer, slide);
  });

  prevButton.addEventListener("click", (e) => {
    if (clickPending) {
      e.stopImmediatePropagation();
      return;
    }
    handleClick("previous", slidesContainer, slide);
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
    var scrollPosition = slides[currentSlide].offsetLeft - slidesContainer.offsetLeft;

    // Scroll to the selected box with a smooth animation
    slidesContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  });
});

let currentSlide = 0;
// HELPER FUNCTION - SETS THE INDICATOR DOT - Refactoring
function setIndicator(index, element) {
  // Hides Previous Button
  if (index === 0) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
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

// CLICK ACTION REFACTOR
function handleClick(action, container, slide, index) {
  // const slideWidth = slide.clientWidth;
  switch (action) {
    case "next":
      clickPending = true;
      container.scrollLeft += slide.clientWidth + 2;
      currentSlide += 1;
      setIndicator(currentSlide);
      return setTimeout(() => {
        clickPending = false;
      }, 600);
    case "previous":
      clickPending = true;
      container.scrollLeft -= slide.clientWidth + 2;
      currentSlide -= 1;
      setIndicator(currentSlide);
      return setTimeout(() => {
        clickPending = false;
      }, 600);
    case "indicator":
      container.scrollLeft = index * slide.clientWidth + 2;
      currentSlide = index;
      return setIndicator(index);
    case "resize":
      container.scrollLeft = currentSlide * slide.clientWidth + 2;
      setIndicator(currentSlide);
  }
}

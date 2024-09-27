document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".featured-stories .slide-container");
  const slide = document.querySelector(".featured-stories .slide");
  const slides = document.querySelectorAll(".featured-stories .slide");
  const prevButton = document.querySelector(".featured-stories .carousel-arrow.prev");
  const nextButton = document.querySelector(".featured-stories .carousel-arrow.next");

  let startX = 0;
  let clickPending = false;
  let currentSlide = 0;

  slidesContainer.scrollLeft = 0;
  currentSlide = 0;

  //   INITIAL FEATURE RENDER
  if (slides.length > 1) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "none";
    nextButton.style.display = "none";
  }

  // DESKTOP CLICK ACTION
  nextButton.addEventListener("click", (e) => {
    if (clickPending) {
      e.stopImmediatePropagation();
      return;
    }
    clickPending = true;
    handleClick("next", slidesContainer, slide);
    setTimeout(() => (clickPending = false), 800);
  });

  prevButton.addEventListener("click", (e) => {
    if (clickPending) {
      e.stopImmediatePropagation();
      return;
    }
    clickPending = true;
    handleClick("previous", slidesContainer, slide);
    setTimeout(() => (clickPending = false), 800);
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
        setButton(currentSlide);
      }
    } else if (deltaX < -swipeThreshold) {
      // Swipe right, scroll to the previous box
      if (currentSlide > 0) {
        currentSlide--;
        setButton(currentSlide);
      }
    }

    // Calculate the scroll position based on the current index
    var scrollPosition = slides[currentSlide].offsetLeft - slidesContainer.offsetLeft;

    // Scroll to the selected box with a smooth animation
    smoothScroll(slidesContainer, scrollPosition, 600); // Custom smooth scroll with duration of 600ms
  });

  // HELPER FUNCTION - SETS THE ARROS
  function setButton(index, container, slide) {
    // Hides Previous Arrow
    if (index === 0) {
      prevButton.style.display = "none";
    } else {
      prevButton.style.display = "block";
    }

    // Hides Next Arrow
    if (index === slides.length - 1) {
      nextButton.style.display = "none";
    } else {
      nextButton.style.display = "block";
    }
  }

  // CLICK ACTION REFACTOR
  function handleClick(action, container, slide) {
    let targetScrollPosition;
    switch (action) {
      case "next":
        console.log("CONTAINER SCROLL LEFT: ", container.scrollLeft);
        console.log("SLIDE CLIENT WIDTH: ", slide.clientWidth);
        console.log("CONTAINER REACHED END: ", container.scrollLeft === slide.clientWidth);
        console.log("EQUAL", currentSlide % 3);
        targetScrollPosition = container.scrollLeft + slide.clientWidth;
        currentSlide += 1;
        break;
      case "previous":
        console.log("CONTAINER SCROLL LEFT: ", container.scrollLeft);
        console.log("SLIDE CLIENT WIDTH: ", slide.clientWidth);
        console.log("CONTAINER REACHED END: ", container.scrollLeft === slide.clientWidth);
        console.log("EQUAL", currentSlide % 3);
        targetScrollPosition = container.scrollLeft - slide.clientWidth;
        currentSlide -= 1;
        break;
      case "resize":
        targetScrollPosition = currentSlide * slide.clientWidth;
        break;
    }
    smoothScroll(container, targetScrollPosition, 600); // Smooth scroll with 600ms duration
    setButton(currentSlide);
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
});

document.addEventListener("DOMContentLoaded", () => {
  const infographics = document.querySelector(".statistics-blocks");
  
  if(!infographics) return;

  const slidesContainer = document.querySelector(".slides-container");
  const slide = document.querySelector(".slide");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".slide-arrow.prev");
  const nextButton = document.querySelector(".slide-arrow.next");

  let startX = 0;
  let clickPending = false;
  let currentSlide = 0;


  // DESKTOP CLICK ACTION - NEED TO turn this into a function
  nextButton.addEventListener("click", (e) => {
    if (clickPending) {
      e.stopImmediatePropagation();
      return;
    }
    clickPending = true;
    handleClick("next", slidesContainer, slide);
    setTimeout(() => (clickPending = false), 600);
  });

  prevButton.addEventListener("click", (e) => {
    if (clickPending) {
      e.stopImmediatePropagation();
      return;
    }
    clickPending = true;
    handleClick("previous", slidesContainer, slide);
    setTimeout(() => (clickPending = false), 600);
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
function setIndicator(index) {
  const prevButton = document.querySelector(".slide-arrow.prev");
  const nextButton = document.querySelector(".slide-arrow.next");
  const slides = document.querySelectorAll(".slide");

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

}

// CLICK ACTION REFACTOR
function handleClick(action, container, slide, index) {
  // const slideWidth = slide.clientWidth;
  switch (action) {
    case "next":
      container.scrollLeft += slide.clientWidth + 2;
      currentSlide += 1;
      return setIndicator(currentSlide);
    case "previous":
      container.scrollLeft -= slide.clientWidth + 2;
      currentSlide -= 1;
      return setIndicator(currentSlide);
    case "indicator":
      container.scrollLeft = index * slide.clientWidth + 2;
      currentSlide = index;
      return setIndicator(index);
    case "resize":
      container.scrollLeft = currentSlide * slide.clientWidth + 2;
      setIndicator(currentSlide);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".carousel-header .slide-container");
  const slide = document.querySelector(".carousel-header .slide");
  const slides = document.querySelectorAll(".carousel-header .slide");
  const prevButton = document.querySelector(".carousel-header .carousel-arrow.prev");
  const nextButton = document.querySelector(".carousel-header .carousel-arrow.next");
  const indicatorParent = document.querySelector(".carousel-header .carousel-indicators");

  const contentTitle = document.querySelector(".carousel-header .content .title");
  const contentButtonText = document.querySelector(".carousel-header .content .button-text span");

  let startX = 0;
  let clickPending = false;
  let currentSlide = 0;

  // CREATE INDICATOR DOTS
  if (slides.length > 1) {
    let numIndicators = slides.length;
    while (numIndicators > 0) {
      const div = document.createElement("div");
      if (numIndicators === slides.length) {
        div.className = "carousel-indicator active";
        indicatorParent.append(div);
        numIndicators--;
      } else {
        div.className = "carousel-indicator";
        indicatorParent.append(div);
        numIndicators--;
      }
    }
  }

  if (slides.length > 1) {
    prevButton.style.visibility = "hidden";
  } else {
    prevButton.style.visibility = "none";
    nextButton.style.visibility = "none";
  }

  // INDICATORS CLICK ACTION
  const indicators = document.querySelectorAll(".carousel-indicator");
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      handleClick("indicator", slidesContainer, slide, index);
    });
  });

  // INITIAL Default Content and Image
  contentTitle.innerText = slides[currentSlide].dataset.title;
  contentButtonText.innerText = slides[currentSlide].dataset.buttonText;
  // DESKTOP CLICK ACTION - NEED TO turn this into a function
  nextButton.addEventListener("click", (e) => {
    if (clickPending) {
      e.stopImmediatePropagation();
      return;
    }
    contentTitle.innerText = slides[currentSlide + 1].dataset.title;
    contentButtonText.innerText = slides[currentSlide + 1].dataset.buttonText;

    clickPending = true;
    handleClick("next", slidesContainer, slide);
    setTimeout(() => (clickPending = false), 800);
  });

  prevButton.addEventListener("click", (e) => {
    if (clickPending) {
      e.stopImmediatePropagation();
      return;
    }
    contentTitle.innerText = slides[currentSlide - 1].dataset.title;
    contentButtonText.innerText = slides[currentSlide - 1].dataset.buttonText;
    clickPending = true;
    handleClick("previous", slidesContainer, slide);
    setTimeout(() => (clickPending = false), 800);
  });

  // ACCESSIBILITY - KEYBOARD NAVIGATION
  slidesContainer.addEventListener("focusin", (e) => {
    console.log(currentSlide);
    console.log(clickPending);
    if (clickPending) {
      e.stopImmediatePropagation();
      return;
    } else if (currentSlide < slides.length - 1) {
      clickPending = true;
      handleClick("next", slidesContainer, slide);
      setTimeout(() => (clickPending = false), 800);
    }

    if (currentSlide === slides.length - 1 && e.target === slides[slides.length - 1]) {
      return;
    }
  });

  // MOBILE VIEW
  window.addEventListener("resize", () => {
    return handleClick("resize", slidesContainer, slide);
  });

  // MOBILE TOUCH ACTION
  slidesContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  document.querySelector(".carousel-header .img-container .content").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  document.querySelector(".carousel-header .img-container .content").addEventListener("touchend", (e) => {
    var endX = e.changedTouches[0].clientX;
    var deltaX = startX - endX;

    // Set a threshold for swipe distance
    var swipeThreshold = 50;

    if (deltaX > swipeThreshold) {
      // Swipe left, scroll to the next box
      if (currentSlide < slides.length - 1) {
        contentTitle.innerText = slides[currentSlide + 1].dataset.title;
        contentButtonText.innerText = slides[currentSlide + 1].dataset.buttonText;
        currentSlide++;
        
        setIndicator(currentSlide);
      }
    } else if (deltaX < -swipeThreshold) {
      // Swipe right, scroll to the previous box
      if (currentSlide > 0) {
        contentTitle.innerText = slides[currentSlide - 1].dataset.title;
        contentButtonText.innerText = slides[currentSlide - 1].dataset.buttonText;
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

  // HELPER FUNCTION - SETS THE INDICATOR DOT - Refactoring
  function setIndicator(index) {
    const prevButton = document.querySelector(".carousel-arrow.prev");
    const nextButton = document.querySelector(".carousel-arrow.next");
    const slides = document.querySelectorAll(".slide");
    const indicators = document.querySelectorAll(".carousel-indicator");

    // Hides Previous Button
    if (index === 0) {
      prevButton.style.visibility = "hidden";
    } else {
      prevButton.style.visibility = "visible";
    }

    // Hides Next Button
    if (index === slides.length - 1) {
      nextButton.style.visibility = "hidden";
    } else {
      nextButton.style.visibility = "visible";
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
        container.scrollLeft += slide.clientWidth;
        currentSlide += 1;
        return setIndicator(currentSlide);
      case "previous":
        container.scrollLeft -= slide.clientWidth;
        currentSlide -= 1;
        return setIndicator(currentSlide);
      case "indicator":
        container.scrollLeft = index * slide.clientWidth;
        currentSlide = index;
        return setIndicator(index);
      case "resize":
        container.scrollLeft = currentSlide * slide.clientWidth;
        setIndicator(currentSlide);
    }
  }
});

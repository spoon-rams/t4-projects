document.addEventListener("DOMContentLoaded", () => {
  // DOM ELEMENTS
  const slidesContainer = document.querySelector(".carousel-header .slide-container");
  const slide = document.querySelector(".carousel-header .slide");
  const slides = document.querySelectorAll(".carousel-header .slide");
  const prevButton = document.querySelector(".carousel-header .hero-carousel-arrow.prev");
  const nextButton = document.querySelector(".carousel-header .hero-carousel-arrow.next");

  const indicatorParent = document.querySelector(".carousel-header .carousel-indicators");

  const contentBox = document.querySelector(".carousel-header .img-container .content");
  const contentBoxWrapper = document.querySelector(".carousel-header .img-container .content .content-wrapper");
  const contentTitle = document.querySelector(".carousel-header .content .title");
  const contentDesc = document.querySelector(".carousel-header .content .desc");
  const contentButtonText = document.querySelector(".carousel-header .content .button-text");
  const contentSecondButtonText = document.querySelector(".carousel-header .content .second-button-text");

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
    prevButton.style.visibility = "hidden";
    nextButton.style.visibility = "hidden";
  }

  // INDICATORS CLICK ACTION
  const indicators = document.querySelectorAll(".carousel-header .carousel-indicators .carousel-indicator");
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      handleClick("indicator", slidesContainer, slide, index);
    });
  });

  // INITIAL Default Content and Image
  insertData(contentTitle, contentButtonText, contentSecondButtonText, contentDesc, slides, currentSlide);
  // DESKTOP CLICK ACTION - NEED TO turn this into a function
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

  // ACCESSIBILITY - KEYBOARD NAVIGATION
  slidesContainer.addEventListener("focusin", (e) => {
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

  contentBox.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  contentBox.addEventListener("touchend", (e) => {
    var endX = e.changedTouches[0].clientX;
    var deltaX = startX - endX;

    // Set a threshold for swipe distance
    var swipeThreshold = 50;

    if (deltaX > swipeThreshold) {
      // Swipe left, scroll to the next box
      if (currentSlide < slides.length - 1) {
        animation(contentBoxWrapper, "animate__fadeInLeft", 800);
        insertData(contentTitle, contentButtonText, contentSecondButtonText, contentDesc, slides, currentSlide, "next");
        currentSlide++;
        setIndicator(currentSlide);
      }
    } else if (deltaX < -swipeThreshold) {
      // Swipe right, scroll to the previous box
      if (currentSlide > 0) {
        animation(contentBoxWrapper, "animate__fadeInRight", 800);
        insertData(contentTitle, contentButtonText, contentSecondButtonText, contentDesc, slides, currentSlide, "previous");
        currentSlide--;
        setIndicator(currentSlide);
      }
    }

    // Calculate scroll position
    const scrollPosition = slides[currentSlide].offsetLeft - slidesContainer.offsetLeft;

    // Slower, controlled scroll
    smoothScrollTo(slidesContainer, scrollPosition, 800);
  });

  // HELPER FUNCTION - SETS THE INDICATOR DOT - Refactoring
  function setIndicator(index) {
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

  // CLICK ACTIONS
  function handleClick(action, container, slide, index) {
    // const slideWidth = slide.clientWidth;
    const test = document.querySelector(".carousel-header .slide");
    switch (action) {
      case "next":
        animation(contentBoxWrapper, "animate__fadeInLeft", 800);
        insertData(contentTitle, contentButtonText, contentSecondButtonText, contentDesc, slides, currentSlide, "next");
        container.scrollLeft += slide.clientWidth;
        currentSlide += 1;
        return setIndicator(currentSlide);
      case "previous":
        animation(contentBoxWrapper, "animate__fadeInRight", 800);
        insertData(contentTitle, contentButtonText, contentSecondButtonText, contentDesc, slides, currentSlide, "previous");
        container.scrollLeft -= slide.clientWidth;
        currentSlide -= 1;
        return setIndicator(currentSlide);
      case "indicator":
        container.scrollLeft = index * slide.clientWidth;
        currentSlide = index;
        animation(contentBoxWrapper, "animate__fadeInUp", 800);
        insertData(contentTitle, contentButtonText, contentSecondButtonText, contentDesc, slides, currentSlide);
        return setIndicator(index);
      case "resize":
        container.scrollLeft = currentSlide * slide.clientWidth;
        setIndicator(currentSlide);
    }
  }

  function animation(element, animation, interval) {
    const noAnimation = document.querySelector(".carousel-header.no-animations");
    if (noAnimation) {
      return;
    }
    element.classList.add("animate__animated", animation);
    setTimeout(() => {
      element.classList.remove("animate__animated", animation);
    }, interval);
  }

  function insertData(title, btnText, btnTxtTwo, desc, slides, currentSlide, action) {
    switch (action) {
      case "next":
        title.innerText = slides[currentSlide + 1].dataset.title;
        displayButtons(btnText, btnTxtTwo, slides, currentSlide + 1);
        desc.innerText = slides[currentSlide + 1].dataset.desc;
        break;
      case "previous":
        title.innerText = slides[currentSlide - 1].dataset.title;
        displayButtons(btnText, btnTxtTwo, slides, currentSlide - 1);
        desc.innerText = slides[currentSlide - 1].dataset.desc;
        break;
      default:
        title.innerText = slides[currentSlide].dataset.title;
        displayButtons(btnText, btnTxtTwo, slides, currentSlide);
        desc.innerText = slides[currentSlide].dataset.desc;
    }
  }

  function displayButtons(btnText, btnTxtTwo, slide, currentSlide) {
    btnText.innerText = slide[currentSlide].dataset.buttonText;
    btnTxtTwo.innerText = slide[currentSlide].dataset.secondButtonText;
    if (slide[currentSlide].dataset.buttonText.length > 0) {
      btnText.style.display = "inline-block";
      slide[currentSlide].dataset.buttonLink && btnText.setAttribute("href", slide[currentSlide].dataset.buttonLink);
    } else {
      btnText.style.display = "none";
    }

    if (slide[currentSlide].dataset.secondButtonText.length > 0) {
      btnTxtTwo.style.display = "inline-block";
      slide[currentSlide].dataset.secondButtonLink && btnTxtTwo.setAttribute("href", slide[currentSlide].dataset.secondButtonLink);
    } else {
      btnTxtTwo.style.display = "none";
    }
  }

  function smoothScrollTo(element, target, duration = 1200) {
    const start = element.scrollLeft;
    const distance = target - start;
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeInOutQuad
      const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      element.scrollLeft = start + distance * ease;

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }
});

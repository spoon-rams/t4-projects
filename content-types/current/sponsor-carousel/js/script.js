// document.addEventListener("DOMContentLoaded", () => {
//   const slidesContainer = document.querySelector(".founders-slider .slides-container");
//   const prevButton = document.querySelector(".founders-slider .slide-arrow.prev");
//   const nextButton = document.querySelector(".founders-slider .slide-arrow.next");
//   const indicatorParent = document.querySelector(".founders-slider .slider-indicators");

//   let slides = Array.from(document.querySelectorAll(".founders-slider .slide"));
//   const originalSlides = slides.slice(); // keep the original set
//   const totalOriginal = originalSlides.length;

//   const slide = slides[0]; // first slide, used for width
//   let currentSlide = 0;
//   let startX = 0;

//   /**  CLONE SLIDES FOR INFINITE SCROLLING  **/

//   // Append another batch of original slides to the END
//   function appendClones() {
//     originalSlides.forEach((s) => {
//       const clone = s.cloneNode(true);
//       clone.classList.add("clone");
//       slidesContainer.appendChild(clone);
//     });

//     slides = Array.from(document.querySelectorAll(".founders-slider .slide"));
//   }

//   // Prepend another batch of original slides to the BEGINNING
//   function prependClones() {
//     // add in reverse so they appear in the right order
//     originalSlides
//       .slice()
//       .reverse()
//       .forEach((s) => {
//         const clone = s.cloneNode(true);
//         clone.classList.add("clone");
//         slidesContainer.insertBefore(clone, slidesContainer.firstChild);
//       });

//     // After prepending, everything moved to the right. Keep view on same slide.
//     slidesContainer.scrollLeft += totalOriginal * slide.clientWidth;

//     slides = Array.from(document.querySelectorAll(".founders-slider .slide"));
//     currentSlide += totalOriginal; // shift index forward to match new structure
//   }

//   // Initial clones so we have extra slides ahead
//   appendClones();

//   /**  INDICATORS **/

//   if (totalOriginal > 1) {
//     for (let i = 0; i < totalOriginal; i++) {
//       const div = document.createElement("div");
//       div.className = i === 0 ? "slider-indicator active" : "slider-indicator";
//       indicatorParent.append(div);
//     }
//   }

//   const indicators = document.querySelectorAll(".founders-slider .slider-indicator");

//   function setIndicator(realIndex) {
//     indicators.forEach((dot, i) => {
//       dot.classList.toggle("active", i === realIndex);
//     });
//   }

//   // Clicking dots jumps to the NEAREST matching original slide set
//   indicators.forEach((dot, i) => {
//     dot.addEventListener("click", () => {
//       const loopIndexOffset = Math.floor(currentSlide / totalOriginal) * totalOriginal;
//       currentSlide = loopIndexOffset + i;
//       smoothScroll(slidesContainer, currentSlide * slide.clientWidth, 800);
//       setIndicator(i);
//     });
//   });

//   /** SMOOTH SCROLLING **/

//   function smoothScroll(element, target, duration) {
//     const startPosition = element.scrollLeft;
//     const distance = target - startPosition;
//     let startTime = null;

//     function animation(currentTime) {
//       if (startTime === null) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
//       element.scrollLeft = run;
//       if (timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     function easeInOutQuad(t, b, c, d) {
//       t /= d / 2;
//       if (t < 1) return (c / 2) * t * t + b;
//       t--;
//       return (-c / 2) * (t * (t - 2) - 1) + b;
//     }

//     requestAnimationFrame(animation);
//   }

//   /** SMOOTH SCROLLING **/

//   prevButton.style.display = "block";
//   nextButton.style.display = "block";

//   nextButton.addEventListener("click", () => moveNext());
//   prevButton.addEventListener("click", () => movePrev());

//   function moveNext() {
//     currentSlide++;

//     // If we're running out of slides ahead, append more
//     const slidesAhead = slides.length - currentSlide;
//     if (slidesAhead < totalOriginal + 2) {
//       appendClones();
//     }

//     smoothScroll(slidesContainer, currentSlide * slide.clientWidth, 800);
//     setIndicator(currentSlide % totalOriginal);
//   }

//   function movePrev() {
//     // If we're near the beginning, prepend more first
//     if (currentSlide <= 1) {
//       prependClones();
//     }

//     currentSlide--;
//     smoothScroll(slidesContainer, currentSlide * slide.clientWidth, 800);

//     // safe modulo for negatives
//     const realIndex = ((currentSlide % totalOriginal) + totalOriginal) % totalOriginal;
//     setIndicator(realIndex);
//   }

//   /**  AUTO PLAY  **/
//   setInterval(() => {
//     moveNext();
//   }, 7000);

//   /**  MOBILE SWIPING  **/
//   slidesContainer.addEventListener("touchstart", (e) => {
//     startX = e.touches[0].clientX;
//   });

//   slidesContainer.addEventListener("touchend", (e) => {
//     const delta = startX - e.changedTouches[0].clientX;

//     if (Math.abs(delta) > 50) {
//       delta > 0 ? moveNext() : movePrev();
//     }
//   });

//   /**  MOBILE RESIZING  **/
//   window.addEventListener("resize", () => {
//     slidesContainer.scrollLeft = currentSlide * slide.clientWidth;
//   });
// });



/*****  THIS IS THE MORE EFFECIENT VERSION  *****/ 
// document.addEventListener("DOMContentLoaded", () => {
//   const slidesContainer = document.querySelector(".founders-slider .slides-container");
//   const prevButton = document.querySelector(".founders-slider .slide-arrow.prev");
//   const nextButton = document.querySelector(".founders-slider .slide-arrow.next");
//   const indicatorParent = document.querySelector(".founders-slider .slider-indicators");

//   if (!slidesContainer || !prevButton || !nextButton || !indicatorParent) return;

//   // Use only the slides that exist at load time
//   let slides = Array.from(document.querySelectorAll(".founders-slider .slide"));
//   const totalSlides = slides.length;

//   if (totalSlides === 0) return;

//   const slide = slides[0]; // all slides are same width
//   let currentIndex = 0; // logical index 0..totalSlides-1
//   let startX = 0;
//   let isAnimating = false;

//   // Make sure CSS smooth scroll doesn't fight our JS animation
//   slidesContainer.style.scrollBehavior = "auto";
//   slidesContainer.scrollLeft = 0;

//   /* ---------------------------------
//      INDICATORS
//   ----------------------------------- */
//   if (totalSlides > 1) {
//     for (let i = 0; i < totalSlides; i++) {
//       const div = document.createElement("div");
//       div.className = i === 0 ? "slider-indicator active" : "slider-indicator";
//       indicatorParent.append(div);
//     }
//   }

//   const indicators = document.querySelectorAll(".founders-slider .slider-indicator");

//   function setIndicator(realIndex) {
//     indicators.forEach((dot, i) => {
//       dot.classList.toggle("active", i === realIndex);
//     });
//   }

//   // Clicking dots: rotate forward until we reach that logical index
//   indicators.forEach((dot, i) => {
//     dot.addEventListener("click", () => {
//       if (isAnimating || totalSlides < 2 || i === currentIndex) return;

//       // Always step forward; simpler & robust
//       let steps = (i - currentIndex + totalSlides) % totalSlides;

//       const stepForward = () => {
//         if (steps <= 0) return;
//         moveNext(() => {
//           steps--;
//           stepForward();
//         });
//       };

//       stepForward();
//     });
//   });

//   /* ---------------------------------
//      SMOOTH SCROLL WITH CALLBACK
//   ----------------------------------- */
//   function smoothScroll(element, target, duration, onComplete) {
//     const startPosition = element.scrollLeft;
//     const distance = target - startPosition;
//     let startTime = null;

//     function animation(currentTime) {
//       if (startTime === null) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const t = Math.min(timeElapsed, duration);
//       const run = easeInOutQuad(t, startPosition, distance, duration);
//       element.scrollLeft = run;

//       if (timeElapsed < duration) {
//         requestAnimationFrame(animation);
//       } else {
//         element.scrollLeft = target;
//         if (typeof onComplete === "function") onComplete();
//       }
//     }

//     function easeInOutQuad(t, b, c, d) {
//       t /= d / 2;
//       if (t < 1) return (c / 2) * t * t + b;
//       t--;
//       return (-c / 2) * (t * (t - 2) - 1) + b;
//     }

//     requestAnimationFrame(animation);
//   }

//   /* ---------------------------------
//      INFINITE LOOP VIA ROTATION
//      - NEXT: first out → last in
//      - PREV: last out → first in
//      - DOM size stays constant
//   ----------------------------------- */

//   function moveNext(callback) {
//     if (isAnimating || totalSlides < 2) {
//       if (typeof callback === "function") callback();
//       return;
//     }

//     isAnimating = true;
//     const width = slide.clientWidth;

//     // Animate 0 → width (slide left)
//     smoothScroll(slidesContainer, width, 800, () => {
//       // After animation, rotate: move first slide to the end
//       slidesContainer.appendChild(slides[0]);

//       // Refresh NodeList because DOM order changed
//       slides = Array.from(document.querySelectorAll(".founders-slider .slide"));

//       // Snap back so that new first slide is aligned
//       slidesContainer.scrollLeft -= width;

//       // Update logical index for indicators
//       currentIndex = (currentIndex + 1) % totalSlides;
//       setIndicator(currentIndex);

//       isAnimating = false;
//       if (typeof callback === "function") callback();
//     });
//   }

//   function movePrev(callback) {
//     if (isAnimating || totalSlides < 2) {
//       if (typeof callback === "function") callback();
//       return;
//     }

//     isAnimating = true;
//     const width = slide.clientWidth;

//     // Before animation: move last slide to the front
//     slidesContainer.insertBefore(slides[slides.length - 1], slides[0]);

//     // Refresh NodeList
//     slides = Array.from(document.querySelectorAll(".founders-slider .slide"));

//     // Start "one slide to the right"
//     slidesContainer.scrollLeft += width;

//     // Animate back to 0 (slide right)
//     smoothScroll(slidesContainer, 0, 800, () => {
//       currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//       setIndicator(currentIndex);

//       isAnimating = false;
//       if (typeof callback === "function") callback();
//     });
//   }

//   /* ---------------------------------
//      ARROWS
//   ----------------------------------- */
//   prevButton.style.display = "block";
//   nextButton.style.display = "block";

//   nextButton.addEventListener("click", () => moveNext());
//   prevButton.addEventListener("click", () => movePrev());

//   /* ---------------------------------
//      AUTO PLAY (fixed DOM, infinite)
//   ----------------------------------- */
//   if (totalSlides > 1) {
//     setInterval(() => {
//       moveNext();
//     }, 7000);
//   }

//   /* ---------------------------------
//      MOBILE SWIPING
//   ----------------------------------- */
//   slidesContainer.addEventListener("touchstart", (e) => {
//     startX = e.touches[0].clientX;
//   });

//   slidesContainer.addEventListener("touchend", (e) => {
//     const delta = startX - e.changedTouches[0].clientX;

//     if (Math.abs(delta) > 50) {
//       delta > 0 ? moveNext() : movePrev();
//     }
//   });

//   /* ---------------------------------
//      RESIZE
//   ----------------------------------- */
//   window.addEventListener("resize", () => {
//     // We always keep scrollLeft around 0 between animations
//     slidesContainer.scrollLeft = 0;
//   });
// });


document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".founders-slider");
  if (!slider) return;

  const slidesContainer = slider.querySelector(".slides-container");
  const prevButton = slider.querySelector(".slide-arrow.prev");
  const nextButton = slider.querySelector(".slide-arrow.next");
  const indicatorParent = slider.querySelector(".slider-indicators");

  if (!slidesContainer || !prevButton || !nextButton || !indicatorParent) return;

  let slides = Array.from(slider.querySelectorAll(".slide"));
  const totalSlides = slides.length;
  if (totalSlides === 0) return;

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

  /* ---------------------------------
     INDICATORS
  ----------------------------------- */
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

      // Optional: shorter way around circle
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

  /* ---------------------------------
     SMOOTH SCROLL + SNAP TOGGLE
  ----------------------------------- */
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
      const run = easeInOutQuad(t, startPosition, distance, duration);
      element.scrollLeft = run;

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        element.scrollLeft = target;
        element.classList.remove("no-snap"); // re-enable snap
        if (typeof onComplete === "function") onComplete();
      }
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }

  /* ---------------------------------
     INFINITE LOOP VIA FIFO ROTATION
     NEXT: first out → last in
     PREV: last out → first in
     DOM size stays constant
  ----------------------------------- */

  function moveNext(callback) {
    if (isAnimating || totalSlides < 2) {
      if (callback) callback();
      return;
    }

    isAnimating = true;
    const width = getSlideWidth();

    // Animate 0 → width (slide to next)
    smoothScrollTo(width, 800, () => {
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
    smoothScrollTo(0, 800, () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      setIndicator(currentIndex);

      isAnimating = false;
      if (callback) callback();
    });
  }

  /* ---------------------------------
     ARROWS
  ----------------------------------- */
  prevButton.style.display = "block";
  nextButton.style.display = "block";

  nextButton.addEventListener("click", () => moveNext());
  prevButton.addEventListener("click", () => movePrev());

  /* ---------------------------------
     AUTOPLAY
  ----------------------------------- */
  if (totalSlides > 1) {
    setInterval(() => {
      moveNext();
    }, 7000);
  }

  /* ---------------------------------
     SWIPE
  ----------------------------------- */
  slidesContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slidesContainer.addEventListener("touchend", (e) => {
    const delta = startX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? moveNext() : movePrev();
    }
  });

  /* ---------------------------------
     RESIZE
  ----------------------------------- */
  window.addEventListener("resize", () => {
    // Keep current slide aligned after breakpoint changes
    slidesContainer.scrollLeft = 0;
  });
});
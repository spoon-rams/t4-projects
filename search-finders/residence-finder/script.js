document.addEventListener("DOMContentLoaded", () => {
  const isProgramSearch = document.querySelector(".program-search");
  if (!isProgramSearch) {
    return;
  }
  // Button Elements
  const occupancyBtn = document.getElementById("occupancy-button");
  const classYearBtn = document.getElementById("class-year-button");
  const housingTypeBtn = document.getElementById("housing-type-button");
  const campusBtn = document.getElementById("campus-residence-button");
  const livingLearningBtn = document.getElementById("learning-residence-button");
  const pricingBtn = document.getElementById("pricing-button");

  // Filter Elements
  const occupancyFilter = document.getElementById("occupancy-filter");
  const classYearFilter = document.getElementById("class-year-filter");
  const housingTypeFilter = document.getElementById("housing-type-filter");
  const campusFilter = document.getElementById("campus-residence-filter");
  const livingLearningFilter = document.getElementById("learning-residence-filter");
  const pricingFilter = document.getElementById("pricing-filter");

  if (occupancyBtn && classYearBtn && housingTypeBtn && campusBtn && livingLearningBtn) {
    // Occupancy Button Event Listener
    occupancyBtn.addEventListener("click", () => {
      if (!occupancyFilter.classList.contains("active")) {
        occupancyFilter.classList.add("active");
      } else {
        occupancyFilter.classList.remove("active");
      }
      classYearFilter.classList.remove("active");
      housingTypeFilter.classList.remove("active");
      campusFilter.classList.remove("active");
      livingLearningFilter.classList.remove("active");
      pricingFilter.classList.remove("active");
    });

    // Class Year Button Event Listener
    classYearBtn.addEventListener("click", () => {
      if (!classYearFilter.classList.contains("active")) {
        classYearFilter.classList.add("active");
      } else {
        classYearFilter.classList.remove("active");
      }
      occupancyFilter.classList.remove("active");
      housingTypeFilter.classList.remove("active");
      campusFilter.classList.remove("active");
      livingLearningFilter.classList.remove("active");
      pricingFilter.classList.remove("active");
    });

    // Housing Type Button Event Listener
    housingTypeBtn.addEventListener("click", () => {
      if (!housingTypeFilter.classList.contains("active")) {
        housingTypeFilter.classList.add("active");
      } else {
        housingTypeFilter.classList.remove("active");
      }
      occupancyFilter.classList.remove("active");
      classYearFilter.classList.remove("active");
      campusFilter.classList.remove("active");
      livingLearningFilter.classList.remove("active");
      pricingFilter.classList.remove("active");
    });

    // Campus Button Event Listener
    campusBtn.addEventListener("click", () => {
      if (!campusFilter.classList.contains("active")) {
        campusFilter.classList.add("active");
      } else {
        campusFilter.classList.remove("active");
      }
      occupancyFilter.classList.remove("active");
      classYearFilter.classList.remove("active");
      housingTypeFilter.classList.remove("active");
      livingLearningFilter.classList.remove("active");
      pricingFilter.classList.remove("active");
    });

    // Living and Learning Button Event Listener
    livingLearningBtn.addEventListener("click", () => {
      if (!livingLearningFilter.classList.contains("active")) {
        livingLearningFilter.classList.add("active");
      } else {
        livingLearningFilter.classList.remove("active");
      }
      occupancyFilter.classList.remove("active");
      classYearFilter.classList.remove("active");
      housingTypeFilter.classList.remove("active");
      campusFilter.classList.remove("active");
      pricingFilter.classList.remove("active");
    });

    // Pricing Button Event Listener
    pricingBtn.addEventListener("click", () => {
      if (!pricingFilter.classList.contains("active")) {
        pricingFilter.classList.add("active");
      } else {
        pricingFilter.classList.remove("active");
      }
      occupancyFilter.classList.remove("active");
      classYearFilter.classList.remove("active");
      housingTypeFilter.classList.remove("active");
      campusFilter.classList.remove("active");
      livingLearningFilter.classList.remove("active");
    });
  }
});

// FOR PRICE FILTER SLIDER
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("priceSlider");
  const display = document.getElementById("priceValue");
  const combined = document.getElementById('priceCombined');

  // Update the text as the user slides
  slider.addEventListener("input", () => {
    display.textContent = slider.value;
    combined.value = slider.value;
  });
});
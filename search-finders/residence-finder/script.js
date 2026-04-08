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
  const allFilters = document.querySelectorAll("#searchoptions .program-search__form__filters.col-sm-12");

  if (occupancyBtn && classYearBtn && housingTypeBtn && campusBtn && livingLearningBtn) {
    // Occupancy Button Event Listener
    occupancyBtn.addEventListener("click", () => toggleActiveClass(occupancyFilter, allFilters));

    // Class Year Button Event Listener
    classYearBtn.addEventListener("click", () => toggleActiveClass(classYearFilter, allFilters));

    // Housing Type Button Event Listener
    housingTypeBtn.addEventListener("click", () => toggleActiveClass(housingTypeFilter, allFilters));

    // Campus Button Event Listener
    campusBtn.addEventListener("click", () => toggleActiveClass(campusFilter, allFilters));

    // Living and Learning Button Event Listener
    livingLearningBtn.addEventListener("click", () => toggleActiveClass(livingLearningFilter, allFilters));

    // Pricing Button Event Listener
    pricingBtn.addEventListener("click", () => toggleActiveClass(pricingFilter, allFilters));
  }
});

// FUNCTION TO TOGGLE ACTIVE CLASS ON FILTERS
/**
 * @param {HTMLElement} target - The element being clicked/toggled
 * @param {NodeList|Array} collection - All elements in the group
 */
function toggleActiveClass(el, collection) {
  // Save the current state before we start looping
  const isCurrentlyActive = el.classList.contains("active");

  collection.forEach((item) => {
    const shouldBeActive = item === el && !isCurrentlyActive;

    item.classList.toggle("active", shouldBeActive);
  });
}

// FOR PRICE FILTER SLIDER
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("priceSlider");
  const display = document.getElementById("priceValue");
  const combined = document.getElementById("priceCombined");

  //   // Update the text as the user slides
  //   slider.addEventListener("input", () => {
  //     display.textContent = slider.value;
  //     combined.value = slider.value;
  //   });
  // 1. Start with the input DISABLED so it doesn't send in the GET request
  // Unless there is already a value in the URL (the user is currently filtering)
  if (!window.location.search.includes("residenceCost")) {
    combined.disabled = true;
    display.innerText = "Any";
  } else {
    // If it IS in the URL, make sure the slider reflects it
    const urlParams = new URLSearchParams(window.location.search);
    display.innerText = urlParams.get("residenceCost").split("-")[1];
  }

  slider.addEventListener("input", function () {
    const val = this.value;
    // 2. Enable the input the moment the user touches the slider
    if (val !== "0") {
      combined.disabled = false;
      display.innerText = val;
      // Adjust this string format to match whatever your T4 back-end expects (e.g., "0-5000")
      combined.value = val;
    } else {
      combined.disabled = true;
      display.innerText = "0";
      combined.value = "0";
    }
  });
});

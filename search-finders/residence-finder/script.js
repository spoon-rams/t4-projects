document.addEventListener("DOMContentLoaded", () => {
  const isProgramSearch = document.querySelector(".program-search");
  if (!isProgramSearch) {
    return;
  }
  // Button Elements
  const occupancyBtn = document.getElementById("occupancy-button");
  const classYearBtn = document.getElementById("class-year-button");
  //const housingTypeBtn = document.getElementById("housing-type-button");
  const campusBtn = document.getElementById("campus-residence-button");
  //const pricingBtn = document.getElementById("pricing-button");

  // Filter Elements
  const occupancyFilter = document.getElementById("occupancy-filter");
  const classYearFilter = document.getElementById("class-year-filter");
  // const housingTypeFilter = document.getElementById("housing-type-filter");
  const campusFilter = document.getElementById("campus-residence-filter");
  // const pricingFilter = document.getElementById("pricing-filter");
  const allFilters = document.querySelectorAll("#searchoptions .program-search__form__filters.col-sm-12");

  if (occupancyBtn && classYearBtn && campusBtn) {
    // Occupancy Button Event Listener
    occupancyBtn.addEventListener("click", () => toggleActiveClass(occupancyFilter, allFilters));

    // Class Year Button Event Listener
    classYearBtn.addEventListener("click", () => toggleActiveClass(classYearFilter, allFilters));

    // Housing Type Button Event Listener
    // housingTypeBtn.addEventListener("click", () => toggleActiveClass(housingTypeFilter, allFilters));

    // Campus Button Event Listener
    campusBtn.addEventListener("click", () => toggleActiveClass(campusFilter, allFilters));

    // Pricing Button Event Listener
    //pricingBtn.addEventListener("click", () => toggleActiveClass(pricingFilter, allFilters));
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

  // 1. Start with the input DISABLED so it doesn't send in the GET request
  // Unless there is already a value in the URL (the user is currently filtering)
  if (!window.location.search.includes("residenceCost")) {
    combined.disabled = true;
    display.innerText = "0";
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

// FOR REMOVING PRICE FILTER TAGS WITHOUT PAGE RELOAD
document.addEventListener("click", function (e) {
  const priceTag = e.target.closest(".js-price-tag");

  // Verify the "X" was clicked and we are inside a price tag
  if (priceTag && e.target.classList.contains("remove")) {
    e.preventDefault();

    // 1. Reference all pricing elements
    const combined = document.getElementById("priceCombined");
    const slider = document.getElementById("priceSlider");
    const display = document.getElementById("priceValue");
    const filterForm = document.querySelector("#searchoptions form.js-t4form-container");

    // 2. Reset the state
    // We disable the input so the T4 AJAX ignores 'residenceCost' entirely
    if (combined) {
      combined.value = ""; 
      combined.disabled = true; 
    }

    if (display) {
      display.innerText = "0"; // Visual reset
    }

    if (slider) {
      slider.value = 0; // Reset slider handle
    }

    // 3. Trigger T4 AJAX (The key to no-reload)
    if (filterForm) {
      // Remove the tag from UI immediately for speed
      priceTag.remove();

      /* We dispatch the event from the SLIDER. 
         T4's library listens for changes on form inputs. 
         By bubbling a change from the slider, T4 thinks a user 
         manually moved it and triggers the AJAX refresh automatically.
      */
      const changeEvent = new Event("change", { bubbles: true });
      slider.dispatchEvent(changeEvent);
    }
  }
});

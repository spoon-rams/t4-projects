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

  // Filter Elements
  const occupancyFilter = document.getElementById("occupancy-filter");
  const classYearFilter = document.getElementById("class-year-filter");
  const housingTypeFilter = document.getElementById("housing-type-filter");
  const campusFilter = document.getElementById("campus-residence-filter");
  const livingLearningFilter = document.getElementById("learning-residence-filter");

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
    });

    // Living and Learning Button Event Listener
    livingLearningBtn.addEventListener("click", () => {
      if (!livingLearningFilter.classList.contains("active")) {
        livingLearningFilter.classList.add("active");
      } else {
        livingLearningFilter.classList.remove("active");
      }≠
      occupancyFilter.classList.remove("active");
      classYearFilter.classList.remove("active");
      housingTypeFilter.classList.remove("active");
      campusFilter.classList.remove("active");
    });
  }
});

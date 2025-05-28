document.addEventListener("DOMContentLoaded", () => {
  const maroonTheme = document.querySelectorAll(".side-tabs-maroon");
  const whiteTheme = document.querySelectorAll(".side-tabs-white");

  // Tabs Vertical with Animation - Maroon Theme
  // Edge Case
  if (!maroonTheme) return;

  // Handles duplication if there are more than one of these components and makes each duplication unique
  maroonTheme.forEach((val, index) => {
    if (maroonTheme.length > 1) {
      val.classList.add(`maroon-duplicated-${index}`);
      tabAnimation(`.maroon-duplicated-${index} .maroon-item`, `.maroon-duplicated-${index} .text`, "tab-active");
    } else if (maroonTheme.length === 1) {
      tabAnimation(".side-tabs-maroon .maroon-item", ".side-tabs-maroon .text", "tab-active");
    } else {
      return;
    }
  });

  // Tabs Vertical with Animation - White Theme
  // Edge Case
  if (!whiteTheme) return;

  // Handles duplication if there are more than one of these components and makes each duplication unique
  whiteTheme.forEach((val, index) => {
    if (whiteTheme.length > 1) {
      val.classList.add(`white-duplicated-${index}`);
      tabAnimation(`.white-duplicated-${index} .white-item`, `.white-duplicated-${index} .text`, "tab-active-maroon", "text-white");
    } else if (whiteTheme.length === 1) {
      tabAnimation(".side-tabs-white .white-item", ".side-tabs-white .text", "tab-active-maroon", "text-white");
    } else {
      return;
    }
  });
});

/**
 * Initializes a tab animation component within a specified root element.
 * This function is designed to work with multiple independent tab sets on a single page.
 *
 * @param {HTMLElement} itemSelector - The main container element for this specific tab component.
 * @param {string} contentSelector - CSS selector for the tab list items (e.g., '.tab-list-item').
 * The full ID will be constructed as `parentContentSelector + index`.
 * @param {string} activeClass - The CSS class to apply to the active tab list item (e.g., 'active-tab').
 * @param {string} [textColor] - Optional CSS class for changing text color on active tab (e.g., 'active-text-color').
 */

// HELPER FUNCTION FOR ANIMATION
function tabAnimation(itemsSelector, contentSelector, activeClass, textColor) {
  // Initialization of variables/DOM elements/Objects
  const listitems = document.querySelectorAll(itemsSelector);
  const content = document.querySelector(contentSelector);
  const text = {};

  // Default first tab to be already selected
  text.current = content;
  content.style.display = "block";
  content.style.opacity = 1;
  listitems[0].classList.add(activeClass);

  // For white themed background font color change
  if (textColor) listitems[0].classList.add(textColor);

  // Loop through all the avaiable tabs
  listitems.forEach((element, index) => {
    element.addEventListener("click", () => {
      // Checks if a tab always includes the active css class
      const tabIsActive = [...element.classList].includes(activeClass);
      if (tabIsActive) return;

      // Updates the content selector to attach the tab index to show the correct text/content
      const updateContentSelector = index === 0 ? contentSelector : contentSelector.concat(`-${index}`);
      const newContent = document.querySelector(updateContentSelector);

      // Tracks the current and previous text/content
      if (!text.current) {
        text.previous = newContent;
      } else {
        text.previous = text.current;
        text.current = newContent;
      }

      // Fades in and out the previous text/content & scrolls text/content back to the top
      text.previous.style.opacity = 0;
      setTimeout(() => {
        text.previous.style.display = "none";
      }, 350);
      setTimeout(() => {
        text.current.style.display = "block";
      }, 450);
      setTimeout(() => {
        text.current.style.opacity = 1;
      }, 500);

      // Changes the tab font color and animation
      listitems.forEach((item) => {
        if (textColor && element.innerText !== item.innerText) {
          setTimeout(() => {
            item.classList.remove(textColor);
          }, 200);
        }
        item.classList.remove(activeClass);
      });

      if (textColor) {
        element.classList.add(activeClass);
        element.classList.add(textColor);
      }
      element.classList.add(activeClass);
    });
  });
}

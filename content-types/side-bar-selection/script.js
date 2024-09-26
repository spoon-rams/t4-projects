// Tabs Vertical with Animation - Maroon Theme
document.addEventListener("DOMContentLoaded", () => {
  const maroonTheme = document.querySelectorAll(".side-tabs-maroon");
  // Edge Case
  if (!maroonTheme) return;

  // Handles duplication if there are more than one of these components and makes each duplication unique
  maroonTheme.forEach((val, index) => {
    if (maroonTheme.length > 1) {
      val.classList.add(`duplicated-${index}`);
      tabAnimation(`.duplicated-${index} .maroon-item`, `.duplicated-${index} .text`, `.duplicated-${index} .col-md-8`, "tab-active");
    } else if (maroonTheme.length === 1) {
      tabAnimation(".side-tabs-maroon .maroon-item", ".side-tabs-maroon .text", ".side-tabs-maroon .col-md-8", "tab-active");
    } else {
      return;
    }
  });
});

// Tabs Vertical with Animation - White Theme
// document.addEventListener("DOMContentLoaded", () => {
//   const whiteTheme = document.querySelectorAll(".side-tabs-white");
//   // Edge Case
//   if (!whiteTheme) return;

//   // Handles duplication if there are more than one of these components and makes each duplication unique
//   whiteTheme.forEach((val, index) => {
//     if (whiteTheme.length > 1) {
//       val.classList.add(`duplicated-${index}`);
//       tabAnimation(`.duplicated-${index} .white-item`, `.duplicated-${index} .text`, `duplicated-${index} .col-md-8`, "tab-active-maroon", "text-white");
//     } else if (whiteTheme.length === 1) {
//       tabAnimation(".side-tabs-white .white-item", ".side-tabs-white .text", ".side-tabs-white .col-md-8", "tab-active-maroon", "text-white");
//     } else {
//       return;
//     }
//   });
// });

// HELPER FUNCTION FOR ANIMATION
function tabAnimation(itemsSelector, contentSelector, parentContentSelector, activeClass, textColor) {
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
      // Targets the parent textbox content
      const parent = document.querySelector(parentContentSelector);

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

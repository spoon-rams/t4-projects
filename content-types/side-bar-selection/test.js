document.addEventListener("DOMContentLoaded", () => {
  const whiteBackground = document.querySelectorAll(".side-tabs-white");

  if (whiteBackground.length > 1) {
    whiteBackground.forEach((val, index) => {
      val.classList.add(`duplicated-${index}`);
      const textObj = newObj(); // Create a new text object for each duplicated container
      return initTabs(`.duplicated-${index}`, `.duplicated-${index} .white-item`, `.duplicated-${index} .text`, textObj);
    });
  } else {
    const textObj = newObj(); // Create a new text object for the original container
    return initTabs(".side-tabs-white", ".white-item", ".side-tabs-white .text", textObj);
  }

  function newObj() {
    const text = {
      0: `<t4 type="content" name="Content Text" output="normal" modifiers="medialibrary,nav_sections" />`,
      1: `<t4 type="content" name="Content Text 2" output="normal" modifiers="medialibrary,nav_sections" />`,
      2: `<t4 type="content" name="Content Text 3" output="normal" modifiers="medialibrary,nav_sections" />`,
      3: `<t4 type="content" name="Content Text 4" output="normal" modifiers="medialibrary,nav_sections" />`,
      4: `<t4 type="content" name="Content Text 5" output="normal" modifiers="medialibrary,nav_sections" />`,
      5: `<t4 type="content" name="Content Text 6" output="normal" modifiers="medialibrary,nav_sections" />`,
      6: `<t4 type="content" name="Content Text 7" output="normal" modifiers="medialibrary,nav_sections" />`,
      7: `<t4 type="content" name="Content Text 8" output="normal" modifiers="medialibrary,nav_sections" />`,
    };
    return text || "";
  }

  function initTabs(mainContainer, listItems, contentBox, text) {
    const sideTabsWhite = document.querySelector(mainContainer);
    const listItemWhite = document.querySelectorAll(listItems);
    const contentContainerWhite = document.querySelector(contentBox);
    if (sideTabsWhite) return tabAnimation(listItemWhite, "tab-active-maroon", contentContainerWhite, text, "text-white");
    return;
  }
});

function tabAnimation(listItem, activeClass, textContainer, text, textColor) {
  const textContainerIsEmpty = textContainer.innerText.length < 1;
  if (textContainerIsEmpty) {
    textContainer.innerHTML = text[0];
    textContainer.style.opacity = 1;
    listItem[0].classList.add(activeClass);
  }

  if (textColor) listItem[0].classList.add(textColor);

  listItem.forEach((element, index) => {
    element.addEventListener("click", () => {
      let tabIsActive = [...element.classList].includes(activeClass);
      console.log(text);
      if (tabIsActive) return;

      textContainer.style.opacity = 0;
      setTimeout(() => {
        textContainer.innerHTML = text[index];
        textContainer.style.opacity = 1;
      }, 350);

      listItem.forEach((item) => {
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



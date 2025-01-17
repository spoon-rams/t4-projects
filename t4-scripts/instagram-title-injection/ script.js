// Waits until all DOM items are loaded including CSS and JS before execution
window.addEventListener("load", () => {
  
  // Object Literal for title names
  const instaTitles = {
    1: "Input Title One",
    2: "Input Title Two",
    3: "Input Title Three",
    4: "",
    5: "",
    6: "",
  };

  const instaReels = document.querySelectorAll(".instagram-media");
  const titles = [];

  // Searches the object literal for title names
  for (let key in instaTitles) {
    // if a title exist
    if (instaTitles[key].length > 0) {
      // add to the titles array
      titles.push(instaTitles[key]);
    }
  }
  
  // Checks if the reels is equal to the amount of titles
  if (instaReels.length > 0 && titles.length > 0) {
    // Search through the added titles
    titles.forEach((title, index) => {
      // If the reel exists
      if (instaReels[index]) {
        // Create a title attribute 
        instaReels[index].setAttribute("title", title);
      }
      return;
    });

  } else {
    return;
  }
});

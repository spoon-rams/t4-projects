window.addEventListener("load", () => {
  const instaTitles = {
    1: "Input Title One",
    2: "Input Title Two",
    3: "Input Title Three",
    4: "",
    5: "",
    6: "",
  };

  const instaReels = document.querySelectorAll(".instagram-media-rendered");
  const titles = [];

  for (let key in instaTitles) {
    if (instaTitles[key].length > 0) {
        titles.push(instaTitles[key]);
    }
  }
  
  
   
  if (instaReels.length > 0 && titles.length > 0) {
    titles.forEach((title, index) => {
      if (title.length > 0) {
        instaReels[index].setAttribute("title", title);
      }
      return;
    });
  } else {
    return;
  }
});

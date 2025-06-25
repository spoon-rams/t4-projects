console.log("CONNECTED TO TEST SCRIPT!");
window.addEventListener("load", () => {
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

  for (let key in instaTitles) {
    if (instaTitles[key].length > 0) {
      titles.push(instaTitles[key]);
    }
  }

  if (instaReels.length > 0 && titles.length > 0) {
    titles.forEach((title, index) => {
     
      if (instaReels[index]) {
        console.log(title, instaReels[index]);
        instaReels[index].setAttribute("title", title);
      }
      return;
    });
  } else {
    return;
  }
});

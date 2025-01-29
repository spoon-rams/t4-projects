console.log("CONNECTED TO SOCIAL MEDIA TITLE INJECTION SCRIPT!");
// Waits until all DOM items are loaded including CSS and JS before execution
window.addEventListener("load", () => {
  // Object Literal for title names
  const instaReels = document.querySelectorAll("iframe");
  const {dataset: json} = document.querySelector(".test-js");
  const data = JSON.parse(json);
  let instaTitles = data;

  const titles = [];
  let count = 0;

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
    // Search through the reels on the page
    instaReels.forEach((reel) => {
      const socialMedia = ["instagram", "tiktok", "twitter"];
      const hasTitle = reel.hasAttribute("title");
      const source = reel.getAttribute("src");
      const isSocialMedia = socialMedia.includes(extractDomain(source));

      // If there's a reel, the reel doesn't have a title, and it's a social media reel
      if (reel && !hasTitle && isSocialMedia) {
        // Create a title attribute
        reel.setAttribute("title", titles[count]);
        count++;
      }
      return;
    });
  } else {
    return;
  }
});

const extractDomain = (url) => {
  if(!url) return;
  const match = url.match(/www\.(.*?)\.com/);
  const result = match ? match[1] : null;
  return result;
};

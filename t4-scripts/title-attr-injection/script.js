window.addEventListener("load", () => {
  const tourOne = document.getElementById("virtualtour_iframe_0");
  const tourTwo = document.getElementById("virtualtour_iframe_1");

  if (tourOne) {
    tourOne.setAttribute("title", "Explore the Rose Hill Campus");
    tourOne.setAttribute("alt", "A virtual tour of the Rose Hill Campus");
  } else {
    return;
  }

  if (tourTwo) {
    tourTwo.setAttribute("title", "Explore the Lincoln Center Campus");
    tourTwo.setAttribute("alt", "A virtual tour of the Lincoln Center Campus");
  } else {
    return;
  }
  return;
});


window.addEventListener("load", () => {
  const instagramEmbeds = document.querySelectorAll(".instagram-media-rendered");
  

  instagramEmbeds.forEach(((embed, index) => {

  }))
})

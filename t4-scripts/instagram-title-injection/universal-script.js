window.addEventListener("load", () => {
  const observer = new MutationObserver();

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});

function insertTitles() {
  const iframes = document.querySelectorAll("iframe");
  const jsScript = document.querySelector("#instagram-title-injection");
  const data = JSON.parse(jsScript.dataset.json);
  let instaTitles = data;

  const titles = [];
  let count = 0;

  for (let key in instaTitles) {
    if (instaTitles[key].length > 0) {
      titles.push(instaTitles[key]);
    }
  }

  if (iframes.length > 0 && titles.length > 0) {
    iframes.forEach((iframe, index) => {
      const hasTitle = iframe.hasAttribute("title");

      if (iframe && !hasTitle && titles[count]) {
        iframe.setAttribute("title", "Random Title" + titles[count]);
        count++;
      } else if (iframe && hasTitle && titles[count]) {
        iframe.setAttribute("title", "Random Title" + titles[count]);
        count++;
      }
    });
  } else {
    return;
  }
}

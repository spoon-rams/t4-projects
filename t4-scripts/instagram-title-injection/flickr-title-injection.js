// Test for flickr iframes
document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(insertTestIframes);

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  function insertTestIframes() {
    const iframesAll = document.querySelectorAll("iframe");
    iframesAll.forEach((iframe, index) => {
      const classAttribute = iframe.getAttribute("class");
      if (classAttribute && classAttribute.includes("flickr-embed-frame")) {
        iframe.setAttribute("title", "Flickr image or video " + (index + 1));
      }
    });
  }
});



// Test for youvisit iframes
document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(insertTestIframes);

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  function insertTestIframes() {
    const iframesAll = document.querySelectorAll("iframe");
    iframesAll.forEach((iframe, index) => {
      const classAttribute = iframe.getAttribute("class");
      if (classAttribute && classAttribute.includes("youvisit-embed")) {
        iframe.setAttribute("title", "Launch Virtual Tour " + (index + 1));
      }
    });
  }
});

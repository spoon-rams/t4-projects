function changeTitle() {
  const rssFeeds = document.querySelectorAll("iframe");

  if(!rssFeeds) return;
  
  rssFeeds.forEach((feed, index) => {
    let titleValue = feed.getAttribute("title");
    if (titleValue === "fw-iframe") {
      feed.setAttribute("title", `fw-inframe-${index + 1}`);
    }
    return;
  });
}


document.addEventListener("DOMContentLoaded", changeTitle);

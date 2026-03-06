const rssTitle = document.querySelector(".test-container a");
const regex = /\bfordham\snow\b/i;
const image = '<span><img src="https://news.fordham.edu/wp-content/uploads/2018/10/fordham-news.svg" style="height: 28px; margin-bottom: 9px;"/></span>';
const newInnerText = rssTitle.innerText.replace(regex, image);
rssTitle.innerHTML = newInnerText;



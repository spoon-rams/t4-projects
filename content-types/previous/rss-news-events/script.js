/***** Events T4 Elements Data *****/
const numberOfEvents = ""; //"<t4 type="content" name="Number of Events Shown" output="normal" modifiers="striptags,htmlentities" />";
const includeEventsLink = ""; //"<t4 type="content" name="Include Event Link" output="normal" display_field="value" />";
const eventsTitleText = ""; //<t4 type="content" name="Events Title" output="normal" modifiers="striptags,htmlentities" />
const externalEventsTitleLink = ""; //<t4 type="content" name="Events Title External Link" output="normal" modifiers="striptags,htmlentities" />
const internalEventsTitleLink = ""; //<t4 type="content" name="Events Title Internal Link" output="normal" modifiers="nav_sections" />

/***** News T4 Elements Data *****/
const numberOfNews = ""; //"<t4 type="content" name="Number of News Shown" output="normal" modifiers="striptags,htmlentities" />";
const hideNewsImage = ""; //"<t4 type="content" name="Hides the News Image" output="normal" display_field="value" />";
const includeNewsLink = ""; //"<t4 type="content" name="Include News Link" output="normal" display_field="value" />";
const newsTitleText = ""; //<t4 type="content" name="News Title" output="normal" modifiers="striptags,htmlentities" />
const externalNewsTitleLink = ""; //<t4 type="content" name="News Title External Link" output="normal" modifiers="striptags,htmlentities" />
const internalNewsTitleLink = ""; //<t4 type="content" name="News Title Internal Link" output="normal" modifiers="nav_sections" />

/***** DOM Selectors for both News and Events *****/
const events = document.getElementById("events");
const eventsTitle = document.querySelector("#events-title h3");
const news = document.getElementById("news");
const newsTitle = document.querySelector("#news-title h3");

/***** Events Title Link Logic *****/ 
if (externalEventsTitleLink.length > 0 && internalEventsTitleLink.length > 0) {
  eventsTitle.innerHTML = `<a href=${externalEventsTitleLink} rel="noopener noreferrer">${eventsTitleText}</a>`;
} else if (externalEventsTitleLink.length > 0) {
  eventsTitle.innerHTML = `<a href=${externalEventsTitleLink} rel="noopener noreferrer">${eventsTitleText}</a>`;
} else if (internalEventsTitleLink.length > 0) {
  const internalLink = replaceAnchorElementText(internalEventsTitleLink, eventsTitleText)
  eventsTitle.innerHTML = internalLink;
} else {
  eventsTitle.innerHTML = eventsTitleText;
}


/***** News Title Link Logic *****/ 
if (externalNewsTitleLink.length > 0 && internalNewsTitleLink.length > 0) {
  newsTitle.innerHTML = `<a href=${externalNewsTitleLink} rel="noopener noreferrer">${newsTitleText}</a>`;
} else if (externalNewsTitleLink.length > 0) {
  newsTitle.innerHTML = `<a href=${externalNewsTitleLink} rel="noopener noreferrer">${newsTitleText}</a>`;
} else if (internalNewsTitleLink.length > 0) {
  const internalLink = replaceAnchorElementText(internalNewsTitleLink, newsTitleText);
  newsTitle.innerHTML = internalLink;
} else {
  newsTitle.innerHTML = newsTitleText;
}

/***** RSS News & Events Card Link Logic *****/ 
if (includeEventsLink === "yes") {
  events.innerHTML = `<t4 type="data-obj" method="rss" rss-url="$template.events-url$" for-each="item"  formatter="text/output-3" />`;
} else {
  events.innerHTML = `<t4 type="data-obj" method="rss" rss-url="$template.events-url$" for-each="item"  formatter="text/output-1" />`;
}

if (includeNewsLink === "yes") {
  news.innerHTML = `<t4 type="data-obj" method="rss" rss-url="$template.news-url$" for-each="item"  formatter="text/output-4" />`;
} else {
  news.innerHTML = `<t4 type="data-obj" method="rss" rss-url="$template.news-url$" for-each="item"  formatter="text/output-2" />`;
}

const eventList = document.querySelectorAll("#events .list-group-item");
const newsList = document.querySelectorAll("#news .list-group-item");

function listOfContent(list, num, hideImage) {
  list.forEach((item, index) => {
    if (index < parseInt(num)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }

    if (hideImage === "yes") {
      const row = item.querySelector(".row");
      const img = item.querySelector(".row .col-4");
      const text = item.querySelector(".row .col-8");
      img.style.display = "none";
      row.style.paddingLeft = "20px";
      text.classList.remove("col-8");
      text.classList.add("col-12");
    }
  });
}


function replaceAnchorElementText (element, text) {
  // Find the position of '>' and '</a>'
  const start = element.indexOf(">") + 1;
  const end = element.lastIndexOf("</a>");
  // Check if both '>' and '</a>' were found
  if (start !== -1 && end !== -1) {
    // Extract the text between '>' and '</a>'
    const textBetweenTags = element.substring(start, end);
    // Replace the text with your new text
    const newText = text;
    var modifiedHtmlString = element.replace(textBetweenTags, newText);

    return modifiedHtmlString;
  }
  return undefined;
}

listOfContent(eventList, numberOfEvents, null);
listOfContent(newsList, numberOfNews, hideNewsImage);

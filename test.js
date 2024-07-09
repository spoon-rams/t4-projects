(function () {
  var domainsToDecorate = ["fordham.edu"],
    queryParams = ["utm_medium", "utm_source", "utm_campaign", "utm_content"];

  // do not edit anything below this line
  var links = document.querySelectorAll("a");
  
  for (var linkIndex = 0; linkIndex < links.length; linkIndex++) {
    for (var domainIndex = 0; domainIndex < domainsToDecorate.length; domainIndex++) {
      if (links[linkIndex].href.indexOf(domainsToDecorate[domainIndex]) > -1 && links[linkIndex].href.indexOf("#") === -1) {
        links[linkIndex].href = decorateUrl(links[linkIndex].href);
      }
    }
  }

  function decorateUrl(urlToDecorate) {
    urlToDecorate = urlToDecorate.indexOf("?") === -1 ? urlToDecorate + "?" : urlToDecorate + "&";
    var collectedQueryParams = [];
    for (var queryIndex = 0; queryIndex < queryParams.length; queryIndex++) {
      if (getQueryParam(queryParams[queryIndex])) {
        collectedQueryParams.push(queryParams[queryIndex] + "=" + getQueryParam(queryParams[queryIndex]));
      }
    }
    return urlToDecorate + collectedQueryParams.join("&");
  }

  function getQueryParam(name) {
    if ((name = new RegExp("[?&]" + encodeURIComponent(name) + "=([^&]*)").exec(window.location.search))) return decodeURIComponent(name[1]);
  }
})();

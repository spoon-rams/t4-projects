/**
 * Append page links with UTM parameters
 * script by Amsive - www.amsive.com
 * date: 12/20/2023
 * v1.1.2
 */

// cookie domain namespace
var domainname = ".fordham.edu";
// regex, for multiple domains use '|' as separator:
var url_domainnames_regex = /gradadmissions\.fordham\.edu/g;
/**
* Sets a cookie with the specified name and value that expires after the specified number of
days.
*/
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;" + "Domain=" + domainname;
}
/**
 * Retrieves the value of a cookie with the specified name.
 */
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
/**
 * Retrieves the value of a specified parameter from the URL query string.
 */
function getParam(p) {
  var match = RegExp("[?&]" + p + "=([^&]*)").exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}
/**
 * Generates a record with an expiry date for the given value.
 */

function getExpiryRecord(value) {
  var expiryPeriod = 400 * 24 * 60 * 60 * 1000; // 400 day expiry in milliseconds
  var expiryDate = new Date().getTime() + expiryPeriod;
  return {
    value: value,
    expiryDate: expiryDate,
  };
}
function updateLocalParam(value) {
  var theParam = getParam(value.source);
  var localParam = null;
  var result = null;
  if (!theParam) {
    var cookieValue = getCookie(value.id);
    if (cookieValue) {
      try {
        localParam = JSON.parse(cookieValue);
      } catch (e) {
        console.error("Error parsing JSON from cookie", e);
        return null;
      }
      if (localParam && new Date().getTime() < localParam.expiryDate) {
        result = localParam.value;
      }
    }
  } else {
    setCookie(value.id, JSON.stringify(getExpiryRecord(theParam)));
    result = theParam;
  }
  return result;
}

/**
 * Updates the UTM parameters on the page.
 */
function processParameters() {
  //console.log("utm script running...");
  var dataMap = [
    {
      source: "utm_source",
      id: "utm_source_id",
    },
    {
      source: "utm_medium",
      id: "utm_medium_id",
    },
    {
      source: "utm_campaign",
      id: "utm_campaign_id",
    },

    {
      source: "utm_content",
      id: "utm_content_id",
    },
    {
      source: "utm_term",
      id: "utm_term_id",
    },
  ];
  
  dataMap.forEach(function (value) {
    //console.log(value);
    var localParameter = updateLocalParam(value);
    if (localParameter === null) {
      return null;
    }
    //console.log(localParameter);
    var formEl = document.getElementById(value.id);
    if (formEl && localParameter) formEl.value = localParameter;
  });

  /**
   * update/append certain links on the page with UTM parameters
   */
  // find all anchors (links)
  var links = document.getElementsByTagName("a");
  // iterate
  for (var i = 0; i < links.length; i++) {
    // if link contains
    if (links[i].href.match(url_domainnames_regex)) {
      // set link as url
      var url = new URL(links[i].href);
      // iterate through utm params
      dataMap.forEach(function (value) {
        // update and get the utm parmeter
        var localParameter = updateLocalParam(value);
        // add or update link parameter
        if (localParameter) {
          url.searchParams.set(value.source, localParameter);
        }
      });
      // set the link with added parameters
      links[i].href = url.toString();
    }
  }
}
// process parameters on page load

window.addEventListener("load", processParameters);

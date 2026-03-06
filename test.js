// (function () {
//   var domainsToDecorate = ["fordham.edu"],
//     queryParams = ["utm_medium", "utm_source", "utm_campaign", "utm_content"];

//   // do not edit anything below this line
//   var links = document.querySelectorAll("a");

//   for (var linkIndex = 0; linkIndex < links.length; linkIndex++) {
//     for (var domainIndex = 0; domainIndex < domainsToDecorate.length; domainIndex++) {
//       if (links[linkIndex].href.indexOf(domainsToDecorate[domainIndex]) > -1 && links[linkIndex].href.indexOf("#") === -1) {
//         links[linkIndex].href = decorateUrl(links[linkIndex].href);
//       }
//     }
//   }

//   function decorateUrl(urlToDecorate) {
//     urlToDecorate = urlToDecorate.indexOf("?") === -1 ? urlToDecorate + "?" : urlToDecorate + "&";
//     var collectedQueryParams = [];
//     for (var queryIndex = 0; queryIndex < queryParams.length; queryIndex++) {
//       if (getQueryParam(queryParams[queryIndex])) {
//         collectedQueryParams.push(queryParams[queryIndex] + "=" + getQueryParam(queryParams[queryIndex]));
//       }
//     }
//     return urlToDecorate + collectedQueryParams.join("&");
//   }

//   function getQueryParam(name) {
//     if ((name = new RegExp("[?&]" + encodeURIComponent(name) + "=([^&]*)").exec(window.location.search))) return decodeURIComponent(name[1]);
//   }
// })();

// Program Hidden Edits
try {
  //Defining main functions
  function processTags(t4Tag) {
    let myContent = content || null;
    return String(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, myContent, language, isPreview, t4Tag));
  }

  function getLayout(contentLayout) {
    let tid = content.getContentTypeID();
    let format = publishCache.getTemplateFormatting(dbStatement, tid, contentLayout);
    return processTags(format.getFormatting());
  }
  // Definining variables with t4 tags
  let contentId = '<t4 type="meta" meta="content_id" />';
  let courseURL = '<t4 type="navigation" name="Path to current section" id="29" />';
  let courseName = '<t4 type="content" name="Program Name" output="normal" modifiers="striptags,htmlentities" />';
  let courseOverview = '<t4 type="content" name="Short Description" output="normal" modifiers="striptags,htmlentities" />';
  let courseKeywords = '<t4 type="content" name="Keywords" output="normal" modifiers="striptags,htmlentities" />';
  let courseSalary = '<t4 type="content" name="Salary Information" output="normal" modifiers="striptags,htmlentities" />';
  let atFordham = '<t4 type="content" name="At Fordham" output="normal" modifiers="" />';
  let courseLocation = '<t4 type="content" name="College or School" output="normal" display_field="value" />';
  let courseImage = '<t4 type="content" name="Preview Image" output="normal" formatter="path/*" />';
  let courseArea = '<t4 type="content" name="Area of Interest" output="normal" display_field="value" />';
  let courseOptions = '<t4 type="content" name="Campus and Degree Options" output="normal" display_field="value" />';
  let courseDegree = '<t4 type="content" name="Degree" output="normal" display_field="value" />';
  let courseCollegeSchool = '<t4 type="content" name="College or School" output="normal" display_field="value" />';
  let courseAcc1 = '<t4 type="content" name="Accordion Description 1" output="normal" modifiers="medialibrary,nav_sections" />';
  let courseAcc2 = '<t4 type="content" name="Accordion Description 2" output="normal" modifiers="medialibrary,nav_sections" />';
  let courseAcc3 = '<t4 type="content" name="Accordion Description 3" output="normal" modifiers="medialibrary,nav_sections" />';
  let courseAcc4 = '<t4 type="content" name="Accordion Description 4" output="normal" modifiers="medialibrary,nav_sections" />';
  let courseMainDesc = '<t4 type="content" name="Description" output="normal" modifiers="medialibrary,nav_sections" />';

  let campusOne = processTags('<t4 type="content" name="Link to Campus 1 " output="linktext" modifiers="nav_sections" />');
  let campusTwo = processTags('<t4 type="content" name="Link to Campus 2" output="linktext" modifiers="nav_sections" />');
  let campusThree = processTags('<t4 type="content" name="Link to Campus 3" output="linktext" modifiers="nav_sections" />');

  // Object initialization
  let obj = {};

  // Object key value pairs
  obj.contentID = processTags(contentId);
  obj.courseURL = processTags(courseURL);
  obj.courseName = processTags(courseName);
  obj.courseOverview = processTags(courseOverview);
  obj.courseKeywords = processTags(courseKeywords);
  obj.courseSalary = processTags(courseSalary);
  obj.atFordham = processTags(atFordham);
  obj.courseLocation = processTags(courseLocation);
  obj.courseImage = processTags(courseImage);
  obj.courseArea = processTags(courseArea);
  obj.courseOptions = processTags(courseOptions);
  obj.courseDegree = processTags(courseDegree);
  obj.courseCollegeSchool = processTags(courseCollegeSchool);
  obj.courseAcc1 = processTags(courseAcc1);
  obj.courseAcc2 = processTags(courseAcc2);
  obj.courseAcc3 = processTags(courseAcc3);
  obj.courseAcc4 = processTags(courseAcc4);
  obj.courseMainDesc = processTags(courseMainDesc);

  var campuses = [];
  

  if (campusOne != "") {
    campuses.push(campusOne);
  }

  if (campusTwo != "") {
    campuses.push(campusTwo);
  }

  if (campusThree != "") {
    campuses.push(campusThree);
  }

  obj.courseCampuses = campuses.join(",");

  let jsonObj = new org.json.JSONObject(obj);
  document.write(jsonObj.toString() + ",");
} catch (err) {
  document.write(err);
}

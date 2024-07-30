try {
  //Defining main functions
  function processTags(t4Tag) {
    let myContent = content || null;
    return String(
      com.terminalfour.publish.utils.BrokerUtils.processT4Tags(
        dbStatement,
        publishCache,
        section,
        myContent,
        language,
        isPreview,
        t4Tag,
      ),
    );
  }

  function getLayout(contentLayout) {
    let tid = content.getContentTypeID();
    let formatter = contentLayout;
    let format = publishCache.getTemplateFormatting(dbStatement, tid, formatter);
    let formatString = format.getFormatting();
    return processTags(formatString);
  }

  let json = {};

//   json.contentID = processTag('<t4 type="meta" meta="content_id" />');
//   json.courseURL = processTags('<t4 type="navigation" name="Path to current section" id="29" />');
//   json.courseName = processTags('<t4 type="content" name="Program Name" output="normal" modifiers="striptags,htmlentities" />');
//   json.courseOverview = processTags('<t4 type="content" name="Short Description" output="normal" modifiers="striptags,htmlentities" />');
//   json.courseKeywords = processTags('<t4 type="content" name="Keywords" output="normal" modifiers="striptags,htmlentities" />');
//   json.courseSalary = processTags('<t4 type="content" name="Salary Information" output="normal" modifiers="striptags,htmlentities" />');
//   json.atFordham = processTags('<t4 type="content" name="At Fordham" output="normal" modifiers="" />');
//   json.courseLocation = processTags('<t4 type="content" name="College or School" output="normal" display_field="value" />');
//   json.courseImage = processTags('<t4 type="content" name="Preview Image" output="normal" formatter="path/*" />');
//   json.courseArea = processTags('<t4 type="content" name="Area of Interest" output="normal" display_field="value" />');
//   json.courseOptions = processTags('<t4 type="content" name="Campus and Degree Options" output="normal" display_field="value" />');
//   json.courseDegree = processTags('<t4 type="content" name="Degree" output="normal" display_field="value" />');
//   json.courseCollegeSchool = processTags('<t4 type="content" name="College or School" output="normal" display_field="value" />');
//   json.courseAcc1 = processTags('<t4 type="content" name="Accordion Description 1" output="normal" modifiers="medialibrary,nav_sections" />');
//   json.courseAcc2 = processTags('<t4 type="content" name="Accordion Description 2" output="normal" modifiers="medialibrary,nav_sections" />');
//   json.courseAcc3 = processTags('<t4 type="content" name="Accordion Description 3" output="normal" modifiers="medialibrary,nav_sections" />');
//   json.courseAcc4 = processTags('<t4 type="content" name="Accordion Description 4" output="normal" modifiers="medialibrary,nav_sections" />');
//   json.courseMainDesc = processTags('<t4 type="content" name="Description" output="normal" modifiers="medialibrary,nav_sections" />');

  let campuses = [];
//   let campusOne = processTags('<t4 type="content" name="Link to Campus 1 " output="linktext" modifiers="nav_sections" />');
//   let campusTwo = processTags('<t4 type="content" name="Link to Campus 2" output="linktext" modifiers="nav_sections" />');
//   let campusThree = processTags('<t4 type="content" name="Link to Campus 3" output="linktext" modifiers="nav_sections" />');

  if (campusOne !== "") {
    campuses.push(campusOne);
  }

  if (campusTwo !== "") {
    campuses.push(campusTwo);
  }

  if (campusThree !== "") {
    campuses.push(campusThree);
  }

  json.courseCampuses = campuses.join(", ");

  var jsonObj = new org.json.JSONObject(list);
  document.write(jsonObj.toString() + ",");
} catch (err) {
  document.write(err);
}

/*    VIDEO FULL WIDTH WITH TEXT - RIGHT   */
try {
  //Defining main functions
  function processTags(t4Tag) {
    myContent = content || null;
    return String(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, myContent, language, isPreview, t4Tag));
  }
  //get Video ID
  var videoID = "";
  var youTubeURL = processTags('<t4 type="content" name="YouTube Embed URL" output="normal" modifiers="striptags,htmlentities" />');
  var vimeoURL = processTags('<t4 type="content" name="Vimeo Embed URL" output="normal" modifiers="striptags,htmlentities" />');
  var mp4URL = processTags('<t4 type="content" name="MP4 Video" output="normal" formatter="path/*" cdn="true" />');
  if (youTubeURL != "") {
    if (youTubeURL.indexOf("/embed/") != -1) {
      var youTubeURLSplit = youTubeURL.split("/embed/");
      var videoID = youTubeURLSplit[1];
    } else if (youTubeURL.indexOf("watch?v=") != -1) {
      var youTubeURLSplit = youTubeURL.split("watch?v=");
      var videoID = youTubeURLSplit[1];
    }
  }
  if (vimeoURL != "") {
    if (vimeoURL.indexOf("https://vimeo.com/") != -1) {
      var vimeoURLSplit = vimeoURL.split(".com/");
      var videoID = vimeoURLSplit[1];
    } else if (vimeoURL.indexOf("https://player.vimeo.com/") != -1) {
      var vimeoURLSplit = vimeoURL.split(".com/video/");
      var videoID = vimeoURLSplit[1];
    }
  }
  //Build Content type
  var vertDivider = processTags('<t4 type="content" name="Top / Bottom Spacing" output="normal" display_field="value" />');
  var bgColor = processTags('<t4 type="content" name="Background Color" output="normal" display_field="value" />');
  var selectImage = processTags('<t4 type="content" name="Select image" output="normal" formatter="path/*" cdn="true" pxl-filter-id="6" />');
  var vidHeading = processTags('<t4 type="content" name="Heading" output="normal" modifiers="striptags,htmlentities" />');
  var vidDesc = processTags('<t4 type="content" name="Description" output="normal" modifiers="striptags,htmlentities" />');
  var linkText = processTags('<t4 type="content" name="CTA Link Text" output="normal" modifiers="striptags,htmlentities" />');
  var linkInt = processTags('<t4 type="content" name="CTA link (internal)" output="linkurl" modifiers="nav_sections" />');
  var linkExt = processTags('<t4 type="content" name="CTA link (external)" output="normal" modifiers="striptags,htmlentities" />');
  var category = processTags('<t4 type="content" name="Category" output="selective-output" modifiers="striptags,htmlentities" format="$value" />');
  var svgLink = processTags('<t4 type="media" formatter="path/*" id="10757" />');
  document.writeln('<section class="video-panel ' + vertDivider + '">');
  document.writeln('<div class="video-panel__wrapper right-block-left-video">');
  if (youTubeURL != "") {
    document.writeln('<div class="video-panel__video video-panel__video--youtube">');
    document.writeln(
      '<iframe title="' +
        vidHeading +
        '" width="1920" height="1080" src="https://www.youtube.com/embed/' +
        videoID +
        '" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    );
    document.writeln("</div>");
  } else if (vimeoURL != "") {
    document.writeln('<div class="video-panel__video video-panel__video--vimeo">');
    document.writeln('<iframe title="' + vidHeading + '" src="https://player.vimeo.com/video/' + videoID + '" allowfullscreen></iframe>');
    document.writeln("</div>");
  } else if (mp4URL != "") {
    document.writeln('<div class="video-panel__video video-panel__video--mp4">');
    document.writeln('<video controls poster="' + selectImage + '" class="video">');
    document.writeln('<source src="' + mp4URL + '" type="video/mp4" />');
    document.writeln("</video>");
    document.writeln("</div>");
  }
  var imagePresent = "";
  if (selectImage != "") {
    imagePresent = 'style="background-image: url(' + selectImage + ');"';
  }
  if (linkInt != "") {
    document.writeln('<a href="' + linkInt + '" class="video-panel__block ' + bgColor + '" ' + imagePresent + ">");
  } else if (linkExt != "") {
    document.writeln('<a href="' + linkExt + '" target="_blank" class="video-panel__block ' + bgColor + '" ' + imagePresent + ">");
  } else {
    document.writeln('<div href="' + linkExt + '" class="video-panel__block ' + bgColor + '" ' + imagePresent + ">");
  }
  //   CATEGORY - START
  document.writeln('<span class="video-panel__block__category">' + category + "</span>");
  //   CATEGORY - END
  document.writeln('<h2 class="video-panel__block__title"><span>' + vidHeading + "</span></h2>");
  document.writeln('<div class="video-panel__block__content">');
  document.writeln("<p>" + vidDesc + "</p>");
  if (linkText != "") {
    document.writeln('<p class="video-panel__block__link">');
    document.writeln("<span>" + linkText + "</span>");
    document.writeln('<svg class="svg-md-24px" focusable="false" aria-hidden="true">');
    document.writeln('<use xlink:href="' + svgLink + '#ic_keyboard_arrow_right_24px"></use>');
    document.writeln("</svg>");
    document.writeln("</p>");
  }
  document.writeln("</div>");
  if (linkInt != "") {
    document.writeln("</a>");
  } else if (linkExt != "") {
    document.writeln("</a>");
  } else {
    document.writeln("</div>");
  }
  document.writeln("</div>");
  document.writeln("</section>");
} catch (err) {
  document.write(err);
}

try {
  importClass(com.terminalfour.publish.cache.PublishCache);
  importClass(com.terminalfour.publish.utils.BrokerUtils);
  var getElementName, layoutPrefix, tid, formatter, format, formatString, layout;
  var getElementName = "Location of content";
  var layoutPrefix = "text/layout-";
  if (typeof layoutPrefix === "undefined") {
    layoutPrefix = "";
  }
  var formatter =
    layoutPrefix +
    BrokerUtils.processT4Tags(
      dbStatement,
      publishCache,
      section,
      content,
      language,
      isPreview,
      "<" +
        't4 type="content" name="' +
        getElementName +
        '" output="normal" display_field="value" />'
    );
  tid = content.getContentTypeID();
  format = publishCache.getTemplateFormatting(dbStatement, tid, formatter);
  formatString = format.getFormatting();
  layout = BrokerUtils.processT4Tags(
    dbStatement,
    publishCache,
    section,
    content,
    language,
    isPreview,
    formatString
  );
  document.write(layout);
} catch (err) {
  document.write(err);
}

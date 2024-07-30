/** 
 * This JS code for the T4 content type: RSS Events
 * Helps change the heading either above, left of the listing, 
 * or does not have a header at all. 
 */ 
try {
  importClass(com.terminalfour.publish.cache.PublishCache);
  importClass(com.terminalfour.publish.utils.BrokerUtils);
  let getElementName = "Type of listing";
  let layoutPrefix = "text/layout-";
  let formatter =
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
  let tid = content.getContentTypeID();
  let format = publishCache.getTemplateFormatting(dbStatement, tid, formatter);
  let formatString = format.getFormatting();
  
  let layout = BrokerUtils.processT4Tags(
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

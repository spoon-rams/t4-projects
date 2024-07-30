try {
  var deMgr = com.terminalfour.spring.ApplicationContextProvider.getBean(
    com.terminalfour.directedit.IDirectEditHelper
  );
  var isDirectEdit = deMgr.isCurrentRequestDirectEdit(); //true only in Direct Edit
  importPackage(com.terminalfour.content);
  importPackage(com.terminalfour.sitemanager);
  importPackage(com.terminalfour.sitemanager.cache);
  importPackage(com.terminalfour.sitemanager.cache.utils);
  importClass(com.terminalfour.spring.ApplicationContextProvider);
  importClass(com.terminalfour.publish.utils.BrokerUtils);
  var tid,
    sid,
    mode,
    contentManager,
    formatter,
    first,
    last,
    format,
    formatString,
    sectionContent,
    sectionMetaDescriptionId;
  tid = content.getContentTypeID();
  sid = section.getID();
  mode = isPreview ? CachedContent.CURRENT_IF_NO_DRAFT : CachedContent.APPROVED;

  contentManager = ApplicationContextProvider.getBean(
    com.terminalfour.content.IContentManager
  );
  sectionContent = CSHelper.extractCachedContent(
    CSHelper.removeSpecialContent(
      section.getContent(publishCache.getChannel(), language, mode, false)
    )
  );
  formatter = "text/after";
  first = false;
  last = false;
  for (var i = 0; i < sectionContent.length; i++) {
    if (content.getID() == sectionContent[i].getID()) {
      if (i === 0) {
        first = true;
      } else if (
        tid != contentManager.getContentType(sectionContent[i - 1].getID())
      ) {
        first = true;
      } else {
        first = false;
      }
      if (i === sectionContent.length - 1) {
        last = true;
      } else if (
        tid != contentManager.getContentType(sectionContent[i + 1].getID())
      ) {
        last = true;
      } else {
        last = false;
      }
    }
  } //end for loop

  if (first || isDirectEdit) {
    formatter = "text/before";
    format = publishCache.getTemplateFormatting(dbStatement, tid, formatter);
    formatString = format.getFormatting();
    document.write(
      BrokerUtils.processT4Tags(
        dbStatement,
        publishCache,
        section,
        content,
        language,
        isPreview,
        formatString
      )
    );
  }
  formatter = "text/middle";
  format = publishCache.getTemplateFormatting(dbStatement, tid, formatter);
  formatString = format.getFormatting();
  document.write(
    BrokerUtils.processT4Tags(
      dbStatement,
      publishCache,
      section,
      content,
      language,
      isPreview,
      formatString
    )
  );
  if (last || isDirectEdit) {
    formatter = "text/after";
    format = publishCache.getTemplateFormatting(dbStatement, tid, formatter);
    formatString = format.getFormatting();
    document.write(
      BrokerUtils.processT4Tags(
        dbStatement,
        publishCache,
        section,
        content,
        language,
        isPreview,
        formatString
      )
    );
  }
} catch (err) {
  document.write(err);
}

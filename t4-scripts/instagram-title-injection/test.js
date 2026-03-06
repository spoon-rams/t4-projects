document.addEventListener("DOMContentLoaded", () => {
  const embedTitles = {
    "flickr-embed-frame": "Flickr image or video",
    "instagram-media": "Instagram embed",
    "tiktok-embed": "TikTok video",
    "twitter-tweet": "X (Twitter) embed",
    facebook: "Facebook embed",
  };

  const getTitleForIframe = (iframe, count) => {
    const classAttr = iframe.getAttribute("class") || "";
    const src = iframe.src || "";

    // ---- FIRST: check by CLASS (this is what Flickr will use) ----
    for (const key in embedTitles) {
      if (classAttr.includes(key)) {
        return `${embedTitles[key]} ${count}`;
      }
    }

    // ---- SECOND: check by SRC (for Instagram, TikTok, YouTube, etc.) ----
    if (src.includes("instagram.com")) return `Instagram embed ${count}`;
    if (src.includes("tiktok.com")) return `TikTok video ${count}`;
    if (src.includes("youtube.com") || src.includes("youtu.be")) return `YouTube video ${count}`;
    if (src.includes("facebook.com")) return `Facebook embed ${count}`;
    if (src.includes("twitter.com") || src.includes("x.com")) return `X (Twitter) embed ${count}`;

    // ---- FINAL FALLBACK ----
    return `Embedded social media content ${count}`;
  };

  const applyTitles = () => {
    const iframes = document.querySelectorAll("iframe");
    let embedCount = 0;

    iframes.forEach((iframe) => {
      // Skip if already processed
      if (iframe.dataset.titled === "true") return;

      embedCount++;

      const title = getTitleForIframe(iframe, embedCount);
      iframe.setAttribute("title", title);
      iframe.dataset.titled = "true";
      console.log("Titled:", title, iframe);

      // 🔹 SPECIAL FIX FOR FLICKR:
      // If it's a Flickr iframe, make sure we keep watching it in case it changes
      if (iframe.className?.includes("flickr-embed-frame")) {
        iframe.addEventListener("load", () => {
          console.log("Flickr iframe finished loading:", iframe);
        });
      }
    });
  };

  // Run once in case some iframes already exist
  applyTitles();

  // Watch for new embeds being injected later
  const observer = new MutationObserver(applyTitles);

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
});

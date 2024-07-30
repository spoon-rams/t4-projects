
/**
 * The code below stops the background scroll at the
 * screen view port of 991px, and it suited for mobile view.
 * It's currently being used in the Program Search content type
*/

function stopBackgroundScroll() {
  const windowWidth = window.innerWidth;
  const overlay = document.getElementById("modal");
  const html = document.querySelector("html");
  const config = { attributes: true, attributeFilter: ["class"] };

  // Create a new Mutation Observer
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        // Class attribute has changed on the observed element
        const currentClasses = overlay.className;
        if (currentClasses.includes("is-blacked-out") && windowWidth < 991) {
          html.style.overflow = "hidden";
        } else {
          html.style.overflow = "visible";
        }
      }
    }
  });
  // Start observing the target element
  observer.observe(overlay, config);
}

window.addEventListener("resize", stopBackgroundScroll);
document.addEventListener("DOMContentLoaded", stopBackgroundScroll);

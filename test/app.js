console.log("CONNECTED!");

document.addEventListener("DOMContentLoaded", function () {
  const mainNav = document.getElementById("main-nav");
  const fillStart = 0; // Scroll position where the fill starts (e.g., at the very top)
  const fillEnd = 200; // Scroll position where the fill is complete (e.g., 200px down)

  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;

    // Calculate the progress of the scroll within the fill range
    let progress = (scrollY - fillStart) / (fillEnd - fillStart);

    // Clamp the progress between 0 and 1
    progress = Math.max(0, Math.min(1, progress));

    // Use the progress to set the opacity of the background color
    // For a dark navigation bar (#333), the rgba would be rgba(51, 51, 51, opacity)
    // You can change the base color (51, 51, 51) to any RGB value you desire.
    mainNav.style.backgroundColor = `rgba(51, 51, 51, ${progress})`;

    // Optional: Change text color as well
    // If you want text to change color, you'd calculate a color blend here
    // or apply a class when opacity reaches a certain threshold.
    // For simplicity, we'll assume text remains white for a dark nav bar.
  });
});

document.addEventListener("DOMContentLoaded", () => {
  function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.querySelector(".img-magnifier-container img");

    /* Create magnifier glass: */
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");

    /* Insert magnifier glass: */
    img.parentElement.insertBefore(glass, img);

    /* Set background properties for the magnifier glass: */
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = img.width * zoom + "px " + img.height * zoom + "px";
    bw = 2;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    /* Execute a function when someone moves the magnifier glass over the image: */
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);

    function moveMagnifier(e) {
      console.log(zoom)
      var pos, x, y;
      /* Prevent any other actions that may occur when moving over the image */
      e.preventDefault();
      /* Get the cursor's x and y positions: */
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /* Prevent the magnifier glass from being positioned outside the image: */
      if (x > img.width - w / zoom) {
        x = img.width - w / zoom;
      }
      if (x < w / zoom) {
        x = w / zoom;
      }
      if (y > img.height - h / zoom) {
        y = img.height - h / zoom;
      }
      if (y < h / zoom) {
        y = h / zoom;
      }
      /* Set the position of the magnifier glass: */
      glass.style.left = x - w + "px";
      glass.style.top = y - h + "px";
      /* Display what the magnifier glass "sees": */
      glass.style.backgroundPosition = "-" + (x * zoom - w + bw) + "px -" + (y * zoom - h + bw) + "px";
    }

    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      /* Get the x and y positions of the image: */
      a = img.getBoundingClientRect();
      /* Calculate the cursor's x and y coordinates, relative to the image: */
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /* Consider any page scrolling: */
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }
  magnify("myimage", 2);
});

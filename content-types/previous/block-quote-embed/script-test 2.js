console.log("CONNECTED TO TEST SCRIPT!");

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".block-quote-embed iframe");
  console.log(slides[0]);
  slides[0].addEventListener("click", (e) => {
    console.log(e.target.closest(".slide iframe"));
  });
});

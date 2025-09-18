const carousel = document.getElementById("carousel");
const nextBtn = document.getElementById("next");

function nextCard() {
  const first = carousel.firstElementChild;
  if (!first) return;

  // Animate the first card out
  first.style.transform = "translateX(120%) rotate(10deg)";
  first.style.opacity = 0;

  // After animation, put it at the end and reset
  setTimeout(() => {
    first.style.transition = "none"; // disable transition
    first.style.transform = "";
    first.style.opacity = "";
    carousel.appendChild(first); // move card to end

    // force reflow to apply reset before re-enabling transition
    void first.offsetWidth;
    first.style.transition = "";
  }, 600);
}

nextBtn.addEventListener("click", nextCard);

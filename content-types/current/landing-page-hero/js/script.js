const orb = document.querySelector(".orb");
const heroScroll = document.querySelector("#heroScroll");
const heroBg = document.querySelector("#heroBg");
const heroCopy = document.querySelector("#heroCopy");

const nextSections = document.querySelectorAll(".next-section");

let mouseX = 0;
let mouseY = 0;
let ticking = false;



function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateScrollParallax() {
  const scrollY = window.scrollY;
  const heroScrollTop = heroScroll.offsetTop;
  const heroScrollDistance = heroScroll.offsetHeight - window.innerHeight;

  const progress = clamp((scrollY - heroScrollTop) / heroScrollDistance,0,1,);

  heroBg.style.transform = `
        translateY(${progress * 140}px)
        scale(${1.08 + progress * 0.18})
      `;

  heroCopy.style.transform = `
        translateY(${progress * -130}px)
        scale(${1 - progress * 0.1})
      `;

  heroCopy.style.opacity = clamp(1 - progress * 1.45, 0, 1);
  heroCopy.style.filter = `blur(${progress * 10}px)`;


  nextSections.forEach((section) => {
    section.style.transform = `
          translateY(${(1 - progress) * 100}vh)
        `;

    if (progress > 0.45) {
      section.classList.add("in-view");
    } else {
      section.classList.remove("in-view");
    }
  });

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollParallax);
    ticking = true;
  }
});

window.addEventListener("resize", updateScrollParallax);
updateScrollParallax();

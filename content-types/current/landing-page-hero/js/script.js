const orb = document.querySelector(".orb");
const heroScroll = document.querySelector(".hero-scroll");
const heroBg = document.querySelector(".hero-bg");
const heroCopy = document.querySelector(".hero-copy");

let mouseX = 0;
let mouseY = 0;
let ticking = false;


function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateScrollParallax() {
  const scrollY = window.scrollY;
  const heroScrollTop = heroScroll.offsetTop;
  const heroScrollDistance = Math.max(heroScroll.offsetHeight - window.innerHeight, 1);

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

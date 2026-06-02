const orb = document.querySelector(".orb");
const heroScroll = document.querySelector("#heroScroll");
const heroBg = document.querySelector("#heroBg");
const heroCopy = document.querySelector("#heroCopy");
const panel = document.querySelector("#heroPanel");
const seal = document.querySelector("#sealShape");
const cards = document.querySelectorAll(".stat-card");
const nextSection = document.querySelector("#nextSection");

let mouseX = 0;
let mouseY = 0;
let ticking = false;

cards.forEach((card) => {
  card.style.transform = card.dataset.base;
});

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  orb.style.left = mouseX + "px";
  orb.style.top = mouseY + "px";
  updateMouseParallax();
});

function updateMouseParallax() {
  const rect = panel.getBoundingClientRect();
  if (!rect.width || !rect.height) return;

  const x = mouseX - rect.left;
  const y = mouseY - rect.top;
  const moveX = (x / rect.width - 0.5) * 12;
  const moveY = (y / rect.height - 0.5) * 12;

  cards.forEach((card, index) => {
    const depth = index + 1;

    card.style.transform = `
          ${card.dataset.base}
          translate3d(${moveX * depth}px, ${moveY * depth}px, 0)
        `;
  });
}

panel.addEventListener("mouseleave", () => {
  cards.forEach((card) => {
    card.style.transform = card.dataset.base;
  });
});

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

  panel.style.transform = `
        translateY(${progress * -190}px)
        scale(${1 + progress * 0.1})
      `;

  panel.style.opacity = clamp(1 - progress * 1.6, 0, 1);

  seal.style.transform = `
        translateY(${progress * -240}px)
        rotate(${progress * 120}deg)
        scale(${1 + progress * 0.16})
      `;

  nextSection.style.transform = `
        translateY(${(1 - progress) * 100}vh)
      `;

  if (progress > 0.45) {
    nextSection.classList.add("in-view");
  } else {
    nextSection.classList.remove("in-view");
  }

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

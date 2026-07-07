const accordions = document.querySelectorAll(".accordion");
const submenuToggles = document.querySelectorAll(".submenu-toggle");
const navLinks = document.querySelectorAll(".submenu a");
const sections = document.querySelectorAll(".content section");
const content = document.querySelector(".content");

const openParentsForLink = (link) => {
  const navItem = link.closest(".nav-item");
  const submenuItem = link.closest(".submenu-item");

  document.querySelectorAll(".nav-item.open").forEach((item) => {
    if (item !== navItem) {
      item.classList.remove("open");
    }
  });

  navItem?.classList.add("open");
  submenuItem?.classList.add("open");
};

const showSection = (sectionId, shouldUpdateHash = true) => {
  const targetSection = document.getElementById(sectionId);
  const activeLink = document.querySelector(`.submenu a[href="#${sectionId}"]`);

  if (!targetSection) {
    return;
  }

  sections.forEach((section) => {
    section.classList.toggle("is-hidden", section !== targetSection);
  });

  navLinks.forEach((item) => item.classList.remove("active"));

  if (activeLink) {
    activeLink.classList.add("active");
    openParentsForLink(activeLink);
  }

  const contentOverflow = content ? getComputedStyle(content).overflowY : "";

  if (content && contentOverflow !== "visible") {
    content.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (shouldUpdateHash) {
    history.pushState(null, "", `#${sectionId}`);
  }
};

accordions.forEach((button) => {
  button.addEventListener("click", () => {
    const navItem = button.parentElement;
    if (navItem.classList.contains("open")) {
      navItem.classList.remove("open");
    } else {
      const openItem = document.querySelector(".nav-item.open");
      if (openItem) {
        openItem.classList.remove("open");
      }
      navItem.classList.add("open");
    }
  });
});

submenuToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const submenuItem = button.parentElement;
    submenuItem.classList.toggle("open");
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showSection(link.hash.slice(1));
  });
});

window.addEventListener("popstate", () => {
  const sectionId = window.location.hash.slice(1) || "overview";
  showSection(sectionId, false);
});

const hashSectionId = window.location.hash.slice(1);
const initialSectionId = document.getElementById(hashSectionId) ? hashSectionId : "overview";
showSection(initialSectionId, false);

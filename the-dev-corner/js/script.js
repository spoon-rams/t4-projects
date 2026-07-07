const accordions = document.querySelectorAll(".accordion");
const submenuToggles = document.querySelectorAll(".submenu-toggle");
const navLinks = document.querySelectorAll(".submenu a");
const sections = document.querySelectorAll(".content section");
const content = document.querySelector(".content");

const resetActiveStates = () => {
  navLinks.forEach((item) => item.classList.remove("active"));
  submenuToggles.forEach((item) => item.classList.remove("active"));
  accordions.forEach((item) => item.classList.remove("active"));
};

const getSectionIdsFromLinks = (links) =>
  Array.from(links)
    .map((link) => link.hash.slice(1))
    .filter((sectionId) => document.getElementById(sectionId));

const getSectionIdsForLink = (link) => {
  const submenuItem = link.closest(".submenu-item");
  const linkGroup = submenuItem?.querySelectorAll(".subsubmenu a");

  if (linkGroup?.length) {
    return getSectionIdsFromLinks(linkGroup);
  }

  return getSectionIdsFromLinks(link.closest(".nav-item")?.querySelectorAll(".submenu a") || []);
};

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

const scrollToSection = (section) => {
  const contentOverflow = content ? getComputedStyle(content).overflowY : "";

  if (content && contentOverflow !== "visible") {
    content.scrollTo({ top: section.offsetTop, behavior: "smooth" });
  } else {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const showSections = (
  sectionIds,
  activeElement = null,
  scrollTargetId = sectionIds[0],
  shouldUpdateHash = true
) => {
  if (!sectionIds.length) {
    return;
  }

  sections.forEach((section) => {
    section.classList.toggle("is-hidden", !sectionIds.includes(section.id));
  });

  resetActiveStates();

  if (activeElement) {
    activeElement.classList.add("active");
  }

  const scrollTarget = document.getElementById(scrollTargetId);

  if (scrollTarget) {
    scrollToSection(scrollTarget);
  }

  if (shouldUpdateHash) {
    history.pushState(null, "", `#${scrollTargetId}`);
  }
};

const showSection = (sectionId, shouldUpdateHash = true) => {
  const targetSection = document.getElementById(sectionId);
  const activeLink = document.querySelector(`.submenu a[href="#${sectionId}"]`);

  if (!targetSection) {
    return;
  }

  const sectionIds = activeLink ? getSectionIdsForLink(activeLink) : [sectionId];
  showSections(sectionIds, activeLink, sectionId, shouldUpdateHash);

  if (activeLink) {
    openParentsForLink(activeLink);
  }
};

accordions.forEach((button) => {
  button.addEventListener("click", () => {
    const navItem = button.parentElement;
    const openItem = document.querySelector(".nav-item.open");
    const sectionIds = getSectionIdsFromLinks(navItem.querySelectorAll(".submenu a"));

    if (openItem && openItem !== navItem) {
      openItem.classList.remove("open");
    }

    navItem.classList.add("open");
    showSections(sectionIds, button);
  });
});

submenuToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const submenuItem = button.parentElement;
    const sectionIds = getSectionIdsFromLinks(submenuItem.querySelectorAll(".subsubmenu a"));

    submenuItem.classList.add("open");
    showSections(sectionIds, button);
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

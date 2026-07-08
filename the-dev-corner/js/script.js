const accordions = document.querySelectorAll(".accordion");
const submenuToggles = document.querySelectorAll(".submenu-toggle");
const navLinks = document.querySelectorAll(".submenu a");
const sections = document.querySelectorAll(".content section");
const content = document.querySelector(".content");

// Clears the highlighted state from every menu button and link.
const resetActiveStates = () => {
  navLinks.forEach((item) => item.classList.remove("active"));
  submenuToggles.forEach((item) => item.classList.remove("active"));
  accordions.forEach((item) => item.classList.remove("active"));
};

// Finds the section that should be visible for a link target.
const getVisibleSectionId = (sectionId) => {
  const target = document.getElementById(sectionId);
  return target?.closest("section")?.id;
};

// Turns a group of menu links into matching visible section IDs.
const getSectionIdsFromLinks = (links) =>
  [...new Set(
    Array.from(links)
      .map((link) => getVisibleSectionId(link.hash.slice(1)))
      .filter(Boolean)
  )];

// Child links should keep the full top-level parent group visible.
const getSectionIdsForLink = (link) => {
  return getSectionIdsFromLinks(link.closest(".nav-item")?.querySelectorAll(".submenu a") || []);
};

// Opens the top-level parent menu, plus the submenu that contains the active link.
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

// Scrolls inside the content column on desktop, or the page itself on mobile.
const scrollToSection = (section) => {
  const contentOverflow = content ? getComputedStyle(content).overflowY : "";

  if (content && contentOverflow !== "visible") {
    content.scrollTo({ top: section.offsetTop, behavior: "smooth" });
  } else {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Shows only the selected group of sections and scrolls to the requested section.
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

// Shows the active link's full parent group, then scrolls to that specific link's section.
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

// Top-level parent buttons show every section listed inside that parent.
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

// Submenu buttons only expand or collapse their child links.
submenuToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const submenuItem = button.parentElement;
    submenuItem.classList.toggle("open");
  });
});

// Menu links keep their parent group visible, then scroll to their own section.
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showSection(link.hash.slice(1));
  });
});

// Supports the browser back and forward buttons when the URL hash changes.
window.addEventListener("popstate", () => {
  const sectionId = window.location.hash.slice(1) || "overview";
  showSection(sectionId, false);
});

// On first page load, show the section from the URL hash or default to Overview.
const hashSectionId = window.location.hash.slice(1);
const initialSectionId = document.getElementById(hashSectionId) ? hashSectionId : "overview";
showSection(initialSectionId, false);

const searchInput = document.getElementById("search-input"),
  categoryInput = document.getElementById("category-select"),
  resultsDiv = document.querySelector(".stories"),
  paginationDiv = document.querySelector(".pagination"),
  clearButton = document.querySelector(".clear-button button"),
  itemsPerPage = 9,
  categories = [{ name: "Please choose a category", value: "" }];
let currentPage = 1,
  filteredData = [],
  data = [<t4 type="navigation" name="Brand Stories Archive All - JSON" id="429" />],
  buttonElement = "",
  pageLink = null;
const displayResults = (e = 1) => {
    const t = 9 * (e - 1),
      a = t + 9,
      n = filteredData.slice(t, a),
      r = n
        .map((e) => {
          const { link: t, image: a, imageDesc: n, category: r, title: s } = e;
          return `\n            <div class="story col-lg-4">\n              <a href="${t}" class="story-link-wrapper">\n                <div class="story-image">\n                  <img src="${a}" alt="${n}">\n                </div>\n                <div class="story-text">\n                  <p class="category">\n                    <span>${r}</span>\n                  </p>\n                  <h2>${s}</h2>\n                </div>\n              </a>\n            </div>\n          `;
        })
        .join("");
    return 9 === n.length || (n.length < 9 && 0 !== n.length)
      ? ((resultsDiv.innerHTML = r), updatePagination(filteredData.length, e))
      : (updatePagination(filteredData.length, e),
        (resultsDiv.innerHTML = '<div class="row archive-list" style="padding-left: 15px;">\n                       <h3>No Search Results...</h3>\n                     </div>'));
  },
  updatePagination = (e, t) => {
    const a = Math.ceil(e / 9);
    if (a <= 1) return void (paginationDiv.innerHTML = "");
    let n = Math.max(t - Math.floor(2.5), 1),
      r = Math.min(n + 5 - 1, a);
    r - n < 4 && (n = Math.max(r - 5 + 1, 1)), (paginationDiv.innerHTML = "");
    const s = document.createElement("button");
    (s.innerText = "<<"),
      s.classList.add("first"),
      (s.disabled = 1 === t),
      1 === t && (s.style.display = "none"),
      s.addEventListener("click", (e) => (buttonElement.length > 0 && (buttonElement = ""), changeURL("set", "page", 1), scrollToTop(resultsDiv), displayResults(1))),
      paginationDiv.appendChild(s);
    const c = document.createElement("button");
    (c.innerText = "<"),
      c.classList.add("prev"),
      (c.disabled = 1 === t),
      1 === t && (c.style.display = "none"),
      buttonElement.includes("prev") && c.classList.add("active"),
      c.addEventListener("click", (e) => ((buttonElement = e.target.classList.value), scrollToTop(resultsDiv), changeURL("set", "page", t - 1), displayResults(t - 1))),
      paginationDiv.appendChild(c);
    for (let e = n; e <= r; e++) {
      const a = document.createElement("button");
      (a.innerText = e),
        a.classList.add("number"),
        e === t
          ? a.classList.add("active")
          : a.addEventListener("click", (t) => (buttonElement.length > 0 && (buttonElement = ""), scrollToTop(resultsDiv), changeURL("set", "page", e), displayResults(e))),
        paginationDiv.appendChild(a);
    }
    const l = document.createElement("button");
    (l.innerText = ">"),
      l.classList.add("next"),
      (l.disabled = t === a),
      t === a && (l.style.display = "none"),
      buttonElement.includes("next") && l.classList.add("active"),
      l.addEventListener("click", (e) => ((buttonElement = e.target.classList.value), scrollToTop(resultsDiv), changeURL("set", "page", t + 1), scrollToTop(resultsDiv), displayResults(t + 1))),
      paginationDiv.appendChild(l);
    const i = document.createElement("button");
    (i.innerText = ">>"),
      i.classList.add("last"),
      (i.disabled = t === a),
      t === a && (i.style.display = "none"),
      i.addEventListener("click", (e) => (buttonElement.length > 0 && (buttonElement = ""), scrollToTop(resultsDiv), changeURL("set", "page", a), displayResults(a))),
      paginationDiv.appendChild(i);
  },
  handlePaginationClick = (e) => {
    const { classList: t, dataset: a } = e.target,
      n = Math.ceil(filteredData.length / 9);
    t.contains("first")
      ? (currentPage = 1)
      : t.contains("prev") && currentPage > 1
      ? currentPage--
      : t.contains("next") && currentPage < n
      ? currentPage++
      : t.contains("last")
      ? (currentPage = n)
      : a.page && (currentPage = parseInt(a.page)),
      displayResults(currentPage);
  },
  keywordSearch = (e) => {
    if (!e) return;
    const t = new RegExp(e.trim(), "i");
    (filteredData = data.filter((e) => t.test(e.title))), pageLink || (currentPage = 1), displayResults(currentPage);
  },
  categorySearch = (e) => {
    e && ((filteredData = data.filter((t) => t.category.toLowerCase() === e.toLowerCase())), pageLink || (currentPage = 1), displayResults(currentPage));
  },
  scrollToTop = (e) => {
    setTimeout(() => window.scrollTo(0, e.scrollTop), 300);
  },
  changeURL = (e, t, a) => {
    const n = new URL(window.location);
    switch (e) {
      case "delete":
        return n.searchParams.delete(t), history.replaceState(null, "", n);
      case "set":
        return n.searchParams.set(t, a), history.replaceState(null, "", n);
      case "get":
        return n.searchParams.get(t);
      default:
        return history.replaceState(null, "", n);
    }
  },
  search = () => {
    const e = searchInput.value.trim(),
      t = categoryInput.value.trim(),
      a = changeURL("get", "page");
    let n = "",
      r = "";
    var s;
    e || (changeURL("delete", "search"), a && !pageLink && changeURL("delete", "page")),
      t || (changeURL("delete", "category"), a && !pageLink && changeURL("delete", "page")),
      e || t
        ? e && !t
          ? (a && !pageLink && changeURL("delete", "page"), changeURL("set", "search", e), (n = changeURL("get", "search")), keywordSearch(n))
          : !e && t
          ? (a && !pageLink && changeURL("delete", "page"),
            changeURL("set", "category", t),
            (r = changeURL("get", "category")),
            (s = r) && ((filteredData = data.filter((e) => e.category.toLowerCase() === s.toLowerCase())), pageLink || (currentPage = 1), displayResults(currentPage)))
          : e &&
            t &&
            (a && !pageLink && changeURL("delete", "page"),
            changeURL("set", "search", e),
            changeURL("set", "category", t),
            (n = changeURL("get", "search")),
            (r = changeURL("get", "category")),
            keywordSearch(n),
            (filteredData = filteredData.filter((e) => e.category.toLowerCase() === r.toLowerCase())))
        : (filteredData = data),
      displayResults(currentPage);
  };
function debounce(e, t) {
  let a;
  return function (...n) {
    clearTimeout(a), (a = setTimeout(() => e.apply(this, n), t));
  };
}
data.forEach((e) => {
  const { category: t } = e,
    a = t.toLowerCase();
  categories.some((e) => e.name === t) || categories.push({ name: t, value: a });
});
const sortedCategoriesList = categories.sort((e, t) => e.value.localeCompare(t.value)),
  categoriesList = sortedCategoriesList
    .map((e) => {
      const { value: t, name: a } = e;
      return `<option value="${t}">${a}</option>`;
    })
    .join("");
(categoryInput.innerHTML = categoriesList), document.addEventListener("DOMContentLoaded", () => displayResults(currentPage));
const debouncedSearch = debounce(search, 600),
  searchQuery = changeURL("get", "search"),
  categoryQuery = changeURL("get", "category"),
  page = changeURL("get", "page");
if (searchQuery || categoryQuery || page) {
  (searchInput.value = searchQuery || ""), (categoryInput.value = categoryQuery || ""), (currentPage = parseInt(page) || 1), (pageLink = !0), search();
  const e = document.querySelectorAll(".number"),
    t = document.querySelector(".next"),
    a = document.querySelector(".last"),
    n = document.querySelector(".prev"),
    r = document.querySelector(".first"),
    s = Math.ceil(filteredData.length / 9);
  e.forEach((e) => {
    if (e.innerText === currentPage && s === parseInt(currentPage)) e.classList.add("active"), (t.style.display = "none"), (a.style.display = "none");
    else if (e.innerText === currentPage && 1 === parseInt(currentPage)) e.classList.add("active"), (n.style.display = "none"), (r.style.display = "none");
    else {
      if (e.innerText !== currentPage) return;
      e.classList.add("active");
    }
  }),
    (pageLink = !1);
} else (filteredData = data), search();
searchInput.addEventListener("input", debounce(search, 600)),
  categoryInput.addEventListener("change", () => {
    categoryInput.value || searchInput.value || (searchInput.value = ""), search();
  }),
  clearButton.addEventListener("click", () =>
    searchInput.value || categoryInput.value
      ? ((searchInput.value = ""), (categoryInput.value = ""), changeURL("delete", "page"), (currentPage = 1), search(), clearButton.blur())
      : (changeURL("delete", "page"), (currentPage = 1), search(), clearButton.blur()),
  );

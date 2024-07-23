// Select DOM elements
const searchInput = document.getElementById("search-input");
const categoryInput = document.getElementById("category-select");
const resultsDiv = document.querySelector(".stories");
const paginationDiv = document.querySelector(".pagination");

const itemsPerPage = 5;
const categories = [{ name: "Please choose a category", value: "" }];
let currentPage = 1;
let filteredData = [];
let data = [];

// Display results function
const displayResults = (page = 1, button) => {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const results = filteredData.slice(start, end);

  if (results.length) {
    resultsDiv.innerHTML = results
      .map((item) => {
        const { link, image, imageDesc, category, title } = item;
        return `
          <div class="row archive-list">
            <div class="col-md-3">
              <a href="${link}">
                <img src="${image}" alt="${imageDesc}" style="width: 100%; height: auto;">
              </a>
            </div>
            <div class="col-md-9">
              <p class="category"><span>${category}</span></p>
              <a href="${link}"><h2>${title}</h2></a>
            </div>
          </div>`;
      })
      .join("");
    updatePagination(filteredData.length, page, button);
  } else {
    resultsDiv.innerHTML = `<div class="row archive-list" style="padding-left: 15px;">
                              <h3>No Search Results...</h3>
                            </div>`;
    updatePagination(filteredData.length, page, button);
  }
};

// Displays the pagination
const updatePagination = (totalItems, currentPage, button) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxVisiblePages = 5; // Maximum number of visible pages

  if (totalPages <= 1) {
    paginationDiv.innerHTML = "";
    return;
  }

  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  paginationDiv.innerHTML = "";

  // First button
  const first = document.createElement("button");
  first.innerText = "<<";
  first.classList.add("first");
  first.disabled = currentPage === 1;
  first.classList.add("disabled");
  first.addEventListener("click", () => displayResults(1));
  paginationDiv.appendChild(first);

  // Previous button
  const prev = document.createElement("button");
  prev.innerText = "<";
  prev.classList.add("prev");
  prev.disabled = currentPage === 1;
  prev.addEventListener("click", () => displayResults(currentPage - 1));
  paginationDiv.appendChild(prev);

  // Page numbers
  for (let i = startPage; i <= endPage; i++) {
    const page = document.createElement("button");
    page.innerText = i;
    page.classList.add("number");
    if (i === currentPage) {
      page.classList.add("active");
    } else {
      page.addEventListener("click", () => displayResults(i));
    }
    paginationDiv.appendChild(page);
  }

  // Next button
  const next = document.createElement("button");
  next.innerText = ">";
  next.classList.add("next");
  next.disabled = currentPage === totalPages;
  next.addEventListener("click", () => displayResults(currentPage + 1));
  paginationDiv.appendChild(next);

  // Last button
  const last = document.createElement("button");
  last.innerText = ">>";
  last.classList.add("last");
  last.disabled = currentPage === totalPages;
  last.addEventListener("click", () => displayResults(totalPages));
  paginationDiv.appendChild(last);
};

// Handles the pagination selection
const handlePaginationClick = (event) => {
  const { classList, dataset } = event.target;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (classList.contains("first")) currentPage = 1;
  else if (classList.contains("prev") && currentPage > 1) currentPage--;
  else if (classList.contains("next") && currentPage < totalPages) currentPage++;
  else if (classList.contains("last")) currentPage = totalPages;
  else if (dataset.page) currentPage = parseInt(dataset.page);

  displayResults(currentPage, event.target);
};

// Keyword Search - Title
const keywordSearch = (query) => {
  const regex = new RegExp(query.trim(), "i");
  filteredData = data.filter((item) => regex.test(item.title));
  currentPage = 1;
  displayResults(currentPage);
};

// Category Search Selection
const categorySearch = (query) => {
  filteredData = data.filter((item) => item.category.toLowerCase() === query.toLowerCase());
  currentPage = 1;
  displayResults(currentPage);
};

// Search Action Type
const search = () => {
  const query = searchInput.value.trim();
  const category = categoryInput.value;

  if (!query && !category) {
    filteredData = data;
  } else if (query && !category) {
    keywordSearch(query);
  } else if (!query && category) {
    categorySearch(category);
  } else if (query && category) {
    keywordSearch(query);
    filteredData = filteredData.filter((item) => item.category.toLowerCase() === category.toLowerCase());
  }

  displayResults(currentPage);
};

// Search Debouncing
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// Fetch data and initialize
fetch("./data.json")
  .then((res) => res.json())
  .then((fetchedData) => {
    data = fetchedData;
    filteredData = data;
    displayResults(currentPage);

    data.forEach((item) => {
      // Check if the category already exists in the categories array
      const isDuplicate = categories.some((cat) => cat.name === item.category);

      if (!isDuplicate) {
        const value = item.category.toLowerCase();
        const name = item.category;
        categories.push({ name, value });
      }
    });

    categoryInput.innerHTML = categories
      .map((item) => {
        const { value, name } = item;
        return `<option value="${value}">${name}</option>`;
      })
      .join("");

    document.addEventListener("DOMContentLoaded", () => displayResults(currentPage));
    const debouncedSearch = debounce(search, 600);
    searchInput.addEventListener("input", debouncedSearch);
    categoryInput.addEventListener("change", () => {
      if (!categoryInput.value) {
        searchInput.value = "";
      }
      search();
    });
  });

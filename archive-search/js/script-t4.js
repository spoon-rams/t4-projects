/* Search as Columns */

// Select DOM elements
const searchInput = document.getElementById("search-input");
const categoryInput = document.getElementById("category-select");
const resultsDiv = document.querySelector(".stories");
const paginationDiv = document.querySelector(".pagination");
const clearButton = document.querySelector(".clear-button button");

const itemsPerPage = 9;
const categories = [{ name: "Please choose a category", value: "" }];
let currentPage = 1;
let filteredData = [];
let data = [];
let buttonElement = "";

// Display results function
const displayResults = (page = 1) => {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const results = filteredData.slice(start, end);
  const noResults = `<div class="row archive-list" style="padding-left: 15px;">
                       <h3>No Search Results...</h3>
                     </div>`;
  const renderElements = results
    .map((item) => {
      const { link, image, imageDesc, category, title } = item;
      return `
            <div class="story col-lg-4">
              <a href="${link}" class="story-link-wrapper">
                <div class="story-image">
                  <img src="${image}" alt="${imageDesc}">
                </div>
                <div class="story-text">
                  <p class="category">
                    <span>${category}</span>
                  </p>
                  <h2>${title}</h2>
                </div>
              </a>
            </div>
          `;
    })
    .join("");

  if (results.length === 9) {
    resultsDiv.classList.remove("temp-height");
    resultsDiv.innerHTML = renderElements;
    return updatePagination(filteredData.length, page);
  } else if (results.length < 9 && results.length !== 0) {
    // resultsDiv.classList.add("temp-height");
    resultsDiv.innerHTML = renderElements;
    return updatePagination(filteredData.length, page);
  }

  updatePagination(filteredData.length, page);
  resultsDiv.classList.add("temp-height");
  return (resultsDiv.innerHTML = noResults);
};

// Displays the pagination
const updatePagination = (totalItems, currentPage) => {
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
  if (currentPage === 1) first.style.display = "none";
  first.addEventListener("click", (e) => {
    if (buttonElement.length > 0) {
      buttonElement = "";
    }
    return displayResults(1);
  });
  paginationDiv.appendChild(first);

  // Previous button
  const prev = document.createElement("button");
  prev.innerText = "<";
  prev.classList.add("prev");
  prev.disabled = currentPage === 1;

  if (currentPage === 1) prev.style.display = "none";
  if (buttonElement.includes("prev")) prev.classList.add("active");

  prev.addEventListener("click", (e) => {
    buttonElement = e.target.classList.value;
    return displayResults(currentPage - 1);
  });
  paginationDiv.appendChild(prev);

  // Page numbers
  for (let i = startPage; i <= endPage; i++) {
    const page = document.createElement("button");
    page.innerText = i;
    page.classList.add("number");
    if (i === currentPage) {
      page.classList.add("active");
    } else {
      page.addEventListener("click", (e) => {
        if (buttonElement.length > 0) {
          buttonElement = "";
        }
        return displayResults(i);
      });
    }
    paginationDiv.appendChild(page);
  }

  // Next button
  const next = document.createElement("button");
  next.innerText = ">";
  next.classList.add("next");
  next.disabled = currentPage === totalPages;

  if (currentPage === totalPages) next.style.display = "none";
  if (buttonElement.includes("next")) next.classList.add("active");

  next.addEventListener("click", (e) => {
    buttonElement = e.target.classList.value;
    return displayResults(currentPage + 1);
  });
  paginationDiv.appendChild(next);

  // Last button
  const last = document.createElement("button");
  last.innerText = ">>";
  last.classList.add("last");
  last.disabled = currentPage === totalPages;
  if (currentPage === totalPages) last.style.display = "none";
  last.addEventListener("click", (e) => {
    if (buttonElement.length > 0) {
      buttonElement = "";
    }
    return displayResults(totalPages);
  });
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

  displayResults(currentPage);
};

// Keyword Search - Title
const keywordSearch = (query) => {
  if (!query) return;
  const regex = new RegExp(query.trim(), "i");
  filteredData = data.filter((item) => regex.test(item.title));
  currentPage = 1;
  displayResults(currentPage);
};

// Category Search Selection
const categorySearch = (query) => {
  if (!query) return;
  filteredData = data.filter((item) => item.category.toLowerCase() === query.toLowerCase());
  currentPage = 1;
  displayResults(currentPage);
};

const changeURL = (type, queryString, query) => {
  const url = new URL(window.location);
  switch (type) {
    case "delete":
      url.searchParams.delete(queryString);
      return history.replaceState(null, "", url);
    case "set":
      url.searchParams.set(queryString, query);
      return history.replaceState(null, "", url);
    case "get":
      return url.searchParams.get(queryString);
    default:
      return history.replaceState(null, "", url);
  }
};

// Search Action Type
const search = () => {
  const search = searchInput.value.trim();
  const category = categoryInput.value.trim();

  let querySearch = "";
  let queryCategory = "";

  if (!search) {
    changeURL("delete", "search");
  }
  if (!category) {
    changeURL("delete", "category");
  }

  if (!search && !category) {
    filteredData = data;
  } else if (search && !category) {
    changeURL("set", "search", search);
    querySearch = changeURL("get", "search");
    keywordSearch(querySearch);
  } else if (!search && category) {
    changeURL("set", "category", category);
    queryCategory = changeURL("get", "category");
    categorySearch(queryCategory);
  } else if (search && category) {
    changeURL("set", "search", search);
    changeURL("set", "category", category);

    querySearch = changeURL("get", "search");
    queryCategory = changeURL("get", "category");

    keywordSearch(querySearch);
    filteredData = filteredData.filter((item) => item.category.toLowerCase() === queryCategory.toLowerCase());
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

filteredData = data;
displayResults(currentPage);

data.forEach((item) => {
  const { category } = item;
  const value = category.toLowerCase();

  // Check if the category already exists in the categories array
  const isDuplicate = categories.some((cat) => cat.name === category);

  if (!isDuplicate) {
    categories.push({ name: category, value });
  }
});

categoryInput.innerHTML = categories
  .map((item) => {
    return `<option value="${item.value}">${item.name}</option>`;
  })
  .join("");

document.addEventListener("DOMContentLoaded", () => displayResults(currentPage));
const debouncedSearch = debounce(search, 600);
const searchQuery = changeURL("get", "search");
const categoryQuery = changeURL("get", "category");

if (searchQuery || categoryQuery) {
  searchInput.value = searchQuery || "";
  categoryInput.value = categoryQuery || "";
  search();
}

searchInput.addEventListener("input", debouncedSearch);

categoryInput.addEventListener("change", () => {
  if (!categoryInput.value && !searchInput.value) {
    searchInput.value = "";
  }
  search();
});

clearButton.addEventListener("click", () => {
  if (!searchInput.value && !categoryInput.value) {
    return clearButton.blur();
  }
  searchInput.value = "";
  categoryInput.value = "";
  search();
  return clearButton.blur();
});

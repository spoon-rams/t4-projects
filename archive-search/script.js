// Select DOM elements
const searchInput = document.getElementById("search-input");
const categoryInput = document.getElementById("category-select");
const resultsDiv = document.querySelector(".fordham-stories-archives .stories");
const paginationDiv = document.querySelector(".pagination");

const itemsPerPage = 5;
const categories = [{ name: "Please chose a category", value: "" }];
let currentPage = 1;
let filteredData = [];
let data = [];

// Display results function
const displayResults = (page = 1) => {
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
       updatePagination(filteredData.length, page);
  } else {
    resultsDiv.innerHTML = "<h3>No Search Results...</h3>";
  }
};

// Displays the pagination
const updatePagination = (totalItems, currentPage) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) {
    paginationDiv.innerHTML = "";
    return;
  }

  paginationDiv.innerHTML = `
    <button class="first" ${currentPage === 1 ? "disabled" : ""}>&lt;&lt;</button>
    <button class="prev" ${currentPage === 1 ? "disabled" : ""}>&lt;</button>
    ${Array.from(
      { length: totalPages },
      (_, i) => `
      <button class="number ${i + 1 === currentPage ? "active" : ""}" data-page="${i + 1}">${i + 1}</button>
    `,
    ).join("")}
    <button class="next" ${currentPage === totalPages ? "disabled" : ""}>&gt;</button>
    <button class="last" ${currentPage === totalPages ? "disabled" : ""}>&gt;&gt;</button>
  `;

  paginationDiv.querySelectorAll("button").forEach((button) => button.addEventListener("click", handlePaginationClick));
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

const keywordSearch = (query) => {
  const regex = new RegExp(query.trim(), "i");
  filteredData = data.filter((item) => regex.test(item.title));
  currentPage = 1;
  displayResults(currentPage);
};

const categorySearch = (query) => {
  filteredData = data.filter((item) => item.category.toLowerCase() === query.toLowerCase());
  currentPage = 1;
  displayResults(currentPage);
};

const search = () => {
  const query = searchInput.value.trim();
  const category = categoryInput.value.trim();

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
    searchInput.addEventListener("input", debouncedSearch);
    categoryInput.addEventListener("change", () => {
      searchInput.value = "";
      search();
    });
  });

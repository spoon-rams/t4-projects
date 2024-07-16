// Select DOM elements
const searchInput = document.getElementById("search-input");
const categoryInput = document.getElementById("category-select");
const resultsDiv = document.querySelector(".fordham-stories-archives .stories");
const paginationDiv = document.querySelector(".pagination");

const itemsPerPage = 5;
const categories = [
  { name: "Please chose a category", value: "" },
  { name: "Arts and Creativity", value: "arts and creativity" },
  { name: "Research and Science", value: "research and science" },
  { name: "Campus Life", value: "campus life" },
  { name: "Business and Entrepreneurship", value: "business and entrepreneurship" },
  { name: "Theatre", value: "theatre" },
  { name: "Dance", value: "dance" },
  { name: "Culture", value: "culture" },
  { name: "Investing", value: "investing" },
  { name: "Big Deal", value: "big deal" },
  { name: "Alumni Advice", value: "alumni advice" },
  { name: "From India to NYC", value: "from india to nyc" },
  { name: "Student Research", value: "student research" },
  { name: "Summer Project", value: "summer project" },
  { name: "Majors", value: "majors" },
  { name: "Study Abroad", value: "study abroad" },
  { name: "Student Clubs", value: "student clubs" },
  { name: "First Year", value: "first year" },
  { name: "Commencement", value: "commencement" },
  { name: "Career Paths", value: "career paths" },
];
let currentPage = 1;
let filteredData = [];
let data = [];

/**
 * Create the category list by using the current JSON file's categories
 * Where any new category will show up and existing category for new articles
 * will not be used again
 */

categoryInput.innerHTML = categories
  .map((item) => {
    return `<option value="${item.value}">${item.name}</option>`;
  })
  .join("");

// Display results function
const displayResults = (page = 1) => {
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const results = filteredData.slice(start, end);

  resultsDiv.innerHTML = results.length
    ? results
        .map(
          (item) => `
  <div class="row archive-list">
      <div class="col-md-3">
          <a href="${item.link}">
              <img src="${item.image}" alt="Image" style="width: 100%; height: auto;" loading="lazy">
          </a>
      </div>
      <div class="col-md-9">
          <p class="category"><span>${item.category}</span></p>
          <a href="${item.link}"><h2>${item.title}</h2></a>
      </div>
  </div>
`,
        )
        .join("")
    : "<h3>No Search Results...</h3>";
  updatePagination(filteredData.length, page);
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

// Fetch data and initialize
fetch("./data.json")
  .then((res) => res.json())
  .then((fetchedData) => {
    data = fetchedData;
    filteredData = data;
    displayResults(currentPage);

    document.addEventListener("DOMContentLoaded", () => displayResults(currentPage));
    searchInput.addEventListener("input", () => {
      setTimeout(search, 1200);
    });
    categoryInput.addEventListener("change", () => {
      searchInput.value = "";
      search();
    });
  });

const searchInput = document.getElementById("search-input");
const categoryInput = document.getElementById("category-select");
const resultsDiv = document.querySelector(".fordham-stories-archives");
const paginationDiv = document.querySelector(".pagination");

fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const itemsPerPage = 5;
    let currentPage = 1;
    let filteredData = data;

    function displayResults(page = 1) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const results = filteredData.slice(start, end);

      if (results.length < 1) {
        resultsDiv.innerHTML = "<h3>No Search Results...</h3>";
        paginationDiv.innerHTML = "";
        return;
      }

      const html = results
        .map(
          (item) => `
                <div class="row archive-list">
                    <div class="col-md-3">
                        <a href="${item.link}">
                            <img src="${item.img}" alt="Image" style="width: 100%; height: auto;">
                        </a>
                    </div>
                    <div class="col-md-9">
                        <p class="category"><span>${item.category}</span></p>
                        <a href="${item.link}"><h3>${item.title}</h3></a>
                    </div>
                </div>
            `,
        )
        .join("");
      resultsDiv.innerHTML = html;

      updatePagination(filteredData.length, page);
    }

    function updatePagination(totalItems, currentPage) {
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      if (totalPages === 1) {
        paginationDiv.innerHTML = "";
        return;
      }

      let paginationHtml = "";

      paginationHtml += `<button class="first" ${currentPage === 1 ? "disabled" : ""}><<</button>`;
      paginationHtml += `<button class="prev" ${currentPage === 1 ? "disabled" : ""}><</button>`;

      for (let i = 1; i <= totalPages; i++) {
        paginationHtml += `<button class="${i === currentPage ? "active" : ""}" data-page="${i}">${i}</button>`;
      }

      paginationHtml += `<button class="next" ${currentPage === totalPages ? "disabled" : ""}>></button>`;
      paginationHtml += `<button class="last" ${currentPage === totalPages ? "disabled" : ""}>>></button>`;

      paginationDiv.innerHTML = paginationHtml;

      paginationDiv.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", function () {
          if (this.classList.contains("first")) {
            currentPage = 1;
          } else if (this.classList.contains("prev")) {
            if (currentPage > 1) currentPage--;
          } else if (this.classList.contains("next")) {
            if (currentPage < totalPages) currentPage++;
          } else if (this.classList.contains("last")) {
            currentPage = totalPages;
          } else {
            currentPage = parseInt(this.getAttribute("data-page"));
          }
          displayResults(currentPage);
        });
      });
    }

    function keywordSearch(query) {
      const trimmedQuery = query.trim();
      const regex = new RegExp(`${trimmedQuery}`, "i");
      console.log("FROM KEYWORD SEARCH FUNCTION: ", data);
      if (data && !categoryInput.value) {
        console.log("DATA");
        filteredData = data.filter((item) => regex.test(item.title));
        currentPage = 1;
        displayResults(currentPage);
      } else {
        console.log("FILTERDATA");
        filteredData = filteredData.filter((item) => regex.test(item.title));
        currentPage = 1;
        displayResults(currentPage);
      }
    }

    function categorySearch(query) {
      if (data) {
        filteredData = data.filter((item) => item.category.toLowerCase() === query);
        currentPage = 1;
        displayResults(currentPage);
      } else {
        console.log(filteredData);
        filteredData = filteredData.filter((item) => item.category.toLowerCase() === query);
        currentPage = 1;
        displayResults(currentPage);
      }
    }

    function search() {
      const category = categoryInput.value;
      const query = searchInput.value;

      if (!query || !category) {
        console.log("NO QUERY OR CATEGORY")
        filteredData = data;
        displayResults(currentPage);
      }

      if (query.trim().length > 0 && !category) {
        console.log("KEYWORD SEARCH");
        keywordSearch(query);
      }

      if (category.length > 0 && !query) {
        console.log("CATEGORY SEARCH");

        categorySearch(category);
      }

      if (query.length > 0 && category) {
        console.log("CATEGORY AND KEYWORD SEARCH");
        keywordSearch(query);
      }
    }
    document.addEventListener("DOMContentLoaded", displayResults(currentPage));
    searchInput.addEventListener("input", search);
    categoryInput.addEventListener("change", () => {
      if (searchInput.value) {
        searchInput.value = "";
      }
      return search();
    });

    // Initial display - Temporary
    // displayResults(currentPage);
  });

console.log("TEST SCRIPT CONNECTED!");
const input = document.querySelector("#search-input");
const category = document.querySelector("#category-select");
let newUrl = new URL(window.location);

input.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  newUrl.searchParams.set("search", query);
  // Use replaceState to update URL without adding history
  history.replaceState(null, "", newUrl);
  return;
});

category.addEventListener("change", () => {
  if (!category.value) {
    newUrl.searchParams.delete("category");
    history.replaceState(null, "", newUrl);
    return;
  }
  newUrl.searchParams.set("category", category.value);
  history.replaceState(null, "", newUrl);
  return;
});

document.addEventListener("DOMContentLoaded", () => {
  const cleanUrl = window.location.origin + window.location.pathname;
  // Update the URL without query parameters
  newUrl.searchParams.delete("search");
  newUrl.searchParams.delete("category");
  history.replaceState(null, "", cleanUrl);
  return;
});

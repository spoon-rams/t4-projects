/**
 * This script is for a temporary fix to move the pagination element
 * and all it's child elements to the parent node so that the pagination
 * doesn't align with the story cards.
*/

document.addEventListener("DOMContentLoaded", () => {
    const pagination = document.querySelector(".pagination");
    const row = document.querySelector(".fordham-stories-archive-all");

    if(!pagination) {
        return;
    }

    row.appendChild(pagination)
})
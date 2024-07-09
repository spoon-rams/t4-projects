const databaseButton = document.querySelector(".btn-primary.database");
const ejournalButton = document.querySelector(".btn-primary.e-journal");
const contentWrapper = document.querySelectorAll(".tabs__content-wrapper");

databaseButton.addEventListener("click", () => {
    console.log("DATABASE BUTTON CLICKED!")
})

 ejournalButton.addEventListener("click", () => {
    console.log("E-JOURNAL BUTTON CLICKED!")
 })


 contentWrapper.forEach((val, index) => {
    console.log(index);
    val.classList.forEach((val, index) => {
        console.log(val, index)
    })
    
 })

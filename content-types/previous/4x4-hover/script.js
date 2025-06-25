/********* TEMPORARY DEFAULT VALUE CREATOR FOR - INFOGRAPHIC BOX WITH HOVER EFFECTS *********/

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".two-by-two .info-box-button");

  if(buttons.length !== 0 && buttons !== null) {
    buttons.forEach(button => {
      if(button.innerText.length === 0) {
        button.innerText = "Learn More"
      } 
    })
  } else {
    return;
  }
});

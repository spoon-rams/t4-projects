// Temporary set default value for button text - Single
// const button = document.querySelector(".info-box-button");
// const isText = "<t4 type='content' name='Button Link Text (Optional)' output='normal' modifiers='striptags,htmlentities' />";

// if(button && isText.length === 0) {
// 	button.innerText = "Learn More"
// } else if(button && isText.length > 0) {
// 	button.innerText = isText;
// }

// Temporary set default value for button text - Multiple

// Testing on Prototype:
// const btn = document.querySelectorAll(".btn-primary");
// const isText = btn.innerText.length > 0;

// if (btn.length > 0) {
//   btn.forEach((val) => {
//     val.innerText = "Learn More";
//   });
// } else {
//   console.log("NO BUTTONS!");
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const sections = document.querySelectorAll(".two-by-two");

//   const defaultButtonText = (buttonsElement) => {
//     const buttons = document.querySelectorAll(buttonsElement);
//     const isText = "<t4 type='content' name='Button Link Text (Optional)' output='normal' modifiers='striptags,htmlentities' />";

//     if (buttons.length > 0) {
//       buttons.forEach((button) => {
//         if (isText.length === 0) {
//           button.innerText = "Learn More";
//         }
//         if (isText.length > 0) {
//           button.innerText = isText;
//         }
//       });
//     }
//   };

//   if (sections.length > 1) {
//     sections.forEach((section, index) => {
//       if (index !== 0) {
//         section.classList.add(`.duplicate-${index}`);
//         defaultButtonText(`.duplicate-${index} .btn`);
//       } else {
//         defaultButtonText(".two-by-two .btn");
//       }
//     });
//   } else {
//     defaultButtonText(".two-by-two .btn");
//   }
// });

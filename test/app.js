console.log("CONNECTED!")
const element = document.querySelector(".data-test");
const data = JSON.parse(element.dataset.testInfo);

console.log(data.data);
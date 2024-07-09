const anchor = document.querySelectorAll(".body-lead-font a");

anchor.forEach((sentence) => {
  const text = sentence.innerHTML;
  const toBold = ["Model A", "Model B", "Model C"];
  const regexPattern = new RegExp(toBold.join("|"), "gi");
  const newText = text.replace(regexPattern, (word) => {
    return `<strong class="text">${word}</strong>`;
  });
  sentence.innerHTML = newText;
});



function removeHeader() {
  const headerDiv = document.querySelector("#form_description div");
  if (headerDiv) {
    headerDiv.remove();
  } else {
    throw new Error("Element does not exist");
  }
}

window.addEventListener("load", removeHeader);

//querying the dom
const buttonElement = document.querySelector("button");
const closeButton = document.querySelector(".popup-close");
const popupContainer = document.querySelector(".popup-container");

//listen for events
buttonElement.addEventListener("click", () => {
  //show popup
  popupContainer.style.display = "block";
});

closeButton.addEventListener("click", () => {
  //hide popup
  popupContainer.style.display = "none";
});
popupContainer.addEventListener("click", () => {
  //hide popup
  popupContainer.style.display = "none";
});

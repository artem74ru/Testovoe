const button = document.querySelector("button.footer-top__button");
const modal = document.querySelector("div.modal-disable");
const close = document.querySelector("img.modal-close__img");

button.addEventListener("click", () => {
    modal.classList.add("modal-active");
    
});

window.addEventListener("click", function(event) {
  if (event.target == close) {
    modal.classList.remove("modal-active");
  }
});



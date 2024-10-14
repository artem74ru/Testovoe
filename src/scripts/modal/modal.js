const button = document.querySelector("button.footer-top__button");
const modal = document.querySelector("div.modal-disable");

button.addEventListener("click", () => {
    modal.classList.add("modal-active");
});

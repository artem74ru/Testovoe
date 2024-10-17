/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 877:
/***/ (() => {

var button = document.querySelector("button.footer-top__button");
var modal = document.querySelector("div.modal-disable");
var close = document.querySelector("img.modal-close__img");
button.addEventListener("click", function () {
  modal.classList.add("modal-active");
});
window.addEventListener("click", function (event) {
  if (event.target == close) {
    modal.classList.remove("modal-active");
  }
});

/***/ }),

/***/ 25:
/***/ (() => {

var form = document.querySelector("form.modal-form");
var name = form.querySelector("input.modal-form__input-name");
var email = form.querySelector("input.modal-form__input-email");
var message = form.querySelector("input.modal-form__input-message");
form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var username = name.value;
  var useremail = email.value;
  var usermessage = message.value;
  if (!username || !useremail || !usermessage) {
    alert("Пожалуйста, заполните все поля");
    return;
  }
  if (!isValidLogin(username)) {
    alert("Имя может содержать только буквы на латинице");
    return;
  }
  if (!isValiduseremail(useremail)) {
    alert("Неверный Email");
    return;
  }
  form.action = alert("Your message successfully sent");
  form.action = "https://rutube.ru/video/a2ed3c8c4bfdb5136178afadbf9867af";
  form.method = "GET";
  form.submit();
});
function isValidLogin(username) {
  var pattern = /^[a-zA-Z]+$/;
  return pattern.test(username);
}
function isValiduseremail(useremail) {
  var pattern = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
  return pattern.test(useremail);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/scripts/modal/modal.js
var modal = __webpack_require__(877);
// EXTERNAL MODULE: ./src/scripts/modal/validation.js
var validation = __webpack_require__(25);
;// ./src/scripts/index.js


;// ./src/index.js



})();

/******/ })()
;
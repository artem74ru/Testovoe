const form = document.querySelector("form.modal-form");
const name = form.querySelector("input.modal-form__input-name");
const email = form.querySelector("input.modal-form__input-email");
const message = form.querySelector("input.modal-form__input-message");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const username = name.value;
  const useremail = email.value;
  const usermessage = message.value;

  if (!username || !useremail || !usermessage) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  if (!isValidLogin(username)) {
    alert("Имя может содержать только буквы на латинице");
    return;
  }

  if (!isValiduseremail(useremail)) {
    alert(
      "Неверный Email"
    );
    return;
  }

  form.action = alert("Your message successfully sent");
  form.action = "https://rutube.ru/video/a2ed3c8c4bfdb5136178afadbf9867af";
  form.method = "GET";
  form.submit();
});

function isValidLogin(username) {
  const pattern = /^[a-zA-Z]+$/;
  return pattern.test(username);
}

function isValiduseremail(useremail) {
  const pattern =
    /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
  return pattern.test(useremail);
}

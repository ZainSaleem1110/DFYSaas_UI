const nameInput = document.getElementById("Name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const PhoneError = document.getElementById("PhoneError");
const EmailError = document.getElementById("EmailError");

function submitData(event) {
  event.preventDefault();
  const nameValue = nameInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const emailValue = emailInput.value.trim();
  if (nameValue == "") {
    nameError.classList.add("ErrorFelid");
    nameError.innerText = "Name is required";
  } else {
    nameError.classList.remove("ErrorFelid");
    nameError.innerText = "";
  }
  if (phoneValue == "") {
    PhoneError.classList.add("ErrorFelid");
    PhoneError.innerText = "Phone is Required";
  } else if (!/^\d{10}$/.test(phoneValue)) {
    PhoneError.classList.add("ErrorFelid");
    PhoneError.innerText = "Numeric is Allowed";
  } else {
    PhoneError.classList.remove("ErrorFelid");
    PhoneError.innerText = "";
  }
  if (emailValue == "") {
    EmailError.classList.add("ErrorFelid");
    EmailError.innerText = "Email is Required";
  }else{
    EmailError.classList.remove("ErrorFelid");
    EmailError.innerText = "";
  }
}

function nameInputFocus() {
  nameError.classList.remove("ErrorFelid");
  nameError.innerText = "";
}

function PhoneInputFocus() {
  PhoneError.classList.remove("ErrorFelid");
  PhoneError.innerText = "";
}

function EmailInputFocus() {
  EmailError.classList.remove("ErrorFelid");
  EmailError.innerText = "";
}

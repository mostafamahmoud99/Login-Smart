'use strict'

// global variable

const loginEmail = document.getElementById("loginEmail"),
  loginpass = document.getElementById("loginpass"),
  emailValid = document.getElementById("emailValid"),
  passValid = document.getElementById("passValid"),
  checkInputs = document.getElementById("checkInputs"),
  loginBtn = document.getElementById("loginBtn");
  
let loginContainer = [];

// get localstorge
if (JSON.parse(localStorage.getItem("userStorge")) !== null) {
  loginContainer = JSON.parse(localStorage.getItem("userStorge"));
}

// login

loginBtn.addEventListener("click", function () {
  if (loginEmail.value == "" || loginpass.value == "") {
    const fillMsg = document.getElementById("fillMsg");
    fillMsg.classList.replace("d-none", "d-block");
    return false;
  }

  for (let i = 0; i < loginContainer.length; i++) {
    if (
      loginEmail.value.toLowerCase() == loginContainer[i].email.toLowerCase() &&
      loginpass.value.toLowerCase() == loginContainer[i].password.toLowerCase()
    ) {
      localStorage.setItem("username", loginContainer[i].name);
      loginBtn.setAttribute("href", "home.html");
    } else {
      const checkInputs = document.getElementById("checkInputs");
      checkInputs.classList.replace("d-none", "d-block");
    }
  }
});

// see password

$(".eye").on("click", function () {
  if ($(this).next().attr("type") === "password") {
    $(this).next().attr("type", "text");
  } else {
    $(this).next().attr("type", "password");
  }
});

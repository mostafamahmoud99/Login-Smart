'use strict'
// global variable

const username = document.getElementById("username"),
  useremail = document.getElementById("useremail"),
  userPassword = document.getElementById("userPassword"),
  alertName = document.getElementById("alertName"),
  alertPass = document.getElementById("alertPass"),
  alertEmail = document.getElementById("alertEmail"),
  addBtn = document.getElementById("addBtn");
 let usersContainer = [];

// localstorge
if (localStorage.getItem("userStorge") !== null) {
  usersContainer = JSON.parse(localStorage.getItem("userStorge"));
}
// add sign up

addBtn.addEventListener("click", function () {
  if (validationInputs() === true && isExist() === false) {
    const userData = {
      name: username.value,
      email: useremail.value,
      password: userPassword.value,
    };
    usersContainer.push(userData);
    localStorage.setItem("userStorge", JSON.stringify(usersContainer));
    clearForm();
  }
});

// clear sign up

function clearForm() {
  username.value = "";
  useremail.value = "";
  userPassword.value = "";
  username.classList.remove("is-valid");
  username.classList.remove("is-invalid");
  alertName.style.display = "none";
  useremail.classList.remove("is-valid");
  useremail.classList.remove("is-invalid");
  alertEmail.style.display = "none";
  userPassword.classList.remove("is-valid");
  userPassword.classList.remove("is-invalid");
  alertPass.style.display = "none";
}

// is Exist
function isExist() {
  const isExistMsg = document.getElementById("isExist");
  for (let i = 0; i < usersContainer.length; i++) {
    if (
      usersContainer[i].email.toLowerCase() == useremail.value.toLowerCase()
    ) {
      isExistMsg.classList.replace("d-none", "d-block");
      username.classList.remove("is-valid");
      useremail.classList.remove("is-valid");
      userPassword.classList.remove("is-valid");
      return true;
    }
  }
  isExistMsg.classList.replace("d-block", "d-none");
  return false;
}

// validation

function validationInputs() {
  if (validationName() && validationEmail() && validationPassword()) {
    return true;
  } else {
    return false;
  }
}

// validation Name

function validationName() {
  const regex = /^[A-Za-z]{2,8}$/;
  if (!regex.test(username.value)) {
    alertName.style.display = "block";
    username.classList.add("is-invalid");
    username.classList.remove("is-valid");
    return false;
  } else {
    alertName.style.display = "none";
    username.classList.add("is-valid");
    username.classList.remove("is-invalid");
    return true;
  }
}
username.addEventListener("keyup", validationName);

// validation email

function validationEmail() {
  const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  if (!regex.test(useremail.value)) {
    alertEmail.style.display = "block";
    useremail.classList.add("is-invalid");
    useremail.classList.remove("is-valid");
    return false;
  } else {
    const alertEmail = document.getElementById("alertEmail");
    alertEmail.style.display = "none";
    useremail.classList.add("is-valid");
    useremail.classList.remove("is-invalid");
    return true;
  }
}

useremail.addEventListener("keyup", validationEmail);

// validation password

function validationPassword() {
  const regex = /^[A-Za-z]{1,5}[0-9]{1,5}$/;
  if (!regex.test(userPassword.value)) {
    alertPass.style.display = "block";
    userPassword.classList.add("is-invalid");
    userPassword.classList.remove("is-valid");
    return false;
  } else {
    alertPass.style.display = "none";
    userPassword.classList.add("is-valid");
    userPassword.classList.remove("is-invalid");
    return true;
  }
}

userPassword.addEventListener("keyup", validationPassword);





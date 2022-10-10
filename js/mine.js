const message = document.getElementById("message"),
  logout = document.getElementById("logout"),
  userName = localStorage.getItem("username");

message.innerHTML = `Welcome ${userName}`;


// log out 
logout.addEventListener("click", function () {
  localStorage.removeItem("username");
  window.history.back();
});

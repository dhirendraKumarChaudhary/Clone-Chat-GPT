document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // we can Perform login validation here
    // or we will Redirect to Chat GPT page if login is successful
    window.location.href = "../main/index.html";
  });
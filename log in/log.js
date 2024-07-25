
function togglePasswordVisibility() {
  var passwordField = document.getElementById("password");
  var toggleButton = document.querySelector(".toggle-password");

if (passwordField.type === "password") {
  passwordField.type = "text";
  toggleButton.innerHTML = '<img src="open.png" alt="Eye" width="27px">';
 
} else {
  passwordField.type = "password";
  toggleButton.innerHTML = '<img src="close.png" alt="Lock" width="27px">';
}
}


  function validateEmail(email) {
    var email = document.getElementById("email").value;
    return email.trim() !== "";
  }

 function validatePassword(password) {
    var password = document.getElementById("password").value;
    return password.trim() !== "";
 }

 function validatePasswordAndForm() {
     var emailField = document.getElementById("email");
      var passwordField = document.getElementById("password");

      var enteredEmail = emailField.value.trim();
      var enteredPassword = passwordField.value.trim();

      var emailError = document.getElementById("email-error");
      var passwordError = document.getElementById("password-error");

     var isEmailValid = validateEmail(enteredEmail);
     var isPasswordValid = validatePassword(enteredPassword);


     if (!isEmailValid) {
        emailError.style.display = "block";
         emailError.textContent = "Please enter your email.";
         
         
    } else {
          emailError.style.display = "none";
      }

      
   if (!isPasswordValid) {
         passwordError.style.display = "block";
         passwordError.textContent = "Please enter your password.";
    } else {
         passwordError.style.display = "none";
    }
 }
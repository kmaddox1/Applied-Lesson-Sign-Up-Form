let passwordInput = document.getElementById("password-input");
let confirmInput = document.getElementById("confirm-input");
let minLengthWarning = document.getElementById("min-length");
let maxLengthWarning = document.getElementById("max-length");
let matchWarning = document.getElementById("match");
let buttonElement = document.getElementsByTagName("button")[0];

function validate() {
  //console.log(passwordInput.value);
  let passwordValue = passwordInput.value;
  let confirmValue = confirmInput.value;
  if (passwordValue.length < 6) {
    minLengthWarning.className = "password-req";
  } else{
    minLengthWarning.className = "password-req";
  }
  if (passwordValue.length > 12) {
      minLengthWarning.className = "password-req not-met";
    } else{
      minLengthWarning.className = "password-req";
    }
  }
  if (passwordValue != confirmValue) {
    matchWarning.className = "password-req not-met";
  } else{
    matchWarning.className = "password-req";
  }

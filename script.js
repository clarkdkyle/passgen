// Assignment Code
var generateBtn = document.querySelector("#generate");

// password generate function
function generatePassword() { 
  var retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

var charset = ""
// variables for generatePassword funciton
var length = prompt("How many characters should your password have? 8-128");
var lwrcase = prompt("Would you like to include lower case letters? Yes or No?").toLowerCase()
  if (lwrcase === "yes") {
    charset += "abscefghijklmnopqrstuvwxyz";
  };
var upprcase = prompt("Would you like to include upper case letters? Yes or No?" ).toLowerCase()
  if (upprcase === "yes") {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  };
var symbols = prompt("Would you like to include Symbols? Yes or No?" ).toLowerCase()
  if (symbols === "yes") {
    charset += "!@#$%^&*()_-+=~`:;.,><??/";
  };
var nmbrs = prompt("Would you like to include Numbers? Yes or No?" ).toLowerCase()
  if (nmbrs === "yes") {
    charset += "1234567890";
  };




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function copyToClipboard() {
  // BONUS 
  var copyText = password;
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


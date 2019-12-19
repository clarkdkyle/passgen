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
// variables for generatePassword funciton
var length = prompt("How many characters should your password have? 8-128");
var lwrcase = prompt("Would you like to include lower case letters? Yes or No?").toLowerCase()
  if (lwrcase = "yes") {
    lwrcase = "abcdefghijklmnopqrstuvwxyz"
  } else {lwrcase = ""};
var upprcase = prompt("Would you like to include upper case letters? Yes or No?" ).toLowerCase()
  if (lwrcase = "yes") {
    lwrcase = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
  }  else {lwrcase = ""};
var symbols = prompt("Would you like to include Symbols? Yes or No?" ).toLowerCase()
  if (symbols = "yes") {
    symbols = "!@#$%^&*()_-+=~`:;.,><??/"
  }  else {symbols = ""};
var nmbrs = prompt("Would you like to include Numbers? Yes or No?" ).toLowerCase()
  if (nmbrs = "yes") {
    nmbrs = "1234567890"
  }  else {nmbrs = ""};


var charset = lwrcase + upprcase + symbols

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
